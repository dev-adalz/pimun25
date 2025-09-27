import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Globe, Calendar, Users, Award } from "lucide-react";

interface CountdownProps {
  targetDate: Date;
}

function CountdownTimer({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="flex gap-4 justify-center"
    >
      {Object.entries(timeLeft).map(([unit, value], index) => (
        <motion.div
          key={unit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 + index * 0.1, duration: 0.5 }}
          className="text-center"
        >
          <div className="bg-card/20 backdrop-blur-sm border border-primary/20 rounded-lg p-3 min-w-[70px]">
            <div className="text-2xl font-bold text-primary font-serif">{value}</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider">
              {unit}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function HeroSection() {
  const conferenceDate = new Date('2025-04-15'); // todo: replace with actual conference date

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-background/95">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/attached_assets/generated_images/Professional_MUN_conference_hall_6f29a800.png"
          alt="Professional conference hall"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Globe Background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
        animate={{ opacity: 0.1, scale: 1, rotate: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-1/4 right-1/4 w-96 h-96 z-0"
      >
        <Globe className="w-full h-full text-primary" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Logo/Badge */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-card/20 backdrop-blur-sm border border-primary/20 px-4 py-2 rounded-full">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Premier International Conference</span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-6xl lg:text-8xl font-serif font-bold text-primary mb-4 tracking-tight"
        >
          PIMUN25
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-xl lg:text-2xl text-muted-foreground mb-8 font-light"
        >
          Diplomacy. Dialogue. Development.
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Join the most prestigious Model United Nations conference of 2025.
          Shape the future of international diplomacy with delegates from around the world.
        </motion.p>

        {/* Countdown Timer */}
        <div className="mb-12">
          <CountdownTimer targetDate={conferenceDate} />
        </div>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 hover-elevate text-lg px-8 py-6"
            data-testid="button-register-now"
            onClick={() => console.log('Register Now clicked')}
          >
            <Users className="w-5 h-5 mr-2" />
            Register Now
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary/10 hover-elevate text-lg px-8 py-6 backdrop-blur-sm"
            data-testid="button-confirm-payment"
            onClick={() => console.log('Confirm Payment clicked')}
          >
            <Calendar className="w-5 h-5 mr-2" />
            Confirm Payment
          </Button>
        </motion.div>

        {/* Quick Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            <span>April 15-17, 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-primary" />
            <span>International Delegates</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-primary" />
            <span>500+ Participants</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}