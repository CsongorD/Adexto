import PriceTable from "../../components/PriceTable/PriceTable";

export const metadata = {
  title: "Cenovnik - Betonske Ograde Zrenjanin",
  description:
    "Pogledajte ažurirane cene za betonske ograde u Zrenjaninu. Pristupačne cene i vrhunski kvalitet betonskih ograda za vaš dom ili poslovni prostor.",
  keywords:
    "cenovnik betonske ograde Zrenjanin, cene betonskih ograda, betonske ograde Adexto, betonske ograde Zrenjanin",
  openGraph: {
    title: "Cenovnik - Betonske Ograde Zrenjanin | Adexto",
    description:
      "Pogledajte ažurirane cene za betonske ograde u Zrenjaninu. Pristupačne cene i vrhunski kvalitet betonskih ograda za vaš dom ili poslovni prostor.",
    url: "https://adexto.com/cenovnik",
    siteName: "Adexto",
    type: "website",
  },
};

export default function TypesPage() {
  return <PriceTable />;
}
