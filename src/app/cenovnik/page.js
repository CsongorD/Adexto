import PriceTable from "../../components/PriceTable/PriceTable";

export const metadata = {
  title: "Cenovnik - Adexto",
  description: "Pogledajte naše cene za betonske ograde u Zrenjaninu.",
  keywords: "cenovnik, betonske ograde, Zrenjanin, Adexto",
  openGraph: {
    title: "Cenovnik - Adexto",
    description: "Pogledajte naše cene za betonske ograde u Zrenjaninu.",
    url: "https://adexto.com/cenovnik",
    siteName: "Adexto",
    images: [
      {
        url: "https://adexto.com/images/cenovnik.jpg", // Change this to a relevant image
        width: 1200,
        height: 630,
        alt: "Cenovnik Adexto",
      },
    ],
    type: "website",
  },
};


export default function TypesPage() {
  return <PriceTable />;
}
