import Link from "next/link";
import { ArrowRight } from "lucide-react";

const RelatedLinks = ({ currentPage, className = "" }) => {
  const allLinks = {
    "/": [
      { href: "/cenovnik", title: "Pogledajte naš cenovnik", description: "Transparentne cene za sve modele" },
      { href: "/modeli", title: "Istražite naše modele", description: "Širok izbor dizajna betonskih ograda" },
      { href: "/galerija", title: "Pogledajte realizovane projekte", description: "Inspirišite se našim radovima" }
    ],
    "/cenovnik": [
      { href: "/modeli", title: "Pogledajte modele ograda", description: "Izaberite dizajn koji vam se dopada" },
      { href: "/galerija", title: "Vidite ograde u praksi", description: "Kako izgledaju naši proizvodi" },
      { href: "/kontakt", title: "Zatražite ponudu", description: "Dobijte personalizovanu cenu" }
    ],
    "/modeli": [
      { href: "/cenovnik", title: "Proverite cene modela", description: "Saznajte koliko košta vaš omiljeni dizajn" },
      { href: "/galerija", title: "Vidite modele u praksi", description: "Realizovani projekti sa ovim modelima" },
      { href: "/kontakt", title: "Poručite model", description: "Kontaktirajte nas za narudžbu" }
    ],
    "/galerija": [
      { href: "/modeli", title: "Istražite sve modele", description: "Kompletna kolekcija naših dizajna" },
      { href: "/cenovnik", title: "Saznajte cene", description: "Cenovnik za sve prikazane modele" },
      { href: "/kontakt", title: "Zatražite sličan projekat", description: "Realizujemo i vaš projekat" }
    ],
    "/kontakt": [
      { href: "/cenovnik", title: "Pregledajte cene", description: "Pre kontakta, vidite naše cene" },
      { href: "/modeli", title: "Izaberite model", description: "Odlučite se za dizajn koji vam se dopada" },
      { href: "/galerija", title: "Inspirišite se", description: "Pogledajte naše realizovane projekte" }
    ]
  };

  const relatedLinks = allLinks[currentPage] || [];

  if (relatedLinks.length === 0) {
    return null;
  }

  return (
    <section className={`bg-primary-50 border-t border-primary-100 ${className}`}>
      <div className="container-custom section-padding">
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-primary-800 mb-2 sm:text-2xl">
            Možda vas zanima
          </h2>
          <p className="text-primary-600">
            Dodatne informacije koje mogu biti korisne
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
          {relatedLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="card p-6 hover:shadow-lg transition-all duration-300 group"
              title={`${link.title} - ${link.description}`}
            >
              <h3 className="font-semibold text-primary-800 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                {link.title}
              </h3>
              <p className="text-sm text-primary-600 mb-4">
                {link.description}
              </p>
              <div className="inline-flex items-center text-primary-500 hover:text-primary-700 font-medium text-sm">
                Saznajte više <ArrowRight className="h-4 w-4 ml-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedLinks;