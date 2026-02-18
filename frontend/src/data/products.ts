// import { Product } from "@/types/product";

// export const products: Product[] = [
//   // Fruits & Vegetables
//   { 
//     id: "1", 
//     name: "Mangoes - Banginapalli", 
//     category: "Fruits & Vegetables", 
//     pricePerKg: 100, 
//     image: "https://i.pinimg.com/736x/54/65/3d/54653d55fc53fc98387288e14a2e424b.jpg",
//     active: true,
//     outOfStock: false
//   },
//   { 
//     id: "2", 
//     name: "Mangoes - Dasari", 
//     category: "Fruits & Vegetables", 
//     pricePerKg: 150, 
//     image: "https://img.freepik.com/premium-photo/mango-fruit-wooden-background_55610-2298.jpg?semt=ais_hybrid&w=740&q=80",
//     active: true,
//     outOfStock: false
//   },
//   { 
//     id: "3", 
//     name: "Mangoes - Kesari", 
//     category: "Fruits & Vegetables", 
//     pricePerKg: 150, 
//     image: "https://img.freepik.com/free-photo/mango-still-life_23-2151542248.jpg?semt=ais_hybrid&w=740&q=80",
//     active: true,
//     outOfStock: false
//   },
//   { 
//     id: "4", 
//     name: "Mangoes - Himayath", 
//     category: "Fruits & Vegetables", 
//     pricePerKg: 200, 
//     image: "https://mango4s.com/cdn/shop/files/5c85d1_fb28f12112bc4ecfa4b0e7971a1a005c_mv2_converted.jpg?v=1747510869",
//     active: true,
//     outOfStock: false
//   },
//   { 
//     id: "5", 
//     name: "Mangoes - Sundari", 
//     category: "Fruits & Vegetables", 
//     pricePerKg: 150, 
//     image: "https://i.pinimg.com/474x/0f/56/9e/0f569ef854d55d74de8cd633f70a3c97.jpg",
//     active: true,
//     outOfStock: false
//   },
//   { 
//     id: "6", 
//     name: "Mangoes - Pedda Rasalu", 
//     category: "Fruits & Vegetables", 
//     pricePerKg: 150, 
//     image: "https://i.pinimg.com/736x/0d/9e/86/0d9e867464aedf62d7c9b26017a63d66.jpg",
//     active: true,
//     outOfStock: false
//   },
//   { 
//     id: "7", 
//     name: "Mangoes - Alphonso", 
//     category: "Fruits & Vegetables", 
//     pricePerKg: 200, 
//     image: "https://img.freepik.com/premium-photo/four-apples-with-yellow-red-speckled-them-are-plate_1066261-100351.jpg?semt=ais_hybrid&w=740&q=80",
//     active: true,
//     outOfStock: false
//   },
  
//   // Chicken & Eggs
//   { 
//     id: "8", 
//     name: "Brown Eggs - Farm Fresh Naatu Kodi Gudlu", 
//     category: "Chicken & Eggs", 
//     pricePerKg: null, 
//     pricePerUnit: "₹20 per piece", 
//     image: "https://static.vecteezy.com/system/resources/thumbnails/041/930/228/small_2x/ai-generated-wooden-bowl-filled-with-brown-eggs-a-close-up-view-of-a-wooden-bowl-filled-with-fresh-brown-eggs-the-eggs-are-neatly-arranged-in-the-bowl-showcasing-their-natural-colors-and-textures-png.png",
//     active: true,
//     outOfStock: false
//   },
  
//   // Natural Sweeteners
//   { 
//     id: "9", 
//     name: "Multiflower Honey", 
//     category: "Natural Sweeteners", 
//     pricePerKg: 600, 
//     image: "https://i.pinimg.com/originals/f7/a4/8f/f7a48f975e786f30f09b4c1c4d769b8a.jpg",
//     active: true,
//     outOfStock: false
//   },
//   { 
//     id: "10", 
//     name: "Putta Thene (Tree Bark Honey)", 
//     category: "Natural Sweeteners", 
//     pricePerKg: 1200, 
//     image: "https://img.freepik.com/premium-photo/fresh-honey-jar-with-warm-golden-sheen-highlighting-its-luxurious-inviting-natural-texture_1222399-54639.jpg",
//     active: true,
//     outOfStock: false
//   },
  
