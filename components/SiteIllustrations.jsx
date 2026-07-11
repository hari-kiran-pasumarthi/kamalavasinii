"use client";
import React from "react";

// Reusable ornate lotus mark used as brand logo
export const LotusLogo = ({ size = 64, className = "" }) => (
  <svg viewBox="0 0 120 100" width={size} height={(size * 100) / 120} className={className} aria-hidden>
    <defs>
      <linearGradient id="gold-lg" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#E9C877" />
        <stop offset="55%" stopColor="#C8A048" />
        <stop offset="100%" stopColor="#8E661A" />
      </linearGradient>
    </defs>
    <g fill="none" stroke="url(#gold-lg)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Center top petal (tall) */}
      <path d="M60 8 C55 25 55 45 60 60 C65 45 65 25 60 8 Z" />
      {/* Left inner */}
      <path d="M40 20 C40 35 48 52 60 60 C56 45 50 30 40 20 Z" />
      {/* Right inner */}
      <path d="M80 20 C80 35 72 52 60 60 C64 45 70 30 80 20 Z" />
      {/* Left outer */}
      <path d="M22 34 C28 46 42 58 60 62 C50 52 38 42 22 34 Z" />
      {/* Right outer */}
      <path d="M98 34 C92 46 78 58 60 62 C70 52 82 42 98 34 Z" />
      {/* Base water */}
      <path d="M18 66 C34 74 52 76 60 76 C68 76 86 74 102 66" />
      <path d="M14 74 C34 82 60 84 60 84 C60 84 86 82 106 74" />
    </g>
    <circle cx="60" cy="58" r="2.2" fill="#C8A048" />
  </svg>
);

