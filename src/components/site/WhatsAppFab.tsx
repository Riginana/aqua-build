import { MessageCircle } from "lucide-react";

const PHONE_TEL = "+996707148555";

export function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${PHONE_TEL.replace("+", "")}`}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.6)] transition-transform hover:scale-110 md:bottom-6 md:right-6 md:h-16 md:w-16"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
      <MessageCircle className="relative h-7 w-7 md:h-8 md:w-8" />
    </a>
  );
}