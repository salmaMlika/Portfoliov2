// data/index.ts
import type {
  Project,
  SkillCategory,
  Experience,
  Certification,
  Stat,
} from "@/types";

export const OWNER = {
  name: "Salma Mlika",
  title: "AI & Data Science Engineering Student",
  location: "Tunisia",
  email: "salma.mlika.dev@gmail.com",
  github: "https://github.com/salmamlika",
  linkedin: "https://linkedin.com/in/salma-mlika",
  bio:"AI & Data Science Engineering student. I turn messy data and ML models into real, usable products , from pipeline to deployment. Especially drawn to where tech meets healthcare or EdTech.",
  seeking:
    "Currently looking for AI, Data Science, Machine Learning Engineering, Analytics, and HealthTech internship opportunities.",
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "French", level: "C1" },
    { name: "English", level: "C1" },
  ],
  education: [
    {
      institution: "EPI Sousse",
      degree: "AI & Data Science Engineering Degree",
      period: "2024 – Present",
      current: true,
    },
    {
      institution: "ISSAT Sousse",
      degree: "Bachelor's Degree in Computer Science",
      period: "2021 – 2024",
      current: false,
    },
    {
      institution: "Lycée Pilote de Zaghouan",
      degree: "Tunisian Baccalaureate in Experimental Sciences",
      period: "2017 – 2021",
      current: false,
    },
  ],
};

export const STATS: Stat[] = [
  { value: "10+", label: "Projects" },
  { value: "15+", label: "Technologies" },
  { value: "3", label: "Certifications" },
];

// ============================================================
// FEATURED PROJECTS (4 projets majeurs)
// ============================================================

