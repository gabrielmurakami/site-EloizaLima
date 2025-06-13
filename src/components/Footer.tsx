
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border py-12">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center space-y-6">
          {/* Logo */}
          <div className="font-serif text-2xl font-medium text-primary">
            Dra. Ana Silva
          </div>
          
          {/* Tagline */}
          <p className="text-muted-foreground max-w-md mx-auto">
            Cuidando da sua saúde mental com carinho, profissionalismo e dedicação.
          </p>
          
          {/* Professional Info */}
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>CRP 06/123456 - Psicóloga Clínica</p>
            <p>Especialista em Terapia Cognitivo-Comportamental</p>
          </div>
          
          {/* Divider */}
          <div className="w-16 h-px bg-border mx-auto"></div>
          
          {/* Copyright */}
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <span>© 2024 Dra. Ana Silva. Todos os direitos reservados.</span>
            <Heart size={16} className="text-primary/60" />
          </div>
          
          {/* Additional Info */}
          <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
            Este site foi desenvolvido para fins informativos. O conteúdo não substitui 
            uma consulta presencial. Em caso de emergência, procure atendimento médico imediato.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
