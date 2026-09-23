import React from 'react';
import * as stylex from '@stylexjs/stylex';
import { profileStyles } from './profile.styles';
import { Button } from '@/components/ui/button/Button';
import type { ProfileHeaderProps } from './profile.types';
import { USER_PROFILE, MOCK_STORIES } from '../../mock/mock-data';

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  profile = USER_PROFILE,
  stories = MOCK_STORIES,
  onPrimaryActionClick,
  onStoryClick,
}) => {
  return (
    <section {...stylex.props(profileStyles.wrapper)}>
      {/* Información del Perfil */}
      <div {...stylex.props(profileStyles.profileMain)}>
        <div {...stylex.props(profileStyles.avatarContainer)}>
          <div {...stylex.props(profileStyles.avatarRing)}>
            <img
              src={profile.avatarUrl}
              alt={profile.username}
              {...stylex.props(profileStyles.avatarImg)}
            />
          </div>
        </div>

        <div {...stylex.props(profileStyles.infoContainer)}>
          <div {...stylex.props(profileStyles.usernameRow)}>
            <h2 {...stylex.props(profileStyles.username)}>
              {profile.username}
            </h2>
            <Button variant="primary" size="sm" onClick={onPrimaryActionClick}>
              Te amo ❤️
            </Button>
          </div>

          <div {...stylex.props(profileStyles.statsRow)}>
            <span {...stylex.props(profileStyles.statItem)}>
              <strong {...stylex.props(profileStyles.statNumber)}>
                {profile.postsCount}
              </strong>
              publicaciones
            </span>
            <span {...stylex.props(profileStyles.statItem)}>
              <strong {...stylex.props(profileStyles.statNumber)}>
                {profile.followersCount}
              </strong>
              amor
            </span>
            <span {...stylex.props(profileStyles.statItem)}>
              <strong {...stylex.props(profileStyles.statNumber)}>
                {profile.followingCount}
              </strong>
              juntos
            </span>
          </div>

          <div {...stylex.props(profileStyles.bioContainer)}>
            <span {...stylex.props(profileStyles.fullName)}>
              {profile.name}
            </span>
            <p {...stylex.props(profileStyles.bioText)}>{profile.bio}</p>
          </div>
        </div>
      </div>

      {/* Highlights / Historias */}
      <div {...stylex.props(profileStyles.storiesRow)}>
        {stories.map((story) => (
          <button
            key={story.id}
            type="button"
            onClick={() => onStoryClick?.(story.id)}
            {...stylex.props(profileStyles.storyItem)}
          >
            <div {...stylex.props(profileStyles.storyRing)}>
              <img
                src={story.coverUrl}
                alt={story.title}
                {...stylex.props(profileStyles.storyImg)}
              />
            </div>
            <span {...stylex.props(profileStyles.storyTitle)}>
              {story.title}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};