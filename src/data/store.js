// ======================================================
// هاد الملف الوحيد اللي بتعدليه لكل متجر جديد
// الصور: حطيها بـ public/products واكتبي "/products/اسم-الصورة.jpg"
// ======================================================

export const store = {
  name: "EJT",
  subtitle: "PERFUME",
  arabicName: "للعطور العالمية",
  announcement: "توصيل لجميع المناطق · الدفع عند الاستلام",
  heroTitle: "عطور عالمية",
  heroText: "ثبات، فوحان، وسعر مناسب. تشكيلة من أشهر الماركات العالمية بجودة ماستر.",
  // صور الواجهة: عرضية للابتوب وطولية للجوال
  heroImageDesktop: "/products/hero.jpg",
  heroImageMobile: "/products/hero.jpg",
  brands: ["GUCCI", "CHANEL", "DIOR", "TOM FORD", "YSL", "VERSACE", "VALENTINO"],
  address: "جنين - شارع البريد",
  phone: "+972 59-952-0444",
  instagram: "https://www.instagram.com/ejt_perfume",
  currency: "₪",
};

// مناطق التوصيل وأسعارها
export const deliveryZones = [
  { name: "الضفة", price: 20 },
  { name: "القدس", price: 35 },
  { name: "الداخل", price: 70 },
];

// الأقسام: id بالإنجليزي، title اللي بيظهر
export const categories = [
  { id: "all", title: "All" },
  { id: "women", title: "Women" },
  { id: "men", title: "Men" },
  { id: "sets", title: "Sets & Body Mist" },
];

// المنتجات
// options (اختياري): خيارات مثل النوع أو الحجم، الزبون لازم يختار وحدة
export const products = [
  {
    id: "gucci-intense-oud",
    brand: "Gucci",
    name: "Gucci Intense Oud",
    nameAr: "غوتشي إنتنس عود",
    price: 220,
    category: ["men"],
    image: "/products/gucci-intense-oud.jpg",
    size: "90 ml",
    description: "عطر شرقي دافئ بالعود والبخور، ثابت وفوّاح، مناسب للمساء والمناسبات.",
    badge: "الأكثر طلباً",
  },
  {
    id: "gucci-flora",
    brand: "Gucci",
    name: "Gucci Flora Gorgeous",
    nameAr: "غوتشي فلورا جورجيس",
    price: 180,
    category: ["women"],
    image: "/products/gucci-flora.jpg",
    size: "100 ml",
    description: "عطر زهري أنثوي ناعم، مثالي للاستخدام اليومي.",
    options: ["Gorgeous Jasmine", "Gorgeous Gardenia"],
  },
  {
    id: "pdm-delina",
    brand: "Parfums de Marly",
    name: "Delina & Valaya Exclusif",
    nameAr: "ديلينا وفالايا إكسكلوسيف",
    price: 250,
    category: ["women"],
    image: "/products/pdm-delina.jpg",
    size: "75 ml",
    description: "عطور فاخرة بلمسة وردية ومسكية، بزجاجات أنيقة تليق بالهدايا.",
    options: ["Delina Exclusif", "Valaya Exclusif"],
    badge: "فاخر",
  },
  {
    id: "versace-bright-crystal",
    brand: "Versace",
    name: "Versace Bright Crystal",
    nameAr: "فيرساتشي برايت كريستال",
    price: 160,
    category: ["women"],
    image: "/products/versace-bright-crystal.jpg",
    size: "90 ml",
    description: "عطر منعش بالفواكه والزهور، خفيف ومحبب لكل الأوقات.",
  },
  {
    id: "valentino-born-in-roma",
    brand: "Valentino",
    name: "Valentino Born in Roma",
    nameAr: "فالنتينو بورن إن روما",
    price: 200,
    category: ["women", "men"],
    image: "/products/valentino-born-in-roma.jpg",
    size: "100 ml",
    description: "متوفر بالنسخة النسائية Donna والرجالية Uomo.",
    options: ["Donna · نسائي", "Uomo · رجالي"],
    badge: "جديد",
  },
  {
    id: "vs-midnight-bloom",
    brand: "Victoria's Secret",
    name: "Midnight Bloom Shimmer Set",
    nameAr: "طقم ميدنايت بلوم شيمر",
    price: 140,
    category: ["sets", "women"],
    image: "/products/vs-midnight-bloom.jpg",
    size: "Mist 250 ml + Lotion 236 ml",
    description: "طقم بودي ميست ولوشن بلمعة ناعمة ورائحة زهرية، هدية مثالية.",
  },
  {
    id: "miss-laverne",
    brand: "Laverne",
    name: "Miss Laverne",
    nameAr: "ميس لافيرن",
    price: 120,
    category: ["women", "sets"],
    image: "/products/miss-laverne.jpg",
    size: "100 ml",
    description: "عطر وردي ناعم بعلبة هدية أنيقة.",
  },
];
