import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Catalog from './components/Catalogo';
import ColorPicker from './components/Colores';
import Featured from './components/Featured';

function App() {
  return (
    <div className="min-h-screen bg-trend-black text-white selection:bg-trend-neon selection:text-black antialiased overflow-x-hidden">
      {/* Barra de navegación superior fija */}
      <Navbar />
      
      {/* Estructura del Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Marquee />
        <Catalog />
        <Featured />
      </main>
      
      {/* Un footer simple temporal */}
      <footer className="border-t border-white/5 py-10 mt-20 text-center text-xs text-[var(--accent-neon)] font-mono uppercase tracking-widest">
        © 2026 TrendLab Store.
      </footer>

      {/* Selector de colores */}
      <ColorPicker />
    </div>
  );
}

export default App;