export const SparkleIcon = ({ size = 14, className = "", color = "#C8A048" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden>
    <path d="M12 2 L13.5 9 L20 10.5 L13.5 12 L12 19 L10.5 12 L4 10.5 L10.5 9 Z" fill={color} />
  </svg>
);

// Elegant woman illustration (stylized) — silk saree, jewellery, holding lotus
export const WomanIllustration = ({ className = "" }) => (
  <svg viewBox="0 0 500 640" className={className} aria-hidden>
    <defs>
      <radialGradient id="bg-blush" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stopColor="#FBE7DE" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#FBE7DE" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="saree-cream" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#F8E9CE" />
        <stop offset="100%" stopColor="#EDD6A9" />
      </linearGradient>
      <linearGradient id="saree-pink" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#F0AFA5" />
        <stop offset="100%" stopColor="#D9847A" />
      </linearGradient>
      <linearGradient id="skin-lg" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#EBB995" />
        <stop offset="100%" stopColor="#D9A177" />
      </linearGradient>
      <linearGradient id="gold-lg2" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#E9C877" />
        <stop offset="100%" stopColor="#B8862A" />
      </linearGradient>
      <linearGradient id="hair" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#3A1F17" />
        <stop offset="100%" stopColor="#1F0F0A" />
      </linearGradient>
      <linearGradient id="lotus-pink" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#F6BFB6" />
        <stop offset="100%" stopColor="#E38B80" />
      </linearGradient>
      <linearGradient id="leaf" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#B7C99B" />
        <stop offset="100%" stopColor="#7E9660" />
      </linearGradient>
    </defs>

    {/* soft watercolor blob background */}
    <ellipse cx="250" cy="330" rx="250" ry="300" fill="url(#bg-blush)" />

    {/* Leaves left */}
    <g opacity="0.85">
      <path d="M20 380 C40 340 60 320 90 310 C70 340 55 380 40 430 Z" fill="url(#leaf)" />
      <path d="M10 470 C30 440 55 420 90 410 C70 440 55 480 45 520 Z" fill="url(#leaf)" opacity="0.85" />
      <path d="M420 300 C450 280 470 275 490 285 C470 305 445 320 415 335 Z" fill="url(#leaf)" opacity="0.8" />
    </g>

    {/* SAREE / body — flowing skirt */}
    <path d="M120 630 L150 380 C170 340 210 320 250 320 C290 320 330 340 355 380 L400 630 Z" fill="url(#saree-cream)" />
    {/* pink pallu draped over shoulder */}
    <path d="M170 320 C210 300 260 300 300 315 L340 400 C310 420 260 430 210 415 L170 320 Z" fill="url(#saree-pink)" />
    {/* blouse pink */}
    <path d="M195 260 C215 245 285 245 305 260 L318 325 C280 335 220 335 182 325 Z" fill="url(#saree-pink)" />

    {/* Golden saree border */}
    <path d="M120 630 L145 400" stroke="url(#gold-lg2)" strokeWidth="5" fill="none" />
    <path d="M400 630 L370 420" stroke="url(#gold-lg2)" strokeWidth="5" fill="none" />
    <path d="M180 320 C230 305 285 305 320 320" stroke="url(#gold-lg2)" strokeWidth="3" fill="none" />

    {/* Neck */}
    <path d="M232 235 L232 265 C232 275 268 275 268 265 L268 235 Z" fill="url(#skin-lg)" />

    {/* Necklace choker */}
    <path d="M215 262 C235 275 265 275 285 262" stroke="url(#gold-lg2)" strokeWidth="4" fill="none" />
    <circle cx="250" cy="274" r="5" fill="#B8862A" />
    <circle cx="235" cy="269" r="3" fill="#4B8A5A" />
    <circle cx="265" cy="269" r="3" fill="#4B8A5A" />

    {/* larger necklace */}
    <path d="M200 285 C240 320 260 320 300 285" stroke="url(#gold-lg2)" strokeWidth="3" fill="none" />
    {[210, 225, 240, 255, 270, 285].map((x, i) => (
      <circle key={i} cx={x} cy={295 + (i === 2 || i === 3 ? 6 : 3)} r="3" fill="#C8A048" />
    ))}

    {/* Head */}
    <ellipse cx="250" cy="200" rx="55" ry="62" fill="url(#skin-lg)" />

    {/* Hair bun with flowers */}
    <path d="M195 165 C190 130 230 108 270 118 C310 130 320 170 305 200 C300 175 285 158 260 154 C240 152 220 158 205 175 Z" fill="url(#hair)" />
    <ellipse cx="210" cy="215" rx="22" ry="38" fill="url(#hair)" />
    {/* jasmine flowers in hair */}
    {[{cx:198,cy:198},{cx:198,cy:214},{cx:198,cy:230},{cx:198,cy:246},{cx:203,cy:180}].map((p,i)=>(
      <g key={i}>
        <circle cx={p.cx} cy={p.cy} r="5" fill="#FFFDF6" />
        <circle cx={p.cx} cy={p.cy} r="1.5" fill="#E9C877" />
      </g>
    ))}

    {/* Face features */}
    {/* Bindi */}
    <circle cx="250" cy="165" r="4" fill="#7A1F2B" />
    {/* Maang tikka gold */}
    <path d="M250 130 L250 155" stroke="url(#gold-lg2)" strokeWidth="1.5" />
    <circle cx="250" cy="155" r="3" fill="#C8A048" />
    <path d="M243 130 L257 130 L250 122 Z" fill="#C8A048" />

    {/* Closed eyes (serene) */}
    <path d="M225 195 C232 200 240 200 246 195" stroke="#3A1F17" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M256 195 C262 200 270 200 277 195" stroke="#3A1F17" strokeWidth="2" fill="none" strokeLinecap="round" />
    {/* Eyebrows */}
    <path d="M223 185 C232 180 244 180 248 184" stroke="#3A1F17" strokeWidth="1.5" fill="none" />
    <path d="M254 184 C260 180 270 180 279 185" stroke="#3A1F17" strokeWidth="1.5" fill="none" />
    {/* Nose */}
    <path d="M250 210 C247 220 245 225 250 228" stroke="#8B4E3B" strokeWidth="1.2" fill="none" />
    {/* Nose ring */}
    <circle cx="244" cy="224" r="2" fill="none" stroke="#C8A048" strokeWidth="1.5" />
    {/* Lips */}
    <path d="M240 240 C245 244 255 244 260 240 C255 246 245 246 240 240 Z" fill="#C46A62" />

    {/* Earrings big */}
    <g>
      <circle cx="195" cy="210" r="6" fill="#C8A048" />
      <path d="M195 216 C185 220 185 240 195 245 C205 240 205 220 195 216 Z" fill="url(#gold-lg2)" />
      <circle cx="195" cy="232" r="2" fill="#4B8A5A" />
      <circle cx="305" cy="210" r="6" fill="#C8A048" />
      <path d="M305 216 C295 220 295 240 305 245 C315 240 315 220 305 216 Z" fill="url(#gold-lg2)" />
      <circle cx="305" cy="232" r="2" fill="#4B8A5A" />
    </g>

    {/* ARM holding lotus */}
    <path d="M300 320 C340 300 360 260 355 220 C352 240 345 260 330 275 C315 290 305 305 300 320 Z" fill="url(#skin-lg)" />
    {/* Bangles */}
    {[300, 306, 312].map((c,i)=>(
      <ellipse key={i} cx={340 - i*8} cy={280 + i*4} rx="10" ry="3" fill="none" stroke="url(#gold-lg2)" strokeWidth="2" />
    ))}
    {/* Hand */}
    <circle cx="352" cy="215" r="12" fill="url(#skin-lg)" />
    {/* Lotus in hand */}
    <g transform="translate(345 175)">
      <path d="M15 45 C5 35 5 20 15 12 C22 22 22 35 15 45 Z" fill="url(#lotus-pink)" />
      <path d="M15 45 C25 35 25 20 15 12 C8 22 8 35 15 45 Z" fill="url(#lotus-pink)" opacity="0.85" />
      <path d="M15 42 C0 32 -3 12 15 5 C33 12 30 32 15 42 Z" fill="url(#lotus-pink)" opacity="0.8" />
      <circle cx="15" cy="25" r="3" fill="#E9C877" />
      <path d="M15 45 C13 60 13 80 15 100" stroke="#7E9660" strokeWidth="2" fill="none" />
    </g>

    {/* Other arm resting */}
    <path d="M185 315 C170 340 165 380 175 420 C185 400 195 370 200 340 Z" fill="url(#skin-lg)" />
    {[{c:190},{c:196},{c:202}].map((b,i)=>(
      <ellipse key={i} cx={183 + i*3} cy={355 + i*8} rx="10" ry="3" fill="none" stroke="url(#gold-lg2)" strokeWidth="2" />
    ))}

    {/* sparkles */}
    {[{x:80,y:150},{x:420,y:200},{x:410,y:450},{x:70,y:250},{x:395,y:130}].map((s,i)=>(
      <path key={i} d={`M${s.x} ${s.y} l3 8 l8 3 l-8 3 l-3 8 l-3 -8 l-8 -3 l8 -3 z`} fill="#C8A048" opacity="0.7" />
    ))}
  </svg>
);

// Stack of silk sarees with jewellery — right hero illustration
export const SareeStackIllustration = ({ className = "" }) => (
  <svg viewBox="0 0 560 640" className={className} aria-hidden>
    <defs>
      <radialGradient id="bg-peach" cx="55%" cy="45%" r="60%">
        <stop offset="0%" stopColor="#FBE7DE" stopOpacity="0.85" />
        <stop offset="100%" stopColor="#FBE7DE" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="s1" x1="0" x2="1"><stop offset="0%" stopColor="#F2A9A0"/><stop offset="100%" stopColor="#DC7E76"/></linearGradient>
      <linearGradient id="s2" x1="0" x2="1"><stop offset="0%" stopColor="#B9C89A"/><stop offset="100%" stopColor="#8FA972"/></linearGradient>
      <linearGradient id="s3" x1="0" x2="1"><stop offset="0%" stopColor="#F4D68A"/><stop offset="100%" stopColor="#D9B255"/></linearGradient>
      <linearGradient id="s4" x1="0" x2="1"><stop offset="0%" stopColor="#C5A7CE"/><stop offset="100%" stopColor="#9F80B0"/></linearGradient>
      <linearGradient id="gg" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#E9C877"/><stop offset="100%" stopColor="#8E661A"/>
      </linearGradient>
      <linearGradient id="leaf2" x1="0" x2="1">
        <stop offset="0%" stopColor="#B7C99B"/><stop offset="100%" stopColor="#7E9660"/>
      </linearGradient>
      <linearGradient id="lotusP" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#F6BFB6"/><stop offset="100%" stopColor="#E38B80"/>
      </linearGradient>
    </defs>

    <ellipse cx="280" cy="320" rx="280" ry="280" fill="url(#bg-peach)" />

    {/* Leaves top */}
    <g>
      <path d="M340 40 C400 60 440 110 450 170 C420 130 380 100 340 90 Z" fill="url(#leaf2)" />
      <path d="M420 60 C460 90 490 140 495 200 C475 165 445 135 415 115 Z" fill="url(#leaf2)" opacity="0.85"/>
      {[[380,50],[430,90],[465,140]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="3" fill="#3A1F17" opacity="0.4"/>
      ))}
    </g>

    {/* Saree stack */}
    {/* bottom (purple) */}
    <path d="M120 480 L470 480 L490 520 L100 520 Z" fill="url(#s4)" />
    <path d="M120 480 L470 480" stroke="url(#gg)" strokeWidth="3"/>
    {/* yellow */}
    <path d="M130 430 L460 430 L470 480 L120 480 Z" fill="url(#s3)" />
    <path d="M130 430 L460 430" stroke="url(#gg)" strokeWidth="3"/>
    {/* green */}
    <path d="M140 380 L450 380 L460 430 L130 430 Z" fill="url(#s2)" />
    <path d="M140 380 L450 380" stroke="url(#gg)" strokeWidth="3"/>
    {/* pink top */}
    <path d="M155 320 L440 320 L450 380 L140 380 Z" fill="url(#s1)" />
    <path d="M155 320 L440 320" stroke="url(#gg)" strokeWidth="3"/>

    {/* Small patterns on sarees */}
    {[[180,350],[220,355],[260,350],[300,355],[340,350],[380,355],[410,350]].map(([x,y],i)=>(
      <circle key={i} cx={x} cy={y} r="2" fill="#B8862A"/>
    ))}
    {[[170,405],[210,410],[250,405],[290,410],[330,405],[370,410],[410,405]].map(([x,y],i)=>(
      <circle key={i} cx={x} cy={y} r="2" fill="#8E6A25"/>
    ))}

    {/* Necklace draped in front */}
    <g transform="translate(70 400)">
      <path d="M20 30 C60 130 200 130 240 30" stroke="url(#gg)" strokeWidth="6" fill="none"/>
      <path d="M40 60 C80 140 180 140 220 60" stroke="url(#gg)" strokeWidth="4" fill="none"/>
      {/* pendants */}
      <ellipse cx="130" cy="135" rx="22" ry="18" fill="url(#gg)"/>
      <circle cx="130" cy="135" r="6" fill="#8B1F27"/>
      <circle cx="110" cy="128" r="3" fill="#4B8A5A"/>
      <circle cx="150" cy="128" r="3" fill="#4B8A5A"/>
      {/* small beads under */}
      {[95,110,125,140,155,170].map((x,i)=>(
        <circle key={i} cx={x} cy={155 + Math.abs(i-2.5)*3} r="3" fill="url(#gg)"/>
      ))}
    </g>

    {/* Earrings pair */}
    <g transform="translate(340 540)">
      <circle cx="0" cy="0" r="6" fill="url(#gg)"/>
      <path d="M0 6 C-14 10 -14 30 0 34 C14 30 14 10 0 6 Z" fill="url(#gg)"/>
      <circle cx="0" cy="20" r="3" fill="#4B8A5A"/>
      <g transform="translate(40 0)">
        <circle cx="0" cy="0" r="6" fill="url(#gg)"/>
        <path d="M0 6 C-14 10 -14 30 0 34 C14 30 14 10 0 6 Z" fill="url(#gg)"/>
        <circle cx="0" cy="20" r="3" fill="#4B8A5A"/>
      </g>
    </g>

    {/* Ring */}
    <g transform="translate(440 555)">
      <ellipse cx="0" cy="0" rx="28" ry="10" fill="none" stroke="url(#gg)" strokeWidth="6"/>
      <circle cx="0" cy="-8" r="8" fill="#E9AF3D"/>
      <circle cx="0" cy="-8" r="4" fill="#B8862A"/>
    </g>

    {/* Loose gemstones */}
    <g transform="translate(120 560)">
      <path d="M0 0 l14 -8 l14 8 l-8 14 l-12 0 z" fill="#4B8A5A"/>
      <path d="M40 6 l12 -6 l12 6 l-6 12 l-12 0 z" fill="#B23A48"/>
      <path d="M78 4 l10 -5 l10 5 l-5 10 l-10 0 z" fill="#3B62A6"/>
    </g>

    {/* Floating lotuses */}
    <g transform="translate(70 260)">
      <path d="M15 30 C5 22 5 8 15 2 C25 8 25 22 15 30 Z" fill="url(#lotusP)"/>
      <path d="M15 28 C0 22 -2 6 15 -2 C32 6 30 22 15 28 Z" fill="url(#lotusP)" opacity="0.85"/>
      <circle cx="15" cy="14" r="2" fill="#E9C877"/>
    </g>
    <g transform="translate(470 300)">
      <path d="M15 30 C5 22 5 8 15 2 C25 8 25 22 15 30 Z" fill="url(#lotusP)"/>
      <path d="M15 28 C0 22 -2 6 15 -2 C32 6 30 22 15 28 Z" fill="url(#lotusP)" opacity="0.85"/>
      <circle cx="15" cy="14" r="2" fill="#E9C877"/>
    </g>
    <g transform="translate(500 460)">
      <path d="M12 24 C4 18 4 6 12 2 C20 6 20 18 12 24 Z" fill="url(#lotusP)"/>
      <circle cx="12" cy="12" r="2" fill="#E9C877"/>
    </g>

    {/* sparkles */}
    {[{x:90,y:100},{x:120,y:230},{x:520,y:130},{x:540,y:410},{x:230,y:290},{x:400,y:290}].map((s,i)=>(
      <path key={i} d={`M${s.x} ${s.y} l3 8 l8 3 l-8 3 l-3 8 l-3 -8 l-8 -3 l8 -3 z`} fill="#C8A048" opacity="0.75" />
    ))}

    {/* Little birds */}
    <path d="M300 90 q6 -8 14 0 q-6 -3 -14 0 z" fill="#7A5230"/>
    <path d="M330 60 q5 -6 12 0 q-5 -3 -12 0 z" fill="#7A5230"/>
    <path d="M270 65 q4 -5 10 0 q-4 -3 -10 0 z" fill="#7A5230"/>
  </svg>
);

// Icon-style illustrations for the six category cards
export const IconNecklace = () => (
  <svg viewBox="0 0 200 160" className="w-full h-full" aria-hidden>
    <defs>
      <linearGradient id="c-gold" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#E9C877"/><stop offset="100%" stopColor="#B8862A"/>
      </linearGradient>
    </defs>
    <path d="M30 40 C60 130 140 130 170 40" stroke="url(#c-gold)" strokeWidth="5" fill="none"/>
    <path d="M55 60 C75 120 125 120 145 60" stroke="url(#c-gold)" strokeWidth="3" fill="none"/>
    <ellipse cx="100" cy="120" rx="18" ry="14" fill="url(#c-gold)"/>
    <circle cx="100" cy="120" r="5" fill="#4B8A5A"/>
    {[70,85,100,115,130].map((x,i)=>(<circle key={i} cx={x} cy={135 + Math.abs(i-2)*3} r="3" fill="url(#c-gold)"/>))}
    {/* earrings */}
    <g transform="translate(160 40)">
      <path d="M0 0 c-8 5 -8 25 0 30 c8 -5 8 -25 0 -30 z" fill="url(#c-gold)"/>
      <circle cx="0" cy="15" r="3" fill="#4B8A5A"/>
    </g>
    <g transform="translate(190 55)">
      <path d="M0 0 c-6 4 -6 20 0 24 c6 -4 6 -20 0 -24 z" fill="url(#c-gold)"/>
    </g>
    {[{x:20,y:20},{x:180,y:20},{x:30,y:150}].map((s,i)=>(
      <path key={i} d={`M${s.x} ${s.y} l2 6 l6 2 l-6 2 l-2 6 l-2 -6 l-6 -2 l6 -2 z`} fill="#C8A048" opacity="0.7"/>
    ))}
  </svg>
);

