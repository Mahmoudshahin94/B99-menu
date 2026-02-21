// Run with: node scripts/seed.mjs
import { init, id } from "@instantdb/admin";

const APP_ID = "254b5091-5192-46ff-b314-ae031e8e0607";

// No admin token needed — runs with the same guest permissions as the browser
const _db = init({ appId: APP_ID });
const db = _db.asUser({ guest: true });

// ─── Photo map (all verified portrait photos) ────────────────────────────────
const PHOTOS = {
  // Hot Drinks — all verified portrait
  "espresso":                       "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=600&q=85",
  "double espresso":                "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=600&q=85",
  "americano":                      "https://images.unsplash.com/photo-1534778101976-62847782c213?w=600&q=85",
  "cappuccino":                     "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&q=85",
  "nescafe":                        "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=600&q=85",
  "coffee latte":                   "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&q=85",
  "hazelnut":                       "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=85",
  "french vanilla":                 "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=600&q=85",
  "tea latte":                      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=85",
  "hot chocolate":                  "https://images.unsplash.com/photo-1571066811602-716837d681de?w=600&q=85",
  "hot oreo":                       "https://images.unsplash.com/photo-1571066811602-716837d681de?w=600&q=85",
  "hot pistachio":                  "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&q=85",
  "hot lotus":                      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&q=85",
  "hot nutella":                    "https://images.unsplash.com/photo-1571066811602-716837d681de?w=600&q=85",
  "toffee caramel":                 "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=600&q=85",
  "salted caramel":                 "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=85",
  "macchiato":                      "https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?w=600&q=85",
  "caramel macchiato":              "https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?w=600&q=85",
  "affogato":                       "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=600&q=85",
  // Cold Drinks — all verified portrait
  "iced coffee":                    "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&q=85",
  "iced latte":                     "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&q=85",
  "iced americano":                 "https://images.unsplash.com/photo-1592663527359-cf6642f54cff?w=600&q=85",
  "iced spanish latte":             "https://images.unsplash.com/photo-1549490349-8643362247b5?w=600&q=85",
  "iced vanilla":                   "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=600&q=85",
  "iced chocolate":                 "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&q=85",
  "iced passionfruit":              "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=600&q=85",
  "iced tea":                       "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=85",
  // Milkshakes — all verified portrait
  "oreo milkshake":                 "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=600&q=85",
  "lotus milkshake":                "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=600&q=85",
  "caramel milkshake":              "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=600&q=85",
  "kinder milkshake":               "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&q=85",
  "pistachio milkshake":            "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?w=600&q=85",
  "strawberry milkshake":           "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=600&q=85",
  "cerblak milkshake":              "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&q=85",
  "protein milkshake":              "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?w=600&q=85",
  "nutella milkshake":              "https://images.unsplash.com/photo-1571066811602-716837d681de?w=600&q=85",
  // Smoothies — all verified portrait
  "mango smoothie":                 "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=600&q=85",
  "pineapple smoothie":             "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600&q=85",
  "strawberry smoothie":            "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=600&q=85",
  "mixed berry smoothie":           "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600&q=85",
  "passionfruit smoothie":          "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=600&q=85",
  "pineapple & mango":              "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=600&q=85",
  "passionfruit & mango":           "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=600&q=85",
  "pineapple & mixed berry":        "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600&q=85",
  "pineapple, strawberry & mango":  "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=600&q=85",
  // Fresh Juice — all verified portrait
  "lemon juice":                    "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=600&q=85",
  "lemon & mint":                   "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=600&q=85",
  "orange juice":                   "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&q=85",
  "carrot juice":                   "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=600&q=85",
  // Cocktails — all verified portrait
  "piña colada":                    "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=600&q=85",
  "b99 cocktail":                   "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=600&q=85",
  "avocado cocktail":               "https://images.unsplash.com/photo-1549490349-8643362247b5?w=600&q=85",
  // Mojito
  "mojito":                         "https://images.unsplash.com/photo-1587223962930-cb7f31384c19?w=600&q=85",
  // Sweets — all verified portrait
  "crepe":                          "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=600&q=85",
  "dubai crepe":                    "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=600&q=85",
  "fshafesh":                       "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&q=85",
  "waffle":                         "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=600&q=85",
  "fshafesh cup":                   "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&q=85",
  "dubai cup":                      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&q=85",
  "b99 cup":                        "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&q=85",
};
const FALLBACK = "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=85";

function photo(name) {
  const k = (name ?? "").toLowerCase().trim();
  if (PHOTOS[k]) return PHOTOS[k];
  for (const [key, url] of Object.entries(PHOTOS)) {
    if (k.includes(key) || key.includes(k)) return url;
  }
  return FALLBACK;
}

