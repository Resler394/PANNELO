'use client';

import React, { useEffect, useRef } from 'react';
import type { MenuCategory } from '@/lib/menu-data';
import type { Theme } from '@/hooks/use-theme';
import { X, Sun, Moon } from 'lucide-react';
import Image from 'next/image';

interface SideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  categories: MenuCategory[];
  activeCategoryId: string;
  onSelectCategory: (id: string) => void;
  theme: Theme;
  toggleTheme: () => void;
}

export function SideDrawer({
  isOpen,
  onClose,
  categories,
  activeCategoryId,
  onSelectCategory,
  theme,
  toggleTheme,
}: SideDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex" role="dialog" aria-modal="true" aria-label="Menu de navigation rapide">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel (with iPhone safe-area insets) */}
      <div
        ref={drawerRef}
        className="relative w-full max-w-xs sm:max-w-sm bg-[var(--bg-surface)] text-[var(--text-main)] h-full shadow-2xl flex flex-col z-10 border-r border-[var(--border-color)] animate-in slide-in-from-left duration-200 safe-top"
      >
        {/* Drawer Header */}
        <div className="p-4 border-b border-[var(--border-color)] flex items-center justify-between bg-[var(--bg-surface-elevated)]">
          <div className="flex items-center gap-3">
            <div className="relative w-28 h-8">
              <Image
                src="/assets/pannello_logo_hero.png"
                alt="PANNELLO"
                fill
                sizes="112px"
                className="object-contain drop-shadow-xs"
              />
            </div>
            <div>
              <span className="block font-black text-xs uppercase tracking-wider text-[var(--brand-yellow)] font-heading">
                TASTE THE BEST
              </span>
              <span className="block text-[10px] text-[var(--text-secondary)]">
                Menu Numérique QR
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer le menu"
            className="flex items-center justify-center w-11 h-11 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-main)] hover:bg-[var(--bg-surface)] border border-transparent hover:border-[var(--border-color)] active:scale-90 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Categories Navigation Links with 44px Touch Targets */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-1 no-scrollbar">
          <div className="px-2 py-1.5 text-[11px] font-black uppercase tracking-wider text-[var(--text-muted)] font-heading">
            Toutes les catégories
          </div>
          {categories.map((cat) => {
            const isActive = activeCategoryId === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  onSelectCategory(cat.id);
                  onClose();
                }}
                className={`w-full min-h-[44px] flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-bold transition-all text-left cursor-pointer active:scale-[0.98] ${
                  isActive
                    ? 'bg-[#C8102E] text-white shadow-xs'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-main)] hover:bg-[var(--bg-surface-elevated)]'
                }`}
              >
                <span className="flex items-center gap-2.5 font-heading">
                  <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-[#FBBF24]' : 'bg-[var(--brand-red)]/50'}`} />
                  {cat.name}
                </span>
                <span className="text-xs opacity-75 font-mono">{cat.tabLabel}</span>
              </button>
            );
          })}

          {/* Theme Settings Section */}
          <div className="pt-5 mt-5 border-t border-[var(--border-color)]">
            <div className="px-2 py-1 text-[11px] font-black uppercase tracking-wider text-[var(--text-muted)] font-heading mb-2">
              Préférence d&apos;affichage
            </div>
            <button
              type="button"
              onClick={toggleTheme}
              className="w-full min-h-[48px] flex items-center justify-between p-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface-elevated)] hover:bg-[var(--bg-surface)] active:scale-[0.98] transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3">
                {theme === 'dark' ? (
                  <Moon className="w-5 h-5 text-[#FBBF24]" />
                ) : (
                  <Sun className="w-5 h-5 text-[#C8102E]" />
                )}
                <div className="text-left">
                  <div className="text-xs font-bold text-[var(--text-main)]">
                    {theme === 'dark' ? 'Mode Sombre Actif' : 'Mode Clair Actif'}
                  </div>
                  <div className="text-[11px] text-[var(--text-muted)]">
                    Cliquez pour basculer
                  </div>
                </div>
              </div>
              <span className="text-xs font-bold px-2 py-1 rounded bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-color)]">
                {theme === 'dark' ? 'Sombre' : 'Clair'}
              </span>
            </button>
          </div>
        </div>

        {/* Drawer Footer with iPhone Home Indicator Safe Area */}
        <div className="p-4 border-t border-[var(--border-color)] bg-[var(--bg-surface-elevated)] text-xs text-[var(--text-muted)] space-y-1 safe-bottom">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-[var(--text-secondary)]">Devise : Dinar Algérien (DA)</span>
            <span className="inline-flex items-center gap-1 text-[10px] bg-emerald-500/10 text-emerald-500 px-1.5 py-0.5 rounded font-mono font-bold">
              ● Ouvert
            </span>
          </div>
          <p className="text-[11px] leading-tight text-[var(--text-muted)] pt-0.5">
            Scannez le code QR sur votre table pour consulter la carte instantanément.
          </p>
        </div>
      </div>
    </div>
  );
}
