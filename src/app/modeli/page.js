import ModelTable from "../../components/ModelTable/ModelTable";

export const metadata = {
  title: "Modeli - Adexto",
  description: "Istražite različite modele betonskih ograda koje nudimo.",
  keywords: "betonske ograde, modeli, dizajn, Zrenjanin, Adexto",
  openGraph: {
    title: "Modeli - Adexto",
    description: "Istražite različite modele betonskih ograda koje nudimo.",
    url: "https://adexto.com/modeli",
    siteName: "Adexto",
    images: [
      {
        url: "https://adexto.com/images/modeli.jpg",
        width: 1200,
        height: 630,
        alt: "Modeli betonskih ograda",
      },
    ],
    type: "website",
  },
};


export default function ModelsPage() {
  return <ModelTable />;
}