export const IconSaree = () => (
  <svg viewBox="0 0 200 160" className="w-full h-full" aria-hidden>
    <defs>
      <linearGradient id="sp" x1="0" x2="1"><stop offset="0%" stopColor="#F2A9A0"/><stop offset="100%" stopColor="#DC7E76"/></linearGradient>
      <linearGradient id="sg" x1="0" x2="1"><stop offset="0%" stopColor="#B9C89A"/><stop offset="100%" stopColor="#8FA972"/></linearGradient>
      <linearGradient id="gd" x1="0" x2="1"><stop offset="0%" stopColor="#E9C877"/><stop offset="100%" stopColor="#B8862A"/></linearGradient>
    </defs>
    <path d="M60 30 C90 20 130 25 155 40 L170 140 C130 150 80 148 45 140 Z" fill="url(#sp)"/>
    <path d="M55 55 L165 60 M50 90 L170 92 M50 125 L170 130" stroke="url(#gd)" strokeWidth="2" fill="none"/>
    <path d="M60 30 C90 20 130 25 155 40" stroke="url(#gd)" strokeWidth="3" fill="none"/>
    <path d="M45 140 L170 140" stroke="url(#gd)" strokeWidth="3" fill="none"/>
    <path d="M60 30 C55 60 55 100 60 145 Z" fill="url(#sg)" opacity="0.85"/>
  </svg>
);

