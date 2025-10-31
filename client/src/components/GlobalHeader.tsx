import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { Link } from "wouter";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface GlobalHeaderProps {
  section: "daco" | "dad" | "mrd" | "ead" | "lab";
  logo: string;
  menuItems: { label: string; href: string }[];
}

export function GlobalHeader({ section, logo, menuItems }: GlobalHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState("PT");

  const sectionColors = {
    daco: "#E85D04",
    dad: "#1D4ED8",
    mrd: "#4CAF50",
    ead: "#8B5CF6",
    lab: "#FACC15",
  };

  const accentColor = sectionColors[section];

  return (
    <header
      className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border"
      data-section={section}
      style={{ height: "72px" }}
    >
      <div className="container h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo Esquerda */}
          <Link href={section === "daco" ? "/" : `/${section}`}>
            <div className="flex items-center cursor-pointer">
              <h1 className="text-lg font-medium">{logo}</h1>
            </div>
          </Link>

          {/* Menu Centro - Desktop */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link hover:opacity-70 transition-colors"
                style={{
                  color: "inherit",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = accentColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "inherit";
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Direita: INFO · Idioma · Login - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contato"
              className="text-sm font-medium hover:opacity-70 transition-opacity"
            >
              INFO
            </a>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Globe className="w-4 h-4" />
                  {language}
                </Button>
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

            <Button
              variant="outline"
              size="sm"
              className="rounded-full"
              style={{
                borderColor: accentColor,
                color: accentColor,
              }}
            >
              Acesso
            </Button>
          </div>

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
          <nav className="lg:hidden flex flex-col gap-4 py-6 text-base font-medium border-t border-border mt-2">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:opacity-70 transition-opacity"
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-border">
              <a href="#contato" className="text-sm">
                INFO (Contato)
              </a>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="text-sm bg-transparent border border-border rounded px-2 py-1"
                >
                  <option value="PT">Português</option>
                  <option value="EN">English</option>
                  <option value="FR">Français</option>
                </select>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full w-full"
                style={{
                  borderColor: accentColor,
                  color: accentColor,
                }}
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