export const FEATURED_PROJECTS: Project[] = [
  {
  id: "paratrack",
  slug: "paratrack",
  title: "ParaTrack",
  image: "/previews/paratrack.png",
  category: ["Price Intelligence", "Computer Vision", "Full Stack"],
  tags: ["Machine Learning", "Computer Vision", "NLP", "Full Stack"],
  description:
    "All-in-one parapharmacy platform: price comparator, AI skin analyzer, and RAG chatbot , built for the Tunisian market.",
  longDescription:
    "ParaTrack is a full-stack parapharmacy intelligence platform with three core features. (1) Price Comparator: BeautifulSoup scraping pipeline across Parafendri, PharmaShop, and Parashop with SequenceMatcher-based relevance filtering and automated price tracking via GitHub Actions cron jobs. (2) Skin Analyzer: MobileNetV3 classifier that detects 8 skin conditions (acne, eczema, rosacea, hyperpigmentation, and more) from a photo, served via Flask. (3) RAG Chatbot: Groq LLaMA-3.3-70b with dynamic product context injection from SQLite, plus session-based collaborative filtering with SVD for recommendations.",
  technologies: [
    "Python", "Flask", "Next.js", "Groq LLaMA-3", "PyTorch",
    "BeautifulSoup", "SQLite", "GitHub Actions", "scikit-learn"
  ],
  featured: true,
  badges: [],
  metrics: [
    { label: "Products Tracked", value: "50,200+" },
    { label: "Scraping Sources", value: "3" },
  ],
  links: {
    demo: "https://para-track-ou51.vercel.app/",
    github: "https://github.com/salmamlika/paratrack",
  },
},
  {
    id: "automl",
    slug: "automl",
    title: "AutoML Platform",
    image: "/previews/automl.png",
    category: ["Machine Learning Platform"],
    tags: ["Machine Learning", "Data Analytics", "Full Stack"],
    description:
      "End-to-end guided AutoML platform for classification, regression, and clustering. 6-step pipeline.",
    longDescription:
      "Modular AutoML platform supporting classification, regression, and clustering through a fully guided 6-step pipeline. Features multi-format data ingestion, automated preprocessing, model selection heuristics, hyperparameter optimization, and interactive visualizations.",
    technologies: ["Python", "Streamlit", "Scikit-learn", "XGBoost", "Optuna", "Pandas", "Plotly"],
    featured: true,
    badges: [],
    metrics: [
      { label: "Algorithms", value: "15+" },
      { label: "Task Types", value: "3" },
      { label: "Workflow Steps", value: "6" },
    ],
    links: {
      demo: "https://platformautoml-g5cjymvnz4edfnsyxklthf.streamlit.app/",
      github: "https://github.com/salmaMlika/PlatformAutoml/tree/automlv2",
    },
  },
  {
    id: "hdd-failure",
    slug: "hdd-failure",
    title: "HDD Failure Prediction",
    image: "/previews/hdd-failure.png",
    category: ["Deep Learning", "Predictive Maintenance"],
    tags: ["Deep Learning", "Research", "Machine Learning"],
    description:
      "Predictive maintenance for hard drives using Transformer (98% recall). Backblaze dataset (12M+ rows).",
    longDescription:
      "Deep learning study for predictive maintenance of hard drives using Backblaze SMART metrics (12M+ rows). Compared CNN-LSTM (96% recall), GRU (94%), and Transformer (98%). Achieved 95.7% test recall on unseen Q4 2016 data.",
    technologies: ["Python", "TensorFlow", "CNN-LSTM", "GRU", "Transformer", "Pandas", "PyArrow"],
    featured: true,
    badges: [],
    metrics: [
      { label: "Transformer Recall", value: "98%", highlight: true },
      { label: "CNN-LSTM Recall", value: "96%" },
      { label: "Dataset Records", value: "12M+" },
    ],
    links: {
      github: "https://github.com/salmamlika/hdd-failure-prediction",
      report: "/rapport_stochastique_final.pdf",
      presentation: "/stochastique_presentation.pdf",
    },
  },
  {
    id: "skin-analyzer",
    slug: "skin-analyzer",
    title: "Skin Analyzer",
    image: "/previews/skin-analyzer.png",
    category: ["Computer Vision", "Medical AI"],
    tags: ["Computer Vision", "Deep Learning", "Research"],
    description:
      "Skin disease classification using MobileNetV3 (96.06% validation accuracy). 9,770 images, 5 classes.",
    longDescription:
      "Medical AI application for skin disease classification. Fine-tuned MobileNetV3 on 9,770 dermoscopy images across 5 classes (Melanoma, Nevus, BCC, AK, DF). Progressive fine-tuning with data augmentation. Achieved 96.06% validation accuracy with Grad-CAM explainability.",
    technologies: ["Python", "PyTorch", "MobileNetV3", "Transfer Learning", "OpenCV", "Streamlit"],
    featured: true,
    badges: [],
    metrics: [
      { label: "Validation Accuracy", value: "96.06%", highlight: true },
      { label: "Training Images", value: "9,770" },
      { label: "Disease Classes", value: "5" },
    ],
    links: {
      demo: "https://skinanalyzer-mcebij2ksyreju8r6ttd6t.streamlit.app/",
      github: "https://github.com/salmamlika/skin-analyzer",
    },
  },
];

// ============================================================
// OTHER PROJECTS (le reste - 5 projets)
// ============================================================

