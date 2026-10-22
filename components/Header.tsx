'use client';

import React from 'react';
import { Menu, Sun, Moon } from 'lucide-react';
import type { Theme } from '@/hooks/use-theme';
import Image from 'next/image';

interface HeaderProps {
  onOpenDrawer: () => void;
  theme: Theme;
  toggleTheme: () => void;
  mounted: boolean;
}

export function Header({ onOpenDrawer, theme, toggleTheme, mounted }: HeaderProps) {
  return (
    <header className="w-full bg-[var(--header-bg)] backdrop-blur-md border-b border-[var(--border-color)] transition-colors duration-200 safe-top">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 h-18 sm:h-20 grid grid-cols-[52px_1fr_52px] sm:grid-cols-[64px_1fr_64px] items-center">
        {/* LEFT: Hamburger Menu Button (iOS 44x44px minimum touch target) */}
        <div className="flex items-center justify-start">
          <button
            type="button"
            onClick={onOpenDrawer}
            aria-label="Ouvrir le menu de navigation et catégories"
            className="flex items-center justify-center w-11 h-11 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] active:scale-95 transition-all cursor-pointer text-[var(--text-main)] shadow-xs"
          >
            <Menu className="w-5 h-5 text-[var(--text-main)]" strokeWidth={2.3} />
          </button>
        </div>

        {/* CENTER: PANNELLO Prominent Logo (Mathematically Centered, clamp(180px, 50vw, 240px) on mobile) */}
        <div className="flex items-center justify-center text-center">
          <a
            href="#"
            className="group relative flex flex-col items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-yellow)] rounded-lg px-2 py-0.5 animate-logo-entrance"
            aria-label="PANNELLO - Taste The Best Accueil"
          >
            {/* Ambient Red Glow Layer directly behind the centerpiece logo */}
            <div
              className="absolute inset-0 -inset-x-4 bg-[radial-gradient(ellipse_at_center,rgba(200,16,46,0.35)_0%,rgba(200,16,46,0.12)_55%,transparent_75%)] blur-lg -z-10 opacity-80 group-hover:opacity-100 transition-opacity animate-glow-pulse pointer-events-none"
              aria-hidden="true"
            />

            {/* High-Resolution Cropped Logo (Retina-optimized, zero empty margins) */}
            <div className="relative w-[clamp(180px,49vw,236px)] sm:w-[250px] md:w-[270px] aspect-[290/74] flex items-center justify-center">
              <Image
                src="/assets/pannello_logo_hero.png"
                alt="PANNELLO - TASTE THE BEST"
                fill
                priority
                sizes="(max-width: 640px) 240px, 270px"
                className={`object-contain transition-transform duration-200 group-hover:scale-[1.03] ${
                  theme === 'light'
                    ? 'drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]'
                    : 'drop-shadow-[0_2px_10px_rgba(200,16,46,0.45)]'
                }`}
              />
            </div>
          </a>
        </div>

        {/* RIGHT: Theme Toggle (Dark / Light) with 44x44px minimum touch target */}
        <div className="flex items-center justify-end">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre'}
            className="flex items-center justify-center w-11 h-11 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] active:scale-95 transition-all cursor-pointer shadow-xs"
          >
            {mounted ? (
              theme === 'dark' ? (
                <Sun className="w-5 h-5 text-[#FBBF24] transition-transform hover:rotate-45" strokeWidth={2.2} />
              ) : (
                <Moon className="w-5 h-5 text-[#C8102E] transition-transform hover:-rotate-12" strokeWidth={2.2} />
              )
            ) : (
              <div className="w-5 h-5 rounded-full bg-zinc-700/30 animate-pulse" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
