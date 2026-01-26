"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone, Clock, Mail, MapPin } from "lucide-react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false); 

    const PHONE_DISPLAY = "+212 662-188772";
    const PHONE_HREF = "tel:+212662188772";
    const EMAIL = "contact@tourtra.ma";

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Accueil', href: '/' },
        {
            name: 'Nos Services',
            dropdown: [
                { name: 'Gros Œuvre & Structure', href: '#gros-oeuvre' },
                { name: 'Finitions & Intérieur', href: '#finitions' },
                { name: 'Réseaux (Elec/Plomberie)', href: '#reseaux' },
                { name: 'Aménagements Extérieurs', href: '#exterieur' }
            ]
        },
        { name: 'Réalisations', href: '#realisations' },
        { name: 'A Propos', href: '#apropos' },
        {
            name: 'Contact',
            dropdown: [
                { name: `Tél: ${PHONE_DISPLAY}`, href: PHONE_HREF, icon: <Phone size={14} className="text-red-600"/> },
                { name: `Email: ${EMAIL}`, href: `mailto:${EMAIL}`, icon: <Mail size={14} className="text-red-600"/> },
                { name: 'Casablanca, Maroc', href: '#map', icon: <MapPin size={14} className="text-red-600"/> }
            ]
        },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 font-sans">
            {/* --- TOP BAR --- */}
            <div className={`bg-neutral-900 text-white transition-all duration-300 overflow-hidden ${isScrolled ? 'h-0 opacity-0' : 'py-2 opacity-100'}`}>
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em]">
                    <span className="flex items-center gap-2 italic opacity-80 border-r border-white/10 pr-4">
                        <Clock size={12} className="text-red-600"/> HORAIRES: LUN - SAM / 08:00 - 18:00
                    </span>
                    <div className="flex gap-4">
                        <span className="lowercase opacity-50 font-normal">Suivez-nous:</span>
                        <a href="#" className="hover:text-red-600 transition-colors">FB</a>
                        <a href="#" className="hover:text-red-600 transition-colors">LN</a>
                    </div>
                </div>
            </div>

            {/* --- MAIN NAVIGATION --- */}
            <nav className={`bg-white transition-all duration-300 ${isScrolled ? 'shadow-xl py-3' : 'border-b border-gray-100 py-5'}`}>
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    
                    {/* LOGO AREA */}
                    <a href="/" className="flex items-center gap-3 md:gap-4 group">
                        <div className={`relative transition-all duration-300 ${isScrolled ? 'h-10 w-10' : 'h-14 w-14'}`}>
                            <Image 
                                src="/pic.jpeg" // Looking directly into the public folder
                                alt="Tourtora Logo" 
                                fill
                                priority
                                className="object-contain"
                                sizes="(max-width: 768px) 40px, 56px"
                            />
                        </div>
                        <div className="hidden sm:block border-l border-gray-200 pl-4">
                            <h1 className="text-xl md:text-2xl font-black text-neutral-900 leading-none tracking-tighter uppercase">
                                TOUR<span className="text-red-600 transition-colors group-hover:text-neutral-900">TRA</span>
                            </h1>
                            <p className="text-[8px] md:text-[9px] font-bold text-gray-400 tracking-[0.3em] uppercase mt-1">Construction & Ingénierie</p>
                        </div>
                    </a>

                    {/* DESKTOP MENU */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group py-2">
                                <a 
                                    href={link.href || "#"} 
                                    className="flex items-center gap-1 text-[11px] font-extrabold text-neutral-800 uppercase tracking-widest hover:text-red-600 transition-colors"
                                >
                                    {link.name}
                                    {link.dropdown && <ChevronDown size={12} className="group-hover:rotate-180 transition-transform duration-300"/>}
                                </a>

                                {link.dropdown && (
                                    <div className="absolute top-full left-0 pt-4 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 z-50">
                                        <div className="w-64 bg-white border-t-4 border-red-600 shadow-2xl py-2">
                                            {link.dropdown.map((item, i) => (
                                                <a 
                                                    key={i} 
                                                    href={item.href} 
                                                    className="flex items-center gap-3 px-6 py-3 text-[10px] font-bold text-neutral-600 uppercase hover:bg-red-50 hover:text-red-600 transition-all"
                                                >
                                                    {"icon" in item && item.icon}
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* ACTIONS */}
                    <div className="flex items-center gap-4">
                        <a href="#devis" className="hidden md:block bg-red-600 text-white px-8 py-3 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-neutral-900 transition-all shadow-lg hover:-translate-y-0.5 active:translate-y-0">
                            Demander un Devis
                        </a>
                        
                        {/* MOBILE TOGGLE */}
                        <button 
                            onClick={() => setIsOpen(!isOpen)} 
                            className="lg:hidden p-2 text-neutral-900 hover:bg-gray-100 transition-colors"
                            aria-label="Menu"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* MOBILE OVERLAY MENU */}
            <div className={`lg:hidden fixed inset-0 bg-white z-100 transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-6 h-full flex flex-col">
                    <div className="flex justify-between items-center mb-10">
                        <div className="relative h-10 w-10">
                            <Image src="/pic.jpeg" alt="Logo" fill className="object-contain" />
                        </div>
                        <button onClick={() => setIsOpen(false)} className="p-2">
                            <X size={32} />
                        </button>
                    </div>
                    
                    <div className="flex flex-col gap-4 overflow-y-auto">
                        {navLinks.map((link) => (
                            <div key={link.name} className="border-b border-gray-50 pb-4">
                                <a 
                                    href={link.href || "#"} 
                                    className="text-xl font-black uppercase text-neutral-900 flex justify-between items-center"
                                    onClick={() => !link.dropdown && setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                                {link.dropdown && (
                                    <div className="mt-4 grid grid-cols-1 gap-3 pl-4 border-l-2 border-red-600">
                                        {link.dropdown.map((sub, i) => (
                                            <a 
                                                key={i} 
                                                href={sub.href} 
                                                className="text-gray-500 font-bold uppercase text-xs py-1" 
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {sub.name}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    
                    <div className="mt-auto pt-10">
                        <a href="#devis" className="block w-full bg-red-600 text-white p-5 text-center font-black uppercase tracking-widest shadow-xl">
                            Demander un Devis
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;