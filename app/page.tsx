
import Collaborations from "./components/Collaborations";
import PrimeLocationsPage from "./components/PrimeLocations";
import Projects from "./components/Projects";
import PromotionalBanner from "./components/PromotionalBanner";
import ZoomCarousel from "./components/ZoomCarousel";

export default function Home() {
  return (
    <>
      <ZoomCarousel />
      <Projects/>
      <Collaborations/>
      <PrimeLocationsPage/>
      <PromotionalBanner/>
    </>
  );
}
