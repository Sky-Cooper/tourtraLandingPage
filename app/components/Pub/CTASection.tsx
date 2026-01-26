"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, CheckCircle2, HardHat, Construction, 
  ClipboardList, Hammer, Key, BrickWall, Paintbrush, 
  Wrench, Truck, Phone, Mail, MapPin, Clock, Menu, X, ChevronDown 
} from "lucide-react";

// --- IMPORTS IMAGES ---
import pic1 from "./pic1.jpg"; 
import pic2 from "./pic2.jpg"; 
import pic3 from "./pic3.jpg";
import pic7 from "./pic7.png";

// --- DATA ---
const navLinks = [
  { name: 'Accueil', href: '/' },
  {
    name: 'Nos Services',
    dropdown: [
      { name: 'Gros Œuvre & Structure', href: '#services' },
      { name: 'Finitions & Intérieur', href: '#services' },
      { name: 'Réseaux & Équipements', href: '#services' }
    ]
  },
  { name: 'Réalisations', href: '#process' },
  { name: 'Contact', href: '#contact' },
];

const services = [
  { id: 1, title: "Travaux de Construction", items: ["Bâtiments résidentiels", "Gros œuvre & béton armé"], icon: BrickWall },
  { id: 2, title: "Aménagement & Finition", items: ["Peinture & Carrelage", "Menuiserie aluminium"], icon: Paintbrush },
  { id: 3, title: "Réseaux & Équipements", items: ["Électricité & Plomberie", "Climatisation"], icon: Wrench },
];

// --- COMPOSANTS ---

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 font-sans">
      <div className={`bg-neutral-900 text-white transition-all overflow-hidden ${isScrolled ? 'h-0' : 'py-2'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between text-[10px] font-black uppercase tracking-widest">
          <span className="flex items-center gap-2"><Clock size={12} className="text-red-600"/> LUN - SAM: 08:00 - 18:00</span>
          <span className="flex items-center gap-2"><MapPin size={12} className="text-red-600"/> CASABLANCA, MAROC</span>
        </div>
      </div>

      <nav className={`bg-white transition-all ${isScrolled ? 'shadow-xl py-3 border-b-2 border-red-600' : 'py-6 border-b border-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-black text-neutral-900 uppercase tracking-tighter">
              TOUR<span className="text-red-600">TRA</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-[12px] font-black uppercase tracking-widest text-neutral-800 hover:text-red-600 transition-colors">
                {link.name}
              </a>
            ))}
            <a href="#contact" className="bg-red-600 text-white px-8 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-neutral-900 transition-all">
              Obtenir un Devis
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-neutral-900"><Menu size={30}/></button>
        </div>
      </nav>
    </header>
  );
};

const Hero = () => (
  <section className="relative w-full min-h-screen flex items-center bg-neutral-900 pt-32 md:pt-40">
    <div className="absolute inset-0 z-0">
      <Image src={pic1} alt="Chantier" fill className="object-cover opacity-40 grayscale" priority />
      <div className="absolute inset-0 bg-linear-to-r from-neutral-900 via-neutral-900/80 to-transparent"></div>
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
        <div className="inline-flex items-center gap-3 bg-red-600 text-white px-5 py-2 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
          <HardHat size={16} /> Expertise BTP Maroc
        </div>
        {/* CHANGEMENT : Texte passé de white à red-600 */}
        <h1 className="text-5xl md:text-8xl font-black text-red-600 leading-[0.95] uppercase mb-8 tracking-tighter">
          Construire <br /> <span className="text-white">L'Excellence.</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-xl mb-10 border-l-4 border-red-600 pl-6 uppercase font-bold tracking-tight">
          Gros œuvre et ingénierie pour vos projets d'envergure.
        </p>
        <button className="bg-red-600 text-white px-12 py-6 text-[11px] font-black uppercase tracking-widest hover:bg-white hover:text-red-600 transition-all shadow-2xl">
          Nos Réalisations
        </button>
      </motion.div>
    </div>
  </section>
);

const Services = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const sliderImages = [pic2, pic3, pic7];

  useEffect(() => {
    const t = setInterval(() => setCurrentImg(p => (p + 1) % sliderImages.length), 4000);
    return () => clearInterval(t);
  }, [sliderImages.length]);

  return (
    <section id="services" className="py-24 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-12 text-neutral-900">Nos Services <span className="text-red-600">Experts</span></h2>
          {services.map((s) => (
            <div key={s.id} className="flex gap-6 p-8 bg-white border border-gray-200 group hover:border-red-600 transition-all shadow-sm">
              <div className="w-16 h-16 bg-neutral-900 flex items-center justify-center group-hover:bg-red-600 transition-colors">
                <s.icon className="text-white" size={30} />
              </div>
              <div>
                {/* CHANGEMENT : Titre de service en rouge au survol */}
                <h3 className="text-xl font-black uppercase mb-2 group-hover:text-red-600 transition-colors">{s.title}</h3>
                <div className="grid grid-cols-2 gap-2 text-[10px] font-bold text-gray-500 uppercase">
                  {s.items.map(i => <span key={i} className="flex items-center gap-2"><CheckCircle2 size={12} className="text-red-600"/> {i}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:col-span-5 bg-neutral-900 p-0 shadow-2xl border-t-8 border-red-600">
          <div className="relative h-64 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div key={currentImg} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0">
                <Image src={sliderImages[currentImg]} alt="Projet" fill className="object-cover grayscale" />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="p-10 text-white">
            <h3 className="text-2xl font-black uppercase mb-4 tracking-tighter text-red-600">Prêt à bâtir ?</h3>
            {/* CHANGEMENT : Texte descriptif passé en rouge léger pour le style */}
            <p className="text-xs text-red-500 font-bold uppercase tracking-widest mb-8 leading-loose">Nous analysons vos plans techniques et remettons un devis sous 48H.</p>
            <button className="w-full bg-red-600 py-5 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-red-600 transition-all">Contactez-nous</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function ConstructionApp() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <Services />
    </main>
  );
}