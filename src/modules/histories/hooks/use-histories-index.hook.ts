import { useState, useEffect } from 'react';

import type { StoryHighlight } from '@/modules/home/models/profile.types';
import { storyService } from '../services/story.service';

export const useStoriesIndex = () => {
  const [stories, setStories] = useState<StoryHighlight[]>([]);
  const [isLoadingIndex, setIsLoadingIndex] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    storyService
      .getStoriesIndex()
      .then((data) => {
        if (isMounted) {
          setStories(data);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message);
        }
      })
      .finally(() => {
        if (isMounted) {
          setIsLoadingIndex(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const [loadingStoryId, setLoadingStoryId] = useState<string | null>(null);
  const [selectedStoryId, setSelectedStoryId] = useState<string | null>(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const handleStoryClick = (storyId: string) => {
    setLoadingStoryId(storyId);

    // Animación de carga de 1.2s en el anillo de la historia antes de abrir
    setTimeout(() => {
      setLoadingStoryId(null);
      setSelectedStoryId(storyId);
      setIsViewerOpen(true);
    }, 1200);
  };

  const handleCloseViewer = () => {
    setIsViewerOpen(false);
    setSelectedStoryId(null);
  };

  return {
    stories,
    isLoadingIndex,
    error,
    loadingStoryId,
    selectedStoryId,
    isViewerOpen,
    handleStoryClick,
    handleCloseViewer,
  };
};