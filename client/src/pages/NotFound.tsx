import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-4">Página não encontrada</h2>
          <p className="text-muted-foreground">
            A página que você está procurando não existe ou foi movida.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => setLocation("/")}
            size="lg"
            className="rounded-full"
          >
            Voltar ao início
          </Button>
          <Button
            onClick={() => setLocation("/#contato")}
            variant="outline"
            size="lg"
            className="rounded-full"
          >
            Fale conosco
          </Button>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            DA.co — Douglas Amorim Company
            <br />
            <span className="text-xs">Não só uma empresa, um estado de espírito.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
