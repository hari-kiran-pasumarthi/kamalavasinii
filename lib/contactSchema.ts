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

export const PRODUCT_TYPES: Record<string, readonly string[]> = {
  "Custom Jewellery": [
    "Kundan Jewellery",
    "Victorian Jewellery",
    "Casting Jewellery",
    "Temple Jewellery",
    "Plain Gold Jewellery",
    "Imported Jewellery",
    "Silver Jewellery",
    "Diamond Jewellery",
    "Terracotta Jewellery",
  ],

  "Silk Sarees": [
    "Kanchipuram",
    "Banarasi",
    "Mysore Silk",
    "Soft Silk",
    "Organza",
    "Tussar",
  ],

  Gemstones: [
    "Yellow Sapphire",
    "Blue Sapphire",
    "Emerald",
    "Cat's Eye",
    "Ruby",
    "Pearl",
  ],

  "Healing Stones": [
    "Amethyst",
    "Rose Quartz",
    "Black Tourmaline",
    "Citrine",
    "Clear Quartz",
  ],

  "Bridal Consultation": [
    "Bridal Package",
  ],

  Other: [
    "Other",
  ],
} as const;

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

  productType: z
    .string()
    .trim()
    .min(1, "Please select an option"),

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
