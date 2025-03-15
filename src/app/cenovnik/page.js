import PriceTable from "../../components/PriceTable/PriceTable";

export const metadata = {
  title: "Cenovnik",
  description: "Pogledajte naše cene za betonske ograde u Zrenjaninu.",
  keywords: "cenovnik, betonske ograde, Zrenjanin, Adexto",
  openGraph: {
    title: "Cenovnik - Adexto",
    description: "Pogledajte naše cene za betonske ograde u Zrenjaninu.",
    url: "https://adexto.com/cenovnik",
    siteName: "Adexto",
    type: "website",
  },
};


export default function TypesPage() {
  return <PriceTable />;
}