export const IconGems = () => (
  <svg viewBox="0 0 200 160" className="w-full h-full" aria-hidden>
    <g stroke="#B8862A" strokeWidth="1.5">
      <path d="M40 60 l20 -18 l24 18 l-14 26 l-20 0 z" fill="#4B8A5A"/>
      <path d="M90 40 l22 -18 l24 18 l-14 24 l-22 0 z" fill="#B23A48"/>
      <path d="M120 90 l18 -14 l20 14 l-12 20 l-18 0 z" fill="#F1B84A"/>
      <path d="M50 105 l18 -14 l20 14 l-12 20 l-18 0 z" fill="#3B62A6"/>
    </g>
    {/* sparkles */}
    {[{x:30,y:30},{x:170,y:30},{x:160,y:130},{x:20,y:140}].map((s,i)=>(
      <path key={i} d={`M${s.x} ${s.y} l2 6 l6 2 l-6 2 l-2 6 l-2 -6 l-6 -2 l6 -2 z`} fill="#C8A048"/>
    ))}
  </svg>
);

export const IconClay = () => (
  <svg viewBox="0 0 200 160" className="w-full h-full" aria-hidden>
    <defs>
      <linearGradient id="clay" x1="0" x2="1"><stop offset="0%" stopColor="#D97E5B"/><stop offset="100%" stopColor="#A54F31"/></linearGradient>
    </defs>
    {/* pair of hoops */}
    <g>
      <circle cx="70" cy="70" r="26" fill="none" stroke="url(#clay)" strokeWidth="4"/>
      <circle cx="70" cy="70" r="12" fill="url(#clay)"/>
      <circle cx="70" cy="70" r="3" fill="#F6E1CE"/>
      <path d="M56 100 c8 20 20 20 28 0" fill="none" stroke="url(#clay)" strokeWidth="2"/>

      <circle cx="140" cy="70" r="26" fill="none" stroke="url(#clay)" strokeWidth="4"/>
      <circle cx="140" cy="70" r="12" fill="url(#clay)"/>
      <circle cx="140" cy="70" r="3" fill="#F6E1CE"/>
      <path d="M126 100 c8 20 20 20 28 0" fill="none" stroke="url(#clay)" strokeWidth="2"/>
    </g>
    {/* danglers */}
    {[60,70,80].map((x,i)=>(<circle key={i} cx={x} cy={135 + Math.abs(i-1)*4} r="3" fill="url(#clay)"/>))}
    {[130,140,150].map((x,i)=>(<circle key={`b${i}`} cx={x} cy={135 + Math.abs(i-1)*4} r="3" fill="url(#clay)"/>))}
  </svg>
);

