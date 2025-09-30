import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Globe, Calendar, Users, Award } from "lucide-react";
import { useLocation } from "wouter";
import logoUrl from "@assets/logo.png";
import heroVideoUrl from "@assets/hero.mp4";
import hallImg from "@assets/generated_images/Professional_MUN_conference_hall_6f29a800.png";

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
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.1 * index, duration: 0.5 }}
          className="text-center"
        >
          <div className="glass thin-border rounded-lg p-3 min-w-[70px]">
            <div className="text-2xl font-bold font-serif text-foreground">{value}</div>
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
  const conferenceDate = useMemo(() => new Date('2025-11-28T00:00:00'), []);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0 });
  const [, navigate] = useLocation();

  // scroll-linked parallax
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const globeScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const globeOpacity = useTransform(scrollYProgress, [0, 1], [0.08, 0.15]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-background spotlight-container"
      style={{ ['--sx' as any]: `${spotlight.x}px`, ['--sy' as any]: `${spotlight.y}px` }}
      onMouseMove={(e) => setSpotlight({ x: e.clientX, y: e.clientY })}
    >
      {/* Background Video + Fallback Image */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <video
          className="w-full h-full object-cover opacity-35"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={hallImg}
        >
          <source src={heroVideoUrl} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(60% 60% at 50% 40%, rgba(212,175,55,0.05) 0%, rgba(0,0,0,0) 60%)" }} />
      </motion.div>

      {/* Watermark Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-5 pointer-events-none"
      >
        <img
          src={logoUrl}
          alt="PIMUN Logo Watermark"
          className="w-64 h-64 lg:w-80 lg:h-80 object-contain opacity-25"
        />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Logo/Badge */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 glass thin-border px-4 py-2 rounded-full lgold-glow">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Presidency International MUN Conference</span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8 }}
          className="text-5xl lg:text-7xl font-serif font-semibold mb-4 tracking-tight text-foreground"
        >
          Presidency International MUN 2025
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-base lg:text-lg text-muted-foreground mb-8"
        >
          Hosted by Presidency International School — November 28–30, 2025.
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-[15px] text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed lgold-grad lgold-border rounded-md p-4"
        >
          Become Diplomats Of Tomorrow.

        </motion.p>

        {/* Countdown Timer */}
        <div className="mb-14">
          <CountdownTimer targetDate={conferenceDate} />
        </div>

        {/* Single Call to Action Button (larger) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <Button
            size="lg"
            className="min-h-14 text-[1.05rem] px-10 py-7 bg-primary/90 text-primary-foreground hover:bg-primary hover-elevate thin-border lgold-glow"
            data-testid="button-register-now"
            onClick={() => navigate('/registration')}
          >
            <Users className="w-5 h-5 mr-2" />
            Register Now
          </Button>
        </motion.div>

        {/* Quick Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            <span>November 28–30, 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-primary" />
            <span>International Delegates</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-primary" />
            <span>400+ Participants</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}