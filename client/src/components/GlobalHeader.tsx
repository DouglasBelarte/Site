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
  const [language, setLanguage] = useState("PT");

  const getLogoPath = () => {
    const logoMap = {
      daco: "DACO",
      dad: "DAD",
      mrd: "MRD",
      ead: "EAD",
      lab: "LAB",
    };
    return `/assets/logos/DAco Logo ${logoMap[section]} in white.jpg`;
  };

  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border h-[72px] md:h-[72px] flex items-center">
      <div className="container">
        <div className="flex items-center justify-between h-full">
          {/* Logo Esquerda */}
          <Link href={section === "daco" ? "/" : `/${section}`}>
            <div className="brand-block flex items-center cursor-pointer">
              <img
                src={getLogoPath()}
                alt={logo}
                className="brand-logo"
              />
            </div>
          </Link>

          {/* Menu Centro - Desktop */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link hover:opacity-70 transition-opacity"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Direita: INFO · Idioma · Acesso */}
          <div className="hidden lg:flex items-center gap-4 text-sm">
            <a href="/#contato" className="nav-link hover:opacity-70 transition-opacity">
              INFO
            </a>
            <span className="text-muted-foreground">·</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 hover:opacity-70 transition-opacity">
                  <Globe className="w-4 h-4" />
                  <span>{language}</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
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
          <nav className="lg:hidden flex flex-col gap-4 pb-6 pt-4 text-base font-medium border-t border-border mt-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="nav-link hover:opacity-70 transition-opacity"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-2 border-t border-border">
              <a href="/#contato" className="text-sm">INFO</a>
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
