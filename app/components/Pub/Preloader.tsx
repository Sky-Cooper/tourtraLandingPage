"use client";
import React, { useEffect, useMemo, useState } from "react";
import {
    HardHat,      // Casque
    Hammer,       // Gros oeuvre
    Ruler,        // Architecture
    Truck,        // Logistique
    PaintBucket,  // Finition
    BrickWall,    // Construction
    Wrench,       // Technique
    ClipboardCheck, // Gestion
    Building2     // Résultat
} from "lucide-react";

interface ConstructionPreloaderProps {
    onFinish?: () => void;
    className?: string;
    durationMs?: number; 
}

// --- Icons for the falling drops (Construction Theme) ---
const ICONS = [
    HardHat,
    Hammer,
    Ruler,
    Truck,
    PaintBucket,
    BrickWall,
    Wrench,
    ClipboardCheck,
    Building2
];

const random = (min: number, max: number) =>
    Math.random() * (max - min) + min;

const ConstructionPreloader: React.FC<ConstructionPreloaderProps> = ({
    onFinish,
    className = "",
    durationMs = 4000,
}) => {
    const [visible, setVisible] = useState(true);
    const [fadingOut, setFadingOut] = useState(false);

    // Prepare randomized icon drops
    const drops = useMemo(() => {
        return Array.from({ length: 24 }).map((_, i) => ({
            id: i,
            Icon: ICONS[i % ICONS.length],
            left: `${random(2, 98)}%`,
            size: Math.round(random(20, 34)),
            duration: +random(3, 7).toFixed(2) + "s",
            delay: +random(0, 3).toFixed(2) + "s",
            rotate: Math.round(random(-45, 45)) + "deg", // Moins de rotation pour les objets lourds
            opacity: random(0.3, 0.6).toFixed(2), // Opacité ajustée pour fond blanc
        }));
    }, []);

    useEffect(() => {
        const t1 = setTimeout(() => {
            setFadingOut(true);
            const fadeDuration = 600; 
            const t2 = setTimeout(() => {
                setVisible(false);
                onFinish?.();
            }, fadeDuration);
            return () => clearTimeout(t2);
        }, durationMs);

        return () => clearTimeout(t1);
    }, [durationMs, onFinish]);

    if (!visible) return null;

    return (
        <div
            className={`fixed inset-0 z-9999 flex items-center justify-center overflow-hidden font-sans ${className} ${
                fadingOut ? "preloader-fade-out" : "preloader-fade-in"
            }`}
            aria-hidden="true"
        >
            <style>{`
                /* Container backgrounds */
                .preloader-fade-in { opacity: 1; transition: opacity 600ms ease; }
                .preloader-fade-out { opacity: 0; transition: opacity 600ms ease; pointer-events: none; }

                /* Clean, Architect-style backdrop */
                .preloader-backdrop {
                    position: absolute;
                    inset: 0;
                    background: #ffffff; /* White background */
                    /* Technical Grid Pattern */
                    background-image: 
                        radial-gradient(600px 600px at 50% 50%, rgba(220, 38, 38, 0.03), transparent 70%), /* Subtle Red Glow */
                        linear-gradient(to right, #00000008 1px, transparent 1px),
                        linear-gradient(to bottom, #00000008 1px, transparent 1px);
                    background-size: 40px 40px, 40px 40px;
                }

                .preloader-center {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 24px;
                    z-index: 20;
                }

                /* Central Plate (White with Shadow) */
                .logo-plate {
                    width: 140px;
                    height: 140px;
                    border-radius: 24px;
                    background: #ffffff;
                    border: 1px solid #e5e5e5;
                    box-shadow: 0 20px 40px -10px rgba(220, 38, 38, 0.15); /* Red shadow */
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transform-origin: center;
                    animation: logoFloat 3.8s ease-in-out infinite;
                }

                @keyframes logoFloat {
                    0% { transform: translateY(0) scale(1); }
                    50% { transform: translateY(-12px) scale(1.02); }
                    100% { transform: translateY(0) scale(1); }
                }

                /* Falling icons */
                @keyframes fall {
                    0% { transform: translateY(-60px) rotate(0deg); opacity: 0; }
                    10% { opacity: 0.6; }
                    100% { transform: translateY(110vh) rotate(var(--r)); opacity: 0; }
                }
                .drop {
                    position: absolute;
                    top: -80px;
                    will-change: transform, opacity;
                }

                /* Blueprint Drawing Line */
                .blueprint-line-container {
                    width: 300px;
                    height: 60px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                }
                .blueprint-path {
                    fill: none;
                    stroke: #dc2626; /* Red 600 */
                    stroke-width: 3;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-dasharray: 100;
                    stroke-dashoffset: 100;
                    animation: drawPath 2s cubic-bezier(0.25, 1, 0.5, 1) infinite;
                }
                @keyframes drawPath {
                    0% { stroke-dashoffset: 100; opacity: 0.2; }
                    40% { stroke-dashoffset: 0; opacity: 1; }
                    80% { stroke-dashoffset: -100; opacity: 0.2; }
                    100% { stroke-dashoffset: -100; opacity: 0.2; }
                }

                /* Pulsing Icon (Middle of line) */
                .pulse-icon {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 48px;
                    height: 48px;
                    border-radius: 999px;
                    background: #ffffff;
                    border: 2px solid #fca5a5; /* Red 300 */
                    box-shadow: 0 0 15px rgba(220, 38, 38, 0.2);
                    transform-origin: center;
                    animation: pulseGlow 1.8s ease-out infinite;
                }
                @keyframes pulseGlow {
                    0% { transform: scale(1); border-color: #fca5a5; }
                    50% { transform: scale(1.1); border-color: #dc2626; }
                    100% { transform: scale(1); border-color: #fca5a5; }
                }

                /* Loading Dots */
                .loading-dots { display:flex; gap:8px; margin-top:10px; }
                .dot {
                    width:10px; height:10px; border-radius:999px; 
                    background: #dc2626; /* Red */
                    transform-origin:center;
                    animation: dotPulse 1s infinite;
                    opacity: 0.8;
                }
                .dot:nth-child(2) { animation-delay: 0.16s; }
                .dot:nth-child(3) { animation-delay: 0.32s; }
                @keyframes dotPulse {
                    0% { transform: translateY(0); opacity:0.4 }
                    50% { transform: translateY(-6px); opacity:1 }
                    100% { transform: translateY(0); opacity:0.4 }
                }

                .text-loading {
                    color: #171717; /* Neutral 900 */
                    font-weight: 800;
                    font-size: 16px;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                }
            `}</style>

            <div className="preloader-backdrop" />

            {/* Falling Construction Icons */}
            {drops.map((d) => {
                const { id, Icon, left, size, duration, delay, rotate, opacity } = d;
                return (
                    <div
                        key={id}
                        className="drop"
                        style={{
                            left,
                            // @ts-ignore
                            "--r": rotate,
                            animationName: "fall",
                            animationDuration: duration,
                            animationDelay: delay,
                            animationTimingFunction: "linear",
                        }}
                    >
                        <div
                            style={{
                                transform: `rotate(${rotate})`,
                                opacity,
                                width: size + 10,
                                height: size + 10,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: 12,
                                background: "rgba(0,0,0,0.03)", // Gris très léger
                                border: "1px solid rgba(0,0,0,0.05)",
                            }}
                        >
                            <Icon size={size} style={{ color: "#525252" }} /> {/* Neutral 600 icons */}
                        </div>
                    </div>
                );
            })}

            {/* Center content */}
            <div className="preloader-center">
                <div className="logo-plate" role="img" aria-label="Logo BTP">
                    {/* Logo Placeholder - Carré Noir avec accent Rouge */}
                    <div className="relative w-20 h-20 bg-neutral-900 rounded-xl flex items-center justify-center shadow-lg overflow-hidden group">
                        <div className="absolute inset-0 bg-red-600/10 group-hover:bg-red-600/20 transition-colors" />
                        <Building2 size={40} className="text-white relative z-10"/>
                        {/* Petit accent rouge coin */}
                        <div className="absolute top-0 right-0 w-6 h-6 bg-red-600 rounded-bl-xl" />
                    </div>
                </div>

                {/* Blueprint Drawing Animation */}
                <div className="blueprint-line-container" aria-hidden={false}>
                    <svg className="w-full h-full" viewBox="0 0 300 60" preserveAspectRatio="xMidYMid meet">
                        {/* Ligne de fond (Gris clair - pointillés) */}
                        <path
                            d="M 10 30 Q 80 10, 150 30 T 290 30"
                            stroke="#e5e5e5" 
                            strokeWidth={2}
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeDasharray="4 4"
                        />
                        
                        {/* Ligne animée (Rouge) */}
                        <path
                            className="blueprint-path"
                            d="M 10 30 Q 80 10, 150 30 T 290 30"
                        />
                    </svg>

                    {/* Central Icon */}
                    <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}>
                        <div className="pulse-icon" aria-hidden>
                             <Hammer size={22} className="text-red-600" />
                        </div>
                    </div>
                </div>

                <div style={{ textAlign: "center" }}>
                    <div className="text-loading">
                        PRÉPARATION DU CHANTIER
                    </div>

                    <div className="loading-dots" role="status" aria-live="polite" style={{ justifyContent: "center" }}>
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConstructionPreloader;