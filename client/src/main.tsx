import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import logoUrl from "@assets/logo.png";

// Set favicon from attached assets
const ensureFavicon = () => {
  const linkId = "app-favicon";
  let link = document.getElementById(linkId) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.id = linkId;
    link.rel = "icon";
    document.head.appendChild(link);
  }
  link.href = logoUrl;
};

ensureFavicon();

createRoot(document.getElementById("root")!).render(<App />);
