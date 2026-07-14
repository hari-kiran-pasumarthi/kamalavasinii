"use client";
import React from "react";

/* ============================================================
   Brand mark — ornate lotus (used in navbar + hero center)
   ============================================================ */
export const LotusLogo = ({ size = 64, className = "" }) => (
  <svg
    viewBox="0 0 120 100"
    width={size}
    height={(size * 100) / 120}
    className={className}
    aria-hidden
  >
    <defs>
      <linearGradient id="lotus-gold" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#EAC77A" />
        <stop offset="50%" stopColor="#C8A048" />
        <stop offset="100%" stopColor="#8E661A" />
      </linearGradient>
    </defs>
    <g
      fill="none"
      stroke="url(#lotus-gold)"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M60 6 C55 24 55 44 60 60 C65 44 65 24 60 6 Z" />
      <path d="M40 18 C40 34 48 52 60 60 C56 45 50 30 40 18 Z" />
      <path d="M80 18 C80 34 72 52 60 60 C64 45 70 30 80 18 Z" />
      <path d="M20 32 C28 46 42 58 60 62 C50 52 38 42 20 32 Z" />
      <path d="M100 32 C92 46 78 58 60 62 C70 52 82 42 100 32 Z" />
      <path d="M14 62 C34 74 60 78 60 78 C60 78 86 74 106 62" />
      <path d="M10 72 C34 84 60 86 60 86 C60 86 86 84 110 72" />
    </g>
    <circle cx="60" cy="60" r="2.4" fill="#C8A048" />
  </svg>
);

