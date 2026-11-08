import React from 'react';
import * as stylex from '@stylexjs/stylex';
import { Grid, Heart, Sparkles, Palette, Clock } from 'lucide-react';
import { feedStyles } from './feed.styles';
import type { FeedGridProps } from '@/modules/home/models/feed.types';

export const FeedGrid: React.FC<FeedGridProps> = () => {
  return (
    <section {...stylex.props(feedStyles.container)}>
      {/* Pestaña Única Decorativa */}
      <div {...stylex.props(feedStyles.tabHeader)}>
        <button type="button" {...stylex.props(feedStyles.activeTab)}>
          <Grid size={16} />
          <span>Recuerdos</span>
        </button>
      </div>

      {/* Tarjeta Romántica Work in Progress */}
      <div {...stylex.props(feedStyles.wipCard)}>
        <div {...stylex.props(feedStyles.iconBadge)}>
          <Sparkles size={34} />
        </div>

        <h3 {...stylex.props(feedStyles.wipTitle)}>
          Creando Nuestro Álbum Especial ✨
        </h3>

        <p {...stylex.props(feedStyles.wipSubtitle)}>
          Estamos preparando una galería llena de momentos inolvidables
        </p>

        {/* Fila con Detalles y Metáforas Románticas */}
        <div {...stylex.props(feedStyles.detailsRow)}>
          <span {...stylex.props(feedStyles.detailItem)}>
            <Palette size={16} color="#e6683c" />
            Diseñando con amor
          </span>
          <span {...stylex.props(feedStyles.detailItem)}>
            <Heart size={16} fill="#ff4d4d" color="#ff4d4d" />
            Escribiendo recuerdos
          </span>
          <span {...stylex.props(feedStyles.detailItem)}>
            <Clock size={16} color="#e6683c" />
            Próximamente
          </span>
        </div>
      </div>
    </section>
  );
};