// ─── Data ────────────────────────────────────────────────────────────────────
const categories = [
  { name_en: "Hot Drinks",  name_ar: "مشروبات ساخنة", icon: "☕", order: 1 },
  { name_en: "Cold Drinks", name_ar: "مشروبات باردة", icon: "🧊", order: 2 },
  { name_en: "Milkshake",   name_ar: "ميلك شيك",      icon: "🥤", order: 3 },
  { name_en: "Smoothie",    name_ar: "سموذي",         icon: "🍓", order: 4 },
  { name_en: "Fresh Juice", name_ar: "عصائر طبيعية",  icon: "🍊", order: 5 },
  { name_en: "Cocktails",   name_ar: "كوكتيل",        icon: "🍹", order: 6 },
  { name_en: "Mojito",      name_ar: "موهيتو",         icon: "🌿", order: 7 },
  { name_en: "Sweets",      name_ar: "حلويات",         icon: "🍰", order: 8 },
];

// [name_en, name_ar, price_small, price_large, categoryIndex]
const items = [
  // Hot Drinks (0)
  ["Espresso",          "إسبرسو",       0,  6,  0],
  ["Double Espresso",   "إسبرسو دبل",   0,  8,  0],
  ["Americano",         "أمريكانو",      7,  10, 0],
  ["Cappuccino",        "كابتشينو",      7,  10, 0],
  ["Nescafe",           "نيسكافيه",      7,  10, 0],
  ["Coffee Latte",      "كوفي لاتيه",    7,  10, 0],
  ["Hazelnut",          "بندق",          7,  10, 0],
  ["French Vanilla",    "فرنش فانيلا",   7,  10, 0],
  ["Tea Latte",         "شاي لاتيه",     7,  10, 0],
  ["Hot Chocolate",     "هوت شوكليت",    7,  10, 0],
  ["Hot Oreo",          "هوت أوريو",     7,  10, 0],
  ["Hot Pistachio",     "هوت بستاشيو",   7,  10, 0],
  ["Hot Lotus",         "هوت لوتس",      7,  10, 0],
  ["Hot Nutella",       "هوت نيوتيلا",   7,  10, 0],
  ["Toffee Caramel",    "توفي كراميل",   7,  10, 0],
  ["Salted Caramel",    "سولتد كراميل",  7,  10, 0],
  ["Macchiato",         "مكياتو",        0,  8,  0],
  ["Caramel Macchiato", "كراميل مكياتو", 0,  10, 0],
  ["Affogato",          "أفوجاتو",       0,  12, 0],
  // Cold Drinks (1)
  ["Iced Coffee",        "ايس كوفي",         5,  10, 1],
  ["Iced Latte",         "ايس لاتيه",        10, 12, 1],
  ["Iced Americano",     "ايس أمريكانو",     10, 12, 1],
  ["Iced Spanish Latte", "ايس سبانيش لاتيه", 12, 14, 1],
  ["Iced Vanilla",       "ايس فانيلا",       8,  10, 1],
  ["Iced Chocolate",     "ايس شوكوليت",      10, 12, 1],
  ["Iced Passionfruit",  "ايس بسفلورا",      5,  10, 1],
  ["Iced Tea",           "ايس تي",           5,  10, 1],
  // Milkshake (2)
  ["Oreo Milkshake",       "أوريو",     10, 15, 2],
  ["Lotus Milkshake",      "لوتس",      10, 15, 2],
  ["Caramel Milkshake",    "كراميل",    10, 15, 2],
  ["Kinder Milkshake",     "كندر",      10, 15, 2],
  ["Pistachio Milkshake",  "بيستاشيو",  10, 15, 2],
  ["Strawberry Milkshake", "فراولة",    10, 15, 2],
  ["Cerblak Milkshake",    "سيربلاك",   10, 15, 2],
  ["Protein Milkshake",    "بروتين",    10, 15, 2],
  ["Nutella Milkshake",    "نوتيلا",    10, 15, 2],
  // Smoothie (3)
  ["Mango Smoothie",                 "مانجا",                   10, 15, 3],
  ["Pineapple Smoothie",             "أناناس",                  10, 15, 3],
  ["Strawberry Smoothie",            "فراولة",                  10, 15, 3],
  ["Mixed Berry Smoothie",           "مكس بيري",                10, 15, 3],
  ["Passionfruit Smoothie",          "بسفلورا",                 10, 15, 3],
  ["Pineapple & Mango",              "أناناس / مانجا",          10, 15, 3],
  ["Passionfruit & Mango",           "بسفلورا / مانجا",         10, 15, 3],
  ["Pineapple & Mixed Berry",        "أناناس / ميكس بيري",      10, 15, 3],
  ["Pineapple, Strawberry & Mango",  "أناناس / فراولة / مانجا", 10, 15, 3],
  // Fresh Juice (4)
  ["Lemon Juice",  "ليمون",       10, 12, 4],
  ["Lemon & Mint", "ليمون ونعنع", 10, 12, 4],
  ["Orange Juice", "برتقال",      10, 12, 4],
  ["Carrot Juice", "جزر",         10, 12, 4],
  // Cocktails (5)
  ["Piña Colada",      "بيناكولادا", 0, 20, 5],
  ["B99 Cocktail",     "B99",        0, 20, 5],
  ["Avocado Cocktail", "أفوجادو",    0, 20, 5],
  // Mojito (6)
  ["Mojito", "موهيتو", 0, 12, 6],
  // Sweets (7)
  ["Crepe",        "كريب",        0, 10, 7],
  ["Dubai Crepe",  "كريب دبي",    0, 20, 7],
  ["Fshafesh",     "فشافيش",      0, 15, 7],
  ["Waffle",       "وافل",        0, 10, 7],
  ["Fshafesh Cup", "كاسة فشافيش", 0, 10, 7],
  ["Dubai Cup",    "كاسة دبي",    0, 18, 7],
  ["B99 Cup",      "كاسة B99",    0, 18, 7],
];

