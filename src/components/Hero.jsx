import { motion } from "framer-motion";
import { cafeConfig } from "../config/cafeConfig";

export default function Hero() {
  return (
    <section id="hero" className="pt-28 md:pt-36 pb-14 md:pb-20 px-5 md:px-12 border-b border-[var(--border-color)] bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        <div className="lg:col-span-7 text-left space-y-4 md:space-y-6">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent-highlight)] block"
          >
            {cafeConfig.info.tagline}
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[var(--text-main)] tracking-tight leading-[1.1]"
          >
            Nitelikli Kahve & Özel Demleme Çözümleri.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base text-[var(--text-muted)] font-normal leading-relaxed max-w-xl"
          >
            {cafeConfig.info.subtitle}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="pt-2 flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <a 
              href="#menu" 
              className="w-full sm:w-auto text-center px-8 py-3.5 bg-[var(--btn-bg)] text-[var(--btn-text)] text-xs font-extrabold uppercase tracking-widest hover:opacity-85 transition-opacity"
            >
              ☕ Kahve Menümüz
            </a>
            <a 
              href="#workshops" 
              className="w-full sm:w-auto text-center px-8 py-3.5 border border-[var(--text-main)] text-[var(--text-main)] text-xs font-bold uppercase tracking-widest hover:bg-[var(--text-main)] hover:text-[var(--bg-primary)] transition-all"
            >
              🏺 Mağaza & Atölye
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-5 h-[280px] sm:h-[360px] md:h-[420px] regent-card overflow-hidden relative"
        >
          <img 
            src={cafeConfig.images.heroBg} 
            alt="REGENT Kafe Atmosferi" 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-3 left-3 right-3 bg-[var(--bg-card)]/90 backdrop-blur-md p-3 md:p-4 border border-[var(--border-color)] text-left">
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-[var(--accent-highlight)] block">Nitelikli Kavrum</span>
            <span className="text-xs md:text-sm font-bold text-[var(--text-main)]">Single Origin Demlemeler & Artisan Lezzetler</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}