"use client";
import React from 'react';
import Image from 'next/image';
import { ArrowRight, ClipboardList, Hammer, Key, HardHat } from 'lucide-react';

// Imports des images locales (StaticImageData)
import pic7 from "./pic7.png";
import pic2 from "./pic3.jpg";
import pic3 from "./pic8.jpg";

const HowItWorksSection = () => {
    // Structure des étapes avec les objets images directement
    const steps = [
        {
            number: "01",
            icon: <ClipboardList size={28} />,
            title: "Étude & Devis",
            text: "Analyse technique de votre projet, plans architecturaux et estimation budgétaire détaillée sous 48h.",
            image: pic7
        },
        {
            number: "02",
            icon: <Hammer size={28} />,
            title: "Travaux & Suivi",
            text: "Démarrage du chantier avec une équipe dédiée. Gros œuvre et finitions supervisés par nos ingénieurs.",
            image: pic2
        },
        {
            number: "03",
            icon: <Key size={28} />,
            title: "Livraison Clés en Main",
            text: "Contrôle qualité rigoureux, nettoyage complet du site et remise des clés de votre bâtiment.",
            image: pic3
        },
    ];

    return (
        <section id="process" className="py-16 md:py-24 bg-gray-50 text-neutral-900 border-y border-gray-200 font-sans">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* HEADER SECTION - Responsive alignment */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-8">
                    <div className="max-w-2xl">
                        <span className="flex items-center gap-2 text-red-600 font-black uppercase tracking-[0.3em] text-xs mb-4">
                            <HardHat size={16} /> Notre Méthodologie
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight md:leading-none">
                            Votre Chantier en <br className="hidden md:block"/>
                            <span className="text-red-600">3 Étapes Simples.</span>
                        </h2>
                    </div>
                    <p className="text-gray-500 font-bold max-w-sm border-l-4 border-red-600 pl-6 text-sm uppercase tracking-wider leading-relaxed">
                        Nous garantissons une transparence totale de la conception à la remise des clés.
                    </p>
                </div>

                {/* STEPS GRID - Responsive border handling */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-200 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                    {steps.map((step, index) => (
                        <div key={index} className="group relative flex flex-col border-b md:border-b-0 md:border-r last:border-b-0 last:border-r-0 border-gray-200 overflow-hidden">
                            
                            {/* CONTENEUR IMAGE */}
                            <div className="h-64 md:h-72 overflow-hidden relative bg-neutral-800">
                                <Image 
                                    src={step.image} 
                                    alt={step.title} 
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                {/* Overlay sombre */}
                                <div className="absolute inset-0 bg-neutral-900/40 group-hover:bg-transparent transition-colors duration-500"></div>
                                
                                {/* Badge Numéro */}
                                <div className="absolute top-0 right-0 bg-red-600 text-white w-14 h-14 flex items-center justify-center font-black text-xl z-10 shadow-lg">
                                    {step.number}
                                </div>
                            </div>

                            {/* TEXT CONTENT */}
                            <div className="p-8 md:p-10 flex-1 flex flex-col">
                                <div className="bg-gray-100 text-neutral-800 w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                                    {step.icon}
                                </div>
                                <h3 className="text-2xl font-black uppercase mb-4 tracking-tighter">{step.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed font-medium mb-8">
                                    {step.text}
                                </p>
                                {/* Barre de progression décorative */}
                                <div className="w-12 h-1 bg-red-600 mt-auto opacity-30 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* FINAL CALL TO ACTION */}
                <div className="mt-12 md:mt-20 text-center">
                    <button className="w-full md:w-auto inline-flex items-center justify-center gap-4 bg-neutral-900 text-white px-8 md:px-12 py-5 md:py-6 font-black uppercase tracking-widest text-[11px] hover:bg-red-600 transition-all shadow-2xl hover:-translate-y-1">
                        Démarrer mon projet maintenant
                        <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;