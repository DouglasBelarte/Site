import { GlobalHeader } from "@/components/GlobalHeader";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CookieBar } from "@/components/CookieBar";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function Clipping() {
  const dadMenuItems = [
    { label: "Início", href: "/dad" },
    { label: "Manifesto", href: "/dad/manifesto" },
    { label: "Portfólio", href: "/dad#portfolio" },
    { label: "Clipping", href: "/dad/clipping" },
  ];

  const timelineEvents = [
    {
      year: "2023",
      title: "Expansão Digital",
      description: "Lançamento de novos projetos digitais e parcerias estratégicas com grandes marcas.",
      highlights: ["15+ projetos entregues", "Prêmio Design Excellence", "Expansão internacional"],
    },
    {
      year: "2022",
      title: "Consolidação",
      description: "Consolidação da metodologia DAD e reconhecimento no mercado nacional.",
      highlights: ["Certificação ISO", "10 anos de atuação", "50+ clientes atendidos"],
    },
    {
      year: "2021",
      title: "Inovação",
      description: "Implementação de novas tecnologias e processos criativos inovadores.",
      highlights: ["IA aplicada ao design", "Novo portfólio digital", "Workshops presenciais"],
    },
    {
      year: "2020",
      title: "Transformação Digital",
      description: "Adaptação completa ao modelo digital durante a pandemia.",
      highlights: ["100% remoto", "Novos serviços online", "Crescimento de 40%"],
    },
    {
      year: "2019",
      title: "Novos Horizontes",
      description: "Início de novos projetos e parcerias que moldaram o futuro da empresa.",
      highlights: ["Rebranding completo", "Novos mercados", "Equipe ampliada"],
    },
  ];

  const institucionalCards = [
    {
      title: "Anjos do Peito",
      description: "Projeto social de conscientização sobre câncer de mama",
      impact: "50.000+ pessoas alcançadas",
      image: "/assets/cases/anjos-placeholder.jpg",
    },
    {
      title: "Sustentabilidade Corporativa",
      description: "Iniciativas verdes e responsabilidade social",
      impact: "Redução de 30% na pegada de carbono",
      image: "/assets/cases/sustentabilidade-placeholder.jpg",
    },
    {
      title: "Educação Digital",
      description: "Programas de capacitação em design e tecnologia",
      impact: "200+ profissionais formados",
      image: "/assets/cases/educacao-placeholder.jpg",
    },
  ];

  const parceiros = [
    { name: "Folha de S.Paulo", logo: "/assets/logos/folha-placeholder.png" },
    { name: "O Globo", logo: "/assets/logos/oglobo-placeholder.png" },
    { name: "Estadão", logo: "/assets/logos/estadao-placeholder.png" },
    { name: "Exame", logo: "/assets/logos/exame-placeholder.png" },
    { name: "Veja", logo: "/assets/logos/veja-placeholder.png" },
    { name: "UOL", logo: "/assets/logos/uol-placeholder.png" },
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
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container text-center">
          <div className="inline-block bg-[rgb(44,110,181)]/10 border border-[rgb(44,110,181)]/30 rounded-full px-4 py-2 text-sm font-medium text-[rgb(44,110,181)] mb-6">
            Clipping
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            Nossa Trajetória na Mídia
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe os principais marcos, projetos e reconhecimentos que construíram a história do Doug Amorim Design.
          </p>
        </div>
      </section>

      {/* TIMELINE 2019-2023 */}
      <section className="py-16 md:py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl mb-12 text-center">Linha do Tempo 2019-2023</h2>
          
          <div className="relative">
            {/* Linha vertical central */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[rgb(44,110,181)]/20 hidden md:block"></div>
            
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={event.year} className={`relative grid md:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  {/* Ano (esquerda ou direita alternado) */}
                  <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:order-2'}`}>
                    <div className="inline-block bg-[rgb(44,110,181)] text-white px-6 py-3 rounded-full text-2xl font-bold mb-4">
                      {event.year}
                    </div>
                  </div>

                  {/* Ponto central */}
                  <div className="absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 bg-[rgb(44,110,181)] rounded-full border-4 border-background hidden md:block z-10"></div>

                  {/* Conteúdo */}
                  <div className={`${index % 2 === 0 ? 'md:order-2' : ''}`}>
                    <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-2xl font-medium mb-3 text-[rgb(44,110,181)]">{event.title}</h3>
                      <p className="text-muted-foreground mb-4">{event.description}</p>
                      <ul className="space-y-2">
                        {event.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <span className="text-[rgb(245,135,79)] mt-1">▸</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CARDS INSTITUCIONAIS */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl mb-12 text-center">Projetos Institucionais</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {institucionalCards.map((card, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-[rgb(44,110,181)]/20 to-[rgb(44,110,181)]/5"></div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-3">{card.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{card.description}</p>
                  <div className="inline-block bg-[rgb(245,135,79)]/10 text-[rgb(245,135,79)] px-3 py-1 rounded-full text-xs font-medium">
                    {card.impact}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VEÍCULOS PARCEIROS */}
      <section className="py-16 md:py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl mb-12 text-center">Veículos Parceiros</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {parceiros.map((parceiro, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-card border border-border rounded-xl hover:shadow-md transition-shadow">
                <div className="w-full h-16 flex items-center justify-center">
                  <span className="text-sm text-muted-foreground font-medium">{parceiro.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Quer fazer parte dessa história?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato e descubra como podemos transformar sua marca com design estratégico.
          </p>
          <a href="/info">
            <button
              className="rounded-full px-8 py-4 text-lg font-medium hover:opacity-90 transition-all"
              style={{ backgroundColor: "rgb(245, 135, 79)", color: "white" }}
            >
              Fale Conosco
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
