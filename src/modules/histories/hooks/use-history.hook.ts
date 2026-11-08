import { useState, useEffect } from 'react';

import type { StoryGroup } from '../models/story.types';
import { storyService } from '../services/story.service';

export const useStory = (storyId: string | null, isOpen: boolean) => {
  const [storyData, setStoryData] = useState<StoryGroup | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen || !storyId) {
      setStoryData(null);
      return;
    }

    let isMounted = true;
    setIsLoading(true);
    setError(null);

    storyService
      .getStoryDetail(storyId)
      .then((data) => {
        if (isMounted) setStoryData(data);
      })
      .catch((err) => {
        if (isMounted) setError(err.message);
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [storyId, isOpen]);

  return { storyData, isLoading, error };
};