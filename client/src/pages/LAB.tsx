import { GlobalHeader } from "@/components/GlobalHeader";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CookieBar } from "@/components/CookieBar";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export default function LAB() {
  const { language } = useLanguage();
  const t = translations[language];
  const labMenuItems = [
    { label: "Missão", href: "/lab#missao" },
    { label: "Sites", href: "/lab#sites" },
    { label: "Aplicativos", href: "/lab#aplicativos" },
    { label: "Parceiros", href: "/lab#parceiros" },
    { label: "Blog", href: "/lab#blog" },
  ];

  return (
    <div className="min-h-screen bg-black text-white" data-section="lab">
      <CookieBar />
      <ScrollToTop />

      <GlobalHeader
        section="lab"
        logo="LAB — Pesquisa & Protótipo"
        menuItems={labMenuItems}
      />
      <Breadcrumb />

      {/* HERO */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl">
            <div className="inline-block bg-[#FACC15]/10 border border-[#FACC15]/30 rounded-full px-4 py-2 text-sm font-medium text-[#FACC15] mb-6">
              {t.lab_subtitle}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              {t.lab_title}
            </h1>
            <p className="text-xl text-white/70 mb-8 max-w-2xl">
              {t.lab_description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="rounded-full bg-[#FACC15] text-black hover:bg-[#FACC15]/90"
              >
                {t.lab_cta}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full"
                style={{ borderColor: "#FACC15", color: "#FACC15" }}
              >
                {t.lab_mission}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* MISSÃO */}
      <section id="missao" className="py-16 border-t border-white/10">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl mb-6">Missão</h2>
            <p className="text-lg text-white/80 mb-6">
              Aqui a gente quebra padrão. IA aplicada, AD, assistentes, busca avançada e prototipagem rápida.
              Testamos ideias, validamos conceitos e construímos o futuro antes dele chegar.
            </p>
            <p className="text-white/70">
              Não é laboratório de brincadeira. É P&D aplicado, com foco em eficiência,
              inovação real e soluções que funcionam no mundo real.
            </p>
          </div>
        </div>
      </section>

      {/* SITES */}
      <section id="sites" className="py-16 border-t border-white/10">
        <div className="container">
          <h2 className="text-3xl md:text-4xl mb-12">Sites experimentais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-[#FACC15]/30 rounded-2xl p-8">
              <div className="inline-block bg-[#FACC15]/20 px-3 py-1 rounded-full text-xs font-medium text-[#FACC15] mb-4">
                EM DESENVOLVIMENTO
              </div>
              <h3 className="text-2xl font-medium mb-3">Busca Avançada + WebAR</h3>
              <p className="text-sm text-white/70 mb-6">
                Interface de busca inteligente combinada com realidade aumentada via web.
                Experimente produtos em 3D antes de comprar.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-[#FACC15]/10 text-[#FACC15] px-2 py-1 rounded">WebAR</span>
                <span className="text-xs bg-[#FACC15]/10 text-[#FACC15] px-2 py-1 rounded">IA Search</span>
                <span className="text-xs bg-[#FACC15]/10 text-[#FACC15] px-2 py-1 rounded">3D</span>
              </div>
            </div>

            <div className="bg-white/5 border border-[#FACC15]/30 rounded-2xl p-8">
              <div className="inline-block bg-[#FACC15]/20 px-3 py-1 rounded-full text-xs font-medium text-[#FACC15] mb-4">
                BETA
              </div>
              <h3 className="text-2xl font-medium mb-3">Orlean — Navegação Inteligente</h3>
              <p className="text-sm text-white/70 mb-6">
                Sistema de navegação contextual que aprende com o comportamento do usuário
                e adapta a interface em tempo real.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-[#FACC15]/10 text-[#FACC15] px-2 py-1 rounded">Machine Learning</span>
                <span className="text-xs bg-[#FACC15]/10 text-[#FACC15] px-2 py-1 rounded">UX Adaptativo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APLICATIVOS */}
      <section id="aplicativos" className="py-16 border-t border-white/10">
        <div className="container">
          <h2 className="text-3xl md:text-4xl mb-12">Aplicativos & Assistentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-[#FACC15]/30 rounded-2xl p-6">
              <div className="w-12 h-12 bg-[#FACC15]/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Daniel — Assistente Comercial</h3>
              <p className="text-sm text-white/70">
                WhatsApp bot inteligente que qualifica leads, agenda reuniões e responde dúvidas comerciais 24/7.
              </p>
            </div>

            <div className="border border-[#FACC15]/30 rounded-2xl p-6">
              <div className="w-12 h-12 bg-[#FACC15]/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Busca Avançada + WebAR</h3>
              <p className="text-sm text-white/70">
                Motor de busca com IA e visualização 3D. Encontre produtos e visualize em realidade aumentada.
              </p>
            </div>

            <div className="border border-[#FACC15]/30 rounded-2xl p-6">
              <div className="w-12 h-12 bg-[#FACC15]/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Prototipagem Digital Rápida</h3>
              <p className="text-sm text-white/70">
                Framework interno para validar ideias em dias, não meses. Da concepção ao MVP funcional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARCEIROS */}
      <section id="parceiros" className="py-16 border-t border-white/10">
        <div className="container">
          <h2 className="text-3xl md:text-4xl mb-6">Parceiros</h2>
          <p className="text-lg text-white/70 mb-12 max-w-3xl">
            Colaboramos com empresas, startups e instituições que querem inovar de verdade.
            Se você tem um desafio técnico complexo, vamos conversar.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-4 pl-6" style={{ borderColor: "#FACC15" }}>
              <h3 className="text-lg font-medium mb-2">Para empresas</h3>
              <p className="text-sm text-white/70 mb-4">
                P&D sob demanda, prototipagem rápida, validação de conceitos e implementação de IA aplicada.
              </p>
              <a href="#" className="text-sm font-medium" style={{ color: "#FACC15" }}>
                Iniciar parceria →
              </a>
            </div>

            <div className="border-l-4 pl-6" style={{ borderColor: "#FACC15" }}>
              <h3 className="text-lg font-medium mb-2">Para startups</h3>
              <p className="text-sm text-white/70 mb-4">
                Aceleramos sua ideia: MVP em semanas, validação técnica, arquitetura escalável.
              </p>
              <a href="#" className="text-sm font-medium" style={{ color: "#FACC15" }}>
                Falar com LAB →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="py-16 border-t border-white/10">
        <div className="container">
          <h2 className="text-3xl md:text-4xl mb-6">Blog / Bastidores</h2>
          <p className="text-lg text-white/70 mb-12 max-w-3xl">
            Insights técnicos, experimentos, aprendizados e bastidores dos projetos do LAB.
            Conteúdo sem filtro sobre inovação, tecnologia e desenvolvimento.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-[#FACC15]/30 rounded-2xl p-6">
              <div className="text-xs text-[#FACC15] mb-3">Em breve</div>
              <h3 className="text-xl font-medium mb-3">Artigos técnicos</h3>
              <p className="text-sm text-white/70">
                Deep dives em arquitetura, IA aplicada, WebAR e outras tecnologias que estamos explorando.
              </p>
            </div>
            <div className="bg-white/5 border border-[#FACC15]/30 rounded-2xl p-6">
              <div className="text-xs text-[#FACC15] mb-3">Em breve</div>
              <h3 className="text-xl font-medium mb-3">Bastidores de projetos</h3>
              <p className="text-sm text-white/70">
                Como desenvolvemos, testamos e validamos ideias. O processo real, sem glamourização.
              </p>
            </div>
            <div className="bg-white/5 border border-[#FACC15]/30 rounded-2xl p-6">
              <div className="text-xs text-[#FACC15] mb-3">Em breve</div>
              <h3 className="text-xl font-medium mb-3">Experimentos</h3>
              <p className="text-sm text-white/70">
                Testes, falhas, aprendizados. Documentando o que funciona e o que não funciona.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-white/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-6">Tem uma ideia ousada?</h2>
            <p className="text-lg text-white/80 mb-8">
              Vamos transformar conceito em protótipo funcional. Rápido, técnico, real.
            </p>
            <Button
              size="lg"
              className="rounded-full bg-[#FACC15] text-black hover:bg-[#FACC15]/90"
            >
              Iniciar projeto no LAB
            </Button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2B2B2B] text-white py-12 border-t border-white/10">
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
                <li><a href="/lab#missao" className="hover:text-white transition-colors">Missão</a></li>
                <li><a href="/lab#sites" className="hover:text-white transition-colors">Sites</a></li>
                <li><a href="/lab#aplicativos" className="hover:text-white transition-colors">Aplicativos</a></li>
                <li><a href="/lab#parceiros" className="hover:text-white transition-colors">Parceiros</a></li>
                <li><a href="/lab#blog" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="/" className="hover:text-white transition-colors">Voltar ao DA.co</a></li>
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold uppercase tracking-wide mb-3">Contato</div>
              <ul className="space-y-2 text-sm text-white/80">
                <li>Douglas@DougAmorim.com</li>
                <li>WhatsApp: +55 (11) 97581-3741</li>
                <li className="text-[#FACC15]">Daniel — Assistente Beta</li>
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
