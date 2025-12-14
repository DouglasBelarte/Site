import { useState } from "react";
import { GlobalHeader } from "@/components/GlobalHeader";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CookieBar } from "@/components/CookieBar";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Info() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "Doug Amorim Design",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada para info@dougamorim.com (placeholder).");
    setFormData({ nome: "", email: "", assunto: "Doug Amorim Design", mensagem: "" });
  };

  const dacoMenuItems = [
    { label: "HOME", href: "/" },
    { label: "DESIGN", href: "/dad" },
    { label: "MUNDO ROÇA", href: "/mrd" },
    { label: "EAD", href: "/ead" },
    { label: "LAB", href: "/lab" },
  ];

  const translations: Record<string, Record<string, string>> = {
    PT: {
      title: "Informações e Contato",
      subtitle: "Entre em contato conosco através do formulário abaixo ou pelo WhatsApp.",
      nameLabel: "Nome",
      emailLabel: "E-mail",
      subjectLabel: "Área / Tema",
      messageLabel: "Mensagem",
      submitButton: "Enviar Mensagem",
      whatsappText: "Ou fale conosco pelo WhatsApp",
    },
    EN: {
      title: "Information and Contact",
      subtitle: "Get in touch with us through the form below or via WhatsApp.",
      nameLabel: "Name",
      emailLabel: "Email",
      subjectLabel: "Area / Subject",
      messageLabel: "Message",
      submitButton: "Send Message",
      whatsappText: "Or contact us via WhatsApp",
    },
    FR: {
      title: "Informations et Contact",
      subtitle: "Contactez-nous via le formulaire ci-dessous ou par WhatsApp.",
      nameLabel: "Nom",
      emailLabel: "E-mail",
      subjectLabel: "Domaine / Sujet",
      messageLabel: "Message",
      submitButton: "Envoyer le Message",
      whatsappText: "Ou contactez-nous via WhatsApp",
    },
  };

  const t = translations[language] || translations.PT;

  return (
    <div className="min-h-screen bg-background" data-section="daco">
      <CookieBar />
      <ScrollToTop />

      <GlobalHeader
        section="daco"
        logo="DA.co — Douglas Amorim Company"
        menuItems={dacoMenuItems}
      />
      <Breadcrumb />

      {/* HERO */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl mb-4">{t.title}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* FORMULÁRIO */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulário */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium mb-2">
                    {t.nameLabel}
                  </label>
                  <Input
                    type="text"
                    id="nome"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    {t.emailLabel}
                  </label>
                  <Input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="assunto" className="block text-sm font-medium mb-2">
                    {t.subjectLabel}
                  </label>
                  <select
                    id="assunto"
                    value={formData.assunto}
                    onChange={(e) => setFormData({ ...formData, assunto: e.target.value })}
                    required
                    className="w-full px-3 py-2 border border-border rounded-md bg-background"
                  >
                    <option>Doug Amorim Design</option>
                    <option>Mundo Roça</option>
                    <option>EAD Let's Go Beyond</option>
                    <option>Laboratório Criativo</option>
                    <option>Assunto Geral</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium mb-2">
                    {t.messageLabel}
                  </label>
                  <Textarea
                    id="mensagem"
                    rows={6}
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full rounded-full"
                  style={{ backgroundColor: "rgb(245, 135, 79)" }}
                >
                  {t.submitButton}
                </Button>
              </form>
            </div>

            {/* WhatsApp e Informações */}
            <div className="space-y-8">
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-2xl font-medium mb-4">{t.whatsappText}</h3>
                <p className="text-muted-foreground mb-6">
                  Atendimento comercial direto via WhatsApp Business.
                </p>
                <a
                  href="https://wa.me/5511975813741"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="w-full rounded-full"
                    style={{ backgroundColor: "rgb(0, 168, 89)" }}
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    +55 11 97581-3741
                  </Button>
                </a>
              </div>

              <div className="bg-muted/30 rounded-2xl p-8">
                <h3 className="text-xl font-medium mb-4">E-mail Direto</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Para assuntos gerais:
                </p>
                <a href="mailto:info@dougamorim.com" className="text-[rgb(245,135,79)] hover:underline">
                  info@dougamorim.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
