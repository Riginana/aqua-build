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

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", type: "pool", message: "" },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      await submitLead({ data: values });
      setStatus("ok");
      reset();
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
        <input className={inputCls} type="tel" {...register("phone")} aria-invalid={!!errors.phone} />
        {errors.phone && <p className="mt-1 text-xs text-gold">+996 ___ ___ ___</p>}
      </div>
      <div>
        <label className={`mb-1 block text-sm font-semibold ${labelCls}`}>{t("form.type")}</label>
        <select className={inputCls} {...register("type")}>
          <option value="pool" className="text-navy">{t("form.type.pool")}</option>
          <option value="hammam" className="text-navy">{t("form.type.hammam")}</option>
          <option value="sauna" className="text-navy">{t("form.type.sauna")}</option>
          <option value="fountain" className="text-navy">{t("form.type.fountain")}</option>
          <option value="water" className="text-navy">{t("form.type.water")}</option>
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
          className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-cyan px-8 py-3 text-base font-bold text-white shadow transition-all hover:shadow-[var(--shadow-glow)] disabled:opacity-60 md:w-auto"
        >
          {isSubmitting ? "..." : t("cta.send")}
        </button>
        {status === "ok" && <p className={`mt-3 text-sm font-semibold ${variant === "dark" ? "text-cyan-bright" : "text-teal"}`}>{t("form.success")}</p>}
        {status === "err" && <p className="mt-3 text-sm font-semibold text-gold">{t("form.error")}</p>}
      </div>
    </form>
  );
}
