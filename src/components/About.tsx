
import { GraduationCap, Heart, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-secondary to-accent">
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Ambiente acolhedor de terapia"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Subtle Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-primary/5 rounded-full -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-accent/30 rounded-full -z-10"></div>
          </div>

          {/* Content */}
          <div className="space-y-10 order-1 lg:order-2">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-tight">
                Sobre mim
              </h2>
              <div className="w-16 h-0.5 bg-primary/30 rounded-full"></div>
            </div>

            <div className="space-y-8 text-muted-foreground leading-relaxed text-lg font-light">
              <p>
                Sou psicóloga formada pela Universidade São Francisco, com especialização em 
                Terapia Cognitivo-Comportamental e *mais de 8 anos de experiência* dedicados 
                ao cuidado da saúde mental.
              </p>
              
              <p>
                Minha abordagem é centrada no acolhimento e na escuta ativa, criando um 
                ambiente seguro onde você pode se expressar livremente e encontrar 
                caminhos para o bem-estar.
              </p>
              
              <p>
                Acredito que cada pessoa possui recursos únicos para superar desafios 
                e construir uma vida mais plena e significativa.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-8 pt-6">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground text-lg">Formação</h3>
                  <p className="text-sm text-muted-foreground font-light mt-1">Especialização em TCC</p>
                </div>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground text-lg">Abordagem</h3>
                  <p className="text-sm text-muted-foreground font-light mt-1">Humanizada</p>
                </div>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground text-lg">Experiência</h3>
                  <p className="text-sm text-muted-foreground font-light mt-1">2+ anos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
