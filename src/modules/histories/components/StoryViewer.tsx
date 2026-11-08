import React, { useState, useEffect, useRef, useCallback } from 'react';
import * as stylex from '@stylexjs/stylex';
import { Loader2 } from 'lucide-react';
import { storyViewerStyles } from './storyViewer.styles';

import type { StoryMediaItem } from '../models/story.types';
import { useStory } from '../hooks/use-history.hook';

import { StoryHeader } from './StoryHeader';
import { StoryMedia } from './StoryMedia';

interface StoryViewerProps {
  isOpen: boolean;
  storyId: string | null;
  onClose: () => void;
}

export const StoryViewer: React.FC<StoryViewerProps> = ({
  isOpen,
  storyId,
  onClose,
}) => {
  const { storyData, isLoading } = useStory(storyId, isOpen);

  const [itemIndex, setItemIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const [videoDurations, setVideoDurations] = useState<Record<number, number>>({});

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const activeItem: StoryMediaItem | undefined = storyData?.items[itemIndex];

  const duration = (activeItem?.type === 'video' && videoDurations[itemIndex])
    ? videoDurations[itemIndex]
    : (activeItem?.duration || 5000);

  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const pausedProgressRef = useRef<number>(0);

  useEffect(() => {
    if (isOpen) {
      setItemIndex(0);
      setProgress(0);
      pausedProgressRef.current = 0;
      setVideoDurations({});
    }
  }, [isOpen, storyId]);

  const handleNext = useCallback(() => {
    setIsPaused(false);
    if (!storyData) return;

    if (itemIndex < storyData.items.length - 1) {
      setItemIndex((prev) => prev + 1);
      setProgress(0);
      pausedProgressRef.current = 0;
    } else {
      onClose();
    }
  }, [storyData, itemIndex, onClose]);

  const handlePrev = useCallback(() => {
    setIsPaused(false);
    if (itemIndex > 0) {
      setItemIndex((prev) => prev - 1);
      setProgress(0);
      pausedProgressRef.current = 0;
    } else {
      setProgress(0);
      pausedProgressRef.current = 0;
    }
  }, [itemIndex]);

  const handleVideoLoadedMetadata = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const realDurationSeconds = e.currentTarget.duration;
    if (!isNaN(realDurationSeconds)) {
      setVideoDurations((prev) => ({
        ...prev,
        [itemIndex]: realDurationSeconds * 1000,
      }));
    }
  };

  useEffect(() => {
    if (!activeItem) return;

    if (activeItem.type === 'video' && videoRef.current) {
      if (isPaused) videoRef.current.pause();
      else videoRef.current.play().catch(() => { });
    }

    if (activeItem.audioUrl && audioRef.current) {
      if (isPaused) audioRef.current.pause();
      else audioRef.current.play().catch(() => { });
    }
  }, [isPaused, activeItem]);

  useEffect(() => {
    if (!isOpen || isLoading || !activeItem || isPaused) return;

    startTimeRef.current = performance.now() - (pausedProgressRef.current * duration) / 100;

    const updateProgress = (now: number) => {
      if (!startTimeRef.current) return;
      const elapsedTime = now - startTimeRef.current;
      const currentProgress = Math.min((elapsedTime / duration) * 100, 100);

      setProgress(currentProgress);
      pausedProgressRef.current = currentProgress;

      if (currentProgress < 100) {
        animationFrameRef.current = requestAnimationFrame(updateProgress);
      } else {
        handleNext();
      }
    };

    animationFrameRef.current = requestAnimationFrame(updateProgress);

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isOpen, isLoading, activeItem, isPaused, duration, handleNext]);

  if (!isOpen) return null;

  return (
    <div {...stylex.props(storyViewerStyles.overlay)} role="dialog" aria-modal="true">
      <div {...stylex.props(storyViewerStyles.modalContainer)}>
        {isLoading ? (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', color: '#fff' }}>
            <Loader2 className="animate-spin" size={40} />
          </div>
        ) : storyData && activeItem ? (
          <div {...stylex.props(storyViewerStyles.mediaContainer)}>
            {/* 1. Contenido Multimedia (Imagen o Video) */}
            <StoryMedia
              activeItem={activeItem}
              videoRef={videoRef}
              isMuted={isMuted}
              isPaused={isPaused}
              onLoadedMetadata={handleVideoLoadedMetadata}
            />

            {/* 2. Header y Barras de Progreso */}
            <StoryHeader
              storyData={storyData}
              itemIndex={itemIndex}
              progress={progress}
              activeItem={activeItem}
              isMuted={isMuted}
              isPaused={isPaused}
              onToggleMute={() => setIsMuted((prev) => !prev)}
              onTogglePause={() => setIsPaused((prev) => !prev)}
              onClose={onClose}
            />

            {/* 3. Caption Inferior Glassmorphism */}
            {activeItem.caption && (
              <div {...stylex.props(storyViewerStyles.captionBox)}>
                <p {...stylex.props(storyViewerStyles.captionText)}>{activeItem.caption}</p>
              </div>
            )}

            {/* 4. Áreas Táctiles */}
            <div
              {...stylex.props(storyViewerStyles.touchAreaLeft)}
              role="button"
              tabIndex={0}
              aria-label="Historia anterior"
              onClick={handlePrev}
              onMouseDown={() => setIsPaused(true)}
              onMouseUp={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
            />
            <div
              {...stylex.props(storyViewerStyles.touchAreaRight)}
              role="button"
              tabIndex={0}
              aria-label="Siguiente historia"
              onClick={handleNext}
              onMouseDown={() => setIsPaused(true)}
              onMouseUp={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};