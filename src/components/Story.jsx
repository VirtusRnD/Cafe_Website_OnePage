import { motion } from "framer-motion";
import { cafeConfig } from "../config/cafeConfig";

export default function Story() {
  const story = cafeConfig?.story || {
    title: "Kahvenin Gerçek Yolculuğu",
    description: "Mellow'da kahve bir içecek değil, bir tutkudur. Nitelikli çiftliklerden topladığımız çekirdekleri haftalık olarak kendi kavrum profilimizle hazırlıyoruz.",
  };

  const images = cafeConfig?.images || {};

  return (
    <section id="story" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-[var(--border-color)]">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative h-[420px] regent-card overflow-hidden"
        >
          <img 
            src={images.coffeeStory || images.heroBg} 
            alt="Nitelikli Kahve Sanatı" 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 right-4 bg-[var(--bg-card)]/90 backdrop-blur-md p-4 border border-[var(--border-color)]">
            <span className="block text-[10px] font-bold text-[var(--accent-highlight)] uppercase tracking-widest mb-1">
              Kendi Kavrumumuz
            </span>
            <p className="text-xs font-bold text-[var(--text-main)]">
              Haftalık Taze Kavrulan Nitelikli Arabica Çekirdekleri
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-left space-y-6"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--accent-highlight)] font-bold block">
            Demleme Felsefesi
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-main)] leading-tight">
            {story?.title}
          </h2>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed font-normal">
            {story?.description}
          </p>

          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[var(--border-color)]">
            <div>
              <span className="block text-3xl font-extrabold text-[var(--text-main)]">86+ SCA</span>
              <span className="text-[10px] text-[var(--text-muted)] font-bold uppercase tracking-wider">
                Nitelikli Çekirdek Skoru
              </span>
            </div>
            <div>
              <span className="block text-3xl font-extrabold text-[var(--text-main)]">Haftalık</span>
              <span className="text-[10px] text-[var(--text-muted)] font-bold uppercase tracking-wider">
                Taze Kavrum Profili
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}