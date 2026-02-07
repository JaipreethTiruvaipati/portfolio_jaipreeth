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
    'hero.greeting': 'Namasaram, I am',
    'hero.name': 'Tiruvaipati Sree Ranga Lakshmi Sai Jaipreeth',
    'hero.title': 'Competitive Programmer & Go Backend Developer',
    'hero.subtitle': 'Crafting efficient solutions with a passion for ML and algorithms',
    'hero.cta': 'Explore My Work',

    // About
    'about.title': 'About Me',
    'about.description': 'Passionate developer with expertise in systems programming, machine learning, and competitive programming. Currently pursuing B.Tech at ABV-IIITM Gwalior with a CGPA of 9.43/10.0 — Rank 1, Batch Topper.',

    // Education
    'education.title': 'Education',
    'education.degree': 'B.Tech in Mathematics and Scientific Computing',
    'education.institution': 'Indian Institute of Information Technology and Management (ABV-IIITM), Gwalior',
    'education.duration': 'Aug 2023 – Jun 2027',
    'education.cgpa': 'CGPA: 9.43/10.0 (Rank 1, Batch Topper)',
    'education.semester3': 'Semester 3 GPA: 10.0/10.0',

    // Projects
    'projects.title': 'Featured Projects',
    'projects.rubik.title': "Rubik's Cube Solver using Korf's IDA* Algorithm",
    'projects.rubik.description': 'Uses Bitboards and custom hash functions for O(1) state lookups. IDA* with Corner Pattern Databases solves 13-move scrambles in under 10 seconds. Features OpenCV pipeline for real-time cube detection.',
    'projects.rubik.date': 'April 2025',
    'projects.sqldb.title': 'SQL Database Engine (SQLite Clone)',
    'projects.sqldb.description': 'Architected storage engine parsing SQLite binary format. Engineered B-Tree indexing system (O(log n)), reducing query latency by 80%. Supports SELECT, WHERE, and COUNT operations.',
    'projects.sqldb.date': 'February 2025',
    'projects.redis.title': 'Multithreaded Redis Server',
    'projects.redis.description': 'High-concurrency server in Go using Goroutines and raw TCP sockets. Implemented 40+ RESP commands including Lists, Streams, and Pub/Sub. Supports ACID transactions, Master-Replica Replication, and ACL authentication.',
    'projects.redis.date': 'December 2025',

    // Experience
    'experience.title': 'Experience',
    'experience.researcher.role': 'Undergraduate Researcher',
    'experience.researcher.organization': 'ABV-IIITM',
    'experience.researcher.date': 'September 2025',
    'experience.researcher.desc1': 'Engineered forecasting pipeline for 180k+ records with 53% memory optimization',
    'experience.researcher.desc2': 'Benchmarked 15+ algorithms (Statistical, ML, Deep Learning) for daily sales prediction',
    'experience.researcher.desc3': 'Designed novel Fuzzy Logic Ensemble system for dynamic model selection based on volatility',
    'experience.researcher.desc4': 'Developed evaluation framework using 7+ metrics (MAE, RMSE, BAPE) with visualization',

    // Skills
    'skills.title': 'Technical Skills',
    'skills.languages': 'Languages',
    'skills.systems': 'Systems & Backend',
    'skills.ml': 'ML & AI',
    'skills.libraries': 'Libraries & Tools',
    'skills.coursework': 'Core Coursework',

    // Achievements
    'achievements.title': 'Achievements & Leadership',
    'achievements.hackercup': 'Meta Hacker Cup 2025: Global Rank 1,253 (Top 9%)',
    'achievements.cp': '600+ Competitive Programming Problems Solved',
    'achievements.scholarship': 'Merit-Cum-Means Scholarship (Rank 1 in Batch)',
    'achievements.leadership1': 'Founder of Team Echo (Institute Outreach)',
    'achievements.leadership2': 'Joint Secretary of Student Activity Council',

    // Contact
    'contact.title': 'Get In Touch',
    'contact.description': 'Let\'s connect and build something amazing together',
    'contact.email': 'jaipreeth17programming@gmail.com',
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
    'about.description': 'फुल-स्टैक डेवलपमेंट, मशीन लर्निंग, और सिस्टम आर्किटेक्चर में विशेषज्ञता रखने वाला उत्साही डेवलपर। वर्तमान में ABV-IIITM ग्वालियर से B.Tech कर रहा हूं 9.43/10.0 CGPA (रैंक 1, बैच टॉपर) के साथ।',

    // Education
    'education.title': 'शिक्षा',
    'education.degree': 'गणित और वैज्ञानिक कंप्यूटिंग में B.Tech',
    'education.institution': 'भारतीय सूचना प्रौद्योगिकी और प्रबंधन संस्थान (ABV-IIITM), ग्वालियर',
    'education.duration': 'अगस्त 2023 – जून 2027',
    'education.cgpa': 'CGPA: 9.43/10.0 (रैंक 1, बैच टॉपर)',
    'education.semester3': 'सेमेस्टर 3 GPA: 10.0/10.0',

    // Projects
    'projects.title': 'विशेष परियोजनाएं',
    'projects.rubik.title': "Rubik's Cube Solver using Korf's IDA* Algorithm",
    'projects.rubik.description': 'Bitboards और कस्टम हैश फ़ंक्शंस का उपयोग करके O(1) स्टेट लुकअप। IDA* के साथ Corner Pattern Databases 13-move scrambles को 10 सेकंड से कम में हल करता है। OpenCV पाइपलाइन के साथ रियल-टाइम cube detection।',
    'projects.rubik.date': 'अप्रैल 2025',
    'projects.sqldb.title': 'SQL Database Engine (SQLite Clone)',
    'projects.sqldb.description': 'SQLite बाइनरी फॉर्मेट को पार्स करने वाला स्टोरेज इंजन। B-Tree इंडेक्सिंग सिस्टम (O(log n)) से query latency में 80% की कमी। SELECT, WHERE, और COUNT ऑपरेशंस समर्थित।',
    'projects.sqldb.date': 'फरवरी 2025',
    'projects.redis.title': 'Multithreaded Redis Server',
    'projects.redis.description': 'Go में Goroutines और raw TCP sockets का उपयोग करके high-concurrency सर्वर। Lists, Streams, और Pub/Sub सहित 40+ RESP कमांड। ACID transactions, Master-Replica Replication, और ACL authentication समर्थित।',
    'projects.redis.date': 'दिसंबर 2025',

    // Experience
    'experience.title': 'अनुभव',
    'experience.researcher.role': 'Undergraduate Researcher',
    'experience.researcher.organization': 'ABV-IIITM',
    'experience.researcher.date': 'सितंबर 2025',
    'experience.researcher.desc1': '180k+ रिकॉर्ड के लिए 53% मेमोरी ऑप्टिमाइज़ेशन के साथ forecasting पाइपलाइन',
    'experience.researcher.desc2': 'दैनिक बिक्री पूर्वानुमान के लिए 15+ एल्गोरिदम का बेंचमार्किंग (Statistical, ML, Deep Learning)',
    'experience.researcher.desc3': 'अस्थिरता के आधार पर dynamic model selection के लिए Fuzzy Logic Ensemble सिस्टम',
    'experience.researcher.desc4': '7+ मेट्रिक्स (MAE, RMSE, BAPE) के साथ मूल्यांकन फ्रेमवर्क',

    // Skills
    'skills.title': 'तकनीकी कौशल',
    'skills.languages': 'भाषाएं',
    'skills.systems': 'सिस्टम और बैकएंड',
    'skills.ml': 'ML और AI',
    'skills.libraries': 'लाइब्रेरी और टूल्स',
    'skills.coursework': 'मुख्य पाठ्यक्रम',

    // Achievements
    'achievements.title': 'उपलब्धियां और नेतृत्व',
    'achievements.hackercup': 'Meta Hacker Cup 2025: Global Rank 1,253 (Top 9%)',
    'achievements.cp': '600+ Competitive Programming Problems Solved',
    'achievements.scholarship': 'Merit-Cum-Means Scholarship (बैच में रैंक 1)',
    'achievements.leadership1': 'Team Echo के संस्थापक (Institute Outreach)',
    'achievements.leadership2': 'Student Activity Council के Joint Secretary',

    // Contact
    'contact.title': 'संपर्क में रहें',
    'contact.description': 'आइए जुड़ें और साथ मिलकर कुछ अद्भुत बनाएं',
    'contact.email': 'jaipreeth17programming@gmail.com',
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
    'projects.rubik.title': "Rubik's Cube Solver using Korf's IDA* Algorithm",
    'projects.rubik.description': 'Bitboards மற்றும் தனிப்பயன் hash functions O(1) state lookups. IDA* உடன் Corner Pattern Databases 13-move scrambles 10 விநாடிகளுக்குள் தீர்க்கிறது. OpenCV pipeline உடன் நிகழ்கால cube detection.',
    'projects.rubik.date': 'ஏப்ரல் 2025',
    'projects.sqldb.title': 'SQL Database Engine (SQLite Clone)',
    'projects.sqldb.description': 'SQLite binary format பாகுபடுத்தும் storage engine. B-Tree indexing system (O(log n)) query latency 80% குறைப்பு. SELECT, WHERE, COUNT operations ஆதரவு.',
    'projects.sqldb.date': 'பிப்ரவரி 2025',
    'projects.redis.title': 'Multithreaded Redis Server',
    'projects.redis.description': 'Go-வில் Goroutines மற்றும் raw TCP sockets உடன் high-concurrency server. Lists, Streams, Pub/Sub உள்பட 40+ RESP commands. ACID transactions, Master-Replica Replication, ACL authentication ஆதரவு.',
    'projects.redis.date': 'டிசம்பர் 2025',

    // Experience
    'experience.title': 'அனுபவம்',
    'experience.researcher.role': 'Undergraduate Researcher',
    'experience.researcher.organization': 'ABV-IIITM',
    'experience.researcher.date': 'செப்டம்பர் 2025',
    'experience.researcher.desc1': '180k+ பதிவுகளுக்கு 53% நினைவக மேம்படுத்தலுடன் forecasting pipeline',
    'experience.researcher.desc2': 'தினசரி விற்பனை கணிப்புக்கு 15+ algorithms benchmarking (Statistical, ML, Deep Learning)',
    'experience.researcher.desc3': 'ஏற்ற இறக்கத்தின் அடிப்படையில் dynamic model selection க்கு Fuzzy Logic Ensemble system',
    'experience.researcher.desc4': '7+ metrics (MAE, RMSE, BAPE) உடன் மதிப்பீட்டு framework',

    // Skills
    'skills.title': 'தொழில்நுட்ப திறன்கள்',
    'skills.languages': 'மொழிகள்',
    'skills.systems': 'அமைப்புகள் & பின்புறம்',
    'skills.ml': 'ML & AI',
    'skills.libraries': 'நூலகங்கள் & கருவிகள்',
    'skills.coursework': 'முக்கிய பாடநெறி',

    // Achievements
    'achievements.title': 'சாதனைகள் & தலைமைத்துவம்',
    'achievements.hackercup': 'Meta Hacker Cup 2025: Global Rank 1,253 (Top 9%)',
    'achievements.cp': '600+ Competitive Programming Problems Solved',
    'achievements.scholarship': 'Merit-Cum-Means Scholarship (பேட்சில் தரம் 1)',
    'achievements.leadership1': 'Team Echo நிறுவனர் (Institute Outreach)',
    'achievements.leadership2': 'Student Activity Council இன் Joint Secretary',

    // Contact
    'contact.title': 'தொடர்பில் இருங்கள்',
    'contact.description': 'இணைந்து ஒன்றாக ஏதோ அற்புதமான ஒன்றை உருவாக்குவோம்',
    'contact.email': 'jaipreeth17programming@gmail.com',
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