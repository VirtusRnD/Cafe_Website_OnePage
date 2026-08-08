import { cafeConfig } from "../config/cafeConfig";

export default function RoastingProcess() {
  return (
    <section id="process" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-[var(--border-color)]">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-5 h-[440px] regent-card overflow-hidden">
          <img 
            src={cafeConfig.images.roastingProcess} 
            alt="Kahve Kavrum Süreci" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="lg:col-span-7 text-left space-y-6">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent-highlight)] block">
            Hassas Zanaat
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--text-main)] leading-tight">
            Kavrum Standartlarımız & Kalite Süreci
          </h2>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed font-normal">
            Her çekirdek türü kendine özgü bir ısı profili gerektirir. REGENT Roastery bünyesinde kavrulan kahvelerimiz, tadım (cupping) aşamalarından geçerek bardağınıza ulaşır.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 pt-4 border-t border-[var(--border-color)]">
            <div>
              <span className="block text-xl font-bold text-[var(--text-main)]">01. Tedarik</span>
              <span className="text-xs text-[var(--text-muted)]">Doğrudan Çiftçi Ticareti (Direct Trade)</span>
            </div>
            <div>
              <span className="block text-xl font-bold text-[var(--text-main)]">02. Kavrum</span>
              <span className="text-xs text-[var(--text-muted)]">Haftalık Taze İnce Profil Kavrumu</span>
            </div>
            <div>
              <span className="block text-xl font-bold text-[var(--text-main)]">03. Demleme</span>
              <span className="text-xs text-[var(--text-muted)]">Hassas Su Derecesi ve Tartım</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}