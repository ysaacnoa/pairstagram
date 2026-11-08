import { useState, useRef, useEffect, useCallback } from 'react';

export const useStoriesScroll = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScrollState = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    // Margen de tolerancia de 5px para subpíxeles
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    checkScrollState();
    container.addEventListener('scroll', checkScrollState, { passive: true });
    window.addEventListener('resize', checkScrollState);

    return () => {
      container.removeEventListener('scroll', checkScrollState);
      window.removeEventListener('resize', checkScrollState);
    };
  }, [checkScrollState]);

  const handleScroll = (direction: 'left' | 'right') => {
    const container = containerRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth * 0.75;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth', // Animación nativa acelerada por GPU
    });
  };

  return {
    containerRef,
    canScrollLeft,
    canScrollRight,
    scrollLeft: () => handleScroll('left'),
    scrollRight: () => handleScroll('right'),
    checkScrollState,
  };
};