/**
 * =================================================================
 * BAAS.LK - CORE JAVASCRIPT ENGINE
 * Multi-Language (Sinhala / English / Tamil), 3D Interactions,
 * Real-time Cost Estimator, Search/Filter, and Modals System
 * =================================================================
 */

// 1. Tailwind CSS Custom Theme Configuration
if (typeof tailwind !== 'undefined') {
  tailwind.config = {
    darkMode: 'class',
    theme: {
      extend: {
        fontFamily: {
          sans: ['Noto Sans Sinhala', 'Noto Sans Tamil', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        },
        colors: {
          brandBlue: {
            50: '#eef6ff',
            100: '#d9eaff',
            200: '#bcd9ff',
            300: '#8ec0ff',
            400: '#599cff',
            500: '#0066fe',
            600: '#004fe6',
            700: '#003eb8',
            800: '#022e86',
            900: '#021845',
            950: '#010c24',
          },
          brandOrange: {
            300: '#fde047',
            400: '#fbbf24',
            500: '#f59e0b',
            600: '#d97706',
            700: '#b45309',
          },
          darkSurface: {
            800: '#0b192e',
            900: '#071223',
            950: '#030a16',
          }
        },
        boxShadow: {
          '3d': '0 20px 40px -15px rgba(2, 24, 69, 0.25), 0 0 1px 1px rgba(255, 255, 255, 0.4) inset',
          '3d-hover': '0 30px 60px -15px rgba(0, 79, 230, 0.35), 0 0 2px 1px rgba(245, 158, 11, 0.6) inset',
          'neon-orange': '0 0 25px rgba(245, 158, 11, 0.45)',
          'neon-blue': '0 0 30px rgba(0, 102, 254, 0.35)',
          'inner-glow': 'inset 0 2px 6px rgba(255, 255, 255, 0.2), inset 0 -2px 6px rgba(0, 0, 0, 0.2)',
        },
        animation: {
          'float-slow': 'float 6s ease-in-out infinite',
          'float-medium': 'float 4s ease-in-out infinite',
          'float-fast': 'float 2.8s ease-in-out infinite',
          'pulse-glow': 'pulseGlow 2.5s infinite',
          'spin-slow': 'spin 18s linear infinite',
          'shine': 'shine 4s ease-in-out infinite',
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
            '50%': { transform: 'translateY(-14px) rotate(1deg)' },
          },
          pulseGlow: {
            '0%, 100%': { boxShadow: '0 0 20px rgba(245, 158, 11, 0.3)' },
            '50%': { boxShadow: '0 0 40px rgba(245, 158, 11, 0.7)' },
          },
          shine: {
            '0%': { backgroundPosition: '-200% 0' },
            '100%': { backgroundPosition: '200% 0' },
          }
        }
      }
    }
  };
}

