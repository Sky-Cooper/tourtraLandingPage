"use client";

import React from "react";
import { Phone, Send, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

// Ensure this path matches your project structure
import pic from "./pic.jpeg"; 

const Footer = () => {

  return (
    <footer className="bg-neutral-950 text-white shadow-inner shadow-black/50 relative pt-16 md:pt-24 overflow-hidden">
      
      {/* Wave Separator at the Top */}
      <div className="absolute top-0 left-0 right-0 h-[100px] -translate-y-full z-10">
        <svg viewBox="0 0 1440 100" className="w-full h-full" preserveAspectRatio="none">
            {/* Vague du dessus */}
            <motion.path 
                fill="#262626" // neutral-800
                fillOpacity="1"
                d="M0,50 C300,0 600,100 900,50 C1150,0 1300,100 1440,50 L1440,100 L0,100Z" 
                animate={{ 
                    d: [
                        "M0,50 C300,0 600,100 900,50 C1150,0 1300,100 1440,50 L1440,100 L0,100Z", 
                        "M0,55 C300,5 600,95 900,55 C1150,5 1300,95 1440,55 L1440,100 L0,100Z", 
                        "M0,50 C300,0 600,100 900,50 C1150,0 1300,100 1440,50 L1440,100 L0,100Z"
                    ], 
                    transition: { duration: 10, repeat: Infinity, ease: "easeInOut" } 
                }} 
            />
            {/* Vague du dessous */}
            <motion.path 
                fill="#0a0a0a" // neutral-950
                fillOpacity="1"
                d="M0,60 C300,10 600,110 900,60 C1150,10 1300,110 1440,60 L1440,100 L0,100Z" 
                animate={{ 
                    d: [
                        "M0,60 C300,10 600,110 900,60 C1150,10 1300,110 1440,60 L1440,100 L0,100Z", 
                        "M0,65 C300,15 600,105 900,65 C1150,15 1300,105 1440,65 L1440,100 L0,100Z" ,
                        "M0,60 C300,10 600,110 900,60 C1150,10 1300,110 1440,60 L1440,100 L0,100Z"
                    ], 
                    transition: { duration: 12, repeat: Infinity, ease: "easeInOut" } 
                }} 
            />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 text-center md:text-left">
          
          {/* Col 1: Logo & Info */}
          <div className="lg:col-span-2">
            <img
              src={pic.src }
              alt="Logo Tourtra"
              className="mx-auto md:mx-0 rounded-lg shadow-xl mb-4 w-[100px] h-[100px] object-cover border-2 border-neutral-800"
            />
            <h3 className="text-2xl font-black text-white uppercase tracking-wider">
              TOUR <span className="text-red-600">TRA</span>
            </h3>
            <p className="text-neutral-400 mt-4 max-w-sm leading-relaxed">
              Votre partenaire de confiance pour la construction et l'aménagement. 
            </p>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="font-bold text-lg text-white uppercase tracking-wider border-b-2 border-red-600 inline-block pb-1 mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              <li><a href="#gros-oeuvre" className="text-neutral-400 hover:text-red-500 transition-colors duration-200">Gros Œuvre & Béton</a></li>
              <li><a href="#finitions" className="text-neutral-400 hover:text-red-500 transition-colors duration-200">Finitions & Peinture</a></li>
              <li><a href="#reseaux" className="text-neutral-400 hover:text-red-500 transition-colors duration-200">Réseaux & Plomberie</a></li>
              <li><a href="#exterieur" className="text-neutral-400 hover:text-red-500 transition-colors duration-200">Aménagements Extérieurs</a></li>
            </ul>
          </div>

          {/* Col 3: Entreprise */}
          <div>
            <h4 className="font-bold text-lg text-white uppercase tracking-wider border-b-2 border-red-600 inline-block pb-1 mb-5">
              Entreprise
            </h4>
            <ul className="space-y-3">
              <li><a href="#realisations" className="text-neutral-400 hover:text-red-500 transition-colors duration-200">Nos Réalisations</a></li>
              <li><a href="#devis" className="text-neutral-400 hover:text-red-500 transition-colors duration-200">Demander un Devis</a></li>
              <li><a href="#apropos" className="text-neutral-400 hover:text-red-500 transition-colors duration-200">A Propos</a></li>
              <li><a href="#contact" className="text-neutral-400 hover:text-red-500 transition-colors duration-200">Contactez-nous</a></li>
            </ul>
          </div>
          
          {/* Col 4: Form */}
          <div className="lg:col-span-1">
            <h4 className="font-bold text-lg text-white uppercase tracking-wider">Contact Rapide</h4>
            <p className="text-neutral-400 mt-5 text-sm">
                Un projet en tête ? Laissez-nous votre email pour être recontacté.
            </p>
            <form className="mt-4 flex flex-col space-y-3">
                <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
                    <input 
                        type="email" 
                        placeholder="Votre Email" 
                        className="w-full py-3 pl-10 pr-4 bg-neutral-900 border border-neutral-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition duration-200"
                    />
                </div>
                <button
                    type="submit"
                    className="flex items-center justify-center bg-red-600 text-white font-bold py-3 rounded-lg shadow-lg hover:bg-red-700 transition duration-300 transform hover:scale-[1.02]"
                >
                    Être Recontacté <Send className="ml-2 w-4 h-4" />
                </button>
            </form>
          </div>
        </div>

        {/* --- MODIFIED SECTION: CONTACT BAR (Replaces Social Icons) --- */}
        <div className="mt-12 pt-8 border-t border-neutral-900">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
              
              {/* Phone Button */}
              <a href="tel:+212662188772" className="flex items-center gap-3 px-6 py-3 bg-neutral-900 rounded-full border border-neutral-800 hover:border-red-600 hover:shadow-lg hover:shadow-red-900/20 transition-all duration-300 group">
                <div className="p-2 bg-neutral-800 rounded-full group-hover:bg-red-600 transition-colors">
                     <Phone size={20} className="text-white" />
                </div>
                <span className="font-bold tracking-wide text-lg text-neutral-300 group-hover:text-white">+212 662-188772</span>
              </a>

              {/* Email Button */}
              <a href="mailto:tourtra.sarl@email.com" className="flex items-center gap-3 px-6 py-3 bg-neutral-900 rounded-full border border-neutral-800 hover:border-red-600 hover:shadow-lg hover:shadow-red-900/20 transition-all duration-300 group">
                 <div className="p-2 bg-neutral-800 rounded-full group-hover:bg-red-600 transition-colors">
                    <Mail size={20} className="text-white" />
                 </div>
                <span className="font-bold tracking-wide text-lg text-neutral-300 group-hover:text-white">tourtra.sarl@email.com</span>
              </a>

            </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 text-center text-neutral-600 relative">
            <div className="absolute top-0 left-1/4 right-1/4 h-px bg-linear-to-r from-transparent via-red-900/50 to-transparent" />
            <p className="mt-4 text-sm">
                © {new Date().getFullYear()} TOUR TRA Construction. Tous droits réservés.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;