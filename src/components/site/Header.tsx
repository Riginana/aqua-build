import * as React from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { useI18n, type Lang } from "@/lib/i18n";
import logo from "@/assets/logo.png"; // Updated with new logo file

const PHONE_DISPLAY = "+996 707 148 555";
const PHONE_TEL = "+996707148555";

export function Header() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => { setOpen(false); }, [location.pathname]);

  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/services", label: t("nav.services") },
    { to: "/projects", label: t("nav.projects") },
    { to: "/about", label: t("nav.about") },
    { to: "/contact", label: t("nav.contact") },
  ] as const;

  return (
    <header className={`sticky top-0 z-50 w-full bg-white transition-shadow ${scrolled ? "shadow-md" : "shadow-sm"}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-6">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="AQUA BRABUS KG" className="h-10 w-auto md:h-12" />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-base font-extrabold tracking-tight text-navy md:text-lg">AQUA BRABUS KG</span>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-navy/70">
              {lang === "ru" ? "Профессиональное строительство бассейнов" : "Бассейн куруу боюнча профессионалдар"}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-md px-3 py-2 text-sm font-semibold text-navy/80 transition-colors hover:bg-light-gray hover:text-cyan"
              activeProps={{ className: "rounded-md px-3 py-2 text-sm font-bold text-cyan bg-light-gray" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <div className="hidden items-center rounded-full border border-border bg-white p-0.5 text-xs font-bold md:flex">
            {(["ru", "kg"] as Lang[]).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                className={`min-h-[32px] rounded-full px-3 py-1 uppercase transition-colors ${lang === l ? "bg-navy text-white" : "text-navy/70 hover:text-navy"}`}
                aria-pressed={lang === l}
              >
                {l}
              </button>
            ))}
          </div>
          <a
            href={`tel:${PHONE_TEL}`}
            className="hidden min-h-[44px] items-center gap-2 rounded-full bg-cyan px-4 py-2 text-sm font-bold text-white shadow transition-all hover:shadow-[var(--shadow-glow)] sm:inline-flex"
          >
            <Phone className="h-4 w-4" />
            <span>{PHONE_DISPLAY}</span>
          </a>
          <a href={`tel:${PHONE_TEL}`} className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-cyan text-white sm:hidden" aria-label="call">
            <Phone className="h-5 w-5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-navy lg:hidden"
            aria-label="menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="min-h-[44px] rounded-md px-3 py-3 text-base font-semibold text-navy hover:bg-light-gray"
                activeProps={{ className: "min-h-[44px] rounded-md px-3 py-3 text-base font-bold text-cyan bg-light-gray" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-2 px-3 py-2">
              {(["ru", "kg"] as Lang[]).map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLang(l)}
                  className={`min-h-[40px] rounded-full px-4 py-1 text-sm font-bold uppercase transition-colors ${lang === l ? "bg-navy text-white" : "border border-border text-navy/70"}`}
                >
                  {l}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
