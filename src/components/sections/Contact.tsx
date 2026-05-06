import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Demande envoyée ! Nous vous recontacterons sous peu.");
  };

  return (
    <section id="contact" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <span className="text-[#D4AF37] uppercase tracking-[0.4em] text-xs mb-4 block">Nous Contacter</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Préparez votre <br /> prochaine création</h2>
              <p className="text-white/60 font-light max-w-md leading-relaxed">
                Prenez rendez-vous pour une prise de mesure ou venez découvrir nos étoffes exclusives dans notre showroom à Dakar.
              </p>
            </div>

            <div className="space-y-6">
              <a href="https://wa.me/221781493510" className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all duration-300">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40">WhatsApp (Prioritaire)</p>
                  <p className="text-lg font-medium">+221 78 149 35 10</p>
                </div>
              </a>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40">Email</p>
                  <p className="text-lg font-medium">algueyedakar.maisondecouture@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40">Localisation</p>
                  <p className="text-lg font-medium">Dakar, Sénégal</p>
                </div>
              </div>
            </div>

            <div className="flex gap-6 pt-6">
              <a href="#" className="text-white/40 hover:text-[#D4AF37] transition-colors"><Instagram size={24} /></a>
              <a href="#" className="text-white/40 hover:text-[#D4AF37] transition-colors"><Facebook size={24} /></a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/50 p-10 rounded-sm border border-white/5"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/60">Nom Complet</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-black border border-white/10 p-4 rounded-sm focus:border-[#D4AF37] outline-none transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/60">Téléphone</label>
                  <input
                    type="tel"
                    required
                    className="w-full bg-black border border-white/10 p-4 rounded-sm focus:border-[#D4AF37] outline-none transition-colors"
                    placeholder="+221 ..."
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/60">Type de Création</label>
                <select className="w-full bg-black border border-white/10 p-4 rounded-sm focus:border-[#D4AF37] outline-none transition-colors appearance-none">
                  <option>Boubou Homme</option>
                  <option>Tenue Femme</option>
                  <option>Cérémonie / Mariage</option>
                  <option>Autre</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/60">Votre Message</label>
                <textarea
                  className="w-full bg-black border border-white/10 p-4 rounded-sm focus:border-[#D4AF37] outline-none transition-colors h-32"
                  placeholder="Comment pouvons-nous vous aider ?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#D4AF37] text-black py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
              >
                Prendre Rendez-vous
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;