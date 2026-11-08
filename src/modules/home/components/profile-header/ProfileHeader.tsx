import React, { useEffect } from 'react';
import * as stylex from '@stylexjs/stylex';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { profileStyles } from './profile.styles';
import { ProfileInfoCard } from '../info-card';
import { USER_PROFILE } from '@/mock/mock-data';
import { StoryViewer } from '@/modules/histories/components/StoryViewer';
import { useStoriesIndex } from '@/modules/histories/hooks/use-histories-index.hook';
import { useStoriesScroll } from '../../hooks/use-stories-scroll.hook';
import type { StoryHighlight } from '@/modules/home/models/profile.types';

interface ProfileHeaderProps {
  onPrimaryActionClick?: () => void;
  onStoryClick?: (storyId: string) => void;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  onPrimaryActionClick,
  onStoryClick,
}) => {
  const profile = USER_PROFILE;

  const {
    stories,
    loadingStoryId,
    selectedStoryId,
    isViewerOpen,
    handleStoryClick,
    handleCloseViewer,
  } = useStoriesIndex();

  const {
    containerRef,
    canScrollLeft,
    canScrollRight,
    scrollLeft,
    scrollRight,
    checkScrollState,
  } = useStoriesScroll();

  // Recomprobar visibilidad de botones al cargar o actualizar historias
  useEffect(() => {
    checkScrollState();
  }, [stories, checkScrollState]);

  const onStoryItemClick = (storyId: string) => {
    onStoryClick?.(storyId);
    handleStoryClick(storyId);
  };

  return (
    <section {...stylex.props(profileStyles.wrapper)}>
      {/* SVG Gradiente Global para el Borde de Historias */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
        <defs>
          <linearGradient id="ig-story-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f09433" />
            <stop offset="25%" stopColor="#e6683c" />
            <stop offset="50%" stopColor="#dc2743" />
            <stop offset="75%" stopColor="#cc2366" />
            <stop offset="100%" stopColor="#bc1888" />
          </linearGradient>
        </defs>
      </svg>

      {/* 1. Tarjeta Romántica de Perfil (Foto 200px, Contador de amor & Biografía) */}
      <ProfileInfoCard
        username={profile.username}
        name={profile.name}
        bio={profile.bio}
        avatarUrl={profile.avatarUrl}
        postsCount={profile.postsCount}
        onPrimaryActionClick={onPrimaryActionClick}
      />

      {/* 2. Fila de Historias Destacadas */}
      <div {...stylex.props(profileStyles.storiesContainer)}>
        {canScrollLeft && (
          <button
            type="button"
            onClick={scrollLeft}
            aria-label="Ver historias anteriores"
            {...stylex.props(profileStyles.scrollButton, profileStyles.scrollButtonLeft)}
          >
            <ChevronLeft size={20} />
          </button>
        )}

        <div ref={containerRef} {...stylex.props(profileStyles.storiesRow)}>
          {stories.map((story: StoryHighlight) => {
            const isLoading = loadingStoryId === story.id;

            return (
              <button
                key={story.id}
                type="button"
                onClick={() => onStoryItemClick(story.id)}
                {...stylex.props(profileStyles.storyItem)}
              >
                <div {...stylex.props(profileStyles.storyWrapper)}>
                  <img
                    src={story.coverUrl}
                    alt={story.title}
                    {...stylex.props(profileStyles.storyImg)}
                  />

                  <svg
                    viewBox="0 0 100 100"
                    {...stylex.props(
                      profileStyles.storySvg,
                      isLoading && profileStyles.storySvgAnimated,
                    )}
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="43"
                      fill="none"
                      stroke="url(#ig-story-gradient)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      {...stylex.props(!isLoading && profileStyles.storyCircleBase)}
                    />
                  </svg>
                </div>

                <span {...stylex.props(profileStyles.storyTitle)}>{story.title}</span>
              </button>
            );
          })}
        </div>

        {canScrollRight && (
          <button
            type="button"
            onClick={scrollRight}
            aria-label="Ver más historias"
            {...stylex.props(profileStyles.scrollButton, profileStyles.scrollButtonRight)}
          >
            <ChevronRight size={20} />
          </button>
        )}
      </div>

      {/* 3. Visor de Historias Modal */}
      <StoryViewer
        isOpen={isViewerOpen}
        storyId={selectedStoryId}
        onClose={handleCloseViewer}
      />
    </section>
  );
};