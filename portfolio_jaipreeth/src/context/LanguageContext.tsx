import { createContext, useContext, useState, ReactNode } from 'react';

interface Language {
  code: string;
  name: string;
  flag: string;
}

interface LanguageContextType {
  currentLanguage: Language;
  languages: Language[];
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
  { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' },
  { code: 'te', name: 'తెలుగు', flag: '🇮🇳' },
];

const translations: Record<string, Record<string, string>> = {
  en: {
    // Header
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.greeting': 'Namaste, I am',
    'hero.name': 'Tiruvaipati Sree Ranga Lakshmi Sai Jaipreeth',
    'hero.title': 'Competitive Programmer & Go Backend Developer',
    'hero.subtitle': 'Crafting efficient solutions with a passion for ML and algorithms',
    'hero.cta': 'Explore My Work',
    
    // About
    'about.title': 'About Me',
    'about.description': 'Passionate developer with expertise in full-stack development, machine learning, and system architecture. Currently pursuing B.Tech at IIITM Gwalior with a CGPA of 9.36/10.0.',
    
    // Education
    'education.title': 'Education',
    'education.degree': 'B.Tech in Mathematics and Scientific Computing',
    'education.institution': 'Indian Institute of Information Technology and Management, Gwalior',
    'education.duration': 'Aug 2023 – Jun 2027',
    'education.cgpa': 'CGPA: 9.36/10.0',
    
    // Projects
    'projects.title': 'Featured Projects',
    'projects.fintrack.title': 'FinTrack',
    'projects.fintrack.description': 'Full-stack expense forecasting system processing 1M+ records with 90%+ prediction accuracy.',
    'projects.mumosa.title': 'Mumosa',
    'projects.mumosa.description': 'AI-powered retail supply chain system for 50+ stores — predicts demand and optimizes delivery.',
    'projects.finoptima.title': 'FinOptima',
    'projects.finoptima.description': 'High-performance fintech system capable of >10k TPS with real-time fraud detection.',
    'projects.netguard.title': 'NetGuardAI',
    'projects.netguard.description': 'Monitors 1 Gbps traffic and detects cyber attacks with 98%+ ML accuracy.',
    
    // Skills
    'skills.title': 'Technical Skills',
    'skills.languages': 'Languages',
    'skills.backend': 'Backend Development',
    'skills.ml': 'ML & Data Science',
    'skills.databases': 'Databases & Storage',
    'skills.tools': 'Tools & DevOps',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.description': 'Let\'s connect and build something amazing together',
    'contact.email': 'jaipreethtsrls17@gmail.com',
    'contact.phone': '+91-93981-97626',
  },
  hi: {
    // Header
    'nav.about': 'के बारे में',
    'nav.projects': 'परियोजनाएं',
    'nav.skills': 'कौशल',
    'nav.contact': 'संपर्क',
    
    // Hero Section
    'hero.greeting': 'नमस्ते, मैं हूँ',
    'hero.name': 'तिरुवाइपाटी श्री रंगा लक्ष्मी साई जैप्रीत',
    'hero.title': 'प्रतियोगी प्रोग्रामर और Go बैकएंड डेवलपर',
    'hero.subtitle': 'ML और एल्गोरिदम के प्रति जुनून के साथ कुशल समाधान तैयार करना',
    'hero.cta': 'मेरा काम देखें',
    
    // About
    'about.title': 'मेरे बारे में',
    'about.description': 'फुल-स्टैक डेवलपमेंट, मशीन लर्निंग, और सिस्टम आर्किटेक्चर में विशेषज्ञता रखने वाला उत्साही डेवलपर। वर्तमान में IIITM ग्वालियर से B.Tech कर रहा हूं 9.36/10.0 CGPA के साथ।',
    
    // Education
    'education.title': 'शिक्षा',
    'education.degree': 'गणित और वैज्ञानिक कंप्यूटिंग में B.Tech',
    'education.institution': 'भारतीय सूचना प्रौद्योगिकी और प्रबंधन संस्थान, ग्वालियर',
    'education.duration': 'अगस्त 2023 – जून 2027',
    'education.cgpa': 'CGPA: 9.36/10.0',
    
    // Projects
    'projects.title': 'विशेष परियोजनाएं',
    'projects.fintrack.title': 'FinTrack',
    'projects.fintrack.description': 'फुल-स्टैक व्यय पूर्वानुमान सिस्टम जो 1M+ रिकॉर्ड प्रोसेस करता है 90%+ सटीकता के साथ।',
    'projects.mumosa.title': 'Mumosa',
    'projects.mumosa.description': 'AI-संचालित खुदरा आपूर्ति श्रृंखला सिस्टम 50+ स्टोर के लिए — मांग की भविष्यवाणी और डिलीवरी अनुकूलन।',
    'projects.finoptima.title': 'FinOptima',
    'projects.finoptima.description': 'उच्च-प्रदर्शन फिनटेक सिस्टम जो >10k TPS सक्षम है रियल-टाइम धोखाधड़ी का पता लगाने के साथ।',
    'projects.netguard.title': 'NetGuardAI',
    'projects.netguard.description': '1 Gbps ट्रैफिक की निगरानी करता है और 98%+ ML सटीकता के साथ साइबर हमलों का पता लगाता है।',
    
    // Skills
    'skills.title': 'तकनीकी कौशल',
    'skills.languages': 'भाषाएं',
    'skills.backend': 'बैकएंड डेवलपमेंट',
    'skills.ml': 'ML और डेटा साइंस',
    'skills.databases': 'डेटाबेस और स्टोरेज',
    'skills.tools': 'टूल्स और DevOps',
    
    // Contact
    'contact.title': 'संपर्क में रहें',
    'contact.description': 'आइए जुड़ें और साथ मिलकर कुछ अद्भुत बनाएं',
    'contact.email': 'jaipreethtsrls17@gmail.com',
    'contact.phone': '+91-93981-97626',
  },
  ta: {
    // Header
    'nav.about': 'பற்றி',
    'nav.projects': 'திட்டங்கள்',
    'nav.skills': 'திறன்கள்',
    'nav.contact': 'தொடர்பு',
    
    // Hero Section
    'hero.greeting': 'வணக்கம், நான்',
    'hero.name': 'திருவைபாடி ஸ்ரீ ரங்கா லக்ஷ்மி சாய் ஜைப்ரீத்',
    'hero.title': 'போட்டி நிரலாளர் & Go பின்தள உருவாக்குநர்',
    'hero.subtitle': 'ML மற்றும் நெறிமுறைகள் மீது ஆர்வத்துடன் திறமையான தீர்வுகளை உருவாக்குதல்',
    'hero.cta': 'என் வேலையை ஆராயுங்கள்',
    
    // About
    'about.title': 'என்னைப் பற்றி',
    'about.description': 'முழு-அடுக்கு மேம்பாடு, இயந்திர கற்றல் மற்றும் அமைப்பு கட்டமைப்பில் நிபுணத்துவம் கொண்ட ஆர்வமுள்ள உருவாக்குநர். தற்போது IIITM குவாலியரில் B.Tech படித்து வருகிறேன் 9.36/10.0 CGPA உடன்.',
    
    // Education
    'education.title': 'கல்வி',
    'education.degree': 'கணிதம் மற்றும் அறிவியல் கணினியியலில் B.Tech',
    'education.institution': 'இந்திய தகவல் தொழில்நுட்ப மற்றும் நிர்வாக நிறுவனம், குவாலியர்',
    'education.duration': 'ஆகஸ்ட் 2023 – ஜூன் 2027',
    'education.cgpa': 'CGPA: 9.36/10.0',
    
    // Projects
    'projects.title': 'சிறப்பு திட்டங்கள்',
    'projects.fintrack.title': 'FinTrack',
    'projects.fintrack.description': 'முழு-அடுக்கு செலவு முன்னறிவிப்பு அமைப்பு 1M+ பதிவுகளை 90%+ துல்லியத்துடன் செயலாக்குகிறது.',
    'projects.mumosa.title': 'Mumosa',
    'projects.mumosa.description': 'AI-இயக்கப்படும் சில்லறை விநியோக சங்கிலி அமைப்பு 50+ கடைகளுக்கு — தேவையை முன்னறிவித்து விநியோகத்தை மேம்படுத்துகிறது.',
    'projects.finoptima.title': 'FinOptima',
    'projects.finoptima.description': 'உயர்-செயல்திறன் ஃபின்டெக் அமைப்பு >10k TPS திறன் கொண்டது நிகழ்கால மோசடி கண்டறிதலுடன்.',
    'projects.netguard.title': 'NetGuardAI',
    'projects.netguard.description': '1 Gbps டிராஃபிக்கைக் கண்காணித்து 98%+ ML துல்லியத்துடன் இணைய தாக்குதல்களைக் கண்டறிகிறது.',
    
    // Skills
    'skills.title': 'தொழில்நுட்ப திறன்கள்',
    'skills.languages': 'மொழிகள்',
    'skills.backend': 'பின்புற மேம்பாடு',
    'skills.ml': 'ML & தரவு அறிவியல்',
    'skills.databases': 'தரவுத்தளங்கள் & சேமிப்பு',
    'skills.tools': 'கருவிகள் & DevOps',
    
    // Contact
    'contact.title': 'தொடர்பில் இருங்கள்',
    'contact.description': 'இணைந்து ஒன்றாக ஏதோ அற்புதமான ஒன்றை உருவாக்குவோம்',
    'contact.email': 'jaipreethtsrls17@gmail.com',
    'contact.phone': '+91-93981-97626',
  },
  te: {
    // Header
    'nav.about': 'గురించి',
    'nav.projects': 'ప్రాజెక్టులు',
    'nav.skills': 'నైపుణ్యాలు',
    'nav.contact': 'సంప్రదింపు',
    
    // Hero Section
    'hero.greeting': 'నమస్కారం, నేను',
    'hero.name': 'తిరువైపాటి శ్రీ రంగా లక్ష్మీ సాయి జైప్రీత్',
    'hero.title': 'పోటీ ప్రోగ్రామర్ & Go బ్యాకెండ్ డెవలపర్',
    'hero.subtitle': 'ML మరియు అల్గారిథమ్‌లపై ఆసక్తితో సమర్థవంతమైన పరిష్కారాలను రూపొందించడం',
    'hero.cta': 'నా పనిని అన్వేషించండి',
    
    // About
    'about.title': 'నా గురించి',
    'about.description': 'పూర్తి-స్టాక్ డెవలప్‌మెంట్, మెషిన్ లెర్నింగ్ మరియు సిస్టమ్ ఆర్కిటెక్చర్‌లో నైపుణ్యం ఉన్న ఆసక్తిగల డెవలపర్. ప్రస్తుతం IIITM గ్వాలియర్‌లో B.Tech చదువుతున్నాను 9.36/10.0 CGPA తో.',
    
    // Education
    'education.title': 'విద్య',
    'education.degree': 'గణితం మరియు శాస్త్రీయ కంప్యూటింగ్‌లో B.Tech',
    'education.institution': 'భారతీయ సమాచార సాంకేతిక మరియు నిర్వహణ సంస్థ, గ్వాలియర్',
    'education.duration': 'ఆగస్టు 2023 – జూన్ 2027',
    'education.cgpa': 'CGPA: 9.36/10.0',
    
    // Projects
    'projects.title': 'ప్రత్యేక ప్రాజెక్టులు',
    'projects.fintrack.title': 'FinTrack',
    'projects.fintrack.description': 'పూర్తి-స్టాక్ ఖర్చు అంచనా వ్యవస్థ 1M+ రికార్డులను 90%+ ఖచ్చితత్వంతో ప్రాసెస్ చేస్తుంది.',
    'projects.mumosa.title': 'Mumosa',
    'projects.mumosa.description': 'AI-ఆధారిత రిటైల్ సరఫరా గొలుసు వ్యవస్థ 50+ దుకాణాలకు — డిమాండ్‌ను అంచనా వేసి డెలివరీని ఆప్టిమైజ్ చేస్తుంది.',
    'projects.finoptima.title': 'FinOptima',
    'projects.finoptima.description': 'అధిక-పనితీరు ఫిన్‌టెక్ వ్యవస్థ >10k TPS సామర్థ్యంతో రియల్-టైమ్ మోసం గుర్తింపుతో.',
    'projects.netguard.title': 'NetGuardAI',
    'projects.netguard.description': '1 Gbps ట్రాఫిక్‌ను పర్యవేక్షిస్తుంది మరియు 98%+ ML ఖచ్చితత్వంతో సైబర్ దాడులను గుర్తిస్తుంది.',
    
    // Skills
    'skills.title': 'సాంకేతిక నైపుణ్యాలు',
    'skills.languages': 'భాషలు',
    'skills.backend': 'బ్యాకెండ్ డెవలప్‌మెంట్',
    'skills.ml': 'ML & డేటా సైన్స్',
    'skills.databases': 'డేటాబేసులు & స్టోరేజ్',
    'skills.tools': 'టూల్స్ & DevOps',
    
    // Contact
    'contact.title': 'సంప్రదింపులో ఉండండి',
    'contact.description': 'కలిసి ఏదైనా అద్భుతమైనదాన్ని నిర్మిద్దాం',
    'contact.email': 'jaipreethtsrls17@gmail.com',
    'contact.phone': '+91-93981-97626',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
  };

  const t = (key: string): string => {
    return translations[currentLanguage.code]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, languages, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};