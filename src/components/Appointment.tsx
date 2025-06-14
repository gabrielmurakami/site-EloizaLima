import { Calendar, MessageCircle, Mail, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Appointment = () => {
  return (
    <section
      id="agendamento"
      className="section-padding bg-white"
    >
      <div className="max-w-5xl mx-auto container-padding text-center">
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif text-primary-foreground">
              Agende sua Consulta
            </h2>
            <div className="w-16 h-0.5 bg-primary/30 rounded-full mx-auto"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              Dê o primeiro passo em direção ao seu bem-estar. Escolha a forma
              mais conveniente para entrar em contato.
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-3xl border border-border/50 hover:shadow-lg smooth-transition group">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-green-100 smooth-transition">
                  <MessageCircle className="w-8 h-8 text-green-600" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-serif text-xl text-primary-foreground">
                    WhatsApp
                  </h3>
                  <p className="text-muted-foreground font-light">
                    Resposta rápida e prática
                  </p>
                </div>
                <Button
                  className="w-full bg-green-600 hover:bg-green-700 rounded-2xl h-12 text-primary"
                  onClick={() =>
                    window.open(
                      "https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta.",
                      "_blank"
                    )
                  }
                >
                  Conversar
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-border/50 hover:shadow-lg smooth-transition group">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-blue-100 smooth-transition">
                  <Calendar className="w-8 h-8 text-blue-600" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-serif text-xl text-primary-foreground">Calendly</h3>
                  <p className="text-muted-foreground font-light">
                    Agende diretamente na agenda
                  </p>
                </div>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 rounded-2xl h-12 text-primary"
                  onClick={() => window.open("https://calendly.com/", "_blank")}
                >
                  Agendar
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-border/50 hover:shadow-lg smooth-transition group">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-primary/20 smooth-transition">
                  <Mail className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-serif text-xl text-primary-foreground">E-mail</h3>
                  <p className="text-muted-foreground font-light">
                    Contato por e-mail
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="w-full rounded-2xl h-12 border-border/50 hover:bg-accent text-primary"
                  onClick={() =>
                    window.open(
                      "mailto:contato@email.com.br?subject=Agendamento de Consulta",
                      "_blank"
                    )
                  }
                >
                  Enviar E-mail
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>

          {/* Process Info */}
          <div className="bg-white p-10 rounded-3xl border border-border/50">
            <h3 className="text-2xl font-serif text-primary-foreground mb-10">
              Como funciona o agendamento
            </h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-primary-foreground font-medium text-lg">1</span>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-primary-foreground">Contato</h4>
                  <p className="text-muted-foreground text-sm font-light">
                    Entre em contato por uma das opções
                  </p>
                </div>
              </div>
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-primary-foreground font-medium text-lg">2</span>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-primary-foreground">Conversa</h4>
                  <p className="text-muted-foreground text-sm font-light">
                    Conversaremos sobre suas necessidades
                  </p>
                </div>
              </div>
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-primary-foreground font-medium text-lg">3</span>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-primary-foreground">Agendamento</h4>
                  <p className="text-muted-foreground text-sm font-light">
                    Escolheremos data e horário
                  </p>
                </div>
              </div>
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-primary-foreground font-medium text-lg">4</span>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-primary-foreground">Consulta</h4>
                  <p className="text-muted-foreground text-sm font-light">
                    Seu primeiro passo rumo ao bem-estar
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Availability */}
          <div className="flex items-center justify-center space-x-3 text-muted-foreground">
            <Clock size={20} />
            <span className="font-light">
              Normalmente respondo em até 2 horas durante horário comercial
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