// =================================================================
// 2. TRILINGUAL DICTIONARY DATA (SINHALA, ENGLISH, TAMIL)
// =================================================================
const i18n = {
  si: {
    onlineBaas: "🟢 ලංකාව පුරා පරීක්ෂා කළ බාස්ලා 1,482ක් සූදානමින්!",
    supportLabel: "ක්ෂණික පාරිභෝගික සහාය:",
    sosBtn: "හදිසි SOS",
    logoSubtitle: "Verified Sri Lanka",
    navCalc: "මිල ගණනය",
    navPostJob: "නොමිලේ වැඩක් දාන්න",
    navSignIn: "ඇතුළු වන්න / ලියාපදිංචි",
    
    catAll: "සියලු සේවාවන්",
    catAc: "AC රෙපයාර්",
    catPlumbing: "නල සහ ජල වැඩ",
    catElectrical: "විදුලි කාර්මික",
    catVehicle: "වාහන රෙපයාර්",
    catCarpentry: "වඩු කාර්මික",
    catCctv: "CCTV & Computer",
    catPainting: "තීන්ත & වහල",
    catMasonry: "මේසන් & ගොඩනැගිලි",

    heroBadge: "ශ්‍රී ලංකාවේ අංක 1 පරීක්ෂිත බාස්ලාගේ Platform එක",
    heroTitle1: "ඔබට ආසන්නයෙන්ම විශ්වාසනීය",
    heroTitle2: "බාස් කෙනෙක් මිනිත්තු කිහිපයකින් හොයාගන්න!",
    heroDesc: "වෙනත් අයගෙන් දුරකථන අංක ඉල්ල ඉල්ලා රස්තියාදු වෙන්න එපා. දිවයිනේ ප්‍රමුඛතම ප්ලම්බර්ලා, ඉලෙක්ට්‍රීෂියන්ලා, AC සහ වාහන කාර්මිකයින් සෘජුවම සම්බන්ධ කරගන්න!",
    heroBtn: "බාස් කෙනෙක් හොයන්න",
    popularLabel: "ජනප්‍රිය සේවා:",
    
    statJobs: "සම්පූර්ණ කළ වැඩ",
    statPros: "ලියාපදිංචි බාස්ලා",
    statRating: "පාරිභෝගික තෘප්තිය",

    badge1: "ප්‍රාදේශීය පරීක්ෂිත බාස්ලා",
    badge2: "Verified & Recommended ✅",

    feat1Title: "NIC සහ Police Report පරීක්ෂිතයි",
    feat1Desc: "අපගේ ජාලයේ සෑම කාර්මික ශිල්පියෙකුගේම අනන්‍යතාවය සහ විශ්වාසනීයත්වය පරීක්ෂා කර ඇත.",
    feat2Title: "සාධාරණ සහ විනිවිද මිල ගණන්",
    feat2Desc: "වැඩේ පටන් ගන්න කලින් පැහැදිලි මිල ගණන්. අමතර සැඟවුණු ගාස්තු නොමැත.",
    feat3Title: "මිනිත්තු 30න් ස්ථානයට",
    feat3Desc: "ඔබේම නගරයේ සහ ගමේ සිටින බාස්ලා ක්ෂණිකව ඔබේ නිවසටම කැඳවා ගන්න.",
    feat4Title: "සේවා වගකීම් සහතිකය",
    feat4Desc: "සිදු කරන කාර්මික අලුත්වැඩියාවන් සඳහා දින 30ක පාරිභෝගික තෘප්තිමත් වගකීමක්.",

    tagVerified: "පරීක්ෂිත නාමාවලිය",
    servicesHeading: "ඉහළම ඇගයීම් ලත් ප්‍රාදේශීය බාස්ලා",
    servicesSub: "ඔබට ආසන්නතම කාර්මික ශිල්පීන් සෘජුවම සම්බන්ධ කරගන්න. සාධාරණ ගාස්තු සහ විශ්වාසනීය සේවය.",
    sortLabel: "පිළිවෙල:",

    estimatorBadge: "ස්වයංක්‍රීය මිල ගණනය කිරීම",
    estimatorHead: "ඔබේ වැඩේට යන ගාස්තුව කලින්ම බලාගන්න!",
    estimatorDesc: "බාස් කෙනෙක් පැමිණීමට පෙර ඔබේ අවශ්‍යතාවය අනුව ආසන්නතම සාධාරණ සේවා ගාස්තුව නිවැරදිව ගණනය කරගත හැක.",

    tagReviews: "පාරිභෝගික අත්දැකීම්",
    reviewsHeading: "ලංකාව පුරා පාරිභෝගිකයින් පවසන දේ",
    reviewsSub: "දිනපතා දහස් ගණනක් දෙනා Baas.lk හරහා සිය නිවෙස් සහ වාහන වැඩ සතුටින් විසඳා ගනී.",

    footerAbout: "ශ්‍රී ලංකාවේ නිවාස, කාර්යාල සහ වාහන අලුත්වැඩියා සඳහා පරීක්ෂිත ප්‍රාදේශීය බාස්ලා සෘජුවම සම්බන්ධ කරන අංක 1 පද්ධතිය.",
    footerServices: "ප්‍රධාන සේවාවන්",
    footerDistricts: "ආවරණය වන දිස්ත්‍රික්ක",
    footerTrust: "ආරක්ෂාව සහ සහාය"
  },

  en: {
    onlineBaas: "🟢 1,482 Sri Lankan Verified Technicians Online Now!",
    supportLabel: "Instant Customer Support:",
    sosBtn: "Emergency SOS",
    logoSubtitle: "Verified Sri Lanka",
    navCalc: "Cost Estimator",
    navPostJob: "Post Free Job",
    navSignIn: "Sign In / Register",
    
    catAll: "All Services",
    catAc: "AC Repair",
    catPlumbing: "Plumbing",
    catElectrical: "Electrical",
    catVehicle: "Vehicle Care",
    catCarpentry: "Carpentry",
    catCctv: "CCTV & Tech",
    catPainting: "Painting & Roof",
    catMasonry: "Masonry & Civil",

    heroBadge: "#1 Verified Technician & Tradesmen Platform in Sri Lanka",
    heroTitle1: "Find Verified Local",
    heroTitle2: "Baas In Minutes, Stress-Free!",
    heroDesc: "No more asking around for contacts. Connect directly with vetted plumbers, electricians, mechanics, and technicians across Colombo, Kandy, Galle, Jaffna and islandwide!",
    heroBtn: "Find A Baas",
    popularLabel: "Popular Services:",
    
    statJobs: "Jobs Completed",
    statPros: "Registered Technicians",
    statRating: "Customer Satisfaction",

    badge1: "Vetted Local Technicians",
    badge2: "Verified & Recommended ✅",

    feat1Title: "NIC & Police Cleared",
    feat1Desc: "Every professional technician on our platform undergoes strict identity and background checks.",
    feat2Title: "Fair & Transparent Pricing",
    feat2Desc: "Upfront pricing before work begins. Absolutely zero hidden fees or unexpected costs.",
    feat3Title: "Arrives in 30 Minutes",
    feat3Desc: "Get local specialists from your own neighborhood right to your doorstep promptly.",
    feat4Title: "30-Day Work Warranty",
    feat4Desc: "Enjoy complete peace of mind with our 30-day workmanship guarantee on all repairs.",

    tagVerified: "Verified Directory",
    servicesHeading: "Top Rated Local Technicians",
    servicesSub: "Connect directly with local specialists. Transparent rates and verified workmanship.",
    sortLabel: "Sort By:",

    estimatorBadge: "Automated Cost Estimator",
    estimatorHead: "Estimate Your Repair Cost Upfront!",
    estimatorDesc: "Calculate fair, standard market rates in LKR before dispatching a technician.",

    tagReviews: "Customer Stories",
    reviewsHeading: "What Sri Lankans Say About Us",
    reviewsSub: "Thousands of homeowners and vehicle owners trust Baas.lk every single day.",

    footerAbout: "#1 Sri Lankan platform connecting verified local tradesmen directly for home, office, and vehicle repairs.",
    footerServices: "Main Services",
    footerDistricts: "Districts Covered",
    footerTrust: "Trust & Safety"
  },

  ta: {
    onlineBaas: "🟢 இலங்கை முழுவதும் சரிபார்க்கப்பட்ட 1,482 கைவினைஞர்கள் தயார்!",
    supportLabel: "உடனடி வாடிக்கையாளர் உதவி:",
    sosBtn: "அவசர SOS",
    logoSubtitle: "Verified Sri Lanka",
    navCalc: "கட்டணக் கணிப்பான்",
    navPostJob: "இலவச வேலை பதிவிடுங்கள்",
    navSignIn: "உள்நுழைக / பதிவு செய்க",
    
    catAll: "அனைத்து சேவைகளும்",
    catAc: "ஏசி பழுதுபார்த்தல்",
    catPlumbing: "குழாய் & நீர் வேலைகள்",
    catElectrical: "மின்சார வேலைகள்",
    catVehicle: "வாகன பழுதுபார்த்தல்",
    catCarpentry: "தச்சு வேலைகள்",
    catCctv: "CCTV & கணினி",
    catPainting: "வண்ணம் & கூரை",
    catMasonry: "மேசன் & கட்டிட வேலை",

    heroBadge: "இலங்கையின் முதன்மை சரிபார்க்கப்பட்ட கைவினைஞர்கள் தளம்",
    heroTitle1: "உங்களுக்கு அருகிலுள்ள நம்பகமான",
    heroTitle2: "கைவினைஞரை சில நிமிடங்களில் கண்டறியுங்கள்!",
    heroDesc: "மற்றவர்களிடம் தொலைபேசி எண்களைக் கேட்டு அலைய வேண்டாம். கொழும்பு, கண்டி, காலி, யாழ்ப்பாணம் மற்றும் நாடு தழுவிய பிளம்பர்கள், எலக்ட்ரீஷியன்களை உடனே தொடர்பு கொள்ளுங்கள்!",
    heroBtn: "கைவினைஞரைத் தேடுங்கள்",
    popularLabel: "பிரபலமான சேவைகள்:",
    
    statJobs: "முடிந்த வேலைகள்",
    statPros: "பதிவுசெய்த கைவினைஞர்கள்",
    statRating: "வாடிக்கையாளர் திருப்தி",

    badge1: "சரிபார்க்கப்பட்ட கைவினைஞர்கள்",
    badge2: "Verified & Recommended ✅",

    feat1Title: "தேசிய அடையாள அட்டை & காவல் சரிபார்ப்பு",
    feat1Desc: "எங்கள் தளத்தில் உள்ள ஒவ்வொரு கைவினைஞரும் முழுமையான அடையாள மற்றும் பின்னணி சரிபார்ப்புக்கு உட்படுத்தப்படுகிறார்கள்.",
    feat2Title: "நியாயமான வெளிப்படையான கட்டணங்கள்",
    feat2Desc: "வேலையைத் தொடங்குவதற்கு முன்பே தெளிவான கட்டணம். மறைமுகக் கட்டணங்கள் எதுவும் இல்லை.",
    feat3Title: "30 நிமிடங்களில் விரைவு வருகை",
    feat3Desc: "உங்கள் சொந்த நகரத்தில் உள்ள கைவினைஞர்களை விரைவாக உங்கள் வீட்டுக்கு வரவழைத்துக் கொள்ளுங்கள்.",
    feat4Title: "30 நாட்கள் சேவை உத்தரவாதம்",
    feat4Desc: "செய்யப்படும் அனைத்து தொழில்நுட்ப பழுதுபார்ப்புகளுக்கும் 30 நாட்கள் முழு உத்தரவாதம்.",

    tagVerified: "சரிபார்க்கப்பட்ட பட்டியல்",
    servicesHeading: "உயர் மதிப்பீடு பெற்ற உள்ளூர் கைவினைஞர்கள்",
    servicesSub: "உங்களுக்கு அருகிலுள்ள கைவினைஞர்களை நேரடியாக தொடர்பு கொள்ளுங்கள். நியாயமான கட்டணங்கள்.",
    sortLabel: "வரிசைப்படுத்துக:",

    estimatorBadge: "தானியங்கி கட்டணக் கணிப்பான்",
    estimatorHead: "உங்கள் வேலைக்கான கட்டணத்தை முன்கூட்டியே கணக்கிடுங்கள்!",
    estimatorDesc: "கைவினைஞர் வருவதற்கு முன் நியாயமான சேவை கட்டணத்தை துல்லியமாக கணக்கிடலாம்.",

    tagReviews: "வாடிக்கையாளர் அனுபவங்கள்",
    reviewsHeading: "வாடிக்கையாளர்கள் கூறுவது என்ன",
    reviewsSub: "தினமும் ஆயிரக்கணக்கான மக்கள் Baas.lk மூலம் தங்கள் தேவைகளை பூர்த்தி செய்கிறார்கள்.",

    footerAbout: "இலங்கையில் வீடுகள், அலுவலகங்கள் மற்றும் வாகன பழுதுபார்ப்புகளுக்காக நம்பகமான கைவினைஞர்களை இணைக்கும் முதன்மை தளம்.",
    footerServices: "முக்கிய சேவைகள்",
    footerDistricts: "சேவை மாவட்டங்கள்",
    footerTrust: "பாதுகாப்பு & உதவி"
  }
};

