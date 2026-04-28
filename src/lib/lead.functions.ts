import { z } from "zod";

const leadSchema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().min(6).max(40),
  type: z.enum(["pool", "hammam", "sauna", "fountain", "water"]),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

type LeadData = z.infer<typeof leadSchema>;

const TYPE_LABELS: Record<LeadData["type"], string> = {
  pool: "Бассейн",
  hammam: "Хамам",
  sauna: "Сауна",
  fountain: "Фонтан",
  water: "Очистные сооружения",
};

const WHATSAPP_NUMBER = "996707148555";

function buildWhatsAppUrl(data: LeadData): string {
  const lines = [
    "🏊 *Новая заявка с сайта AQUA BRABUS KG*",
    "",
    `👤 *Имя:* ${data.name}`,
    `📞 *Телефон:* ${data.phone}`,
    `🔧 *Тип объекта:* ${TYPE_LABELS[data.type]}`,
    data.message ? `💬 *Сообщение:* ${data.message}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`;
}

export async function submitLead({ data }: { data: LeadData }): Promise<{ ok: true; whatsappUrl: string }> {
  const parsed = leadSchema.parse(data);
  const whatsappUrl = buildWhatsAppUrl(parsed);
  return { ok: true, whatsappUrl };
}
