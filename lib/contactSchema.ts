import { z } from "zod";

export const SERVICES = [
  "Custom Jewellery",
  "Silk Sarees",
  "Gemstones",
  "Healing Stones",
  "Bridal Consultation",
  "Other",
] as const;

export const CONSULT_MODES = [
  "In Person",
  "Video Call",
  "WhatsApp",
] as const;

export const JEWELLERY_TYPES = [
  "Kundan Jewellery",
  "Victorian Jewellery",
  "Casting Jewellery",
  "Temple Jewellery",
  "Plain Gold Jewellery",
  "Imported Jewellery",
  "Silver Jewellery",
  "Diamond Jewellery",
  "Terracotta Jewellery",
] as const;

export const COLLECTIONS = [
  "Necklace Sets",
  "Haram Sets",
  "Bangles",
  "Bracelets",
  "Finger Rings",
  "Earrings",
  "Jhumkas",
  "Belts / Vaddanam",
  "Nose Pins",
  "Hair Pins",
  "Tie Pins",
  "Brooch Pins",
  "Special Jewellery",
] as const;

export const GEMSTONES = [
  "None",
  "Yellow Sapphire",
  "Blue Sapphire",
  "Emerald",
  "Cat's Eye",
  "Ruby",
  "Pearl",
] as const;

export const contactSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name")
    .max(80, "Name is too long"),

  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(20, "Please enter a valid phone number")
    .regex(/^[+()0-9\s-]+$/, "Only digits, spaces, +, -, () allowed"),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address"),

  city: z
    .string()
    .trim()
    .min(2, "Please enter your city")
    .max(60, "City is too long"),

  service: z.enum(SERVICES, {
    errorMap: () => ({ message: "Please choose a service" }),
  }),

  // Optional until the form includes these fields
  jewelleryType: z.enum(JEWELLERY_TYPES).optional(),

  collection: z.enum(COLLECTIONS).optional(),

  gemstone: z.enum(GEMSTONES).optional(),

  mode: z.enum(CONSULT_MODES, {
    errorMap: () => ({ message: "Please choose a consultation mode" }),
  }),

  date: z
    .string()
    .trim()
    .min(1, "Please choose a preferred date"),

  time: z
    .string()
    .trim()
    .min(1, "Please choose a preferred time"),

  requirement: z
    .string()
    .trim()
    .min(10, "Please describe your requirement (min 10 characters)")
    .max(1500, "Please keep your description under 1500 characters"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
