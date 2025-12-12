import { GlobalHeader } from "@/components/GlobalHeader";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CookieBar } from "@/components/CookieBar";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export default function MRD() {
  const { language } = useLanguage();
  const t = translations[language];
  const mrdMenuItems = [
    { label: "Permacultura", href: "/mrd#permacultura" },
    { label: "Fauna e Flora", href: "/mrd#fauna-flora" },
    { label: "Comunidade", href: "/mrd#comunidade" },
  ];

  return (
    <div className="min-h-screen bg-background" data-section="mrd">
      <CookieBar />
      <ScrollToTop />

      <GlobalHeader
        section="mrd"
        logo="MRD — Mundo Roça Digital"
        menuItems={mrdMenuItems}
      />
      <Breadcrumb />

      {/* HERO */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl">
            <div className="inline-block bg-[rgb(0,168,89)]/10 border border-[rgb(0,168,89)]/30 rounded-full px-4 py-2 text-sm font-medium text-[rgb(0,168,89)] mb-6">
              {t.mrd_subtitle}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              {t.mrd_title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              {t.mrd_description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="rounded-full hover:opacity-90 transition-all"
                style={{ backgroundColor: "rgb(0, 168, 89)" }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 4px 12px rgba(245, 135, 79, 0.3)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
              >
                {t.mrd_cta}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full hover:border-[rgb(245,135,79)] hover:text-[rgb(245,135,79)] transition-all"
                style={{ borderColor: "rgb(0, 168, 89)", color: "rgb(0, 168, 89)" }}
              >
                {t.mrd_history}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* PERMACULTURA */}
      <section id="permacultura" className="py-16 border-t border-border">
        <div className="container">
          <h2 className="text-3xl md:text-4xl mb-6">Permacultura</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                Cultivamos com respeito ao ciclo natural, sem pressa, sem agrotóxicos.
                Cada produto carrega a história do território e o cuidado de quem planta.
              </p>
              <p className="text-muted-foreground">
                Nosso sistema de produção integra plantas, animais e pessoas em harmonia com a natureza,
                gerando alimentos saudáveis e regenerando o solo.
              </p>
            </div>
            <div className="aspect-video bg-gradient-to-br from-[rgb(0,168,89)]/20 to-[rgb(0,168,89)]/5 rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* FAUNA E FLORA */}
      <section id="fauna-flora" className="py-16 border-t border-border bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl mb-6">Fauna e Flora</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            Biodiversidade é riqueza. Preservamos e cultivamos espécies nativas,
            criando um ecossistema equilibrado onde cada elemento tem seu papel.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="w-12 h-12 bg-[rgb(0,168,89)]/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Plantas Nativas</h3>
              <p className="text-sm text-muted-foreground">
                Jabuticabeira, pitangueira, araçá e dezenas de espécies que contam a história do nosso bioma.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="w-12 h-12 bg-[rgb(0,168,89)]/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🦋</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Polinizadores</h3>
              <p className="text-sm text-muted-foreground">
                Abelhas nativas, borboletas e beija-flores são parceiros essenciais na produção de alimentos.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="w-12 h-12 bg-[rgb(0,168,89)]/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🌳</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Agrofloresta</h3>
              <p className="text-sm text-muted-foreground">
                Sistema que imita a floresta, produzindo alimentos enquanto regenera o solo e sequestra carbono.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMUNIDADE */}
      <section id="comunidade" className="py-16 border-t border-border">
        <div className="container">
          <h2 className="text-3xl md:text-4xl mb-6">Comunidade</h2>
          <div className="max-w-3xl">
            <p className="text-lg text-muted-foreground mb-8">
              Acreditamos em relações diretas, transparentes e justas.
              Nossos produtos chegam até você com preço justo, sem intermediários,
              direto de quem cultiva para quem consome.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 pl-6" style={{ borderColor: "#4CAF50" }}>
                <h3 className="text-lg font-medium mb-2">Produto artesanal & rótulo</h3>
                <p className="text-sm text-muted-foreground">
                  Cada geleia, cada pão, cada conserva é feita à mão, em pequenos lotes, com ingredientes da roça.
                </p>
              </div>
              <div className="border-l-4 pl-6" style={{ borderColor: "#4CAF50" }}>
                <h3 className="text-lg font-medium mb-2">História de origem</h3>
                <p className="text-sm text-muted-foreground">
                  Você sabe de onde vem o que come. Cada produto conta a história do território e de quem o fez.
                </p>
              </div>
              <div className="border-l-4 pl-6" style={{ borderColor: "#4CAF50" }}>
                <h3 className="text-lg font-medium mb-2">Preço justo e transparência</h3>
                <p className="text-sm text-muted-foreground">
                  Sem atravessadores. Preço que remunera quem produz e é acessível a quem consome.
                </p>
              </div>
              <div className="border-l-4 pl-6" style={{ borderColor: "#4CAF50" }}>
                <h3 className="text-lg font-medium mb-2">Entrega curta, direto de quem fez</h3>
                <p className="text-sm text-muted-foreground">
                  Circuito curto de comercialização: da roça para sua mesa, com frescor e afeto.
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
            <h2 className="text-3xl md:text-4xl mb-6">Faça parte da comunidade</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Conecte-se com a origem, apoie a agricultura regenerativa e leve produtos artesanais para sua casa.
            </p>
            <Button
              size="lg"
              className="rounded-full"
              style={{ backgroundColor: "#4CAF50" }}
            >
              Falar sobre MRD
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
                <li><a href="/mrd#permacultura" className="hover:text-white transition-colors">Permacultura</a></li>
                <li><a href="/mrd#fauna-flora" className="hover:text-white transition-colors">Fauna e Flora</a></li>
                <li><a href="/mrd#comunidade" className="hover:text-white transition-colors">Comunidade</a></li>
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
