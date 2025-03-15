import Gallery from "../../components/Gallery/Gallery";

export const metadata = {
  title: "Galerija",
  description: "Pogledajte slike naših betonskih ograda.",
  keywords: "betonske ograde, galerija, slike, Zrenjanin, Adexto",
  openGraph: {
    title: "Galerija - Adexto",
    description: "Pogledajte slike naših betonskih ograda.",
    url: "https://adexto.com/galerija",
    siteName: "Adexto",
    type: "website",
  },
};

export default function GalleryPage() {
  return (
    <div className="page-margin-top">
      <Gallery />
    </div>
  );
}
