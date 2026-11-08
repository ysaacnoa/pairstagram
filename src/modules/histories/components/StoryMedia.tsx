import React, { type RefObject } from 'react';
import * as stylex from '@stylexjs/stylex';
import { BaseVideo } from './BaseVideo';
import { storyViewerStyles } from './storyViewer.styles';
import type { StoryMediaItem } from '../models/story.types';

interface StoryMediaProps {
  activeItem: StoryMediaItem;
  videoRef: RefObject<HTMLVideoElement | null>;
  isMuted: boolean;
  isPaused: boolean;
  onLoadedMetadata: (e: React.SyntheticEvent<HTMLVideoElement>) => void;
}

export const StoryMedia: React.FC<StoryMediaProps> = ({
  activeItem,
  videoRef,
  isMuted,
  isPaused,
  onLoadedMetadata,
}) => {
  if (activeItem.type === 'video') {
    return (
      <BaseVideo
        ref={videoRef}
        src={activeItem.url}
        playsInline
        autoPlay
        muted={isMuted}
        paused={isPaused}
        onLoadedMetadata={onLoadedMetadata}
        {...stylex.props(storyViewerStyles.storyImage)}
      />
    );
  }

  return (
    <img
      src={activeItem.url}
      alt={activeItem.caption || ''}
      {...stylex.props(storyViewerStyles.storyImage)}
    />
  );
};