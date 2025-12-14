import { useState } from "react";
import { GlobalHeader } from "@/components/GlobalHeader";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CookieBar } from "@/components/CookieBar";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.info("Login padrão ativado. Integração futura.");
  };

  const dacoMenuItems = [
    { label: "HOME", href: "/" },
    { label: "DESIGN", href: "/dad" },
    { label: "MUNDO ROÇA", href: "/mrd" },
    { label: "EAD", href: "/ead" },
    { label: "LAB", href: "/lab" },
  ];

  return (
    <div className="min-h-screen bg-background" data-section="daco">
      <CookieBar />
      <ScrollToTop />

      <GlobalHeader
        section="daco"
        logo="DA.co — Douglas Amorim Company"
        menuItems={dacoMenuItems}
      />
      <Breadcrumb />

      {/* LOGIN FORM */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-md mx-auto">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h1 className="text-3xl md:text-4xl mb-2">Acesso</h1>
              <p className="text-muted-foreground mb-8">
                Entre com suas credenciais para acessar a área restrita.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    E-mail
                  </label>
                  <Input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium mb-2">
                    Senha
                  </label>
                  <Input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="••••••••"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full rounded-full"
                  style={{ backgroundColor: "rgb(245, 135, 79)" }}
                >
                  Entrar
                </Button>
              </form>

              <div className="mt-6 text-center text-sm text-muted-foreground">
                <p>Esqueceu sua senha? Entre em contato através do <a href="/info" className="text-[rgb(245,135,79)] hover:underline">formulário</a>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
