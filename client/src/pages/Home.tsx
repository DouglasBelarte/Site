import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Menu, X } from "lucide-react";
import { CookieBar } from "@/components/CookieBar";
import { ScrollToTop } from "@/components/ScrollToTop";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const contactMutation = trpc.contact.send.useMutation({
    onSuccess: () => {
      toast.success("Recebi. Vou falar com você.");
      setFormData({ nome: "", email: "", mensagem: "" });
    },
    onError: () => {
      toast.error("Não consegui enviar agora. Tenta direto no e-mail.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.email || !formData.mensagem) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }
    contactMutation.mutate(formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <CookieBar />
      <ScrollToTop />

      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container">
          <div className="flex items-start justify-between py-4">
            <div className="flex flex-col max-w-[220px]">
              <h1 className="text-base font-medium">DA.co — Douglas Amorim Company</h1>
              <p className="text-[0.7rem] text-muted-foreground mt-1 leading-tight">
                Não só uma empresa, um estado de espírito.
              </p>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
              <a href="#manifesto" className="hover:text-primary transition-colors">Manifesto</a>
              <a href="#dad" className="hover:text-primary transition-colors">DAD</a>
              <a href="#mrd" className="hover:text-primary transition-colors">Roça</a>
              <a href="#ead" className="hover:text-primary transition-colors">EAD</a>
              <a href="#lab" className="hover:text-primary transition-colors">LAB</a>
              <a href="#blog" className="hover:text-primary transition-colors">Blog</a>
              <a href="#contato" className="bg-primary text-primary-foreground px-4 py-2 rounded-full hover:bg-primary/90 transition-colors">
                Contato
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 border border-foreground rounded-lg"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Nav */}
          {mobileMenuOpen && (
            <nav className="lg:hidden flex flex-col gap-4 pb-6 text-base font-medium">
              <a href="#manifesto" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors">Manifesto</a>
              <a href="#dad" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors">DAD</a>
              <a href="#mrd" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors">Roça</a>
              <a href="#ead" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors">EAD</a>
              <a href="#lab" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors">LAB</a>
              <a href="#blog" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors">Blog</a>
              <a href="#contato" onClick={() => setMobileMenuOpen(false)} className="bg-primary text-primary-foreground px-4 py-2 rounded-full hover:bg-primary/90 transition-colors inline-block text-center">
                Contato
              </a>
            </nav>
          )}
        </div>
      </header>

      {/* HERO */}
      <section id="manifesto" className="py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight">
                Bem-vindo à DA.co — Roseta Stone Edition.
                <br />
                <span className="text-primary block mt-2">
                  Experiências que conectam pessoas, marcas e território.
                </span>
              </h2>

              <p className="mt-6 text-muted-foreground max-w-[38ch]">
                Eu sou Douglas Amorim. Diretor de Soluções Web.
                Minha missão é transformar visão em estrutura: marca, site, funil, catálogo,
                atendimento humano-assistido e presença real.
              </p>

              <div className="flex flex-wrap gap-4 mt-6">
                <a href="#contato">
                  <Button size="lg" className="rounded-full">
                    Quero conversar
                  </Button>
                </a>
                <a href="#areas">
                  <Button variant="outline" size="lg" className="rounded-full">
                    Ver áreas de atuação
                  </Button>
                </a>
              </div>

              <p className="text-xs text-muted-foreground mt-4">
                Lançamento oficial do Portal Doug — 05 de novembro de 2025.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 shadow-lg max-w-md">
              <h3 className="text-lg font-medium mb-4">DA.co em 4 linhas</h3>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                <li>Branding & Identidade</li>
                <li>Site e Infra Digital</li>
                <li>Catálogo / Portfólio / Produto</li>
                <li>Atendimento assistido (Daniel)</li>
              </ul>
              <div className="mt-6 bg-accent/10 border border-accent/30 rounded-xl p-4 text-sm italic">
                "Não só uma empresa, um estado de espírito."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ÁREAS */}
      <section id="areas" className="py-12 md:py-16 border-t border-border">
        <div className="container">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl">Nossas frentes</h2>
            <p className="text-muted-foreground mt-3 max-w-[42ch]">
              Quatro braços. Um só DNA: clareza, beleza funcional e entrega real.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* DAD */}
            <article id="dad" className="bg-card border border-border rounded-2xl p-6 shadow-md">
              <div className="inline-block bg-accent/10 border border-accent/30 rounded-full px-3 py-1 text-xs font-medium text-accent mb-3">
                DAD.dougamorim.com
              </div>
              <h3 className="text-xl font-medium mb-3">DAD — Doug Amorim Design</h3>
              <p className="text-sm text-muted-foreground mb-4 max-w-[60ch]">
                Branding, posicionamento e presença digital para negócios que precisam existir com autoridade.
                Identidade visual, site institucional, landing pages de conversão e material comercial.
              </p>
              <ul className="text-sm space-y-2 mb-5 list-disc list-inside">
                <li>Marca e narrativa</li>
                <li>Website & Landing Pages</li>
                <li>Catálogo de produtos / Portfólio</li>
                <li>Social kit e materiais de venda</li>
              </ul>
              <a href="#contato" className="text-sm font-medium text-accent border-b border-accent pb-0.5 hover:opacity-70 transition-opacity">
                Quero orçar DAD →
              </a>
            </article>

            {/* MRD */}
            <article id="mrd" className="bg-card border border-border rounded-2xl p-6 shadow-md">
              <div className="inline-block bg-accent/10 border border-accent/30 rounded-full px-3 py-1 text-xs font-medium text-accent mb-3">
                MRD.dougamorim.com
              </div>
              <h3 className="text-xl font-medium mb-3">MRD — Mundo Roça Digital</h3>
              <p className="text-sm text-muted-foreground mb-4 max-w-[60ch]">
                Campo, origem, afeto e produto artesanal.
                Linha autoral (geleia de jabuticaba, pão 4–6 grãos, etc.)
                conectada a um jeito mais humano de fazer negócios.
              </p>
              <ul className="text-sm space-y-2 mb-5 list-disc list-inside">
                <li>Produto artesanal & rótulo</li>
                <li>História de origem</li>
                <li>Preço justo e transparência</li>
                <li>Entrega curta, direto de quem fez</li>
              </ul>
              <a href="#contato" className="text-sm font-medium text-accent border-b border-accent pb-0.5 hover:opacity-70 transition-opacity">
                Falar sobre MRD →
              </a>
            </article>

            {/* EAD */}
            <article id="ead" className="bg-card border border-border rounded-2xl p-6 shadow-md">
              <div className="inline-block bg-accent/10 border border-accent/30 rounded-full px-3 py-1 text-xs font-medium text-accent mb-3">
                EAD.dougamorim.com
              </div>
              <h3 className="text-xl font-medium mb-3">EAD — Let's Go Beyond</h3>
              <p className="text-sm text-muted-foreground mb-4 max-w-[60ch]">
                Conteúdo, aula, vivência e mentoria prática.
                Idioma, turismo criativo, campo e experiência imersiva.
              </p>
              <ul className="text-sm space-y-2 mb-5 list-disc list-inside">
                <li>Workshops presenciais e on-line</li>
                <li>Experiência guiada / viagem criativa</li>
                <li>Formação prática de comunicação</li>
              </ul>
              <a href="#contato" className="text-sm font-medium text-accent border-b border-accent pb-0.5 hover:opacity-70 transition-opacity">
                Quero saber mais →
              </a>
            </article>

            {/* LAB */}
            <article id="lab" className="bg-card border border-border rounded-2xl p-6 shadow-md">
              <div className="inline-block bg-accent/10 border border-accent/30 rounded-full px-3 py-1 text-xs font-medium text-accent mb-3">
                LAB.dougamorim.com
              </div>
              <h3 className="text-xl font-medium mb-3">LAB — Pesquisa & Protótipo</h3>
              <p className="text-sm text-muted-foreground mb-4 max-w-[60ch]">
                Aqui a gente quebra padrão.
                IA aplicada, AR, assistentes, busca avançada e prova de conceito
                para marcas que querem dar o próximo salto.
              </p>
              <ul className="text-sm space-y-2 mb-5 list-disc list-inside">
                <li>Daniel — Assistente comercial via WhatsApp</li>
                <li>Busca avançada + WebAR (ex.: Orlean)</li>
                <li>Prototipagem rápida de produto digital</li>
              </ul>
              <a href="#contato" className="text-sm font-medium text-accent border-b border-accent pb-0.5 hover:opacity-70 transition-opacity">
                Explorar o LAB →
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* SOBRE DOUG */}
      <section id="blog" className="py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl mb-4">Quem está por trás</h2>
              <p className="text-base font-medium mb-4">
                Sou Douglas Amorim.
                Diretor de Soluções Web.
                Eu entro quando você precisa transformar "ideia boa"
                em "proposta vendável e operacional".
              </p>
              <p className="text-sm text-muted-foreground mb-4 max-w-[60ch]">
                Meu trabalho começa no posicionamento e termina na experiência do cliente final:
                identidade de marca, site, catálogo, atendimento assistido e ritmo de comunicação.
                Eu alinho estética, processo e entrega — pra que você consiga vender com segurança.
              </p>
              <p className="text-sm text-muted-foreground mb-6 max-w-[60ch]">
                O resultado é simples: você para de improvisar e passa a operar com clareza.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-accent/10 text-accent border border-accent/30 text-xs font-medium px-3 py-2 rounded-full">
                  Branding & Identidade
                </span>
                <span className="bg-accent/10 text-accent border border-accent/30 text-xs font-medium px-3 py-2 rounded-full">
                  Web & Infra
                </span>
                <span className="bg-accent/10 text-accent border border-accent/30 text-xs font-medium px-3 py-2 rounded-full">
                  Catálogo / Produto
                </span>
                <span className="bg-accent/10 text-accent border border-accent/30 text-xs font-medium px-3 py-2 rounded-full">
                  Atendimento Assistido
                </span>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 shadow-lg max-w-md">
              <div className="text-xs font-semibold uppercase tracking-wide mb-2">Direto ao ponto</div>
              <p className="text-xl font-medium mb-4">"Não vendo template. Eu construo presença."</p>
              <div className="text-sm text-muted-foreground whitespace-pre-line">
                {`• Base Jambeiro/SP
• Atuação Brasil / remoto
• Projetos ativos: Belarte, Orlean, Mundo Roça, Daniel`}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-12 md:py-16 border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl mb-4">Vamos falar?</h2>
              <p className="text-muted-foreground mb-4">
                Me conta rapidamente o que você precisa.
                Eu te respondo em voz humana — não resposta pasteurizada.
              </p>
              <div className="bg-accent/10 border border-accent/30 rounded-xl p-4 text-sm text-accent mb-6 max-w-md">
                Pra projetos urgentes ("pra ontem"): descreve o prazo e o que precisa ir pro ar primeiro.
              </div>
              <div className="space-y-2 text-sm">
                <div className="font-semibold text-xs uppercase tracking-wide">E-mail direto</div>
                <div className="text-base font-medium">Douglas@DougAmorim.com</div>
                <div className="text-xs text-muted-foreground">
                  Esse endereço será usado no formulário ao lado.
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Seu nome</label>
                <Input
                  type="text"
                  placeholder="Seu nome completo"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">E-mail</label>
                <Input
                  type="email"
                  placeholder="voce@empresa.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">O que você precisa?</label>
                <Textarea
                  placeholder="Site, catálogo, identidade, lançamento, etc."
                  rows={4}
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full" disabled={contactMutation.isPending}>
                {contactMutation.isPending ? "Enviando..." : "Enviar mensagem"}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2B2B2B] text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* COLUNA 1: INSTITUCIONAL */}
            <div>
              <div className="font-medium text-lg mb-2">DA.co — Douglas Amorim Company</div>
              <div className="text-sm text-white/70 mb-3">Não só uma empresa, um estado de espírito.</div>
              <div className="text-xs text-white/60">
                Lançamento oficial 05·11·2025<br />
                Jambeiro / SP · Brasil
              </div>
            </div>

            {/* COLUNA 2: MAPA */}
            <div>
              <div className="text-sm font-semibold uppercase tracking-wide mb-3">Mapa</div>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#manifesto" className="hover:text-white transition-colors">Manifesto</a></li>
                <li><a href="#dad" className="hover:text-white transition-colors">DAD — Doug Amorim Design</a></li>
                <li><a href="#mrd" className="hover:text-white transition-colors">Roça / Mundo Roça Digital</a></li>
                <li><a href="#ead" className="hover:text-white transition-colors">EAD — Let's Go Beyond</a></li>
                <li><a href="#lab" className="hover:text-white transition-colors">LAB — Pesquisa & Protótipo</a></li>
                <li><a href="#blog" className="hover:text-white transition-colors">Blog / Bastidores</a></li>
              </ul>
            </div>

            {/* COLUNA 3: CONTATO */}
            <div>
              <div className="text-sm font-semibold uppercase tracking-wide mb-3">Contato direto</div>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#contato" className="hover:text-white transition-colors">Iniciar projeto</a></li>
                <li>Douglas@DougAmorim.com</li>
                <li>WhatsApp comercial: +55 (11) 97581-3741</li>
              </ul>
              <div className="text-xs text-white/60 mt-4">
                Atendimento humano-assistido: Daniel (beta).
              </div>
            </div>

            {/* COLUNA 4: LEGAL */}
            <div>
              <div className="text-sm font-semibold uppercase tracking-wide mb-3">Legal</div>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="/termos.html" className="hover:text-white transition-colors">Termos de Uso</a></li>
                <li><a href="/privacidade.html" className="hover:text-white transition-colors">Política de Privacidade</a></li>
                <li><a href="/cookies.html" className="hover:text-white transition-colors">Cookies & Dados</a></li>
              </ul>
              <div className="text-xs text-white/60 mt-4">
                Conteúdo PT-BR · Disponível em EN em breve.
              </div>
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