//   // Masala (Spices)
//   { 
//     id: "11", 
//     name: "Turmeric Powder", 
//     category: "Masala (Spices)", 
//     pricePerKg: 430, 
//     image: "https://img.freepik.com/free-photo/organic-turmeric-chili-cumin-spice-bowl-generated-by-ai_188544-8964.jpg?semt=ais_hybrid&w=740&q=80",
//     active: true,
//     outOfStock: false
//   },
//   { 
//     id: "12", 
//     name: "Red Chilli Powder", 
//     category: "Masala (Spices)", 
//     pricePerKg: 490, 
//     image: "https://static.vecteezy.com/system/resources/previews/037/899/249/large_2x/ai-generated-chilly-powder-with-red-chilly-in-clay-pots-on-white-background-free-photo.jpg",
//     active: true,
//     outOfStock: false
//   },
//   { 
//     id: "13", 
//     name: "Coriander Powder", 
//     category: "Masala (Spices)", 
//     pricePerKg: 300, 
//     image: "https://www.shutterstock.com/image-photo/coriander-powder-wooden-bowl-isolated-600nw-2414032011.jpg",
//     active: true,
//     outOfStock: false
//   },
//   { 
//     id: "14", 
//     name: "Cumin Seeds", 
//     category: "Masala (Spices)", 
//     pricePerKg: null, 
//     image: "https://t4.ftcdn.net/jpg/04/40/61/85/360_F_440618579_MNqGLkJW3fRUUX7uE5C9K3TYz1jTjkpf.jpg",
//     active: false, // Inactive: No price
//     outOfStock: false
//   },
//   { 
//     id: "15", 
//     name: "Black Pepper", 
//     category: "Masala (Spices)", 
//     pricePerKg: 1500, 
//     image: "https://static.vecteezy.com/system/resources/thumbnails/025/358/611/small_2x/stock-of-black-pepper-powder-on-the-kitchen-flat-laygraphy-generative-ai-photo.jpg",
//     active: true,
//     outOfStock: false
//   },
//   { 
//     id: "16", 
//     name: "White Pepper", 
//     category: "Masala (Spices)", 
//     pricePerKg: null, 
//     image: "https://img.freepik.com/premium-photo/bajra-pearl-millet-sorghum-grains-with-it-s-flour-powder-bowl-selective-focus_466689-34898.jpg?semt=ais_hybrid&w=740&q=80",
//     active: false, // Inactive: No price
//     outOfStock: false
//   },
//   { 
//     id: "17", 
//     name: "Cloves", 
//     category: "Masala (Spices)", 
//     pricePerKg: 2200, 
//     image: "https://t3.ftcdn.net/jpg/01/77/13/82/360_F_177138278_dWfUr8jDQdb1sXczaBYfJh6gRe2ad0E6.jpg",
//     active: true,
//     outOfStock: false
//   },
//   { 
//     id: "18", 
//     name: "Cinnamon", 
//     category: "Masala (Spices)", 
//     pricePerKg: 800, 
//     image: "https://i.pinimg.com/736x/ec/21/98/ec21988a5712b2c37e1de52b54f220a8.jpg",
//     active: true,
//     outOfStock: false
//   },
//   { 
//     id: "19", 
//     name: "Cardamom (Elachi)", 
//     category: "Masala (Spices)", 
//     pricePerKg: 6000, 
//     image: "https://t3.ftcdn.net/jpg/15/60/36/18/360_F_1560361856_dk87713QiX461Y4KbzTQcOYApkJ5msiS.jpg",
//     active: true,
//     outOfStock: false
//   },
//   { 
//     id: "20", 
//     name: "Coriander Seeds", 
//     category: "Masala (Spices)", 
//     pricePerKg: 220, 
//     image: "https://t4.ftcdn.net/jpg/00/95/15/81/360_F_95158182_4kAgC4ridld5zBGbVvPkaJMF4RhRNL0H.jpg",
//     active: true,
//     outOfStock: false
//   },
  
//   // Edible Oils
//   { 
//     id: "21", 
//     name: "Groundnut Oil (Cold-Pressed)", 
//     category: "Edible Oils", 
//     pricePerKg: 360, 
//     image: "https://static.vecteezy.com/system/resources/thumbnails/036/092/175/small/ai-generated-stock-of-peanut-oil-extract-in-the-kitchen-table-professional-advertising-foodgraphy-photo.jpg",
//     active: true,
//     outOfStock: false
//   },
//   { 
//     id: "22", 
//     name: "Coconut Oil", 
//     category: "Edible Oils", 
//     pricePerKg: 460, 
//     image: "https://t4.ftcdn.net/jpg/08/25/37/67/360_F_825376738_o62JeHaQRC57nyfSOjOECb4m6AdrHEm1.jpg",
//     active: true,
//     outOfStock: false
//   },
//   { 
//     id: "23", 
//     name: "Sunflower Oil", 
//     category: "Edible Oils", 
//     pricePerKg: 450, 
//     image: "https://media.istockphoto.com/id/1972371812/photo/cooking-oil-pouring-from-bottle-sunflower-seed-oil-kitchen-preparing-helianthus-annuus.jpg?s=612x612&w=0&k=20&c=VRuoF1DcaBu9cWfqAn7jaBFbKLoVbL9hi6gjEYoZqYU=",
//     active: true,
//     outOfStock: false
//   },
//   { 
//     id: "24", 
//     name: "Mustard Oil", 
//     category: "Edible Oils", 
//     pricePerKg: 500, 
//     image: "https://static.vecteezy.com/system/resources/thumbnails/038/705/639/small/ai-generated-sesame-oil-extract-with-isolated-kitchen-table-professional-advertising-foodgraphy-photo.jpg",
//     active: true,
//     outOfStock: false
//   },
//   { 
//     id: "25", 
//     name: "Safflower Oil", 
//     category: "Edible Oils", 
//     pricePerKg: 430, 
//     image: "https://t3.ftcdn.net/jpg/13/77/87/14/360_F_1377871436_NHdMoMYWDO4eJko4buKXkekkQpa5r3lT.jpg",
//     active: true,
//     outOfStock: false
//   },
//   { 
//     id: "26", 
//     name: "Sesame Oil", 
//     category: "Edible Oils", 
//     pricePerKg: 560, 
//     image: "https://t4.ftcdn.net/jpg/07/30/93/37/360_F_730933794_5iXpLKSA8kZm3wJvyvEFOYLwFyfzh5M7.jpg",
//     active: true,
//     outOfStock: false
//   },
  
//   // Flours
//   { 
//     id: "27", 
//     name: "Wheat Flour (Atta)", 
//     category: "Flours", 
//     pricePerKg: 120, 
//     image: "https://static.vecteezy.com/system/resources/thumbnails/038/970/666/small_2x/ai-generated-wheat-grains-brown-wheat-flour-and-white-wheat-flour-in-wooden-bowl-set-up-on-white-concrete-background-photo.jpg",
//     active: true,
//     outOfStock: false
//   },
//   { 
//     id: "28", 
//     name: "Ragi Flour", 
//     category: "Flours", 
//     pricePerKg: 110, 
//     image: "https://img.freepik.com/premium-photo/ragi-nachni-also-known-as-finger-millet-ragi-flour-which-is-healthy-food-is-gluten-free_466689-26402.jpg",
//     active: true,
//     outOfStock: false
//   },
//   { 
//     id: "29", 
//     name: "Jonna Flour", 
//     category: "Flours", 
//     pricePerKg: 110, 
//     image: "https://img.freepik.com/premium-photo/plate-raw-amaranth-flour-with-scoop-bowl-amaranth-seeds-close-up_1048944-19048920.jpg?semt=ais_hybrid&w=740&q=80",
//     active: true,
//     outOfStock: false
//   },
  
