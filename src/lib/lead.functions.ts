import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().min(6).max(40),
  type: z.enum(["pool", "hammam", "sauna", "fountain", "water"]),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => leadSchema.parse(input))
  .handler(async ({ data }) => {
    console.log("[LEAD]", new Date().toISOString(), data);
    return { ok: true as const };
  });
