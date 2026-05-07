import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Heart, ArrowLeft, MessageCircle } from 'lucide-react';
import { getItemById } from '@/data/gallery';
import { useFavorites } from '@/context/FavoritesContext';

const PieceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useFavorites();

  const item = id ? getItemById(id) : undefined;

  // Scroll to top à l'ouverture
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  // Si l'id est invalide, redirige
  if (!item) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <h1 className="text-3xl font-serif mb-4">Pièce introuvable</h1>
          <p className="text-zinc-400 mb-8">Cette pièce n'existe pas dans notre catalogue.</p>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#D4AF37] text-black hover:bg-white transition-all text-xs uppercase tracking-[0.25em] font-bold"
          >
            <ArrowLeft size={16} />
            Retour à l'accueil
          </button>
        </div>
      </main>
    );
  }

  const fav = isFavorite(item.id);
  const whatsappMessage = encodeURIComponent(
    `Bonjour ALGUEYE, je suis intéressé(e) par la pièce "${item.title}" (réf: ${item.id}). Pouvez-vous me donner plus d'informations ?`
  );
  const whatsappUrl = `https://wa.me/221781493510?text=${whatsappMessage}`;

  return (
    <main className="min-h-screen bg-black text-white pt-28 md:pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Bouton retour */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-[#D4AF37] transition-colors text-xs uppercase tracking-[0.25em] mb-12"
        >
          <ArrowLeft size={16} />
          Retour
        </button>

        {/* Layout 2 colonnes : image | infos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-sm bg-zinc-900 shadow-2xl">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bouton cœur en overlay */}
            <button
              type="button"
              onClick={() => toggleFavorite(item.id)}
              aria-label={fav ? 'Retirer des favoris' : 'Ajouter aux favoris'}
              aria-pressed={fav}
              className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-md border border-white/10 hover:bg-black/70 hover:border-[#D4AF37]/50 transition-all duration-300"
            >
              <Heart
                size={22}
                strokeWidth={1.8}
                className={`transition-all duration-300 ${
                  fav
                    ? 'fill-red-500 stroke-red-500 scale-110'
                    : 'fill-transparent stroke-white'
                }`}
              />
            </button>
          </motion.div>

          {/* INFOS */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:pt-8"
          >
            {/* Catégorie */}
            <span className="block text-[#D4AF37] uppercase text-[10px] md:text-xs tracking-[0.4em] mb-4 font-medium">
              {item.category}
            </span>

            {/* Titre */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 tracking-tight">
              {item.title}
            </h1>

            <div className="w-16 h-[1px] bg-[#D4AF37] mb-8" />

            {/* Description */}
            <p className="text-zinc-300 text-base md:text-lg leading-relaxed mb-10 font-light">
              {item.description}
            </p>

            {/* Détails techniques */}
            {item.details && (
              <div className="border-t border-white/10 pt-8 mb-10">
                <h2 className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] mb-6 font-medium">
                  Détails de la pièce
                </h2>
                <dl className="space-y-4">
                  {item.details.matiere && (
                    <DetailRow label="Matière" value={item.details.matiere} />
                  )}
                  {item.details.coupe && (
                    <DetailRow label="Coupe" value={item.details.coupe} />
                  )}
                  {item.details.occasion && (
                    <DetailRow label="Occasion" value={item.details.occasion} />
                  )}
                  {item.details.coloris && (
                    <DetailRow label="Coloris" value={item.details.coloris} />
                  )}
                  {item.details.soin && (
                    <DetailRow label="Entretien" value={item.details.soin} />
                  )}
                </dl>
              </div>
            )}

            {/* Boutons d'action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#D4AF37] text-black hover:bg-white transition-all text-xs uppercase tracking-[0.25em] font-bold flex-1"
              >
                <MessageCircle size={18} />
                Demander cette pièce
              </a>

              <button
                type="button"
                onClick={() => toggleFavorite(item.id)}
                className={`inline-flex items-center justify-center gap-3 px-8 py-4 border transition-all text-xs uppercase tracking-[0.25em] font-bold flex-1 ${
                  fav
                    ? 'border-red-500 text-red-500 hover:bg-red-500/10'
                    : 'border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black'
                }`}
              >
                <Heart size={18} className={fav ? 'fill-red-500' : ''} />
                {fav ? 'Retirer des favoris' : 'Ajouter aux favoris'}
              </button>
            </div>

            {/* Référence pièce */}
            <p className="mt-10 text-zinc-600 text-xs uppercase tracking-[0.3em]">
              Référence · {item.id.toUpperCase()}
            </p>
          </motion.div>
        </div>

        {/* Lien retour à la galerie */}
        <div className="mt-20 text-center">
          <Link
            to="/#gallery"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-[#D4AF37] transition-colors text-xs uppercase tracking-[0.25em]"
          >
            <ArrowLeft size={14} />
            Découvrir d'autres pièces
          </Link>
        </div>
      </div>
    </main>
  );
};

// ─── Ligne de détail ───────────────────────────────────────────────────
const DetailRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 sm:items-baseline">
    <dt className="text-zinc-500 text-xs uppercase tracking-[0.2em] sm:w-32 shrink-0 font-medium">
      {label}
    </dt>
    <dd className="text-white font-light">{value}</dd>
  </div>
);

export default PieceDetailPage;