export const IconCouture = () => (
  <svg viewBox="0 0 200 160" className="w-full h-full" aria-hidden>
    <defs>
      <linearGradient id="cg" x1="0" x2="1"><stop offset="0%" stopColor="#B9C89A"/><stop offset="100%" stopColor="#7E9660"/></linearGradient>
      <linearGradient id="cp" x1="0" x2="1"><stop offset="0%" stopColor="#F2A9A0"/><stop offset="100%" stopColor="#DC7E76"/></linearGradient>
      <linearGradient id="cGold" x1="0" x2="1"><stop offset="0%" stopColor="#E9C877"/><stop offset="100%" stopColor="#B8862A"/></linearGradient>
    </defs>
    {/* torso mannequin */}
    <path d="M100 20 c-14 0 -22 10 -22 22 c0 8 4 14 8 18 c-6 4 -10 10 -10 18" fill="none" stroke="#7A5230" strokeWidth="1.5"/>
    {/* bodice green */}
    <path d="M70 55 c8 -10 52 -10 60 0 l6 30 c-24 8 -48 8 -72 0 z" fill="url(#cg)"/>
    {/* lehenga pink */}
    <path d="M64 85 L136 85 L152 150 L48 150 Z" fill="url(#cp)"/>
    {/* gold hem */}
    <path d="M48 150 L152 150" stroke="url(#cGold)" strokeWidth="4"/>
    <path d="M56 130 L144 130" stroke="url(#cGold)" strokeWidth="2"/>
    <path d="M64 85 L136 85" stroke="url(#cGold)" strokeWidth="3"/>
    {[80,95,110,125].map((x,i)=>(<circle key={i} cx={x} cy={110} r="2" fill="#B8862A"/>))}
  </svg>
);

