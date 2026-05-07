import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  image: string;
  category: string;
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

const slides: Slide[] = [
  {
    image: '/images/algueye/homme/h-04-kimono-encre.jpg',
    category: 'Cérémonie',
    title: "L'apparat masculin.",
    subtitle:
      "Des pièces d'exception pour les grandes occasions — le kimono signature, l'art des matières nobles.",
    primaryCta: { label: 'Découvrir la pièce', href: '/piece/ng-04' },
    secondaryCta: { label: 'Voir la collection', href: '#naru-goor-collection' },
  },
  {
    image: '/images/algueye/homme/h-01-rouge-brique.jpg',
    category: 'Quotidien',
    title: "L'élégance décontractée.",
    subtitle:
      'Le streetwear chic signé Dakar — coupe ample, maille technique, esprit moderne.',
    primaryCta: { label: 'Découvrir la pièce', href: '/piece/ng-01' },
    secondaryCta: { label: 'Voir la collection', href: '#naru-goor-collection' },
  },
  {
    image: '/images/algueye/defile/d-05-homme-veste-fleurs.jpg',
    category: 'Défilé',
    title: 'Sur le podium.',
    subtitle:
      "L'audace haute couture sur les runways d'ALGUEYE — pièces d'exposition, signatures de saison.",
    primaryCta: { label: 'Voir la collection', href: '#naru-goor-collection' },
    secondaryCta: { label: 'Notre univers', href: '#naru-goor-univers' },
  },
  {
    image: '/images/algueye/homme/h-05-veste-motifs.jpg',
    category: 'Héritage',
    title: 'Le patrimoine sénégalais.',
    subtitle:
      'Tissages traditionnels réinventés — la mémoire textile de Dakar dans une silhouette contemporaine.',
    primaryCta: { label: 'Découvrir la pièce', href: '/piece/ng-05' },
    secondaryCta: { label: 'Voir la collection', href: '#naru-goor-collection' },
  },
];

const AUTO_DELAY = 5000; // 5 secondes par slide

const NaruGoorCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback((index: number) => {
    setCurrent(((index % slides.length) + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Auto-défilement
  useEffect(() => {
    if (isPaused) return;
    const timer = setTimeout(next, AUTO_DELAY);
    return () => clearTimeout(timer);
  }, [current, isPaused, next]);

  const slide = slides[current];

  return (
    <section
      className="relative w-full h-[85vh] min-h-[600px] overflow-hidden bg-black"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Carrousel Naru Goor"
    >
      {/* Images empilées avec fade */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
          {/* Overlay sombre côté gauche pour lisibilité du texte */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Contenu textuel */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="max-w-2xl"
            >
              {/* Catégorie - badge doré */}
              <span className="inline-block px-4 py-2 mb-8 text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#D4AF37] border border-[#D4AF37]/40 bg-black/30 backdrop-blur-sm">
                {slide.category}
              </span>

              {/* Titre principal */}
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-6">
                {slide.title}
              </h2>

              {/* Sous-titre */}
              <p className="text-white/80 text-base md:text-lg font-light leading-relaxed mb-10 max-w-xl">
                {slide.subtitle}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <CtaButton href={slide.primaryCta.href} variant="primary">
                  {slide.primaryCta.label}
                </CtaButton>
                <CtaButton href={slide.secondaryCta.href} variant="secondary">
                  {slide.secondaryCta.label}
                </CtaButton>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Flèche précédent */}
      <button
        type="button"
        onClick={prev}
        aria-label="Slide précédente"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm border border-white/20 text-white hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition-all duration-300"
      >
        <ChevronLeft size={24} strokeWidth={1.5} />
      </button>

      {/* Flèche suivant */}
      <button
        type="button"
        onClick={next}
        aria-label="Slide suivante"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm border border-white/20 text-white hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition-all duration-300"
      >
        <ChevronRight size={24} strokeWidth={1.5} />
      </button>

      {/* Pagination — points en bas */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => goTo(idx)}
            aria-label={`Aller à la slide ${idx + 1}`}
            aria-current={idx === current}
            className={`transition-all duration-500 rounded-full ${
              idx === current
                ? 'w-10 h-[3px] bg-[#D4AF37]'
                : 'w-3 h-[3px] bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

// ─── Bouton CTA réutilisable ──────────────────────────────────────────
const CtaButton: React.FC<{
  href: string;
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
}> = ({ href, variant, children }) => {
  const isInternal = href.startsWith('/') && !href.startsWith('/#');
  const baseClasses =
    'inline-flex items-center justify-center px-8 py-4 text-xs uppercase tracking-[0.25em] font-bold transition-all duration-300';
  const variantClasses =
    variant === 'primary'
      ? 'bg-[#D4AF37] text-black hover:bg-white'
      : 'border border-white/40 text-white hover:bg-white hover:text-black';
  const className = `${baseClasses} ${variantClasses}`;

  if (isInternal) {
    return (
      <Link to={href} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};

export default NaruGoorCarousel;
