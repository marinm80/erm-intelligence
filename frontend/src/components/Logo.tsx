import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

export const Logo = ({ className = '', onClick }: LogoProps) => {
  return (
    <Link 
      to="/" 
      onClick={onClick}
      className={`group flex items-center gap-3 ${className}`}
    >
      {/* Icon Container */}
      <div className="relative shrink-0 flex items-center justify-center w-12 h-12 mr-1">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-(--color-brand-red) blur-xl opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-700" />
        
        <svg 
          width="48" 
          height="48" 
          viewBox="0 0 48 48" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="relative z-10"
        >
          {/* Neural Network Connections */}
          <g className="stroke-stone-300 stroke-[1.5] group-hover:stroke-stone-400 transition-colors duration-700">
            {/* Input to Hidden layer */}
            <line x1="10" y1="16" x2="24" y2="10" />
            <line x1="10" y1="16" x2="24" y2="24" />
            <line x1="10" y1="16" x2="24" y2="38" className="opacity-40" />
            
            <line x1="10" y1="32" x2="24" y2="10" className="opacity-40" />
            <line x1="10" y1="32" x2="24" y2="24" />
            <line x1="10" y1="32" x2="24" y2="38" />
            
            {/* Hidden to Output layer */}
            <line x1="24" y1="10" x2="38" y2="16" />
            <line x1="24" y1="10" x2="38" y2="32" className="opacity-40" />
            
            <line x1="24" y1="24" x2="38" y2="16" />
            <line x1="24" y1="24" x2="38" y2="32" />
            
            <line x1="24" y1="38" x2="38" y2="16" className="opacity-40" />
            <line x1="24" y1="38" x2="38" y2="32" />
          </g>

          {/* Network Nodes (Neurons) */}
          <g className="fill-white stroke-stone-800 stroke-[2.5]">
            <circle cx="10" cy="16" r="3.5" className="group-hover:fill-stone-100 transition-colors" />
            <circle cx="10" cy="32" r="3.5" className="group-hover:fill-stone-100 transition-colors" />
            
            <circle cx="24" cy="10" r="3.5" className="group-hover:fill-stone-100 transition-colors" />
            <circle cx="24" cy="38" r="3.5" className="group-hover:fill-stone-100 transition-colors" />
            
            <circle cx="38" cy="16" r="3.5" className="group-hover:fill-stone-100 transition-colors" />
            <circle cx="38" cy="32" r="3.5" className="group-hover:fill-stone-100 transition-colors" />
          </g>

          {/* Central Active Core (AI Process) */}
          <circle 
            cx="24" 
            cy="24" 
            r="4.5" 
            className="fill-(--color-brand-red) animate-pulse shadow-xl" 
            style={{ animationDuration: '2s' }}
          />
          <circle 
            cx="24" 
            cy="24" 
            r="10" 
            stroke="var(--color-brand-red)" 
            strokeWidth="1.5" 
            className="opacity-30 group-hover:scale-[1.3] group-hover:opacity-10 transition-all duration-700 origin-center" 
          />
          
          {/* Flow indicators */}
          <circle cx="17" cy="20" r="1.5" className="fill-stone-400 group-hover:fill-(--color-brand-red) transition-colors duration-300" />
          <circle cx="31" cy="28" r="1.5" className="fill-stone-400 group-hover:fill-(--color-brand-red) transition-colors duration-500 delay-100" />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline">
          <span className="text-2xl font-extrabold tracking-tight text-stone-900">
            ERM
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-(--color-brand-red) ml-1 mb-1 shadow-[0_0_8px_var(--color-brand-red)]" />
        </div>
        <span className="text-[0.65rem] uppercase tracking-[0.3em] font-medium text-stone-500 -mt-1">
          Intelligence
        </span>
      </div>
    </Link>
  );
};
