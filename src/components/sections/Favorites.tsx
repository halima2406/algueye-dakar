import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, X, Trash2 } from 'lucide-react';
import { getItemById } from '@/data/gallery';
import { useFavorites } from '@/context/FavoritesContext';

const Favorites: React.FC = () => {
  const { favorites, removeFavorite, clearAll, count } = useFavorites();

  // On résout les ids en items, en filtrant les éventuels ids invalides
  const items = favorites.map(getItemById).filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <section id="favorites" className="py-24 bg-zinc-950 text-white relative overflow-hidden">
      {/* Background subtil */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#D4AF37_0%,transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, letterSpacing: '0.2em' }}
            whileInView={{ opacity: 1, letterSpacing: '0.5em' }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-[#D4AF37] uppercase text-[10px] md:text-xs mb-6 block font-medium"
          >
            Sélection Personnelle
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-serif mb-4 tracking-tight"
          >
            Mes Favoris
          </motion.h2>
          {count > 0 && (
            <p className="text-zinc-500 text-sm font-light tracking-wider">
              {count} {count > 1 ? 'pièces sélectionnées' : 'pièce sélectionnée'}
            </p>
          )}
        </div>

        <AnimatePresence mode="wait">
          {items.length === 0 ? (
            <EmptyFavorites key="empty" />
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Grille des favoris */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
                <AnimatePresence>
                  {items.map((item, idx) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.85, transition: { duration: 0.3 } }}
                      transition={{ duration: 0.4, delay: Math.min(idx, 6) * 0.05 }}
                      className="group relative"
                    >
                      <div className="aspect-[3/4] overflow-hidden rounded-sm bg-zinc-900 relative shadow-2xl">
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                        {/* Bouton retirer */}
                        <button
                          type="button"
                          onClick={() => removeFavorite(item.id)}
                          aria-label={`Retirer ${item.title} des favoris`}
                          className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-md border border-white/10 hover:bg-red-500/80 hover:border-red-400 transition-all duration-300 z-10"
                        >
                          <X size={18} strokeWidth={2} className="text-white" />
                        </button>

                        <div className="absolute inset-x-0 bottom-0 p-6">
                          <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] mb-2 block font-medium">
                            {item.category}
                          </span>
                          <h3 className="text-xl md:text-2xl font-serif text-white">{item.title}</h3>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Action : tout vider */}
              {items.length > 1 && (
                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => {
                      if (window.confirm('Voulez-vous vraiment vider votre liste de favoris ?')) {
                        clearAll();
                      }
                    }}
                    className="inline-flex items-center gap-3 px-6 py-3 border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-all text-xs uppercase tracking-[0.2em]"
                  >
                    <Trash2 size={14} />
                    Vider la liste
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

// ─── État vide : aucun favori ───────────────────────────────────────────
const EmptyFavorites: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-12 text-center"
    >
      <div className="max-w-xl mx-auto border border-white/10 bg-white/[0.015] backdrop-blur-sm py-16 px-8 md:px-12">
        <div className="w-16 h-16 mx-auto mb-8 rounded-full border border-[#D4AF37]/30 flex items-center justify-center">
          <Heart size={28} strokeWidth={1.5} className="text-[#D4AF37]" />
        </div>
        <h3 className="text-2xl md:text-3xl font-serif text-white mb-6">
          Votre sélection est vide
        </h3>
        <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed mb-2">
          Parcourez nos collections et cliquez sur le cœur des pièces qui vous inspirent.
        </p>
        <p className="text-zinc-500 text-sm font-light italic">
          Vos coups de cœur seront sauvegardés ici, prêts à être partagés lors de votre rendez-vous.
        </p>
        <a
          href="#gallery"
          className="inline-block mt-10 px-8 py-3 bg-[#D4AF37] text-black text-xs uppercase tracking-[0.25em] font-bold hover:bg-white transition-colors"
        >
          Découvrir les collections
        </a>
      </div>
    </motion.div>
  );
};

export default Favorites;
