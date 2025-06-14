
import { Heart, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="section-padding pt-32 bg-gradient-to-b from-primary via-primary to-primary/70">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-10 animate-fade-in">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <Sparkles size={20} className="text-background/60" />
                <span className="text-sm font-medium text-background tracking-wide uppercase">Psicóloga Clínica</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-background leading-tight">
                Eloiza Lima
              </h1>
              
              <div className="w-20 h-0.5 bg-background/30 rounded-full"></div>
              
              <p className="text-xl md:text-2xl text-background/80 leading-relaxed font-light max-w-lg">
                Um espaço seguro e acolhedor para cuidar da sua saúde mental 
                com carinho e profissionalismo.
              </p>
            </div>
            
            <div className="flex items-center space-x-4 text-background/70">
              <Heart size={18} className="text-background/50" />
              <span className="text-sm font-medium">Cuidando com dedicação desde 2021</span>
            </div>
          </div>

          {/* Professional Photo */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative w-full max-w-lg mx-auto">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-background to-background/80 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Eloiza Lima - Psicóloga"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Subtle Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-background/20 rounded-full -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-background/40 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
