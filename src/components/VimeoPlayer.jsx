import React, { useEffect, useRef } from 'react';

export const VimeoPlayer = ({ url, isVisible, onReady }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    if (!isVisible || !url || !iframeRef.current) return;

    const videoUrl = `${url}?autoplay=1&muted=1&playsinline=1&background=0`;
    iframeRef.current.src = videoUrl;
    onReady?.();
  }, [url, isVisible, onReady]);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg">
      {isVisible ? (
        <iframe
          ref={iframeRef}
          title="vimeo-player"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="h-full w-full border-0"
        />
      ) : (
        <div className="h-full w-full animate-pulse bg-zinc-900" />
      )}
    </div>
  );
};
