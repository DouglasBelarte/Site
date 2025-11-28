import { GlobalHeader } from "@/components/GlobalHeader";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CookieBar } from "@/components/CookieBar";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export default function ManifestoDAD() {
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
      <section className="py-16 md:py-24 animate-fade-in">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-tight mb-6">
              MANIFESTO D.A.D.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              A Arquitetura Intelectual por trás de tudo o que eu crio
            </p>
          </div>
        </div>
      </section>

      {/* 01. Declaração de Identidade Criativa */}
      <section className="py-12 md:py-16 animate-fade-in">
        <div className="container max-w-3xl">
          <div className="mb-4 text-sm font-medium text-[#1D4ED8]">01.</div>
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Declaração de Identidade Criativa
          </h2>
          <h3 className="text-xl md:text-2xl mb-8 text-muted-foreground">
            Eu não entrego serviços. Eu crio Propriedade Intelectual.
          </h3>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              A atuação da D.A.D. (Doug Amorim Design) é fundamentada na criação de{" "}
              <strong>sistemas</strong>, <strong>frameworks</strong>,{" "}
              <strong>métodos</strong>, <strong>livros técnicos</strong>,{" "}
              <strong>padrões operacionais</strong>, <strong>templates</strong> e{" "}
              <strong>estruturas estratégicas de design e tecnologia</strong>.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Cada entrega nasce como <strong>obra intelectual</strong> — documentada,
              expansível e licenciável.
            </p>
            <blockquote className="border-l-4 border-[#1D4ED8] pl-6 italic text-xl my-8">
              Meu valor não está na execução. Meu valor está no pensamento estruturado.
            </blockquote>
          </div>
        </div>
      </section>

      {/* 02. Propósito da D.A.D. */}
      <section className="py-12 md:py-16 bg-muted/30 animate-fade-in">
        <div className="container max-w-3xl">
          <div className="mb-4 text-sm font-medium text-[#1D4ED8]">02.</div>
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Propósito da D.A.D.
          </h2>
          <h3 className="text-xl md:text-2xl mb-8 text-muted-foreground">
            Transformar ideias em sistemas que funcionam, duram e geram valor vitalício.
          </h3>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">A D.A.D. cria:</p>
            <ul className="space-y-2 text-lg">
              <li>Modelos de design</li>
              <li>Arquiteturas de identidade visual e narrativa</li>
              <li>Templates proprietários</li>
              <li>Sistemas WebAR e SEO</li>
              <li>Estruturas de automação</li>
              <li>Playbooks de execução</li>
              <li>Frameworks escaláveis e documentados</li>
            </ul>
            <p className="text-lg leading-relaxed mt-6">
              Cada criação existe com o propósito de <strong>impacto contínuo</strong>,{" "}
              <strong>longevidade</strong> e <strong>aplicação inteligente</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* 03. Diferencial de Mercado */}
      <section className="py-12 md:py-16 animate-fade-in">
        <div className="container max-w-3xl">
          <div className="mb-4 text-sm font-medium text-[#1D4ED8]">03.</div>
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Diferencial de Mercado
          </h2>
          <h3 className="text-xl md:text-2xl mb-8 text-muted-foreground">
            Eu não vendo horas. Eu licencio pensamento estruturado.
          </h3>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Os parceiros não contratam mão de obra. Eles obtêm acesso a:
            </p>
            <ul className="space-y-2 text-lg">
              <li>conhecimento</li>
              <li>metodologia consolidada</li>
              <li>estruturas de decisão</li>
              <li>modelos escaláveis</li>
              <li>sistemas documentados</li>
              <li>frameworks proprietários</li>
              <li>processos replicáveis</li>
            </ul>
            <p className="text-lg leading-relaxed mt-6">
              Cada projeto é um <strong>investimento</strong>, não uma despesa.
            </p>
          </div>
        </div>
      </section>

      {/* 04. O Ciclo da Criação D.A.D. */}
      <section className="py-12 md:py-16 bg-muted/30 animate-fade-in">
        <div className="container max-w-3xl">
          <div className="mb-4 text-sm font-medium text-[#1D4ED8]">04.</div>
          <h2 className="text-3xl md:text-4xl font-serif mb-8">
            O Ciclo da Criação D.A.D.
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-3">1. Concepção</h3>
              <p className="text-lg leading-relaxed">
                Pesquisa, formulação e desenho estratégico do conceito.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">2. Arquitetura</h3>
              <p className="text-lg leading-relaxed">
                Transformação do conceito em fluxos, estruturas, padrões, etapas e
                critérios.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">3. Documentação</h3>
              <p className="text-lg leading-relaxed">
                Cada obra torna-se: manual, framework, grid, mapa, playbook, tabela, guia
                ou template.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">4. Licenciamento</h3>
              <p className="text-lg leading-relaxed">
                O parceiro adquire direito de uso — a propriedade intelectual permanece
                com o autor.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">5. Expansão</h3>
              <p className="text-lg leading-relaxed">
                A obra evolui, podendo gerar produtos escaláveis, novas versões e novos
                templates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 05. Biblioteca Oficial D.A.D. */}
      <section className="py-12 md:py-16 animate-fade-in">
        <div className="container max-w-3xl">
          <div className="mb-4 text-sm font-medium text-[#1D4ED8]">05.</div>
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Biblioteca Oficial D.A.D.
          </h2>
          <h3 className="text-xl md:text-2xl mb-8 text-muted-foreground">
            Propriedade Intelectual Registrada e Expansível
          </h3>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Frameworks Estratégicos</h3>
              <ul className="space-y-2 text-lg">
                <li>Identidade 9D</li>
                <li>WebAR Blueprint 2026</li>
                <li>SEO Spiral Model</li>
                <li>Prisma de Narrativa Consciente</li>
                <li>Design Operacional Modular (DOM)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Arquivos-TEMPLATE (Licenciáveis)
              </h3>
              <ul className="space-y-2 text-lg">
                <li>Template Executivo de Projeto</li>
                <li>Template Estratégico de Arquitetura Web</li>
                <li>Template de Cronograma (versões variadas para parceiros)</li>
                <li>Template de Execução Manus.AI</li>
                <li>Template de Planejamento de Lançamento</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Livros Técnicos (Formato Book)
              </h3>
              <ul className="space-y-2 text-lg">
                <li>
                  <em>Design Vivo: A Essência da Estrutura</em>
                </li>
                <li>
                  <em>Sistema Técnico de Execução – Edição Completa</em>
                </li>
                <li>
                  <em>Manual Manus.AI – Execução por Fases</em>
                </li>
                <li>
                  <em>Grid 360 – Padrões de Qualidade Visual e Estratégica</em>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Sistemas Proprietários</h3>
              <ul className="space-y-2 text-lg">
                <li>D.A.D. Story Grid</li>
                <li>D.A.D. Vision Blocks</li>
                <li>D.A.D. Identity Loop</li>
              </ul>
            </div>
            <blockquote className="border-l-4 border-[#1D4ED8] pl-6 italic text-xl my-8">
              Todas as obras são permanentes, autorais e licenciáveis por contrato.
            </blockquote>
          </div>
        </div>
      </section>

      {/* 06. Filosofia de Trabalho */}
      <section className="py-12 md:py-16 bg-muted/30 animate-fade-in">
        <div className="container max-w-3xl">
          <div className="mb-4 text-sm font-medium text-[#1D4ED8]">06.</div>
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Filosofia de Trabalho
          </h2>
          <h3 className="text-xl md:text-2xl mb-8 text-muted-foreground">
            Criar é assumir responsabilidade sobre o impacto.
          </h3>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">Pilares:</p>
            <ul className="space-y-2 text-lg">
              <li>
                <strong>Clareza</strong> antes de estética
              </li>
              <li>
                <strong>Função</strong> antes de glamour
              </li>
              <li>
                <strong>Estrutura</strong> antes de execução
              </li>
              <li>
                <strong>Narrativa</strong> antes de venda
              </li>
              <li>
                <strong>Documentação</strong> antes de entrega
              </li>
            </ul>
            <p className="text-lg leading-relaxed mt-6">
              O design existe para <strong>resolver, ordenar, explicar e transformar</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* 07. Compromisso D.A.D. */}
      <section className="py-12 md:py-16 animate-fade-in">
        <div className="container max-w-3xl">
          <div className="mb-4 text-sm font-medium text-[#1D4ED8]">07.</div>
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Compromisso D.A.D.
          </h2>
          <h3 className="text-xl md:text-2xl mb-8 text-muted-foreground">
            Toda entrega deixa o parceiro maior do que ele chegou.
          </h3>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">Porque recebe:</p>
            <ul className="space-y-2 text-lg">
              <li>sistemas funcionais</li>
              <li>estrutura replicável</li>
              <li>visão ampliada</li>
              <li>clareza operacional</li>
              <li>autonomia para evoluir</li>
              <li>documentação completa</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 08. Chamado 2026 */}
      <section className="py-12 md:py-16 bg-muted/30 animate-fade-in">
        <div className="container max-w-3xl">
          <div className="mb-4 text-sm font-medium text-[#1D4ED8]">08.</div>
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Chamado 2026 — A Nova Era da D.A.D.
          </h2>
          <h3 className="text-xl md:text-2xl mb-8 text-muted-foreground">
            A era da criação escalável.
          </h3>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              A partir de 2026, a D.A.D. intensifica:
            </p>
            <ul className="space-y-2 text-lg">
              <li>frameworks WebAR proprietários</li>
              <li>pacotes de licenciamento premium</li>
              <li>biblioteca digital de templates D.A.D.</li>
              <li>automação inteligente integrada ao Manus.AI</li>
              <li>sistemas técnicos escaláveis</li>
              <li>expansão para projetos de grande porte</li>
            </ul>
            <p className="text-lg leading-relaxed mt-6">
              A D.A.D. torna-se um <strong>ecossistema de propriedade intelectual</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* 09. CTA */}
      <section className="py-16 md:py-24 animate-fade-in">
        <div className="container max-w-3xl text-center">
          <div className="mb-4 text-sm font-medium text-[#1D4ED8]">09.</div>
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            D.A.D.: Design criado para durar.
          </h2>
          <p className="text-xl md:text-2xl mb-4">Frameworks feitos para escalar.</p>
          <p className="text-xl md:text-2xl mb-8">
            Estruturas pensadas para transformar.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Licenciamento, projetos, frameworks e sistemas sob consulta privada.
          </p>
          <Button
            size="lg"
            className="rounded-full"
            style={{ backgroundColor: "#1D4ED8" }}
          >
            Solicitar consulta →
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container max-w-3xl text-center text-sm text-muted-foreground">
          <p>© 2025 D.A.D. — Doug Amorim Design. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
