import AboutUs from "../components/AboutUs/AboutUs";
import CharacteristicList from "../components/CharacteristicList/CharacteristicList";
import Landing from "../components/Landing/Landing";

export const metadata = {
  title: "Adexto - Premium Betonske Ograde Zrenjanin",
  description:
    "Adexto nudi najkvalitetnije betonske ograde u Zrenjaninu, savršene za svaki prostor. Otkrijte našu ponudu danas!",
  keywords:
    "betonske ograde, Zrenjanin, Adexto, ograde za dvorište, betonske ograde Zrenjanin",
  openGraph: {
    title: "Adexto - Premium Betonske Ograde Zrenjanin",
    description:
      "Adexto nudi najkvalitetnije betonske ograde u Zrenjaninu, savršene za svaki prostor. Otkrijte našu ponudu danas!",
    url: "https://adexto.com",
    siteName: "Adexto",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Landing />
      <CharacteristicList />
      <AboutUs />
    </div>
  );
}