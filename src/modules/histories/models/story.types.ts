export interface StoryMediaItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  duration?: number;
  audioUrl?: string;
  caption?: string;
}

export interface StoryGroup {
  id: string;
  title: string;
  coverUrl: string;
  items: StoryMediaItem[];
}

export interface StoryViewerProps {
  isOpen: boolean;
  stories: StoryGroup[];
  initialStoryIndex?: number;
  onClose: () => void;
}