import { useEffect } from "react";
import { cafeConfig } from "./config/cafeConfig";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Story from "./components/Story";
import RoastingProcess from "./components/RoastingProcess";
import Menu from "./components/Menu";
import WorkshopsGrid from "./components/WorkshopsGrid";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

import "./styles/cafeTheme.css";

export default function App() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", cafeConfig.theme || "regent-classic");
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-main)] transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <RoastingProcess />
        <Menu />
        <WorkshopsGrid />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}