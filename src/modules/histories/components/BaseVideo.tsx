import React, { useCallback, useEffect, useRef } from 'react';

export type BaseVideoProps = React.VideoHTMLAttributes<HTMLVideoElement> & {
  src: string;
  autoPlay?: boolean;
  muted?: boolean;
  paused?: boolean;
  playsInline?: boolean;
};

export const BaseVideo = React.forwardRef<HTMLVideoElement, BaseVideoProps>((props, ref) => {
  const { autoPlay, muted, paused, playsInline, style, ...rest } = props;
  const localRef = useRef<HTMLVideoElement | null>(null);

  const mergeRef = useCallback((node: HTMLVideoElement | null) => {
    localRef.current = node;
    if (typeof ref === 'function') {
      ref(node);
    } else if (ref) {
      ref.current = node;
    }
  }, [ref]);

  useEffect(() => {
    const video = localRef.current;
    if (video && paused !== undefined) {
      if (paused) {
        video.pause();
      } else {
        void video.play().catch(() => undefined);
      }
    }
  }, [paused]);

  return (
    <video
      ref={mergeRef}
      {...rest}
      autoPlay={autoPlay}
      muted={muted}
      playsInline={playsInline}
      style={style}
    />
  );
});

BaseVideo.displayName = 'BaseVideo';