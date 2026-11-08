export interface PostItem {
  id: string;
  imageUrl: string;
  caption: string;
  likesCount: number;
  commentsCount: number;
  location?: string;
  date?: string;
}

export interface FeedGridProps {
  posts: PostItem[];
  onPostClick?: (post: PostItem) => void;
}