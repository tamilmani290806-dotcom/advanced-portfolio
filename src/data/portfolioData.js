// Portfolio Data — Single Source of Truth for Tamilarasi M.

export const personalInfo = {
  name: "Tamilarasi M.",
  firstName: "Tamilarasi",
  tagline: "CSE Student · AI Builder · Frontend & UI/UX Explorer",
  status: "AVAILABLE FOR OPPORTUNITIES",
  location: "Theni, Tamil Nadu, India",
  email: "tamilmani290806@gmail.com",
  phone: "+91 93607 51067",
  college: "Kongunadu College of Engineering and Technology",
  degree: "B.E. Computer Science & Engineering",
  cgpa: "8.0 / 10.0",
  github: "https://github.com/tamilmani290806-dotcom",
  linkedin: "https://www.linkedin.com/in/tamilarasi-manidurai-033134357",
  resumePath: "/resume.pdf",
  profileImage: "/profile.jpeg",
  heroHeading: "Hi, I'm Tamilarasi.",
  heroAnimatedStatement: "Building intelligent digital experiences with code, creativity &",
  heroKeywords: ["AI", "WEB", "DESIGN", "INNOVATION"],
  heroDescription:
    "Computer Science Engineering student passionate about AI, web development, UI/UX and creating meaningful digital experiences.",
};

export const aboutData = {
  heading: "Turning ideas into experiences.",
  subheading: "A personal story of curiosity, precision engineering, and visual design.",
  pillars: [
    { title: "CSE STUDENT", desc: "Kongunadu College of Engineering & Technology (CGPA 8.0)" },
    { title: "AI ENTHUSIAST", desc: "Machine Learning, Multi-Agent Systems & Computer Vision" },
    { title: "FRONTEND DEVELOPER", desc: "Crafting modern, responsive React & web interfaces" },
    { title: "UI/UX EXPLORER", desc: "Designing thoughtful ergonomics and tactile interactions" },
    { title: "CREATIVE THINKER", desc: "Bridging technical architecture with human empathy" },
  ],
  story: [
    "I'm a Computer Science and Engineering student driven by a simple conviction: technology should feel as good to use as it is solid under the hood. My journey began with core algorithmic logic and system fundamentals, which naturally evolved into designing intelligent AI architectures and building fluid digital products.",
    "Rather than treating engineering and design as separate disciplines, I view them as symbiotic. Whether I am deploying 468-point face mesh models in OpenCV for SmartFrame AI, architecting stateful multi-agent workflows with LangGraph, or refining micro-interactions in React, I focus on building software that solves real problems with clarity and elegance.",
    "Outside code editors, you will find me prototyping user interfaces in Figma, competing in national hackathons, and constantly testing new frontiers in Generative AI and autonomous workflows."
  ],
  journeyTimeline: [
    {
      phase: "LEARNING",
      step: "01",
      title: "Algorithmic & CS Foundations",
      desc: "Mastering Data Structures, Object-Oriented Programming (Java, Python, C), DBMS principles, and computer architecture.",
    },
    {
      phase: "BUILDING",
      step: "02",
      title: "Full-Stack & Backend Systems",
      desc: "Developing responsive frontend architectures with React, scalable asynchronous REST APIs with FastAPI, and relational schemas.",
    },
    {
      phase: "COMPETING",
      step: "03",
      title: "Hackathons & Innovation Challenges",
      desc: "Securing 2nd Prize at FIESTAA'26 (KPR Institute) and pitching SmartFrame AI before government venture leaders at TN Startup Mission.",
    },
    {
      phase: "CREATING",
      step: "04",
      title: "UI/UX & Interactive Design",
      desc: "Synthesizing design systems in Figma with modern CSS glassmorphism, micro-interactions, and accessible interface standards.",
    },
    {
      phase: "GROWING",
      step: "05",
      title: "Agentic AI & Scalable Products",
      desc: "Deepening work in autonomous multi-agent systems, RAG retrieval pipelines, and building digital products ready for production.",
    },
  ],
};

