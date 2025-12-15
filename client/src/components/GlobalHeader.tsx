import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

interface MenuItem {
  label: string;
  href: string;
}

interface GlobalHeaderProps {
  section: "daco" | "dad" | "mrd" | "ead" | "lab";
  logo: string;
  menuItems: MenuItem[];
}

export function GlobalHeader({ section, logo, menuItems }: GlobalHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const getLogoPath = () => {
    const logoMap: Record<typeof section, string> = {
      daco: "DAco Logo DACO in white.png",
      dad: "DAco Logo DAD in white.png",
      mrd: "DAco Logo MRD in white.png",
      ead: "DAco Logo EAD in white.png",
      lab: "DAco Logo LAB in white.png",
    };
    // Cache-buster: adiciona versão como query string
    const version = "v1.2.0";
    return `/assets/logos/${logoMap[section]}?${version}`;
  };

  const headerBg = section === "lab" ? "bg-[#373435]" : "bg-background";
  const borderColor = section === "lab" ? "border-[#373435]" : "border-white";
  
  const pageTitles: Record<typeof section, string> = {
    daco: "Doug Amorim Co.",
    dad: "Doug Amorim Design",
    mrd: "Mundo Roça Digital",
    ead: "Let’s Go Beyond",
    lab: "Laboratório Criativo",
  };

  return (
    <header className={`${headerBg} border-b ${borderColor}`}>
      <div className="container">
        <div className="flex items-center justify-between h-[60px] md:h-[72px]">
          {/* Logo e Menu Esquerda */}
          <div className="flex items-center gap-8">
            <Link href={section === "daco" ? "/" : `/${section}`}>
              <div className="brand-block flex items-center cursor-pointer">
              <img
                src={getLogoPath()}
                alt={logo}
                style={{ 
                  width: section === "daco" ? "200px" : "100px", 
                  height: section === "daco" ? "85px" : "auto", 
                  objectFit: "contain" 
                }}
              />
              </div>
            </Link>

            {/* Título e Menu - Desktop */}
            <div className="hidden lg:flex flex-col gap-1">
              <div className="text-xs font-medium text-muted-foreground uppercase" style={{ fontFamily: "'Playfair Display', serif" }}>
                {pageTitles[section]}
              </div>
              <nav className="flex items-center gap-4 text-sm font-medium">
                {menuItems.map((item) => {
                  // Menu dropdown apenas na Home para Design, Mundo Roça, EAD, LAB
                  const hasDropdown = section === 'daco' && ['design', 'mundo roça', 'ead', 'lab'].includes(item.label.toLowerCase());
                  
                  if (hasDropdown) {
                    const dropdownItems: Record<string, Array<{label: string, href: string}>> = {
                      'design': [
                        { label: 'Manifesto', href: '/dad/manifesto' },
                        { label: 'Portfólio', href: '/dad#portfolio' },
                        { label: 'Clipping', href: '/dad/clipping' },
                      ],
                      'mundo roça': [
                        { label: 'Permacultura', href: '/mrd#permacultura' },
                        { label: 'Fauna e Flora', href: '/mrd#fauna-flora' },
                        { label: 'Comunidade', href: '/mrd#comunidade' },
                      ],
                      'ead': [
                        { label: 'Conteúdo', href: '/ead#conteudo' },
                        { label: 'Biblioteca', href: '/ead#biblioteca' },
                      ],
                      'lab': [
                        { label: 'Missão', href: '/lab#missao' },
                        { label: 'Sites', href: '/lab#sites' },
                        { label: 'Aplicativos', href: '/lab#aplicativos' },
                      ],
                    };
                    
                    const items = dropdownItems[item.label.toLowerCase()] || [];
                    
                    return (
                      <DropdownMenu key={item.href}>
                        <DropdownMenuTrigger asChild>
                          <a
                            href={item.href}
                            className="nav-link lowercase hover:opacity-70 hover:underline transition-opacity cursor-pointer"
                          >
                            {item.label.toLowerCase()}
                          </a>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          {items.map((subItem) => (
                            <DropdownMenuItem key={subItem.href} asChild>
                              <a href={subItem.href} className="cursor-pointer">
                                {subItem.label}
                              </a>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    );
                  }
                  
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      className="nav-link lowercase hover:opacity-70 hover:underline transition-opacity"
                    >
                      {item.label.toLowerCase()}
                    </a>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Direita: modo claro/escuro . pt/en/fr . acesso . info */}
          <div className="hidden lg:flex items-center gap-3 text-sm lowercase">
            <button 
              className="hover:text-[#F5874F] transition-colors"
              onClick={toggleTheme}
              title="Alternar tema"
            >
              {theme === 'light' ? 'tema escuro' : 'tema claro'}
            </button>
            <span className="text-muted-foreground">.</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="hover:text-[#F5874F] transition-colors">
                  {language.toLowerCase()}
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setLanguage("PT")}>
                  pt
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("EN")}>
                  en
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("FR")}>
                  fr
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <span className="text-muted-foreground">.</span>
            <a href="/login" className="hover:text-[#F5874F] transition-colors">
              acesso
            </a>
            <span className="text-muted-foreground">.</span>
            <a href="/info" className="hover:text-[#F5874F] transition-colors">
              info
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <nav className={`lg:hidden flex flex-col gap-4 pb-6 pt-4 text-base font-medium border-t ${borderColor}`}>
            <div className="text-xs font-medium text-muted-foreground uppercase" style={{ fontFamily: "'Playfair Display', serif" }}>
              {pageTitles[section]}
            </div>
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="nav-link lowercase hover:opacity-70 hover:underline transition-opacity"
              >
                {item.label.toLowerCase()}
              </a>
            ))}
            <div className={`flex items-center gap-3 pt-2 border-t ${borderColor}`}>
              <a href="/#contato" className="text-sm uppercase hover:underline">INFO</a>
              <span className="text-muted-foreground">·</span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-1 text-sm">
                    <Globe className="w-4 h-4" />
                    <span>{language}</span>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setLanguage("PT")}>
                    Português
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage("EN")}>
                    English
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage("FR")}>
                    Français
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <span className="text-muted-foreground">·</span>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full"
                onClick={() => alert("Login em breve")}
              >
                Acesso
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
