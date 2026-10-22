'use client';

import React from 'react';
import type { MenuCategory, MenuItem } from '@/lib/menu-data';
import { ProductCard } from '@/components/ProductCard';
import {
  Flame,
  Layers,
  Sparkles,
  GlassWater,
  CakeSlice,
  Pizza,
  Sandwich,
  Utensils,
  Disc,
  ChefHat,
  ChevronRight,
} from 'lucide-react';

interface MenuSectionProps {
  category: MenuCategory;
  items: MenuItem[];
}

export function MenuSection({ category, items }: MenuSectionProps) {
  // Map category icons
  const getIcon = (name: string) => {
    switch (name) {
      case 'Flame':
        return <Flame className="w-5 h-5 text-[#C8102E]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#FBBF24]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#F59E0B]" />;
      case 'GlassWater':
        return <GlassWater className="w-5 h-5 text-sky-400" />;
      case 'CakeSlice':
        return <CakeSlice className="w-5 h-5 text-pink-400" />;
      case 'Pizza':
        return <Pizza className="w-5 h-5 text-[#C8102E]" />;
      case 'Sandwich':
        return <Sandwich className="w-5 h-5 text-[#FBBF24]" />;
      case 'Utensils':
        return <Utensils className="w-5 h-5 text-[#C8102E]" />;
      case 'Disc':
        return <Disc className="w-5 h-5 text-[#F59E0B]" />;
      case 'ChefHat':
        return <ChefHat className="w-5 h-5 text-[#C8102E]" />;
      default:
        return <Utensils className="w-5 h-5 text-[#C8102E]" />;
    }
  };

  if (items.length === 0) return null;

  // Check if items have subcategories (e.g. Pizza Sauce Rouge vs Pizza Sauce Blanche)
  const subcategories = Array.from(
    new Set(items.map((i) => i.subcategory).filter(Boolean))
  ) as string[];

  return (
    <section
      id={`section-${category.id}`}
      className="scroll-mt-36 pt-8 pb-10 border-b border-[var(--border-color)] last:border-b-0"
      aria-labelledby={`heading-${category.id}`}
    >
      {/* Category Section Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] shadow-xs">
              {getIcon(category.iconName)}
            </div>
            <div>
              <h2
                id={`heading-${category.id}`}
                className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[var(--text-main)] font-heading"
              >
                {category.name}
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-0.5 max-w-xl">
                {category.description}
              </p>
            </div>
          </div>

          <span className="text-xs font-bold px-3 py-1 rounded-full bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-secondary)] font-heading shadow-xs">
            {items.length} {items.length > 1 ? 'options' : 'option'}
          </span>
        </div>
      </div>

      {/* If subcategories exist (e.g. Pizza Sauce Rouge & Pizza Sauce Blanche) */}
      {subcategories.length > 0 ? (
        <div className="space-y-8">
          {subcategories.map((subcat) => {
            const subcatItems = items.filter((i) => i.subcategory === subcat);
            return (
              <div key={subcat} className="space-y-4">
                <div className="flex items-center gap-2 pb-1.5 border-b border-[var(--border-color)]">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#C8102E]" />
                  <h3 className="text-base sm:text-lg font-black uppercase tracking-wider text-[var(--text-main)] font-heading">
                    {subcat}
                  </h3>
                  <span className="text-xs text-[var(--text-muted)] font-medium ml-auto">
                    {subcatItems.length} recettes
                  </span>
                </div>

                {/* 2-column responsive layout matching the hand-drawn sketch */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {subcatItems.map((item) => (
                    <ProductCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Regular single category grid (2 columns matching sketch) */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </section>
  );
}
