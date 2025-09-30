import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CommitteesSection from "@/components/CommitteesSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <CommitteesSection />
        <FooterSection />
      </main>
    </div>
  );
}