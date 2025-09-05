"use client";

import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";

const Breadcrumbs = ({ customItems = null }) => {
  const pathname = usePathname();

  // Define page mappings
  const pageMap = {
    "/": { title: "Početna", icon: <Home className="h-4 w-4" /> },
    "/cenovnik": { title: "Cenovnik", description: "Cene betonskih ograda" },
    "/modeli": { title: "Modeli", description: "Dizajni betonskih ograda" },
    "/galerija": { title: "Galerija", description: "Realizovani projekti" },
    "/kontakt": { title: "Kontakt", description: "Kontakt informacije" },
  };

  // Use custom items if provided, otherwise generate from pathname
  const breadcrumbItems = customItems || generateBreadcrumbItems(pathname, pageMap);

  if (breadcrumbItems.length <= 1) {
    return null; // Don't show breadcrumbs on home page
  }

  return (
    <nav 
      className="bg-primary-50 border-b border-primary-100" 
      aria-label="Breadcrumb"
    >
      <div className="container-custom">
        <div className="px-4 py-3 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm">
            {breadcrumbItems.map((item, index) => {
              const isLast = index === breadcrumbItems.length - 1;
              
              return (
                <li key={item.href} className="flex items-center">
                  {index > 0 && (
                    <ChevronRight className="h-4 w-4 text-primary-400 mx-2" />
                  )}
                  
                  {isLast ? (
                    <span 
                      className="flex items-center space-x-1 text-primary-800 font-medium"
                      aria-current="page"
                    >
                      {item.icon && <span>{item.icon}</span>}
                      <span>{item.title}</span>
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center space-x-1 text-primary-600 hover:text-primary-800 transition-colors duration-200"
                      title={item.description}
                    >
                      {item.icon && <span>{item.icon}</span>}
                      <span>{item.title}</span>
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </nav>
  );
};

function generateBreadcrumbItems(pathname, pageMap) {
  const pathSegments = pathname.split('/').filter(Boolean);
  const items = [pageMap['/']]; // Always start with home

  let currentPath = '';
  pathSegments.forEach(segment => {
    currentPath += `/${segment}`;
    if (pageMap[currentPath]) {
      items.push({
        ...pageMap[currentPath],
        href: currentPath
      });
    }
  });

  // Add href to all items
  return items.map((item, index) => ({
    ...item,
    href: index === 0 ? '/' : item.href || pathname
  }));
}

export default Breadcrumbs;