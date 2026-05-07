import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const Events = () => {
  const events = [
    {
      title: "Défilé ALGUEYE DAKAR",
      date: "15 Octobre 2024",
      location: "Grand Théâtre National, Dakar",
      description: "Présentation exclusive de la collection Automne/Hiver inspirée des rois d'Afrique.",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/bc0cfbaf-e50d-4931-87e2-fd3c82dbe087/fashion-event-abe4a9fe-1777976242439.webp",
    },
    {
      title: "Lancement de collection",
      date: "02 Décembre 2024",
      location: "Showroom Almadies, Dakar",
      description: "Cocktail privé pour le lancement de la gamme Signature 2025.",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/bc0cfbaf-e50d-4931-87e2-fd3c82dbe087/women-collection-06c14a6d-1777976245166.webp",
    },
  ];

  return (
    <section id="events" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[#D4AF37] uppercase tracking-[0.4em] text-xs mb-4 block">Agenda</span>
            <h2 className="text-4xl md:text-5xl font-serif">Événements Prestigieux</h2>
          </div>
          <p className="text-white/50 max-w-sm mb-2">
            Rejoignez-nous lors de nos rendez-vous exclusifs et défilés haute couture à travers le pays.
          </p>
        </div>

        <div className="space-y-12">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group flex flex-col md:flex-row gap-8 items-center border-b border-white/10 pb-12 hover:border-[#D4AF37]/50 transition-colors"
            >
              <div className="w-full md:w-1/3 aspect-video overflow-hidden rounded-sm">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="w-full md:w-2/3 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-4 text-sm text-[#D4AF37]">
                    <span className="flex items-center gap-2">
                      <Calendar size={16} /> {event.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin size={16} /> {event.location}
                    </span>
                  </div>
                  <h3 className="text-3xl font-serif">{event.title}</h3>
                  <p className="text-white/60 font-light max-w-xl">{event.description}</p>
                </div>
                <button className="flex items-center gap-2 text-white hover:text-[#D4AF37] transition-colors group-hover:translate-x-2 duration-300">
                   <ChevronRight size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;