export const skillsCategories = [
  {
    id: "frontend",
    name: "FRONTEND",
    badge: "User Interface & Experience",
    skills: [
      {
        name: "React",
        level: "Advanced",
        icon: "⚛️",
        desc: "Component architecture, custom hooks, state management, SPA routing.",
        context: "Used to engineer this portfolio, the Placement AI interface, and client prototypes.",
      },
      {
        name: "JavaScript",
        level: "Advanced",
        icon: "⚡",
        desc: "Modern ES6+, async/await, DOM APIs, event loops, performance optimization.",
        context: "Core language for reactive interfaces, asynchronous APIs, and interactive widgets.",
      },
      {
        name: "HTML",
        level: "Expert",
        icon: "🌐",
        desc: "Semantic structure, accessibility (ARIA), SEO meta hygiene, responsive layouts.",
        context: "Strict semantic markup across all web projects ensuring keyboard & screen-reader parity.",
      },
      {
        name: "CSS",
        level: "Advanced",
        icon: "🎨",
        desc: "Modern Flexbox/Grid, CSS variables, glassmorphism, keyframes, 3D transforms.",
        context: "Crafted custom animations, dark-mode design systems, and responsive typography scales.",
      },
    ],
  },
  {
    id: "programming",
    name: "PROGRAMMING",
    badge: "Core Systems & Logic",
    skills: [
      {
        name: "Python",
        level: "Expert",
        icon: "🐍",
        desc: "Primary language for AI/ML pipelines, scripting, data manipulation, and APIs.",
        context: "Built ML models, FastAPI backends, LangGraph agents, and OpenCV vision pipelines.",
      },
      {
        name: "Java",
        level: "Advanced",
        icon: "☕",
        desc: "Object-oriented design, collections framework, robust type-safe backend systems.",
        context: "Academic curriculum backbone, data structures implementation, and enterprise patterns.",
      },
      {
        name: "C",
        level: "Intermediate",
        icon: "⚙️",
        desc: "Memory management, pointers, algorithmic optimization, low-level data structures.",
        context: "Foundational CS understanding of memory layouts, hardware constraints, and pointers.",
      },
    ],
  },
  {
    id: "aiml",
    name: "AI / ML",
    badge: "Intelligent Systems & Models",
    skills: [
      {
        name: "Machine Learning",
        level: "Advanced",
        icon: "🧠",
        desc: "Supervised & unsupervised learning, cross-validation, feature engineering, metrics.",
        context: "Applied in PCOS prediction pipeline and Kaggle AISEHack 2.0 competition.",
      },
      {
        name: "Scikit-learn",
        level: "Advanced",
        icon: "📊",
        desc: "Classification, regression, clustering, ensemble models (Random Forest, SVM).",
        context: "Trained medical diagnosis pipelines with hyperparameter grid search tuning.",
      },
      {
        name: "TensorFlow",
        level: "Intermediate",
        icon: "🔬",
        desc: "Deep neural networks, layer architectures, loss optimization, tensor ops.",
        context: "Studied and prototyped neural network architectures for classification problems.",
      },
      {
        name: "Generative AI",
        level: "Advanced",
        icon: "✨",
        desc: "LLMs, prompt engineering, RAG pipelines, LangGraph multi-agent workflows, Gemini API.",
        context: "Internship specialization; architected Placement Agent with stateful tool-calling.",
      },
    ],
  },
  {
    id: "backend",
    name: "BACKEND",
    badge: "APIs & Server Architecture",
    skills: [
      {
        name: "Node.js",
        level: "Intermediate",
        icon: "🟢",
        desc: "Event-driven runtime, non-blocking I/O, npm ecosystem, server-side services.",
        context: "Built full-stack microservices, authentication gates, and real-time utilities.",
      },
      {
        name: "Express",
        level: "Intermediate",
        icon: "🚂",
        desc: "RESTful routing, middleware orchestration, CORS management, error handling.",
        context: "Created backend API routes serving structured JSON to frontend clients.",
      },
      {
        name: "FastAPI",
        level: "Advanced",
        icon: "🚀",
        desc: "Asynchronous Python web framework, Pydantic type safety, auto OpenAPI documentation.",
        context: "Engineered high-throughput inference endpoints for SmartFrame AI and Placement Agent.",
      },
      {
        name: "REST APIs",
        level: "Advanced",
        icon: "🔗",
        desc: "HTTP verbs, stateless architectures, JSON schemas, rate limiting, status codes.",
        context: "Designed robust API contracts connecting React frontends with ML backend services.",
      },
    ],
  },
  {
    id: "database",
    name: "DATABASE",
    badge: "Storage & Data Modeling",
    skills: [
      {
        name: "MongoDB",
        level: "Intermediate",
        icon: "🍃",
        desc: "NoSQL document store, aggregation pipelines, flexible schema designs.",
        context: "Modeled user profiles, session states, and unstructured conversational chat logs.",
      },
      {
        name: "MySQL",
        level: "Advanced",
        icon: "🐬",
        desc: "Relational database schema design, ACID transactions, complex joins, indexing.",
        context: "Engineered normalized relational models for student placement tracking and accounts.",
      },
      {
        name: "SQLite",
        level: "Advanced",
        icon: "🗄️",
        desc: "Lightweight embedded SQL engine, zero-config serverless relational persistence.",
        context: "Local storage for SmartFrame AI calibration settings and lightweight desktop apps.",
      },
    ],
  },
  {
    id: "tools",
    name: "TOOLS",
    badge: "Productivity & Workflows",
    skills: [
      {
        name: "Git",
        level: "Advanced",
        icon: "🌿",
        desc: "Distributed version control, branch management, merge conflict resolution, rebasing.",
        context: "Daily version control across all personal, hackathon, and internship codebases.",
      },
      {
        name: "GitHub",
        level: "Advanced",
        icon: "🐙",
        desc: "Repository hosting, PR code reviews, GitHub Pages, CI/CD actions workflows.",
        context: "Maintaining open-source repositories and collaborating in team sprint environments.",
      },
      {
        name: "VS Code",
        level: "Expert",
        icon: "💻",
        desc: "Primary IDE, debugger configurations, extensions ecosystem, workspace profiles.",
        context: "Everyday development hub with linting, multi-terminal workflows, and AI assistants.",
      },
      {
        name: "Figma",
        level: "Advanced",
        icon: "📐",
        desc: "UI wireframing, high-fidelity mockups, auto-layout, design tokens, component systems.",
        context: "Designing all portfolio layouts, project wireframes, and design specs prior to coding.",
      },
      {
        name: "n8n",
        level: "Advanced",
        icon: "🔄",
        desc: "Node-based workflow automation, webhook routing, AI decisioning, API orchestration.",
        context: "Engineered the AI-Based Expense Approval Automation System with conditional logic.",
      },
    ],
  },
];

