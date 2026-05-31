import { motion } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';

import _img1 from './assets/photos/utama.jpeg';
import _img2 from './assets/photos/WhatsApp Image 2026-05-15 at 18.38.17.jpeg';
import _img3 from './assets/photos/WhatsApp Image 2026-05-15 at 18.38.18.jpeg';
import _img4 from './assets/photos/WhatsApp Image 2026-05-15 at 18.38.18 (1).jpeg';
import _img5 from './assets/photos/WhatsApp Image 2026-05-15 at 18.38.36.jpeg';
import _img6 from './assets/photos/WhatsApp Image 2026-05-15 at 18.38.36 (1).jpeg';
import _img7 from './assets/photos/WhatsApp Image 2026-05-15 at 18.38.37.jpeg';
import _img8 from './assets/photos/WhatsApp Image 2026-05-15 at 18.38.37 (1).jpeg';
import _litakecil1 from './assets/photos/LITAKECIL1.jpeg';
import _litakecil2 from './assets/photos/LITAKECIL2.jpeg';
import _litakecil3 from './assets/photos/LITAKECIL3.jpeg';
export default function App() {

  // Collage array — pakai litakecil1-3
  const allPhotos = [_litakecil1, _litakecil2, _litakecil3];
  const collageImages = Array.from({ length: 24 }, (_, i) => allPhotos[i % allPhotos.length]);

  return (
    <div className="antialiased overflow-x-hidden bg-white text-zinc-900 font-sans selection:bg-pink-200">

      {/* 1. Hero Section */}
      <section className="relative w-full h-screen bg-black">
        <img
          src={_img1}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="relative z-10 w-full h-full flex flex-col justify-between p-6 md:p-16 lg:px-32">
          <div className="flex-1 flex items-center justify-between">
            <div className="flex flex-col">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-serif text-white text-3xl md:text-7xl lg:text-9xl tracking-wider leading-tight"
              >
                HAPPY<br />BIRTHDAY!
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="font-script text-pink-300 text-2xl md:text-4xl lg:text-5xl mt-2 md:mt-4 tracking-wide"
              >
                cantiknya riyall
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="self-center -mt-16 md:-mt-48"
            >
              <span className="font-serif italic text-pink-400 text-4xl md:text-8xl lg:text-[12rem] whitespace-nowrap drop-shadow-lg opacity-90">
                17th
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="pb-6 md:pb-8 flex items-center space-x-4"
          >
            <div className="w-8 md:w-12 h-[1px] bg-pink-400" />
            <p className="text-white font-serif text-sm md:text-lg tracking-wide md:text-xl">
              July 1, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Collage Section */}
      <section className="relative w-full h-screen bg-zinc-950 overflow-hidden flex items-center justify-center border-t border-zinc-800">
        {/* Slanted grid background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-2 w-[150vw] h-[150vh] transform -rotate-12 scale-110 translate-y-12">
            {collageImages.map((img, i) => (
              <div key={i} className="aspect-square bg-zinc-900 border border-zinc-800/50 relative group">
                <div className="absolute inset-0 bg-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <img src={img} className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-500" alt="grid" />
              </div>
            ))}
          </div>
        </div>

        {/* Text overlay */}
        <div className="relative z-10 text-center flex items-center justify-center space-x-2 md:space-x-8 px-3 md:px-4 bg-zinc-950/40 py-6 md:p-12 backdrop-blur-sm rounded-full border border-zinc-800 max-w-[92vw] md:max-w-5xl mx-auto">
          <span className="font-serif italic text-white text-5xl md:text-[12rem] leading-none drop-shadow-2xl">
            3
          </span>
          <div className="flex flex-col items-center">
            <span className="font-serif text-pink-100 text-sm md:text-5xl tracking-wide leading-tight">
              things you get when<br />you turn
            </span>
          </div>
          <span className="font-serif italic text-pink-500 text-6xl md:text-[15rem] leading-none drop-shadow-2xl translate-y-4 md:translate-y-16">
            17
          </span>
        </div>
      </section>

      {/* 3. Trisakti Section */}
      <section className="relative w-full min-h-screen pt-24 pb-32 bg-pink-50 border-t border-pink-100">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-300 to-transparent pointer-events-none" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 h-full">

          <div className="flex items-center space-x-4 mb-20">
            <span className="font-serif italic text-pink-300 text-6xl md:text-9xl drop-shadow-sm">3</span>
            <h2 className="font-serif text-zinc-900 text-3xl md:text-6xl tracking-wide">
              <span className="text-pink-500 font-bold">sakti</span> Multimedia
            </h2>
          </div>

          {/* Mobile: stack vertikal. Desktop: side by side (asli) */}
          <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-12 relative">
            {/* Paper Note */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] w-full max-w-2xl relative z-20 border border-pink-100"
            >
              <Sparkles className="absolute -top-4 -left-4 text-pink-400 w-8 h-8" />
              <h3 className="font-serif font-bold text-zinc-800 text-base md:text-2xl mb-4 md:mb-6 uppercase tracking-wider leading-relaxed">
                Selamaat yaaw sayaang kamuu udah jadi orang dewasa sekarang :)
              </h3>
              <p className="font-serif text-zinc-600 text-base md:text-lg leading-relaxed">
              “Aku ikut bahagia kamu udah bisa sejauh ini, Semoga kamu bisa jadi yang terbaik di sana dan berkembang sesuai yang kamu mau. JANGAN TAKUT GAGAL YA CINTAA, KAMU PASTI BISA BANGGAIN ORTUMU, U CAN DO IT!!!”

              </p>
            </motion.div>

            {/* Pink outline image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 w-full max-w-xs md:max-w-md transform md:translate-y-8"
            >
              <div className="absolute inset-0 bg-pink-400 rounded-2xl transform scale-[1.07] translate-y-3 opacity-90 shadow-xl"></div>
              <img
                src={_img2}
                className="relative z-10 w-full h-64 md:h-[500px] object-cover rounded-xl border-4 border-white shadow-lg grayscale-[20%]"
                alt="Selfie"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Rank 2 Section */}
      <section className="relative w-full min-h-screen py-32 bg-black text-white">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 100px, white 100px, white 102px)' }} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">

          <div className="flex flex-col md:flex-row items-center gap-6 mb-16 md:mb-24 relative">
            <div className="flex items-center">
              <span className="font-serif text-white text-3xl md:text-6xl uppercase tracking-wider font-light">Rank</span>
              <span className="font-serif italic text-pink-500 text-[8rem] md:text-[14rem] leading-none drop-shadow-xl -ml-2 -mb-8">2</span>
            </div>

            <div className="bg-white text-black px-6 md:px-8 py-3 md:py-4 transform md:-translate-y-4 shadow-2xl flex items-center rounded-sm">
              <span className="font-serif italic text-lg md:text-3xl font-medium">Through Consistency!!</span>
            </div>
          </div>

          <div className="relative flex flex-col md:flex-row items-start justify-between gap-16">

            {/* Note */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-900 border border-zinc-800 p-7 md:p-10 shadow-2xl w-full max-w-xl z-20 relative md:top-20"
            >
              <Heart className="text-pink-500 w-6 h-6 mb-6 fill-pink-500" />
              <h3 className="font-serif font-bold text-pink-50 text-base md:text-xl mb-4 tracking-wider uppercase">Jujur ini keerrrreeennnn</h3>
              <p className="font-sans text-zinc-400 text-sm md:text-[15px] leading-7 md:leading-8">
                SELAAAMAAT YAAW . AKU G KAGET SIHHH soalnya kamu selalu konsisten soal nilai HEBAATT, aku aja tururn mulu tiap semester SEDANGKAN KAMU NGGA!!!. fyi kata mama ku kamu hebat karna bisa bertahan
              </p>
            </motion.div>

            {/* Polaroids — scroll horizontal di mobile, absolute di desktop */}
            <div className="w-full md:w-1/2">
              {/* Mobile: horizontal scroll */}
              <div className="flex md:hidden flex-row gap-4 overflow-x-auto pb-4">
                <div className="flex-shrink-0 w-40 bg-white p-2 shadow-2xl pb-10 -rotate-3">
                  <img src={_img5} className="w-full aspect-square object-cover" alt="polaroid 1" />
                  <p className="text-center font-script text-zinc-500 mt-3 text-lg">so proud</p>
                </div>
                <div className="flex-shrink-0 w-44 bg-white p-2 shadow-2xl pb-10 rotate-3">
                  <img src={_img6} className="w-full aspect-square object-cover" alt="polaroid 2" />
                  <p className="text-center font-script text-zinc-500 mt-3 text-lg">hebat banget</p>
                </div>
                <div className="flex-shrink-0 w-40 bg-white p-2 shadow-2xl pb-10 -rotate-1">
                  <img src={_img7} className="w-full aspect-[4/3] object-cover" alt="polaroid 3" />
                </div>
              </div>

              {/* Desktop: absolute positioning (asli) */}
              <div className="hidden md:block relative min-h-[550px]">
                <motion.div
                  initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
                  whileInView={{ opacity: 1, rotate: -10, scale: 1 }}
                  viewport={{ once: true }}
                  className="absolute top-0 right-1/4 w-60 bg-white p-3 shadow-2xl pb-12 z-20 transform hover:rotate-0 hover:z-50 transition-all duration-300 hover:scale-105"
                >
                  <img src={_img5} className="w-full aspect-square object-cover" alt="polaroid 1" />
                  <p className="text-center font-script text-zinc-500 mt-4 text-xl">so proud</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, rotate: 15, scale: 0.8 }}
                  whileInView={{ opacity: 1, rotate: 10, scale: 1 }}
                  viewport={{ once: true }}
                  className="absolute top-32 right-0 w-64 bg-white p-3 shadow-2xl pb-12 z-10 transform hover:rotate-0 hover:z-50 transition-all duration-300 hover:scale-105"
                >
                  <img src={_img6} className="w-full aspect-square object-cover" alt="polaroid 2" />
                  <p className="text-center font-script text-zinc-500 mt-4 text-xl">hebat banget</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, rotate: -5, scale: 0.8 }}
                  whileInView={{ opacity: 1, rotate: -2, scale: 1 }}
                  viewport={{ once: true }}
                  className="absolute top-64 right-1/3 w-56 bg-white p-3 shadow-2xl pb-12 z-30 transform hover:rotate-0 hover:z-50 transition-all duration-300 hover:scale-105"
                >
                  <img src={_img7} className="w-full aspect-[4/3] object-cover" alt="polaroid 3" />
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. The First On My Mind Section */}
      <section className="relative w-full min-h-screen py-32 bg-white text-zinc-800">
        <div className="absolute inset-0 bg-[radial-gradient(#fecdd3_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16 items-center">

          <div className="md:w-[55%] flex flex-col pt-8">
            <div className="flex items-center flex-wrap mb-8 md:mb-12">
              <span className="font-serif text-2xl md:text-5xl pr-3">The first</span>
              <span className="font-serif italic text-pink-500 text-[4rem] md:text-[10rem] leading-[0.8]">1</span>
              <span className="font-serif text-2xl md:text-5xl pl-3">on my mind</span>
            </div>

            <div className="font-sans text-[14px] md:text-[16px] leading-7 md:leading-8 text-zinc-600 space-y-6 max-w-2xl">
              <p>
                <strong className="text-zinc-900 font-semibold tracking-wide">HAHHAHAHAH YESS ALWAYSS UU!!</strong><br />
                YAP kamu masih jadi orang yang selalu muncul dipikiran aku selama 3 tahun lebih!!! MAKASIH YAAA UDH ADA BUAAT KUUU JUGAA DAN SELALU SUPPORT AKU. aku g akan bosan ngasih tau nya kalau aku bener bener beruntung dapetin kamu, kamu setia nemenin aku apapun keadaannya dan selalu ngertiin kondisi aku, kalau aku pacaran ama cewe lain mungkin aku bakal g sanggup. dan mama aku juga ga banyak komen soal kamu, karna kamu anak nya baik baik, malah suka khawatir kamu dia apa apain sama aku hehehee.
              </p>
              <p>
                maaafyaa aku selalu bikin kamu kecewa dan sedih semoga diumur 17 tahun ini kamu makin bahagia yaaa sama aku, dan semoga hubungan kita tetep berlanjut sampai kuliah dan seterusnya :P
              </p>
              <div className="p-4 md:p-6 bg-pink-50 border-l-4 border-pink-400 rounded-r-lg mt-8">
                <p className="uppercase text-xs md:text-sm font-semibold text-pink-900 tracking-wider">
                  DAAN SEMANGAT JADI ANAK HAMMER, JANGAN TAKUT AMBIL DKV!! U CAN DO IT!! KAMU BISAA semua hal selalu dari 0 jadi jangan minder sama kemampuan orang lain, karna dulu mereka mulai dari 0 kayak kamu!!
                </p>
              </div>
            </div>
          </div>

          {/* Desktop: absolute collage (asli). Mobile: grid 2 kolom */}
          <div className="md:w-[45%] w-full">
            {/* Mobile */}
            <div className="grid grid-cols-2 gap-3 md:hidden">
              <img src={_img5} className="w-full h-40 object-cover border-4 border-white shadow-xl rounded-sm" alt="memory" />
              <img src={_img6} className="w-full h-40 object-cover border-4 border-white shadow-xl rotate-1" alt="memory" />
              <img src={_img7} className="w-full h-40 object-cover border-4 border-white shadow-2xl -rotate-1" alt="memory" />
              <img src={_img8} className="w-full h-40 object-cover border-4 border-white shadow-lg rotate-2" alt="memory" />
            </div>

            {/* Desktop: asli */}
            <div className="hidden md:block relative min-h-[500px]">
              <div className="absolute inset-0 bg-pink-100/50 rounded-full blur-3xl filter opacity-60" />
              <img src={_img5} className="absolute top-0 left-0 w-44 h-56 object-cover hover:z-50 border-4 border-white shadow-xl rounded-sm hover:-translate-y-2 transition-transform duration-300" alt="memory" />
              <img src={_img6} className="absolute top-16 right-0 w-52 h-64 object-cover border-4 border-white shadow-xl rotate-3 hover:rotate-0 hover:z-50 transition-all duration-300" alt="memory" />
              <img src={_img7} className="absolute top-48 left-16 w-56 h-48 object-cover border-4 border-white shadow-2xl -rotate-6 z-10 grayscale hover:grayscale-0 transition-all duration-500" alt="memory" />
              <img src={_img8} className="absolute bottom-4 right-12 w-48 h-48 object-cover border-4 border-white shadow-lg rotate-6 z-20 mix-blend-multiply opacity-80" alt="texture" />
            </div>
          </div>

        </div>
      </section>

      {/* 6. To Love Section */}
      <section className="relative w-full h-auto min-h-[80vh] flex flex-col md:flex-row bg-pink-50">
        {/* Left Image Split */}
        <div className="w-full md:w-1/2 relative bg-zinc-900 min-h-[40vh] md:min-h-[500px] overflow-hidden group">
          <img src={_img3} className="w-full h-full md:h-screen object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 grayscale" alt="Profile silhouette" />
          <div className="absolute inset-0 bg-pink-500 mix-blend-overlay opacity-40"></div>
          <div className="absolute inset-x-0 bottom-0 py-6 md:py-12 px-8 flex justify-end">
            <span className="font-serif italic text-pink-100/90 text-[7rem] md:text-[20rem] leading-[0.7] transform translate-y-6 md:translate-y-12 drop-shadow-2xl">
              17
            </span>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-24 z-10 relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-200 rounded-full blur-[100px] opacity-40 -z-10" />

          <h2 className="font-serif italic text-4xl md:text-8xl mb-8 md:mb-12 text-zinc-900">to love</h2>
          <div className="font-serif text-[15px] md:text-[17px] leading-7 md:leading-8 text-zinc-700 space-y-6 max-w-md">
            <p className="border-l-2 border-pink-300 pl-4 md:pl-6">
              happy 17th litaaaaaa. semoga diumur kamu yang genap 17 tahun kamu semakin dewasa, semakin tabah, semakin cantikk pintar dan selalu bahagia.
            </p>
            <p className="pl-4 md:pl-6">
              punya keluarga kecil yang kita dambakan, love u so much litaaa. Selamat makin dewasa sayang!!
            </p>
          </div>
        </div>
      </section>

      {/* 7. Footer Section */}
      <section className="relative w-full h-[80vh] bg-zinc-950 flex flex-col items-center justify-center text-center overflow-hidden">
        <img
          src={_img1}
          className="absolute inset-0 w-full h-full object-cover opacity-20 blur-[2px] grayscale"
          alt="Footer background"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        <div className="relative z-10 flex flex-col items-center space-y-6 md:space-y-8 p-6">
          <Heart className="text-pink-500 w-10 h-10 md:w-12 md:h-12 mb-2 md:mb-4 animate-pulse" />
          <h2 className="font-serif text-white text-3xl md:text-7xl font-light tracking-wide">
            Happy Birthday!!
          </h2>
          <p className="font-serif italic text-pink-300 text-xl md:text-4xl tracking-widest font-light">
            si cantik litaaa
          </p>
        </div>

        <div className="absolute bottom-8 text-center w-full z-10">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-zinc-500">copyright ngeweb.id</p>
        </div>
      </section>

    </div>
  );
}
