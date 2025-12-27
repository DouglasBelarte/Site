import { GlobalHeader } from "@/components/GlobalHeader";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CookieBar } from "@/components/CookieBar";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function Licenciamento() {
  const { language } = useLanguage();

  const translations = {
    PT: {
      hero: {
        title: "Licenciamento de Design",
        subtitle: "Soluções estratégicas para licenciamento de marca, identidade visual e projetos de design."
      },
      services: {
        title: "Serviços de Licenciamento",
        items: [
          {
            title: "Licenciamento de Marca",
            description: "Gestão completa de licenciamento de marcas, incluindo contratos, royalties e proteção de propriedade intelectual."
          },
          {
            title: "Identidade Visual",
            description: "Licenciamento de sistemas de identidade visual, manuais de marca e aplicações em diferentes mídias."
          },
          {
            title: "Design de Produto",
            description: "Licenciamento de projetos de design de produto, embalagens e materiais promocionais."
          },
          {
            title: "Consultoria Estratégica",
            description: "Assessoria especializada em estratégias de licenciamento, negociação e gestão de portfólio."
          }
        ]
      },
      process: {
        title: "Processo de Licenciamento",
        steps: [
          { number: "01", title: "Análise", description: "Avaliação do projeto e definição de escopo" },
          { number: "02", title: "Proposta", description: "Elaboração de proposta comercial e contratual" },
          { number: "03", title: "Negociação", description: "Ajustes e alinhamento de expectativas" },
          { number: "04", title: "Formalização", description: "Assinatura de contratos e início da parceria" }
        ]
      },
      cta: {
        title: "Solicitar Consulta",
        description: "Entre em contato para discutir seu projeto de licenciamento.",
        button: "Falar com Especialista"
      }
    },
    EN: {
      hero: {
        title: "Design Licensing",
        subtitle: "Strategic solutions for brand licensing, visual identity and design projects."
      },
      services: {
        title: "Licensing Services",
        items: [
          {
            title: "Brand Licensing",
            description: "Complete brand licensing management, including contracts, royalties and intellectual property protection."
          },
          {
            title: "Visual Identity",
            description: "Licensing of visual identity systems, brand manuals and applications across different media."
          },
          {
            title: "Product Design",
            description: "Licensing of product design projects, packaging and promotional materials."
          },
          {
            title: "Strategic Consulting",
            description: "Specialized advisory in licensing strategies, negotiation and portfolio management."
          }
        ]
      },
      process: {
        title: "Licensing Process",
        steps: [
          { number: "01", title: "Analysis", description: "Project evaluation and scope definition" },
          { number: "02", title: "Proposal", description: "Commercial and contractual proposal preparation" },
          { number: "03", title: "Negotiation", description: "Adjustments and expectation alignment" },
          { number: "04", title: "Formalization", description: "Contract signing and partnership start" }
        ]
      },
      cta: {
        title: "Request Consultation",
        description: "Get in touch to discuss your licensing project.",
        button: "Talk to Specialist"
      }
    },
    FR: {
      hero: {
        title: "Licence de Design",
        subtitle: "Solutions stratégiques pour la licence de marque, l'identité visuelle et les projets de design."
      },
      services: {
        title: "Services de Licence",
        items: [
          {
            title: "Licence de Marque",
            description: "Gestion complète de la licence de marques, y compris les contrats, les redevances et la protection de la propriété intellectuelle."
          },
          {
            title: "Identité Visuelle",
            description: "Licence de systèmes d'identité visuelle, manuels de marque et applications sur différents médias."
          },
          {
            title: "Design de Produit",
            description: "Licence de projets de design de produits, emballages et matériels promotionnels."
          },
          {
            title: "Conseil Stratégique",
            description: "Conseil spécialisé en stratégies de licence, négociation et gestion de portefeuille."
          }
        ]
      },
      process: {
        title: "Processus de Licence",
        steps: [
          { number: "01", title: "Analyse", description: "Évaluation du projet et définition du périmètre" },
          { number: "02", title: "Proposition", description: "Élaboration de proposition commerciale et contractuelle" },
          { number: "03", title: "Négociation", description: "Ajustements et alignement des attentes" },
          { number: "04", title: "Formalisation", description: "Signature des contrats et début du partenariat" }
        ]
      },
      cta: {
        title: "Demander une Consultation",
        description: "Contactez-nous pour discuter de votre projet de licence.",
        button: "Parler à un Spécialiste"
      }
    }
  };

  const t = translations[language];

  const dadMenuItems = [
    { label: language === "PT" ? "Início" : language === "EN" ? "Home" : "Accueil", href: "/dad" },
    { label: language === "PT" ? "Manifesto" : language === "EN" ? "Manifesto" : "Manifeste", href: "/dad/manifesto" },
    { label: language === "PT" ? "Clipping" : "Clipping", href: "/dad/clipping" },
    { label: language === "PT" ? "Licenciamento" : language === "EN" ? "Licensing" : "Licence", href: "/dad/licenciamento" },
  ];

  return (
    <>
      <CookieBar />
      <ScrollToTop />

      <GlobalHeader
        section="dad"
        logo="DAD — Design Atelier Doug"
        menuItems={dadMenuItems}
      />
      <Breadcrumb />

      {/* HERO */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            {t.hero.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl mb-12">{t.services.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {t.services.items.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl mb-4" style={{ color: "rgb(44, 110, 181)" }}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl md:text-4xl mb-12">{t.process.title}</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {t.process.steps.map((step, index) => (
              <div key={index} className="text-center">
                <div
                  className="text-6xl font-bold mb-4 opacity-20"
                  style={{ color: "rgb(44, 110, 181)" }}
                >
                  {step.number}
                </div>
                <h3 className="text-xl mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl mb-4">{t.cta.title}</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t.cta.description}
          </p>
          <Link href="/info">
            <Button
              size="lg"
              className="rounded-full px-8"
              style={{ backgroundColor: "rgb(245, 135, 79)" }}
            >
              {t.cta.button}
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