//   // Rice & Rice Products
//   { 
//     id: "30", 
//     name: "Sugar Free Rice", 
//     category: "Rice & Rice Products", 
//     pricePerKg: 120, 
//     image: "https://static.vecteezy.com/system/resources/thumbnails/040/324/977/small/ai-generated-rice-in-a-bowl-and-packagingshoot-free-photo.jpg",
//     active: true,
//     outOfStock: false
//   },
  
//   // Millets
//   { 
//     id: "31", 
//     name: "Foxtail Millet", 
//     category: "Millets", 
//     pricePerKg: 210, 
//     image: "https://i.pinimg.com/736x/9e/ec/5a/9eec5ae5c612498dacae7769735e7307.jpg",
//     active: true,
//     outOfStock: false
//   },
//   { 
//     id: "32", 
//     name: "Little Millet", 
//     category: "Millets", 
//     pricePerKg: 250, 
//     image: "https://t4.ftcdn.net/jpg/09/65/05/89/360_F_965058966_QZHo0kdVFCiQOtt3m87YCTVzqITgP2Ev.jpg",
//     active: true,
//     outOfStock: false
//   },
//   { 
//     id: "33", 
//     name: "Kodo Millet", 
//     category: "Millets", 
//     pricePerKg: 210, 
//     image: "https://img.freepik.com/premium-photo/raw-millet-bowl-table_168527-523.jpg?semt=ais_se_enriched&w=740&q=80",
//     active: true,
//     outOfStock: false
//   },
//   { 
//     id: "34", 
//     name: "Barnyard Millet", 
//     category: "Millets", 
//     pricePerKg: 250, 
//     image: "https://t4.ftcdn.net/jpg/09/62/54/75/360_F_962547523_W0fzYYZhbfxIi64jSa8JCbbsN1UXtmrL.jpg",
//     active: true,
//     outOfStock: false
//   },
//   { 
//     id: "35", 
//     name: "Pearl Millet (Bajra)", 
//     category: "Millets", 
//     pricePerKg: 80, 
//     image: "https://img.freepik.com/free-photo/heap-millet-seeds-dark-background_1150-38161.jpg?semt=ais_hybrid&w=740&q=80",
//     active: true,
//     outOfStock: false
//   },
//   { 
//     id: "36", 
//     name: "Finger Millet (Ragi)", 
//     category: "Millets", 
//     pricePerKg: 110, 
//     image: "https://media.istockphoto.com/id/1317287403/photo/eleusine-coracana-grain-or-finger-millet-also-known-as-ragi-in-india-kodo-in-nepal.jpg?s=612x612&w=0&k=20&c=-uq7ymUgkwTkdMDgpgDTam9yFVA4iQB1RFfLE-K-YTY=",
//     active: true,
//     outOfStock: false
//   },
//   { 
//     id: "37", 
//     name: "Sorghum (Jowar)", 
//     category: "Millets", 
//     pricePerKg: 110, 
//     image: "https://img.freepik.com/free-photo/couscous-wooden-spoon_1127-315.jpg?semt=ais_hybrid&w=740&q=80",
//     active: true,
//     outOfStock: false
//   },
  
//   // Dry Fruits & Nuts
//   { 
//     id: "38", 
//     name: "Almonds", 
//     category: "Dry Fruits & Nuts", 
//     pricePerKg: 1200, 
//     image: "https://static.vecteezy.com/system/resources/previews/027/857/455/non_2x/bowl-of-almonds-on-isolated-background-health-food-concept-created-with-generative-ai-technology-png.png",
//     active: true,
//     outOfStock: false
//   },
//   { 
//     id: "39", 
//     name: "Cashews", 
//     category: "Dry Fruits & Nuts", 
//     pricePerKg: 900, 
//     image: "https://static.vecteezy.com/system/resources/previews/030/783/301/large_2x/cashews-in-a-bowl-on-a-white-background-ai-generated-free-photo.jpeg",
//     active: true,
//     outOfStock: false
//   },
//   { 
//     id: "40", 
//     name: "Walnuts", 
//     category: "Dry Fruits & Nuts", 
//     pricePerKg: 1500, 
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5dz3wwXYVQGLGiMcXmH7kNOivW-JcbjHN1g&s",
//     active: true,
//     outOfStock: false
//   },
//   { 
//     id: "41", 
//     name: "Pistachios", 
//     category: "Dry Fruits & Nuts", 
//     pricePerKg: 1500, 
//     image: "https://i.pinimg.com/736x/59/89/f8/5989f8deecd4afcb567da2453caf5891.jpg",
//     active: true,
//     outOfStock: false
//   },
//   { 
//     id: "42", 
//     name: "Sunflower Seeds", 
//     category: "Dry Fruits & Nuts", 
//     pricePerKg: 380, 
//     image: "https://static.vecteezy.com/system/resources/previews/036/512/732/non_2x/ai-generated-sunflower-seeds-in-a-bowl-isolated-on-transparent-background-free-png.png",
//     active: true,
//     outOfStock: false
//   },
//   { 
//     id: "43", 
//     name: "Flax Seeds", 
//     category: "Dry Fruits & Nuts", 
//     pricePerKg: 320, 
//     image: "https://i.pinimg.com/736x/d0/9c/b9/d09cb91915d41eb87b141de5aed61010.jpg",
//     active: true,
//     outOfStock: false
//   },
//   { 
//     id: "44", 
//     name: "Dates", 
//     category: "Dry Fruits & Nuts", 
//     pricePerKg: 600, 
//     image: "https://static.vecteezy.com/system/resources/previews/036/196/097/large_2x/ai-generated-dates-in-a-bowl-on-a-wooden-background-selective-focus-dried-date-palm-fruits-or-kurma-ramadan-ai-generated-free-photo.jpg",
//     active: true,
//     outOfStock: false
//   },
  
