import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Gallery from '@/components/sections/Gallery';
import Events from '@/components/sections/Events';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import NaruGoorTeaser from '@/components/sections/NaruGoorTeaser';

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <About />
      <Gallery />
      <NaruGoorTeaser />
      <Events />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default HomePage;
