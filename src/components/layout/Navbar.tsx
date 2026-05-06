import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Phone, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useFavorites } from '@/context/FavoritesContext';

const navLinks = [
  { name: 'Accueil', href: '#' },
  { name: 'À Propos', href: '#about' },
  { name: 'Collections', href: '#gallery' },
  { name: 'Événements', href: '#events' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { count } = useFavorites();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 py-4 shadow-xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center"
        >
          <a href="#" className="block" aria-label="ALGUEYE DAKAR - Accueil">
            <img
              src="/images/algueye/logo-blanc.png"
              alt="ALGUEYE DAKAR"
              className="h-16 md:h-20 w-auto object-contain"
            />
          </a>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/80 hover:text-[#D4AF37] transition-colors text-sm uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}

          {/* Lien Favoris avec compteur (desktop) */}
          <FavoritesLink count={count} variant="desktop" />

          <a
            href="https://wa.me/221781493510"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D4AF37] text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors"
          >
            Rendez-vous
          </a>
        </div>

        {/* Mobile Header Right (cœur compact + burger) */}
        <div className="md:hidden flex items-center gap-4">
          <FavoritesLink count={count} variant="mobile-compact" />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col space-y-4 px-6 py-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-lg font-light tracking-widest"
                >
                  {link.name}
                </a>
              ))}
              {/* Lien Favoris dans menu mobile (texte) */}
              <a
                href="#favorites"
                onClick={() => setIsOpen(false)}
                className="text-white text-lg font-light tracking-widest flex items-center gap-3"
              >
                <Heart size={20} className={count > 0 ? 'fill-red-500 stroke-red-500' : 'stroke-white'} />
                Favoris
                {count > 0 && (
                  <span className="text-[#D4AF37] text-sm">({count})</span>
                )}
              </a>
              <div className="pt-4 flex space-x-6">
                <Instagram className="text-white/60" />
                <Phone className="text-white/60" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// ─── Lien Favoris avec compteur ─────────────────────────────────────────
interface FavoritesLinkProps {
  count: number;
  variant: 'desktop' | 'mobile-compact';
}

const FavoritesLink: React.FC<FavoritesLinkProps> = ({ count, variant }) => {
  const hasFavorites = count > 0;

  if (variant === 'mobile-compact') {
    return (
      <a
        href="#favorites"
        aria-label={`Voir mes favoris (${count})`}
        className="relative w-10 h-10 flex items-center justify-center text-white/80 hover:text-[#D4AF37] transition-colors"
      >
        <Heart
          size={22}
          strokeWidth={1.8}
          className={hasFavorites ? 'fill-red-500 stroke-red-500' : ''}
        />
        {hasFavorites && (
          <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-[#D4AF37] text-black text-[10px] font-bold flex items-center justify-center leading-none">
            {count > 99 ? '99+' : count}
          </span>
        )}
      </a>
    );
  }

  // Desktop
  return (
    <a
      href="#favorites"
      aria-label={`Voir mes favoris (${count})`}
      className="relative flex items-center gap-2 text-white/80 hover:text-[#D4AF37] transition-colors text-sm uppercase tracking-widest group"
    >
      <Heart
        size={18}
        strokeWidth={1.8}
        className={`transition-all ${hasFavorites ? 'fill-red-500 stroke-red-500' : 'group-hover:scale-110'}`}
      />
      <span>Favoris</span>
      {hasFavorites && (
        <span className="ml-1 min-w-[20px] h-[20px] px-1.5 rounded-full bg-[#D4AF37] text-black text-[10px] font-bold flex items-center justify-center leading-none">
          {count > 99 ? '99+' : count}
        </span>
      )}
    </a>
  );
};

export default Navbar;
