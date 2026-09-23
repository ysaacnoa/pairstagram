import React, { useState } from 'react';
import * as stylex from '@stylexjs/stylex';
import { Grid, Heart, MessageCircle } from 'lucide-react';
import { feedStyles } from './feed.styles';
import type { FeedGridProps } from './feed.types';

export const FeedGrid: React.FC<FeedGridProps> = ({ posts, onPostClick }) => {
  const [hoveredPostId, setHoveredPostId] = useState<string | null>(null);

  return (
    <section {...stylex.props(feedStyles.container)}>
      <div {...stylex.props(feedStyles.tabHeader)}>
        <button type="button" {...stylex.props(feedStyles.activeTab)}>
          <Grid size={14} />
          <span>PUBLICACIONES</span>
        </button>
      </div>

      <div {...stylex.props(feedStyles.grid)}>
        {posts.map((post) => {
          const isHovered = hoveredPostId === post.id;

          return (
            <article
              key={post.id}
              onClick={() => onPostClick?.(post)}
              onMouseEnter={() => setHoveredPostId(post.id)}
              onMouseLeave={() => setHoveredPostId(null)}
              {...stylex.props(feedStyles.gridItem)}
            >
              <img
                src={post.imageUrl}
                alt={post.caption}
                loading="lazy"
                {...stylex.props(
                  feedStyles.image,
                  isHovered && feedStyles.imageHovered,
                )}
              />

              <div {...stylex.props(feedStyles.overlay)}>
                <div {...stylex.props(feedStyles.statItem)}>
                  <Heart size={20} fill="#ffffff" color="#ffffff" />
                  <span>{post.likesCount}</span>
                </div>
                <div {...stylex.props(feedStyles.statItem)}>
                  <MessageCircle size={20} fill="#ffffff" color="#ffffff" />
                  <span>{post.commentsCount}</span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};