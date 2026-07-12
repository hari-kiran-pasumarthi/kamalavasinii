import { z } from 'zod';

export const SERVICES = [
  'Custom Jewellery',
  'Silk Sarees',
  'Gemstones',
  'Bridal Consultation',
  'Other',
];

export const CONSULT_MODES = ['In Person', 'Video Call', 'WhatsApp'];

export const contactSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, 'Please enter your full name')
    .max(80, 'Name is too long'),
  phone: z
    .string()
    .trim()
    .min(7, 'Please enter a valid phone number')
    .max(20, 'Please enter a valid phone number')
    .regex(/^[+()0-9\s-]+$/, 'Only digits, spaces, +, -, () allowed'),
  email: z
    .string()
    .trim()
    .email('Please enter a valid email address'),
  city: z
    .string()
    .trim()
    .min(2, 'Please enter your city')
    .max(60, 'City is too long'),
  service: z.enum(SERVICES, {
    errorMap: () => ({ message: 'Please choose a service' }),
  }),
  mode: z.enum(CONSULT_MODES, {
    errorMap: () => ({ message: 'Please choose a consultation mode' }),
  }),
  date: z
    .string()
    .trim()
    .min(1, 'Please choose a preferred date'),
  time: z
    .string()
    .trim()
    .min(1, 'Please choose a preferred time'),
  requirement: z
    .string()
    .trim()
    .min(10, 'Please describe your requirement (min 10 characters)')
    .max(1500, 'Please keep your description under 1500 characters'),
});
