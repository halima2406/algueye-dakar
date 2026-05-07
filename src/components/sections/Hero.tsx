import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center pt-32 md:pt-40">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000"
        style={{
          backgroundImage: `url('https://storage.googleapis.com/dala-prod-public-storage/generated-images/bc0cfbaf-e50d-4931-87e2-fd3c82dbe087/hero-image-033d9829-1777976242548.webp')`,
          transform: 'scale(1.1)',
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="text-[#D4AF37] uppercase tracking-[0.5em] text-sm mb-6 block font-medium">
            Haute Couture Sénégalaise
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight">
            L'élégance traditionnelle <br className="hidden md:block" />
            <span className="italic">réinventée</span> à Dakar
          </h1>
          <p className="text-white/70 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Des créations uniques qui incarnent le raffinement africain et l'excellence artisanale.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href="#gallery"
              className="bg-white text-black px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-white transition-all duration-300 w-full md:w-auto"
            >
              Découvrir nos créations
            </a>
            <a
              href="#contact"
              className="border border-white/30 text-white px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 w-full md:w-auto"
            >
              Nous contacter
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
