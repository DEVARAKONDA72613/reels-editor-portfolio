import { useEffect, useState } from 'react';

export const useScrollSpy = (ids, options = {}) => {
  const [activeId, setActiveId] = useState(ids[0] ?? '');

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        root: null,
        threshold: [0.2, 0.4, 0.6, 0.8],
        rootMargin: '-12% 0px -45% 0px',
        ...options
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [ids, options]);

  return activeId;
};
