import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import WhatsAppButton from './components/ui/WhatsAppButton';
import { FavoritesProvider } from './context/FavoritesContext';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import NaruGoorPage from './pages/NaruGoorPage';
import PieceDetailPage from './pages/PieceDetailPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <FavoritesProvider>
        <div className="min-h-screen bg-black selection:bg-[#D4AF37] selection:text-black">
          <Toaster position="top-center" richColors />
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/favoris" element={<FavoritesPage />} />
            <Route path="/naru-goor" element={<NaruGoorPage />} />
            <Route path="/piece/:id" element={<PieceDetailPage />} />
          </Routes>
          <Footer />
          <WhatsAppButton />
        </div>
      </FavoritesProvider>
    </BrowserRouter>
  );
}

export default App;
