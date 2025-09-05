import Link from "next/link";
import { ArrowRight, Eye, Phone, Image as ImageIcon } from "lucide-react";

const InternalLinks = ({ variant = "default", className = "" }) => {
  const linkVariants = {
    default: {
      container: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
      card: "card p-4 hover:shadow-lg transition-all duration-300 group",
      title: "text-lg font-semibold text-primary-800 mb-2 group-hover:text-primary-600",
      description: "text-sm text-primary-600 mb-3",
      link: "inline-flex items-center text-primary-500 hover:text-primary-700 font-medium text-sm"
    },
    compact: {
      container: "flex flex-wrap gap-2",
      card: "inline-flex items-center px-3 py-1 bg-primary-100 hover:bg-primary-200 rounded-full transition-colors duration-200",
      link: "text-sm text-primary-700 hover:text-primary-800"
    },
    sidebar: {
      container: "space-y-3",
      card: "border-l-4 border-primary-200 pl-4 py-2 hover:border-primary-400 transition-colors duration-200",
      title: "font-medium text-primary-800 mb-1",
      description: "text-xs text-primary-600"
    }
  };

  const links = [
    {
      href: "/cenovnik",
      title: "Pogledajte Cenovnik",
      description: "Transparentne cene za sve naše betonske ograde",
      icon: <Eye className="h-4 w-4" />,
      keywords: "cene betonskih ograda, cenovnik Zrenjanin"
    },
    {
      href: "/modeli",
      title: "Istražite Modele",
      description: "Širok izbor dizajna za svaki ukus",
      icon: <ImageIcon className="h-4 w-4" />,
      keywords: "modeli betonskih ograda, dizajn ograda"
    },
    {
      href: "/galerija",
      title: "Pogledajte Galeriju",
      description: "Realizovani projekti naših klijenata",
      icon: <ImageIcon className="h-4 w-4" />,
      keywords: "galerija betonskih ograda, realizovani projekti"
    },
    {
      href: "/kontakt",
      title: "Kontaktirajte Nas",
      description: "Dobijte besplatnu konsultaciju",
      icon: <Phone className="h-4 w-4" />,
      keywords: "kontakt betonske ograde Zrenjanin"
    }
  ];

  const currentVariant = linkVariants[variant];

  if (variant === "compact") {
    return (
      <div className={`${currentVariant.container} ${className}`}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={currentVariant.card}
            title={link.description}
          >
            <span className={currentVariant.link}>{link.title}</span>
          </Link>
        ))}
      </div>
    );
  }

  if (variant === "sidebar") {
    return (
      <div className={`${currentVariant.container} ${className}`}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={currentVariant.card}
            title={link.keywords}
          >
            <div>
              <div className={currentVariant.title}>{link.title}</div>
              <div className={currentVariant.description}>{link.description}</div>
            </div>
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className={`${currentVariant.container} ${className}`}>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={currentVariant.card}
          title={link.keywords}
        >
          <div className="flex items-center mb-2">
            {link.icon}
            <h3 className={`ml-2 ${currentVariant.title}`}>{link.title}</h3>
          </div>
          <p className={currentVariant.description}>{link.description}</p>
          <div className={currentVariant.link}>
            Saznajte više <ArrowRight className="h-4 w-4 ml-1" />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default InternalLinks;