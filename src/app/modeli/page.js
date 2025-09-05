import ModelTable from "../../components/ModelTable/ModelTable";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import RelatedLinks from "../../components/RelatedLinks/RelatedLinks";

export const metadata = {
  title: "Modeli - Betonske Ograde Zrenjanin",
  description:
    "Istražite različite modele betonskih ograda koje nudimo. Saznajte koji dizajn je najbolji za vaš prostor.",
  keywords:
    "modeli betonskih ograda, dizajn betonskih ograda, betonske ograde Zrenjanin, Adexto modeli ograda, vrste betonskih ograda",
  openGraph: {
    title: "Modeli - Betonske Ograde Zrenjanin | Adexto",
    description:
      "Istražite različite modele betonskih ograda koje nudimo. Saznajte koji dizajn je najbolji za vaš prostor.",
    url: "https://adexto.com/modeli",
    siteName: "Adexto",
    type: "website",
  },
};

export default function ModelsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumbs />
      <ModelTable />
      <RelatedLinks currentPage="/modeli" />
    </div>
  );
}
