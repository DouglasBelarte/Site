import { GlobalHeader } from "@/components/GlobalHeader";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CookieBar } from "@/components/CookieBar";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export default function EAD() {
  const { language } = useLanguage();
  const t = translations[language];
  const eadMenuItems = [
    { label: "Home", href: "/ead" },
    { label: "Conteúdo", href: "/ead#conteudo" },
    { label: "Biblioteca", href: "/ead#biblioteca" },
  ];

  return (
    <div className="min-h-screen bg-background" data-section="ead">
      <CookieBar />
      <ScrollToTop />

      <GlobalHeader
        section="ead"
        logo="EAD — Let's Go Beyond"
        menuItems={eadMenuItems}
      />
      <Breadcrumb />

      {/* HERO */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl">
            <div className="inline-block bg-[#990099]/10 border border-[#990099]/30 rounded-full px-4 py-2 text-sm font-medium text-[#990099] mb-6">
              {t.ead_subtitle}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              {t.ead_title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              {t.ead_description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="rounded-full"
                style={{ backgroundColor: "#990099" }}
              >
                {t.ead_cta}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full"
                style={{ borderColor: "#990099", color: "#990099" }}
              >
                {t.ead_schedule}
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
              <h2 className="text-3xl md:text-4xl mb-6">Educação além da tela</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Não é só curso online. É experiência, é encontro, é transformação real.
                Combinamos conteúdo digital com vivências presenciais e mentoria próxima.
              </p>
              <p className="text-muted-foreground">
                Aqui você aprende fazendo, conecta-se com pessoas que pensam como você
                e leva para casa não só conhecimento, mas mudança de perspectiva.
              </p>
            </div>
            <div className="aspect-video bg-gradient-to-br from-[#990099]/20 to-[#990099]/5 rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section id="conteudo" className="py-16 border-t border-border bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl mb-12">O que oferecemos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="w-12 h-12 bg-[#990099]/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Workshops presenciais</h3>
              <p className="text-sm text-muted-foreground">
                Encontros práticos, mão na massa, em espaços inspiradores. Aprenda fazendo, com quem faz.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="w-12 h-12 bg-[#990099]/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">✈️</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Experiência guiada / viagem criativa</h3>
              <p className="text-sm text-muted-foreground">
                Imersões em territórios inspiradores: design, cultura, natureza. Viaje com propósito.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="w-12 h-12 bg-[#990099]/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Formação prática de comunicação</h3>
              <p className="text-sm text-muted-foreground">
                Aprenda a comunicar com clareza, construir narrativas e se posicionar no mercado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BIBLIOTECA */}
      <section id="biblioteca" className="py-16 border-t border-border">
        <div className="container">
          <h2 className="text-3xl md:text-4xl mb-6">Biblioteca</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            Conteúdo curado, artigos, guias práticos e recursos para quem quer ir além.
            Material gratuito e premium para acelerar sua jornada.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-4 pl-6" style={{ borderColor: "#990099" }}>
              <h3 className="text-lg font-medium mb-2">Artigos e ensaios</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Reflexões sobre design, negócios, criatividade e vida. Escritos com tempo e cuidado.
              </p>
              <a href="#" className="text-sm font-medium" style={{ color: "#990099" }}>
                Explorar artigos →
              </a>
            </div>

            <div className="border-l-4 pl-6" style={{ borderColor: "#990099" }}>
              <h3 className="text-lg font-medium mb-2">Guias práticos</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Passo a passo para resolver problemas reais: branding, comunicação, estratégia.
              </p>
              <a href="#" className="text-sm font-medium" style={{ color: "#990099" }}>
                Ver guias →
              </a>
            </div>

            <div className="border-l-4 pl-6" style={{ borderColor: "#990099" }}>
              <h3 className="text-lg font-medium mb-2">Templates e ferramentas</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Recursos prontos para usar: planilhas, frameworks, checklists. Economize tempo.
              </p>
              <a href="#" className="text-sm font-medium" style={{ color: "#990099" }}>
                Baixar recursos →
              </a>
            </div>

            <div className="border-l-4 pl-6" style={{ borderColor: "#990099" }}>
              <h3 className="text-lg font-medium mb-2">Recomendações</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Livros, cursos, ferramentas e pessoas que valem a pena conhecer.
              </p>
              <a href="#" className="text-sm font-medium" style={{ color: "#990099" }}>
                Ver recomendações →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-border bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-6">Pronto para ir além?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Junte-se a quem está transformando aprendizado em ação real.
            </p>
            <Button
              size="lg"
              className="rounded-full"
              style={{ backgroundColor: "#990099" }}
            >
              Quero participar
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
                Base Jambeiro/SP · Brasil
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold uppercase tracking-wide mb-3">Navegação</div>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="/ead" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="/ead#conteudo" className="hover:text-white transition-colors">Conteúdo</a></li>
                <li><a href="/ead#biblioteca" className="hover:text-white transition-colors">Biblioteca</a></li>
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
