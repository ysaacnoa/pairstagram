import React from 'react';
import * as stylex from '@stylexjs/stylex';
import { Volume2, VolumeX, X, Play, Pause } from 'lucide-react';
import { storyViewerStyles } from './storyViewer.styles';
import type { StoryMediaItem } from '../models/story.types';

interface StoryHeaderProps {
  storyData: {
    title: string;
    coverUrl: string;
    items: StoryMediaItem[];
  };
  itemIndex: number;
  progress: number;
  activeItem?: StoryMediaItem;
  isMuted: boolean;
  isPaused: boolean;
  onToggleMute: () => void;
  onTogglePause: () => void;
  onClose: () => void;
}

export const StoryHeader: React.FC<StoryHeaderProps> = ({
  storyData,
  itemIndex,
  progress,
  activeItem,
  isMuted,
  isPaused,
  onToggleMute,
  onTogglePause,
  onClose,
}) => {
  const isVideo = activeItem?.type === 'video';

  return (
    <div {...stylex.props(storyViewerStyles.headerGradientArea)}>
      {/* Barras de Progreso */}
      <div {...stylex.props(storyViewerStyles.progressContainer)}>
        {storyData.items.map((_, idx) => {
          let width = '0%';
          if (idx < itemIndex) width = '100%';
          if (idx === itemIndex) width = `${progress}%`;

          return (
            <div key={idx} {...stylex.props(storyViewerStyles.progressBarTrack)}>
              <div {...stylex.props(storyViewerStyles.progressBarFill)} style={{ width }} />
            </div>
          );
        })}
      </div>

      {/* Cabecera (Avatar, Título y Botones) */}
      <div {...stylex.props(storyViewerStyles.header)}>
        <div {...stylex.props(storyViewerStyles.userInfo)}>
          <img src={storyData.coverUrl} alt={storyData.title} {...stylex.props(storyViewerStyles.avatar)} />
          <div {...stylex.props(storyViewerStyles.userMeta)}>
            <span {...stylex.props(storyViewerStyles.title)}>{storyData.title}</span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
          {/* Botón de Pausa / Reproducción (Aplica para imágenes y videos) */}
          <button
            onClick={onTogglePause}
            aria-label={isPaused ? 'Reproducir historia' : 'Pausar historia'}
            {...stylex.props(storyViewerStyles.actionButton)}
          >
            {isPaused ? <Play size={20} /> : <Pause size={20} />}
          </button>

          {/* El botón de volumen solo aparece si el item actual es un video */}
          {isVideo && (
            <button
              onClick={onToggleMute}
              aria-label={isMuted ? 'Quitar silencio' : 'Poner silencio'}
              {...stylex.props(storyViewerStyles.actionButton)}
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
          )}

          <button
            onClick={onClose}
            aria-label="Cerrar historia"
            {...stylex.props(storyViewerStyles.actionButton)}
          >
            <X size={22} />
          </button>
        </div>
      </div>
    </div>
  );
};