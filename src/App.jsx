import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Story from "./components/Story";
import RoastingProcess from "./components/RoastingProcess";
import Menu from "./components/Menu";
import WorkshopsGrid from "./components/WorkshopsGrid";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

import { cafeConfig } from "./config/cafeConfig";
import "./styles/cafeTheme.css";

// Optional live theme switcher: set VITE_THEME_BACKEND_URL to turn it on (see .env.example).
const BACKEND_URL = import.meta.env.VITE_THEME_BACKEND_URL;
const CURRENT_SITE_ID = "cafe-onepage";

export default function App() {
  // 1. İLK YÜKLEMEDE LOCAL STORAGE'A BAK (Backend'i bekleme)
  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = localStorage.getItem(`${CURRENT_SITE_ID}-theme`);
    return savedTheme || cafeConfig.theme || "regent-classic";
  });

  useEffect(() => {
    if (cafeConfig.theme && !localStorage.getItem(`${CURRENT_SITE_ID}-theme`)) {
      setCurrentTheme(cafeConfig.theme);
    }
  }, [cafeConfig.theme]);

  useEffect(() => {
    if (!BACKEND_URL) return;
    let socket;
    let unmounted = false;
    fetch(`${BACKEND_URL}/api/themes/${CURRENT_SITE_ID}`, { signal: AbortSignal.timeout(5000) })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.activeTheme) {
          setCurrentTheme(data.activeTheme);
        }
      })
      .catch((err) => console.error(err));

    const handleThemeChange = (data) => {
      if (data.siteId === CURRENT_SITE_ID && data.activeTheme) {
        setCurrentTheme(data.activeTheme);
      }
    };

    import("socket.io-client").then(({ io }) => {
      if (unmounted) return;
      socket = io(BACKEND_URL);
      socket.on("theme_changed", handleThemeChange);
    });

    return () => {
      unmounted = true;
      socket?.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.type === "THEME_CHANGE" && event.data.themeKey && event.data.siteId === CURRENT_SITE_ID) {
        setCurrentTheme(event.data.themeKey);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  // 2. TEMA HER DEĞİŞTİĞİNDE LOCAL STORAGE'A KAYDET
  useEffect(() => {
    localStorage.setItem(`${CURRENT_SITE_ID}-theme`, currentTheme);
    document.documentElement.setAttribute("data-theme", currentTheme);
    document.body.setAttribute("data-theme", currentTheme);
  }, [currentTheme]);

  return (
    <div className="min-h-screen bg-transparent text-[var(--text-main)] transition-colors duration-300">
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