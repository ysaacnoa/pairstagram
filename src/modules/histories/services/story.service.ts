import type { StoryGroup } from '../models/story.types';

export const storyService = {
  async getStoriesIndex() {
    const response = await fetch('/data/greis/index.json');
    if (!response.ok) throw new Error('Error al cargar el índice de historias');
    return response.json();
  },

  async getStoryDetail(storyId: string): Promise<StoryGroup> {
    const response = await fetch(`/data/greis/${storyId}.json`);
    if (!response.ok) throw new Error(`Error al cargar la historia: ${storyId}`);
    return response.json();
  },
};