export const IconTemple = () => (
  <svg viewBox="0 0 200 160" className="w-full h-full" aria-hidden>
    <defs>
      <linearGradient id="tg" x1="0" x2="1"><stop offset="0%" stopColor="#C88A5A"/><stop offset="100%" stopColor="#8A5A2E"/></linearGradient>
    </defs>
    <g stroke="url(#tg)" strokeWidth="2" fill="none">
      {/* base */}
      <rect x="60" y="110" width="80" height="35"/>
      {/* tiers */}
      <path d="M55 110 L145 110"/>
      <path d="M65 95 L135 95 L145 110 L55 110 Z"/>
      <path d="M70 80 L130 80 L135 95 L65 95 Z"/>
      <path d="M75 65 L125 65 L130 80 L70 80 Z"/>
      <path d="M80 50 L120 50 L125 65 L75 65 Z"/>
      {/* dome */}
      <path d="M85 50 L115 50 L120 40 L100 25 L80 40 Z"/>
      <circle cx="100" cy="20" r="3" fill="url(#tg)"/>
      {/* door */}
      <path d="M92 145 L92 120 C92 115 108 115 108 120 L108 145" fill="#E9C877"/>
      {/* palm trees on side */}
      <path d="M35 145 L35 100" />
      <path d="M35 100 c-10 -8 -18 -5 -20 -12 M35 100 c10 -8 18 -5 20 -12 M35 100 c-6 -14 -4 -18 6 -22 M35 100 c6 -14 4 -18 -6 -22"/>
      <path d="M165 145 L165 100" />
      <path d="M165 100 c-10 -8 -18 -5 -20 -12 M165 100 c10 -8 18 -5 20 -12 M165 100 c-6 -14 -4 -18 6 -22 M165 100 c6 -14 4 -18 -6 -22"/>
    </g>
    <path d="M20 155 L180 155" stroke="url(#tg)" strokeWidth="2"/>
  </svg>
);
