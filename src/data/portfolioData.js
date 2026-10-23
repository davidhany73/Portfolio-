/**
 * ==============================================================================
 *                     DAVID BIBAWY (DAVID HANY) - PORTFOLIO CONFIG
 * ==============================================================================
 * 
 * 💡 HOW TO EDIT THIS FILE (NO CODE KNOWLEDGE REQUIRED):
 * 
 * 1. EDIT PERSONAL INFO (Name, Bio, Tagline, Location, Contact):
 *    -> Update the fields inside the `personalInfo` object below.
 * 
 * 2. CHANGE YOUR PROFILE PICTURE:
 *    -> Replace the `avatar` URL in `personalInfo.avatar`.
 *    -> You can use an online image URL (like GitHub, Imgur, Cloudinary) OR put
 *       your photo in the `public/` folder (e.g., `public/profile.jpg`) and set
 *       `avatar: './profile.jpg'`.
 * 
 * 3. ADD OR EDIT PROJECTS:
 *    -> Go to the `projects` array below.
 *    -> To add a new project, copy an existing project block and fill in:
 *       - title: Project name
 *       - description: 1-3 sentences about what it does
 *       - category: 'cyber', 'ai', 'web', or 'systems'
 *       - tech: List of technologies (e.g. ['Python', 'OpenCV', 'React'])
 *       - github: Your GitHub repository link
 *       - demo: Live demo link (or null if none)
 *       - featured: true or false (featured projects get a glowing highlight badge)
 * 
 * 4. EDIT SOCIAL LINKS:
 *    -> Update `socialLinks` (LinkedIn, GitHub, Email, Phone).
 * ==============================================================================
 */

