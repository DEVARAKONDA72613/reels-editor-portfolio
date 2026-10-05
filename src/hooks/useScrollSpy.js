import { useEffect, useState } from 'react';

export const useScrollSpy = (ids) => {
  const [activeId, setActiveId] = useState(ids[0] || '');

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

        if (visible[0]) setActiveId(visible[0].target.id);
      },
      {
        threshold: [0.15, 0.35, 0.55, 0.75],
        rootMargin: '-12% 0px -55% 0px',
      }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [ids.join('|')]);

  return activeId;
};
