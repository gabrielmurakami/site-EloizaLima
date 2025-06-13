
import { GraduationCap, Heart, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-serif text-foreground">
                Sobre mim
              </h2>
              <div className="w-16 h-1 bg-primary rounded-full"></div>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Sou psicóloga formada pela Universidade Federal, com especialização em 
                Terapia Cognitivo-Comportamental e mais de 8 anos de experiência no 
                atendimento clínico.
              </p>
              
              <p>
                Minha abordagem é humanizada e acolhedora, baseada na escuta ativa e no 
                respeito à singularidade de cada pessoa. Acredito que todos temos recursos 
                internos para superar desafios e construir uma vida mais plena.
              </p>
              
              <p>
                Minha missão é oferecer um espaço seguro onde você possa se expressar 
                livremente, compreender melhor suas emoções e desenvolver ferramentas 
                para enfrentar os desafios da vida.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-6 pt-8">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Formação</h3>
                  <p className="text-sm text-muted-foreground">Especialização em TCC</p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Abordagem</h3>
                  <p className="text-sm text-muted-foreground">Humanizada</p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Missão</h3>
                  <p className="text-sm text-muted-foreground">Bem-estar</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-muted to-accent">
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Ambiente acolhedor de terapia"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/30 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
