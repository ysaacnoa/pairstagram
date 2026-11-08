export interface UserProfile {
  username: string;
  name: string;
  bio: string;
  avatarUrl: string;
  postsCount: number;
  followersCount: string;
  followingCount: string;
}

export interface StoryHighlight {
  id: string;
  title: string;
  coverUrl: string;
}

export interface ProfileHeaderProps {
  profile?: UserProfile;
  stories?: StoryHighlight[];
  onPrimaryActionClick?: () => void;
  onStoryClick?: (storyId: string) => void;
}