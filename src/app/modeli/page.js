import ModelTable from "../../components/ModelTable/ModelTable";

export const metadata = {
  title: "Modeli",
  description: "Istražite različite modele betonskih ograda koje nudimo.",
  keywords: "betonske ograde, modeli, dizajn, Zrenjanin, Adexto",
  openGraph: {
    title: "Modeli - Adexto",
    description: "Istražite različite modele betonskih ograda koje nudimo.",
    url: "https://adexto.com/modeli",
    siteName: "Adexto",
    type: "website",
  },
};


export default function ModelsPage() {
  return <ModelTable />;
}
