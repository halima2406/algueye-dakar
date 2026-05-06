import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-2xl relative z-10">
              <img
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/bc0cfbaf-e50d-4931-87e2-fd3c82dbe087/men-collection-7d9e358b-1777976242449.webp"
                alt="Abdou Gueye - Founder"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 border-2 border-[#D4AF37]/30 -z-0 hidden md:block" />
            <div className="absolute top-12 -left-12 text-[12rem] font-serif text-white/5 select-none leading-none -z-0">
              AG
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs mb-4 block">Notre Héritage</span>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                L'Art du Tailoring <br /> par Abdou Gueye
              </h2>
            </div>
            
            <p className="text-white/60 text-lg leading-relaxed font-light">
              ALGUEYE DAKAR est une maison de couture fondée par Abdou Gueye, animée par la passion du stylisme et du modélisme. Chaque pièce est un hommage à l'élégance intemporelle.
            </p>
            
            <p className="text-white/60 text-lg leading-relaxed font-light">
              La marque s’inspire de la richesse culturelle sénégalaise pour créer des tenues élégantes, modernes et authentiques. Nous fusionnons les techniques traditionnelles avec une vision contemporaine du luxe.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <h4 className="text-2xl font-serif text-[#D4AF37]">Authenticité</h4>
                <p className="text-white/40 text-sm mt-2">Respect des traditions textiles sénégalaises.</p>
              </div>
              <div>
                <h4 className="text-2xl font-serif text-[#D4AF37]">Excellence</h4>
                <p className="text-white/40 text-sm mt-2">Finition main et souci obsessionnel du détail.</p>
              </div>
            </div>

            <div className="pt-8">
              <p className="text-white italic font-serif text-xl border-l-2 border-[#D4AF37] pl-6 py-2">
                "Chaque création est pensée pour sublimer l’identité et la prestance de ceux qui la portent."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;