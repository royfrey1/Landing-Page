import { useEffect } from 'react'; // ◄ 1. Importamos useEffect
import { X, Send } from 'lucide-react';

const ModalConsulta = ({ producto, onClose }) => {
  if (!producto) return null;

  // ◄ 2. Bloquear el scroll del fondo cuando el modal esté abierto
  useEffect(() => {
    // Guardamos el estado original del scrollbar
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    
    // Al desmontar el modal (cerrarlo), devolvemos el scroll a la normalidad
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Simulación de envío: Consulta registrada para ${producto.nombre}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Fondo oscuro con fade-in suave */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-all duration-300 animate-in fade-in"
        onClick={onClose}
      />

      {/* ◄ 3. Ventana del Modal con Efecto de Movimiento Escalado y Rebote (zoom-in + slide) */}
      <div className="bg-trend-gray border border-white/10 rounded-2xl w-full max-w-md p-6 relative z-10 shadow-2xl text-[var(--accent-neon)] transition-all duration-500 ease-out animate-[modalUp_0.8s_cubic-bezier(0.16,1,0.3,1)]">
        
        {/* Botón de Cierre */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-[var(--accent-neon)] hover:text-[var(--text-main)] transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        {/* Encabezado */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 bg-trend-neon rounded-full animate-pulse" />
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[var(--accent-neon)]">// SOLICITUD DE DROP</span>
        </div>

        <h3 className="text-[var(--text-muted)] text-xl font-black uppercase tracking-tight mb-2">
          Reservar Artículo
        </h3>
        <p className="text-[var(--accent-neon)] text-xs font-light mb-6">
          Estás por consultar por una pieza de curaduría exclusiva. Dejá tus datos para coordinar la entrega.
        </p>

        {/* Info del Producto Seleccionado */}
        <div className="flex items-center gap-4 bg-trend-black/40 p-3 rounded-xl border border-white/5 mb-6">
          <img 
            src={producto.imagen} 
            alt={producto.nombre} 
            className="w-16 h-16 object-cover rounded-lg border border-white/10"
          />
          <div>
            <span className="text-[9px] font-mono text-[var(--accent-neon)] uppercase tracking-wider">{producto.categoria}</span>
            <h4 className="text-sm font-bold uppercase tracking-tight">{producto.nombre}</h4>
            <span className="text-sm font-mono font-bold text-[var(--accent-neon)] block mt-0.5">
              ${producto.precio.toLocaleString('es-AR')}
            </span>
          </div>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-4 font-sans">
          <div>
            <label className="block text-[10px] font-mono uppercase tracking-widest text-trend-light-gray mb-1.5">// Tu Nombre</label>
            <input 
              type="text" 
              required
              placeholder="Ej. Roy Frey" 
              className="w-full bg-trend-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-trend-neon/50 text-[var(--text-main)] transition-colors"
            />
          </div>

          <div>
            <label className="block text-[10px] font-mono uppercase tracking-widest text-trend-light-gray mb-1.5">// Teléfono de Contacto</label>
            <input 
              type="tel" 
              required
              placeholder="Ej. +54 3757 123456" 
              className="w-full bg-trend-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-trend-neon/50 text-[var(--text-main)] transition-colors"
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-trend-neon text-black font-mono font-bold text-xs uppercase tracking-widest py-4 rounded-xl hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(204,255,0,0.1)] mt-2"
          >
            Confirmar Interés <Send size={12} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalConsulta;