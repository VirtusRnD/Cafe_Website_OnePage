import { cafeConfig } from "../config/cafeConfig";

export default function Footer() {
  const { info } = cafeConfig;

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer id="footer" className="bg-[var(--bg-card)] border-t border-[var(--border-color)] py-10 px-5 md:px-12 text-left">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-8 border-b border-[var(--border-color)]">
        
        <div className="space-y-1 max-w-sm">
          <a 
            href="#hero" 
            onClick={(e) => scrollToSection(e, "#hero")}
            className="text-base font-black tracking-widest uppercase text-[var(--text-main)] font-[var(--font-heading)] cursor-pointer"
          >
            {info.name}
          </a>
          <p className="text-xs text-[var(--text-muted)] leading-relaxed">
            {info.tagline} — Nitelikli Çekirdek & Artisan Demleme Sanatı.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 text-xs font-bold uppercase tracking-wider text-[var(--text-main)]">
          <a href="#hero" onClick={(e) => scrollToSection(e, "#hero")} className="hover:text-[var(--accent-highlight)] transition-colors cursor-pointer">Ana Sayfa</a>
          <a href="#story" onClick={(e) => scrollToSection(e, "#story")} className="hover:text-[var(--accent-highlight)] transition-colors cursor-pointer">Felsefe</a>
          <a href="#menu" onClick={(e) => scrollToSection(e, "#menu")} className="hover:text-[var(--accent-highlight)] transition-colors cursor-pointer">Menü</a>
          <a href="#workshops" onClick={(e) => scrollToSection(e, "#workshops")} className="hover:text-[var(--accent-highlight)] transition-colors cursor-pointer">Atölyeler</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")} className="hover:text-[var(--accent-highlight)] transition-colors cursor-pointer">Konum & Ulaşım</a>
        </div>

        <div className="text-xs space-y-1">
          <span className="text-[var(--text-muted)] block">Alsancak, İzmir</span>
          <a href={`tel:${info.phone}`} className="font-extrabold text-[var(--text-main)] hover:text-[var(--accent-highlight)] transition-colors block">
            {info.phone}
          </a>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row justify-between items-center text-[11px] text-[var(--text-muted)] gap-3">
        <p>© 2026 {info.name}. Tüm hakları saklıdır.</p>
        <p className="font-semibold text-[var(--text-main)]">Nitelikli Kahve & Zanaat Atölyeleri</p>
      </div>
    </footer>
  );
}