let currentLang = 'si';

// Set Language Function
function setLang(lang) {
  currentLang = lang;
  const dict = i18n[lang];
  if (!dict) return;

  // Safe element text updater
  const updateText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.innerText = text;
  };

  // Announcement & Nav
  updateText('txt-online-baas', dict.onlineBaas);
  updateText('txt-support-label', dict.supportLabel);
  updateText('txt-sos-btn', dict.sosBtn);
  updateText('txt-logo-subtitle', dict.logoSubtitle);
  updateText('txt-nav-calc', dict.navCalc);
  updateText('txt-nav-postjob', dict.navPostJob);
  updateText('txt-nav-signin', dict.navSignIn);

  // Category Tabs
  updateText('cat-all', dict.catAll);
  updateText('cat-ac', dict.catAc);
  updateText('cat-plumbing', dict.catPlumbing);
  updateText('cat-electrical', dict.catElectrical);
  updateText('cat-vehicle', dict.catVehicle);
  updateText('cat-carpentry', dict.catCarpentry);
  updateText('cat-cctv', dict.catCctv);
  updateText('cat-painting', dict.catPainting);
  updateText('cat-masonry', dict.catMasonry);

  // Hero Section
  updateText('txt-hero-badge', dict.heroBadge);
  updateText('txt-hero-title-1', dict.heroTitle1);
  updateText('txt-hero-title-2', dict.heroTitle2);
  updateText('txt-hero-desc', dict.heroDesc);
  updateText('txt-hero-btn', dict.heroBtn);
  updateText('txt-popular-label', dict.popularLabel);

  updateText('txt-stat-jobs', dict.statJobs);
  updateText('txt-stat-pros', dict.statPros);
  updateText('txt-stat-rating', dict.statRating);

  updateText('txt-badge-1', dict.badge1);
  updateText('txt-badge-2', dict.badge2);

  // Pillars
  updateText('feat-1-title', dict.feat1Title);
  updateText('feat-1-desc', dict.feat1Desc);
  updateText('feat-2-title', dict.feat2Title);
  updateText('feat-2-desc', dict.feat2Desc);
  updateText('feat-3-title', dict.feat3Title);
  updateText('feat-3-desc', dict.feat3Desc);
  updateText('feat-4-title', dict.feat4Title);
  updateText('feat-4-desc', dict.feat4Desc);

  // Services Section
  updateText('txt-tag-verified', dict.tagVerified);
  updateText('txt-services-heading', dict.servicesHeading);
  updateText('txt-services-sub', dict.servicesSub);
  updateText('txt-sort-label', dict.sortLabel);

  // Estimator & Reviews
  updateText('txt-estimator-badge', dict.estimatorBadge);
  updateText('txt-estimator-head', dict.estimatorHead);
  updateText('txt-estimator-desc', dict.estimatorDesc);

  updateText('txt-tag-reviews', dict.tagReviews);
  updateText('txt-reviews-heading', dict.reviewsHeading);
  updateText('txt-reviews-sub', dict.reviewsSub);

  // Footer
  updateText('txt-footer-about', dict.footerAbout);
  updateText('txt-footer-services', dict.footerServices);
  updateText('txt-footer-districts', dict.footerDistricts);
  updateText('txt-footer-trust', dict.footerTrust);

  // Update button styling states
  const btnSi = document.getElementById('lang-si');
  const btnEn = document.getElementById('lang-en');
  const btnTa = document.getElementById('lang-ta');

  const activeClass = "px-3 py-1 rounded-full text-[11px] font-black transition-all bg-gradient-to-r from-brandOrange-500 to-amber-500 text-slate-950 shadow-md";
  const inactiveClass = "px-3 py-1 rounded-full text-[11px] font-bold text-slate-400 hover:text-white transition-all";

  if (btnSi) btnSi.className = lang === 'si' ? activeClass : inactiveClass;
  if (btnEn) btnEn.className = lang === 'en' ? activeClass : inactiveClass;
  if (btnTa) btnTa.className = lang === 'ta' ? activeClass : inactiveClass;

  const toastMsgs = {
    si: "භාෂාව සිංහල ලෙස මාරු කරන ලදී",
    en: "Switched language to English",
    ta: "மொழி தமிழாக மாற்றப்பட்டது"
  };
  showToast(toastMsgs[lang], "info");
}

