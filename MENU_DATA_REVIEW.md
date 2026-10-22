# PANNELLO — MENU DATA REVIEW DOCUMENT
**Status:** Initial Audit & Extraction Completed  
**Source References Provided:**
- `image_a81f0c54.png`: Original PANNELLO Logo Artwork with tagline "TASTE THE BEST"
- `image_69fcd23d.png`: High-contrast geometric grid background (light grid on dark)
- `image_cd5fa94a.png`: Hand-drawn architecture sketch (Header [Menu | Centered Logo | Theme], adjacent rectangular Category navigation tabs, 2-column card grid)
- `image_1d180d73.png`: Printed Menu Page 1 (Contains Pizza Sauce Rouge, Pizza Sauce Blanche, Tacos, Tombik, Calzon, Sandwichs)

---

## 1. Verified & Fully Grounded Content (Page 1)

The following items have been verified 100% against the printed menu reference:

### Pizza Sauce Rouge (All with Mini | Normal | Mega sizes)
1. **Pizza Margherita**: 350 | 500 | 1800 DA (Sauce tomate - Cheddar - Basilic - Huile d'olive)
2. **Pizza 3 Cheese**: 450 | 700 | 2100 DA (Sauce tomate - Cheddar - Camembert - Fromage chef)
3. **Pizza Chicken (poulet)**: 450 | 650 | 2100 DA (Sauce tomate - Cheddar - Poulet)
4. **Pizza Beef (viande)**: 400 | 700 | 2000 DA (Sauce tomate - Cheddar - Viande hachée)
5. **Pizza Pepperoni**: 400 | 700 | 2000 DA (Sauce tomate - Cheddar - Pepperoni) — *Image matched to authentic pizza photo*
6. **Pizza Smoky Chicken**: 400 | 700 | 2000 DA (Sauce tomate - Cheddar - Poulet fumé)
7. **Pizza Tuna Pop**: 450 | 650 | 2100 DA (Sauce tomate - Cheddar - Thon)
8. **Pizza Mexicana**: 350 | 550 | 1800 DA (Sauce tomate piquante - Cheddar - Olive noire - Poivre)
9. **Pizza Végétarien**: 400 | 600 | 2000 DA (Sauce tomate - Cheddar - Maïs - Champignon - Oignon)

### Pizza Sauce Blanche (All with Mini | Normal | Mega sizes)
1. **Pizza Cheese Lover**: 550 | 750 | 2200 DA (Sauce blanche - Cheddar - Gruyère - Camembert - Fromage Chef)
2. **Pizza Smoky Saumon**: 900 | 1200 | 4500 DA (Sauce blanche - Cheddar - Saumon fumé)
3. **Pizza Shrimp (crevette)**: 700 | 1100 | 4000 DA (Sauce blanche - Cheddar - Crevette)
4. **Pizza Mushroom**: 400 | 600 | 2000 DA (Sauce blanche - Cheddar - Champignon)
5. **Pizza Panello Royal**: 600 | 1100 | 3500 DA (Sauce blanche - Cheddar - Gruyère - Viande hachée - Poulet)
6. **Pizza Panello Signature**: 900 | 1600 | 3500 DA (Sauce blanche ou tomate - Cheddar - Viande hachée - Champignons sautés - Gruyère)

### Tacos (All with M | L | XL sizes)
1. **Tacos Chicken**: 500 | 700 | 900 DA (Poulet - Frites - Sauce fromagère - Cheddar) — *Image matched to authentic tacos platter photo*
2. **Tacos Beef**: 500 | 700 | 900 DA (Viande - Frites - Sauce fromagère - Cheddar)
3. **Tacos Crispy**: 550 | 750 | 950 DA (Poulet crispy - Frites - Sauce fromagère - Cheddar)
4. **Tacos Mix**: 500 | 700 | 900 DA (Poulet - Viande - Frites - Cheddar - Sauce fromagère)
5. **Tacos Gratiné**: 650 | 850 | 1050 DA
- **Suppléments Tacos**:
  - Gruyère: 200 DA
  - Camembert: 100 DA
  - Oignon caramélisé: 50 DA

### Tombik
1. **Tombik Chicken**: 550 DA (Poulet - Frites - Œuf - Gruyère) — *Image matched to authentic tombik photo*
2. **Tombik Beef**: 550 DA (Viande - Frites - Œuf - Gruyère - Sauce Fromage)
3. **Tombik Crispy**: 550 DA (Crispy - Frites - Sauce Fromage - Gruyère)

### Sandwichs
1. **Panny**: 350 DA (Viande - Frites - Salade - Tomate - Fromage - Sauce Pannello)
2. **Chicky**: 350 DA (Poulet mariné - Frites - Salade - Tomate - Fromage - Sauce Pannello)
3. **Mixte**: 450 DA (Poulet - Viande - Sauce Fromage - Frites)
- **Choix de Pain**: Pain Brioché ou Pain Matlou3 (artisanal)
- **Suppléments Sandwichs**:
  - Gruyère: 150 DA
  - Cheddar: 150 DA
  - Camembert: 100 DA
  - Œuf: 50 DA

---

## 2. Items Requiring Confirmation or Missing Reference Assets

### A. Missing Asset: Printed Menu Page 2
The prompt specifies 10 categories, of which the following 5 are traditionally printed on the reverse / second page:
1. **Smash Burger**
2. **Pocket**
3. **Fries**
4. **Drinks / Boissons**
5. **Sweets**

*Note on upload:* The workspace received two copies of Page 1 (`image_1d180d73.png`), but Page 2 was not included in the payload. Per project instructions, we have:
- Explicitly identified the missing asset.
- Populated these sections with standard PANNELLO-branded items (Smash Classic, Double Cheese, Pocket Poulet/Viande, Frites Maison/Cheddar, Sodas, Mojitos, Jus Naturel, Crêpes Nutella/Spéculoos, Pancakes).
- Flagged every single item in these 5 categories with `needsReview: true` and a clear badge in the UI so the restaurant owner can confirm and update prices immediately.

### B. Calzon Pricing
- **Calzon**: The base ingredients ("Sauce tomate – Cheddar") and choice of proteins ("Viande – Poulet – Poulet mariné – Poulet fumé – 3 Fromage – Thon") are legible.
- The single base price was not printed as a single legible number. An initial standard price of `500 DA` has been applied and flagged with `needsReview: true` for restaurant owner confirmation.

### C. Photography Matching
- **Pizza, Tacos, Tombik, Calzon**: Real food photography extracted directly from the restaurant menu artwork.
- **Other items**: Display a clean, branded SVG/icon placeholder with category badging until verified photos for Burgers, Pockets, Fries, Drinks, and Crêpes are uploaded by the restaurant team.
