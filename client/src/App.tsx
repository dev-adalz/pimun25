import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import Registration from "@/pages/Registration";
import Contact from "@/pages/Contact";
import Team from "@/pages/Team";
import PastConferences from "@/pages/PastConferences";
import Resources from "@/pages/Resources";
import Galleries from "@/pages/Galleries";
import Schedule from "@/pages/Schedule";
import Accommodation from "@/pages/Accommodation";
import FAQs from "@/pages/FAQs";
import BlogPost from "@/pages/BlogPost";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/registration" component={Registration} />
      <Route path="/resources" component={Resources} />
      <Route path="/schedule" component={Schedule} />
      <Route path="/accommodation" component={Accommodation} />
      <Route path="/faqs" component={FAQs} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/contact" component={Contact} />
      <Route path="/team" component={Team} />
      <Route path="/galleries" component={Galleries} />
      <Route path="/past" component={PastConferences} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
