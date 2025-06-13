
import { Users, User, Video, MapPin } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: User,
      title: "Terapia Individual",
      description: "Atendimento personalizado para questões como ansiedade, depressão, autoestima e desenvolvimento pessoal.",
      duration: "50 min",
    },
    {
      icon: Users,
      title: "Terapia de Casal",
      description: "Trabalho focado na melhoria da comunicação, resolução de conflitos e fortalecimento do relacionamento.",
      duration: "60 min",
    },
    {
      icon: Video,
      title: "Atendimento Online",
      description: "Sessões por videochamada com a mesma qualidade do atendimento presencial, no conforto da sua casa.",
      duration: "50 min",
    },
    {
      icon: MapPin,
      title: "Atendimento Presencial",
      description: "Consultas no consultório, em ambiente acolhedor e seguro, localizado no centro da cidade.",
      duration: "50 min",
    },
  ];

  return (
    <section id="servicos" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground">
            Serviços
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofereco diferentes modalidades de atendimento para atender às suas necessidades 
            e preferências de forma personalizada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl border border-border hover:shadow-lg smooth-transition group"
            >
              <div className="space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 smooth-transition">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-serif text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <span className="text-sm font-medium text-primary">
                    Duração: {service.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center bg-card p-8 rounded-2xl border border-border">
          <h3 className="text-xl font-serif text-foreground mb-4">
            Informações Importantes
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-muted-foreground">
            <div>
              <strong className="text-foreground block mb-1">Horários</strong>
              Segunda a sexta: 8h às 18h<br />
              Sábados: 8h às 12h
            </div>
            <div>
              <strong className="text-foreground block mb-1">Modalidades</strong>
              Presencial e online<br />
              Individual e casal
            </div>
            <div>
              <strong className="text-foreground block mb-1">Abordagem</strong>
              Terapia Cognitivo-Comportamental<br />
              Técnicas humanísticas
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
