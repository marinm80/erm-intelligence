import { Shield, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-[var(--color-stone-200)] z-50">
      <div className="container-custom h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-[var(--color-brand-red)] p-1.5 rounded-lg">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <span className="font-display text-xl font-bold tracking-tight text-[var(--color-stone-800)] uppercase">
            ERM <span className="text-[var(--color-brand-red)]">Intelligence</span>
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--color-stone-500)]">
          <a href="/#soluciones" className="hover:text-[var(--color-brand-red)] transition-colors">Soluciones</a>
          <a href="/#join-us" className="relative hover:text-[var(--color-brand-red)] transition-colors group">
            Careers
            <span className="absolute -top-3 -right-6 px-1.5 py-0.5 rounded-full bg-red-100 text-[8px] text-[var(--color-brand-red)] font-bold animate-bounce">HIRING</span>
          </a>
          <a href="/#sobre-nosotros" className="hover:text-[var(--color-brand-red)] transition-colors">Sobre Nosotros</a>
          <a href="/#contacto" className="hover:text-[var(--color-brand-red)] transition-colors">Contáctenos</a>
        </nav>

        <a href="/#contacto" className="flex items-center gap-2 bg-[var(--color-brand-dark)] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-stone-800 transition-all group">
          Solicitar Cotización
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </header>
  );
};