// =================================================================
// 3. 3D TILT EFFECT FOR CARDS (MOUSE PERSPECTIVE)
// =================================================================
function init3DTilt() {
  const cards = document.querySelectorAll('.tilt-card');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -9; // Max 9 deg rotation
      const rotateY = ((x - centerX) / centerX) * 9;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });
}

// =================================================================
// 4. SCROLL REVEAL & STAGGERED ANIMATIONS
// =================================================================
function initStaggeredCards() {
  const cards = document.querySelectorAll('.service-card');
  cards.forEach((card, index) => {
    card.classList.add('reveal-elem');
    const staggerNum = (index % 4) + 1;
    card.classList.add(`stagger-${staggerNum}`);
  });
}

function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal-elem");
  const windowHeight = window.innerHeight;
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 60) {
      el.classList.add("active");
    }
  });
}

// =================================================================
// 5. TOAST NOTIFICATIONS SYSTEM
// =================================================================
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  const isRose = type === 'danger';
  
  let bgBorder = 'bg-brandBlue-950 border-brandOrange-500';
  if (isRose) bgBorder = 'bg-rose-950 border-rose-500';
  if (type === 'info') bgBorder = 'bg-slate-900 border-cyan-400';

  toast.className = `pointer-events-auto flex items-center gap-3 ${bgBorder} text-white border-l-4 px-5 py-3.5 rounded-2xl shadow-2xl text-xs font-bold transition-all duration-300 transform translate-y-4 opacity-0 max-w-sm backdrop-blur-md`;
  
  let icon = 'fa-circle-check text-emerald-400';
  if (isRose) icon = 'fa-triangle-exclamation text-rose-400';
  if (type === 'info') icon = 'fa-circle-info text-cyan-300';

  toast.innerHTML = `<i class="fa-solid ${icon} text-lg shrink-0"></i><span>${message}</span>`;
  
  container.appendChild(toast);
  setTimeout(() => toast.classList.remove('translate-y-4', 'opacity-0'), 10);
  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-4');
    setTimeout(() => toast.remove(), 350);
  }, 3600);
}

