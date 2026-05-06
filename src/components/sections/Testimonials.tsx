import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Qualité exceptionnelle et finition parfaite. ALGUEYE DAKAR a su comprendre exactement mon besoin pour mon mariage.",
      author: "Moussa S.",
      role: "Client Fidèle",
    },
    {
      text: "Une élégance unique et authentique. Les boubous sont d'une finesse incroyable, on sent l'expertise dans chaque couture.",
      author: "Fatou K.",
      role: "Entrepreneure",
    },
    {
      text: "Le vrai luxe africain. Une expérience client haut de gamme de la prise de mesure à la livraison finale.",
      author: "Abdoulaye D.",
      role: "Diplomate",
    },
  ];

  return (
    <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="w-16 h-16 bg-[#D4AF37]/10 flex items-center justify-center rounded-full mx-auto mb-6"
          >
            <Quote className="text-[#D4AF37]" size={32} />
          </motion.div>
          <h2 className="text-4xl font-serif">Paroles d'Élégance</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-zinc-900/50 p-10 rounded-sm border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-300"
            >
              <p className="text-white/70 italic mb-8 leading-relaxed font-light">"{t.text}"</p>
              <div>
                <h4 className="font-serif text-[#D4AF37] text-lg">{t.author}</h4>
                <p className="text-white/40 text-xs uppercase tracking-widest">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;