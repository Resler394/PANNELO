'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useTheme } from '@/hooks/use-theme';
import { Header } from '@/components/Header';
import { CategoryNavigation } from '@/components/CategoryNavigation';
import { SearchBar } from '@/components/SearchBar';
import { MenuSection } from '@/components/MenuSection';
import { SideDrawer } from '@/components/SideDrawer';
import { ProductCard } from '@/components/ProductCard';
import { AmbientBackground } from '@/components/AmbientBackground';
import { MENU_CATEGORIES, MENU_ITEMS } from '@/lib/menu-data';
import Image from 'next/image';
import { useScrollDirection } from '@/hooks/use-scroll-direction';
import { ArrowUp, Utensils, AlertCircle, FileText, Download } from 'lucide-react';

export default function PannelloMenuPage() {
  const { theme, toggleTheme, mounted } = useTheme();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState<string>('smash-burger');
  const [searchQuery, setSearchQuery] = useState('');
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [isProgrammaticScrolling, setIsProgrammaticScrolling] = useState(false);
  const isUserClickingRef = useRef(false);

  // Direction-aware smart navigation hook
  const { isVisible: isNavVisible, setIsVisible: setNavVisible } = useScrollDirection({
    thresholdDown: 14,
    thresholdUp: 8,
    topThreshold: 45,
    disabled: isProgrammaticScrolling,
  });

  // Normalize search helper (removes accents and punctuation)
  const normalizeText = (text: string) => {
    return text
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  };

  // Filter products based on search query
  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const query = normalizeText(searchQuery.trim());
    return MENU_ITEMS.filter((item) => {
      const matchName = normalizeText(item.name).includes(query);
      const matchDesc = item.description ? normalizeText(item.description).includes(query) : false;
      const matchSub = item.subcategory ? normalizeText(item.subcategory).includes(query) : false;
      const matchCat = normalizeText(item.category).includes(query);
      return matchName || matchDesc || matchSub || matchCat;
    });
  }, [searchQuery]);

  // IntersectionObserver to update active category tab as user scrolls
  useEffect(() => {
    if (searchQuery.trim()) return; // Don't track sections during active search

    const sectionElements = MENU_CATEGORIES.map((cat) =>
      document.getElementById(`section-${cat.id}`)
    ).filter(Boolean) as HTMLElement[];

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isUserClickingRef.current) return;

        // Find the topmost visible section
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          visibleEntries.sort(
            (a, b) => Math.abs(a.boundingClientRect.top - 130) - Math.abs(b.boundingClientRect.top - 130)
          );
          const activeSectionId = visibleEntries[0].target.id.replace('section-', '');
          setActiveCategoryId(activeSectionId);
        }
      },
      {
        rootMargin: '-130px 0px -40% 0px',
        threshold: [0, 0.25, 0.5],
      }
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      sectionElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [searchQuery]);

  // Handle category tab click with smooth scroll
  const handleSelectCategory = (categoryId: string) => {
    setActiveCategoryId(categoryId);
    setSearchQuery(''); // Clear search to show full section
    isUserClickingRef.current = true;
    setIsProgrammaticScrolling(true);
    setNavVisible(true);

    const targetEl = document.getElementById(`section-${categoryId}`);
    if (targetEl) {
      // Calculate scroll position accounting for sticky header and nav tabs (~135px)
      const yOffset = -135;
      const y = targetEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }

    setTimeout(() => {
      isUserClickingRef.current = false;
      setIsProgrammaticScrolling(false);
    }, 800);
  };

  const scrollToTop = () => {
    setIsProgrammaticScrolling(true);
    setNavVisible(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setIsProgrammaticScrolling(false);
    }, 800);
  };

  return (
    <div className="relative min-h-[100dvh] flex flex-col pannello-grid-pattern selection:bg-[#C8102E] selection:text-white overflow-x-hidden">
      {/* Subtle Red Floating Bubbles & Ambient Glow Layer (Background behind content) */}
      <AmbientBackground />

      {/* Main Content Area (Elevated above ambient glow layer) */}
      <div className="relative z-10 flex flex-col min-h-[100dvh]">
        {/* Coordinated Smart Auto-Hide Mobile Navigation (Header + Category Tabs) */}
        <div
          className={`sticky top-0 z-40 w-full smart-nav-wrapper ${
            isNavVisible
              ? 'translate-y-0 opacity-100 pointer-events-auto'
              : '-translate-y-full opacity-0 pointer-events-none md:translate-y-0 md:opacity-100 md:pointer-events-auto'
          }`}
        >
          <Header
            onOpenDrawer={() => setIsDrawerOpen(true)}
            theme={theme}
            toggleTheme={toggleTheme}
            mounted={mounted}
          />
          <CategoryNavigation
            categories={MENU_CATEGORIES}
            activeCategoryId={activeCategoryId}
            onSelectCategory={handleSelectCategory}
          />
        </div>

        {/* 3. Search Bar */}
        <div className="w-full bg-[var(--bg-main)]/85 backdrop-blur-md border-b border-[var(--border-color)]">
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            resultCount={filteredItems ? filteredItems.length : undefined}
            totalCount={MENU_ITEMS.length}
          />
        </div>

        {/* 4. Main Menu Body */}
        <main className="flex-1 max-w-6xl w-full mx-auto px-3 sm:px-6 py-4">
          {filteredItems !== null ? (
            /* Search Results View */
            <div className="py-6">
              <div className="flex items-center justify-between mb-6 pb-2 border-b border-[var(--border-color)]">
                <div>
                  <h1 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[var(--text-main)] font-heading">
                    Résultats de recherche
                  </h1>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                    Pour « <span className="font-bold text-[var(--brand-yellow)]">{searchQuery}</span> » ({filteredItems.length} {filteredItems.length > 1 ? 'plats trouvés' : 'plat trouvé'})
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="text-xs font-bold px-3 py-1.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] active:scale-95 transition-all text-[var(--text-main)] cursor-pointer"
                >
                  Réinitialiser la carte
                </button>
              </div>

              {filteredItems.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredItems.map((item) => (
                    <ProductCard key={item.id} item={item} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 px-4 bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-xl my-6 shadow-xs">
                  <Utensils className="w-12 h-12 mx-auto text-[var(--text-muted)] mb-3 opacity-50" />
                  <h2 className="text-lg font-bold text-[var(--text-main)] mb-1">
                    Aucun plat ne correspond à votre recherche
                  </h2>
                  <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto mb-6">
                    Vérifiez l&apos;orthographe ou essayez un mot-clé plus général (ex. pizza, poulet, tacos, sauce).
                  </p>
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="px-5 py-2.5 rounded-lg bg-[#C8102E] hover:bg-[#a50d25] text-white font-bold text-sm shadow transition-all cursor-pointer font-heading active:scale-95"
                  >
                    Voir toute la carte
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Normal Category Sections View */
            <div className="space-y-4">
              {MENU_CATEGORIES.map((category) => {
                const categoryItems = MENU_ITEMS.filter((item) => item.category === category.id);
                return (
                  <MenuSection
                    key={category.id}
                    category={category}
                    items={categoryItems}
                  />
                );
              })}
            </div>
          )}
        </main>

        {/* 5. Mobile Quick Scroll To Top Floating Button (with iPhone Safe Area Insets) */}
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Retourner en haut de la page"
          className="fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom,0px))] right-5 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-[#C8102E] text-white shadow-xl hover:bg-[#a50d25] active:scale-90 transition-all cursor-pointer focus:outline-none border border-white/20"
        >
          <ArrowUp className="w-5 h-5" />
        </button>

        {/* 6. Footer with Brand Identity, Review Doc Access & iPhone Safe Area */}
        <footer className="mt-14 border-t-2 border-[var(--border-color)] bg-[var(--bg-surface)] py-10 px-4 text-center transition-colors safe-bottom">
          <div className="max-w-4xl mx-auto flex flex-col items-center justify-center space-y-4">
            <div className="relative w-40 h-11">
              <Image
                src="/assets/pannello_logo_hero.png"
                alt="PANNELLO"
                fill
                sizes="160px"
                className="object-contain drop-shadow-xs"
              />
            </div>
            <p className="text-xs font-black uppercase tracking-widest text-[var(--brand-yellow)] font-heading">
              PANNELLO — TASTE THE BEST
            </p>
            <p className="text-xs text-[var(--text-secondary)] max-w-md leading-relaxed">
              Menu numérique officiel disponible par scan de code QR en restaurant. Tous nos prix sont affichés en Dinars Algériens (DA).
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setShowReviewModal(true)}
                className="inline-flex items-center gap-1.5 text-xs text-[var(--text-muted)] hover:text-[var(--text-main)] underline underline-offset-4 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                Consulter le document d&apos;audit des données (MENU_DATA_REVIEW.md)
              </button>
              <a
                href="/pannello-digital-menu.zip"
                download="pannello-digital-menu.zip"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface-elevated)] hover:bg-[var(--brand-yellow)] hover:text-black transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                Télécharger l&apos;archive ZIP du projet
              </a>
            </div>

            <div className="text-[11px] text-[var(--text-muted)] pt-4 border-t border-[var(--border-color)] w-full">
              © {new Date().getFullYear()} PANNELLO. Tous droits réservés.
            </div>
          </div>
        </footer>

        {/* 7. Side Navigation Drawer */}
        <SideDrawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          categories={MENU_CATEGORIES}
          activeCategoryId={activeCategoryId}
          onSelectCategory={handleSelectCategory}
          theme={theme}
          toggleTheme={toggleTheme}
        />

        {/* 8. Data Audit & Review Modal */}
        {showReviewModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs" role="dialog" aria-modal="true">
            <div className="bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
              <div className="p-4 border-b border-[var(--border-color)] flex items-center justify-between bg-[var(--bg-surface-elevated)]">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-[#C8102E]" />
                  <h3 className="font-heading font-black text-sm uppercase tracking-wider text-[var(--text-main)]">
                    Audit des Données du Menu (Source: MENU_DATA_REVIEW.md)
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setShowReviewModal(false)}
                  className="text-xs font-bold px-2.5 py-1 rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] text-[var(--text-main)] active:scale-95"
                >
                  Fermer
                </button>
              </div>
              <div className="p-5 overflow-y-auto text-xs sm:text-sm text-[var(--text-secondary)] space-y-4 no-scrollbar">
                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <span className="font-bold text-emerald-300">✓ Catégories vérifiées à 100% (Menu Papier Page 1) :</span>
                  <p className="mt-1 text-xs">Pizzas Sauce Rouge (9), Pizzas Sauce Blanche (6) avec tailles Mini/Normal/Mega, Tacos (5) avec tailles M/L/XL et suppléments, Tombik (3), Sandwichs Panny/Chicky/Mixte et choix de pain Brioché/Matlou3.</p>
                </div>

                <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300">
                  <span className="font-bold text-amber-200">⚠ Sections en attente de la Page 2 du menu papier :</span>
                  <p className="mt-1 text-xs">Smash Burger, Pocket, Fries, Drinks et Sweets ont été intégrés avec la charte officielle PANNELLO et sont clairement marqués du badge « À vérifier » jusqu&apos;à confirmation des prix et recettes du restaurateur.</p>
                </div>

                <div>
                  <h4 className="font-bold text-[var(--text-main)] mb-1">Photographies Authentiques Extraites :</h4>
                  <p className="text-xs">
                    Les photos réelles des Tacos, de la Pizza Pepperoni, du Tombik et du Calzon ont été découpées directement depuis la maquette papier du restaurant pour une fidélité visuelle maximale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
