"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle2, 
  Building2,
  HardHat,
  Trophy,
  Users
} from "lucide-react";
import pic9 from "./pic9.jpg";

const ConstructionHeroProfessional = () => {
  return (
    <section className="relative bg-white text-neutral-900 pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      
      {/* Background: Simple, clean grey wash at the bottom, no complex grids */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-neutral-50 -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* --- LEFT SIDE: TEXT & VALUE PROPOSITION --- */}
          <div className="w-full lg:w-1/2 text-left space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Professional Label instead of pulsing badge */}
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-red-600"></div>
                <span className="text-red-700 font-bold uppercase tracking-widest text-sm">
                  Entreprise Générale de Bâtiment
                </span>
              </div>
              
              {/* Strong, Direct Headline */}
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-neutral-900 leading-[1.1] mb-6">
                La référence pour vos <br />
                <span className="text-red-600">
                  projets d'avenir.
                </span>
              </h1>
              
              <p className="text-lg text-neutral-600 max-w-xl leading-relaxed">
                Construction, rénovation et génie civil. Nous mettons 
                <span className="font-bold text-neutral-900"> 15 ans d'expertise technique</span> et de rigueur au service de votre vision architecturale.
              </p>
            </motion.div>

            {/* Solid Feature List (Static, no bouncing) */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 text-sm font-bold text-neutral-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="flex items-center gap-3">
                <div className="bg-neutral-100 p-1 rounded-full">
                  <CheckCircle2 className="w-5 h-5 text-red-600" />
                </div>
                Respect des normes
              </div>
              <div className="flex items-center gap-3">
                 <div className="bg-neutral-100 p-1 rounded-full">
                  <CheckCircle2 className="w-5 h-5 text-red-600" />
                </div>
                Garantie décennale
              </div>
              <div className="flex items-center gap-3">
                 <div className="bg-neutral-100 p-1 rounded-full">
                  <CheckCircle2 className="w-5 h-5 text-red-600" />
                </div>
                Étude personnalisée
              </div>
            </motion.div>

            {/* Professional Buttons */}
            <motion.div 
              className="flex flex-wrap items-center gap-4 pt-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <a href="#contact" className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-md font-bold transition-colors shadow-lg shadow-red-600/20 flex items-center gap-3">
                Demander une Étude
                <ArrowRight className="w-5 h-5" />
              </a>
              
              <a href="#realisations" className="px-8 py-4 bg-white border border-neutral-300 hover:border-neutral-900 text-neutral-900 rounded-md font-bold transition-all flex items-center gap-3 hover:bg-neutral-50">
                <Building2 className="w-5 h-5" />
                Voir nos Réalisations
              </a>
            </motion.div>
          </div>

          {/* --- RIGHT SIDE: REALISTIC VISUAL (Replaces the Abstract Graph) --- */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Professional Image */}
            <div className="relative rounded-sm overflow-hidden shadow-2xl border-4 border-white">
              
              <img 
                src={pic9.src }
                alt="Chantier de construction professionnel" 
                className="w-full h-[600px] object-cover"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-60"></div>
              
              {/* "Manager Approved" Info Card - Bottom Left */}
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="bg-white p-6 shadow-lg border-l-4 border-red-600 max-w-sm">
                   <div className="flex items-center gap-4 mb-3">
                      <div className="bg-neutral-900 p-3 text-white">
                        <HardHat size={24} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Équipe qualifiée</p>
                        <p className="text-xl font-black text-neutral-900">Ingénieurs & Experts</p>
                      </div>
                   </div>
                   <p className="text-neutral-600 text-sm leading-snug">
                     Une supervision rigoureuse à chaque étape du chantier pour garantir la conformité.
                   </p>
                </div>
              </div>
            </div>

            {/* Secondary Floating Card - Top Right (Key Metrics) */}
            <motion.div 
              className="absolute -top-6 -right-6 lg:-right-12 bg-neutral-900 text-white p-6 shadow-2xl hidden md:block"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
               <div className="space-y-4">
                 <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                    <Trophy className="text-red-500 w-8 h-8" />
                    <div>
                      <span className="block text-2xl font-bold">150+</span>
                      <span className="text-xs text-neutral-400 uppercase">Projets Livrés</span>
                    </div>
                 </div>
                 <div className="flex items-center gap-4">
                    <Users className="text-red-500 w-8 h-8" />
                    <div>
                      <span className="block text-2xl font-bold">100%</span>
                      <span className="text-xs text-neutral-400 uppercase">Satisfaction Client</span>
                    </div>
                 </div>
               </div>
            </motion.div>

            {/* Decorative Dots Pattern (Subtle) */}
            <div className="absolute -z-10 top-10 -left-10 w-24 h-24 bg-[radial-gradient(#d4d4d4_2px,transparent_2px)] bg-size-[12px_12px] opacity-50"></div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ConstructionHeroProfessional;