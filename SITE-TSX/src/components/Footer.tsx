
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border/50 py-16">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="text-center space-y-8">
          {/* Logo */}
          <div className="font-serif text-3xl font-medium text-primary">
            Eloiza Lima
          </div>
          
          {/* Tagline */}
          <p className="text-muted-foreground max-w-md mx-auto font-light text-lg">
            Cuidando da sua saúde mental com carinho, profissionalismo e dedicação.
          </p>
          
          {/* Professional Info */}
          <div className="space-y-3 text-muted-foreground font-light">
            <p>CRP 06/220078 - Psicóloga Clínica</p>
            <p>Especialista em Terapia Cognitivo-Comportamental</p>
          </div>
          
          {/* Divider */}
          <div className="w-20 h-px bg-border/50 mx-auto"></div>
          
          {/* Copyright */}
          <div className="flex items-center justify-center space-x-3 text-muted-foreground font-light">
            <span>© 2025 Eloiza Lima. Todos os direitos reservados.</span>
            {/* <Heart size={16} className="text-primary/60" /> */}
          </div>
          
          {/* Additional Info */}
          <p className="text-xs text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Este site foi desenvolvido para fins informativos. O conteúdo não substitui 
            uma consulta presencial. Em caso de emergência, procure atendimento médico imediato.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