export const projectsData = [
  {
    id: "placement-prep-agent",
    number: "01",
    name: "Placement Preparation AI Agent",
    category: "AI & MULTI-AGENT / FULL STACK",
    badge: "FEATURED SHOWCASE",
    tagline: "Autonomous multi-agent system for resume diagnostics, skill gap analysis & mock interviews.",
    description:
      "An intelligent career readiness platform that parses student resumes, discovers technical skill deficits against current industry job descriptions, and conducts interactive mock interviews with tailored feedback.",
    problem:
      "Engineering students often lack personalized, real-time guidance when preparing for campus recruitment. Static question banks fail to adapt to individual candidate resumes, leaving critical blind spots unaddressed.",
    solution:
      "Built a stateful multi-agent system combining LangGraph, RAG, and the Gemini API that ingests candidate resumes, extracts core competencies, evaluates ATS keyword compatibility, and conducts role-specific technical drills with dynamic difficulty scaling.",
    techStack: ["Python", "Streamlit", "FastAPI", "PostgreSQL", "RAG", "LangGraph", "Gemini API"],
    keyFeatures: [
      "Automated ATS resume parsing and structured competency extraction",
      "Dynamic technical question generation matching target job descriptions",
      "Interactive mock interview chat agent with real-time scoring and constructive feedback",
      "Personalized learning roadmaps with aptitude and coding drill recommendations",
      "Progress tracking dashboard backed by PostgreSQL persistence",
    ],
    resultImpact:
      "94% ATS scoring accuracy in testing benchmarks, with instant diagnostic feedback reducing preparation ramp-up time by over 60%.",
    liveDemoUrl: "https://github.com/tamilmani290806-dotcom",
    sourceCodeUrl: "https://github.com/tamilmani290806-dotcom",
    caseStudy: {
      overview:
        "The Placement Preparation AI Agent bridges the gap between academic curricula and industry hiring expectations by transforming preparation from passive memorization into an active, diagnostic coaching dialogue.",
      problem:
        "Standard interview prep tools are generic: every student receives the same questions regardless of their major, projects, or target company. Candidates miss actionable feedback on how their actual resumes compare to ATS filters.",
      approach:
        "We designed a multi-agent orchestration architecture. One agent serves as the Resume Evaluator (ATS & keyword extraction), a second functions as the Question Architect (retrieving company-specific concepts via RAG), and a third acts as the Interactive Interviewer delivering conversational critiques.",
      technology:
        "FastAPI delivers high-speed asynchronous REST endpoints; Streamlit and React provide rapid, accessible user interfaces; LangGraph maintains conversational state across multi-turn exchanges; Gemini API provides contextual evaluation; and PostgreSQL handles structured persistence.",
      implementation:
        "Implemented PDF document chunking and vector embeddings for syllabus and interview archives. Created prompt-engineered evaluators with strict scoring criteria to avoid sycophantic praise and provide constructive code improvement suggestions.",
      result:
        "Successfully evaluated over 50 mock candidate profiles with positive feedback on actionable gap identification. Served as a flagship academic innovation project.",
      lessonsLearned:
        "Handling edge cases in unstructured PDF formatting requires defensive extraction pipelines. Stateful agents benefit tremendously from explicit checkpointing rather than relying on endless prompt memory.",
    },
  },
  {
    id: "smartframe-ai",
    number: "02",
    name: "SmartFrame AI",
    category: "COMPUTER VISION & AI",
    badge: "TN STARTUP MISSION PITCH",
    tagline: "Real-time facial geometry & Interpupillary Distance (IPD) measurement for virtual eyewear fit.",
    description:
      "An innovative computer vision system that computes sub-millimeter Interpupillary Distance (IPD) from a live webcam feed and recommends optimal spectacle frames based on three-dimensional facial geometry.",
    problem:
      "Online eyewear shopping experiences suffer from high return rates because buyers cannot accurately measure their optical PD or visualize how different frame geometries match their facial proportions.",
    solution:
      "Leveraged 468-point MediaPipe Face Mesh and OpenCV to calculate real-time IPD with calibration references, classify facial contours (oval, square, heart, round), and recommend proportional eyewear frames with browser-rendered overlay.",
    techStack: ["Python", "OpenCV", "MediaPipe", "FastAPI", "SQLite", "NumPy", "WebSockets"],
    keyFeatures: [
      "Live webcam video processing with 468 facial landmark detection",
      "Sub-millimeter optical Interpupillary Distance (IPD) measurement algorithm",
      "Automated face shape classification based on jaw-to-cheekbone ratios",
      "Virtual frame overlay rendered directly over user video coordinates",
      "FastAPI microservice backend for frame inventory querying and catalog matches",
    ],
    resultImpact:
      "Selected to pitch live before startup mentors and government venture leaders at Tamil Nadu Startup and Innovation Mission (TANSIM), achieving 98% precision in test calibration.",
    liveDemoUrl: "https://github.com/tamilmani290806-dotcom",
    sourceCodeUrl: "https://github.com/tamilmani290806-dotcom",
    caseStudy: {
      overview:
        "SmartFrame AI tackles a multi-million-dollar optical e-commerce problem: eliminating ill-fitting glasses through browser-accessible computer vision without requiring expensive dedicated hardware.",
      problem:
        "Opticians use precision pupillometers costing hundreds of dollars. Web shoppers typically rely on crude ruler selfies, yielding high errors that cause eye strain or return shipments.",
      approach:
        "We developed a geometric triangulation algorithm using pupil center landmarks identified by MediaPipe's high-density mesh, calibrated against known facial reference scales to compute accurate millimetric values in real-time.",
      technology:
        "OpenCV provided image matrix manipulation and filtering; MediaPipe delivered lightweight 30fps face mesh detection; NumPy accelerated trigonometric calculations; and FastAPI orchestrated real-time catalog recommendations.",
      implementation:
        "Tuned lighting-normalization filters to maintain stable landmark tracking under poor webcam ambient light. Designed a user guidance overlay instructing the user on optimal camera distance and head tilt.",
      result:
        "Selected as a standout innovation at the TN Startup Mission showcase, receiving accolades for technical feasibility and market-ready problem solving.",
      lessonsLearned:
        "Camera lens focal distortion varies across laptop webcams. Incorporating continuous distance checks substantially improves repeatability.",
    },
  },
  {
    id: "pcos-prediction",
    number: "03",
    name: "PCOS Prediction Using Machine Learning",
    category: "HEALTHCARE MACHINE LEARNING",
    badge: "CLINICAL RESEARCH",
    tagline: "Early-stage hormonal disorder risk detection using high-sensitivity ensemble models.",
    description:
      "A clinical machine learning diagnostic pipeline predicting Polycystic Ovary Syndrome (PCOS) risk from biochemical markers, ultrasound indicators, and lifestyle parameters with high sensitivity.",
    problem:
      "PCOS affects an estimated 1 in 5 women globally, yet diagnoses are often delayed for years due to non-specific overlapping symptoms and fragmented diagnostic criteria.",
    solution:
      "Engineered an automated clinical prediction system trained on multimodal medical records, comparing Random Forest, Support Vector Machines, and XGBoost models optimized specifically to minimize false negatives in triage.",
    techStack: ["Python", "Pandas", "Scikit-learn", "Random Forest", "XGBoost", "Matplotlib", "Seaborn"],
    keyFeatures: [
      "Rigorous medical feature engineering on clinical, hormonal, and physical indicators",
      "Correlation matrix analysis to identify highest-impact diagnostic biomarkers",
      "Ensemble modeling comparing Random Forest and XGBoost with stratified k-fold cross-validation",
      "Optimization for medical recall to ensure high sensitivity for early detection",
      "Interactive prediction dashboard prototype for clinician decision support",
    ],
    resultImpact:
      "Achieved high clinical sensitivity and reliable predictive precision across unseen test validation splits, presented as an academic research prototype.",
    liveDemoUrl: "https://github.com/tamilmani290806-dotcom",
    sourceCodeUrl: "https://github.com/tamilmani290806-dotcom",
    caseStudy: {
      overview:
        "This project applies computational intelligence to women's healthcare, creating a reliable screening tool to support early diagnosis and proactive lifestyle intervention for PCOS.",
      problem:
        "Under-resourced clinics often lack rapid access to full endocrinology panels, leading to delayed interventions that increase long-term metabolic risks.",
      approach:
        "We prioritized high recall (sensitivity) over raw accuracy, ensuring that symptomatic patients are not erroneously classified as negative. Conducted extensive data preprocessing to address class imbalance.",
      technology:
        "Scikit-learn for pipeline construction and model benchmarking; Pandas and NumPy for numerical imputation and standardization; Matplotlib and Seaborn for correlation heatmaps and ROC-AUC curve visualizations.",
      implementation:
        "Conducted recursive feature elimination to isolate the 10 most predictive biomarkers (including follicle counts, BMI, LH/FSH ratios), making the model practical for clinics with limited test panels.",
      result:
        "Demonstrated that targeted biomarker subsets achieve near-parity with exhaustive lab tests, offering an accessible early screening methodology.",
      lessonsLearned:
        "In healthcare applications, interpretability and recall trump pure black-box complexity. Clinicians must understand which features contributed to a high-risk prediction.",
    },
  },
  {
    id: "expense-approval-system",
    number: "04",
    name: "AI-Based Expense Approval Automation System",
    category: "WORKFLOW AUTOMATION & AI",
    badge: "ENTERPRISE AUTOMATION",
    tagline: "Automated corporate expense routing, policy thresholds, and instant approvals using n8n.",
    description:
      "An intelligent workflow automation system that evaluates corporate reimbursement claims, enforces spend compliance rules, routes multi-tier approvals, and dispatches automated webhook alerts.",
    problem:
      "Manual expense auditing creates bottlenecks for finance teams, delays employee reimbursements, and frequently overlooks minor compliance violations or duplicate invoices.",
    solution:
      "Architected an automated decisioning pipeline using n8n and webhook triggers that categorizes expense submissions, checks spending limits against organizational policy, and approves routine claims instantly while routing outliers to managers.",
    techStack: ["n8n", "Workflow Automation", "AI Decisioning", "Webhooks", "JSON", "REST APIs"],
    keyFeatures: [
      "Automated policy evaluation based on configurable spend limits and cost centers",
      "Multi-tier conditional routing with automated escalation triggers",
      "Instant notification dispatch via webhooks and email integrations",
      "Duplicate claim detection and anomaly flagging for high-value claims",
      "Audit trail generation for compliance transparency and reporting",
    ],
    resultImpact:
      "Eliminates 85% of routine manual expense reviews, accelerating approval turnaround time from days to seconds.",
    liveDemoUrl: "https://github.com/tamilmani290806-dotcom",
    sourceCodeUrl: "https://github.com/tamilmani290806-dotcom",
    caseStudy: {
      overview:
        "The AI-Based Expense Approval Automation System demonstrates how workflow automation and rules-based intelligence liberate knowledge workers from repetitive administrative drudgery.",
      problem:
        "Finance teams spend an estimated 20% of their month manually verifying petty expenses, hotel receipts, and travel vouchers that already meet company criteria.",
      approach:
        "Designed an asynchronous event-driven workflow where incoming claim payloads are parsed, validated against policy rules, and categorized. Claims beneath risk thresholds are auto-cleared; exceptions generate manager approval requests.",
      technology:
        "n8n provided visual node orchestration, self-hosted reliability, and rich webhook capabilities; JSON schema validators ensured payload integrity; REST webhooks handled notification dispatch.",
      implementation:
        "Built modular workflow nodes handling intake, rate calculation, manager lookup, and notifications, with automated rollback and logging in case of downstream API failure.",
      result:
        "Presented as an enterprise automation paper and prototype demonstrating significant reduction in operational friction and human error.",
      lessonsLearned:
        "Resilient error handling and automated fallback notifications are critical in financial workflows where dropped requests cause real employee friction.",
    },
  },
  {
    id: "portfolio-ai-assistant",
    number: "05",
    name: "Interactive AI Portfolio & Digital Experience",
    category: "CREATIVE ENGINEERING & AI",
    badge: "DIGITAL PRODUCT",
    tagline: "High-craft portfolio platform featuring conversational 'Tamilarasi AI' and Awwwards-inspired UX.",
    description:
      "A bespoke personal digital platform engineered from the ground up to showcase technical depth, AI integration, and design sophistication without generic templates or bloated dependencies.",
    problem:
      "Most developer portfolios look identical—generic cards, canned gradients, and static text that fail to convey personality, architectural rigor, or genuine engineering craftsmanship.",
    solution:
      "Created an editorial digital product pairing Space Grotesk typography and controlled glassmorphism with an embedded, grounded conversational assistant ('Tamilarasi AI') and interactive project case studies.",
    techStack: ["React 19", "Vite", "Modern CSS", "Lucide Icons", "Semantic HTML", "Conversational AI"],
    keyFeatures: [
      "Custom lagging cursor with smooth contextual mode expansion ('VIEW', 'OPEN', 'EXPLORE')",
      "Embedded 'Tamilarasi AI' command interface with grounded domain knowledge",
      "Comprehensive 7-step Case Study modal architecture with keyboard accessibility",
      "Interactive Skill Ecosystem with contextual hover inspector",
      "Zero template bloat: pure, GPU-accelerated CSS and semantic DOM tree",
    ],
    resultImpact:
      "Delivers an unforgettable first impression, proving frontend craftsmanship, AI capabilities, and product thinking within seconds.",
    liveDemoUrl: "https://sivanika-portfolio.vercel.app/",
    sourceCodeUrl: "https://github.com/tamilmani290806-dotcom",
    caseStudy: {
      overview:
        "Rather than just listing resume bullet points, this platform functions as a live demonstration of what I build: intelligent, fluid, accessible, and uncompromising digital experiences.",
      problem:
        "Traditional student portfolios often feel uninspired. Recruiters and engineering leads spend an average of 15 seconds skimming before bouncing.",
      approach:
        "Applied editorial typography, intentional whitespace, and subtle micro-interactions to create a cinematic narrative. Integrated a custom AI assistant so visitors can query my background in natural language.",
      technology:
        "Built on React 19 and Vite for sub-second hot reload and minimal bundle footprint. Designed custom CSS architecture with glass surfaces, CSS custom properties, and reduced-motion fallbacks.",
      implementation:
        "Developed custom cursor physics, smooth tabbed filtering, responsive modal traps, and an in-memory conversational knowledge engine that responds instantly without third-party latency.",
      result:
        "A distinctive digital footprint that sets a high benchmark for creative engineering and professional storytelling.",
      lessonsLearned:
        "Restraint is the hallmark of premium design. Removing superfluous particle explosions and focusing on typography, layout, and smooth interactions yields a far more impactful experience.",
    },
  },
];

export const experienceData = [
  {
    period: "2022 — 2026 (Current)",
    type: "education",
    title: "B.E. Computer Science & Engineering",
    institution: "Kongunadu College of Engineering and Technology",
    meta: "CGPA: 8.0 / 10.0",
    badge: "Degree in Progress",
    description:
      "Core curriculum in Data Structures, Algorithms, Operating Systems, Database Management Systems, Machine Learning, Computer Networks, and Software Engineering.",
    highlights: [
      "Consistent academic record with 8.0 CGPA",
      "Active participant in technical symposiums, paper presentations, and hackathons",
      "Lead developer for departmental AI and web engineering projects",
    ],
  },
  {
    period: "2024 / 2025",
    type: "internship",
    title: "Generative AI & Agentic AI Internship",
    institution: "Applied AI Research & Engineering",
    meta: "Hands-on Technical Internship",
    badge: "AI Specialization",
    description:
      "Engaged in building autonomous agentic workflows, multi-agent state machines, Retrieval-Augmented Generation (RAG) pipelines, and LLM integrations.",
    highlights: [
      "Architected multi-agent interaction flows using LangGraph and LangChain",
      "Engineered vector embedding search pipelines with ChromaDB and PostgreSQL",
      "Implemented prompt engineering techniques and structured output validation",
    ],
  },
  {
    period: "2024",
    type: "internship",
    title: "Full Stack Web Development Internship",
    institution: "Software Development Division",
    meta: "Hands-on Technical Internship",
    badge: "Full Stack Web",
    description:
      "Developed responsive frontend interfaces with React, built asynchronous RESTful endpoints with Python and FastAPI, and modeled relational database schemas.",
    highlights: [
      "Engineered reusable component libraries with modern CSS and state management",
      "Connected client frontends to asynchronous backend APIs with error boundaries",
      "Collaborated using Git version control and agile sprint reviews",
    ],
  },
  {
    period: "2023 — 2024",
    type: "education",
    title: "Higher Secondary Certificate (HSC)",
    institution: "Girls Government Higher Secondary School",
    meta: "Score: 77.3%",
    badge: "Higher Secondary",
    description:
      "Focused on Mathematics, Physics, Chemistry, and Computer Science fundamentals, establishing strong quantitative reasoning.",
    highlights: ["Strong foundation in analytical problem solving and scientific principles"],
  },
  {
    period: "2021 — 2022",
    type: "education",
    title: "Secondary School Leaving Certificate (SSLC)",
    institution: "Government Higher Secondary School",
    meta: "Score: 79.2%",
    badge: "Secondary School",
    description:
      "Completed secondary education with honors in general sciences and mathematics.",
    highlights: ["Academic excellence and foundational coursework"],
  },
];

