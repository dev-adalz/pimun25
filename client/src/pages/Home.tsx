import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import HighlightsSection from "@/components/HighlightsSection";
import CommitteesSection from "@/components/CommitteesSection";
import TeamGallerySection from "@/components/TeamGallerySection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <HighlightsSection />
        <CommitteesSection />
        <TeamGallerySection />
        <FooterSection />
      </main>
    </div>
  );
}