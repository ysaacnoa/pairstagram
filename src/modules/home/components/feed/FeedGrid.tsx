import React, { useState } from 'react';
import * as stylex from '@stylexjs/stylex';
import { Grid, Heart, Sparkles, Calendar, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import { feedStyles } from './feed.styles';
import type { FeedGridProps } from '@/modules/home/models/feed.types';

const journalEntries = [
  {
    day: 1,
    message: "Agradezco que me hayas hecho ver que no todo tiene que tener una razón, que lo analítico y lo emocional pueden convivir juntos.",
    tag: "Reflexión del día"
  },
];

export const FeedGrid: React.FC<FeedGridProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentEntry = journalEntries[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : journalEntries.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < journalEntries.length - 1 ? prev + 1 : 0));
  };

  return (
    <section {...stylex.props(feedStyles.container)}>
      <div {...stylex.props(feedStyles.tabHeader)}>
        <button type="button" {...stylex.props(feedStyles.activeTab)}>
          <Grid size={16} />
          <span>Recuerdos</span>
        </button>
      </div>

      <div {...stylex.props(feedStyles.wipCard)}>
        <div className="flex items-center justify-between w-full mb-2">
          <div {...stylex.props(feedStyles.iconBadge)}>
            <BookOpen size={24} />
          </div>

          {journalEntries.length > 1 && (
            <div className="flex items-center gap-1 bg-neutral-100/80 p-1 rounded-full">
              <button 
                type="button" 
                onClick={handlePrev}
                className="p-1 rounded-full hover:bg-white text-neutral-600 transition-colors"
                aria-label="Día anterior"
              >
                <ChevronLeft size={16} />
              </button>
              <span className="text-xs font-medium text-neutral-500 px-1">
                {currentIndex + 1} / {journalEntries.length}
              </span>
              <button 
                type="button" 
                onClick={handleNext}
                className="p-1 rounded-full hover:bg-white text-neutral-600 transition-colors"
                aria-label="Día siguiente"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>

        <div className="flex items-center gap-1.5 text-xs font-medium text-orange-600 mb-1">
          <Calendar size={14} />
          <span>Día {currentEntry.day}</span>
        </div>

        <p {...stylex.props(feedStyles.wipSubtitle)}>
          "{currentEntry.message}"
        </p>

        <div {...stylex.props(feedStyles.detailsRow)}>
          <span {...stylex.props(feedStyles.detailItem)}>
            <Sparkles size={16} color="#e6683c" />
            {currentEntry.tag}
          </span>
          <span {...stylex.props(feedStyles.detailItem)}>
            <Heart size={16} fill="#ff4d4d" color="#ff4d4d" />
            Creciendo juntos
          </span>
        </div>
      </div>
    </section>
  );
};