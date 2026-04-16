import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ClubsSection from "@/components/portfolio/ClubsSection";
import DesignSection from "@/components/portfolio/DesignSection";
import BusinessSection from "@/components/portfolio/BusinessSection";
import ContactSection from "@/components/portfolio/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <div id="clubs">
          <ClubsSection />
        </div>
        <div id="design">
          <DesignSection />
        </div>
        <div id="ventures">
          <BusinessSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </main>
    </div>
  );
};

export default Index;
