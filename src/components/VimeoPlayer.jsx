import React, { useEffect, useMemo, useRef } from 'react';

const toPlayerUrl = (value) => {
  if (!value) return '';

  if (value.includes('player.vimeo.com/video/')) {
    return value;
  }

  const match = value.match(/vimeo\.com\/(?:.*\/)?(\d+)(?:$|[?#])/);
  return match ? `https://player.vimeo.com/video/${match[1]}` : value;
};

export const VimeoPlayer = ({ url, isVisible = false, title = 'Reel preview' }) => {
  const iframeRef = useRef(null);
  const src = useMemo(() => toPlayerUrl(url), [url]);

  useEffect(() => {
    if (!iframeRef.current || !isVisible) return;
    iframeRef.current.focus();
  }, [isVisible]);

  if (!src) return null;

  const separator = src.includes('?') ? '&' : '?';
  const embedUrl = `${src}${separator}autoplay=1&muted=1&playsinline=1&title=0&byline=0&portrait=0&dnt=1`;

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-black">
      <iframe
        ref={iframeRef}
        src={isVisible ? embedUrl : ''}
        title={title}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  );
};
