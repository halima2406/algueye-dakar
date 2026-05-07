import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * À chaque changement de route, remet la page en haut.
 * Sauf si l'URL contient une ancre (#xxx) — dans ce cas on laisse le navigateur
 * gérer le scroll vers l'ancre.
 */
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return; // L'utilisateur veut aller à une ancre, on ne scrolle pas en haut
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
