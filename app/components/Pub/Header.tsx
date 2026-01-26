"use client";

import { Menu, X, Phone, Clock, Mail, MapPin } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import pic from "./pic.jpeg"; 

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false); 
    const [showContactCard, setShowContactCard] = useState(false);
    const contactRef = useRef<HTMLDivElement>(null);

    const PHONE_DISPLAY = "+212 662-188772";
    const PHONE_HREF = "tel:+212662188772";
    const EMAIL = "contact@tourtra.ma";

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Fermer la carte contact si on clique à l'extérieur
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (contactRef.current && !contactRef.current.contains(event.target as Node)) {
                setShowContactCard(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Liens mis à jour (Services supprimé)
    const navLinks = [
        { name: 'Accueil', href: '/' },
        { name: 'Réalisations', href: '#realisations' },
        { name: 'A Propos', href: '#apropos' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 font-sans">
            {/* --- TOP BAR --- */}
            <div className={`bg-neutral-900 text-white transition-all duration-300 ${isScrolled ? 'h-0 opacity-0' : 'py-2 opacity-100'}`}>
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em]">
                    <span className="flex items-center gap-2 italic opacity-80 border-r border-white/10 pr-4">
                        <Clock size={12} className="text-red-600"/> HORAIRES: LUN - SAM / 08:00 - 18:00
                    </span>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-red-600 transition-colors">FB</a>
                        <a href="#" className="hover:text-red-600 transition-colors">LN</a>
                    </div>
                </div>
            </div>

            {/* --- MAIN NAVIGATION --- */}
            <nav className={`bg-white transition-all duration-300 ${isScrolled ? 'shadow-lg py-3' : 'border-b border-gray-100 py-6'}`}>
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    
                    {/* LOGO */}
                    <a href="/" className="flex items-center gap-4">
                        <img 
                            src={pic.src} 
                            alt="TourTra Logo" 
                            className={`transition-all duration-300 object-contain ${isScrolled ? 'h-10' : 'h-14'}`}
                        />
                        <div className="hidden md:block border-l border-gray-200 pl-4">
                            <h1 className="text-2xl font-black text-neutral-900 leading-none tracking-tighter uppercase">
                                TOUR<span className="text-red-600">TRA</span>
                            </h1>
                            <p className="text-[9px] font-bold text-gray-400 tracking-[0.4em] uppercase mt-1">Construction & Ingénierie</p>
                        </div>
                    </a>

                    {/* MENU BUREAU */}
                    <div className="hidden lg:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <a 
                                key={link.name} 
                                href={link.href} 
                                className="text-[12px] font-bold text-neutral-800 uppercase tracking-widest hover:text-red-600 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        
                        {/* CONTACT TRIGGER */}
                        <div className="relative" ref={contactRef}>
                            <button 
                                onClick={() => setShowContactCard(!showContactCard)}
                                className={`text-[12px] font-bold uppercase tracking-widest transition-colors ${showContactCard ? 'text-red-600' : 'text-neutral-800 hover:text-red-600'}`}
                            >
                                Contact
                            </button>

                            {/* CONTACT CARD (Apparaît au clic) */}
                            {showContactCard && (
                                <div className="absolute top-full right-0 mt-6 w-72 bg-white border-t-4 border-red-600 shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-6 z-50">
                                    <h4 className="text-neutral-900 font-black text-sm uppercase mb-6 tracking-tighter">Nos Coordonnées</h4>
                                    <div className="space-y-6">
                                        <a href={PHONE_HREF} className="flex items-center gap-4 group">
                                            <div className="bg-red-600 p-2 text-white"><Phone size={16}/></div>
                                            <div>
                                                <p className="text-[9px] font-bold text-neutral-400 uppercase">Téléphone</p>
                                                <p className="text-xs font-black text-neutral-900 group-hover:text-red-600">{PHONE_DISPLAY}</p>
                                            </div>
                                        </a>
                                        <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 group">
                                            <div className="bg-neutral-900 p-2 text-white"><Mail size={16}/></div>
                                            <div>
                                                <p className="text-[9px] font-bold text-neutral-400 uppercase">Email</p>
                                                <p className="text-xs font-black text-neutral-900 group-hover:text-red-600">{EMAIL}</p>
                                            </div>
                                        </a>
                                        <div className="flex items-center gap-4">
                                            <div className="bg-neutral-100 p-2 text-neutral-400"><MapPin size={16}/></div>
                                            <div>
                                                <p className="text-[9px] font-bold text-neutral-400 uppercase">Siège Social</p>
                                                <p className="text-xs font-black text-neutral-900">Casablanca, Maroc</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* CTA FINAL */}
                    <div className="hidden lg:block">
                        <a href="#devis" className="bg-red-600 text-white px-10 py-4 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-neutral-900 transition-all shadow-md">
                            Demander un Devis
                        </a>
                    </div>

                    {/* BOUTON MOBILE */}
                    <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-neutral-900">
                        {isOpen ? <X size={30} /> : <Menu size={30} />}
                    </button>
                </div>
            </nav>

            {/* MENU MOBILE */}
            <div className={`lg:hidden fixed inset-0 bg-white z-[60] transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-8 h-full flex flex-col">
                    <div className="flex justify-between items-center mb-12">
                        <img src={pic.src} alt="Logo" className="h-10" />
                        <X size={35} onClick={() => setIsOpen(false)} />
                    </div>
                    <div className="flex flex-col gap-8">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="text-3xl font-black uppercase text-neutral-900" onClick={() => setIsOpen(false)}>
                                {link.name}
                            </a>
                        ))}
                        <div className="pt-6 border-t border-gray-100 space-y-6">
                            <p className="text-xs font-black text-red-600 uppercase tracking-widest">Contact Direct</p>
                            <a href={PHONE_HREF} className="block text-xl font-black text-neutral-900">{PHONE_DISPLAY}</a>
                            <a href={`mailto:${EMAIL}`} className="block text-xl font-black text-neutral-900">{EMAIL}</a>
                        </div>
                        <a href="#devis" className="mt-auto bg-red-600 text-white p-5 text-center font-black uppercase tracking-widest" onClick={() => setIsOpen(false)}>
                            Demander un Devis
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;