// ─── Main ────────────────────────────────────────────────────────────────────
async function main() {
  console.log("\n☕  B99 Coffee — Database Seeder\n");

  // Check existing data
  console.log("🔍  Checking existing data…");
  let existing;
  try {
    existing = await db.query({ items: {}, categories: {} });
  } catch (e) {
    console.error("❌  Could not connect to database:", e.message);
    console.error("\nMake sure your app ID is correct and try again.\n");
    process.exit(1);
  }

  const existingItems = existing.items ?? [];
  const existingCats  = existing.categories ?? [];

  const hasAllData = existingItems.length >= 55 && existingCats.length >= 8;

  if (hasAllData) {
    console.log(`✅  Found ${existingCats.length} categories and ${existingItems.length} items.`);
    console.log("📸  Refreshing photos…");
    const txs = existingItems.map((item) =>
      db.tx.items[item.id].update({ image: photo(item.name_en) })
    );
    const batchSize = 20;
    for (let i = 0; i < txs.length; i += batchSize) {
      await db.transact(txs.slice(i, i + batchSize));
    }
    console.log(`   ✓ Photos updated on ${txs.length} items`);
    console.log("\n🎉  Done! Open http://localhost:3000\n");
    process.exit(0);
  }

  // Incomplete data — wipe and re-seed
  if (existingItems.length > 0 || existingCats.length > 0) {
    console.log(`⚠️   Found incomplete data (${existingCats.length} categories, ${existingItems.length} items). Wiping…`);

    // Also fetch settings
    const existingSettings = (await db.query({ settings: {} })).settings ?? [];

    const deleteTxs = [
      ...existingItems.map((r) => db.tx.items[r.id].delete()),
      ...existingCats.map((r) => db.tx.categories[r.id].delete()),
      ...existingSettings.map((r) => db.tx.settings[r.id].delete()),
    ];
    const batchSize = 20;
    for (let i = 0; i < deleteTxs.length; i += batchSize) {
      await db.transact(deleteTxs.slice(i, i + batchSize));
    }
    console.log("   ✓ Old data deleted");
  }

  // Create categories
  console.log("📂  Creating 8 categories…");
  const categoryIds = [];
  const catTxs = categories.map((cat) => {
    const catId = id();
    categoryIds.push(catId);
    return db.tx.categories[catId].update({
      name_en: cat.name_en,
      name_ar: cat.name_ar,
      icon: cat.icon,
      order: cat.order,
      active: true,
    });
  });
  await db.transact(catTxs);
  console.log("   ✓ Categories created");

  // Create items with photos in batches
  console.log(`🍽   Creating ${items.length} menu items with photos…`);
  const itemTxs = items.map(([name_en, name_ar, price_small, price_large, catIdx], i) => {
    const itemId = id();
    return db.tx.items[itemId].update({
      name_en,
      name_ar,
      description_en: "",
      description_ar: "",
      price_small,
      price_large,
      image: photo(name_en),
      available: true,
      order: i + 1,
      category_id: categoryIds[catIdx],
    });
  });

  const batchSize = 20;
  for (let i = 0; i < itemTxs.length; i += batchSize) {
    await db.transact(itemTxs.slice(i, i + batchSize));
    console.log(`   ✓ ${Math.min(i + batchSize, itemTxs.length)}/${itemTxs.length} items`);
  }

  // Default settings
  console.log("⚙️   Adding default settings…");
  await db.transact([
    db.tx.settings[id()].update({ key: "logo", value: "" }),
    db.tx.settings[id()].update({ key: "default_lang", value: "ar" }),
  ]);

  console.log("\n🎉  All done! Open http://localhost:3000 to see the menu.\n");
}

main().catch((err) => {
  console.error("\n❌  Error:", err.message ?? err);
  process.exit(1);
});
