import type { ReactNode } from 'react';

export interface NavActionItem {
  id: string;
  label: string;
  icon: ReactNode;
  badgeCount?: number;
}

export interface NavbarProps {
  onSearchChange?: (query: string) => void;
  onActionClick?: (actionId: string) => void;
}