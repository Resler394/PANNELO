export interface ProductOption {
  label: string; // e.g. "Mini", "Normal", "Mega" or "M", "L", "XL"
  price: number;
}

export interface Supplement {
  name: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  category: string; // Matches category id
  subcategory?: string; // e.g. "Sauce Rouge", "Sauce Blanche"
  description?: string;
  price?: number | null; // For single price items
  currency: 'DA';
  image?: string | null;
  options?: ProductOption[]; // For multi-size items
  supplements?: Supplement[];
  breadOptions?: string[]; // e.g. ["Brioché", "Matlou3"]
  fillingChoices?: string[]; // e.g. ["Viande", "Poulet", "Poulet mariné", "Poulet fumé", "3 Fromage", "Thon"]
  spicy?: boolean;
  vegetarian?: boolean;
  popular?: boolean;
  needsReview?: boolean;
  reviewNote?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  tabLabel: string;
  description: string;
  iconName: string;
  itemsCount?: number;
}

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'smash-burger',
    name: 'Smash Burger',
    tabLabel: 'BURGERS',
    description: 'Steaks pur bœuf écrasés à la plancha, croûte caramélisée et pains briochés toastés',
    iconName: 'Flame',
  },
  {
    id: 'pocket',
    name: 'Pocket',
    tabLabel: 'POCKET',
    description: 'Pains pita farcis de viandes grillées juteuses, sauces signature et garnitures fraîches',
    iconName: 'Layers',
  },
  {
    id: 'fries',
    name: 'Fries',
    tabLabel: 'FRIES',
    description: 'Frites croustillantes dorées à point, portions simples ou généreusement nappées',
    iconName: 'Sparkles',
  },
  {
    id: 'drinks',
    name: 'Drinks / Boissons',
    tabLabel: 'DRINKS',
    description: 'Sodas frais, mojitos fruités maison, jus naturels pressés et eaux minérales',
    iconName: 'GlassWater',
  },
  {
    id: 'sweets',
    name: 'Sweets',
    tabLabel: 'SWEETS',
    description: 'Crêpes sucrées crousti-moelleuses, pancakes dorés et garnitures gourmandes',
    iconName: 'CakeSlice',
  },
  {
    id: 'pizza',
    name: 'Pizza',
    tabLabel: 'PIZZA',
    description: 'Pizzas artisanales cuites au four, pâte croustillante, sauce rouge ou sauce blanche',
    iconName: 'Pizza',
  },
  {
    id: 'sandwichs',
    name: 'Sandwichs',
    tabLabel: 'SANDWICHS',
    description: 'Pains briochés ou matlou3 traditionnels garnis de viandes savoureuses',
    iconName: 'Sandwich',
  },
  {
    id: 'tacos',
    name: 'Tacos',
    tabLabel: 'TACOS',
    description: 'Tacos français garnis de frites dorées, sauce fromagère onctueuse et cheddar',
    iconName: 'Utensils',
  },
  {
    id: 'tombik',
    name: 'Tombik',
    tabLabel: 'TOMBIK',
    description: 'Pain pita turc rond et aéré, garni de viandes dorées, frites, œuf et gruyère',
    iconName: 'Disc',
  },
  {
    id: 'calzon',
    name: 'Calzon',
    tabLabel: 'CALZON',
    description: 'Chaussons de pâte à pizza dorés au four, cœur fondant sauce tomate & cheddar',
    iconName: 'ChefHat',
  },
];

