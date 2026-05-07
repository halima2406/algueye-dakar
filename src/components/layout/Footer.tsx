import React from 'react';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-serif tracking-widest font-bold">
              ALGUEYE <span className="text-[#D4AF37]">DAKAR</span>
            </h3>
            <p className="text-white/40 text-sm leading-relaxed">
              La maison de couture qui définit le nouveau standard du luxe traditionnel en Afrique. Excellence, Authenticité et Modernité.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/algueye_dakar?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="hover:text-[#D4AF37] transition-colors"><Instagram size={20} /></a>
              <a href="https://web.facebook.com/AlGueyeChallenger?locale=fr_FR" className="hover:text-[#D4AF37] transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors"><Mail size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-[#D4AF37] uppercase tracking-widest text-xs mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Accueil</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">À Propos</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Collections</a></li>
              <li><a href="#events" className="hover:text-white transition-colors">Événements</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#D4AF37] uppercase tracking-widest text-xs mb-8">Contact</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-center gap-3"><Phone size={16} /> +221 78 149 35 10</li>
              <li className="flex items-center gap-3"><Mail size={16} /> algueyedakar@gmail.com</li>
              <li className="flex items-center gap-3"><MapPin size={16} /> Dakar, Sénégal</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#D4AF37] uppercase tracking-widest text-xs mb-8">Newsletter</h4>
            <p className="text-white/40 text-xs mb-4">Inscrivez-vous pour recevoir nos nouvelles collections.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email"
                className="bg-zinc-900 border border-white/10 px-4 py-2 w-full outline-none focus:border-[#D4AF37] transition-colors"
              />
              <button className="bg-white text-black px-4 py-2 text-xs font-bold hover:bg-[#D4AF37] transition-colors">
                OK
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/20 uppercase tracking-widest font-medium">
          <p>© {new Date().getFullYear()} ALGUEYE DAKAR. Tous droits réservés.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Mentions Légales</a>
            <a href="#" className="hover:text-white">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;