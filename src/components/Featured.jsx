import { Truck, ShieldCheck, Zap } from 'lucide-react';

const Features = () => {
  const items = [
    {
      id: 1,
      icon: <Truck size={22} />,
      label: "// LOGÍSTICA PREMIUM",
      title: "Envíos Flex y Express",
      desc: "Despachos en el día para AMBA y envíos asegurados a todo el país mediante transporte prioritario."
    },
    {
      id: 2,
      icon: <ShieldCheck size={22} />,
      label: "// CURADURÍA ORIGINAL",
      title: "Garantía de Autenticidad",
      desc: "Cada artículo del drop cuenta con certificación de origen. Importaciones directas sin intermediarios."
    },
    {
      id: 3,
      icon: <Zap size={22} />,
      label: "// SOPORTE DIRECTO",
      title: "Atención One-to-One",
      desc: "Sin bots. Un asesor comercial especializado se encarga de coordinar tu pedido y resolver dudas al instante."
    }
  ];

  return (
    <section className="py-16 border-t border-white/5 mt-12 relative overflow-hidden">
      {/* Luces sutiles de fondo que reaccionan a la paleta */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[150px] bg-trend-dark-green/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {items.map((item) => (
          <div 
            key={item.id}
            className="group bg-trend-gray rounded-2xl border border-white/5 p-6 transition-all duration-300 hover:border-trend-neon/30 hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] flex flex-col justify-between"
          >
            <div>
              {/* Contenedor del Icono */}
              <div className="w-11 h-11 bg-trend-dark-green text-trend-neon rounded-xl flex items-center justify-center mb-6 border border-trend-neon/10 group-hover:scale-105 transition-transform duration-300">
                {item.icon}
              </div>
              
              {/* Etiquetas */}
              <span className="text-[var(--text-main)] text-[10px] font-mono tracking-[0.2em] uppercase block mb-2">
                {item.label}
              </span>
              <h3 className="text-lg text-[var(--accent-neon)] font-bold uppercase tracking-tight mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-[var(--text-muted)] font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
            
            {/* Pequeña línea decorativa de red que se enciende en hover */}
            <div className="w-full h-[1px] bg-white/5 mt-6 group-hover:bg-trend-neon/20 transition-colors duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;