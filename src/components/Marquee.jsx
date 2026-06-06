const Marquee = () => {
  return (
    <div className="w-full bg-trend-dark-green border-y border-trend-neon/10 py-3 overflow-hidden select-none my-12">
      <div className="flex gap-16 whitespace-nowrap animate-[marquee_25s_linear_infinite] uppercase font-mono text-[11px] tracking-[0.4em] text-trend-neon font-bold">
        <span>⚡ Envío gratis a todo el país</span>
        <span>🔥 Tendencias globales 2026</span>
        <span>💎 Calidad 100% garantizada</span>
        <span>⚡ Envío gratis a todo el país</span>
        <span>🔥 Tendencias globales 2026</span>
        <span>💎 Calidad 100% garantizada</span>
      </div>
    </div>
  );
};

export default Marquee;