export const OTHER_PROJECTS: Project[] = [
  {
    id: "hate-speech",
    slug: "hate-speech",
    title: "Tunisian Dialect Hate Speech Detection",
    image: "/previews/hate-speech.png",
    category: ["NLP"],
    tags: ["NLP", "Deep Learning", "Research"],
    description:
"Fine-tuning AraBERT for hate speech classification in Tunisian dialect (normal / abusive / hateful). Class balancing using downsampling, full preprocessing and GPU training pipeline.",
    technologies: ["Python", "PyTorch", "Hugging Face", "AraBERT", "Transformers"],
    featured: false,
    badges: [],
    metrics: [
      { label: "Dataset", value: "12K tweets" },
    ],
    links: {
      github: "https://github.com/salmaMlika/HateSpeech-Detector-TN",
      report: "/rapport-hatespeech.pdf",
      presentation: "/Hate speech presentation .pdf.pdf",
    },
  },
  {
    id: "resourcehydra",
    slug: "resourcehydra",
    title: "ResourceHydra",
    image: "/previews/resourcehydra.png",
    category: ["Predictive Analytics"],
    tags: ["Machine Learning", "Data Engineering"],
    description:
      "Tunisian dam stock prediction using linear regression , random forest and XGBoost (R² > 0.95).",
    technologies: ["Python", "Pandas", "Scikit-learn", "XGBoost", "Matplotlib"],
    featured: false,
    badges: [],
    metrics: [{ label: "R² Score", value: ">0.95", highlight: true }],
    links: {
      github: "https://github.com/salmaMlika/ml-barrages-tunisie",
      report: "/stock-barrages-tunisie.pdf (1).pdf",
    },
  },
  {
    id: "amazon-sentiment",
    slug: "amazon-sentiment",
    title: "Amazon Sentiment Analysis",
    image: "/previews/amazon-sentiment.png",
    category: ["NLP"],
    tags: ["NLP", "Machine Learning"],
    description:
"Binary classification of 1M Amazon reviews. Complete NLP pipeline. SVM and MLP with SMOTE for imbalance handling. Accuracy 89%. LDA topic modeling revealed 4 coherent themes",
    technologies: ["Python", "Scikit-learn", "BERT", "PyTorch", "Pandas", "NLTK", "spaCy"],
    featured: false,
    badges: [],
    metrics: [
      { label: "Accuracy", value: "91.2%" },
      { label: "Reviews", value: "1M" },
    ],
    links: {
      github: "https://github.com/salmamlika/amazon-sentiment",
      report: "/Analyse des Avis Amazon -projet (1).pdf",
    },
  },
  {
    id: "parking-detection",
    slug: "parking-detection",
    title: "Parking Space Detection",
    image: "/previews/parking-detection.png",
    category: ["Computer Vision"],
    tags: ["Computer Vision", "Deep Learning"],
    description:
"Binary classification (Empty / Occupied)using classical CV techniques. Contrast enhancement, edge detection,morphological operations, and heuristic rules based on edge density and pixel intensity."   ,
 technologies: [ "OpenCV", "PyTorch", "NumPy"],
    featured: false,
    badges: [],

    links: {
      github: "https://github.com/salmaMlika/Parkvision",
    },
  },
  {
    id: "choufli-hal",
    slug: "choufli-hal",
    title: "Choufli Hal IMDb Analysis",
    image: "/previews/choufli-hal.png",
    category: ["Data Analytics"],
    tags: ["Data Analytics"],
    description:
      "IMDb ratings analysis for Tunisian series Choufli Hal (150+ episodes).",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "BeautifulSoup"],
    featured: false,
    badges: [],
    metrics: [{ label: "Episodes Analyzed", value: "150+" }],
    links: {
      github: "https://github.com/salmaMlika?tab=repositories",
    },
  },
];

// ============================================================
// ALL TAGS pour filtrage
// ============================================================

export const ALL_TAGS = [
  "All",
  "Machine Learning",
  "Deep Learning",
  "NLP",
  "Data Engineering",
  "Computer Vision",
  "Data Analytics",
  "Full Stack",
  "Research",

] as const;

