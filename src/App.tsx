import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Heart } from 'lucide-react';

import _img1 from './assets/photos/utama.jpeg';
import _img2 from './assets/photos/WhatsApp Image 2026-05-15 at 18.38.17.jpeg';
import _img3 from './assets/photos/WhatsApp Image 2026-05-15 at 18.38.18.jpeg';
import _img5 from './assets/photos/WhatsApp Image 2026-05-15 at 18.38.36.jpeg';
import _img6 from './assets/photos/WhatsApp Image 2026-05-15 at 18.38.36 (1).jpeg';
import _img7 from './assets/photos/WhatsApp Image 2026-05-15 at 18.38.37.jpeg';
import _img8 from './assets/photos/WhatsApp Image 2026-05-15 at 18.38.37 (1).jpeg';
import _litakecil1 from './assets/photos/LITAKECIL1.jpeg';
import _litakecil2 from './assets/photos/LITAKECIL2.jpeg';
import _litakecil3 from './assets/photos/LITAKECIL3.jpeg';
import _terakir1 from './assets/photos/terakir (1).jpeg';
import _terakir2 from './assets/photos/terakir (2).jpeg';

const POLAROIDS = [
  { src: _img5,     caption: 'so proud',     rotate: '-rotate-3' },
  { src: _img6,     caption: 'hebat banget', rotate: 'rotate-2'  },
  { src: _img7,     caption: 'cantik banget',rotate: '-rotate-1' },
  { src: _img8,     caption: 'my fav',       rotate: 'rotate-3'  },
  { src: _terakir1, caption: 'forever',      rotate: '-rotate-2' },
  { src: _terakir2, caption: 'always',       rotate: 'rotate-1'  },
];

