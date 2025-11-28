import { Link, useLocation } from "wouter";
import { ChevronRight } from "lucide-react";

export function Breadcrumb() {
  const [location] = useLocation();
  
  const pathSegments = location.split("/").filter(Boolean);
  
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    ...pathSegments.map((segment, index) => {
      const href = "/" + pathSegments.slice(0, index + 1).join("/");
      const label = segment.toUpperCase();
      return { label, href };
    }),
  ];

  if (breadcrumbItems.length === 1) {
    return null;
  }

  return (
    <nav className="sticky top-[72px] md:top-[72px] z-40 border-b border-border bg-background/95 backdrop-blur-sm">
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