//   // Powders
//   { 
//     id: "45", 
//     name: "Moringa Powder", 
//     category: "Powders", 
//     pricePerKg: null, 
//     image: "https://static.vecteezy.com/system/resources/previews/041/933/465/non_2x/ai-generated-moringa-powder-in-wooden-bowl-isolated-on-transparent-background-free-png.png",
//     active: false, // Inactive: No price
//     outOfStock: false
//   },
//   { 
//     id: "46", 
//     name: "Onion Powder", 
//     category: "Powders", 
//     pricePerKg: null, 
//     image: "https://img.freepik.com/premium-photo/photo-onion-powder-minimalist-brown-bowl-isolated-white-background_847439-62783.jpg?w=360",
//     active: false, // Inactive: No price
//     outOfStock: false
//   },
//   { 
//     id: "47", 
//     name: "Banana Powder", 
//     category: "Powders", 
//     pricePerKg: null, 
//     image: "https://img.freepik.com/premium-photo/banana-spli-thd-8k-wallpaper-stock-photographic-image_677426-13155.jpg?semt=ais_hybrid&w=740&q=80",
//     active: false, // Inactive: No price
//     outOfStock: false
//   },
//   { 
//     id: "48", 
//     name: "Tomato Powder", 
//     category: "Powders", 
//     pricePerKg: null, 
//     image: "https://media.istockphoto.com/id/1329372707/photo/tomato-powder-in-clay-bowl-on-fresh-tomatoes-copy-space.jpg?s=612x612&w=0&k=20&c=9z692dt-T1Q3tz9-5Buo93LgO4txVBz9DK9stAkEXGU=",
//     active: false, // Inactive: No price
//     outOfStock: false
//   },
  
//   // Beverages
//   { 
//     id: "49", 
//     name: "Coffee Instant Mix - Hazelnut", 
//     category: "Beverages", 
//     pricePerKg: 1800, 
//     image: "https://img.freepik.com/premium-psd/hazelnuta-with-splash-coffee_949261-644.jpg?semt=ais_hybrid&w=740&q=80",
//     active: true,
//     outOfStock: false
//   },
//   { 
//     id: "50", 
//     name: "Coffee Instant Mix - Caramel", 
//     category: "Beverages", 
//     pricePerKg: null, 
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8YF2eITqsG_-jGNvXUct8IJkOamv57dbC-Q&s",
//     active: false, // Inactive: No price
//     outOfStock: false
//   },
//   { 
//     id: "51", 
//     name: "Coffee Instant Mix - Chocolate", 
//     category: "Beverages", 
//     pricePerKg: null, 
//     image: "https://i0.wp.com/kitchenflavours.net/wp-content/uploads/2023/11/instant-chocolate-coffee.jpg?resize=480%2C480&ssl=1",
//     active: false, // Inactive: No price
//     outOfStock: false
//   },
//   { 
//     id: "52", 
//     name: "Coffee Instant Mix - Mint", 
//     category: "Beverages", 
//     pricePerKg: null, 
//     image: "https://img.freepik.com/premium-photo/iced-matcha-green-tea-latte-with-milk-layer-glass_1339-159329.jpg",
//     active: false, // Inactive: No price
//     outOfStock: false
//   },
//   { 
//     id: "53", 
//     name: "Tea - Natural Direct from Leaves", 
//     category: "Beverages", 
//     pricePerKg: 900, 
//     image: "https://static.vecteezy.com/system/resources/thumbnails/051/021/002/small/red-tea-in-glass-cup-tea-plantation-with-copy-space-hight-detailed-upscaled-image-photo.jpg",
//     active: true,
//     outOfStock: false
//   },
// ];

// export const categories = [
//   "All",
//   "Fruits & Vegetables",
//   "Chicken & Eggs",
//   "Natural Sweeteners",
//   "Masala (Spices)",
//   "Edible Oils",
//   "Flours",
//   "Rice & Rice Products",
//   "Millets",
//   "Dry Fruits & Nuts",
//   "Powders",
//   "Beverages",
// ];

// export const categoryIcons: Record<string, string> = {
//   "All": "🌿",
//   "Fruits & Vegetables": "🥭",
//   "Chicken & Eggs": "🥚",
//   "Natural Sweeteners": "🍯",
//   "Masala (Spices)": "🌶️",
//   "Edible Oils": "🫒",
//   "Flours": "🌾",
//   "Rice & Rice Products": "🍚",
//   "Millets": "🌾",
//   "Dry Fruits & Nuts": "🥜",
//   "Powders": "🥣",
//   "Beverages": "☕",
// };

import { Product } from "@/types/product";