export const EXPERIENCES: Experience[] = [
  {
    company: "GoMyTeacher (GoMyCode x InstaDeep)",
    role: "Software Engineering Intern",
    period: "July 2025 – September 2025",
    type: "internship",
    achievements: [ 
      "Developed waitlist system with automated user onboarding flow",
      "Implemented Mailchimp automation for email marketing campaigns",
      "Built CI/CD pipelines with GitHub Actions for automated deployments",
      "Integrated Google Chat alerts for real-time system notifications",
      "Set up PostHog analytics for product usage tracking",
      "Delivered frontend UX improvements increasing engagement by 18%",
    ],
    technologies: [
      "Go",
      "TypeScript",
      "Next.js",
      "Mailchimp",
      "HubSpot",
      "PostHog",
      "GitHub Actions",
    ],
  },
  {
    company: "FORIP",
    role: "Full Stack Developer",
    period: "January 2024 – June 2024",
    type: "internship",
    achievements: [
      "contributed to building PaaS / DBaaS cloud platform from scratch",
      "Containerized services with Docker for reproducible deployments",
      "Implemented Jenkins CI/CD pipeline for automated testing and delivery",
      "Set up Grafana monitoring dashboards for system observability",
    ],
    technologies: [
      "Django",
      "Next.js",
      "Docker",
      "Jenkins",
      "Grafana",
      "PostgreSQL",
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: "💻",
    skills: [
      { name: "Python", level: 95 },
      { name: "JavaScript / TypeScript", level: 88 },
      { name: "SQL", level: 85 },
      { name: "Java", level: 75 },
      { name: "Go", level: 70 },
    ],
  },
  {
    name: "Machine Learning",
    icon: "🤖",
    skills: [
      { name: "Scikit-learn", level: 90 },
      { name: "XGBoost / LightGBM", level: 88 },
      { name: "Feature Engineering", level: 90 },
      { name: "Model Evaluation", level: 88 },
    ],
  },
  {
    name: "Deep Learning",
    icon: "⚡",
    skills: [
      { name: "TensorFlow / Keras", level: 88 },
      { name: "PyTorch", level: 85 },
      { name: "CNN / RNN / LSTM", level: 88 },
      { name: "Transformers", level: 82 },
    ],
  },
  {
    name: "NLP",
    icon: "💬",
    skills: [
      { name: "Hugging Face Transformers", level: 85 },
      { name: "LangChain", level: 80 },
      { name: "RAG Systems", level: 82 },
      { name: "BERT / AraBERT", level: 82 },
      { name: "NLTK / spaCy", level: 88 },
      { name: "Word2Vec / LDA", level: 85 },
    ],
  },
  {
    name: "Computer Vision",
    icon: "👁️",
    skills: [
      { name: "OpenCV", level: 85 },
      { name: "YOLOv8", level: 80 },
      { name: "MobileNetV3", level: 82 },
      { name: "Transfer Learning", level: 88 },
    ],
  },
  {
    name: "Data Engineering",
    icon: "🔧",
    skills: [
      { name: "Pandas / NumPy", level: 92 },
      { name: "SQL / PostgreSQL", level: 88 },
      { name: "Scrapy / BeautifulSoup", level: 88 },
      { name: "PyArrow", level: 75 },
      { name: "MongoDB", level: 75 },
    ],
  },
  {
    name: "Data Visualization",
    icon: "📊",
    skills: [
      { name: "Matplotlib / Seaborn", level: 90 },
      { name: "Plotly / Dash", level: 85 },
      { name: "Streamlit", level: 88 },
      { name: "Power BI", level: 78 },
    ],
  },
  {
    name: "MLOps & Cloud",
    icon: "☁️",
    skills: [
      { name: "Docker", level: 88 },
      { name: "GitHub Actions", level: 85 },
      { name: "AWS (EC2, S3, Lambda)", level: 75 },
      { name: "FastAPI", level: 88 },
      { name: "Jenkins", level: 75 },
      { name: "Grafana", level: 72 },
    ],
  },
  {
    name: "Backend Development",
    icon: "⚙️",
    skills: [
      { name: "FastAPI / Django", level: 88 },
      { name: "Node.js", level: 75 },
      { name: "REST APIs", level: 90 },
      { name: "PostgreSQL / SQLite", level: 88 },
    ],
  },
  {
    name: "Frontend Development",
    icon: "🎨",
    skills: [
      { name: "Next.js / React", level: 85 },
      { name: "TypeScript", level: 82 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Framer Motion", level: 70 },
    ],
  },
  {
    name: "Agile & Architecture",
    icon: "🔄",
    skills: [
      { name: "Scrum / Kanban", level: 85 },
      { name: "Design Patterns", level: 80 },
      { name: "CI/CD Pipelines", level: 85 },
      { name: "Git", level: 90 },
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Build and Train Machine Learning Models",
    issuer: "Google Cloud",
    year: "2025",
    icon: "☁️",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/RE9Y5R0CUP9W", 
    
  },
  {
    title: "Using Python to Access Web Data",
    issuer: "University of Michigan (Coursera)",
    year: "2025",
    icon: "🐍",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/M6V795JWGZFX",
  },
  {
    title: "Power BI Data Analysis",
    issuer: "Microsoft",
    year: "2025",
    icon: "📊",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/1PEQLY7CY3XA",
  },
];