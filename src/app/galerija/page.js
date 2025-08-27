import Gallery from "../../components/Gallery/Gallery";

export const metadata = {
  title: "Galerija - Betonske Ograde Zrenjanin",
  description:
    "Pogledajte galeriju slika naših betonskih ograda u Zrenjaninu. Inspirišite se dizajnom i kvalitetom naših proizvoda.",
  keywords:
    "betonske ograde galerija, slike betonskih ograda, galerija Zrenjanin, betonske ograde Adexto, dizajn ograda",
  openGraph: {
    title: "Galerija - Betonske Ograde Zrenjanin | Adexto",
    description:
      "Pogledajte galeriju slika naših betonskih ograda u Zrenjaninu. Inspirišite se dizajnom i kvalitetom naših proizvoda.",
    url: "https://adexto.com/galerija",
    siteName: "Adexto",
    type: "website",
  },
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Gallery />
    </div>
  );
}