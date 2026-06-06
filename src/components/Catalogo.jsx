import { useState } from 'react';
import { PRODUCTOS_DATA } from '../data/productos';
import { Eye, ArrowUpRight } from 'lucide-react';
import ModalConsulta from './ModalCons';

const Catalog = () => {
  const [categoriaActiva, setCategoriaActiva] = useState('Todos');
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  // Filtrado de productos en tiempo real
  const productosFiltrados = categoriaActiva === 'Todos'
    ? PRODUCTOS_DATA
    : PRODUCTOS_DATA.filter(p => p.categoria === categoriaActiva);

  return (
    <section className="py-12">
      {/* Encabezado del catálogo y Filtros */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-trend-neon text-xs font-mono tracking-[0.2em] uppercase block mb-2">// CURADURÍA</span>
          <h2 className="text-[var(--accent-neon)] text-3xl font-black uppercase tracking-tight">El drop del mes</h2>
        </div>
        
        {/* Filtros dinámicos con estados */}
        <div className="flex flex-wrap gap-2">
          {['Todos', 'Perfumes', 'Tech', 'Accesorios'].map((cat) => (
            <button 
              key={cat}
              onClick={() => setCategoriaActiva(cat)}
              className={`px-4 py-2 text-[11px] uppercase tracking-wider font-semibold rounded-xl border transition-all duration-300 cursor-pointer ${
                categoriaActiva === cat
                  ? 'bg-trend-neon text-[var(--text-muted)] border-trend-neon shadow-[0_0_15px_rgba(204,255,0,0.2)]' 
                  : 'bg-trend-gray text-trend-light-gray border-white/5 hover:border-white/20 hover:text-[var(--text-main)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grilla de Cards de Productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productosFiltrados.map((producto) => (
          <div 
            key={producto.id} 
            className="group relative bg-trend-gray rounded-2xl border border-white/5 overflow-hidden transition-all duration-300 hover:border-trend-neon/30 hover:-translate-y-1 flex flex-col h-full"
          >
            {/* Contenedor Imagen */}
            <div className="relative aspect-square overflow-hidden bg-trend-black/50">
              {/* Badge de Tag */}
              <span className="absolute top-3 left-3 z-10 text-[9px] font-mono font-bold uppercase tracking-widest bg-trend-black/80 text-trend-neon px-2.5 py-1 rounded-md border border-trend-neon/20">
                {producto.tag}
              </span>
              
              <img 
                src={producto.imagen} 
                alt={producto.nombre} 
                className="text-[var(--text-main)] w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
              
              {/* Overlay sutil al hacer hover */}
              <div className="absolute inset-0 bg-trend-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-white text-black p-3 rounded-full shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 cursor-pointer">
                  <Eye size={18} />
                </button>
              </div>
            </div>

            {/* Datos del Producto */}
            <div className="p-5 flex flex-col  flex-grow justify-between">
              <div>
                <span className="text-[10px] font-mono text-trend-light-gray uppercase tracking-wider block mb-1">
                  {producto.categoria}
                </span>
                <h3 className="text-base font-bold uppercase tracking-tight text-[var(--accent-neon)] group-hover:text-[var(--text-muted)] transition-colors duration-300">
                  {producto.nombre}
                </h3>
                <p className="mt-2 text-xs text-trend-light-gray/80 line-clamp-2 font-light">
                  {producto.descripcion}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-lg font-mono font-bold text-[var(--text-main)]">
                  ${producto.precio.toLocaleString('es-AR')}
                </span>
                <button 
                  onClick={() => setProductoSeleccionado(producto)}
                  className="text-[10px] uppercase tracking-widest font-bold text-trend-neon flex items-center gap-1 group/btn cursor-pointer">
                  Adquirir 
                  <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {productoSeleccionado && (
        <ModalConsulta 
          producto={productoSeleccionado} 
          onClose={() => setProductoSeleccionado(null)} 
        />
      )}
    </section>
  );
};

export default Catalog;