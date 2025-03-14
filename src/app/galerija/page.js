import Gallery from "../../components/Gallery/Gallery";

export const metadata = {
  title: "Galerija - Adexto",
  description: "Pogledajte slike naših betonskih ograda.",
  keywords: "betonske ograde, galerija, slike, Zrenjanin, Adexto",
  openGraph: {
    title: "Galerija - Adexto",
    description: "Pogledajte slike naših betonskih ograda.",
    url: "https://adexto.com/galerija",
    siteName: "Adexto",
    images: [
      {
        url: "https://adexto.com/images/galerija.jpg",
        width: 1200,
        height: 630,
        alt: "Galerija betonskih ograda",
      },
    ],
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
