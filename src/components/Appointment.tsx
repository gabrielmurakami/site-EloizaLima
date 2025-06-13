
import { Calendar, MessageCircle, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Appointment = () => {
  return (
    <section id="agendamento" className="section-padding bg-gradient-to-br from-primary/5 to-accent/20">
      <div className="max-w-4xl mx-auto container-padding text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">
              Agende sua Consulta
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full mx-auto"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dê o primeiro passo em direção ao seu bem-estar. Escolha a forma mais 
              conveniente para entrar em contato e agendar sua sessão.
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card p-6 rounded-2xl border border-border hover:shadow-lg smooth-transition">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-serif text-lg text-foreground">WhatsApp</h3>
                <p className="text-sm text-muted-foreground">
                  Resposta rápida e prática
                </p>
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta.', '_blank')}
                >
                  Conversar
                </Button>
              </div>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border hover:shadow-lg smooth-transition">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-serif text-lg text-foreground">Calendly</h3>
                <p className="text-sm text-muted-foreground">
                  Agende diretamente na agenda
                </p>
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.open('https://calendly.com/dranasilva', '_blank')}
                >
                  Agendar
                </Button>
              </div>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border hover:shadow-lg smooth-transition">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg text-foreground">E-mail</h3>
                <p className="text-sm text-muted-foreground">
                  Contato por e-mail
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open('mailto:contato@dranasilva.com.br?subject=Agendamento de Consulta', '_blank')}
                >
                  Enviar E-mail
                </Button>
              </div>
            </div>
          </div>

          {/* Process Info */}
          <div className="bg-card p-8 rounded-2xl border border-border">
            <h3 className="text-xl font-serif text-foreground mb-6">
              Como funciona o agendamento
            </h3>
            <div className="grid md:grid-cols-4 gap-6 text-sm">
              <div className="text-center space-y-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-primary font-medium">1</span>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Contato</h4>
                  <p className="text-muted-foreground">Entre em contato por uma das opções</p>
                </div>
              </div>
              <div className="text-center space-y-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-primary font-medium">2</span>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Conversa</h4>
                  <p className="text-muted-foreground">Conversaremos sobre suas necessidades</p>
                </div>
              </div>
              <div className="text-center space-y-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-primary font-medium">3</span>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Agendamento</h4>
                  <p className="text-muted-foreground">Escolheremos data e horário</p>
                </div>
              </div>
              <div className="text-center space-y-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-primary font-medium">4</span>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Consulta</h4>
                  <p className="text-muted-foreground">Seu primeiro passo rumo ao bem-estar</p>
                </div>
              </div>
            </div>
          </div>

          {/* Availability */}
          <div className="flex items-center justify-center space-x-3 text-muted-foreground">
            <Clock size={20} />
            <span>Normalmente respondo em até 2 horas durante horário comercial</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
