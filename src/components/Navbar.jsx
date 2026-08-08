import { useState, useEffect } from "react";
import { cafeConfig } from "../config/cafeConfig";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#story", label: "Felsefe & Kavrum" },
    { href: "#menu", label: "Menü" },
    { href: "#workshops", label: "Mağaza & Atölye" },
    { href: "#contact", label: "İletişim & Konum" },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
      scrolled 
        ? "bg-[var(--bg-card)]/95 backdrop-blur-md border-[var(--border-color)] py-3 shadow-sm" 
        : "bg-[var(--bg-primary)] border-transparent py-4 md:py-5"
    }`}>
      <div className="max-w-7xl mx-auto px-5 md:px-12 flex items-center justify-between">
        
        <a 
          href="#hero" 
          onClick={(e) => scrollToSection(e, "#hero")}
          className="text-base sm:text-lg md:text-xl font-black tracking-wider text-[var(--text-main)] uppercase font-[var(--font-heading)] whitespace-nowrap cursor-pointer"
        >
          {cafeConfig.info.name}
        </a>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-bold tracking-widest text-[var(--text-main)]">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="hover:text-[var(--accent-highlight)] transition-colors uppercase cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="lg:hidden p-2 text-[var(--text-main)] focus:outline-none cursor-pointer"
          aria-label="Mobil Menüyü Aç"
        >
          <span className="text-2xl font-bold">{isOpen ? "✕" : "☰"}</span>
        </button>

      </div>

      {isOpen && (
        <div className="lg:hidden bg-[var(--bg-card)] border-b border-[var(--border-color)] px-6 py-6 flex flex-col gap-4 text-sm font-bold tracking-wider text-[var(--text-main)] shadow-xl">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="py-2 border-b border-[var(--border-color)]/50 uppercase cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}