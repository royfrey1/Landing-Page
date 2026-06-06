import { ShoppingBag, Menu, Search, Sparkles } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl bg-trend-gray/80 backdrop-blur-md border border-white/5 rounded-2xl z-50 px-6 py-4 transition-all duration-300">
      <div className="flex items-center justify-between">
        
        {/* Logo / Marca */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-trend-neon rounded-full animate-pulse" />
          <span className="font-black text-[var(--text-main)] tracking-[0.2em] uppercase text-sm font-mono">
            TREND<span className="text-trend-neon">LAB</span>
          </span>
        </div>

        {/* Links de Navegación Estilo Cápsula */}
        <div className=" hidden md:flex items-center gap-1 bg-black/40 p-1 rounded-full border border-white/5">
          <button className="text-[var(--accent-neon)] cursor-pointer px-4 py-1.5 text-xs uppercase tracking-wider font-medium bg-trend-dark-green/50 rounded-full border border-trend-neon/10">
            Drops
          </button>
          <button className="text-[var(--accent-neon)] cursor-pointer px-4 py-1.5 text-xs uppercase tracking-wider font-medium hover:text-white transition-colors">
            Categorías
          </button>
          <button className="text-[var(--accent-neon)] cursor-pointer px-4 py-1.5 text-xs uppercase tracking-wider font-medium hover:text-white transition-colors">
            Hot Items
          </button>
        </div>

        {/* Acciones del Usuario */}
        <div className="flex items-center gap-4">
          <button className="text-trend-light-gray hover:text-[var(--accent-neon)] transition-colors p-1">
            <Search size={18} />
          </button>
          
          {/* Botón Carrito con Badge Neón */}
          <button className="relative text-trend-light-gray hover:text-[var(--accent-neon)] transition-colors p-1">
            <ShoppingBag size={18} />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-trend-neon rounded-full" />
          </button>
          
          {/* Menú Mobile */}
          <button className="md:hidden text-[var(--text-main)] p-1">
            <Menu size={20} />
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;