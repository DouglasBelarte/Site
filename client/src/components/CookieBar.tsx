import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function CookieBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieAccepted = localStorage.getItem("cookieAccepted");
    if (!cookieAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieAccepted", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#2B2B2B] text-white p-4 z-50">
      <div className="container mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="text-sm text-white/80 max-w-3xl">
          Usamos cookies e dados de navegação para melhorar sua experiência e entender demanda de projeto.
          Ao continuar, você concorda com nossa Política de Privacidade e uso de Cookies.
        </p>
        <Button
          onClick={handleAccept}
          className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full whitespace-nowrap"
        >
          Ok, entendi
        </Button>
      </div>
    </div>
  );
}
