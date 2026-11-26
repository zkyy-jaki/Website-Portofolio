import { useEffect, useState } from 'react';

export function useActiveSection(
  sectionIds: readonly string[],
  offset = 180
) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);

      const scrollPosition = window.scrollY + offset;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return { activeSection, setActiveSection, isScrolled };
}