export const portfolioData = {
  // ─── PERSONAL & BRAND IDENTITY ──────────────────────────────────────────────
  personalInfo: {
    name: "David Bibawy",
    preferredName: "David Hany (davidhany73)",
    title: "Cybersecurity Specialist & Software Developer",
    subtitle: "Ethical Hacking • Machine Learning • Resilient Systems Architecture",
    tagline: "Securing modern digital frontiers and engineering intelligent systems at the intersection of offensive security, Edge AI, and cryptography.",
    
    // Profile Picture: Default is your live GitHub avatar.
    // To use a local image, put 'my-photo.jpg' inside the 'public/' folder and write: avatar: './my-photo.jpg'
    avatar: "https://avatars.githubusercontent.com/u/347058330?v=4",
    
    bioLead: "I am a Cybersecurity Enthusiast & Software Developer passionate about building bulletproof applications, conducting red-team offensive research, and developing Machine Learning security models.",
    bioDetails: "Based in Alexandria, Egypt, pursuing a B.Sc. in Computer Science and AI with specialization in Cyber Security at Pharos University (Expected 2026). My work spans automated banking fraud detection, multimodal biometric verification, encrypted network communications, Web3 smart contract security, and low-level robotics interfaces.",
    
    location: "Alexandria, Egypt",
    email: "202201324@pua.edu.eg",
    phone: "+20 121 222 2818",
    cvFileName: "David_Hany_CV.pdf",
    
    // Quick Metrics shown in Hero
    metrics: [
      { value: "11+", label: "Public Repositories" },
      { value: "120+", label: "Telecom Security Hours" },
      { value: "4", label: "Industry Certifications" },
      { value: "100%", label: "Verified Codebases" },
    ],
  },

  // ─── SOCIAL CHANNELS ────────────────────────────────────────────────────────
  socialLinks: {
    github: "https://github.com/davidhany73",
    githubUsername: "davidhany73",
    linkedin: "https://www.linkedin.com/in/david-hany-naeam-a9485032b",
    linkedinDisplay: "linkedin.com/in/david-hany-naeam-a9485032b",
    email: "mailto:202201324@pua.edu.eg",
    phone: "tel:+201212222818",
  },

  // ─── PROJECT CATEGORIES ─────────────────────────────────────────────────────
  categories: [
    { label: "All Repositories", value: "all" },
    { label: "Cybersecurity & Red Team", value: "cyber" },
    { label: "AI & Machine Learning", value: "ai" },
    { label: "Web3 & Full-Stack", value: "web" },
    { label: "IoT & Systems", value: "systems" },
  ],

  // ─── PROJECTS LIST (SYNCHRONIZED WITH GITHUB: @davidhany73) ─────────────────
  projects: [
    {
      id: "fraud-bank-detection",
      title: "Fraud Bank Detection System",
      category: "ai cyber",
      badge: "AI & FinTech Defense",
      badgeColor: "badge-ai",
      description: "Machine learning-powered banking fraud detection pipeline that analyzes transaction streams, flags anomalous behaviors in real time, and prevents unauthorized financial transfers using anomaly scoring.",
      tech: ["Python", "Machine Learning", "Pandas", "Scikit-Learn", "Financial Security"],
      github: "https://github.com/davidhany73/Fraud-Bank-Detection-System",
      demo: null,
      featured: true,
      stats: { language: "Python" }
    },
    {
      id: "multimodal-biometrics",
      title: "Multimodal Biometric Attendance System",
      category: "ai cyber",
      badge: "Computer Vision & AI",
      badgeColor: "badge-featured",
      description: "Autonomous biometric tracking suite integrating real-time facial recognition and multimodal feature extraction for secure, tamper-proof attendance management with zero proxy capability.",
      tech: ["Python", "OpenCV", "Computer Vision", "NumPy", "Facial Recognition"],
      github: "https://github.com/davidhany73/Multimodal-Biometric-Attendance-System",
      demo: null,
      featured: true,
      stats: { language: "Python" }
    },
    {
      id: "encrypted-secure-chat",
      title: "Encrypted Secure Chat Application",
      category: "cyber systems",
      badge: "Cryptography & Network",
      badgeColor: "badge-redteam",
      description: "Low-level client-server messaging system built in C featuring end-to-end cryptographic encryption, secure key exchange protocols, and tamper-resistant network sockets for private communication.",
      tech: ["C", "Cryptography", "Socket Programming", "OpenSSL", "Network Security"],
      github: "https://github.com/davidhany73/Encrypted-Secure-Chat-Application",
      demo: null,
      featured: true,
      stats: { language: "C" }
    },
    {
      id: "ethereum-web3-wallet",
      title: "Ethereum Web3 Crypto Wallet",
      category: "web",
      badge: "Web3 & Blockchain",
      badgeColor: "badge-featured",
      description: "Decentralized Web3 Ethereum wallet application facilitating cryptographic keypair generation, transaction signing, blockchain smart contract interaction, and token asset management.",
      tech: ["JavaScript", "Web3.js", "Ethereum", "Smart Contracts", "Cryptography"],
      github: "https://github.com/davidhany73/Ethereum-Web3-Wallet",
      demo: null,
      featured: true,
      stats: { language: "JavaScript" }
    },
    {
      id: "brute-force-simulator",
      title: "Brute Force Attack Simulator",
      category: "cyber",
      badge: "Red Team & Educational",
      badgeColor: "badge-redteam",
      description: "Defensive penetration testing tool simulating cryptographic password brute-force and dictionary attacks to benchmark entropy thresholds, audit password policies, and test rate-limiting.",
      tech: ["Python", "Red Teaming", "Cryptanalysis", "Multithreading", "Security Auditing"],
      github: "https://github.com/davidhany73/Brute-Force-Simulation-Educational",
      demo: null,
      featured: false,
      stats: { language: "Python" }
    },
    {
      id: "password-checker-strength",
      title: "Password Strength & Entropy Analyzer",
      category: "cyber",
      badge: "Defensive Security",
      badgeColor: "badge-featured",
      description: "Security validation tool assessing credential entropy, dictionary breach vulnerabilities, character variance, and NIST compliance to enforce robust authentication standards.",
      tech: ["Python", "Information Theory", "NIST Guidelines", "Regex", "CLI Tool"],
      github: "https://github.com/davidhany73/Password-Checker_strenth",
      demo: null,
      featured: false,
      stats: { language: "Python" }
    },
    {
      id: "instagram-clone-flask",
      title: "Instagram Clone (Flask & MySQL)",
      category: "web",
      badge: "Full-Stack Backend",
      badgeColor: "badge-featured",
      description: "Full-stack relational database clone featuring user authentication, session security, photo upload pipelines, database normalization, and optimized SQL schemas for high-concurrency testing.",
      tech: ["Python", "Flask", "MySQL", "RESTful API", "HTML/CSS"],
      github: "https://github.com/davidhany73/Instagram-Clone-Flask-MySQL",
      demo: null,
      featured: false,
      stats: { language: "Python / MySQL" }
    },
    {
      id: "smart-glove-robotic-hand",
      title: "Smart Glove Robotic Hand Interface",
      category: "systems",
      badge: "IoT & Embedded C++",
      badgeColor: "badge-featured",
      description: "Embedded robotic hardware interface translating human hand gestures via flex sensors and microcontrollers to actuate an articulated robotic hand with sub-millisecond responsiveness.",
      tech: ["C++", "Arduino", "Embedded Systems", "Robotics", "Hardware Sensors"],
      github: "https://github.com/davidhany73/Smart-Glove-Robotic-Hand",
      demo: null,
      featured: false,
      stats: { language: "C++" }
    },
    {
      id: "smart-attendance-qr",
      title: "Smart Attendance System (QR Code)",
      category: "web",
      badge: "Web Architecture",
      badgeColor: "badge-ai",
      description: "Dynamic QR-code based attendance tracking platform designed to eliminate proxy sign-ins through time-expiring cryptographic verification tokens and automatic database logging.",
      tech: ["CSS / HTML", "Python", "QR Code Engine", "Session Auth", "Database"],
      github: "https://github.com/davidhany73/Smart-Attendance-System-QR-Code",
      demo: null,
      featured: false,
      stats: { language: "HTML / CSS" }
    },
    {
      id: "security-review-access",
      title: "Security Review & Access Control Engine",
      category: "cyber",
      badge: "Access Governance",
      badgeColor: "badge-redteam",
      description: "Interactive security evaluation framework demonstrating role-based access control (RBAC), privilege boundaries, and access permission review protocols to mitigate privilege escalation.",
      tech: ["HTML", "RBAC", "Access Control", "Security Auditing", "Policy Enforcement"],
      github: "https://github.com/davidhany73/security_review_access_C-r-",
      demo: null,
      featured: false,
      stats: { language: "HTML" }
    },
    {
      id: "upheal-mindquest",
      title: "UpHeal / MindQuest (Graduation Project)",
      category: "ai cyber",
      badge: "Graduation Capstone",
      badgeColor: "badge-featured",
      description: "Multi-layered Android security paradigm featuring a Host-Based Intrusion Prevention System (HIPS), Edge AI for real-time visual classification, and Runtime Application Self-Protection (RASP) against reverse engineering.",
      tech: ["Android Security", "Edge AI", "RASP", "TensorFlow Lite", "HIPS"],
      github: "https://github.com/davidhany73",
      demo: null,
      featured: true,
      stats: { language: "Python / Java" }
    }
  ],

  // ─── TECHNICAL SKILLS MATRIX ────────────────────────────────────────────────
  skills: {
    programming: [
      { name: "Python (ML, Sockets, Security Automation)", level: "95%" },
      { name: "C / C++ (Systems, Embedded, Sockets)", level: "90%" },
      { name: "JavaScript / Web3.js / React", level: "88%" },
      { name: "SQL (MySQL Database Architecture)", level: "86%" },
    ],
    cybersecurity: [
      { name: "Penetration Testing & Red Teaming (Metasploit)", level: "92%" },
      { name: "Packet Inspection & Protocol Analysis (Wireshark)", level: "94%" },
      { name: "Cryptographic Engineering & End-to-End Encryption", level: "90%" },
      { name: "Kali Linux & Operating Systems Hardening", level: "95%" },
    ],
    aiAndData: [
      { name: "Computer Vision & Biometrics (OpenCV)", level: "92%" },
      { name: "Machine Learning & Anomaly Detection (Scikit-Learn)", level: "90%" },
      { name: "TensorFlow Lite & Edge Intelligence", level: "86%" },
      { name: "Data Manipulation (NumPy, Pandas, MATLAB)", level: "88%" },
    ],
  },

  // ─── CHRONOLOGICAL EXPERIENCE ───────────────────────────────────────────────
  experience: [
    {
      role: "Cyber Security Intern",
      organization: "WE Telecommunications",
      orgIcon: "fa-tower-broadcast",
      hours: "120 Hours Completed",
      period: "2023",
      location: "Alexandria, Egypt",
      bullets: [
        "Conducted thorough vulnerability assessments on internal telecommunications networks utilizing <strong>Metasploit</strong> and Kali Linux security toolsets.",
        "Monitored, captured, and analyzed live network packet traffic with <strong>Wireshark</strong> to proactively detect anomalies, unauthorized intrusions, and security vulnerabilities.",
        "Assisted senior security analysts in designing, implementing, and hardening defensive network perimeter strategies.",
      ]
    }
  ],

  // ─── ACADEMIC EDUCATION ─────────────────────────────────────────────────────
  education: [
    {
      degree: "B.Sc. in Computer Science and AI",
      specialization: "Major: Cyber Security",
      institution: "Pharos University in Alexandria (PUA)",
      period: "2022 – Expected 2026",
      location: "Alexandria, Egypt",
      gpa: "2.7",
      bullets: [
        "Specialized coursework in Network Defense, Applied Cryptography, OS Hardening, Machine Learning, and Computer Vision.",
        "Graduation Project: UpHeal / MindQuest — an intelligent mobile security paradigm fusing Edge AI with Runtime Application Self-Protection (RASP).",
      ]
    }
  ],

  // ─── ACCREDITATIONS & CERTIFICATIONS ────────────────────────────────────────
  certifications: [
    {
      name: "Cisco CCNA (200-301) Training Program",
      issuer: "WE Telecommunications • 120 Hours",
      date: "Aug 2024 – Sep 2024",
      icon: "fa-network-wired",
      tag: "Verified Intensive",
      color: "var(--cyan-neon)"
    },
    {
      name: "CompTIA Security+ Certification",
      issuer: "CompTIA Online",
      date: "2024",
      icon: "fa-lock",
      tag: "Globally Recognized",
      color: "var(--purple-neon)"
    },
    {
      name: "Google Cybersecurity Professional Certificate",
      issuer: "Coursera • Google",
      date: "2023",
      icon: "fa-google",
      iconPrefix: "fab",
      tag: "Professional Credential",
      color: "var(--green-cyber)"
    },
    {
      name: "Certificate of Appreciation (Talent Day Show)",
      issuer: "Pharos University • Alexandria",
      date: "Feb 2023",
      icon: "fa-trophy",
      tag: "University Honor",
      color: "#ffbd2e"
    }
  ]
};
