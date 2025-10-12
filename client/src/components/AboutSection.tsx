import { Calendar, MapPin } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-24 sm:py-32">
        {/* Title */}
        <div 
          className="relative z-10 mb-16 sm:mb-20 opacity-0 translate-y-4 animate-in fade-in slide-in-from-bottom duration-1000 delay-300"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-center tracking-tight text-white">
            About <span className="text-primary">PIMUN 2025</span>
          </h2>
        </div>
        
        {/* Main content */}
        <div className="relative z-10 max-w-4xl mx-auto space-y-16">
          {/* Description */}
          <div 
            className="opacity-0 translate-y-4 animate-in fade-in slide-in-from-bottom duration-1000 delay-500"
          >
            <p className="text-lg sm:text-xl text-center leading-relaxed text-white">
              Building on our legacy of diplomatic excellence, Presidency MUN Club proudly presents our signature event – 
              <span className="text-primary font-medium"> Presidency International Model United Nations 2025</span>.
            </p>
          </div>
          
          {/* Event details */}
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 opacity-0 translate-y-4 animate-in fade-in slide-in-from-bottom duration-1000 delay-700"
          >
            <div className="flex items-center justify-center gap-4 group">
              <Calendar className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-medium text-lg mb-1 text-white">Conference Dates</h3>
                <p className="text-white/80">October 28–30, 2025</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-4 group">
              <MapPin className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-medium text-lg mb-1 text-white">Venue</h3>
                <p className="text-white/80">Presidency International School, Dhaka</p>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div 
            className="text-center space-y-8 max-w-3xl mx-auto opacity-0 translate-y-4 animate-in fade-in slide-in-from-bottom duration-1000 delay-1000"
          >
            <p className="text-base sm:text-lg text-white/90 leading-relaxed">
              We're creating an unparalleled platform where emerging leaders transcend boundaries 
              to shape tomorrow's diplomatic landscape. PIMUN 2025 continues to push boundaries
              in diplomatic simulation, fostering meaningful connections with peers from around the globe.
            </p>
            
            <p className="text-base sm:text-lg text-white/90 leading-relaxed">
              Join us as we set new benchmarks in the MUN circuit. Whether you're a seasoned delegate
              or stepping into the world of Model UN for the first time, PIMUN 2025 offers an enriching
              platform to develop your diplomatic acumen, leadership skills, and global perspective.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
