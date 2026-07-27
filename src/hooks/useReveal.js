import { useEffect, useRef } from 'react';

/**
 * Agrega la clase "in" a los elementos con clase "reveal" dentro del ref
 * cuando entran en el viewport, replicando el efecto del template original.
 */
export default function useReveal() {
  const containerRef = useRef(null);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const targets = node.classList.contains('reveal')
      ? [node, ...node.querySelectorAll('.reveal')]
      : [...node.querySelectorAll('.reveal')];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
          }
        });
      },
      { threshold: 0.15 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return containerRef;
}
