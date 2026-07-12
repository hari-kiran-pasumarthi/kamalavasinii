"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { LotusLogo, LotusMotif } from "@/components/SiteIllustrations";
import {
  contactSchema,
  SERVICES,
  CONSULT_MODES,
} from "@/lib/contactSchema";

/* ============================================================
   Utility form field wrappers (kept local, tailwind only)
   ============================================================ */
const labelClass =
  "block font-sans text-[12px] tracking-[0.18em] uppercase text-[#8a5f66] mb-2";
const baseInput =
  "w-full rounded-[14px] bg-[#FFF9F2] border border-[#EFE1CC] px-4 py-3 font-sans text-[14px] text-[#3A2A20] placeholder:text-[#B39A93] outline-none focus:border-[#C8A048] focus:ring-2 focus:ring-[#C8A048]/25 transition-all";

function Field({ label, required, error, children }) {
  return (
    <div>
      <label className={labelClass}>
        {label}
        {required && <span className="text-[#D97C74]">&nbsp;*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 font-sans text-[12px] text-[#B94A4A]">{error}</p>
      )}
    </div>
  );
}

/* ============================================================
   Sections
   ============================================================ */

function Hero() {
  return (
    <section className="relative watercolor-bg paper-texture overflow-hidden py-20 md:py-24 lg:py-28 px-4 md:px-8 lg:px-10">
      <div className="pointer-events-none absolute inset-0 z-[0]" aria-hidden>
        <LotusMotif className="absolute -left-16 top-10 w-[280px] h-[280px]" opacity={0.08} />
        <LotusMotif className="absolute right-[-40px] top-20 w-[240px] h-[240px]" opacity={0.08} />
        <LotusMotif className="absolute left-1/2 -translate-x-1/2 bottom-[-120px] w-[360px] h-[360px]" opacity={0.06} />
      </div>

      <div className="max-w-[1100px] mx-auto text-center relative z-[2]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="flex justify-center mb-4"
        >
          <LotusLogo size={84} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-3 text-[#B8860B] mb-4"
        >
          <span className="h-px w-10 bg-[#B8860B]/70" />
          <span className="tracking-[0.4em] text-[11px] font-sans uppercase">
            Book Consultation
          </span>
          <span className="h-px w-10 bg-[#B8860B]/70" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-serif text-[34px] md:text-[54px] lg:text-[62px] font-semibold maroon-text leading-[1.05] tracking-[0.01em]"
        >
          Let&apos;s Create Something{" "}
          <span className="italic gold-text">Timeless</span> Together
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mt-5 flex justify-center"
        >
          <svg width="80" height="20" viewBox="0 0 80 20" aria-hidden>
            <path d="M0 10 L34 10" stroke="#B8860B" strokeWidth="1" />
            <path d="M46 10 L80 10" stroke="#B8860B" strokeWidth="1" />
            <path d="M40 3 C34 7 34 13 40 17 C46 13 46 7 40 3 Z" fill="#B8860B" />
          </svg>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="mt-6 font-sans text-[15px] md:text-[17px] text-[#5a3a3f] max-w-2xl mx-auto leading-relaxed"
        >
          Whether you&apos;re looking for bespoke jewellery, authentic silk sarees or
          premium gemstones, we&apos;d love to hear your vision — and craft something
          truly yours.
        </motion.p>
      </div>
    </section>
  );
}

function ConsultationForm() {
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      city: "",
      service: "",
      mode: "",
      date: "",
      time: "",
      requirement: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    setStatus({ state: "loading", message: "" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        setStatus({
          state: "error",
          message: json.error || "Something went wrong, please try again.",
        });
        return;
      }
      setStatus({
        state: "success",
        message:
          "Thank you. Your consultation request has been received — our team will reach out within 24 hours.",
      });
      reset();
    } catch (err) {
      setStatus({
        state: "error",
        message: "Network error, please try again.",
      });
    }
  };

  return (
    <section
      id="form"
      className="relative py-14 md:py-20 px-4 md:px-8 lg:px-10 overflow-hidden paper-texture"
      style={{ background: "#FDF7EF" }}
    >
      <div className="pointer-events-none absolute inset-0 z-[0]" aria-hidden>
        <LotusMotif className="absolute left-[-30px] top-8 w-[220px] h-[220px]" opacity={0.06} />
        <LotusMotif className="absolute right-[-20px] bottom-6 w-[220px] h-[220px]" opacity={0.06} />
      </div>

      <div className="max-w-[900px] mx-auto relative z-[2]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-12"
        >
          <div className="inline-flex items-center gap-3 text-[#B8860B] mb-3">
            <span className="h-px w-10 bg-[#B8860B]/70" />
            <span className="tracking-[0.4em] text-[11px] font-sans uppercase">
              Consultation Form
            </span>
            <span className="h-px w-10 bg-[#B8860B]/70" />
          </div>
          <h2 className="font-serif text-[30px] md:text-[40px] font-semibold maroon-text leading-tight">
            Share Your <span className="italic gold-text">Vision</span>
          </h2>
          <p className="mt-3 font-sans text-[14px] text-[#5a3a3f] max-w-xl mx-auto">
            Fill in a few details and our master designers will reach out to guide your bespoke journey.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="relative rounded-[32px] bg-[#FFF9F2] border border-[#EFE1CC] shadow-[0_25px_60px_-30px_rgba(107,30,40,0.20)] p-6 md:p-10 lg:p-12"
        >
          {/* corner ornaments */}
          {[
            { c: "top-3 left-3", tr: "" },
            { c: "top-3 right-3", tr: "-scale-x-100" },
            { c: "bottom-3 left-3", tr: "-scale-y-100" },
            { c: "bottom-3 right-3", tr: "rotate-180" },
          ].map((o, i) => (
            <svg
              key={i}
              viewBox="0 0 60 60"
              className={`absolute ${o.c} w-9 h-9 opacity-70 ${o.tr}`}
              aria-hidden
            >
              <path
                d="M4 30 C4 15 15 4 30 4 M30 4 L30 14 M30 4 L40 4"
                stroke="#C8A048"
                strokeWidth="1"
                fill="none"
                strokeLinecap="round"
              />
              <circle cx="30" cy="30" r="1.4" fill="#C8A048" />
            </svg>
          ))}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            <Field
              label="Full Name"
              required
              error={errors.fullName?.message}
            >
              <input
                type="text"
                autoComplete="name"
                placeholder="Your full name"
                className={baseInput}
                {...register("fullName")}
              />
            </Field>

            <Field
              label="Phone Number"
              required
              error={errors.phone?.message}
            >
              <input
                type="tel"
                autoComplete="tel"
                placeholder="+91 98765 43210"
                className={baseInput}
                {...register("phone")}
              />
            </Field>

            <Field label="Email" required error={errors.email?.message}>
              <input
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                className={baseInput}
                {...register("email")}
              />
            </Field>

            <Field label="City" required error={errors.city?.message}>
              <input
                type="text"
                autoComplete="address-level2"
                placeholder="Chennai, Bengaluru, ..."
                className={baseInput}
                {...register("city")}
              />
            </Field>

            <Field
              label="Service Required"
              required
              error={errors.service?.message}
            >
              <select
                className={`${baseInput} pr-9 appearance-none bg-[url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%3E%3Cpath%20d%3D%22M1%201l5%205%205-5%22%20fill%3D%22none%22%20stroke%3D%22%23B8860B%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22/%3E%3C/svg%3E')] bg-no-repeat bg-[right_16px_center]`}
                defaultValue=""
                {...register("service")}
              >
                <option value="" disabled>
                  Select a service
                </option>
                {SERVICES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </Field>

            <Field
              label="Preferred Consultation"
              required
              error={errors.mode?.message}
            >
              <div className="grid grid-cols-3 gap-2">
                {CONSULT_MODES.map((m) => (
                  <label
                    key={m}
                    className="cursor-pointer group"
                  >
                    <input
                      type="radio"
                      value={m}
                      className="peer sr-only"
                      {...register("mode")}
                    />
                    <span className="block text-center rounded-full border border-[#EFE1CC] bg-white/70 py-3 px-2 font-sans text-[12px] tracking-wider text-[#5a3a3f] transition-all peer-checked:bg-gradient-to-br peer-checked:from-[#FBEED0] peer-checked:to-[#F0D7A9] peer-checked:border-[#C8A048] peer-checked:text-[#6B1E28] peer-checked:shadow-[0_6px_16px_-6px_rgba(200,160,72,0.5)] group-hover:border-[#C8A048]/60">
                      {m}
                    </span>
                  </label>
                ))}
              </div>
            </Field>

            <Field
              label="Preferred Date"
              required
              error={errors.date?.message}
            >
              <input
                type="date"
                className={baseInput}
                {...register("date")}
              />
            </Field>

            <Field
              label="Preferred Time"
              required
              error={errors.time?.message}
            >
              <input
                type="time"
                className={baseInput}
                {...register("time")}
              />
            </Field>

            <div className="md:col-span-2">
              <Field
                label="Describe Your Requirement"
                required
                error={errors.requirement?.message}
              >
                <textarea
                  rows={5}
                  placeholder="Tell us about your occasion, inspiration, budget or any specific design ideas..."
                  className={`${baseInput} resize-y min-h-[130px]`}
                  {...register("requirement")}
                />
              </Field>
            </div>
          </div>

          {/* Status messages */}
          {status.state === "success" && (
            <div className="mt-6 rounded-[18px] border border-[#C8A048]/40 bg-gradient-to-br from-[#FBEED0] to-[#F7DDC5] px-5 py-4 flex items-start gap-3">
              <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0 text-[#8B6A1E]" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M5 12 L10 17 L20 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="font-serif italic text-[15px] text-[#5E1420] leading-relaxed">
                {status.message}
              </p>
            </div>
          )}
          {status.state === "error" && (
            <div className="mt-6 rounded-[18px] border border-[#B94A4A]/40 bg-[#FCEEEE] px-5 py-4">
              <p className="font-sans text-[14px] text-[#8A1F1F]">
                {status.message}
              </p>
            </div>
          )}

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-sans text-[12px] text-[#8a5f66] max-w-md">
              We respect your privacy. Your details will only be used to reach out
              regarding your consultation.
            </p>
            <button
              type="submit"
              disabled={isSubmitting || status.state === "loading"}
              className="btn-primary-gradient font-sans tracking-[0.2em] text-[12px] px-10 py-4 rounded-full font-medium inline-flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting || status.state === "loading"
                ? "SENDING..."
                : "SEND REQUEST"}
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path
                  d="M5 12 L19 12 M13 6 L19 12 L13 18"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function ContactDetails() {
  const rows = [
    {
      label: "Phone",
      value: "+91 99999 99999",
      href: "tel:+919999999999",
      Icon: () => (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.7 19.7 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.7 19.7 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.4 2.1L8 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      label: "WhatsApp",
      value: "+91 99999 99999",
      href: "https://wa.me/919999999999",
      external: true,
      Icon: () => (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
          <path d="M20.52 3.48A11.86 11.86 0 0012.02 0C5.42 0 .04 5.38.04 11.98c0 2.11.55 4.17 1.6 5.99L0 24l6.2-1.62a11.94 11.94 0 005.82 1.49h.01c6.6 0 11.98-5.38 11.98-11.98 0-3.2-1.25-6.21-3.49-8.41zM12.03 21.3h-.01a9.9 9.9 0 01-5.05-1.38l-.36-.22-3.68.96.98-3.58-.24-.37a9.9 9.9 0 01-1.52-5.29c0-5.47 4.45-9.92 9.92-9.92 2.65 0 5.14 1.03 7.01 2.9a9.86 9.86 0 012.9 7.02c0 5.47-4.45 9.92-9.92 9.92z" />
        </svg>
      ),
    },
    {
      label: "Email",
      value: "hello@kamalavasinii.com",
      href: "mailto:hello@kamalavasinii.com",
      Icon: () => (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
          <path d="M4 6h16v12H4z" />
          <path d="M4 6l8 7 8-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      label: "Business Hours",
      value: "Mon – Sat · 10:30 AM – 8:00 PM",
      Icon: () => (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      label: "Store Address",
      value:
        "Kamalavasinii Boutique · Heritage Row, Mylapore, Chennai 600004, India",
      Icon: () => (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
          <path d="M12 22s7-6.5 7-13a7 7 0 10-14 0c0 6.5 7 13 7 13z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative cream-bg py-16 md:py-20 px-4 md:px-8 lg:px-10 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-[0]" aria-hidden>
        <LotusMotif className="absolute right-[-30px] top-10 w-[240px] h-[240px]" opacity={0.06} />
        <LotusMotif className="absolute left-[-30px] bottom-10 w-[220px] h-[220px]" opacity={0.06} />
      </div>

      <div className="max-w-[1300px] mx-auto relative z-[2] grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 items-stretch">
        {/* Details column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="rounded-[32px] bg-[#FFF9F2] border border-[#EFE1CC] shadow-[0_20px_50px_-30px_rgba(107,30,40,0.18)] p-8 md:p-10"
        >
          <div className="inline-flex items-center gap-3 text-[#B8860B] mb-3">
            <span className="h-px w-10 bg-[#B8860B]/70" />
            <span className="tracking-[0.4em] text-[11px] font-sans uppercase">
              Reach Us
            </span>
          </div>
          <h3 className="font-serif text-[26px] md:text-[34px] font-semibold maroon-text leading-tight">
            Contact <span className="italic gold-text">Details</span>
          </h3>
          <div className="mt-4 mb-6 h-[2px] w-14 bg-gradient-to-r from-[#C8A048] to-transparent" />

          <ul className="space-y-5">
            {rows.map((r) => {
              const inner = (
                <>
                  <span className="shrink-0 w-11 h-11 rounded-full bg-gradient-to-br from-[#FBEED0] to-[#F0D7A9] border border-[#C8A048]/40 flex items-center justify-center text-[#6B1E28]">
                    <r.Icon />
                  </span>
                  <span className="flex-1">
                    <span className="block font-sans text-[11px] tracking-[0.22em] uppercase text-[#B8860B]">
                      {r.label}
                    </span>
                    <span className="block font-serif text-[16px] md:text-[17px] text-[#3A2A20] leading-snug mt-0.5">
                      {r.value}
                    </span>
                  </span>
                </>
              );
              return (
                <li key={r.label} className="flex items-center gap-4 group">
                  {r.href ? (
                    <a
                      href={r.href}
                      target={r.external ? "_blank" : undefined}
                      rel={r.external ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 flex-1 hover:text-[#D97C74] transition-colors"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 flex-1">
                      {inner}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </motion.div>

        {/* Map placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-[#FFF3E7] via-[#FBEED0] to-[#F7DDC5] border border-[#C8A048]/40 shadow-[0_20px_50px_-30px_rgba(107,30,40,0.18)] min-h-[420px] flex items-center justify-center paper-texture"
        >
          {/* Fake map grid */}
          <svg
            viewBox="0 0 600 500"
            className="absolute inset-0 w-full h-full"
            aria-hidden
          >
            <defs>
              <linearGradient id="map-gold" x1="0" x2="1">
                <stop offset="0%" stopColor="#EAC77A" />
                <stop offset="100%" stopColor="#8B6A1E" />
              </linearGradient>
            </defs>
            <g stroke="url(#map-gold)" strokeWidth="0.6" fill="none" opacity="0.35">
              {Array.from({ length: 12 }).map((_, i) => (
                <line key={`h-${i}`} x1="0" y1={i * 42 + 10} x2="600" y2={i * 42 + 10} />
              ))}
              {Array.from({ length: 14 }).map((_, i) => (
                <line key={`v-${i}`} x1={i * 45 + 10} y1="0" x2={i * 45 + 10} y2="500" />
              ))}
            </g>
            {/* rivers / winding roads */}
            <path
              d="M0 200 C120 180 200 260 320 240 C440 220 520 300 600 280"
              stroke="url(#map-gold)"
              strokeWidth="2"
              fill="none"
              opacity="0.65"
            />
            <path
              d="M0 340 C140 320 260 380 380 360 C480 345 550 400 600 390"
              stroke="url(#map-gold)"
              strokeWidth="1.2"
              fill="none"
              opacity="0.5"
            />
            {/* blocks */}
            {[
              [80, 90, 90, 60],
              [220, 60, 110, 70],
              [380, 100, 80, 60],
              [90, 380, 100, 60],
              [280, 340, 80, 60],
              [430, 380, 100, 60],
            ].map(([x, y, w, h], i) => (
              <rect
                key={i}
                x={x}
                y={y}
                width={w}
                height={h}
                rx="6"
                fill="#FDF7EF"
                stroke="url(#map-gold)"
                strokeWidth="0.7"
                opacity="0.75"
              />
            ))}
          </svg>

          {/* Marker */}
          <div className="relative z-[2] flex flex-col items-center text-center px-6">
            <div className="relative">
              <span className="absolute inset-0 -m-3 rounded-full bg-[#D97C74]/25 animate-ping" />
              <span className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#E8A29B] to-[#B94A45] flex items-center justify-center shadow-[0_15px_25px_-10px_rgba(185,74,69,0.55)]">
                <LotusLogo size={30} />
              </span>
            </div>
            <div className="mt-5 rounded-full bg-[#FFF9F2] border border-[#EFE1CC] px-5 py-3 shadow-md">
              <div className="font-serif text-[16px] maroon-text font-semibold tracking-wide">
                Kamalavasinii Boutique
              </div>
              <div className="font-sans text-[11px] text-[#8a5f66] tracking-[0.2em] uppercase">
                Mylapore · Chennai
              </div>
            </div>
            <a
              href="https://www.google.com/maps?q=Mylapore+Chennai"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 btn-outline-gold font-sans tracking-[0.2em] text-[11px] px-6 py-3 rounded-full font-medium inline-flex items-center gap-2"
            >
              OPEN IN GOOGLE MAPS
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path
                  d="M5 12 L19 12 M13 6 L19 12 L13 18"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FDF7EF]">
      <SiteHeader activeHref="/contact" />
      <Hero />
      <ConsultationForm />
      <ContactDetails />
      <SiteFooter />
    </main>
  );
}

export default ContactPage;
