import CinematicHero from './components/CinematicHero';
import FeaturesBar from './components/FeaturesBar';
import AboutSection from './components/AboutSection';
import TrustSignalStrip from './components/TrustSignalStrip';
import HighlightsGrid from './components/HighlightsGrid';
import Testimonials from './components/Testimonials';
import HomepageParallax from './components/HomepageParallax';

export default function Home() {
  return (
    <main>
      <CinematicHero />
      <HomepageParallax>
        <FeaturesBar />
        <AboutSection />
        <TrustSignalStrip />
        <HighlightsGrid />
        <Testimonials />
      </HomepageParallax>
    </main>
  );
}
