import { GlobalHeader } from "@/components/GlobalHeader";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CookieBar } from "@/components/CookieBar";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { manifestoTranslations } from "@/lib/manifestoTranslations";

export default function ManifestoDAD() {
  const { language } = useLanguage();
  const t = manifestoTranslations[language];
  
  const dadMenuItems = [
    { label: "Início", href: "/dad" },
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
              {t.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              {t.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* 01. Declaração de Identidade Criativa */}
      <section className="py-12 md:py-16 animate-fade-in">
        <div className="container max-w-3xl">
          <div className="mb-4 text-sm font-medium text-[#1D4ED8]">{t.section1_number}</div>
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            {t.section1_title}
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {t.section1_subtitle}
          </p>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>{t.section1_p1}</p>
            <p>{t.section1_p2}</p>
            <blockquote className="border-l-4 border-[#1D4ED8] pl-6 italic text-muted-foreground my-8">
              {t.section1_quote}
            </blockquote>
          </div>
        </div>
      </section>

      {/* 02. Propósito da D.A.D. */}
      <section className="py-12 md:py-16 border-t border-border animate-fade-in">
        <div className="container max-w-3xl">
          <div className="mb-4 text-sm font-medium text-[#1D4ED8]">{t.section2_number}</div>
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            {t.section2_title}
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {t.section2_subtitle}
          </p>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>{t.section2_intro}</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              {t.section2_items.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="mt-6">{t.section2_conclusion}</p>
          </div>
        </div>
      </section>

      {/* 03. Diferencial de Mercado */}
      <section className="py-12 md:py-16 border-t border-border animate-fade-in">
        <div className="container max-w-3xl">
          <div className="mb-4 text-sm font-medium text-[#1D4ED8]">{t.section3_number}</div>
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            {t.section3_title}
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {t.section3_subtitle}
          </p>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>{t.section3_intro}</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              {t.section3_items.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="mt-6">{t.section3_conclusion}</p>
          </div>
        </div>
      </section>

      {/* 04. O Ciclo da Criação D.A.D. */}
      <section className="py-12 md:py-16 border-t border-border animate-fade-in">
        <div className="container max-w-3xl">
          <div className="mb-4 text-sm font-medium text-[#1D4ED8]">{t.section4_number}</div>
          <h2 className="text-3xl md:text-4xl font-serif mb-8">
            {t.section4_title}
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium mb-2">{t.section4_step1_title}</h3>
              <p className="text-muted-foreground">{t.section4_step1_desc}</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">{t.section4_step2_title}</h3>
              <p className="text-muted-foreground">{t.section4_step2_desc}</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">{t.section4_step3_title}</h3>
              <p className="text-muted-foreground">{t.section4_step3_desc}</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">{t.section4_step4_title}</h3>
              <p className="text-muted-foreground">{t.section4_step4_desc}</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">{t.section4_step5_title}</h3>
              <p className="text-muted-foreground">{t.section4_step5_desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 05. Biblioteca Oficial D.A.D. */}
      <section className="py-12 md:py-16 border-t border-border animate-fade-in">
        <div className="container max-w-3xl">
          <div className="mb-4 text-sm font-medium text-[#1D4ED8]">{t.section5_number}</div>
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            {t.section5_title}
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {t.section5_subtitle}
          </p>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium mb-3">{t.section5_cat1_title}</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                {t.section5_cat1_items.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3">{t.section5_cat2_title}</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                {t.section5_cat2_items.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3">{t.section5_cat3_title}</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                {t.section5_cat3_items.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3">{t.section5_cat4_title}</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                {t.section5_cat4_items.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <blockquote className="border-l-4 border-[#1D4ED8] pl-6 italic text-muted-foreground my-8">
              {t.section5_quote}
            </blockquote>
          </div>
        </div>
      </section>

      {/* 06. Filosofia de Trabalho */}
      <section className="py-12 md:py-16 border-t border-border animate-fade-in">
        <div className="container max-w-3xl">
          <div className="mb-4 text-sm font-medium text-[#1D4ED8]">{t.section6_number}</div>
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            {t.section6_title}
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {t.section6_subtitle}
          </p>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>{t.section6_intro}</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              {t.section6_items.map((item: string, index: number) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
            <p className="mt-6">{t.section6_conclusion}</p>
          </div>
        </div>
      </section>

      {/* 07. Compromisso D.A.D. */}
      <section className="py-12 md:py-16 border-t border-border animate-fade-in">
        <div className="container max-w-3xl">
          <div className="mb-4 text-sm font-medium text-[#1D4ED8]">{t.section7_number}</div>
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            {t.section7_title}
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {t.section7_subtitle}
          </p>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>{t.section7_intro}</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              {t.section7_items.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 08. Chamado 2026 */}
      <section className="py-12 md:py-16 border-t border-border animate-fade-in">
        <div className="container max-w-3xl">
          <div className="mb-4 text-sm font-medium text-[#1D4ED8]">{t.section8_number}</div>
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            {t.section8_title}
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {t.section8_subtitle}
          </p>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>{t.section8_intro}</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              {t.section8_items.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="mt-6">{t.section8_conclusion}</p>
          </div>
        </div>
      </section>

      {/* 09. Conclusão */}
      <section className="py-16 md:py-24 border-t border-border animate-fade-in bg-muted/30">
        <div className="container max-w-3xl text-center">
          <div className="mb-4 text-sm font-medium text-[#1D4ED8]">{t.section9_number}</div>
          <div className="space-y-4 text-2xl md:text-3xl font-serif leading-relaxed mb-12">
            <p>{t.section9_line1}</p>
            <p>{t.section9_line2}</p>
            <p>{t.section9_line3}</p>
          </div>
          <p className="text-lg text-muted-foreground mb-8">
            {t.section9_line4}
          </p>
          <a href="/#contato">
            <Button size="lg" className="rounded-full">
              {t.section9_cta}
            </Button>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2025 Douglas Amorim Company. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="/termos.html" className="hover:text-foreground transition-colors">Termos</a>
              <a href="/privacidade.html" className="hover:text-foreground transition-colors">Privacidade</a>
              <a href="/cookies.html" className="hover:text-foreground transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
