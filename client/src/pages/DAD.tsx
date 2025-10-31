import { GlobalHeader } from "@/components/GlobalHeader";
import { CookieBar } from "@/components/CookieBar";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";

export default function DAD() {
  const dadMenuItems = [
    { label: "Home", href: "/dad" },
    { label: "Portfólio", href: "/dad#portfolio" },
    { label: "Clipping", href: "/dad#clipping" },
  ];

  return (
    <div className="min-h-screen bg-background" data-section="dad">
      <CookieBar />
      <ScrollToTop />

      <GlobalHeader
        section="dad"
        logo="DAD — Doug Amorim Design"
        menuItems={dadMenuItems}
      />

      {/* HERO */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl">
            <div className="inline-block bg-[#1D4ED8]/10 border border-[#1D4ED8]/30 rounded-full px-4 py-2 text-sm font-medium text-[#1D4ED8] mb-6">
              Branding, Identidade e Presença Digital
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              DAD — Doug Amorim Design
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Branding, posicionamento e presença digital para negócios que precisam existir com autoridade.
              Identidade visual, site institucional, landing pages de conversão e material comercial.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="rounded-full"
                style={{ backgroundColor: "#1D4ED8" }}
              >
                Quero orçar DAD
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full"
                style={{ borderColor: "#1D4ED8", color: "#1D4ED8" }}
              >
                Ver Portfólio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="py-16 border-t border-border">
        <div className="container">
          <h2 className="text-3xl md:text-4xl mb-12">O que fazemos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-medium mb-4" style={{ color: "#1D4ED8" }}>
                Marca e narrativa
              </h3>
              <p className="text-muted-foreground">
                Identidade visual completa, posicionamento estratégico e narrativa comercial que conecta com seu público.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-medium mb-4" style={{ color: "#1D4ED8" }}>
                Website & Landing Pages
              </h3>
              <p className="text-muted-foreground">
                Sites institucionais, landing pages de conversão e presença digital profissional que gera resultados.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-medium mb-4" style={{ color: "#1D4ED8" }}>
                Catálogo de produtos / Portfólio
              </h3>
              <p className="text-muted-foreground">
                Apresentação profissional de produtos e serviços com foco em conversão e experiência do cliente.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-medium mb-4" style={{ color: "#1D4ED8" }}>
                Social kit e materiais de venda
              </h3>
              <p className="text-muted-foreground">
                Material comercial completo: apresentações, catálogos, social media kit e ferramentas de vendas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFÓLIO */}
      <section id="portfolio" className="py-16 border-t border-border bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl mb-4">Portfólio</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Projetos selecionados que demonstram nossa abordagem: clareza, beleza funcional e entrega real.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-[#1D4ED8]/20 to-[#1D4ED8]/5"></div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2">Projeto {i}</h3>
                  <p className="text-sm text-muted-foreground">
                    Branding completo e presença digital
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIPPING */}
      <section id="clipping" className="py-16 border-t border-border">
        <div className="container">
          <h2 className="text-3xl md:text-4xl mb-4">Clipping</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Reconhecimento, parcerias e menções na mídia.
          </p>
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-[#1D4ED8]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold" style={{ color: "#1D4ED8" }}>B</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Parceria Belarte Company</h3>
                  <p className="text-sm text-muted-foreground">
                    Desenvolvimento de identidade visual e presença digital para linha premium de produtos artesanais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-6">Pronto para começar?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Entre em contato e vamos transformar sua visão em presença digital profissional.
            </p>
            <Button
              size="lg"
              className="rounded-full"
              style={{ backgroundColor: "#1D4ED8" }}
            >
              Iniciar projeto DAD
            </Button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2B2B2B] text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="font-medium text-lg mb-2">DAD — Doug Amorim Design</div>
              <div className="text-sm text-white/70 mb-3">Branding & Presença Digital</div>
              <div className="text-xs text-white/60">
                Parte do ecossistema DA.co<br />
                Jambeiro / SP · Brasil
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold uppercase tracking-wide mb-3">Navegação</div>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="/dad" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="/dad#portfolio" className="hover:text-white transition-colors">Portfólio</a></li>
                <li><a href="/dad#clipping" className="hover:text-white transition-colors">Clipping</a></li>
                <li><a href="/" className="hover:text-white transition-colors">Voltar ao DA.co</a></li>
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold uppercase tracking-wide mb-3">Contato</div>
              <ul className="space-y-2 text-sm text-white/80">
                <li>Douglas@DougAmorim.com</li>
                <li>WhatsApp: +55 (11) 97581-3741</li>
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold uppercase tracking-wide mb-3">Legal</div>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="/termos.html" className="hover:text-white transition-colors">Termos de Uso</a></li>
                <li><a href="/privacidade.html" className="hover:text-white transition-colors">Política de Privacidade</a></li>
                <li><a href="/cookies.html" className="hover:text-white transition-colors">Cookies & Dados</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 text-center text-xs text-white/60">
            © 2025 DA.co — Douglas Amorim Company. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
