import Navigation from '../Navigation';

export default function NavigationExample() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-4">
            Navigation Demo
          </h1>
          <p className="text-muted-foreground mb-8">
            Scroll down to see the navigation bar adapt with glassmorphism effects.
          </p>
          
          {/* Demo content to test scroll behavior */}
          <div className="space-y-8">
            {Array.from({ length: 10 }, (_, i) => (
              <div key={i} className="p-6 bg-card/50 border border-card-border rounded-lg">
                <h2 className="text-xl font-semibold mb-2">Section {i + 1}</h2>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                  veniam, quis nostrud exercitation.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}