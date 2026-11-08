import React, { useState } from 'react';
import * as stylex from '@stylexjs/stylex';
import confetti from 'canvas-confetti';
import { Heart } from 'lucide-react';
import { profileInfoStyles } from './info-card.styles';
import { Button } from '@/components/ui/button/Button';
import { useLoveCounter } from '../../hooks/use-love-counter';

interface ProfileInfoCardProps {
  username: string;
  name: string;
  bio: string;
  avatarUrl: string;
  postsCount: number;
  onPrimaryActionClick?: () => void;
}

export const ProfileInfoCard: React.FC<ProfileInfoCardProps> = ({
  username,
  name,
  bio,
  avatarUrl,
  postsCount,
  onPrimaryActionClick,
}) => {
  const { days, hours, minutes, seconds } = useLoveCounter('2025-04-01T00:00:00');
  const [isAvatarExpanded, setIsAvatarExpanded] = useState(false);

  const handleAvatarToggle = (expand: boolean) => {
    if ('startViewTransition' in document) {
      (document as unknown as { startViewTransition: (cb: () => void) => void }).startViewTransition(() => {
        setIsAvatarExpanded(expand);
      });
    } else {
      setIsAvatarExpanded(expand);
    }
  };

  // Animación de confeti de corazones
  const triggerHeartConfetti = (e: React.MouseEvent) => {
    onPrimaryActionClick?.();

    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 35,
      spread: 70,
      origin: { x, y },
      colors: ['#ff4d4d', '#ff758c', '#ff7eb3', '#e6005c'],
      shapes: ['circle'],
      scalar: 1.2,
      ticks: 120,
    });
  };

  return (
    <>
      <div {...stylex.props(profileInfoStyles.profileMain)}>
        {/* Foto Thumbnail con View Transition al hacer clic */}
        <div
          {...stylex.props(profileInfoStyles.avatarContainer)}
          onClick={() => handleAvatarToggle(true)}
          role="button"
          tabIndex={0}
          aria-label="Expandir foto de perfil"
        >
          <div {...stylex.props(profileInfoStyles.avatarRing)}>
            <img
              src={avatarUrl}
              alt={username}
              {...stylex.props(
                profileInfoStyles.avatarImg,
                // Si el modal está abierto, desactivamos temporalmente el transition-name del thumbnail para evitar duplicados
                isAvatarExpanded && profileInfoStyles.avatarImgInactive
              )}
            />
          </div>
        </div>

        {/* Información, Contador y Biografía */}
        <div {...stylex.props(profileInfoStyles.infoContainer)}>
          <div {...stylex.props(profileInfoStyles.usernameRow)}>
            <h2 {...stylex.props(profileInfoStyles.username)}>{username}</h2>


          </div>

          {/* Contador Dinámico en Tiempo Real */}
          <div {...stylex.props(profileInfoStyles.loveCounterBadge)}>
            <span {...stylex.props(profileInfoStyles.loveCounterNumber)}>
              {days}d : {hours}h : {minutes}m : {seconds}s
            </span>
            <span {...stylex.props(profileInfoStyles.loveCounterLabel)}>
              juntos y contando... 🥰
            </span>
          </div>

          <div {...stylex.props(profileInfoStyles.statsRow)}>
            <span {...stylex.props(profileInfoStyles.statItem)}>
              <strong {...stylex.props(profileInfoStyles.statNumber)}>{postsCount}</strong>
              recuerdos
            </span>
            <span {...stylex.props(profileInfoStyles.statItem)}>
              <strong {...stylex.props(profileInfoStyles.statNumber)}>Infinito</strong>
              amor
            </span>
            <span {...stylex.props(profileInfoStyles.statItem)}>
              <strong {...stylex.props(profileInfoStyles.statNumber)}>Para siempre</strong>
              juntos
            </span>
          </div>

          <div {...stylex.props(profileInfoStyles.bioContainer)}>
            <span {...stylex.props(profileInfoStyles.fullName)}>{name}
              <Button variant="primary" size="sm" onClick={triggerHeartConfetti}>
                <Heart size={16} fill="currentColor" style={{ marginRight: '6px' }} />
                Te amo ❤️
              </Button>
            </span>
            <p {...stylex.props(profileInfoStyles.bioText)}>{bio}</p>
          </div>
        </div>
      </div>

      {/* Modal con Fondo Oscuro y Foto en Tamaño/Proporción Original */}
      {isAvatarExpanded && (
        <div
          {...stylex.props(profileInfoStyles.modalBackdrop)}
          onClick={() => handleAvatarToggle(false)}
          role="dialog"
          aria-modal="true"
        >
          <img
            src={avatarUrl}
            alt={username}
            {...stylex.props(profileInfoStyles.expandedAvatarImg)}
          />
        </div>
      )}
    </>
  );
};