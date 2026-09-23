import { Badge } from '@/components/ui/badge/Badge';
import { Button } from '@/components/ui/button/Button';
import { Input } from '@/components/ui/input/Input';
import * as stylex from '@stylexjs/stylex';
import { Heart, MessageCircle, PlusSquare } from 'lucide-react';
import React from 'react';
import { navbarStyles } from './navbar.styles';
import type { NavActionItem, NavbarProps } from './navbar.types';

export const Navbar: React.FC<NavbarProps> = ({
  onSearchChange,
  onActionClick,
}) => {
  const navActions: NavActionItem[] = [
    {
      id: 'create',
      label: 'Crear publicación',
      icon: <PlusSquare size={22} strokeWidth={1.8} />,
    },
    {
      id: 'activity',
      label: 'Notificaciones y amor',
      icon: <Heart size={22} strokeWidth={1.8} />,
      badgeCount: 1,
    },
    {
      id: 'messages',
      label: 'Mensajes privados',
      icon: <MessageCircle size={22} strokeWidth={1.8} />,
    },
  ];

  return (
    <header {...stylex.props(navbarStyles.root)}>
      <div {...stylex.props(navbarStyles.container)}>
        <h1 {...stylex.props(navbarStyles.logo)}>PairStagram</h1>

        {/* Buscador Reutilizable */}
        <div {...stylex.props(navbarStyles.searchWrapper)}>
          <Input
            placeholder="Buscar en nuestros recuerdos..."
            onChange={(e) => onSearchChange?.(e.target.value)}
          />
        </div>

        {/* Acciones del Navbar utilizando UI Components */}
        <nav {...stylex.props(navbarStyles.navActions)}>
          {navActions.map((action) => (
            <div
              key={action.id}
              {...stylex.props(navbarStyles.actionButtonWrapper)}
            >
              <Button
                variant="ghost"
                size="sm"
                aria-label={action.label}
                onClick={() => onActionClick?.(action.id)}
              >
                {action.icon}
              </Button>

              {action.badgeCount && action.badgeCount > 0 ? (
                <div {...stylex.props(navbarStyles.badgePosition)}>
                  <Badge variant="heart">{action.badgeCount}</Badge>
                </div>
              ) : null}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};