export const achievementsData = [
  {
    id: "kpr-hackathon",
    category: "2ND PRIZE",
    categoryType: "prize",
    title: "FIESTAA'26 Smart Automation Hackathon",
    organization: "KPR Institute of Engineering and Technology",
    date: "2026",
    badge: "2ND PRIZE WINNER 🥈",
    spotlight: true,
    summary:
      "Secured 2nd Prize in a prestigious national hackathon by architecting and presenting a rapid smart automation solution.",
    details:
      "Competed against hundreds of engineering teams under tight time limits. Engineered a working software prototype, defended architectural decisions before industry evaluators, and earned 2nd place honors.",
    skills: ["Smart Automation", "Rapid Prototyping", "Full-Stack Development", "Technical Pitching"],
  },
  {
    id: "tn-startup-mission",
    category: "HACKATHONS",
    categoryType: "showcase",
    title: "SmartFrame AI at TN Startup Mission",
    organization: "Tamil Nadu Startup and Innovation Mission (TANSIM)",
    date: "2025 / 2026",
    badge: "OFFICIAL STARTUP SELECTION 🚀",
    spotlight: true,
    summary:
      "Selected to present SmartFrame AI before government venture mentors, innovation officers, and startup ecosystem leaders.",
    details:
      "Showcased real-time Interpupillary Distance (IPD) optical measurement using computer vision and MediaPipe, demonstrating practical business potential and consumer impact in the eyewear industry.",
    skills: ["Computer Vision", "Startup Validation", "Product Roadmapping", "Investor Defense"],
  },
  {
    id: "kaggle-aisehack",
    category: "HACKATHONS",
    categoryType: "hackathon",
    title: "AISEHack 2.0 — Polymer Property Prediction",
    organization: "Kaggle Machine Learning Challenge",
    date: "2025",
    badge: "COMPETITIVE ML 📊",
    spotlight: true,
    summary:
      "Engineered ensemble regression pipelines for chemical polymer property forecasting in a competitive ML hackathon.",
    details:
      "Executed comprehensive exploratory data analysis, correlation filtering, and tuned gradient-boosted decision trees (XGBoost/LightGBM) to forecast polymer behavior on Kaggle.",
    skills: ["Kaggle Competitions", "Feature Engineering", "Ensemble Modeling", "Data Analysis"],
  },
  {
    id: "internship-genai",
    category: "INTERNSHIPS",
    categoryType: "internship",
    title: "Generative AI & Agentic AI Internship",
    organization: "Applied AI Research & Engineering",
    date: "2024 / 2025",
    badge: "AI SPECIALIZATION 🤖",
    spotlight: true,
    summary:
      "Hands-on engineering internship architecting autonomous agentic workflows, multi-agent state machines, and RAG pipelines.",
    details:
      "Engineered multi-agent state machines using LangGraph and LangChain. Implemented semantic vector search with ChromaDB and PostgreSQL, and integrated structured output validation for production-grade AI agents.",
    skills: ["LangGraph", "LangChain", "RAG Pipelines", "ChromaDB", "LLMs"],
  },
  {
    id: "internship-fullstack",
    category: "INTERNSHIPS",
    categoryType: "internship",
    title: "Full Stack Web Development Internship",
    organization: "Software Development Division",
    date: "2024",
    badge: "FULL STACK WEB 💻",
    spotlight: false,
    summary:
      "Engineered responsive modern React frontend components and built asynchronous RESTful endpoints with Python and FastAPI.",
    details:
      "Built reusable component systems with modern CSS and state management. Integrated frontends to asynchronous backend APIs, implemented robust error handling, and collaborated in agile sprint reviews.",
    skills: ["React", "FastAPI", "Python", "REST APIs", "Modern CSS"],
  },
  {
    id: "paper-visionassist",
    category: "PAPER PRESENTATIONS",
    categoryType: "presentation",
    title: "Paper: VisionAssist — AI-Powered Smart Spectacles",
    organization: "INVENTRON’26 — Mahendra Institute of Technology (ECE Dept)",
    date: "2026",
    badge: "INVENTRON’26 PRESENTATION 👓",
    spotlight: true,
    summary:
      "Presented innovative research on VisionAssist, an assistive wearable eyewear platform integrating computer vision, obstacle detection, and audio guidance for visually impaired individuals.",
    details:
      "Delivered live research defense at the National Level Technical Symposium (INVENTRON'26) organized by the Dept. of Electronics and Communication Engineering at Mahendra Institute of Technology. Demonstrated edge-computed vision models, real-time spatial depth estimation, low-latency audio telemetry, and hardware-efficient sensor integration.",
    skills: ["Computer Vision", "Smart Spectacles", "Assistive AI", "Edge Computing", "Symposium Defense"],
  },
  {
    id: "paper-doctor",
    category: "PAPER PRESENTATIONS",
    categoryType: "presentation",
    title: "Paper: Who is our next doctor? Either human or AI",
    organization: "National Level Technical Symposium",
    date: "2025",
    badge: "RESEARCH PRESENTATION 🩺",
    spotlight: true,
    summary:
      "Presented research examining clinical diagnostic symbiosis, medical sensitivity, and ethical boundaries between clinicians and AI algorithms in modern healthcare decision support.",
    details:
      "Presented at a National Level Technical Symposium, examining how deep learning and statistical triage systems can support clinicians in differential diagnoses without replacing human empathy, clinical accountability, or doctor-patient confidentiality.",
    skills: ["Healthcare AI", "Clinical Decision Systems", "Bioethics", "Medical Sensitivity", "Technical Defense"],
  },
  {
    id: "paper-quantum",
    category: "PAPER PRESENTATIONS",
    categoryType: "presentation",
    title: "Paper: Quantum Computing Paradigms & Algorithms",
    organization: "Departmental Technical Colloquium",
    date: "2025",
    badge: "RESEARCH PRESENTATION ⚛️",
    spotlight: false,
    summary:
      "Explored quantum superposition, qubit entanglement, quantum logic gates, and cryptographic implications for next-generation computing architectures.",
    details:
      "Presented analytical models on Shor's and Grover's quantum algorithms, evaluating theoretical limits of RSA encryption and examining post-quantum cryptographic defenses against quantum advantage.",
    skills: ["Quantum Theory", "Qubit Entanglement", "Computational Complexity", "Post-Quantum Cryptography"],
  },
  {
    id: "paper-expense-automation",
    category: "PAPER PRESENTATIONS",
    categoryType: "presentation",
    title: "Paper: AI-Based Expense Approval Automation System",
    organization: "National Technical Symposium",
    date: "2025",
    badge: "RESEARCH PRESENTATION ⚡",
    spotlight: false,
    summary:
      "Presented architecture and research on autonomous heuristic workflow routing and policy-driven corporate reimbursement automation using n8n and AI.",
    details:
      "Detailed algorithmic receipt OCR parsing, anomaly and fraud detection heuristics, multi-tier escalation graphs, and automatic audit reconciliation for enterprise financial compliance.",
    skills: ["Workflow Automation", "n8n", "Heuristic Routing", "OCR Parsing", "Enterprise Compliance"],
  },
  {
    id: "paper-agentic-ai",
    category: "PAPER PRESENTATIONS",
    categoryType: "presentation",
    title: "Paper: Agentic AI & Autonomous Multi-Agent Architectures",
    organization: "Advanced AI Symposium & Research Forum",
    date: "2025 / 2026",
    badge: "RESEARCH PRESENTATION 🤖",
    spotlight: true,
    summary:
      "Researched and presented stateful cyclic graph architectures, LangGraph agent workflows, and hybrid RAG memory retrieval for autonomous agents.",
    details:
      "Investigated multi-agent delegation frameworks, dynamic tool-calling feedback loops, memory pruning techniques, and self-correcting autonomous task completion across complex multi-step reasoning environments.",
    skills: ["Agentic AI", "LangGraph", "Multi-Agent State Machines", "RAG Pipelines", "Autonomous Decisioning"],
  },
  {
    id: "cert-uiux",
    category: "CERTIFICATIONS",
    categoryType: "certification",
    title: "UI/UX Design Fundamentals and Beyond",
    organization: "Professional Design Academy",
    date: "2024",
    badge: "CERTIFIED 🎨",
    spotlight: false,
    summary:
      "Comprehensive training in user research, wireframing, color theory, typography, Figma component systems, and usability testing.",
    details:
      "Completed hands-on capstone redesigning mobile and desktop interfaces with auto-layout, interactive prototypes, and micro-interactions.",
    skills: ["Figma", "Design Thinking", "Wireframing", "Usability Testing"],
  },
  {
    id: "cert-iot",
    category: "CERTIFICATIONS",
    categoryType: "certification",
    title: "Introduction to Internet of Things (IoT)",
    organization: "NPTEL / Technical Institute",
    date: "2024",
    badge: "CERTIFIED 📡",
    spotlight: false,
    summary:
      "Studied sensor networks, microcontrollers, communication protocols (MQTT, HTTP), and cloud IoT telemetry.",
    details: "Practical integration of sensor data streams with lightweight dashboard interfaces.",
    skills: ["Sensors", "MQTT", "Embedded Logic", "Hardware Telemetry"],
  },
  {
    id: "cert-analytics",
    category: "COURSES",
    categoryType: "course",
    title: "Data Analytics with Python",
    organization: "Specialized Coursework",
    date: "2024",
    badge: "COURSEWORK 🐍",
    spotlight: false,
    summary:
      "In-depth mastery of Pandas, NumPy, statistical hypothesis testing, data visualization, and exploratory data workflows.",
    details: "Built end-to-end data pipelines turning raw, noisy datasets into actionable business dashboards.",
    skills: ["Pandas", "NumPy", "Statistical Analysis", "Data Cleaning"],
  },
  {
    id: "cert-frontend",
    category: "COURSES",
    categoryType: "course",
    title: "Frontend Development Specialization",
    organization: "Coursera / Online Platform",
    date: "2024",
    badge: "COURSEWORK 💻",
    spotlight: false,
    summary:
      "Advanced modern JavaScript, responsive CSS layouts, React principles, state management, and web accessibility standards.",
    details: "Built modular web applications following best practices in DOM performance and clean coding.",
    skills: ["React", "Modern JavaScript", "Responsive CSS", "A11y"],
  },
  {
    id: "cert-cybersecurity",
    category: "CERTIFICATIONS",
    categoryType: "certification",
    title: "Cybersecurity & Essential Security Skills",
    organization: "Security Skills Certification",
    date: "2024",
    badge: "CERTIFIED 🛡️",
    spotlight: false,
    summary:
      "Trained in network security fundamentals, threat analysis, secure coding practices, and OWASP Top 10 vulnerabilities.",
    details: "Understood defensive engineering principles to protect modern web applications and APIs.",
    skills: ["OWASP", "Network Security", "Secure Coding", "Vulnerability Defense"],
  },
];

