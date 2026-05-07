import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const NaruGoorTeaser: React.FC = () => {
  return (
    <section
      id="naru-goor-teaser"
      className="relative py-32 md:py-40 bg-black text-white overflow-hidden"
    >
      {/* Image de fond — kimono encre & or */}
      <div className="absolute inset-0">
        <img
          src="/images/algueye/homme/h-04-kimono-encre.jpg"
          alt=""
          className="w-full h-full object-cover opacity-30"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Texte */}
        <div>
          <motion.span
            initial={{ opacity: 0, letterSpacing: '0.2em' }}
            whileInView={{ opacity: 1, letterSpacing: '0.5em' }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="block text-[#D4AF37] uppercase text-[10px] md:text-xs mb-6 font-medium"
          >
            Une sous-marque ALGUEYE
          </motion.span>

          {/* Titre Naru Goor en grand, style haute couture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h2 className="text-5xl md:text-7xl font-serif tracking-[0.05em] text-[#D4AF37] leading-none">
              NARU GOOR
            </h2>
            <p className="text-white/50 text-[10px] md:text-xs tracking-[0.4em] mt-3 uppercase">
              by ALGUEYE
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-zinc-300 text-base md:text-lg leading-relaxed mb-4 font-light"
          >
            Naru Goor — la ligne masculine d'ALGUEYE.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-zinc-400 text-sm md:text-base leading-relaxed mb-10 font-light"
          >
            Une élégance virile, ancrée dans le patrimoine sénégalais et
            résolument contemporaine. Pour l'homme qui s'affirme avec style.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              to="/naru-goor"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#D4AF37] text-black hover:bg-white transition-all text-xs uppercase tracking-[0.25em] font-bold"
            >
              Découvrir Naru Goor
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        {/* Décoration côté droit */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="hidden md:block"
        >
          <div className="aspect-[3/4] overflow-hidden rounded-sm border border-[#D4AF37]/30">
            <img
              src="/images/algueye/homme/h-04-kimono-encre.jpg"
              alt="Kimono Encre & Or — Naru Goor"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NaruGoorTeaser;
