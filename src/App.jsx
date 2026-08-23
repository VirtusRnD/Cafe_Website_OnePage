import { useEffect, useState } from "react";
import { io } from "socket.io-client";

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

const BACKEND_URL = "https://theme-backend-vh34.onrender.com";
const socket = io(BACKEND_URL);
const CURRENT_SITE_ID = "cafe-onepage";

export default function App() {
  const [currentTheme, setCurrentTheme] = useState(cafeConfig.theme || "regent-classic");

  useEffect(() => {
    if (cafeConfig.theme) {
      setCurrentTheme(cafeConfig.theme);
    }
  }, [cafeConfig.theme]);

  useEffect(() => {
    fetch(`${BACKEND_URL}/api/themes/${CURRENT_SITE_ID}`)
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

    socket.on("theme_changed", handleThemeChange);

    return () => {
      socket.off("theme_changed", handleThemeChange);
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

  useEffect(() => {
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