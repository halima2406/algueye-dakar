import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Gallery from './components/sections/Gallery';
import Favorites from './components/sections/Favorites';
import Events from './components/sections/Events';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import WhatsAppButton from './components/ui/WhatsAppButton';
import { Toaster } from 'sonner';
import { FavoritesProvider } from './context/FavoritesContext';

function App() {
  return (
    <FavoritesProvider>
      <div className="min-h-screen bg-black selection:bg-[#D4AF37] selection:text-black">
        <Toaster position="top-center" richColors />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Gallery />
          <Favorites />
          <Events />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </FavoritesProvider>
  );
}

export default App;