export const MENU_ITEMS: MenuItem[] = [
  // ==========================================
  // 1. SMASH BURGER
  // ==========================================
  {
    id: 'smash-classic',
    name: 'Classic Smash',
    category: 'smash-burger',
    description: 'Steak pur bœuf écrasé croustillant, cheddar américain fondu, oignons grillés, cornichons et sauce burger maison dans un pain brioché.',
    price: 450,
    currency: 'DA',
    popular: true,
    needsReview: true,
    reviewNote: 'Page 2 du menu papier non fournie. Recette et prix estimés en attente de validation.',
  },
  {
    id: 'smash-double',
    name: 'Double Cheese Smash',
    category: 'smash-burger',
    description: 'Deux steaks de bœuf smashés, double tranche de cheddar fondant, oignons caramélisés et sauce signature Pannello.',
    price: 650,
    currency: 'DA',
    popular: true,
    needsReview: true,
    reviewNote: 'Page 2 du menu papier non fournie. Recette et prix estimés en attente de validation.',
  },
  {
    id: 'smash-bacon-bbq',
    name: 'Smoky Bacon Smash',
    category: 'smash-burger',
    description: 'Steak smashé croustillant, tranches de bacon de bœuf grillé, cheddar affiné et sauce barbecue fumée.',
    price: 600,
    currency: 'DA',
    needsReview: true,
    reviewNote: 'Page 2 du menu papier non fournie. Recette et prix estimés en attente de validation.',
  },
  {
    id: 'smash-crispy-chicken',
    name: 'Crispy Chicken Burger',
    category: 'smash-burger',
    description: 'Filet de poulet pané extra croustillant, salade iceberg fraîche, cheddar fondant et mayonnaise épicée.',
    price: 500,
    currency: 'DA',
    needsReview: true,
    reviewNote: 'Page 2 du menu papier non fournie. Recette et prix estimés en attente de validation.',
  },

  // ==========================================
  // 2. POCKET
  // ==========================================
  {
    id: 'pocket-chicken',
    name: 'Pocket Chicken',
    category: 'pocket',
    description: 'Pain pita frais garni de poulet mariné grillé, frites dorées, sauce fromagère et salade croquante.',
    price: 400,
    currency: 'DA',
    needsReview: true,
    reviewNote: 'Page 2 du menu papier non fournie. Recette et prix estimés en attente de validation.',
  },
  {
    id: 'pocket-beef',
    name: 'Pocket Viande Hachée',
    category: 'pocket',
    description: 'Pain pita chaud garni de viande hachée bien assaisonnée, frites, cheddar fondant et sauce Pannello.',
    price: 450,
    currency: 'DA',
    needsReview: true,
    reviewNote: 'Page 2 du menu papier non fournie. Recette et prix estimés en attente de validation.',
  },
  {
    id: 'pocket-mixte',
    name: 'Pocket Mixte',
    category: 'pocket',
    description: 'Duo généreux de poulet mariné et de viande hachée, frites, sauce fromagère onctueuse et crudités.',
    price: 500,
    currency: 'DA',
    popular: true,
    needsReview: true,
    reviewNote: 'Page 2 du menu papier non fournie. Recette et prix estimés en attente de validation.',
  },

  // ==========================================
  // 3. FRIES
  // ==========================================
  {
    id: 'fries-portion',
    name: 'Portion de Frites Maison',
    category: 'fries',
    description: 'Frites croustillantes dorées servies avec sel marin et sauce au choix.',
    price: 200,
    currency: 'DA',
    vegetarian: true,
    needsReview: true,
    reviewNote: 'Page 2 du menu papier non fournie. Prix estimé.',
  },
  {
    id: 'fries-cheddar',
    name: 'Frites Cheddar Fondant',
    category: 'fries',
    description: 'Grande portion de frites croustillantes généreusement nappées de sauce cheddar chaude.',
    price: 350,
    currency: 'DA',
    vegetarian: true,
    needsReview: true,
    reviewNote: 'Page 2 du menu papier non fournie. Prix estimé.',
  },
  {
    id: 'fries-loaded',
    name: 'Loaded Fries Pannello',
    category: 'fries',
    description: 'Frites maison garnies de dés de poulet mariné, sauce fromagère, sauce cheddar et oignons frits croquants.',
    price: 550,
    currency: 'DA',
    popular: true,
    needsReview: true,
    reviewNote: 'Page 2 du menu papier non fournie. Prix estimé.',
  },

  // ==========================================
  // 4. DRINKS / BOISSONS
  // ==========================================
  {
    id: 'drink-soda',
    name: 'Canette Soda 33cl',
    category: 'drinks',
    description: 'Au choix : Coca-Cola, Coca Zéro, Fanta Orange, Sprite, Schweppes Citron.',
    price: 150,
    currency: 'DA',
    needsReview: true,
    reviewNote: 'Page 2 du menu papier non fournie. Prix et déclinaisons estimés.',
  },
  {
    id: 'drink-eau',
    name: 'Eau Minérale 50cl',
    category: 'drinks',
    description: 'Bouteille d\'eau minérale naturelle servie bien fraîche.',
    price: 60,
    currency: 'DA',
    needsReview: true,
    reviewNote: 'Page 2 du menu papier non fournie. Prix estimé.',
  },
  {
    id: 'drink-mojito-classic',
    name: 'Mojito Classic Citron Vert',
    category: 'drinks',
    description: 'Feuilles de menthe fraîche pilées, quartier de citron vert, sucre de canne, glace pilée et eau pétillante.',
    price: 350,
    currency: 'DA',
    popular: true,
    needsReview: true,
    reviewNote: 'Page 2 du menu papier non fournie. Déclinaisons de mojitos issues des menus de référence.',
  },
  {
    id: 'drink-mojito-fraise',
    name: 'Mojito Fraise',
    category: 'drinks',
    description: 'Purée de fraises fraîches, menthe fraîche, citron vert pressé et limonade pétillante.',
    price: 400,
    currency: 'DA',
    needsReview: true,
    reviewNote: 'Page 2 du menu papier non fournie. Déclinaison mojito.',
  },
  {
    id: 'drink-mojito-blue',
    name: 'Mojito Blue Lagoon',
    category: 'drinks',
    description: 'Saveur d\'agrumes curaçao bleu rafraîchissante, citron vert, menthe et bulles.',
    price: 400,
    currency: 'DA',
    needsReview: true,
    reviewNote: 'Page 2 du menu papier non fournie. Déclinaison mojito.',
  },
  {
    id: 'drink-jus-naturel',
    name: 'Jus de Fruits Naturel Pressé',
    category: 'drinks',
    description: 'Jus 100% pur fruit préparé à la commande : Orange fraîche, Citronnade menthe ou Fraise selon arrivage.',
    price: 300,
    currency: 'DA',
    needsReview: true,
    reviewNote: 'Page 2 du menu papier non fournie. Variantes de jus de fruits naturels.',
  },

  // ==========================================
  // 5. SWEETS
  // ==========================================
  {
    id: 'sweet-crepe-nutella',
    name: 'Crêpe Nutella Gourmande',
    category: 'sweets',
    description: 'Crêpe dorée minute, généreusement nappée de véritable pâte à tartiner Nutella.',
    price: 350,
    currency: 'DA',
    vegetarian: true,
    popular: true,
    needsReview: true,
    reviewNote: 'Page 2 du menu papier non fournie. Variantes de crêpes mentionnées dans le brief.',
  },
  {
    id: 'sweet-crepe-speculoos',
    name: 'Crêpe Lotus Spéculoos',
    category: 'sweets',
    description: 'Crêpe moelleuse nappée de crème de Spéculoos fondue et éclats de biscuits Lotus croquants.',
    price: 400,
    currency: 'DA',
    vegetarian: true,
    needsReview: true,
    reviewNote: 'Page 2 du menu papier non fournie. Variantes de crêpes mentionnées dans le brief.',
  },
  {
    id: 'sweet-pancakes',
    name: 'Trio de Pancakes Moelleux',
    category: 'sweets',
    description: '3 pancakes américains épais et dorés, coulis de chocolat noir, caramel ou sirop au choix.',
    price: 450,
    currency: 'DA',
    vegetarian: true,
    needsReview: true,
    reviewNote: 'Page 2 du menu papier non fournie. Pancakes mentionnés dans le brief.',
  },

  // ==========================================
  // 6. PIZZA — VERIFIED FROM PRINTED MENU PAGE 1
  // ==========================================
  // PIZZA SAUCE ROUGE
  {
    id: 'pizza-margherita',
    name: 'Pizza Margherita',
    category: 'pizza',
    subcategory: 'Sauce Rouge',
    description: 'Sauce tomate – Cheddar – Basilic – Huile d\'olive',
    currency: 'DA',
    options: [
      { label: 'Mini', price: 350 },
      { label: 'Normal', price: 500 },
      { label: 'Mega', price: 1800 },
    ],
    vegetarian: true,
    needsReview: false,
  },
  {
    id: 'pizza-3-cheese',
    name: 'Pizza 3 Cheese',
    category: 'pizza',
    subcategory: 'Sauce Rouge',
    description: 'Sauce tomate – Cheddar – Camembert – Fromage chef',
    currency: 'DA',
    options: [
      { label: 'Mini', price: 450 },
      { label: 'Normal', price: 700 },
      { label: 'Mega', price: 2100 },
    ],
    vegetarian: true,
    needsReview: false,
  },
  {
    id: 'pizza-chicken',
    name: 'Pizza Chicken (poulet)',
    category: 'pizza',
    subcategory: 'Sauce Rouge',
    description: 'Sauce tomate – Cheddar – Poulet',
    currency: 'DA',
    options: [
      { label: 'Mini', price: 450 },
      { label: 'Normal', price: 650 },
      { label: 'Mega', price: 2100 },
    ],
    needsReview: false,
  },
  {
    id: 'pizza-beef',
    name: 'Pizza Beef (viande)',
    category: 'pizza',
    subcategory: 'Sauce Rouge',
    description: 'Sauce tomate – Cheddar – Viande hachée',
    currency: 'DA',
    options: [
      { label: 'Mini', price: 400 },
      { label: 'Normal', price: 700 },
      { label: 'Mega', price: 2000 },
    ],
    needsReview: false,
  },
  {
    id: 'pizza-pepperoni',
    name: 'Pizza Pepperoni',
    category: 'pizza',
    subcategory: 'Sauce Rouge',
    description: 'Sauce tomate – Cheddar – Pepperoni',
    currency: 'DA',
    image: '/assets/food_pizza.png',
    options: [
      { label: 'Mini', price: 400 },
      { label: 'Normal', price: 700 },
      { label: 'Mega', price: 2000 },
    ],
    popular: true,
    needsReview: false,
  },
  {
    id: 'pizza-smoky-chicken',
    name: 'Pizza Smoky Chicken',
    category: 'pizza',
    subcategory: 'Sauce Rouge',
    description: 'Sauce tomate – Cheddar – Poulet fumé',
    currency: 'DA',
    options: [
      { label: 'Mini', price: 400 },
      { label: 'Normal', price: 700 },
      { label: 'Mega', price: 2000 },
    ],
    needsReview: false,
  },
  {
    id: 'pizza-tuna-pop',
    name: 'Pizza Tuna Pop',
    category: 'pizza',
    subcategory: 'Sauce Rouge',
    description: 'Sauce tomate – Cheddar – Thon',
    currency: 'DA',
    options: [
      { label: 'Mini', price: 450 },
      { label: 'Normal', price: 650 },
      { label: 'Mega', price: 2100 },
    ],
    needsReview: false,
  },
  {
    id: 'pizza-mexicana',
    name: 'Pizza Mexicana',
    category: 'pizza',
    subcategory: 'Sauce Rouge',
    description: 'Sauce tomate piquante – Cheddar – Olive noire – Poivre',
    currency: 'DA',
    options: [
      { label: 'Mini', price: 350 },
      { label: 'Normal', price: 550 },
      { label: 'Mega', price: 1800 },
    ],
    spicy: true,
    needsReview: false,
  },
  {
    id: 'pizza-vegetarien',
    name: 'Pizza Végétarien',
    category: 'pizza',
    subcategory: 'Sauce Rouge',
    description: 'Sauce tomate – Cheddar – Maïs – Champignon – Oignon',
    currency: 'DA',
    options: [
      { label: 'Mini', price: 400 },
      { label: 'Normal', price: 600 },
      { label: 'Mega', price: 2000 },
    ],
    vegetarian: true,
    needsReview: false,
  },

  // PIZZA SAUCE BLANCHE
  {
    id: 'pizza-cheese-lover',
    name: 'Pizza Cheese Lover',
    category: 'pizza',
    subcategory: 'Sauce Blanche',
    description: 'Sauce blanche – Cheddar – Gruyère – Camembert – Fromage Chef',
    currency: 'DA',
    options: [
      { label: 'Mini', price: 550 },
      { label: 'Normal', price: 750 },
      { label: 'Mega', price: 2200 },
    ],
    vegetarian: true,
    needsReview: false,
  },
  {
    id: 'pizza-smoky-saumon',
    name: 'Pizza Smoky Saumon',
    category: 'pizza',
    subcategory: 'Sauce Blanche',
    description: 'Sauce blanche – Cheddar – Saumon fumé',
    currency: 'DA',
    options: [
      { label: 'Mini', price: 900 },
      { label: 'Normal', price: 1200 },
      { label: 'Mega', price: 4500 },
    ],
    needsReview: false,
  },
  {
    id: 'pizza-shrimp',
    name: 'Pizza Shrimp (crevette)',
    category: 'pizza',
    subcategory: 'Sauce Blanche',
    description: 'Sauce blanche – Cheddar – Crevette',
    currency: 'DA',
    options: [
      { label: 'Mini', price: 700 },
      { label: 'Normal', price: 1100 },
      { label: 'Mega', price: 4000 },
    ],
    needsReview: false,
  },
  {
    id: 'pizza-mushroom',
    name: 'Pizza Mushroom',
    category: 'pizza',
    subcategory: 'Sauce Blanche',
    description: 'Sauce blanche – Cheddar – Champignon',
    currency: 'DA',
    options: [
      { label: 'Mini', price: 400 },
      { label: 'Normal', price: 600 },
      { label: 'Mega', price: 2000 },
    ],
    vegetarian: true,
    needsReview: false,
  },
  {
    id: 'pizza-panello-royal',
    name: 'Pizza Panello Royal',
    category: 'pizza',
    subcategory: 'Sauce Blanche',
    description: 'Sauce blanche – Cheddar – Gruyère – Viande hachée – Poulet',
    currency: 'DA',
    options: [
      { label: 'Mini', price: 600 },
      { label: 'Normal', price: 1100 },
      { label: 'Mega', price: 3500 },
    ],
    popular: true,
    needsReview: false,
  },
  {
    id: 'pizza-panello-signature',
    name: 'Pizza Panello Signature',
    category: 'pizza',
    subcategory: 'Sauce Blanche',
    description: 'Sauce blanche ou tomate – Cheddar – Viande hachée – Champignons sautés – Gruyère',
    currency: 'DA',
    options: [
      { label: 'Mini', price: 900 },
      { label: 'Normal', price: 1600 },
      { label: 'Mega', price: 3500 },
    ],
    popular: true,
    needsReview: false,
  },

  // ==========================================
  // 7. SANDWICHS — VERIFIED FROM PRINTED MENU PAGE 1
  // ==========================================
  {
    id: 'sandwich-panny',
    name: 'Panny',
    category: 'sandwichs',
    description: 'Viande – Frites – Salade – Tomate – Fromage – Sauce Pannello',
    price: 350,
    currency: 'DA',
    breadOptions: ['Pain Brioché', 'Pain Matlou3'],
    supplements: [
      { name: 'Gruyère', price: 150 },
      { name: 'Cheddar', price: 150 },
      { name: 'Camembert', price: 100 },
      { name: 'Œuf', price: 50 },
    ],
    popular: true,
    needsReview: false,
  },
  {
    id: 'sandwich-chicky',
    name: 'Chicky',
    category: 'sandwichs',
    description: 'Poulet mariné – Frites – Salade – Tomate – Fromage – Sauce Pannello',
    price: 350,
    currency: 'DA',
    breadOptions: ['Pain Brioché', 'Pain Matlou3'],
    supplements: [
      { name: 'Gruyère', price: 150 },
      { name: 'Cheddar', price: 150 },
      { name: 'Camembert', price: 100 },
      { name: 'Œuf', price: 50 },
    ],
    popular: true,
    needsReview: false,
  },
  {
    id: 'sandwich-mixte',
    name: 'Mixte',
    category: 'sandwichs',
    description: 'Poulet – Viande – Sauce Fromage – Frites',
    price: 450,
    currency: 'DA',
    breadOptions: ['Pain Brioché', 'Pain Matlou3'],
    supplements: [
      { name: 'Gruyère', price: 150 },
      { name: 'Cheddar', price: 150 },
      { name: 'Camembert', price: 100 },
      { name: 'Œuf', price: 50 },
    ],
    needsReview: false,
  },

  // ==========================================
  // 8. TACOS — VERIFIED FROM PRINTED MENU PAGE 1
  // ==========================================
  {
    id: 'tacos-chicken',
    name: 'Tacos Chicken',
    category: 'tacos',
    description: 'Poulet – Frites – Sauce fromagère – Cheddar',
    currency: 'DA',
    image: '/assets/food_tacos.png',
    options: [
      { label: 'M', price: 500 },
      { label: 'L', price: 700 },
      { label: 'XL', price: 900 },
    ],
    supplements: [
      { name: 'Gruyère', price: 200 },
      { name: 'Camembert', price: 100 },
      { name: 'Oignon caramélisé', price: 50 },
    ],
    popular: true,
    needsReview: false,
  },
  {
    id: 'tacos-beef',
    name: 'Tacos Beef',
    category: 'tacos',
    description: 'Viande – Frites – Sauce fromagère – Cheddar',
    currency: 'DA',
    options: [
      { label: 'M', price: 500 },
      { label: 'L', price: 700 },
      { label: 'XL', price: 900 },
    ],
    supplements: [
      { name: 'Gruyère', price: 200 },
      { name: 'Camembert', price: 100 },
      { name: 'Oignon caramélisé', price: 50 },
    ],
    needsReview: false,
  },
  {
    id: 'tacos-crispy',
    name: 'Tacos Crispy',
    category: 'tacos',
    description: 'Poulet crispy – Frites – Sauce fromagère – Cheddar',
    currency: 'DA',
    options: [
      { label: 'M', price: 550 },
      { label: 'L', price: 750 },
      { label: 'XL', price: 950 },
    ],
    supplements: [
      { name: 'Gruyère', price: 200 },
      { name: 'Camembert', price: 100 },
      { name: 'Oignon caramélisé', price: 50 },
    ],
    popular: true,
    needsReview: false,
  },
  {
    id: 'tacos-mix',
    name: 'Tacos Mix',
    category: 'tacos',
    description: 'Poulet – Viande – Frites – Cheddar – Sauce fromagère',
    currency: 'DA',
    options: [
      { label: 'M', price: 500 },
      { label: 'L', price: 700 },
      { label: 'XL', price: 900 },
    ],
    supplements: [
      { name: 'Gruyère', price: 200 },
      { name: 'Camembert', price: 100 },
      { name: 'Oignon caramélisé', price: 50 },
    ],
    needsReview: false,
  },
  {
    id: 'tacos-gratine',
    name: 'Tacos Gratiné',
    category: 'tacos',
    description: 'Garni de vos viandes préférées, frites, sauce fromagère, et généreusement gratiné au four.',
    currency: 'DA',
    options: [
      { label: 'M', price: 650 },
      { label: 'L', price: 850 },
      { label: 'XL', price: 1050 },
    ],
    supplements: [
      { name: 'Gruyère', price: 200 },
      { name: 'Camembert', price: 100 },
      { name: 'Oignon caramélisé', price: 50 },
    ],
    popular: true,
    needsReview: false,
  },

  // ==========================================
  // 9. TOMBIK — VERIFIED FROM PRINTED MENU PAGE 1
  // ==========================================
  {
    id: 'tombik-chicken',
    name: 'Tombik Chicken',
    category: 'tombik',
    description: 'Poulet – Frites – Œuf – Gruyère',
    price: 550,
    currency: 'DA',
    image: '/assets/food_tombik.png',
    popular: true,
    needsReview: false,
  },
  {
    id: 'tombik-beef',
    name: 'Tombik Beef',
    category: 'tombik',
    description: 'Viande – Frites – Œuf – Gruyère – Sauce Fromage',
    price: 550,
    currency: 'DA',
    needsReview: false,
  },
  {
    id: 'tombik-crispy',
    name: 'Tombik Crispy',
    category: 'tombik',
    description: 'Crispy – Frites – Sauce Fromage – Gruyère',
    price: 550,
    currency: 'DA',
    popular: true,
    needsReview: false,
  },

  // ==========================================
  // 10. CALZON — VERIFIED FROM PRINTED MENU PAGE 1
  // ==========================================
  {
    id: 'calzon-pannello',
    name: 'Calzon Pannello',
    category: 'calzon',
    description: 'Sauce tomate – Cheddar. Chausson de pâte à pizza croustillant et doré au four.',
    price: 500,
    currency: 'DA',
    image: '/assets/food_calzon.png',
    fillingChoices: [
      'Viande hachée',
      'Poulet',
      'Poulet mariné',
      'Poulet fumé',
      '3 Fromages',
      'Thon',
    ],
    popular: true,
    needsReview: true,
    reviewNote: 'La garniture est au choix (Viande, Poulet, Poulet mariné, Poulet fumé, 3 Fromage, Thon). Le prix exact unique n\'est pas spécifié distinctement sur la page 1 du menu papier.',
  },
];
