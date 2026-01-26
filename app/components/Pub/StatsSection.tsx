"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ThumbsUp, Briefcase, TrendingUp, HardHat } from 'lucide-react';

const STATS_DATA = [
    {
        icon: <Briefcase size={32} />,
        value: "+150",
        label: "PROJETS RÉALISÉS",
        sublabel: "Résidentiel & Commercial à travers le Royaume"
    },
    {
        icon: <Clock size={32} />,
        value: "98%",
        label: "RESPECT DES DÉLAIS",
        sublabel: "Livraisons contractuelles garanties par nos ingénieurs"
    },
    {
        icon: <ThumbsUp size={32} />,
        value: "100%",
        label: "SATISFACTION CLIENT",
        sublabel: "Conformité stricte aux normes de sécurité en vigueur"
    },
];

const StatsSection = () => (
    <section className="py-24 bg-gray-50 border-y border-gray-200 font-sans">
        <div className="max-w-7xl mx-auto px-6">
            
            {/* HEADER SECTION - Style Corporate 2018 */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                <div className="max-w-2xl">
                    <span className="flex items-center gap-2 text-red-600 font-black uppercase tracking-[0.3em] text-xs mb-4">
                        <TrendingUp size={16} /> Performance & Rigueur
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-neutral-900">
                        Des chiffres qui bâtissent <br/>
                        <span className="text-red-600">la confiance.</span>
                    </h2>
                </div>
                <div className="h-1 bg-neutral-900 w-24 hidden md:block mb-4"></div>
            </div>

            {/* GRID - Blocs massifs et angulaires */}
            <div className="grid md:grid-cols-3 gap-0 border-4 border-neutral-900 bg-white shadow-2xl">
                {STATS_DATA.map((stat, index) => (
                    <div 
                        key={index} 
                        className="relative p-12 flex flex-col items-center text-center border-b md:border-b-0 md:border-r last:border-0 border-gray-200 group hover:bg-neutral-900 transition-all duration-500"
                    >
                        {/* Icon - Carré et solide */}
                        <div className="w-20 h-20 bg-red-600 text-white flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                            {stat.icon}
                        </div>
                        
                        {/* Value - Massive */}
                        <div className="text-6xl font-black text-neutral-900 mb-2 tracking-tighter group-hover:text-white transition-colors">
                            {stat.value}
                        </div>
                        
                        {/* Label - Style Ingénierie */}
                        <div className="text-red-600 font-black text-sm uppercase tracking-widest mb-4">
                            {stat.label}
                        </div>
                        
                        <p className="text-gray-500 text-xs font-bold uppercase tracking-tight leading-relaxed group-hover:text-gray-400">
                            {stat.sublabel}
                        </p>

                        {/* Barre décorative basse */}
                        <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-red-600 group-hover:w-full transition-all duration-500"></div>
                    </div>
                ))}
            </div>

            {/* FOOTER STATS - Texte discret de certification */}
            <div className="mt-12 flex justify-center items-center gap-4 text-gray-400">
                <HardHat size={16} />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">
            
                </span>
            </div>
        </div>
    </section>
);

export default StatsSection;
