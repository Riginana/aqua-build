import { Link } from "@tanstack/react-router";
import { Instagram, Phone, MessageCircle, MapPin, Trophy } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { WaveDivider } from "./WaveDivider";

const PHONE_DISPLAY = "+996 707 148 555";
const PHONE_TEL = "+996707148555";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="relative">
      <WaveDivider fill="var(--navy-deep)" className="-mb-px text-navy-deep" />
      <div className="bg-navy-deep text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3 md:px-6">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-lg font-extrabold tracking-tight">AQUA BRABUS KG</span>
            </div>
            <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-gold/50 bg-white/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gold">
              <Trophy className="h-3.5 w-3.5" />
              <span>{t("badge.leader2025.short")}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/70">{t("footer.desc")}</p>
            <a
              href="https://instagram.com/aqua_brabus_kg"
              target="_blank" rel="noreferrer noopener"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan hover:text-cyan-bright"
            >
              <Instagram className="h-4 w-4" /> @aqua_brabus_kg
            </a>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-cyan">{t("footer.nav")}</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/" className="text-white/80 hover:text-cyan">{t("nav.home")}</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-cyan">{t("nav.services")}</Link></li>
              <li><Link to="/projects" className="text-white/80 hover:text-cyan">{t("nav.projects")}</Link></li>
              <li><Link to="/about" className="text-white/80 hover:text-cyan">{t("nav.about")}</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-cyan">{t("nav.contact")}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-cyan">{t("footer.contacts")}</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 text-white/90 hover:text-cyan"><Phone className="h-4 w-4" /> {PHONE_DISPLAY}</a></li>
              <li><a href={`https://wa.me/${PHONE_TEL.replace("+", "")}`} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 text-white/90 hover:text-cyan"><MessageCircle className="h-4 w-4" /> WhatsApp</a></li>
              <li><a href="https://instagram.com/aqua_brabus_kg" target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 text-white/90 hover:text-cyan"><Instagram className="h-4 w-4" /> Instagram</a></li>
              <li>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Таалай 7, Киргизия 1, Бишкек, Кыргызстан")}`}
                  target="_blank" rel="noreferrer noopener"
                  className="inline-flex items-start gap-2 text-white/90 hover:text-cyan"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" /> <span>{t("footer.address")}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-4 text-center text-xs text-white/60 md:px-6">
            © {year} Aqua Brabus KG. {t("footer.rights")}
          </div>
        </div>
      </div>
    </footer>
  );
}
