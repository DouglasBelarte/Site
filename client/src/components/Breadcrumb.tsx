import { Link, useLocation } from "wouter";
import { ChevronRight } from "lucide-react";

export function Breadcrumb() {
  const [location] = useLocation();
  
  const pathSegments = location.split("/").filter(Boolean);
  const isLabPage = location.startsWith("/lab");
  const breadcrumbBg = isLabPage ? "bg-[#373435]" : "bg-background";
  const borderColor = isLabPage ? "border-[#373435]" : "border-white";
  
  // Mapeamento de labels personalizados
  const labelMap: Record<string, string> = {
    "/": "Home Doug Co.",
    "/dad": "Design",
    "/mrd": "Mundo Roça",
    "/ead": "Learning and Teaching",
    "/lab": "Laboratório Criativo",
    "/info": "Informações e Contato",
    "/login": "Acesso",
  };

  const breadcrumbItems = [
    { label: "Home Doug Co.", href: "/" },
    ...pathSegments.map((segment, index) => {
      const href = "/" + pathSegments.slice(0, index + 1).join("/");
      const label = labelMap[href] || segment.charAt(0).toUpperCase() + segment.slice(1);
      return { label, href };
    }),
  ];

  if (breadcrumbItems.length === 1) {
    return null;
  }

  return (
    <nav className={`border-b ${borderColor} ${breadcrumbBg}`}>
      <div className="container py-2">
        <ol className="flex items-center gap-2 text-sm text-muted-foreground">
          {breadcrumbItems.map((item, index) => (
            <li key={item.href} className="flex items-center gap-2">
              {index > 0 && <ChevronRight className="w-4 h-4" />}
              {index === breadcrumbItems.length - 1 ? (
                <span className="text-foreground font-medium">{item.label}</span>
              ) : (
                <Link href={item.href} className="hover:text-foreground transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
