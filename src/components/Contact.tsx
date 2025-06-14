
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Instagram, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";
import { fromTheme } from "tailwind-merge";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    emailjs
      .send(
        "service_k0latgo",
        "template_bcnrj78",
        formData, // precisa bater com os campos definidos no template
        "16D2yOXa_MNQ0p0yI" // sua chave pública
      )
      .then(() => {
        toast({
          title: "Mensagem enviada!",
          description: "Obrigada pelo contato. Responderei em breve.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      })
      .catch((error) => {
        console.error("Erro ao enviar e-mail:", error);
        toast({
          title: "Erro ao enviar",
          //description: "Tente novamente mais tarde.",
          description: `Erro: ${JSON.stringify(error)}`,
        });
      });

    // setFormData({ name: "", email: "", phone: "", message: "" });SSS
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contato" className="section-padding bg-primary">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-background">
            Entre em Contato
          </h2>
          <div className="w-16 h-1 bg-background rounded-full mx-auto"></div>
          <p className="text-lg text-background/80 max-w-2xl mx-auto">
            Estou aqui para ajudar. Entre em contato para tirar dúvidas ou
            agendar sua consulta.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif text-background mb-6">
                Envie uma Mensagem
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-background mb-2"
                    >
                      Nome *
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-background/10 border-background/20 text-background placeholder:text-background/60"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-background mb-2"
                    >
                      Telefone
                    </label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-background/10 border-background/20 text-background placeholder:text-background/60"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-background mb-2"
                  >
                    E-mail *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-background/10 border-background/20 text-background placeholder:text-background/60"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-background mb-2"
                  >
                    Mensagem *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full h-32 resize-none bg-background/10 border-background/20 text-background placeholder:text-background/60"
                    placeholder="Conte um pouco sobre o que gostaria de conversar..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full sm:w-auto bg-background text-primary hover:bg-background/90"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif text-background mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-background/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <h4 className="font-medium text-background">Telefone</h4>
                    <p className="text-background/80">
                      (11) 99999-9999
                      <br />
                      Segunda a sexta: 18h às 21h
                      <br />
                      Sábados: 9h às 12h
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-background/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <h4 className="font-medium text-background">E-mail</h4>
                    <p className="text-background/80">
                      contato@eloizalima.com.br
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-medium text-background mb-4">
                Siga-me nas redes sociais
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-background/20 rounded-full flex items-center justify-center hover:bg-background/30 smooth-transition"
                >
                  <Instagram className="w-6 h-6 text-background" />
                </a>
                <a
                  href="https://linkedin.com/in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-background/20 rounded-full flex items-center justify-center hover:bg-background/30 smooth-transition"
                >
                  <Linkedin className="w-6 h-6 text-background" />
                </a>
              </div>
            </div>

            {/* Privacy Note */}
            <div className="bg-background/10 p-6 rounded-xl">
              <h4 className="font-medium text-background mb-2">
                Privacidade e Sigilo
              </h4>
              <p className="text-sm text-background/80">
                Todas as informações compartilhadas são tratadas com total
                sigilo e confidencialidade, conforme o Código de Ética do
                Psicólogo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