// =================================================================
// 6. SEARCH & FILTER ENGINE
// =================================================================
function handleQuickSearch(query) {
  const districtSelect = document.getElementById('hero-district-select');
  const district = districtSelect ? districtSelect.value : 'all';
  applyFilters(query.toLowerCase(), district);
}

function executeHeroSearch() {
  const queryInput = document.getElementById('hero-search-input');
  const districtSelect = document.getElementById('hero-district-select');
  const query = queryInput ? queryInput.value.toLowerCase() : '';
  const district = districtSelect ? districtSelect.value : 'all';
  applyFilters(query, district);

  const section = document.getElementById('services-section');
  if (section) section.scrollIntoView({ behavior: 'smooth' });
}

function quickFilter(term) {
  const input = document.getElementById('hero-search-input');
  if (input) input.value = term;
  executeHeroSearch();
}

function filterDistrict(dist) {
  const select = document.getElementById('hero-district-select');
  if (select) select.value = dist;
  executeHeroSearch();
}

function filterCategory(cat, btn) {
  const btns = document.querySelectorAll('.category-btn');
  btns.forEach(b => {
    b.className = "category-btn hover:text-brandBlue-600 hover:bg-slate-100 px-3 py-1.5 rounded-xl transition flex items-center gap-1.5 border border-transparent hover:border-slate-200";
  });
  if (btn) {
    btn.className = "category-btn active bg-brandBlue-600 text-white px-3.5 py-1.5 rounded-xl shadow-md transition flex items-center gap-1.5";
  }

  const cards = document.querySelectorAll('.service-card');
  let visibleCount = 0;
  cards.forEach(card => {
    if (cat === 'all' || card.dataset.category === cat) {
      card.style.display = 'flex';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });

  toggleNoResults(visibleCount === 0);
  showToast(`ප්‍රවර්ගය: ${cat.toUpperCase()}`, 'info');
}

function applyFilters(keyword = '', district = 'all') {
  const cards = document.querySelectorAll('.service-card');
  let count = 0;

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    const cardDistrict = card.dataset.district || '';
    const matchText = !keyword || text.includes(keyword);
    const matchDistrict = (district === 'all') || (cardDistrict === district);

    if (matchText && matchDistrict) {
      card.style.display = 'flex';
      count++;
    } else {
      card.style.display = 'none';
    }
  });

  toggleNoResults(count === 0);
}

function toggleNoResults(show) {
  const noRes = document.getElementById('no-results');
  if (!noRes) return;
  if (show) {
    noRes.classList.remove('hidden');
  } else {
    noRes.classList.add('hidden');
  }
}

