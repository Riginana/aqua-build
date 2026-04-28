import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useI18n } from "@/lib/i18n";
import { submitLead } from "@/lib/lead.functions";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().min(6).max(40),
  type: z.enum(["pool", "hammam", "sauna", "fountain", "water"]),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

type FormValues = z.infer<typeof schema>;

export function LeadForm({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const { t } = useI18n();
  const [status, setStatus] = React.useState<"idle" | "ok" | "err">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", type: "pool", message: "" },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      const result = await submitLead({ data: values });
      setStatus("ok");
      reset();
      window.open(result.whatsappUrl, "_blank", "noopener,noreferrer");
    } catch {
      setStatus("err");
    }
  };

  const labelCls = variant === "dark" ? "text-white/90" : "text-navy";
  const inputCls =
    variant === "dark"
      ? "w-full min-h-[44px] rounded-md border border-white/20 bg-white/10 px-4 py-2 text-white placeholder:text-white/50 outline-none focus:border-cyan focus:bg-white/15"
      : "w-full min-h-[44px] rounded-md border border-border bg-white px-4 py-2 text-navy outline-none focus:border-cyan";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 md:grid-cols-2" noValidate>
      <div>
        <label className={`mb-1 block text-sm font-semibold ${labelCls}`}>{t("form.name")}</label>
        <input className={inputCls} {...register("name")} aria-invalid={!!errors.name} />
        {errors.name && <p className="mt-1 text-xs text-gold">{t("form.name")}: 2–100</p>}
      </div>
      <div>
        <label className={`mb-1 block text-sm font-semibold ${labelCls}`}>{t("form.phone")}</label>
        <input
          className={inputCls}
          type="tel"
          placeholder="+996 ___ ___ ___"
          {...register("phone")}
          aria-invalid={!!errors.phone}
        />
        {errors.phone && <p className="mt-1 text-xs text-gold">+996 ___ ___ ___</p>}
      </div>
      <div>
        <label className={`mb-1 block text-sm font-semibold ${labelCls}`}>{t("form.type")}</label>
        <select className={inputCls} {...register("type")}>
          <option value="pool" className="text-navy">
            {t("form.type.pool")}
          </option>
          <option value="hammam" className="text-navy">
            {t("form.type.hammam")}
          </option>
          <option value="sauna" className="text-navy">
            {t("form.type.sauna")}
          </option>
          <option value="fountain" className="text-navy">
            {t("form.type.fountain")}
          </option>
          <option value="water" className="text-navy">
            {t("form.type.water")}
          </option>
        </select>
      </div>
      <div>
        <label className={`mb-1 block text-sm font-semibold ${labelCls}`}>{t("form.message")}</label>
        <input className={inputCls} {...register("message")} />
      </div>
      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-cyan px-8 py-3 text-base font-bold text-white shadow transition-all hover:shadow-[var(--shadow-glow)] disabled:opacity-60 md:w-auto"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          {isSubmitting ? "..." : "Отправить в WhatsApp"}
        </button>

        {status === "ok" && (
          <p className={`mt-3 text-sm font-semibold ${variant === "dark" ? "text-cyan-bright" : "text-teal"}`}>
            ✅ Открываем WhatsApp — ваша заявка уже готова к отправке!
          </p>
        )}
        {status === "err" && <p className="mt-3 text-sm font-semibold text-gold">{t("form.error")}</p>}
      </div>
    </form>
  );
}
