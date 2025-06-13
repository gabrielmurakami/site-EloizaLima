
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex items-center justify-between h-16">
          <div className="font-serif text-xl font-medium text-primary">
            Dra. Ana Silva
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-foreground hover:text-primary smooth-transition"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-foreground hover:text-primary smooth-transition"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-foreground hover:text-primary smooth-transition"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('agendamento')}
              className="text-foreground hover:text-primary smooth-transition"
            >
              Agendamento
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-foreground hover:text-primary smooth-transition"
            >
              Contato
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary smooth-transition"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in-up">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-left text-foreground hover:text-primary smooth-transition"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-left text-foreground hover:text-primary smooth-transition"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-left text-foreground hover:text-primary smooth-transition"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('agendamento')}
                className="text-left text-foreground hover:text-primary smooth-transition"
              >
                Agendamento
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-left text-foreground hover:text-primary smooth-transition"
              >
                Contato
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