function resetFilters() {
  const queryInput = document.getElementById('hero-search-input');
  const districtSelect = document.getElementById('hero-district-select');
  if (queryInput) queryInput.value = '';
  if (districtSelect) districtSelect.value = 'all';
  const cards = document.querySelectorAll('.service-card');
  cards.forEach(c => c.style.display = 'flex');
  toggleNoResults(false);
  showToast('සියලු බාස්ලා නැවත පෙන්වයි', 'info');
}

function sortCards(criteria) {
  const grid = document.getElementById('services-grid');
  if (!grid) return;
  const cards = Array.from(grid.querySelectorAll('.service-card'));

  cards.sort((a, b) => {
    if (criteria === 'rating') {
      return parseFloat(b.dataset.rating || 0) - parseFloat(a.dataset.rating || 0);
    } else if (criteria === 'jobs') {
      return parseInt(b.dataset.jobs || 0) - parseInt(a.dataset.jobs || 0);
    } else if (criteria === 'price-low') {
      return parseInt(a.dataset.price || 0) - parseInt(b.dataset.price || 0);
    }
    return 0;
  });

  cards.forEach(card => grid.appendChild(card));
  showToast('පිළිවෙල සාර්ථකව යාවත්කාලීන විය', 'info');
}

// =================================================================
// 7. MODALS SYSTEM
// =================================================================
function toggleModal(modalId, cardId, show) {
  const modal = document.getElementById(modalId);
  const card = document.getElementById(cardId);
  if (!modal || !card) return;
  if (show) {
    modal.classList.remove('opacity-0', 'pointer-events-none');
    card.classList.remove('scale-95', 'opacity-0');
    card.classList.add('scale-100', 'opacity-100');
    document.body.style.overflow = 'hidden';
  } else {
    modal.classList.add('opacity-0', 'pointer-events-none');
    card.classList.remove('scale-100', 'opacity-100');
    card.classList.add('scale-95', 'opacity-0');
    document.body.style.overflow = 'auto';
  }
}

// 7.1 Auth Modal
function openAuthModal(mode = 'signin') {
  switchAuthMode(mode);
  toggleModal('auth-modal', 'auth-modal-card', true);
}

function closeAuthModal() {
  toggleModal('auth-modal', 'auth-modal-card', false);
  setTimeout(() => { 
    switchAuthMode('signin'); 
    nextAuthStep(1); 
  }, 400);
}

function switchAuthMode(mode) {
  const btnSignin = document.getElementById('tab-btn-signin');
  const btnSignup = document.getElementById('tab-btn-signup');
  const viewSignin = document.getElementById('view-signin');
  const viewSignup = document.getElementById('view-signup');
  const progressContainer = document.getElementById('auth-progress-container');

  if (!btnSignin || !btnSignup || !viewSignin || !viewSignup) return;

  if (mode === 'signin') {
    btnSignin.className = "flex-1 py-3 text-sm font-black rounded-xl transition text-brandBlue-700 bg-white shadow-md";
    btnSignup.className = "flex-1 py-3 text-sm font-black text-slate-500 hover:text-slate-800 rounded-xl transition hover:bg-slate-200/50";
    viewSignin.classList.remove('hidden');
    viewSignup.classList.add('hidden');
    if (progressContainer) progressContainer.classList.add('hidden');
  } else {
    btnSignup.className = "flex-1 py-3 text-sm font-black rounded-xl transition text-brandBlue-700 bg-white shadow-md";
    btnSignin.className = "flex-1 py-3 text-sm font-black text-slate-500 hover:text-slate-800 rounded-xl transition hover:bg-slate-200/50";
    viewSignup.classList.remove('hidden');
    viewSignin.classList.add('hidden');
    if (progressContainer) progressContainer.classList.remove('hidden');
    nextAuthStep(1);
  }
}

function checkPasswordStrength(pw) {
  const meter = document.getElementById('pass-meter');
  if (!meter) return;
  meter.className = 'strength-meter';
  if (!pw || pw.length === 0) return;
  let str = 0;
  if (pw.length > 5) str++;
  if (pw.length > 8 && /[A-Z]/.test(pw) && /[0-9]/.test(pw)) str++;
  if (pw.length > 10 && /[^A-Za-z0-9]/.test(pw)) str++;
  if (str === 1) meter.classList.add('strength-1');
  if (str === 2) meter.classList.add('strength-2');
  if (str >= 3) meter.classList.add('strength-3');
}

function nextAuthStep(step) {
  const totalSteps = 4;
  const bar = document.getElementById('auth-progress-bar');
  if (bar) bar.style.width = `${(step / totalSteps) * 100}%`;

  for (let i = 1; i <= totalSteps; i++) {
    const panel = document.getElementById(`su-step-${i}`);
    if (panel) {
      if (i < step) {
        panel.style.transform = 'translateX(-100%)';
      } else if (i === step) {
        panel.style.transform = 'translateX(0)';
      } else {
        panel.style.transform = 'translateX(100%)';
      }
    }
  }

  if (step === 3) {
    const checkedRole = document.querySelector('input[name="su-role"]:checked');
    const role = checkedRole ? checkedRole.value : 'customer';
    const extra = document.getElementById('su-baas-extra');
    if (extra) {
      if (role === 'baas') extra.classList.remove('hidden');
      else extra.classList.add('hidden');
    }
  }
  
  if (step === 4) {
    const phoneInput = document.getElementById('su-phone');
    const phone = (phoneInput && phoneInput.value) ? phoneInput.value : "77 *** ****";
    const otpDisplay = document.getElementById('otp-phone-display');
    if (otpDisplay) otpDisplay.innerText = `+94 ${phone}`;
  }
}