export default function App() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const allPhotos = [_litakecil1, _litakecil2, _litakecil3];
  const doubled = [...allPhotos, ...allPhotos, ...allPhotos, ...allPhotos,
                   ...allPhotos, ...allPhotos, ...allPhotos, ...allPhotos];

  return (
    <div className="antialiased overflow-x-hidden bg-white text-zinc-900 selection:bg-rose-200" style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}>

      {/* Google Font load */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;900&family=Dancing+Script:wght@600;700&display=swap');

        .font-display { font-family: 'Outfit', sans-serif; }
        .font-script  { font-family: 'Dancing Script', cursive; }

        @keyframes kenburns {
          0%   { transform: scale(1) translateY(0); }
          100% { transform: scale(1.08) translateY(-2%); }
        }
        .hero-img { animation: kenburns 12s ease-in-out infinite alternate; }

        @keyframes ml { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes mr { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        .row-l { display:flex; width:max-content; animation: ml 38s linear infinite; }
        .row-r { display:flex; width:max-content; animation: mr 38s linear infinite; }

        @keyframes marquee-pol {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .polaroid-track { display:flex; width:max-content; animation: marquee-pol 22s linear infinite; }

        .polaroid-card:active { transform: scale(0.97) !important; }
      `}</style>

      {/* ─────────────────────────────────────────
          1. HERO — full-bleed, left-aligned
      ───────────────────────────────────────── */}
      <section ref={heroRef} className="relative w-full min-h-[100dvh] bg-zinc-950 overflow-hidden">
        <motion.img
          src={_img1}
          alt="Hero"
          style={{ y: heroY }}
          className="hero-img absolute inset-0 w-full h-full object-cover opacity-50 grayscale"
        />
        {/* Gradient scrim — left dark, right fades */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 w-full min-h-[100dvh] flex flex-col justify-between px-8 md:px-16 lg:px-24 py-10"
        >
          {/* Top bar */}
          <div className="flex items-center justify-between">
            <span className="font-display text-zinc-400 text-xs tracking-[0.3em] uppercase">July 1 · 2026</span>
            <span className="font-display text-zinc-400 text-xs tracking-[0.3em] uppercase">17th Birthday</span>
          </div>

          {/* Main headline */}
          <div className="flex-1 flex flex-col justify-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Big number — decorative */}
              <span className="font-display font-black text-[8rem] md:text-[18rem] leading-none text-white/10 select-none block -mb-6 md:-mb-14">
                17
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-black text-white text-4xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight uppercase"
            >
              Happy<br />
              <span className="text-rose-400">Birthday</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="font-script text-rose-300 text-3xl md:text-5xl mt-4 leading-snug"
            >
              cantiknya riyall
            </motion.p>
          </div>

          {/* Bottom date strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex items-center gap-4 pb-2"
          >
            <div className="w-10 md:w-16 h-px bg-rose-500" />
            <p className="font-display text-zinc-300 text-sm md:text-base tracking-widest uppercase">
              Juli 2026
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ─────────────────────────────────────────
          2. KINETIC INTERLUDE — full-width typographic
          Layout family: full-width kinetic type + horizontal rule list
      ───────────────────────────────────────── */}
      <section className="relative w-full min-h-[100dvh] bg-zinc-950 overflow-hidden flex flex-col justify-center">
        <div className="absolute inset-0 opacity-20 -rotate-6 flex flex-col justify-between py-2 pointer-events-none">
          {[doubled, doubled, doubled].map((row, ri) => (
            <div key={ri} className="overflow-hidden">
              <div className={ri === 1 ? 'row-r' : 'row-l'} style={{ gap: '4px' }}>
                {row.map((img, i) => (
                  <div key={i} className="flex-shrink-0 w-44 h-44">
                    <img src={img} className="w-full h-full object-cover grayscale" alt="" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="relative z-10 px-8 md:px-16 lg:px-24 py-20">
          <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden">
            <p className="font-display font-black text-white/10 text-[3.5rem] md:text-[7rem] lg:text-[10rem] leading-none tracking-tighter select-none">3 hal yang</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden">
            <p className="font-display font-black text-white text-[3.5rem] md:text-[7rem] lg:text-[10rem] leading-none tracking-tighter">kamu dapat</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden">
            <p className="font-display font-black text-rose-500 text-[3.5rem] md:text-[7rem] lg:text-[10rem] leading-none tracking-tighter">di umur 17</p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.5 }} className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-zinc-700 max-w-5xl">
            {[
              { n: '01', label: 'Kedewasaan',  sub: 'Lebih matang, lebih tabah' },
              { n: '02', label: 'Kebebasan',   sub: 'Mimpi yang makin nyata'    },
              { n: '03', label: 'Kebahagiaan', sub: 'Yang kamu layak dapatkan'  },
            ].map((item, i) => (
              <div key={i} className="border-b md:border-b-0 md:border-r border-zinc-700 last:border-r-0 py-8 pr-8 md:px-8 first:pl-0">
                <span className="font-display text-zinc-600 text-xs tracking-[0.25em] block mb-3">{item.n}</span>
                <p className="font-display font-bold text-white text-xl md:text-2xl leading-tight mb-2">{item.label}</p>
                <p className="font-display text-zinc-500 text-sm leading-relaxed">{item.sub}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          3. CANTIKNYA DKV
          Layout family: magazine editorial — full-height portrait foto kiri,
          oversized stacked type kanan dengan banyak whitespace
      ───────────────────────────────────────── */}
      <section className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col md:flex-row">

        {/* Left — portrait foto full-height */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:w-[45%] relative min-h-[70vw] md:min-h-0 flex-shrink-0 overflow-hidden"
        >
          <img
            src={_img5}
            className="absolute inset-0 w-full h-full object-cover object-center"
            alt="Cantiknya DKV"
          />
          {/* Thin rose border right edge — desktop only */}
          <div className="hidden md:block absolute top-0 right-0 w-[3px] h-full bg-rose-500" />
        </motion.div>

        {/* Right — editorial text, lots of breathing room */}
        <div className="w-full md:w-[55%] flex flex-col justify-between px-8 md:px-14 lg:px-20 py-14 md:py-16">

          {/* Top: heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-display font-black text-zinc-900 text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] leading-none tracking-tighter">
              CANTIK
            </h2>
            <h2 className="font-display font-black text-zinc-900 text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] leading-none tracking-tighter">
              NYA
            </h2>
            <h2 className="font-display font-black text-rose-500 text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] leading-none tracking-tighter">
              DKV.
            </h2>
          </motion.div>

          {/* Middle: note — plain, no card box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="my-10 md:my-0 max-w-[44ch]"
          >
            <div className="w-8 h-px bg-rose-500 mb-6" />
            <p className="font-display text-zinc-500 text-sm md:text-base leading-8">
              Aku ikut bahagia kamu udah bisa sejauh ini. Semoga kamu bisa jadi yang terbaik dan berkembang sesuai kemauan kamu sendiri.
            </p>
            <p className="font-display text-zinc-400 text-sm md:text-base leading-8 mt-4">
              Jangan takut gagal, kamu pasti bisa banggain ortu.
            </p>
          </motion.div>

          {/* Bottom: date stamp */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-4"
          >
            <span className="font-display font-black text-zinc-900 text-xs uppercase tracking-[0.25em]">July 1, 2026</span>
            <div className="h-px flex-1 max-w-[3rem] bg-zinc-300" />
            <span className="font-display text-zinc-400 text-xs uppercase tracking-[0.2em]">17th</span>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          4. RANK 1 — full-width statement + marquee strip below
          Layout family: edge-to-edge text break / statement section
      ───────────────────────────────────────── */}
      <section className="relative w-full bg-zinc-950 text-white overflow-hidden">
        <div className="border-b border-zinc-800 px-8 md:px-16 lg:px-24 py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'repeating-linear-gradient(0deg, white 0, white 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, white 0, white 1px, transparent 1px, transparent 60px)' }} />
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
                <p className="font-display font-light text-zinc-500 text-sm uppercase tracking-[0.2em] mb-2">Rank</p>
                <div className="flex items-end leading-none gap-1">
                  <span className="font-display font-black text-[8rem] md:text-[14rem] leading-[0.85] text-white">1</span>
                  <span className="font-display font-black text-[8rem] md:text-[14rem] leading-[0.85] text-rose-500">.</span>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="max-w-sm md:mb-6">
                <Heart className="text-rose-500 w-5 h-5 mb-5 fill-rose-500" strokeWidth={1.5} />
                <p className="font-display font-bold text-white text-lg md:text-xl mb-3 uppercase tracking-widest">Jujur, ini keren banget</p>
                <p className="font-display text-zinc-400 text-sm leading-8">Aku nggak kaget, kamu selalu konsisten soal nilai. Hebat, aku aja turun mulu tiap semester sedangkan kamu nggak. Kata mama, kamu hebat karena bisa bertahan.</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-px flex-1 bg-zinc-800" />
                  <span className="font-script text-zinc-400 text-lg">Through Consistency</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="py-10 overflow-hidden bg-zinc-900/50">
          <div className="polaroid-track" style={{ gap: '1.5rem' }}>
            {[...POLAROIDS, ...POLAROIDS, ...POLAROIDS, ...POLAROIDS].map((p, i) => (
              <div key={i} className={`polaroid-card flex-shrink-0 w-44 bg-white p-3 pb-14 shadow-2xl ${p.rotate} transition-transform duration-300 cursor-default select-none`}>
                <img src={p.src} className="w-full aspect-[3/4] object-cover" alt={p.caption} />
                <p className="text-center font-script text-zinc-500 mt-3 text-lg leading-tight">{p.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          5. THE FIRST ON MY MIND
          Layout family: full-width oversized text banner + masonry photo grid below
      ───────────────────────────────────────── */}
      <section className="relative w-full bg-zinc-50 overflow-hidden">
        <div className="border-b border-zinc-200 px-8 md:px-16 lg:px-24 pt-24 pb-16">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden pb-1">
              <h2 className="font-display font-black text-[3rem] md:text-[7rem] lg:text-[9rem] leading-none tracking-tighter text-zinc-900">The first</h2>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden pb-1">
              <h2 className="font-display font-black text-[3rem] md:text-[7rem] lg:text-[9rem] leading-none tracking-tighter text-rose-500">on my mind.</h2>
            </motion.div>
          </div>
        </div>
        <div className="px-8 md:px-16 lg:px-24 py-16 md:py-24 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-[360px_1fr] gap-12 md:gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="space-y-6 md:sticky md:top-24">
              <p className="font-display font-semibold text-zinc-900 text-sm uppercase tracking-widest">Always you</p>
              <p className="font-display text-zinc-500 text-sm md:text-base leading-8 max-w-[55ch]">Yap, kamu masih jadi orang yang selalu muncul di pikiran aku selama 3 tahun lebih. Makasih ya udah ada buat aku dan selalu support aku. Aku nggak akan bosan bilang kalau aku beneran beruntung dapetin kamu.</p>
              <p className="font-display text-zinc-500 text-sm md:text-base leading-8 max-w-[55ch]">Maaf ya aku selalu bikin kamu kecewa. Semoga di umur 17 tahun ini kamu makin bahagia ya sama aku, dan semoga hubungan kita tetep berlanjut sampai kuliah dan seterusnya.</p>
              <div className="border-l-2 border-rose-400 pl-5 py-1">
                <p className="font-display font-semibold text-rose-600 text-xs uppercase tracking-widest leading-7">Semangat jadi anak Hammer. Jangan takut ambil DKV. Semua hal mulai dari 0.</p>
              </div>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex flex-col gap-4">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0 }} whileHover={{ scale: 1.02 }} className="bg-white p-2 shadow-lg -rotate-1 cursor-default">
                  <img src={_img5} className="w-full aspect-[3/4] object-cover" alt="memory" />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} whileHover={{ scale: 1.02 }} className="bg-white p-2 shadow-lg rotate-1 cursor-default">
                  <img src={_img6} className="w-full aspect-square object-cover" alt="memory" />
                </motion.div>
              </div>
              <div className="flex flex-col gap-4 md:mt-10">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }} whileHover={{ scale: 1.02 }} className="bg-white p-2 shadow-lg rotate-2 cursor-default">
                  <img src={_img7} className="w-full aspect-square object-cover" alt="memory" />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} whileHover={{ scale: 1.02 }} className="bg-white p-2 shadow-lg -rotate-2 cursor-default">
                  <img src={_img8} className="w-full aspect-[3/4] object-cover" alt="memory" />
                </motion.div>
              </div>
              <div className="hidden md:flex flex-col gap-4 mt-5">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.25 }} whileHover={{ scale: 1.02 }} className="bg-white p-2 shadow-lg -rotate-1 cursor-default">
                  <img src={_terakir1} className="w-full aspect-[3/4] object-cover" alt="memory" />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} whileHover={{ scale: 1.02 }} className="bg-white p-2 shadow-lg rotate-1 cursor-default">
                  <img src={_terakir2} className="w-full aspect-square object-cover" alt="memory" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          6. TO LOVE — full-bleed image with pinned text overlay
          Layout family: full-bleed photo + bottom text overlay (NOT a left/right split)
      ───────────────────────────────────────── */}
      <section className="relative w-full min-h-[100dvh] bg-zinc-950 overflow-hidden flex items-end">
        <img src={_img8} className="absolute inset-0 w-full h-full object-cover grayscale" alt="Profile" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
        <div className="absolute inset-0 bg-rose-900/20 mix-blend-multiply" />
        <div className="relative z-10 w-full border-t border-zinc-700/50">
          <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 py-16 md:py-20">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-end">
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
                <h2 className="font-display font-black text-[5rem] md:text-[8rem] leading-none tracking-tighter text-white pb-1">to</h2>
                <h2 className="font-display font-black text-[5rem] md:text-[8rem] leading-none tracking-tighter text-rose-400 pb-1">love</h2>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="space-y-5 md:pb-4">
                <p className="font-display text-zinc-300 text-sm md:text-base leading-8 max-w-[48ch]">Happy 17th litaaaaaa. Semoga di umur kamu yang genap 17 tahun ini kamu semakin dewasa, semakin tabah, semakin cantik, pintar, dan selalu bahagia.</p>
                <p className="font-display text-zinc-400 text-sm md:text-base leading-8 max-w-[48ch]">Punya keluarga kecil yang kita dambakan, love u so much litaaa.</p>
                <p className="font-display font-semibold text-white text-xs uppercase tracking-[0.2em] pt-2">Selamat makin dewasa, sayang.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          7. FOOTER — editorial closing
          Layout family: full-width editorial footer with horizontal meta bar
      ───────────────────────────────────────── */}
      <section className="relative w-full bg-zinc-950 overflow-hidden">
        <img src={_img1} className="absolute inset-0 w-full h-full object-cover opacity-[0.07] grayscale" alt="" />
        <div className="absolute inset-0 bg-zinc-950/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 lg:px-24 pt-24 md:pt-32 pb-12">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} className="mb-20 md:mb-28">
            <Heart className="text-rose-500 w-5 h-5 mb-10 fill-rose-500" strokeWidth={1.5} />
            <div className="overflow-hidden pb-2">
              <p className="font-display font-black text-white text-[3.5rem] md:text-[8rem] leading-none tracking-tighter">Happy</p>
            </div>
            <div className="overflow-hidden pb-2">
              <p className="font-display font-black text-rose-400 text-[3.5rem] md:text-[8rem] leading-none tracking-tighter">Birthday!</p>
            </div>
            <p className="font-script text-zinc-500 text-2xl md:text-4xl mt-6 leading-snug">si cantik litaaa</p>
          </motion.div>
          <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-6">
              <span className="font-display text-[10px] uppercase tracking-[0.3em] text-zinc-600">July 1, 2026</span>
              <span className="text-zinc-700">·</span>
              <span className="font-display text-[10px] uppercase tracking-[0.3em] text-zinc-600">17th</span>
            </div>
            <span className="font-display text-[10px] uppercase tracking-[0.3em] text-zinc-700">ngeweb.id</span>
          </div>
        </div>
      </section>

    </div>
  );
}
