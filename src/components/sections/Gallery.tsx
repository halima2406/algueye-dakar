import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import { categories, getItemsByCategory, type Category, type GalleryItem } from '@/data/gallery';
import { useFavorites } from '@/context/FavoritesContext';

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("Habits d'événements");
  const { isFavorite, toggleFavorite } = useFavorites();

  const filteredItems = getItemsByCategory(activeCategory);

  return (
    <section id="gallery" className="py-24 bg-black text-white overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_top_right,#D4AF37_0%,transparent_60%)]"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-[radial-gradient(circle_at_bottom_left,#D4AF37_0%,transparent_60%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, letterSpacing: '0.2em' }}
            whileInView={{ opacity: 1, letterSpacing: '0.5em' }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-[#D4AF37] uppercase text-[10px] md:text-xs mb-6 block font-medium"
          >
            Le Showroom Exclusif
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-serif mb-12 tracking-tight"
          >
            Nos Collections
          </motion.h2>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-12 mb-12 border-b border-white/10 pb-4">
            {categories.map((cat, idx) => (
              <motion.button
                key={cat}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-3 text-[10px] md:text-xs uppercase tracking-[0.25em] transition-all duration-700 font-medium ${
                  activeCategory === cat ? 'text-[#D4AF37]' : 'text-zinc-500 hover:text-white'
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[#D4AF37]"
                    transition={{ type: 'spring', stiffness: 200, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Grille ou Empty State */}
        <AnimatePresence mode="wait">
          {filteredItems.length > 0 ? (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {filteredItems.map((item, idx) => (
                <GalleryCard
                  key={item.id}
                  item={item}
                  index={idx}
                  isFav={isFavorite(item.id)}
                  onToggleFav={() => toggleFavorite(item.id)}
                />
              ))}
            </motion.div>
          ) : (
            <EmptyCategoryState key={`empty-${activeCategory}`} category={activeCategory} />
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-block px-8 py-12 border border-white/5 bg-white/[0.02] backdrop-blur-sm">
            <p className="text-zinc-500 text-[10px] uppercase tracking-[0.5em] font-light italic">
              Algueye Dakar &copy; {new Date().getFullYear()} &mdash; Haute Couture Africaine
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ─── Carte d'une pièce dans la grille ───────────────────────────────────
interface GalleryCardProps {
  item: GalleryItem;
  index: number;
  isFav: boolean;
  onToggleFav: () => void;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ item, index, isFav, onToggleFav }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: Math.min(index, 8) * 0.05 }}
      className="group relative"
    >
      <div className="aspect-[3/4] overflow-hidden rounded-sm bg-zinc-900 relative shadow-2xl">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
        />

        {/* Overlay dégradé en bas */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

        {/* Bouton cœur — toujours visible en haut à droite */}
        <button
          type="button"
          onClick={onToggleFav}
          aria-label={isFav ? `Retirer ${item.title} des favoris` : `Ajouter ${item.title} aux favoris`}
          aria-pressed={isFav}
          className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:bg-black/60 hover:border-[#D4AF37]/50 transition-all duration-300 z-10"
        >
          <Heart
            size={20}
            strokeWidth={1.8}
            className={`transition-all duration-300 ${
              isFav
                ? 'fill-red-500 stroke-red-500 scale-110'
                : 'fill-transparent stroke-white'
            }`}
          />
        </button>

        {/* Catégorie + titre + description en bas */}
        <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
          <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] mb-2 font-medium">
            {item.category}
          </span>
          <h3 className="text-xl md:text-2xl font-serif mb-2 text-white">{item.title}</h3>
          <p className="text-white/60 text-sm font-light leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// ─── État vide (catégorie sans images, ex: Mariage) ─────────────────────
const EmptyCategoryState: React.FC<{ category: Category }> = ({ category }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-20 px-6 text-center"
    >
      <div className="max-w-xl mx-auto border border-white/10 bg-white/[0.015] backdrop-blur-sm py-16 px-8 md:px-12">
        <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mb-8" />
        <span className="block text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] mb-6 font-medium">
          {category}
        </span>
        <h3 className="text-2xl md:text-3xl font-serif text-white mb-6">
          Collection à venir prochainement
        </h3>
        <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed mb-2">
          Nos créations pour cette catégorie sont en préparation dans nos ateliers.
        </p>
        <p className="text-zinc-500 text-sm font-light italic">
          Restez à l'écoute — la collection sera dévoilée très bientôt.
        </p>
        <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mt-8" />
      </div>
    </motion.div>
  );
};

export default Gallery;