function simulateAuthSuccess(mode) {
  if (mode === 'signin') {
    showToast('Successfully signed in.', 'success');
    closeAuthModal();
  } else {
    const successOverlay = document.getElementById('su-success');
    const icon = document.getElementById('success-icon');
    if (successOverlay) {
      successOverlay.classList.remove('pointer-events-none', 'opacity-0');
      if (icon) setTimeout(() => icon.classList.remove('scale-50'), 50);
      setTimeout(() => {
        closeAuthModal();
        successOverlay.classList.add('pointer-events-none', 'opacity-0');
        if (icon) icon.classList.add('scale-50');
        showToast('Account created successfully!', 'success');
      }, 2000);
    }
  }
}

// 7.2 Profile Modal
let activeProfileBaas = {};
function openProfileModal(name, title, rating, jobs, location, img, cat, exp) {
  activeProfileBaas = { name, title, rating, jobs, location, img, cat, exp };
  const setName = document.getElementById('prof-name');
  const setTitle = document.getElementById('prof-title');
  const setRating = document.getElementById('prof-rating');
  const setJobs = document.getElementById('prof-jobs');
  const setLoc = document.getElementById('prof-location');
  const setImg = document.getElementById('prof-img');
  const setExp = document.getElementById('prof-exp');

  if (setName) setName.innerText = name;
  if (setTitle) setTitle.innerText = title;
  if (setRating) setRating.innerText = rating;
  if (setJobs) setJobs.innerText = jobs;
  if (setLoc) setLoc.innerText = location;
  if (setImg) setImg.src = img;
  if (setExp) setExp.innerText = exp;

  toggleModal('profile-modal', 'profile-modal-card', true);
}

function closeProfileModal() {
  toggleModal('profile-modal', 'profile-modal-card', false);
}

function openBookingFromProfile() {
  closeProfileModal();
  openBookingModal(activeProfileBaas.name, activeProfileBaas.cat || 'Service', '2500');
}

function openWaFromProfile() {
  openDirectConnect(activeProfileBaas.name, '0771234567');
}

// 7.3 Direct Booking Modal
function openBookingModal(name, service, price) {
  const baasNameEl = document.getElementById('book-baas-name');
  const rateDisplayEl = document.getElementById('book-rate-display');
  const dateInput = document.getElementById('book-date');

  if (baasNameEl) baasNameEl.innerText = `${name} (${service})`;
  if (rateDisplayEl) rateDisplayEl.innerText = `රු. ${Number(price).toLocaleString()}`;
  
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.value = today;
    dateInput.min = today;
  }

  toggleModal('booking-modal', 'booking-modal-card', true);
}

function closeBookingModal() {
  toggleModal('booking-modal', 'booking-modal-card', false);
}

function handleBookingSubmit(e) {
  e.preventDefault();
  closeBookingModal();
  showToast('ඔබගේ සේවා වෙන්කිරීම සාර්ථකයි! කාර්මික ශිල්පියා ඔබ අමතනු ඇත.', 'success');
}

// 7.4 Emergency SOS Modal
function openSosModal() {
  toggleModal('sos-modal', 'sos-modal-card', true);
}

function closeSosModal() {
  toggleModal('sos-modal', 'sos-modal-card', false);
}

function dispatchUrgentSos() {
  closeSosModal();
  showToast('හදිසි SOS ඉල්ලීම යොමු විය! මිනිත්තු 30 තුළ බාස් කෙනෙකු ඔබ අමතනු ඇත.', 'danger');
}

// 7.5 Post Free Job Modal
function openPostJobModal() {
  toggleModal('job-modal', 'job-modal-card', true);
}

function closeJobModal() {
  toggleModal('job-modal', 'job-modal-card', false);
}

function handlePostJobSubmit(e) {
  e.preventDefault();
  closeJobModal();
  showToast('ඔබගේ වැඩේ සාර්ථකව පළ කරන ලදී! ආසන්න බාස්ලා වෙත දැනුම් දුනි.', 'success');
}

function openPostJobWithCost() {
  const servSelect = document.getElementById('calc-service');
  const serv = servSelect ? servSelect.value : 'ac';
  const display = document.getElementById('calc-total-display');
  const budgetText = display ? display.innerText : 'රු. 5,000';
  
  const postCat = document.getElementById('post-job-cat');
  const postBudget = document.getElementById('post-job-budget');
  const postTitle = document.getElementById('post-job-title');

  if (postCat) postCat.value = serv;
  if (postBudget) postBudget.value = budgetText;
  if (postTitle) postTitle.value = `${serv.toUpperCase()} අලුත්වැඩියාව සඳහා බාස් කෙනෙක් අවශ්‍යයි`;
  
  openPostJobModal();
}

