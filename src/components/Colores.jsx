import { useState } from 'react';
import { Palette, Settings } from 'lucide-react';

const PALETAS = [
  {
    name: 'Volt Dark (Default)',
    neon: '#CCFF00',
    dark: '#122315',
    bgMain: '#0B0B0B',
    bgCard: '#161616',
    textMuted: '#A0A0A0',
    textMain: '#F5F5F5',
  },
  {
    /* Link 1: 8ecae6 - 219ebc - 023047 - ffb703 - fb8500 */
    name: 'Summer & Tech (Light)',
    neon: '#023047',       // Azul profundo para destacar
    dark: '#8ECAE6',       // Celeste suave de fondo
    bgMain: '#F4F9FC',     // Fondo claro limpio
    bgCard: '#FFFFFF',     // Tarjetas blancas
    textMuted: '#219EBC',   // Azul medio para detalles secundarios
    textMain: '#023047',   // Azul marino para lectura principal
  },
  {
    /* Link 2: 780000 - c1121f - fdf0d5 - 003049 - 669bbc */
    name: 'Classic Luxury (Light)',
    neon: '#780000',       // Rojo vino elegante
    dark: '#FDF0D5',       // Crema premium para cápsulas
    bgMain: '#F7F4EF',     // Fondo tiza suave
    bgCard: '#FFFFFF',     // Tarjetas blancas
    textMuted: '#669BBC',   // Azul acero secundario
    textMain: '#003049',   // Azul noche de alta legibilidad
  },
  {
    /* Link 3: 0466c8 a 979dac (Escala de azules) */
    name: 'Corporate Blue (Dark)',
    neon: '#0466C8',       // Azul eléctrico brillante
    dark: '#001845',       // Azul ultra profundo de fondo de botón
    bgMain: '#001233',     // Fondo azul medianoche
    bgCard: '#002855',     // Tarjetas azul marino estructuradas
    textMuted: '#7D8597',   // Gris azulado sutil
    textMain: '#979DAC',   // Texto claro frío
  },
  {
    /* Link 4: 10002b a e0aaff (Escala de púrpuras) */
    name: 'Neon Neon (Dark)',
    neon: '#E0AAFF',       // Violeta neón brillante
    dark: '#3C096C',       // Púrpura eléctrico intermedio
    bgMain: '#10002B',     // Fondo negro morado
    bgCard: '#240046',     // Tarjetas místicas
    textMuted: '#9D4EDD',   // Púrpura de realce
    textMain: '#F3E5F5',   // Blanco lavado rosáceo
  },
  {
    /* Link 5: 7f5539 - a68a64 - ede0d4 - 656d4a - 414833 */
    name: 'Earth & Organic (Light)',
    neon: '#414833',       // Verde oliva oscuro para acento
    dark: '#EDE0D4',       // Beige orgánico de fondo de botón
    bgMain: '#FBF9F6',     // Fondo arena claro
    bgCard: '#FFFFFF',     // Tarjetas blancas puras
    textMuted: '#A68A64',   // Café dorado secundario
    textMain: '#7F5539',   // Marrón cuero principal
  },
  {
    /* Link 5: 7f5539 - a68a64 - ede0d4 - 656d4a - 414833 */
    name: 'Mi paleta',
    neon: ' #fac748',       // Verde oliva oscuro para acento
    dark: '#0066ff',       // Beige orgánico de fondo de botón
    bgMain: '#1D2F6F',     // Fondo arena claro
    bgCard: '#0099ff',     // Tarjetas blancas puras
    textMuted: '#f88dad',   // Café dorado secundario
    textMain: '#ced3fd',   // Marrón cuero principal
  },
  {
    name: 'Mi paleta 2',
    neon: ' #eb5e28',       // Verde oliva oscuro para acento
    dark: '#252422',       // Beige orgánico de fondo de botón
    bgMain: '#403d39',     // Fondo arena claro
    bgCard: '#ccc5b9',     // Tarjetas blancas puras
    textMuted: '#fffcf2',   // Café dorado secundario
    textMain: '#2e2e2e',   // Marrón cuero principal
  }

];

const ColorPicker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePalette, setActivePalette] = useState('Volt Dark (Default)');

  const aplicarPaleta = (paleta) => {
    setActivePalette(paleta.name);
    
    const root = document.documentElement;
    root.style.setProperty('--accent-neon', paleta.neon);
    root.style.setProperty('--accent-dark', paleta.dark);
    root.style.setProperty('--bg-main', paleta.bgMain);
    root.style.setProperty('--bg-card', paleta.bgCard);
    root.style.setProperty('--text-muted', paleta.textMuted);
    root.style.setProperty('--text-main', paleta.textMain);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 font-mono text-[11px]">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-black text-white px-4 py-3 rounded-xl border border-white/10 hover:border-white/30 shadow-2xl cursor-pointer transition-all duration-300"
      >
        <Settings size={14} className={`transition-transform duration-700 ${isOpen ? 'rotate-180' : ''}`} />
        <span>MUESTRARIO DE PALETAS</span>
      </button>

      {isOpen && (
        <div className="absolute bottom-16 left-0 w-64 bg-black border border-white/10 p-4 rounded-2xl shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-200 text-white">
          <div className="flex items-center gap-1.5 text-gray-400 uppercase font-bold tracking-wider mb-3 pb-2 border-b border-white/5">
            <Palette size={12} />
            <span>Identidad de Marca</span>
          </div>

          <div className="flex flex-col gap-1.5">
            {PALETAS.map((paleta) => (
              <button
                key={paleta.name}
                onClick={() => aplicarPaleta(paleta)}
                className={`flex items-center justify-between w-full text-left p-2.5 rounded-xl transition-all cursor-pointer ${
                  activePalette === paleta.name 
                    ? 'bg-white/10 text-white font-bold border border-white/10' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{paleta.name}</span>
                <span 
                  className="w-3 h-3 rounded-full border border-white/20 flex-shrink-0 ml-2" 
                  style={{ backgroundColor: paleta.neon }}
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;