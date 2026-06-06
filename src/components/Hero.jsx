import { ArrowUpRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-36 pb-20 overflow-hidden">
      {/* Luces de fondo (Glows de contraste) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-trend-dark-green/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="text-center relative z-10">
        <span className="inline-flex items-center gap-1.5 text-trend-neon text-[10px] font-mono uppercase tracking-[0.3em] bg-trend-dark-green/40 px-4 py-1.5 rounded-full border border-trend-neon/20 mb-8">
          🔥 Los productos más buscados de internet
        </span>
        
        <h1 className="text-[var(--text-muted)] text-5xl sm:text-7xl font-black uppercase tracking-tight leading-none max-w-4xl mx-auto">
          EL FUTURO ES HOY.<br />
          COMPRÁ LO <span className="text-trend-neon">TRENDY</span>.
        </h1>
        
        <p className="mt-6 text-sm sm:text-base text-trend-light-gray max-w-xl mx-auto font-light tracking-wide leading-relaxed">
          Perfumes de alta gama, gadgets tecnológicos y lanzamientos globales exclusivos seleccionados para vos.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="bg-trend-neon text-black text-xs uppercase font-bold tracking-widest px-8 py-4 rounded-xl hover:bg-white transition-all duration-300 flex items-center gap-2 group shadow-[0_0_30px_rgba(204,255,0,0.15)]">
            Ver Catálogo 
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;