// 7.6 Direct WhatsApp Connect
function openDirectConnect(name, phone) {
  const msg = encodeURIComponent(`හෙලෝ ${name}, මම Baas.lk හරහා සම්බන්ධ වෙන්නේ. මට වැඩක් කරගැනීමට අවශ්‍යයි.`);
  window.open(`https://wa.me/94${phone.replace(/^0/, '')}?text=${msg}`, '_blank');
  showToast(`${name} වෙත WhatsApp පණිවිඩයක් විවෘත වේ...`, 'info');
}

// =================================================================
// 8. DYNAMIC COST ESTIMATOR LOGIC
// =================================================================
function recalculateCost() {
  const serviceRates = {
    ac: 2500,
    plumbing: 1800,
    electrical: 2000,
    vehicle: 3000,
    cctv: 2200,
    carpentry: 2000
  };

  const selectedServiceEl = document.getElementById('calc-service');
  const hoursEl = document.getElementById('calc-hours');
  const emergencyEl = document.getElementById('calc-emergency');
  const totalDisplay = document.getElementById('calc-total-display');

  const selectedService = selectedServiceEl ? selectedServiceEl.value : 'ac';
  const ratePerHour = serviceRates[selectedService] || 2000;
  const hours = hoursEl ? (parseInt(hoursEl.value) || 2) : 2;
  const isUrgent = emergencyEl ? emergencyEl.checked : false;

  const baseCost = ratePerHour * hours;
  const emergencyFee = isUrgent ? 1000 : 0;
  
  const minTotal = baseCost + emergencyFee;
  const maxTotal = Math.round(minTotal * 1.25);

  if (totalDisplay) {
    totalDisplay.innerText = `රු. ${minTotal.toLocaleString()} - ${maxTotal.toLocaleString()}`;
  }
}

function openEstimatorModal() {
  const section = document.getElementById('calc-service');
  if (section) {
    section.closest('section').scrollIntoView({ behavior: 'smooth' });
    showToast('මිල ගණනය කිරීමේ උපකරණය සූදානම්!', 'info');
  }
}

// =================================================================
// 9. PARTICLES STARFIELD GENERATOR
// =================================================================
function initHeroParticles() {
  const canvas = document.getElementById('hero-particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  const particleCount = 80;

  function resize() {
    width = canvas.width = canvas.offsetWidth || window.innerWidth;
    height = canvas.height = canvas.offsetHeight || 600;
  }
  window.addEventListener('resize', resize);
  resize();

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.size = Math.random() * 2 + 0.5;
      this.alpha = Math.random() * 0.5 + 0.1;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      if (this.y > height) this.y = 0;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }
  animate();
}

// =================================================================
// 10. NUMBER COUNTER UP ANIMATION
// =================================================================
function initCounters() {
  const section = document.getElementById('stats-counter-section');
  if (!section) return;
  const counters = document.querySelectorAll('.counter-up');
  let started = false;

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !started) {
      started = true;
      counters.forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-target'));
        const decimals = counter.getAttribute('data-decimals') ? parseInt(counter.getAttribute('data-decimals')) : 0;
        const duration = 2000;
        const stepTime = Math.abs(Math.floor(duration / 60));
        let current = 0;
        
        const timer = setInterval(() => {
          current += target / (duration / stepTime);
          if (current >= target) {
            counter.innerText = (decimals === 0 ? target.toLocaleString() : target.toFixed(decimals));
            clearInterval(timer);
          } else {
            counter.innerText = (decimals === 0 ? Math.floor(current).toLocaleString() : current.toFixed(decimals));
          }
        }, stepTime);
      });
    }
  }, { threshold: 0.5 });
  observer.observe(section);
}

// =================================================================
// 11. MAGNETIC BUTTONS PHYSICS
// =================================================================
function initMagneticButtons() {
  const magneticBtns = document.querySelectorAll('.magnetic-btn');
  magneticBtns.forEach(btn => {
    const wrap = btn.closest('.magnetic-wrap');
    if (!wrap) return;
    wrap.addEventListener('mousemove', (e) => {
      const rect = wrap.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.35;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.35;
      btn.style.transform = `translate(${x}px, ${y}px)`;
    });
    wrap.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0px, 0px)';
    });
    btn.style.transition = 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)';
  });
}

// =================================================================
// 12. INITIALIZATION ON DOM READY
// =================================================================
document.addEventListener('DOMContentLoaded', () => {
  init3DTilt();
  initStaggeredCards();
  revealOnScroll();
  window.addEventListener("scroll", revealOnScroll);
  initHeroParticles();
  initCounters();
  initMagneticButtons();

  // Hotkey: Ctrl + K focuses search bar
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      const search = document.getElementById('header-search');
      if (search) search.focus();
    }
  });

  // Calculate initial cost
  recalculateCost();
});