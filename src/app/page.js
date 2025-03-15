import AboutUs from "../components/AboutUs/AboutUs";
import CharacteristicList from "../components/CharacteristicList/CharacteristicList";
import Landing from "../components/Landing/Landing";

export const metadata = {
  title: "Adexto",
  description: "Najkvalitetnije betonske ograde u Zrenjaninu.",
  keywords: "betonske ograde, Zrenjanin, Adexto",
  openGraph: {
    title: "Adexto",
    description: "Najkvalitetnije betonske ograde u Zrenjaninu.",
    url: "https://adexto.com",
    siteName: "Adexto",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <div className="home-page page-margin-top">
      <Landing />
      <CharacteristicList />
      <AboutUs />
    </div>
  );
}
