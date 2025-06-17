import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex items-center justify-between h-20">
          <div className="font-serif text-2xl font-medium text-primary-foreground">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-primary-foreground hover:text-muted-foreground smooth-transition font-light"
            >
              Eloiza Lima
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-12">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-primary-foreground hover:text-muted-foreground smooth-transition font-light"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-primary-foreground hover:text-muted-foreground smooth-transition font-light"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-primary-foreground hover:text-muted-foreground smooth-transition font-light"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("agendamento")}
              className="text-primary-foreground hover:text-muted-foreground smooth-transition font-light"
            >
              Agendamento
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-primary-foreground hover:text-muted-foreground smooth-transition font-light"
            >
              Contato
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-primary-foreground hover:text-muted-foreground smooth-transition"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-border/50 animate-fade-in-up">
            <nav className="flex flex-col space-y-6">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-left text-primary-foreground hover:text-primary smooth-transition font-light"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-left text-primary-foreground hover:text-primary smooth-transition font-light"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-left text-primary-foreground hover:text-primary smooth-transition font-light"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("agendamento")}
                className="text-left text-primary-foreground hover:text-primary smooth-transition font-light"
              >
                Agendamento
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-left text-primary-foreground hover:text-primary smooth-transition font-light"
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
