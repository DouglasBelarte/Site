import { GlobalHeader } from "@/components/GlobalHeader";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CookieBar } from "@/components/CookieBar";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export default function DAD() {
  const { language } = useLanguage();
  const t = translations[language];
  const dadMenuItems = [
    { label: "Home", href: "/dad" },
    { label: "Manifesto", href: "/dad/manifesto" },
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
      <Breadcrumb />

      {/* HERO */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl">
            <div className="inline-block bg-[rgb(44,110,181)]/10 border border-[rgb(44,110,181)]/30 rounded-full px-4 py-2 text-sm font-medium text-[rgb(44,110,181)] mb-6">
              {t.dad_subtitle}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              {t.dad_title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              {t.dad_description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="rounded-full hover:opacity-90 transition-all"
                style={{ backgroundColor: "rgb(44, 110, 181)" }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 4px 12px rgba(245, 135, 79, 0.3)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
              >
                {t.dad_cta}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full hover:border-[rgb(245,135,79)] hover:text-[rgb(245,135,79)] transition-all"
                style={{ borderColor: "rgb(44, 110, 181)", color: "rgb(44, 110, 181)" }}
              >
                {t.dad_portfolio}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="py-16 border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">Clareza, beleza funcional e entrega real.</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Um só DNA: clareza, beleza funcional e entrega real. Marca e narrativa. Website & Landing Pages.
                Catálogo de produtos / Portfólio. Social kit e materiais de venda.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Marca e narrativa</li>
                <li>• Website & Landing Pages</li>
                <li>• Catálogo de produtos / Portfólio</li>
                <li>• Social kit e materiais de venda</li>
              </ul>
            </div>
            <div className="aspect-video bg-gradient-to-br from-[rgb(44,110,181)]/20 to-[rgb(44,110,181)]/5 rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* PORTFÓLIO */}
      <section id="portfolio" className="py-16 border-t border-border bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl mb-12">Portfólio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-[rgb(44,110,181)]/20 to-[rgb(44,110,181)]/5"></div>
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-2">Projeto {i}</h3>
                  <p className="text-sm text-muted-foreground">
                    Branding completo, site institucional e materiais de comunicação.
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
          <h2 className="text-3xl md:text-4xl mb-6">Clipping & Parceiros</h2>
          <div className="max-w-3xl">
            <p className="text-lg text-muted-foreground mb-12">
              Reconhecimentos, publicações e parcerias que marcam nossa trajetória.
            </p>
            <div className="space-y-6">
              <div className="border-l-4 pl-6" style={{ borderColor: "#79458E" }}>
                <h3 className="text-lg font-medium mb-2">Belarte Company</h3>
                <p className="text-sm text-muted-foreground">
                  Parceria estratégica em projetos de branding e comunicação visual para o mercado europeu.
                </p>
              </div>
              <div className="border-l-4 pl-6" style={{ borderColor: "#79458E" }}>
                <h3 className="text-lg font-medium mb-2">Publicações</h3>
                <p className="text-sm text-muted-foreground">
                  Trabalhos destacados em portais de design e inovação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-border bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-6">Vamos criar algo com autoridade?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Conte o que você precisa. Eu respondo em voz humana — não resposta pasteurizada.
            </p>
            <Button
              size="lg"
              className="rounded-full"
              style={{ backgroundColor: "#79458E" }}
            >
              Quero orçar DAD →
            </Button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2B2B2B] text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="font-medium text-lg mb-2">DA.co — Douglas Amorim Company</div>
              <div className="text-sm text-white/70 mb-3">Não só uma empresa, um estado de espírito.</div>
              <div className="text-xs text-white/60">
                Base Jambeiro/SP · Brasil<br />
                Atuação Brasil / remoto
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold uppercase tracking-wide mb-3">Mapa</div>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="/" className="hover:text-white transition-colors">Manifesto</a></li>
                <li><a href="/dad" className="hover:text-white transition-colors">DAD — Doug Amorim Design</a></li>
                <li><a href="/mrd" className="hover:text-white transition-colors">Roça / Mundo Roça Digital</a></li>
                <li><a href="/ead" className="hover:text-white transition-colors">EAD — Let's Go Beyond</a></li>
                <li><a href="/lab" className="hover:text-white transition-colors">LAB — Pesquisa & Protótipo</a></li>
                <li><a href="/#blog" className="hover:text-white transition-colors">Blog / Bastidores</a></li>
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold uppercase tracking-wide mb-3">Contato Direto</div>
              <ul className="space-y-2 text-sm text-white/80">
                <li>Iniciar projeto</li>
                <li>Douglas@DougAmorim.com</li>
                <li>WhatsApp comercial: +55 (11) 97581-3741</li>
                <li>Atendimento humano-assistido Daniel (beta)</li>
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold uppercase tracking-wide mb-3">Legal</div>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="/termos.html" className="hover:text-white transition-colors">Termos de Uso</a></li>
                <li><a href="/privacidade.html" className="hover:text-white transition-colors">Política de Privacidade</a></li>
                <li><a href="/cookies.html" className="hover:text-white transition-colors">Cookies & Dados</a></li>
                <li className="text-white/60 text-xs pt-2">Contato PT-BR. Disponível EN em breve.</li>
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