export const products: Product[] = [
  // --- Fruits & Vegetables ---
  {
    id: "1",
    name: "Mangoes - Banginapalli",
    category: "Fruits & Vegetables",
    image: "https://i.pinimg.com/736x/54/65/3d/54653d55fc53fc98387288e14a2e424b.jpg",
    active: true,
    outOfStock: false,
    variants: [
      { id: 101, weight: "1kg", price: 100, is_default: true },
      { id: 102, weight: "500g", price: 50, is_default: false },
    ],
  },
  {
    id: "2",
    name: "Mangoes - Dasari",
    category: "Fruits & Vegetables",
    image: "https://img.freepik.com/premium-photo/mango-fruit-wooden-background_55610-2298.jpg?semt=ais_hybrid&w=740&q=80",
    active: true,
    outOfStock: false,
    variants: [
      { id: 201, weight: "1kg", price: 150, is_default: true },
      { id: 202, weight: "500g", price: 75, is_default: false },
    ],
  },
  {
    id: "3",
    name: "Mangoes - Kesari",
    category: "Fruits & Vegetables",
    image: "https://img.freepik.com/free-photo/mango-still-life_23-2151542248.jpg?semt=ais_hybrid&w=740&q=80",
    active: true,
    outOfStock: false,
    variants: [
      { id: 301, weight: "1kg", price: 150, is_default: true },
      { id: 302, weight: "500g", price: 75, is_default: false },
    ],
  },
  {
    id: "4",
    name: "Mangoes - Himayath",
    category: "Fruits & Vegetables",
    image: "https://mango4s.com/cdn/shop/files/5c85d1_fb28f12112bc4ecfa4b0e7971a1a005c_mv2_converted.jpg?v=1747510869",
    active: true,
    outOfStock: false,
    variants: [
      { id: 401, weight: "1kg", price: 200, is_default: true },
      { id: 402, weight: "500g", price: 100, is_default: false },
    ],
  },
  {
    id: "5",
    name: "Mangoes - Sundari",
    category: "Fruits & Vegetables",
    image: "https://i.pinimg.com/474x/0f/56/9e/0f569ef854d55d74de8cd633f70a3c97.jpg",
    active: true,
    outOfStock: false,
    variants: [
      { id: 501, weight: "1kg", price: 150, is_default: true },
      { id: 502, weight: "500g", price: 75, is_default: false },
    ],
  },
  {
    id: "6",
    name: "Mangoes - Pedda Rasalu",
    category: "Fruits & Vegetables",
    image: "https://i.pinimg.com/736x/0d/9e/86/0d9e867464aedf62d7c9b26017a63d66.jpg",
    active: true,
    outOfStock: false,
    variants: [
      { id: 601, weight: "1kg", price: 150, is_default: true },
      { id: 602, weight: "500g", price: 75, is_default: false },
    ],
  },
  {
    id: "7",
    name: "Mangoes - Alphonso",
    category: "Fruits & Vegetables",
    image: "https://img.freepik.com/premium-photo/four-apples-with-yellow-red-speckled-them-are-plate_1066261-100351.jpg?semt=ais_hybrid&w=740&q=80",
    active: true,
    outOfStock: false,
    variants: [
      { id: 701, weight: "1kg", price: 200, is_default: true },
      { id: 702, weight: "500g", price: 100, is_default: false },
    ],
  },

  // --- Chicken & Eggs (Unit Based) ---
  {
    id: "8",
    name: "Brown Eggs - Farm Fresh Naatu Kodi Gudlu",
    category: "Chicken & Eggs",
    pricePerUnit: "₹20 per piece",
    image: "https://static.vecteezy.com/system/resources/thumbnails/041/930/228/small_2x/ai-generated-wooden-bowl-filled-with-brown-eggs-a-close-up-view-of-a-wooden-bowl-filled-with-fresh-brown-eggs-the-eggs-are-neatly-arranged-in-the-bowl-showcasing-their-natural-colors-and-textures-png.png",
    active: true,
    outOfStock: false,
    variants: [], // No weight variants
  },

  // --- Natural Sweeteners ---
  {
    id: "9",
    name: "Multiflower Honey",
    category: "Natural Sweeteners",
    image: "https://i.pinimg.com/originals/f7/a4/8f/f7a48f975e786f30f09b4c1c4d769b8a.jpg",
    active: true,
    outOfStock: false,
    variants: [
      { id: 901, weight: "1kg", price: 600, is_default: true },
      { id: 902, weight: "500g", price: 300, is_default: false },
      { id: 903, weight: "250g", price: 160, is_default: false },
    ],
  },
  {
    id: "10",
    name: "Putta Thene (Tree Bark Honey)",
    category: "Natural Sweeteners",
    image: "https://img.freepik.com/premium-photo/fresh-honey-jar-with-warm-golden-sheen-highlighting-its-luxurious-inviting-natural-texture_1222399-54639.jpg",
    active: true,
    outOfStock: false,
    variants: [
      { id: 1001, weight: "1kg", price: 1200, is_default: true },
      { id: 1002, weight: "500g", price: 600, is_default: false },
      { id: 1003, weight: "250g", price: 320, is_default: false },
    ],
  },

  // --- Masala (Spices) - Smaller Weights ---
  {
    id: "11",
    name: "Turmeric Powder",
    category: "Masala (Spices)",
    image: "https://img.freepik.com/free-photo/organic-turmeric-chili-cumin-spice-bowl-generated-by-ai_188544-8964.jpg?semt=ais_hybrid&w=740&q=80",
    active: true,
    outOfStock: false,
    variants: [
      { id: 1101, weight: "250g", price: 110, is_default: true },
      { id: 1102, weight: "100g", price: 45, is_default: false },
    ],
  },
  {
    id: "12",
    name: "Red Chilli Powder",
    category: "Masala (Spices)",
    image: "https://static.vecteezy.com/system/resources/previews/037/899/249/large_2x/ai-generated-chilly-powder-with-red-chilly-in-clay-pots-on-white-background-free-photo.jpg",
    active: true,
    outOfStock: false,
    variants: [
      { id: 1201, weight: "250g", price: 125, is_default: true },
      { id: 1202, weight: "100g", price: 50, is_default: false },
    ],
  },
  {
    id: "13",
    name: "Coriander Powder",
    category: "Masala (Spices)",
    image: "https://www.shutterstock.com/image-photo/coriander-powder-wooden-bowl-isolated-600nw-2414032011.jpg",
    active: true,
    outOfStock: false,
    variants: [
      { id: 1301, weight: "250g", price: 80, is_default: true },
      { id: 1302, weight: "100g", price: 35, is_default: false },
    ],
  },
  {
    id: "14",
    name: "Cumin Seeds",
    category: "Masala (Spices)",
    image: "https://t4.ftcdn.net/jpg/04/40/61/85/360_F_440618579_MNqGLkJW3fRUUX7uE5C9K3TYz1jTjkpf.jpg",
    active: false,
    outOfStock: false,
    variants: [],
  },
  {
    id: "15",
    name: "Black Pepper",
    category: "Masala (Spices)",
    image: "https://static.vecteezy.com/system/resources/thumbnails/025/358/611/small_2x/stock-of-black-pepper-powder-on-the-kitchen-flat-laygraphy-generative-ai-photo.jpg",
    active: true,
    outOfStock: false,
    variants: [
      { id: 1501, weight: "100g", price: 150, is_default: true },
      { id: 1502, weight: "50g", price: 80, is_default: false },
    ],
  },
  {
    id: "16",
    name: "White Pepper",
    category: "Masala (Spices)",
    image: "https://img.freepik.com/premium-photo/bajra-pearl-millet-sorghum-grains-with-it-s-flour-powder-bowl-selective-focus_466689-34898.jpg?semt=ais_hybrid&w=740&q=80",
    active: false,
    outOfStock: false,
    variants: [],
  },
  {
    id: "17",
    name: "Cloves",
    category: "Masala (Spices)",
    image: "https://t3.ftcdn.net/jpg/01/77/13/82/360_F_177138278_dWfUr8jDQdb1sXczaBYfJh6gRe2ad0E6.jpg",
    active: true,
    outOfStock: false,
    variants: [
      { id: 1701, weight: "100g", price: 220, is_default: true },
      { id: 1702, weight: "50g", price: 120, is_default: false },
    ],
  },
  {
    id: "18",
    name: "Cinnamon",
    category: "Masala (Spices)",
    image: "https://i.pinimg.com/736x/ec/21/98/ec21988a5712b2c37e1de52b54f220a8.jpg",
    active: true,
    outOfStock: false,
    variants: [
      { id: 1801, weight: "100g", price: 80, is_default: true },
      { id: 1802, weight: "50g", price: 45, is_default: false },
    ],
  },
  {
    id: "19",
    name: "Cardamom (Elachi)",
    category: "Masala (Spices)",
    image: "https://t3.ftcdn.net/jpg/15/60/36/18/360_F_1560361856_dk87713QiX461Y4KbzTQcOYApkJ5msiS.jpg",
    active: true,
    outOfStock: false,
    variants: [
      { id: 1901, weight: "50g", price: 300, is_default: true },
      { id: 1902, weight: "25g", price: 160, is_default: false },
    ],
  },
  {
    id: "20",
    name: "Coriander Seeds",
    category: "Masala (Spices)",
    image: "https://t4.ftcdn.net/jpg/00/95/15/81/360_F_95158182_4kAgC4ridld5zBGbVvPkaJMF4RhRNL0H.jpg",
    active: true,
    outOfStock: false,
    variants: [
      { id: 2001, weight: "250g", price: 60, is_default: true },
      { id: 2002, weight: "100g", price: 25, is_default: false },
    ],
  },

  // --- Edible Oils (Liters) ---
  {
    id: "21",
    name: "Groundnut Oil (Cold-Pressed)",
    category: "Edible Oils",
    image: "https://static.vecteezy.com/system/resources/thumbnails/036/092/175/small/ai-generated-stock-of-peanut-oil-extract-in-the-kitchen-table-professional-advertising-foodgraphy-photo.jpg",
    active: true,
    outOfStock: false,
    variants: [
      { id: 2101, weight: "1L", price: 360, is_default: true },
      { id: 2102, weight: "500ml", price: 185, is_default: false },
    ],
  },
  {
    id: "22",
    name: "Coconut Oil",
    category: "Edible Oils",
    image: "https://t4.ftcdn.net/jpg/08/25/37/67/360_F_825376738_o62JeHaQRC57nyfSOjOECb4m6AdrHEm1.jpg",
    active: true,
    outOfStock: false,
    variants: [
      { id: 2201, weight: "1L", price: 460, is_default: true },
      { id: 2202, weight: "500ml", price: 235, is_default: false },
    ],
  },
  {
    id: "23",
    name: "Sunflower Oil",
    category: "Edible Oils",
    image: "https://media.istockphoto.com/id/1972371812/photo/cooking-oil-pouring-from-bottle-sunflower-seed-oil-kitchen-preparing-helianthus-annuus.jpg?s=612x612&w=0&k=20&c=VRuoF1DcaBu9cWfqAn7jaBFbKLoVbL9hi6gjEYoZqYU=",
    active: true,
    outOfStock: false,
    variants: [
      { id: 2301, weight: "1L", price: 450, is_default: true },
      { id: 2302, weight: "500ml", price: 230, is_default: false },
    ],
  },
  {
    id: "24",
    name: "Mustard Oil",
    category: "Edible Oils",
    image: "https://static.vecteezy.com/system/resources/thumbnails/038/705/639/small/ai-generated-sesame-oil-extract-with-isolated-kitchen-table-professional-advertising-foodgraphy-photo.jpg",
    active: true,
    outOfStock: false,
    variants: [
      { id: 2401, weight: "1L", price: 500, is_default: true },
      { id: 2402, weight: "500ml", price: 255, is_default: false },
    ],
  },
  {
    id: "25",
    name: "Safflower Oil",
    category: "Edible Oils",
    image: "https://t3.ftcdn.net/jpg/13/77/87/14/360_F_1377871436_NHdMoMYWDO4eJko4buKXkekkQpa5r3lT.jpg",
    active: true,
    outOfStock: false,
    variants: [
      { id: 2501, weight: "1L", price: 430, is_default: true },
      { id: 2502, weight: "500ml", price: 220, is_default: false },
    ],
  },
  {
    id: "26",
    name: "Sesame Oil",
    category: "Edible Oils",
    image: "https://t4.ftcdn.net/jpg/07/30/93/37/360_F_730933794_5iXpLKSA8kZm3wJvyvEFOYLwFyfzh5M7.jpg",
    active: true,
    outOfStock: false,
    variants: [
      { id: 2601, weight: "1L", price: 560, is_default: true },
      { id: 2602, weight: "500ml", price: 285, is_default: false },
    ],
  },

  // --- Flours ---
  {
    id: "27",
    name: "Wheat Flour (Atta)",
    category: "Flours",
    image: "https://static.vecteezy.com/system/resources/thumbnails/038/970/666/small_2x/ai-generated-wheat-grains-brown-wheat-flour-and-white-wheat-flour-in-wooden-bowl-set-up-on-white-concrete-background-photo.jpg",
    active: true,
    outOfStock: false,
    variants: [
      { id: 2701, weight: "1kg", price: 120, is_default: true },
      { id: 2702, weight: "500g", price: 65, is_default: false },
    ],
  },
  {
    id: "28",
    name: "Ragi Flour",
    category: "Flours",
    image: "https://img.freepik.com/premium-photo/ragi-nachni-also-known-as-finger-millet-ragi-flour-which-is-healthy-food-is-gluten-free_466689-26402.jpg",
    active: true,
    outOfStock: false,
    variants: [
      { id: 2801, weight: "1kg", price: 110, is_default: true },
      { id: 2802, weight: "500g", price: 60, is_default: false },
    ],
  },
  {
    id: "29",
    name: "Jonna Flour",
    category: "Flours",
    image: "https://img.freepik.com/premium-photo/plate-raw-amaranth-flour-with-scoop-bowl-amaranth-seeds-close-up_1048944-19048920.jpg?semt=ais_hybrid&w=740&q=80",
    active: true,
    outOfStock: false,
    variants: [
      { id: 2901, weight: "1kg", price: 110, is_default: true },
      { id: 2902, weight: "500g", price: 60, is_default: false },
    ],
  },

  // --- Rice & Rice Products ---
  {
    id: "30",
    name: "Sugar Free Rice",
    category: "Rice & Rice Products",
    image: "https://static.vecteezy.com/system/resources/thumbnails/040/324/977/small/ai-generated-rice-in-a-bowl-and-packagingshoot-free-photo.jpg",
    active: true,
    outOfStock: false,
    variants: [
      { id: 3001, weight: "1kg", price: 120, is_default: true },
      { id: 3002, weight: "5kg", price: 580, is_default: false },
    ],
  },

  // --- Millets ---
  {
    id: "31",
    name: "Foxtail Millet",
    category: "Millets",
    image: "https://i.pinimg.com/736x/9e/ec/5a/9eec5ae5c612498dacae7769735e7307.jpg",
    active: true,
    outOfStock: false,
    variants: [
      { id: 3101, weight: "1kg", price: 210, is_default: true },
      { id: 3102, weight: "500g", price: 110, is_default: false },
    ],
  },
  {
    id: "32",
    name: "Little Millet",
    category: "Millets",
    image: "https://t4.ftcdn.net/jpg/09/65/05/89/360_F_965058966_QZHo0kdVFCiQOtt3m87YCTVzqITgP2Ev.jpg",
    active: true,
    outOfStock: false,
    variants: [
      { id: 3201, weight: "1kg", price: 250, is_default: true },
      { id: 3202, weight: "500g", price: 130, is_default: false },
    ],
  },
  {
    id: "33",
    name: "Kodo Millet",
    category: "Millets",
    image: "https://img.freepik.com/premium-photo/raw-millet-bowl-table_168527-523.jpg?semt=ais_se_enriched&w=740&q=80",
    active: true,
    outOfStock: false,
    variants: [
      { id: 3301, weight: "1kg", price: 210, is_default: true },
      { id: 3302, weight: "500g", price: 110, is_default: false },
    ],
  },
  {
    id: "34",
    name: "Barnyard Millet",
    category: "Millets",
    image: "https://t4.ftcdn.net/jpg/09/62/54/75/360_F_962547523_W0fzYYZhbfxIi64jSa8JCbbsN1UXtmrL.jpg",
    active: true,
    outOfStock: false,
    variants: [
      { id: 3401, weight: "1kg", price: 250, is_default: true },
      { id: 3402, weight: "500g", price: 130, is_default: false },
    ],
  },
  {
    id: "35",
    name: "Pearl Millet (Bajra)",
    category: "Millets",
    image: "https://img.freepik.com/free-photo/heap-millet-seeds-dark-background_1150-38161.jpg?semt=ais_hybrid&w=740&q=80",
    active: true,
    outOfStock: false,
    variants: [
      { id: 3501, weight: "1kg", price: 80, is_default: true },
      { id: 3502, weight: "500g", price: 45, is_default: false },
    ],
  },
  {
    id: "36",
    name: "Finger Millet (Ragi)",
    category: "Millets",
    image: "https://media.istockphoto.com/id/1317287403/photo/eleusine-coracana-grain-or-finger-millet-also-known-as-ragi-in-india-kodo-in-nepal.jpg?s=612x612&w=0&k=20&c=-uq7ymUgkwTkdMDgpgDTam9yFVA4iQB1RFfLE-K-YTY=",
    active: true,
    outOfStock: false,
    variants: [
      { id: 3601, weight: "1kg", price: 110, is_default: true },
      { id: 3602, weight: "500g", price: 60, is_default: false },
    ],
  },
  {
    id: "37",
    name: "Sorghum (Jowar)",
    category: "Millets",
    image: "https://img.freepik.com/free-photo/couscous-wooden-spoon_1127-315.jpg?semt=ais_hybrid&w=740&q=80",
    active: true,
    outOfStock: false,
    variants: [
      { id: 3701, weight: "1kg", price: 110, is_default: true },
      { id: 3702, weight: "500g", price: 60, is_default: false },
    ],
  },

  // --- Dry Fruits & Nuts ---
  {
    id: "38",
    name: "Almonds",
    category: "Dry Fruits & Nuts",
    image: "https://static.vecteezy.com/system/resources/previews/027/857/455/non_2x/bowl-of-almonds-on-isolated-background-health-food-concept-created-with-generative-ai-technology-png.png",
    active: true,
    outOfStock: false,
    variants: [
      { id: 3801, weight: "1kg", price: 1200, is_default: true },
      { id: 3802, weight: "500g", price: 620, is_default: false },
      { id: 3803, weight: "250g", price: 320, is_default: false },
    ],
  },
  {
    id: "39",
    name: "Cashews",
    category: "Dry Fruits & Nuts",
    image: "https://static.vecteezy.com/system/resources/previews/030/783/301/large_2x/cashews-in-a-bowl-on-a-white-background-ai-generated-free-photo.jpeg",
    active: true,
    outOfStock: false,
    variants: [
      { id: 3901, weight: "1kg", price: 900, is_default: true },
      { id: 3902, weight: "500g", price: 460, is_default: false },
      { id: 3903, weight: "250g", price: 240, is_default: false },
    ],
  },
  {
    id: "40",
    name: "Walnuts",
    category: "Dry Fruits & Nuts",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5dz3wwXYVQGLGiMcXmH7kNOivW-JcbjHN1g&s",
    active: true,
    outOfStock: false,
    variants: [
      { id: 4001, weight: "1kg", price: 1500, is_default: true },
      { id: 4002, weight: "500g", price: 760, is_default: false },
    ],
  },
  {
    id: "41",
    name: "Pistachios",
    category: "Dry Fruits & Nuts",
    image: "https://i.pinimg.com/736x/59/89/f8/5989f8deecd4afcb567da2453caf5891.jpg",
    active: true,
    outOfStock: false,
    variants: [
      { id: 4101, weight: "1kg", price: 1500, is_default: true },
      { id: 4102, weight: "500g", price: 760, is_default: false },
    ],
  },
  {
    id: "42",
    name: "Sunflower Seeds",
    category: "Dry Fruits & Nuts",
    image: "https://static.vecteezy.com/system/resources/previews/036/512/732/non_2x/ai-generated-sunflower-seeds-in-a-bowl-isolated-on-transparent-background-free-png.png",
    active: true,
    outOfStock: false,
    variants: [
      { id: 4201, weight: "1kg", price: 380, is_default: true },
      { id: 4202, weight: "500g", price: 200, is_default: false },
    ],
  },
  {
    id: "43",
    name: "Flax Seeds",
    category: "Dry Fruits & Nuts",
    image: "https://i.pinimg.com/736x/d0/9c/b9/d09cb91915d41eb87b141de5aed61010.jpg",
    active: true,
    outOfStock: false,
    variants: [
      { id: 4301, weight: "1kg", price: 320, is_default: true },
      { id: 4302, weight: "500g", price: 170, is_default: false },
    ],
  },
  {
    id: "44",
    name: "Dates",
    category: "Dry Fruits & Nuts",
    image: "https://static.vecteezy.com/system/resources/previews/036/196/097/large_2x/ai-generated-dates-in-a-bowl-on-a-wooden-background-selective-focus-dried-date-palm-fruits-or-kurma-ramadan-ai-generated-free-photo.jpg",
    active: true,
    outOfStock: false,
    variants: [
      { id: 4401, weight: "1kg", price: 600, is_default: true },
      { id: 4402, weight: "500g", price: 310, is_default: false },
    ],
  },

  // --- Powders (Inactive) ---
  {
    id: "45",
    name: "Moringa Powder",
    category: "Powders",
    image: "https://static.vecteezy.com/system/resources/previews/041/933/465/non_2x/ai-generated-moringa-powder-in-wooden-bowl-isolated-on-transparent-background-free-png.png",
    active: false,
    outOfStock: false,
    variants: [],
  },
  {
    id: "46",
    name: "Onion Powder",
    category: "Powders",
    image: "https://img.freepik.com/premium-photo/photo-onion-powder-minimalist-brown-bowl-isolated-white-background_847439-62783.jpg?w=360",
    active: false,
    outOfStock: false,
    variants: [],
  },
  {
    id: "47",
    name: "Banana Powder",
    category: "Powders",
    image: "https://img.freepik.com/premium-photo/banana-spli-thd-8k-wallpaper-stock-photographic-image_677426-13155.jpg?semt=ais_hybrid&w=740&q=80",
    active: false,
    outOfStock: false,
    variants: [],
  },
  {
    id: "48",
    name: "Tomato Powder",
    category: "Powders",
    image: "https://media.istockphoto.com/id/1329372707/photo/tomato-powder-in-clay-bowl-on-fresh-tomatoes-copy-space.jpg?s=612x612&w=0&k=20&c=9z692dt-T1Q3tz9-5Buo93LgO4txVBz9DK9stAkEXGU=",
    active: false,
    outOfStock: false,
    variants: [],
  },

  // --- Beverages ---
  {
    id: "49",
    name: "Coffee Instant Mix - Hazelnut",
    category: "Beverages",
    image: "https://img.freepik.com/premium-psd/hazelnuta-with-splash-coffee_949261-644.jpg?semt=ais_hybrid&w=740&q=80",
    active: true,
    outOfStock: false,
    variants: [
      { id: 4901, weight: "1kg", price: 1800, is_default: true },
      { id: 4902, weight: "500g", price: 920, is_default: false },
      { id: 4903, weight: "250g", price: 470, is_default: false },
    ],
  },
  {
    id: "50",
    name: "Coffee Instant Mix - Caramel",
    category: "Beverages",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8YF2eITqsG_-jGNvXUct8IJkOamv57dbC-Q&s",
    active: false,
    outOfStock: false,
    variants: [],
  },
  {
    id: "51",
    name: "Coffee Instant Mix - Chocolate",
    category: "Beverages",
    image: "https://i0.wp.com/kitchenflavours.net/wp-content/uploads/2023/11/instant-chocolate-coffee.jpg?resize=480%2C480&ssl=1",
    active: false,
    outOfStock: false,
    variants: [],
  },
  {
    id: "52",
    name: "Coffee Instant Mix - Mint",
    category: "Beverages",
    image: "https://img.freepik.com/premium-photo/iced-matcha-green-tea-latte-with-milk-layer-glass_1339-159329.jpg",
    active: false,
    outOfStock: false,
    variants: [],
  },
  {
    id: "53",
    name: "Tea - Natural Direct from Leaves",
    category: "Beverages",
    image: "https://static.vecteezy.com/system/resources/thumbnails/051/021/002/small/red-tea-in-glass-cup-tea-plantation-with-copy-space-hight-detailed-upscaled-image-photo.jpg",
    active: true,
    outOfStock: false,
    variants: [
      { id: 5301, weight: "1kg", price: 900, is_default: true },
      { id: 5302, weight: "500g", price: 460, is_default: false },
      { id: 5303, weight: "250g", price: 240, is_default: false },
    ],
  },
];

export const categories = [
  "All",
  "Fruits & Vegetables",
  "Chicken & Eggs",
  "Natural Sweeteners",
  "Masala (Spices)",
  "Edible Oils",
  "Flours",
  "Rice & Rice Products",
  "Millets",
  "Dry Fruits & Nuts",
  "Powders",
  "Beverages",
];

export const categoryIcons: Record<string, string> = {
  "All": "🌿",
  "Fruits & Vegetables": "🥭",
  "Chicken & Eggs": "🥚",
  "Natural Sweeteners": "🍯",
  "Masala (Spices)": "🌶️",
  "Edible Oils": "🫒",
  "Flours": "🌾",
  "Rice & Rice Products": "🍚",
  "Millets": "🌾",
  "Dry Fruits & Nuts": "🥜",
  "Powders": "🥣",
  "Beverages": "☕",
};
