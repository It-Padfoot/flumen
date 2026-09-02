import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import VideoSection from "@/components/VideoSection";
import InsightsSection from "@/components/InsightsSection";
import ResearchSection from "@/components/ResearchSection";
import DocumentsFlowSection from "@/components/DocumentsFlowSection";
import SimpleSection from "@/components/SimpleSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <VideoSection />
      <InsightsSection />
      <ResearchSection />
      <DocumentsFlowSection />
      <SimpleSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
