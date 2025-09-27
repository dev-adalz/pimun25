import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ExternalLink, MapPin, Calendar, Users } from "lucide-react";
import { useState } from "react";

// todo: replace with real team data
const teamMembers = [
  {
    name: "Sarah Chen",
    role: "Secretary-General",
    bio: "Former diplomat with 10+ years of international relations experience",
    image: "/attached_assets/generated_images/Professional_delegate_portraits_8ea69ecd.png",
    country: "Singapore"
  },
  {
    name: "Marcus Johnson",
    role: "Deputy Secretary-General",
    bio: "Award-winning MUN veteran and debate champion",
    image: "/attached_assets/generated_images/Professional_delegate_portraits_8ea69ecd.png",
    country: "United States"
  },
  {
    name: "Priya Sharma",
    role: "Under-Secretary-General",
    bio: "International law expert and conference organizer",
    image: "/attached_assets/generated_images/Professional_delegate_portraits_8ea69ecd.png",
    country: "India"
  },
  {
    name: "Ahmed Hassan",
    role: "Director of Operations",
    bio: "Logistics specialist with global conference management experience",
    image: "/attached_assets/generated_images/Professional_delegate_portraits_8ea69ecd.png",
    country: "Egypt"
  }
];

// todo: replace with real gallery data
const galleryImages = [
  {
    src: "/attached_assets/generated_images/Professional_MUN_conference_hall_6f29a800.png",
    alt: "PIMUN24 Opening Ceremony",
    title: "Opening Ceremony",
    year: "2024"
  },
  {
    src: "/attached_assets/generated_images/Executive_committee_meeting_room_a8b93f31.png",
    alt: "Committee Session",
    title: "Security Council Session",
    year: "2024"
  },
  {
    src: "/attached_assets/generated_images/Professional_delegate_portraits_8ea69ecd.png",
    alt: "Delegate Networking",
    title: "Networking Reception",
    year: "2024"
  },
  {
    src: "/attached_assets/generated_images/Executive_committee_meeting_room_a8b93f31.png",
    alt: "Award Ceremony",
    title: "Closing Awards",
    year: "2024"
  },
  {
    src: "/attached_assets/generated_images/Professional_MUN_conference_hall_6f29a800.png",
    alt: "General Assembly",
    title: "General Assembly",
    year: "2023"
  },
  {
    src: "/attached_assets/generated_images/Professional_delegate_portraits_8ea69ecd.png",
    alt: "Cultural Night",
    title: "Cultural Exchange",
    year: "2023"
  }
];

export default function TeamGallerySection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <section ref={ref} className="py-24 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Meet the Secretariat
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our experienced team of diplomats, educators, and MUN veterans are committed 
            to delivering an exceptional conference experience.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
            >
              <Card 
                className="p-6 text-center bg-card/50 backdrop-blur-sm border-card-border hover-elevate transition-all duration-300 group"
                data-testid={`card-team-member-${index}`}
              >
                {/* Avatar */}
                <div className="mb-4">
                  <Avatar className="w-20 h-20 mx-auto mb-3 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                </div>

                {/* Member Info */}
                <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <Badge variant="outline" className="mb-3 text-xs">
                  {member.role}
                </Badge>
                
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {member.bio}
                </p>

                <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  <span>{member.country}</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Conference Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Relive the memorable moments from previous PIMUN conferences and 
            get inspired for what awaits you in 2025.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: 0.6 + index * 0.05,
                ease: "easeOut"
              }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(image)}
              data-testid={`gallery-image-${index}`}
            >
              <Card className="p-0 overflow-hidden hover-elevate transition-all duration-300 border-card-border">
                <div className="relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Image Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <h4 className="text-white font-semibold text-sm mb-1">{image.title}</h4>
                    <div className="flex items-center gap-2 text-white/80 text-xs">
                      <Calendar className="w-3 h-3" />
                      <span>PIMUN {image.year}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Gallery CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="text-center"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary/10 hover-elevate"
            onClick={() => console.log('View full gallery clicked')}
            data-testid="button-view-gallery"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View Full Gallery
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 p-8 bg-card/20 backdrop-blur-sm border border-card-border rounded-xl"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">5</div>
            <div className="text-sm text-muted-foreground">Years Running</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">2000+</div>
            <div className="text-sm text-muted-foreground">Alumni Network</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Countries Represented</div>
          </div>
        </motion.div>
      </div>

      {/* Simple Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-card border border-card-border rounded-lg p-2 max-w-4xl max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[70vh] object-contain rounded"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                PIMUN {selectedImage.year}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}