export const SparkleIcon = ({ size = 14, className = "", color = "#C8A048" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden>
    <path
      d="M12 2 L13.5 9 L20 10.5 L13.5 12 L12 19 L10.5 12 L4 10.5 L10.5 9 Z"
      fill={color}
    />
  </svg>
);

/* ============================================================
   Watercolor lotus motif — used as background watermark
   ============================================================ */
export const LotusMotif = ({ className = "", opacity = 0.14 }) => (
  <svg viewBox="0 0 200 200" className={className} aria-hidden style={{ opacity }}>
    <defs>
      <linearGradient id="lm-g" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#E6A3B5" />
        <stop offset="100%" stopColor="#C8A048" />
      </linearGradient>
    </defs>
    <g stroke="url(#lm-g)" strokeWidth="1.2" fill="none">
      <path d="M100 30 C90 60 90 100 100 130 C110 100 110 60 100 30 Z" />
      <path d="M70 45 C68 75 82 110 100 130 C92 105 82 75 70 45 Z" />
      <path d="M130 45 C132 75 118 110 100 130 C108 105 118 75 130 45 Z" />
      <path d="M45 70 C55 100 78 125 100 132 C82 118 62 96 45 70 Z" />
      <path d="M155 70 C145 100 122 125 100 132 C118 118 138 96 155 70 Z" />
      <path d="M30 135 C55 148 80 152 100 152 C120 152 145 148 170 135" />
      <path d="M22 148 C55 162 100 165 100 165 C100 165 145 162 178 148" />
    </g>
  </svg>
);

/* ============================================================
   ELEGANT INDIAN WOMAN — premium illustration
   Composition: three-quarter portrait, closed eyes, holding a
   pink lotus near her face, jasmine veni, temple jewellery,
   pink + cream silk saree with gold zari, watercolor arch behind.
   ============================================================ */
export const WomanIllustration = ({ className = "" }) => (
  <svg
    viewBox="0 0 560 780"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <defs>
      {/* Background arch wash */}
      <radialGradient id="w-arch" cx="50%" cy="42%" r="65%">
        <stop offset="0%" stopColor="#FBE4DA" stopOpacity="0.95" />
        <stop offset="70%" stopColor="#FBE4DA" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#FBE4DA" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="w-arch-2" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#F9D3C7" stopOpacity="0.55" />
        <stop offset="100%" stopColor="#F9D3C7" stopOpacity="0" />
      </linearGradient>

      {/* Skin */}
      <linearGradient id="w-skin" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#F0C9A8" />
        <stop offset="60%" stopColor="#E1A981" />
        <stop offset="100%" stopColor="#C48D63" />
      </linearGradient>
      <linearGradient id="w-skin-shade" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#C48D63" stopOpacity="0.55" />
        <stop offset="100%" stopColor="#C48D63" stopOpacity="0" />
      </linearGradient>

      {/* Hair */}
      <linearGradient id="w-hair" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#2A1610" />
        <stop offset="100%" stopColor="#120806" />
      </linearGradient>
      <radialGradient id="w-hair-shine" cx="40%" cy="35%" r="45%">
        <stop offset="0%" stopColor="#5A3020" stopOpacity="0.55" />
        <stop offset="100%" stopColor="#5A3020" stopOpacity="0" />
      </radialGradient>

      {/* Saree — cream body */}
      <linearGradient id="w-saree-cream" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#FBEED0" />
        <stop offset="60%" stopColor="#F1DDA6" />
        <stop offset="100%" stopColor="#DABB77" />
      </linearGradient>
      {/* Saree — pink pallu */}
      <linearGradient id="w-saree-pink" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#F4B5AB" />
        <stop offset="60%" stopColor="#E28E82" />
        <stop offset="100%" stopColor="#B45A50" />
      </linearGradient>
      {/* Blouse (deeper pink) */}
      <linearGradient id="w-blouse" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#E9968A" />
        <stop offset="100%" stopColor="#B45A50" />
      </linearGradient>

      {/* Gold */}
      <linearGradient id="w-gold" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#F1D07A" />
        <stop offset="55%" stopColor="#C8A048" />
        <stop offset="100%" stopColor="#8B6A1E" />
      </linearGradient>

      {/* Lotus in hand */}
      <linearGradient id="w-lotus" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#FBD1C8" />
        <stop offset="60%" stopColor="#EC9A8F" />
        <stop offset="100%" stopColor="#C56C60" />
      </linearGradient>

      {/* Leaves */}
      <linearGradient id="w-leaf" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#C1D0A1" />
        <stop offset="100%" stopColor="#748C5A" />
      </linearGradient>

      {/* Silk zari pattern */}
      <pattern id="w-zari" width="8" height="8" patternUnits="userSpaceOnUse">
        <path d="M0 4 Q2 0 4 4 T8 4" stroke="#C8A048" strokeWidth="0.6" fill="none" opacity="0.55" />
      </pattern>

      {/* Filigree stroke */}
      <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="0.4" />
      </filter>
    </defs>

    {/* ---------- Watercolor arch backdrop ---------- */}
    <path
      d="M50 720 L50 260 C50 150 160 60 280 60 C400 60 510 150 510 260 L510 720 Z"
      fill="url(#w-arch)"
    />
    <path
      d="M75 720 L75 275 C75 175 170 90 280 90 C390 90 485 175 485 275 L485 720 Z"
      fill="url(#w-arch-2)"
    />
    {/* arch outline (very soft) */}
    <path
      d="M60 720 L60 265 C60 160 165 68 280 68 C395 68 500 160 500 265 L500 720"
      stroke="#E9C1B4"
      strokeWidth="1.2"
      strokeDasharray="1 6"
      fill="none"
      opacity="0.55"
    />

    {/* watercolor blooms */}
    <ellipse cx="140" cy="180" rx="90" ry="60" fill="#F9D8CE" opacity="0.5" />
    <ellipse cx="430" cy="200" rx="80" ry="55" fill="#F6C9CC" opacity="0.45" />
    <ellipse cx="280" cy="640" rx="220" ry="70" fill="#F8DFD1" opacity="0.55" />

    {/* Leaves at base */}
    <g opacity="0.85">
      <path d="M20 520 C50 480 90 460 130 470 C90 500 60 550 40 610 Z" fill="url(#w-leaf)" />
      <path d="M10 620 C40 590 80 570 120 585 C90 615 65 660 50 705 Z" fill="url(#w-leaf)" opacity="0.9" />
      <path d="M470 470 C500 460 525 470 540 490 C515 505 490 520 470 545 Z" fill="url(#w-leaf)" opacity="0.85" />
      <path d="M480 600 C510 585 535 590 545 615 C525 625 500 640 485 665 Z" fill="url(#w-leaf)" opacity="0.85" />
    </g>

    {/* ---------- SAREE (skirt) ---------- */}
    <path
      d="M150 780 L180 460 C205 405 245 380 285 380 C325 380 370 405 395 460 L440 780 Z"
      fill="url(#w-saree-cream)"
    />
    {/* zari pattern overlay on skirt */}
    <path
      d="M150 780 L180 460 C205 405 245 380 285 380 C325 380 370 405 395 460 L440 780 Z"
      fill="url(#w-zari)"
      opacity="0.7"
    />
    {/* Vertical pleats hint */}
    <g stroke="#B69248" strokeWidth="0.8" opacity="0.35" fill="none">
      <path d="M220 460 L215 780" />
      <path d="M260 445 L262 780" />
      <path d="M300 442 L302 780" />
      <path d="M340 445 L345 780" />
      <path d="M380 460 L390 780" />
    </g>
    {/* Gold saree border bottom */}
    <path d="M150 780 L440 780" stroke="url(#w-gold)" strokeWidth="10" />
    <path d="M150 780 L440 780" stroke="#8B6A1E" strokeWidth="1.2" />
    {/* Gold border sides */}
    <path d="M180 460 L150 780" stroke="url(#w-gold)" strokeWidth="5" fill="none" />
    <path d="M395 460 L440 780" stroke="url(#w-gold)" strokeWidth="5" fill="none" />

    {/* ---------- Pallu drape over left shoulder ---------- */}
    <path
      d="M170 400 C210 375 275 372 315 388 L370 500 C325 520 265 528 205 510 Z"
      fill="url(#w-saree-pink)"
    />
    {/* zari on pallu */}
    <g stroke="#C8A048" strokeWidth="0.8" fill="none" opacity="0.55">
      <path d="M180 415 C230 405 285 405 320 418" />
      <path d="M195 445 C240 440 290 442 340 452" />
      <path d="M200 475 C245 475 295 480 350 492" />
    </g>
    {/* Gold pallu border */}
    <path d="M170 400 C210 375 275 372 315 388" stroke="url(#w-gold)" strokeWidth="3.5" fill="none" />
    <path d="M205 510 C265 528 325 520 370 500" stroke="url(#w-gold)" strokeWidth="3" fill="none" />

    {/* ---------- Blouse ---------- */}
    <path
      d="M215 320 C245 300 320 300 350 320 L365 395 C315 410 240 410 200 395 Z"
      fill="url(#w-blouse)"
    />
    {/* blouse gold trim */}
    <path
      d="M215 320 C245 300 320 300 350 320"
      stroke="url(#w-gold)"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M200 395 C240 410 315 410 365 395"
      stroke="url(#w-gold)"
      strokeWidth="2"
      fill="none"
    />
    {/* blouse dots */}
    {[
      [240, 355],
      [265, 370],
      [290, 355],
      [315, 370],
      [340, 355],
    ].map(([x, y], i) => (
      <circle key={i} cx={x} cy={y} r="1.6" fill="#8B6A1E" />
    ))}

    {/* ---------- Neck ---------- */}
    <path
      d="M260 292 L260 328 C260 340 300 340 300 328 L300 292 Z"
      fill="url(#w-skin)"
    />
    <path
      d="M260 322 L260 328 C260 340 300 340 300 328 L300 322 Z"
      fill="url(#w-skin-shade)"
    />

    {/* ---------- Choker necklace ---------- */}
    <path d="M245 322 C265 336 295 336 315 322" stroke="url(#w-gold)" strokeWidth="4" fill="none" />
    <path d="M245 322 C265 336 295 336 315 322" stroke="#8B6A1E" strokeWidth="1" fill="none" />
    {[248, 258, 268, 280, 292, 302, 312].map((x, i) => (
      <circle key={i} cx={x} cy={329 + Math.abs(i - 3) * 0.5} r="2" fill="url(#w-gold)" />
    ))}
    {/* central choker jewel */}
    <ellipse cx="280" cy="335" rx="7" ry="5.5" fill="url(#w-gold)" />
    <circle cx="280" cy="335" r="2.5" fill="#7B2334" />

    {/* ---------- Long haaram (layered necklace) ---------- */}
    <path
      d="M225 350 C260 400 300 400 335 350"
      stroke="url(#w-gold)"
      strokeWidth="2.5"
      fill="none"
    />
    <path
      d="M215 365 C255 430 305 430 345 365"
      stroke="url(#w-gold)"
      strokeWidth="2.5"
      fill="none"
    />
    {/* haaram beads */}
    {[225, 240, 258, 278, 300, 322, 340].map((x, i) => {
      const y = 380 + Math.abs(i - 3) * -4 + 25;
      return <circle key={i} cx={x} cy={y - Math.abs(i - 3) * 3} r="2.4" fill="url(#w-gold)" />;
    })}
    {/* haaram pendant */}
    <g transform="translate(280 425)">
      <path d="M0 0 l-10 -4 l-4 -10 l4 -10 l10 -4 l10 4 l4 10 l-4 10 z" fill="url(#w-gold)" />
      <circle cx="0" cy="0" r="4" fill="#7B2334" />
      <circle cx="0" cy="0" r="1.6" fill="#F1D07A" />
    </g>

    {/* ---------- HEAD ---------- */}
    {/* face — 3/4 view leaning slightly */}
    <path
      d="M210 175 C210 118 250 82 290 82 C332 82 355 118 350 175 C348 210 335 240 315 258 C300 272 275 275 258 265 C232 250 216 220 210 175 Z"
      fill="url(#w-skin)"
    />
    {/* jaw shadow */}
    <path
      d="M255 250 C270 262 300 262 315 252 C310 268 285 274 260 264 Z"
      fill="url(#w-skin-shade)"
    />

    {/* ---------- Hair bun + veni (jasmine flowers) ---------- */}
    {/* Top of hair */}
    <path
      d="M210 168 C202 122 235 74 285 72 C338 70 360 118 355 165 C346 128 315 110 285 112 C258 114 232 130 220 158 Z"
      fill="url(#w-hair)"
    />
    <path d="M225 130 C245 118 275 116 305 128" fill="none" stroke="url(#w-hair-shine)" strokeWidth="8" />
    {/* Side hair sweep */}
    <path
      d="M212 168 C202 190 200 220 205 250 C215 235 218 210 220 185 Z"
      fill="url(#w-hair)"
    />
    {/* Bun (side/back) */}
    <ellipse cx="200" cy="235" rx="26" ry="42" fill="url(#w-hair)" />
    <ellipse cx="198" cy="230" rx="20" ry="35" fill="url(#w-hair-shine)" opacity="0.7" />
    {/* Jasmine veni strand cascading */}
    {[
      { cx: 182, cy: 200 },
      { cx: 178, cy: 218 },
      { cx: 176, cy: 236 },
      { cx: 178, cy: 254 },
      { cx: 184, cy: 270 },
      { cx: 190, cy: 285 },
      { cx: 198, cy: 298 },
    ].map((p, i) => (
      <g key={i}>
        <circle cx={p.cx} cy={p.cy} r="5.5" fill="#FFFDF3" />
        <circle cx={p.cx - 2} cy={p.cy - 1.5} r="2" fill="#EFD79A" />
        <circle cx={p.cx} cy={p.cy} r="1.4" fill="#E6BC5D" />
      </g>
    ))}
    {/* small jasmine cluster on top of bun */}
    {[
      { cx: 210, cy: 190 },
      { cx: 220, cy: 180 },
      { cx: 232, cy: 174 },
    ].map((p, i) => (
      <g key={i}>
        <circle cx={p.cx} cy={p.cy} r="4.5" fill="#FFFDF3" />
        <circle cx={p.cx} cy={p.cy} r="1.2" fill="#E6BC5D" />
      </g>
    ))}

    {/* ---------- Maang tikka + chain ---------- */}
    <path d="M285 116 L285 148" stroke="url(#w-gold)" strokeWidth="1.2" />
    <path d="M275 116 L295 116 L285 100 Z" fill="url(#w-gold)" />
    <circle cx="285" cy="148" r="4.5" fill="url(#w-gold)" />
    <circle cx="285" cy="148" r="1.8" fill="#7B2334" />
    {/* small dangles */}
    <circle cx="278" cy="155" r="1.4" fill="url(#w-gold)" />
    <circle cx="292" cy="155" r="1.4" fill="url(#w-gold)" />

    {/* ---------- Face features ---------- */}
    {/* Bindi */}
    <circle cx="290" cy="164" r="3.5" fill="#7B2334" />
    {/* Eyebrows (arched) */}
    <path d="M258 190 C268 184 280 184 288 189" stroke="#2A1610" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M300 190 C310 185 322 186 328 192" stroke="#2A1610" strokeWidth="2" fill="none" strokeLinecap="round" />
    {/* Closed eyes with long lashes */}
    <path d="M258 205 C268 210 282 210 290 205" stroke="#2A1610" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M300 205 C310 210 322 210 328 205" stroke="#2A1610" strokeWidth="2" fill="none" strokeLinecap="round" />
    {/* upper lashes */}
    <g stroke="#2A1610" strokeWidth="1" fill="none">
      <path d="M262 204 L260 200" />
      <path d="M270 205 L269 200" />
      <path d="M278 206 L278 201" />
      <path d="M286 205 L288 201" />
      <path d="M304 205 L303 201" />
      <path d="M312 206 L312 201" />
      <path d="M320 206 L321 201" />
    </g>
    {/* Nose */}
    <path d="M292 218 C289 232 287 244 293 250" stroke="#8B4E3B" strokeWidth="1.2" fill="none" />
    {/* Nose ring */}
    <circle cx="286" cy="246" r="3" fill="none" stroke="url(#w-gold)" strokeWidth="1.5" />
    <circle cx="285.5" cy="248.2" r="0.9" fill="#7B2334" />
    {/* Lips */}
    <path d="M280 264 C287 268 298 268 305 264 C299 272 286 272 280 264 Z" fill="#C0524A" />
    <path d="M285 263 C290 261 295 261 300 263" stroke="#8A3730" strokeWidth="0.8" fill="none" />

    {/* Cheek blush */}
    <ellipse cx="260" cy="230" rx="10" ry="6" fill="#E8998B" opacity="0.35" />
    <ellipse cx="326" cy="228" rx="8" ry="5" fill="#E8998B" opacity="0.3" />

    {/* ---------- Earring (jhumka) ---------- */}
    <g>
      {/* left earring hidden by hair — just a hint */}
      <circle cx="228" cy="212" r="4" fill="url(#w-gold)" />
      {/* right jhumka */}
      <circle cx="343" cy="212" r="5" fill="url(#w-gold)" />
      <path
        d="M343 218 C328 224 328 250 343 258 C358 250 358 224 343 218 Z"
        fill="url(#w-gold)"
      />
      <path d="M336 232 L350 232" stroke="#8B6A1E" strokeWidth="0.8" />
      <circle cx="343" cy="240" r="2.2" fill="#7B2334" />
      {/* Danglers */}
      {[334, 339, 344, 349, 354].map((x, i) => (
        <g key={i}>
          <path d={`M${x} 260 L${x} 268`} stroke="url(#w-gold)" strokeWidth="0.7" />
          <circle cx={x} cy={270} r="1.6" fill="url(#w-gold)" />
        </g>
      ))}
    </g>

    {/* ---------- ARM holding lotus (right arm, folded up) ---------- */}
    {/* Upper arm */}
    <path
      d="M345 388 C382 372 402 340 402 300 C398 322 385 340 368 350 C355 358 348 372 345 388 Z"
      fill="url(#w-skin)"
    />
    {/* Bangle stack on wrist */}
    {[0, 1, 2, 3, 4].map((i) => (
      <ellipse
        key={i}
        cx={393 - i * 3}
        cy={342 + i * 4}
        rx="11"
        ry="3"
        fill="none"
        stroke="url(#w-gold)"
        strokeWidth="2"
      />
    ))}
    {/* Forearm rising up to face */}
    <path
      d="M400 300 C412 260 400 220 380 195 C388 220 393 245 388 275 C385 288 392 295 400 300 Z"
      fill="url(#w-skin)"
    />
    {/* Hand */}
    <ellipse cx="382" cy="188" rx="14" ry="16" fill="url(#w-skin)" />
    {/* fingers holding stem */}
    <path
      d="M375 178 C378 172 383 170 388 175"
      stroke="#8B4E3B"
      strokeWidth="0.9"
      fill="none"
    />

    {/* ---------- Lotus in hand ---------- */}
    <g transform="translate(360 132)">
      {/* stem */}
      <path d="M22 60 C22 80 22 100 22 130" stroke="#748C5A" strokeWidth="2" fill="none" />
      {/* leaf on stem */}
      <path d="M22 95 C10 90 4 78 8 70 C18 74 24 84 22 95 Z" fill="url(#w-leaf)" />
      {/* petals back layer */}
      <path d="M22 62 C6 50 4 24 22 12 C40 24 38 50 22 62 Z" fill="url(#w-lotus)" opacity="0.85" />
      {/* left/right petals */}
      <path d="M22 62 C10 55 8 30 22 20 C28 35 28 50 22 62 Z" fill="url(#w-lotus)" />
      <path d="M22 62 C34 55 36 30 22 20 C16 35 16 50 22 62 Z" fill="url(#w-lotus)" />
      {/* top petal (tall) */}
      <path d="M22 55 C18 40 18 20 22 6 C26 20 26 40 22 55 Z" fill="url(#w-lotus)" opacity="0.95" />
      {/* center */}
      <circle cx="22" cy="34" r="3.5" fill="#F1D07A" />
      <circle cx="22" cy="34" r="1.6" fill="#8B6A1E" />
      {/* small petal tips */}
      <path d="M22 5 L20 10 L24 10 Z" fill="#C56C60" opacity="0.8" />
    </g>

    {/* ---------- Left arm at side ---------- */}
    <path
      d="M205 400 C185 440 178 490 190 540 C200 510 210 480 218 448 Z"
      fill="url(#w-skin)"
    />
    {/* bangle stack on left wrist */}
    {[0, 1, 2, 3].map((i) => (
      <ellipse
        key={i}
        cx={193 + i * 2}
        cy={505 + i * 6}
        rx="10"
        ry="3"
        fill="none"
        stroke="url(#w-gold)"
        strokeWidth="2"
      />
    ))}
    {/* Left hand */}
    <ellipse cx="192" cy="545" rx="10" ry="12" fill="url(#w-skin)" />
    {/* ring */}
    <ellipse cx="197" cy="548" rx="3" ry="1.4" fill="none" stroke="url(#w-gold)" strokeWidth="1.4" />

    {/* ---------- Vaddanam (waist belt) hint under pallu ---------- */}
    <path d="M215 470 C255 480 315 480 355 470" stroke="url(#w-gold)" strokeWidth="1.6" fill="none" opacity="0.7" />
    <path d="M215 478 C255 488 315 488 355 478" stroke="url(#w-gold)" strokeWidth="1" fill="none" opacity="0.5" />

    {/* ---------- Sparkles ---------- */}
    {[
      { x: 100, y: 200, s: 9 },
      { x: 470, y: 220, s: 10 },
      { x: 90, y: 400, s: 8 },
      { x: 490, y: 500, s: 9 },
      { x: 130, y: 620, s: 8 },
      { x: 450, y: 680, s: 9 },
      { x: 380, y: 130, s: 7 },
    ].map((s, i) => (
      <path
        key={i}
        d={`M${s.x} ${s.y} l${s.s * 0.35} ${s.s} l${s.s} ${s.s * 0.35} l${-s.s} ${s.s * 0.35} l${-s.s * 0.35} ${s.s} l${-s.s * 0.35} ${-s.s} l${-s.s} ${-s.s * 0.35} l${s.s} ${-s.s * 0.35} z`}
        fill="#C8A048"
        opacity="0.7"
      />
    ))}
  </svg>
);

/* ============================================================
   STACKED SILK SAREES + JEWELLERY (right hero panel)
   Six folded silk sarees with zari borders, silk sheen,
   temple necklace, jhumkas, ring, loose gemstones, lotuses.
   ============================================================ */
export const SareeStackIllustration = ({ className = "" }) => (
  <svg
    viewBox="0 0 620 780"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <defs>
      <radialGradient id="ss-bg" cx="55%" cy="45%" r="70%">
        <stop offset="0%" stopColor="#FBE4DA" stopOpacity="0.85" />
        <stop offset="70%" stopColor="#FBE4DA" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#FBE4DA" stopOpacity="0" />
      </radialGradient>

      {/* Silk gradients — with sheen highlights */}
      <linearGradient id="silk-pink" x1="0" x2="1" y1="0" y2="0.6">
        <stop offset="0%" stopColor="#F2A9A0" />
        <stop offset="45%" stopColor="#F7C8C0" />
        <stop offset="55%" stopColor="#F7C8C0" />
        <stop offset="100%" stopColor="#D6766D" />
      </linearGradient>
      <linearGradient id="silk-green" x1="0" x2="1" y1="0" y2="0.6">
        <stop offset="0%" stopColor="#8FA972" />
        <stop offset="45%" stopColor="#BFD09E" />
        <stop offset="55%" stopColor="#BFD09E" />
        <stop offset="100%" stopColor="#6E8A55" />
      </linearGradient>
      <linearGradient id="silk-mustard" x1="0" x2="1" y1="0" y2="0.6">
        <stop offset="0%" stopColor="#D9B255" />
        <stop offset="45%" stopColor="#F1D48A" />
        <stop offset="55%" stopColor="#F1D48A" />
        <stop offset="100%" stopColor="#A8862E" />
      </linearGradient>
      <linearGradient id="silk-purple" x1="0" x2="1" y1="0" y2="0.6">
        <stop offset="0%" stopColor="#9F80B0" />
        <stop offset="45%" stopColor="#C7B0D3" />
        <stop offset="55%" stopColor="#C7B0D3" />
        <stop offset="100%" stopColor="#78578C" />
      </linearGradient>
      <linearGradient id="silk-maroon" x1="0" x2="1" y1="0" y2="0.6">
        <stop offset="0%" stopColor="#8A2A36" />
        <stop offset="45%" stopColor="#B8525C" />
        <stop offset="55%" stopColor="#B8525C" />
        <stop offset="100%" stopColor="#5E1420" />
      </linearGradient>
      <linearGradient id="silk-teal" x1="0" x2="1" y1="0" y2="0.6">
        <stop offset="0%" stopColor="#3E8078" />
        <stop offset="45%" stopColor="#78B0A8" />
        <stop offset="55%" stopColor="#78B0A8" />
        <stop offset="100%" stopColor="#265F58" />
      </linearGradient>

      {/* Zari (gold woven border) pattern */}
      <pattern id="zari-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
        <rect width="10" height="10" fill="#C8A048" />
        <path d="M0 5 Q2.5 0 5 5 T10 5" stroke="#8B6A1E" strokeWidth="0.8" fill="none" />
        <circle cx="5" cy="5" r="0.8" fill="#F1D07A" />
      </pattern>

      {/* Woven silk texture (subtle grid) */}
      <pattern id="silk-weave" width="4" height="4" patternUnits="userSpaceOnUse">
        <path d="M0 0 L4 4 M4 0 L0 4" stroke="#ffffff" strokeWidth="0.3" opacity="0.35" />
      </pattern>

      {/* Gold */}
      <linearGradient id="ss-gold" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#F1D07A" />
        <stop offset="55%" stopColor="#C8A048" />
        <stop offset="100%" stopColor="#8B6A1E" />
      </linearGradient>

      {/* Lotus */}
      <linearGradient id="ss-lotus" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#FBD1C8" />
        <stop offset="100%" stopColor="#EC9A8F" />
      </linearGradient>

      {/* Leaves */}
      <linearGradient id="ss-leaf" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#C1D0A1" />
        <stop offset="100%" stopColor="#748C5A" />
      </linearGradient>
    </defs>

    {/* watercolor background wash */}
    <ellipse cx="310" cy="380" rx="310" ry="350" fill="url(#ss-bg)" />

    {/* Decorative leaves top-right */}
    <g opacity="0.88">
      <path d="M420 40 C480 55 520 100 530 160 C500 130 460 100 420 88 Z" fill="url(#ss-leaf)" />
      <path d="M470 30 C520 65 560 115 570 180 C540 145 500 115 470 95 Z" fill="url(#ss-leaf)" opacity="0.85" />
      <path
        d="M500 40 L580 100"
        stroke="#748C5A"
        strokeWidth="1"
        opacity="0.5"
      />
      {/* birds */}
      <path d="M320 90 q7 -9 15 0 q-7 -3 -15 0" fill="#7A5230" />
      <path d="M355 68 q6 -7 13 0 q-6 -3 -13 0" fill="#7A5230" />
      <path d="M390 82 q6 -7 12 0 q-6 -3 -12 0" fill="#7A5230" />
    </g>

    {/* small floating lotuses (background) */}
    <g transform="translate(60 240)" opacity="0.9">
      <path d="M18 32 C6 24 6 8 18 2 C30 8 30 24 18 32 Z" fill="url(#ss-lotus)" />
      <path d="M18 32 C4 26 -2 8 18 -2 C38 8 32 26 18 32 Z" fill="url(#ss-lotus)" opacity="0.75" />
      <circle cx="18" cy="15" r="2.5" fill="#F1D07A" />
    </g>
    <g transform="translate(540 320)" opacity="0.9">
      <path d="M15 26 C5 20 5 6 15 2 C25 6 25 20 15 26 Z" fill="url(#ss-lotus)" />
      <circle cx="15" cy="12" r="2" fill="#F1D07A" />
    </g>

    {/* ===================== SAREE STACK ===================== */}
    {/* Draw from bottom (perspective wider) to top (narrower) */}
    {/* Base plate (subtle) */}
    <ellipse cx="310" cy="650" rx="240" ry="18" fill="#EBD6C6" opacity="0.6" />

    {/* SAREE 1 — maroon (bottom) */}
    <g>
      <path d="M120 640 L500 640 L520 685 L100 685 Z" fill="url(#silk-maroon)" />
      <path d="M120 640 L500 640 L520 685 L100 685 Z" fill="url(#silk-weave)" />
      {/* Zari border top */}
      <path d="M120 640 L500 640" stroke="url(#zari-pattern)" strokeWidth="6" />
      <path d="M120 640 L500 640" stroke="url(#ss-gold)" strokeWidth="1" />
      {/* Zari border bottom */}
      <path d="M100 685 L520 685" stroke="url(#zari-pattern)" strokeWidth="7" />
      {/* Motif dots */}
      {[150, 190, 230, 270, 310, 350, 390, 430, 470].map((x, i) => (
        <circle key={i} cx={x} cy={663} r="1.6" fill="#F1D07A" opacity="0.9" />
      ))}
    </g>

    {/* SAREE 2 — purple */}
    <g>
      <path d="M130 590 L490 590 L500 640 L120 640 Z" fill="url(#silk-purple)" />
      <path d="M130 590 L490 590 L500 640 L120 640 Z" fill="url(#silk-weave)" />
      <path d="M130 590 L490 590" stroke="url(#zari-pattern)" strokeWidth="6" />
      <path d="M120 640 L500 640" stroke="url(#zari-pattern)" strokeWidth="5" opacity="0.9" />
      {/* small woven flowers */}
      {[155, 200, 245, 290, 335, 380, 425, 470].map((x, i) => (
        <g key={i} transform={`translate(${x} 615)`}>
          <circle cx="0" cy="0" r="1.4" fill="#F1D07A" />
          <circle cx="0" cy="-3" r="0.9" fill="#F1D07A" />
          <circle cx="0" cy="3" r="0.9" fill="#F1D07A" />
          <circle cx="-3" cy="0" r="0.9" fill="#F1D07A" />
          <circle cx="3" cy="0" r="0.9" fill="#F1D07A" />
        </g>
      ))}
    </g>

    {/* SAREE 3 — mustard/yellow */}
    <g>
      <path d="M140 540 L480 540 L490 590 L130 590 Z" fill="url(#silk-mustard)" />
      <path d="M140 540 L480 540 L490 590 L130 590 Z" fill="url(#silk-weave)" />
      <path d="M140 540 L480 540" stroke="url(#zari-pattern)" strokeWidth="6" />
      <path d="M130 590 L490 590" stroke="url(#zari-pattern)" strokeWidth="5" opacity="0.9" />
      {/* mango/paisley motifs */}
      {[170, 230, 290, 350, 410, 460].map((x, i) => (
        <path
          key={i}
          d={`M${x} 560 C${x + 6} 553 ${x + 10} 560 ${x + 8} 568 C${x + 4} 574 ${x - 2} 570 ${x} 560 Z`}
          fill="#8B6A1E"
          opacity="0.7"
        />
      ))}
    </g>

    {/* SAREE 4 — green */}
    <g>
      <path d="M150 490 L470 490 L480 540 L140 540 Z" fill="url(#silk-green)" />
      <path d="M150 490 L470 490 L480 540 L140 540 Z" fill="url(#silk-weave)" />
      <path d="M150 490 L470 490" stroke="url(#zari-pattern)" strokeWidth="6" />
      <path d="M140 540 L480 540" stroke="url(#zari-pattern)" strokeWidth="5" opacity="0.9" />
      {/* diagonal zari stripes */}
      <g stroke="#F1D07A" strokeWidth="0.8" opacity="0.6" fill="none">
        <path d="M160 500 L170 530" />
        <path d="M200 500 L210 530" />
        <path d="M240 500 L250 530" />
        <path d="M280 500 L290 530" />
        <path d="M320 500 L330 530" />
        <path d="M360 500 L370 530" />
        <path d="M400 500 L410 530" />
        <path d="M440 500 L450 530" />
      </g>
    </g>

    {/* SAREE 5 — teal */}
    <g>
      <path d="M160 440 L460 440 L470 490 L150 490 Z" fill="url(#silk-teal)" />
      <path d="M160 440 L460 440 L470 490 L150 490 Z" fill="url(#silk-weave)" />
      <path d="M160 440 L460 440" stroke="url(#zari-pattern)" strokeWidth="6" />
      <path d="M150 490 L470 490" stroke="url(#zari-pattern)" strokeWidth="5" opacity="0.9" />
      {/* dots */}
      {[180, 220, 260, 300, 340, 380, 420, 445].map((x, i) => (
        <circle key={i} cx={x} cy={465} r="1.4" fill="#F1D07A" />
      ))}
    </g>

    {/* SAREE 6 — pink (top) */}
    <g>
      <path d="M170 380 L450 380 L460 440 L160 440 Z" fill="url(#silk-pink)" />
      <path d="M170 380 L450 380 L460 440 L160 440 Z" fill="url(#silk-weave)" />
      {/* zari top */}
      <path d="M170 380 L450 380" stroke="url(#zari-pattern)" strokeWidth="7" />
      {/* zari bottom */}
      <path d="M160 440 L460 440" stroke="url(#zari-pattern)" strokeWidth="6" />
      {/* peacock feather-like motifs */}
      {[210, 270, 330, 390, 435].map((x, i) => (
        <g key={i} transform={`translate(${x} 410)`}>
          <ellipse cx="0" cy="0" rx="6" ry="10" fill="#8B6A1E" opacity="0.6" />
          <ellipse cx="0" cy="-2" rx="2.4" ry="4" fill="#F1D07A" />
          <circle cx="0" cy="-2" r="1" fill="#7B2334" />
        </g>
      ))}
      {/* Top pleat highlight */}
      <path d="M175 388 L445 388" stroke="#FFF3EF" strokeWidth="1.2" opacity="0.7" />
      {/* Slight ripple on top */}
      <path d="M170 380 C230 375 380 375 450 380" stroke="#8B6A1E" strokeWidth="0.6" fill="none" opacity="0.5" />
    </g>

    {/* ===================== LAYERED NECKLACE DRAPED IN FRONT ===================== */}
    <g transform="translate(90 540)">
      {/* upper strand */}
      <path
        d="M30 40 C90 160 340 160 400 40"
        stroke="url(#ss-gold)"
        strokeWidth="4"
        fill="none"
      />
      <path
        d="M30 40 C90 160 340 160 400 40"
        stroke="#8B6A1E"
        strokeWidth="1"
        fill="none"
      />
      {/* second strand */}
      <path
        d="M60 65 C110 170 320 170 370 65"
        stroke="url(#ss-gold)"
        strokeWidth="3"
        fill="none"
      />
      {/* bead work */}
      {Array.from({ length: 22 }).map((_, i) => {
        const t = i / 21;
        const x = Math.round((30 + (400 - 30) * t) * 100) / 100;
        const y = Math.round((40 + 130 * Math.sin(Math.PI * t)) * 100) / 100;
        return <circle key={i} cx={x} cy={y} r="3" fill="url(#ss-gold)" />;
      })}
      {/* central big pendant */}
      <g transform="translate(215 175)">
        <path
          d="M0 -20 L18 -14 L26 4 L18 26 L0 32 L-18 26 L-26 4 L-18 -14 Z"
          fill="url(#ss-gold)"
          stroke="#8B6A1E"
          strokeWidth="0.8"
        />
        <path
          d="M0 -12 L10 -8 L14 4 L10 18 L0 22 L-10 18 L-14 4 L-10 -8 Z"
          fill="#7B2334"
        />
        <circle cx="0" cy="4" r="4.5" fill="#F1D07A" />
        <circle cx="0" cy="4" r="1.8" fill="#8B6A1E" />
        {/* small gems around */}
        {[
          [-14, -6, "#4B8A5A"],
          [14, -6, "#4B8A5A"],
          [-14, 14, "#3B62A6"],
          [14, 14, "#3B62A6"],
        ].map(([x, y, c], i) => (
          <circle key={i} cx={x} cy={y} r="1.8" fill={c} />
        ))}
      </g>
      {/* side pendants */}
      <g transform="translate(120 155)">
        <path d="M0 0 L6 -4 L12 0 L8 8 L4 8 Z" fill="url(#ss-gold)" />
        <circle cx="6" cy="3" r="1.6" fill="#B23A48" />
      </g>
      <g transform="translate(300 155)">
        <path d="M0 0 L6 -4 L12 0 L8 8 L4 8 Z" fill="url(#ss-gold)" />
        <circle cx="6" cy="3" r="1.6" fill="#B23A48" />
      </g>
      {/* micro-bead festoons */}
      {Array.from({ length: 14 }).map((_, i) => {
        const t = i / 13;
        const x = Math.round((80 + (340 - 80) * t) * 100) / 100;
        const y = Math.round((165 + 25 * Math.sin(Math.PI * t)) * 100) / 100;
        return <circle key={i} cx={x} cy={y} r="1.6" fill="url(#ss-gold)" />;
      })}
    </g>

    {/* ===================== JHUMKA EARRINGS ===================== */}
    <g transform="translate(360 690)">
      {/* left jhumka */}
      <g>
        <circle cx="0" cy="0" r="8" fill="url(#ss-gold)" stroke="#8B6A1E" strokeWidth="0.6" />
        <circle cx="0" cy="0" r="3" fill="#7B2334" />
        <path d="M0 8 C-16 12 -16 38 0 44 C16 38 16 12 0 8 Z" fill="url(#ss-gold)" />
        <path d="M-10 22 L10 22" stroke="#8B6A1E" strokeWidth="0.7" />
        <circle cx="0" cy="30" r="3" fill="#4B8A5A" />
        {[-12, -8, -4, 0, 4, 8, 12].map((x, i) => (
          <g key={i}>
            <path d={`M${x} 44 L${x} 52`} stroke="url(#ss-gold)" strokeWidth="0.7" />
            <circle cx={x} cy={54} r="1.8" fill="url(#ss-gold)" />
          </g>
        ))}
      </g>
      {/* right jhumka */}
      <g transform="translate(60 6)">
        <circle cx="0" cy="0" r="8" fill="url(#ss-gold)" stroke="#8B6A1E" strokeWidth="0.6" />
        <circle cx="0" cy="0" r="3" fill="#7B2334" />
        <path d="M0 8 C-16 12 -16 38 0 44 C16 38 16 12 0 8 Z" fill="url(#ss-gold)" />
        <path d="M-10 22 L10 22" stroke="#8B6A1E" strokeWidth="0.7" />
        <circle cx="0" cy="30" r="3" fill="#4B8A5A" />
        {[-12, -8, -4, 0, 4, 8, 12].map((x, i) => (
          <g key={i}>
            <path d={`M${x} 44 L${x} 52`} stroke="url(#ss-gold)" strokeWidth="0.7" />
            <circle cx={x} cy={54} r="1.8" fill="url(#ss-gold)" />
          </g>
        ))}
      </g>
    </g>

    {/* ===================== KADA / RING with big gem ===================== */}
    <g transform="translate(490 720)">
      <ellipse cx="0" cy="0" rx="36" ry="12" fill="none" stroke="url(#ss-gold)" strokeWidth="7" />
      <ellipse cx="0" cy="0" rx="36" ry="12" fill="none" stroke="#8B6A1E" strokeWidth="1" />
      {/* jewel */}
      <g transform="translate(0 -12)">
        <path d="M-10 0 L0 -10 L10 0 L6 8 L-6 8 Z" fill="#B23A48" stroke="#8B6A1E" strokeWidth="0.6" />
        <path d="M-6 0 L0 -6 L6 0 L4 4 L-4 4 Z" fill="#E86A78" />
        <path d="M-10 0 L10 0" stroke="#8B6A1E" strokeWidth="0.4" />
      </g>
      {/* side ornaments */}
      <circle cx="-30" cy="-2" r="3" fill="url(#ss-gold)" />
      <circle cx="30" cy="-2" r="3" fill="url(#ss-gold)" />
    </g>

    {/* ===================== LOOSE GEMSTONES ===================== */}
    <g transform="translate(120 710)">
      {/* emerald */}
      <g>
        <path d="M0 0 L16 -10 L32 0 L26 18 L6 18 Z" fill="#4B8A5A" stroke="#8B6A1E" strokeWidth="0.7" />
        <path d="M4 2 L28 2" stroke="#8B6A1E" strokeWidth="0.4" />
        <path d="M0 0 L6 18 M16 -10 L16 2 M32 0 L26 18" stroke="#8B6A1E" strokeWidth="0.4" />
        <path d="M8 4 L14 -4 L22 4" stroke="#B7E3C1" strokeWidth="0.9" fill="none" />
      </g>
      {/* ruby */}
      <g transform="translate(48 8)">
        <path d="M0 0 L14 -10 L28 0 L22 18 L6 18 Z" fill="#B23A48" stroke="#8B6A1E" strokeWidth="0.7" />
        <path d="M0 0 L28 0" stroke="#8B6A1E" strokeWidth="0.4" />
        <path d="M6 4 L14 -4 L20 4" stroke="#F6B0B8" strokeWidth="0.9" fill="none" />
      </g>
      {/* sapphire */}
      <g transform="translate(90 2)">
        <path d="M0 0 L12 -8 L24 0 L18 16 L4 16 Z" fill="#3B62A6" stroke="#8B6A1E" strokeWidth="0.7" />
        <path d="M0 0 L24 0" stroke="#8B6A1E" strokeWidth="0.4" />
        <path d="M4 3 L12 -3 L18 3" stroke="#B1C4EA" strokeWidth="0.9" fill="none" />
      </g>
    </g>

    {/* Small lotus flowers scattered */}
    <g transform="translate(90 380)" opacity="0.95">
      <path d="M14 24 C4 18 4 6 14 2 C24 6 24 18 14 24 Z" fill="url(#ss-lotus)" />
      <path d="M14 22 C-1 18 -2 4 14 -2 C30 4 29 18 14 22 Z" fill="url(#ss-lotus)" opacity="0.8" />
      <circle cx="14" cy="12" r="2" fill="#F1D07A" />
    </g>
    <g transform="translate(520 420)" opacity="0.9">
      <path d="M12 20 C4 16 4 4 12 2 C20 4 20 16 12 20 Z" fill="url(#ss-lotus)" />
      <circle cx="12" cy="10" r="1.6" fill="#F1D07A" />
    </g>
    <g transform="translate(500 660)" opacity="0.9">
      <path d="M12 20 C4 16 4 4 12 2 C20 4 20 16 12 20 Z" fill="url(#ss-lotus)" />
      <circle cx="12" cy="10" r="1.6" fill="#F1D07A" />
    </g>

    {/* sparkles */}
    {[
      { x: 60, y: 130, s: 8 },
      { x: 550, y: 200, s: 9 },
      { x: 590, y: 440, s: 8 },
      { x: 40, y: 470, s: 7 },
      { x: 265, y: 350, s: 6 },
      { x: 430, y: 350, s: 6 },
      { x: 320, y: 730, s: 6 },
    ].map((s, i) => (
      <path
        key={i}
        d={`M${s.x} ${s.y} l${s.s * 0.35} ${s.s} l${s.s} ${s.s * 0.35} l${-s.s} ${s.s * 0.35} l${-s.s * 0.35} ${s.s} l${-s.s * 0.35} ${-s.s} l${-s.s} ${-s.s * 0.35} l${s.s} ${-s.s * 0.35} z`}
        fill="#C8A048"
        opacity="0.75"
      />
    ))}
  </svg>
);

/* ============================================================
   Category card icons (unchanged)
   ============================================================ */
export const IconNecklace = () => (
  <svg viewBox="0 0 200 160" className="w-full h-full" aria-hidden>
    <defs>
      <linearGradient id="c-gold" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#E9C877" />
        <stop offset="100%" stopColor="#B8862A" />
      </linearGradient>
    </defs>
    <path d="M30 40 C60 130 140 130 170 40" stroke="url(#c-gold)" strokeWidth="5" fill="none" />
    <path d="M55 60 C75 120 125 120 145 60" stroke="url(#c-gold)" strokeWidth="3" fill="none" />
    <ellipse cx="100" cy="120" rx="18" ry="14" fill="url(#c-gold)" />
    <circle cx="100" cy="120" r="5" fill="#4B8A5A" />
    {[70, 85, 100, 115, 130].map((x, i) => (
      <circle key={i} cx={x} cy={135 + Math.abs(i - 2) * 3} r="3" fill="url(#c-gold)" />
    ))}
    <g transform="translate(160 40)">
      <path d="M0 0 c-8 5 -8 25 0 30 c8 -5 8 -25 0 -30 z" fill="url(#c-gold)" />
      <circle cx="0" cy="15" r="3" fill="#4B8A5A" />
    </g>
    <g transform="translate(190 55)">
      <path d="M0 0 c-6 4 -6 20 0 24 c6 -4 6 -20 0 -24 z" fill="url(#c-gold)" />
    </g>
    {[
      { x: 20, y: 20 },
      { x: 180, y: 20 },
      { x: 30, y: 150 },
    ].map((s, i) => (
      <path
        key={i}
        d={`M${s.x} ${s.y} l2 6 l6 2 l-6 2 l-2 6 l-2 -6 l-6 -2 l6 -2 z`}
        fill="#C8A048"
        opacity="0.7"
      />
    ))}
  </svg>
);

export const IconSaree = () => (
  <svg viewBox="0 0 200 160" className="w-full h-full" aria-hidden>
    <defs>
      <linearGradient id="sp" x1="0" x2="1">
        <stop offset="0%" stopColor="#F2A9A0" />
        <stop offset="100%" stopColor="#DC7E76" />
      </linearGradient>
      <linearGradient id="sg" x1="0" x2="1">
        <stop offset="0%" stopColor="#B9C89A" />
        <stop offset="100%" stopColor="#8FA972" />
      </linearGradient>
      <linearGradient id="gd" x1="0" x2="1">
        <stop offset="0%" stopColor="#E9C877" />
        <stop offset="100%" stopColor="#B8862A" />
      </linearGradient>
    </defs>
    <path d="M60 30 C90 20 130 25 155 40 L170 140 C130 150 80 148 45 140 Z" fill="url(#sp)" />
    <path d="M55 55 L165 60 M50 90 L170 92 M50 125 L170 130" stroke="url(#gd)" strokeWidth="2" fill="none" />
    <path d="M60 30 C90 20 130 25 155 40" stroke="url(#gd)" strokeWidth="3" fill="none" />
    <path d="M45 140 L170 140" stroke="url(#gd)" strokeWidth="3" fill="none" />
    <path d="M60 30 C55 60 55 100 60 145 Z" fill="url(#sg)" opacity="0.85" />
  </svg>
);

export const IconGems = () => (
  <svg viewBox="0 0 200 160" className="w-full h-full" aria-hidden>
    <g stroke="#B8862A" strokeWidth="1.5">
      <path d="M40 60 l20 -18 l24 18 l-14 26 l-20 0 z" fill="#4B8A5A" />
      <path d="M90 40 l22 -18 l24 18 l-14 24 l-22 0 z" fill="#B23A48" />
      <path d="M120 90 l18 -14 l20 14 l-12 20 l-18 0 z" fill="#F1B84A" />
      <path d="M50 105 l18 -14 l20 14 l-12 20 l-18 0 z" fill="#3B62A6" />
    </g>
    {[
      { x: 30, y: 30 },
      { x: 170, y: 30 },
      { x: 160, y: 130 },
      { x: 20, y: 140 },
    ].map((s, i) => (
      <path
        key={i}
        d={`M${s.x} ${s.y} l2 6 l6 2 l-6 2 l-2 6 l-2 -6 l-6 -2 l6 -2 z`}
        fill="#C8A048"
      />
    ))}
  </svg>
);

export const IconClay = () => (
  <svg viewBox="0 0 200 160" className="w-full h-full" aria-hidden>
    <defs>
      <linearGradient id="clay" x1="0" x2="1">
        <stop offset="0%" stopColor="#D97E5B" />
        <stop offset="100%" stopColor="#A54F31" />
      </linearGradient>
    </defs>
    <g>
      <circle cx="70" cy="70" r="26" fill="none" stroke="url(#clay)" strokeWidth="4" />
      <circle cx="70" cy="70" r="12" fill="url(#clay)" />
      <circle cx="70" cy="70" r="3" fill="#F6E1CE" />
      <path d="M56 100 c8 20 20 20 28 0" fill="none" stroke="url(#clay)" strokeWidth="2" />
      <circle cx="140" cy="70" r="26" fill="none" stroke="url(#clay)" strokeWidth="4" />
      <circle cx="140" cy="70" r="12" fill="url(#clay)" />
      <circle cx="140" cy="70" r="3" fill="#F6E1CE" />
      <path d="M126 100 c8 20 20 20 28 0" fill="none" stroke="url(#clay)" strokeWidth="2" />
    </g>
    {[60, 70, 80].map((x, i) => (
      <circle key={i} cx={x} cy={135 + Math.abs(i - 1) * 4} r="3" fill="url(#clay)" />
    ))}
    {[130, 140, 150].map((x, i) => (
      <circle key={`b${i}`} cx={x} cy={135 + Math.abs(i - 1) * 4} r="3" fill="url(#clay)" />
    ))}
  </svg>
);

export const IconCouture = () => (
  <svg viewBox="0 0 200 160" className="w-full h-full" aria-hidden>
    <defs>
      <linearGradient id="cg" x1="0" x2="1">
        <stop offset="0%" stopColor="#B9C89A" />
        <stop offset="100%" stopColor="#7E9660" />
      </linearGradient>
      <linearGradient id="cp" x1="0" x2="1">
        <stop offset="0%" stopColor="#F2A9A0" />
        <stop offset="100%" stopColor="#DC7E76" />
      </linearGradient>
      <linearGradient id="cGold" x1="0" x2="1">
        <stop offset="0%" stopColor="#E9C877" />
        <stop offset="100%" stopColor="#B8862A" />
      </linearGradient>
    </defs>
    <path
      d="M100 20 c-14 0 -22 10 -22 22 c0 8 4 14 8 18 c-6 4 -10 10 -10 18"
      fill="none"
      stroke="#7A5230"
      strokeWidth="1.5"
    />
    <path d="M70 55 c8 -10 52 -10 60 0 l6 30 c-24 8 -48 8 -72 0 z" fill="url(#cg)" />
    <path d="M64 85 L136 85 L152 150 L48 150 Z" fill="url(#cp)" />
    <path d="M48 150 L152 150" stroke="url(#cGold)" strokeWidth="4" />
    <path d="M56 130 L144 130" stroke="url(#cGold)" strokeWidth="2" />
    <path d="M64 85 L136 85" stroke="url(#cGold)" strokeWidth="3" />
    {[80, 95, 110, 125].map((x, i) => (
      <circle key={i} cx={x} cy={110} r="2" fill="#B8862A" />
    ))}
  </svg>
);

export const IconTemple = () => (
  <svg viewBox="0 0 200 160" className="w-full h-full" aria-hidden>
    <defs>
      <linearGradient id="tg" x1="0" x2="1">
        <stop offset="0%" stopColor="#C88A5A" />
        <stop offset="100%" stopColor="#8A5A2E" />
      </linearGradient>
    </defs>
    <g stroke="url(#tg)" strokeWidth="2" fill="none">
      <rect x="60" y="110" width="80" height="35" />
      <path d="M55 110 L145 110" />
      <path d="M65 95 L135 95 L145 110 L55 110 Z" />
      <path d="M70 80 L130 80 L135 95 L65 95 Z" />
      <path d="M75 65 L125 65 L130 80 L70 80 Z" />
      <path d="M80 50 L120 50 L125 65 L75 65 Z" />
      <path d="M85 50 L115 50 L120 40 L100 25 L80 40 Z" />
      <circle cx="100" cy="20" r="3" fill="url(#tg)" />
      <path d="M92 145 L92 120 C92 115 108 115 108 120 L108 145" fill="#E9C877" />
      <path d="M35 145 L35 100" />
      <path d="M35 100 c-10 -8 -18 -5 -20 -12 M35 100 c10 -8 18 -5 20 -12 M35 100 c-6 -14 -4 -18 6 -22 M35 100 c6 -14 4 -18 -6 -22" />
      <path d="M165 145 L165 100" />
      <path d="M165 100 c-10 -8 -18 -5 -20 -12 M165 100 c10 -8 18 -5 20 -12 M165 100 c-6 -14 -4 -18 6 -22 M165 100 c6 -14 4 -18 -6 -22" />
    </g>
    <path d="M20 155 L180 155" stroke="url(#tg)" strokeWidth="2" />
  </svg>
);
