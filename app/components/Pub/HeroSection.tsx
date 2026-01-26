"use client";
import { motion } from 'framer-motion';
import {  CheckCircle2, HardHat, Construction } from 'lucide-react';
import pic4 from "./pic4.jpg";
import pic5 from "./pic6.jpg";
const HeroSection = () => {
    return (
        /* Correction : pt-32 sur mobile et pt-48 sur bureau pour ne plus cacher le badge */
        <section className="relative w-full min-h-screen flex flex-col bg-neutral-900 overflow-hidden font-sans pt-32 md:pt-48">
            
            {/* --- IMAGE DE FOND RÉELLE --- */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" 
                    alt="Chantier BTP Maroc"
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-linear-to-r from-neutral-900 via-neutral-900/80 to-transparent"></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start pb-20">
                
                {/* CONTENU TEXTE */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Badge Expertise - Maintenant bien visible */}
                    <div className="inline-flex items-center gap-3 bg-red-600 text-white px-5 py-2 text-[11px] font-black uppercase tracking-[0.2em] mb-12 shadow-xl border-l-4 border-white">
                        <HardHat size={16} /> Expertise BTP Maroc
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none uppercase mb-10 tracking-tighter">
                        Construire <br /> 
                        <span className="text-red-600">L'Excellence</span> <br />
                        Au Quotidien.
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-12 leading-relaxed border-l-4 border-red-600 pl-6">
                        Expertise en <span className="text-white font-bold underline">Gros Œuvre</span> et finitions. Nous accompagnons les projets d'envergure au Maroc avec rigueur et sécurité.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6">
                        <button className="bg-red-600 text-white px-12 py-5 text-xs font-black uppercase tracking-widest hover:bg-white hover:text-red-600 transition-all shadow-2xl">
                            Demander un devis
                        </button>
                        <div className="flex flex-col justify-center gap-1">
                            <span className="flex items-center gap-2 text-[10px] font-bold text-white uppercase tracking-widest"><CheckCircle2 size={14} className="text-red-600"/> Normes ISO 9001</span>
                            <span className="flex items-center gap-2 text-[10px] font-bold text-white uppercase tracking-widest"><CheckCircle2 size={14} className="text-red-600"/> Réponse sous 24h</span>
                        </div>
                    </div>
                </motion.div>

                {/* GRILLE MULTI-IMAGES (Style Classique 2018) */}
                <div className="hidden lg:grid grid-cols-2 gap-4 h-[600px] mt-10">
                    <div className="space-y-4">
                        <div className="h-2/3 relative group overflow-hidden border-2 border-white/10">
                            <img src={pic4.src }  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Chantier" />
                            <div className="absolute inset-0 bg-red-600/20 group-hover:bg-transparent transition-colors"></div>
                        </div>
                        <div className="h-1/3 bg-red-600 p-8 flex flex-col justify-center">
                            <Construction size={40} className="text-white mb-2" />
                            <p className="text-white font-black text-2xl uppercase">Qualité<br/>Garantie</p>
                        </div>
                    </div>
                    <div className="space-y-4 pt-16">
                        <div className="h-1/3 bg-white p-8 flex flex-col justify-center border-r-8 border-red-600">
                            <p className="text-neutral-900 font-black text-5xl tracking-tighter italic">500+</p>
                            <p className="text-neutral-500 font-bold text-[10px] uppercase tracking-widest">Projets Livrés</p>
                        </div>
                        <div className="h-2/3 relative group overflow-hidden border-2 border-white/10">
                            <img src={pic5.src } className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Architecture" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;