// Grounded Knowledge Base for "Tamilarasi AI" Assistant
export const aiKnowledgeBase = {
  aboutMe: `Tamilarasi M. is a Computer Science and Engineering student at Kongunadu College of Engineering and Technology (CGPA: 8.0/10.0), located in Theni, Tamil Nadu, India. She is a creative engineer specializing in Artificial Intelligence, Full-Stack Web Development (React & FastAPI), and UI/UX design. She combines strong algorithmic foundations with intuitive, tactile interface design.`,

  education: `Tamilarasi is pursuing her Bachelor of Engineering (B.E.) in Computer Science and Engineering at Kongunadu College of Engineering and Technology with an impressive 8.0 CGPA. Prior to this, she secured 77.3% in Higher Secondary (HSC) at Girls Government Higher Secondary School and 79.2% in Secondary School (SSLC) at Government Higher Secondary School.`,

  skills: `Her technical skills are categorized into:
• FRONTEND: React, JavaScript, HTML, CSS, modern responsive design & glassmorphism.
• PROGRAMMING: Python, Java, C.
• AI / ML: Machine Learning, Scikit-learn, TensorFlow, Generative AI, LangGraph, RAG, OpenCV, MediaPipe.
• BACKEND: Node.js, Express, FastAPI, REST APIs.
• DATABASE: MongoDB, MySQL, SQLite.
• TOOLS & WORKFLOWS: Git, GitHub, VS Code, Figma, n8n workflow automation.`,

  projects: `Tamilarasi has built 5 standout projects:
1. 🤖 Placement Preparation AI Agent — Multi-agent system using LangGraph, RAG, and Gemini for automated resume ATS analysis and technical mock interviews.
2. 👓 SmartFrame AI — Computer vision system measuring Interpupillary Distance (IPD) from a webcam using OpenCV & MediaPipe (Presented at TN Startup Mission).
3. 🩺 PCOS Prediction Using ML — Clinical diagnostic pipeline using Random Forest and XGBoost optimized for high medical sensitivity.
4. ⚡ AI-Based Expense Approval Automation System — Enterprise n8n workflow engine routing corporate reimbursements based on policy rules.
5. 🌐 Interactive AI Portfolio & Experience — Custom-engineered portfolio with conversational AI assistant and 7-step case studies.`,

  hackathonsAndAchievements: `Notable achievements include:
• 🥈 2nd Prize Winner at FIESTAA'26 Smart Automation Hackathon (KPR Institute of Engineering and Technology).
• 🚀 Selected to pitch SmartFrame AI live at Tamil Nadu Startup and Innovation Mission (TN Startup Mission - TANSIM).
• 📊 Competed in Kaggle AISEHack 2.0 (Polymer Property Prediction).
• 📄 Authored & presented 5 National Research Papers:
  1. VisionAssist: AI-Powered Smart Spectacles (National Level Technical Symposium INVENTRON'26 — Mahendra Institute of Technology).
  2. Who is our next doctor? Either human or AI (National Level Technical Symposium).
  3. Quantum Computing Paradigms & Algorithms (Departmental Technical Colloquium).
  4. AI-Based Expense Approval Automation System (National Technical Symposium).
  5. Agentic AI & Autonomous Multi-Agent Architectures (Advanced AI Symposium & Research Forum).
• 📜 Earned certifications in UI/UX Design Fundamentals, IoT, Data Analytics with Python, Frontend Development, and Cybersecurity.`,

  internships: `Tamilarasi has completed two hands-on internships:
1. Generative AI & Agentic AI Internship — Focused on LangGraph multi-agent systems, RAG retrieval pipelines, and LLM integrations.
2. Full Stack Web Development Internship — Developed responsive React frontends, Python FastAPI backend services, and relational database schemas.`,

  contact: `You can reach Tamilarasi directly via:
• Email: tamilmani290806@gmail.com
• Phone: +91 93607 51067
• Location: Theni, Tamil Nadu, India
• LinkedIn: https://www.linkedin.com/in/tamilarasi-manidurai-033134357
• GitHub: https://github.com/tamilmani290806-dotcom
• Resume: Available to view and download directly at /resume.pdf on this site!`,
};

export const aiSuggestedPrompts = [
  "What projects has Tamilarasi built?",
  "Tell me about her Hackathon win at KPR!",
  "What is Tamilarasi's core tech stack?",
  "How does SmartFrame AI work?",
  "What degree and college is she studying in?",
  "How can I contact Tamilarasi?",
];
