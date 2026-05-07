import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, ArrowLeft } from 'lucide-react';
import { naruGoorItems } from '@/data/gallery';
import { useFavorites } from '@/context/FavoritesContext';
import NaruGoorCarousel from '@/components/sections/NaruGoorCarousel';

const NaruGoorPage: React.FC = () => {
  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* CARROUSEL — En tout haut, juste après la navbar                 */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <NaruGoorCarousel />

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* HERO — Logo mis en valeur                                       */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="relative pt-20 md:pt-24 pb-20 md:pb-24 overflow-hidden">
        {/* Image de fond — kimono signature */}
        <div className="absolute inset-0">
          <img
            src="/images/algueye/homme/h-04-kimono-encre.jpg"
            alt=""
            className="w-full h-full object-cover opacity-20"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/85 to-black" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Lien retour */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-[#D4AF37] transition-colors text-xs uppercase tracking-[0.25em] mb-12"
          >
            <ArrowLeft size={16} />
            Retour à l'accueil
          </Link>

          <div className="text-center max-w-3xl mx-auto">
            {/* Eyebrow */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="block text-[#D4AF37] uppercase text-[10px] md:text-xs tracking-[0.5em] mb-10 font-medium"
            >
              Une sous-marque ALGUEYE
            </motion.span>

            {/* ═══ Titre NARU GOOR en grand, style haute couture ═══ */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6"
            >
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif tracking-[0.05em] text-[#D4AF37] leading-none">
                NARU GOOR
              </h1>
              <p className="text-white/50 text-xs md:text-sm tracking-[0.4em] mt-4 uppercase">
                by ALGUEYE
              </p>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl md:text-2xl font-light text-white/90 mb-2 italic font-serif"
            >
              L'élégance virile signée ALGUEYE
            </motion.p>

            {/* Trait doré */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="w-24 h-[1px] bg-[#D4AF37] mx-auto mt-8"
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* NOTRE UNIVERS — Storytelling avec image                         */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section id="naru-goor-univers" className="relative py-20 md:py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
              <img
                src="/images/algueye/homme/h-01-rouge-brique.jpg"
                alt="Naru Goor — Univers masculin"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Cadre décoratif derrière */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#D4AF37]/30 -z-10 hidden lg:block" />
          </motion.div>

          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <span className="block text-[#D4AF37] uppercase text-[10px] md:text-xs tracking-[0.4em] mb-4 font-medium">
              Notre Univers
            </span>
            <h2 className="text-3xl md:text-5xl font-serif tracking-tight mb-8 leading-tight">
              L'homme moderne,
              <br />
              <span className="italic">enraciné</span> & affirmé.
            </h2>

            <div className="w-16 h-[1px] bg-[#D4AF37] mb-8" />

            <p className="text-zinc-300 text-base md:text-lg leading-relaxed mb-6 font-light">
              <span className="text-[#D4AF37] font-medium">Naru Goor</span> — qui évoque en
              wolof la virilité et la noblesse — est la ligne masculine de la
              maison ALGUEYE.
            </p>

            <p className="text-zinc-400 text-base leading-relaxed mb-6 font-light">
              Elle célèbre l'homme contemporain : celui qui assume son héritage
              culturel sénégalais tout en s'inscrivant dans les codes
              contemporains du luxe. Du quotidien décontracté aux grandes
              cérémonies, chaque pièce porte une signature : la précision de la
              coupe, la noblesse des matières, l'audace mesurée.
            </p>

            <p className="text-zinc-500 text-sm leading-relaxed italic font-light">
              « S'habiller comme un homme qui sait d'où il vient et où il va. »
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* COLLECTION — Pièces signature                                   */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section id="naru-goor-collection" className="relative py-16 md:py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-[#D4AF37] uppercase text-[10px] md:text-xs tracking-[0.4em] font-medium block mb-4">
              La Collection
            </span>
            <h2 className="text-3xl md:text-5xl font-serif tracking-tight">
              Pièces signature
            </h2>
            <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mt-6" />
          </motion.div>

          {/* Grille des pièces */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {naruGoorItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: Math.min(idx, 6) * 0.06 }}
                className="group relative"
              >
                <Link to={`/piece/${item.id}`} className="block">
                  <div className="aspect-[3/4] overflow-hidden rounded-sm bg-zinc-900 relative shadow-2xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] mb-2 block font-medium">
                        Naru Goor
                      </span>
                      <h3 className="text-xl md:text-2xl font-serif mb-2 text-white">{item.title}</h3>
                      <p className="text-white/60 text-sm font-light leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Link>

                {/* Bouton cœur */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleFavorite(item.id);
                  }}
                  aria-label={isFavorite(item.id) ? 'Retirer des favoris' : 'Ajouter aux favoris'}
                  aria-pressed={isFavorite(item.id)}
                  className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:bg-black/60 hover:border-[#D4AF37]/50 transition-all duration-300 z-10"
                >
                  <Heart
                    size={20}
                    strokeWidth={1.8}
                    className={`transition-all duration-300 ${
                      isFavorite(item.id)
                        ? 'fill-red-500 stroke-red-500 scale-110'
                        : 'fill-transparent stroke-white'
                    }`}
                  />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default NaruGoorPage;
