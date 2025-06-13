
import { Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="section-padding pt-32 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight">
                Dra. Ana Silva
              </h1>
              <h2 className="text-xl md:text-2xl text-primary font-medium">
                Psicóloga Clínica
              </h2>
              <div className="w-16 h-1 bg-primary rounded-full"></div>
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
              Bem-vindo ao meu espaço de acolhimento. Aqui, você encontrará um ambiente seguro para 
              explorar suas emoções e construir caminhos para o bem-estar.
            </p>
            
            <div className="flex items-center space-x-3 text-primary">
              <Heart size={20} className="text-primary/70" />
              <span className="text-sm font-medium">Cuidando com carinho desde 2015</span>
            </div>
          </div>

          {/* Professional Photo */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-accent to-muted shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Dra. Ana Silva - Psicóloga"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/50 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
