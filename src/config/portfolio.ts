export type AboutTraitIcon = "graduationCap" | "palette" | "heart" | "shield" | "code" | "briefcase";

export type ClubIcon = "heart" | "shield" | "monitor" | "globe" | "users" | "droplets" | "megaphone" | "zap";

export type SocialIcon = "mail" | "github" | "linkedin" | "facebook" | "phone";

export const portfolioContent = {
  brandName: "Sayem",
  ownerName: "Abdullah Al Mahmud Sayem",
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Clubs", href: "#clubs" },
    { label: "Achievements", href: "#design" },
    { label: "Ventures", href: "#ventures" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    intro: "CSE Student - Designer - Volunteer - Entrepreneur",
    nameTop: "Abdullah Al",
    nameMiddle: "Mahmud",
    nameAccent: "Sayem.",
    summary:
      "A responsible and motivated CSE student with experience in leading teams, organizing events, and making a difference through community service.",
    resumeHref: "/Abdullah_Al_Mahmud_Sayem_Resume.pdf",
    resumeLabel: "Download CV",
    contactLabel: "Get in touch",
    scrollLabel: "Scroll to explore",
  },
  about: {
    eyebrow: "About",
    title: "I thrive at the intersection of technology, design & community.",
    description:
      "I am a responsible and motivated individual with real experience in leading teams, organizing events, and helping people through social work. I enjoy working with others and always try to complete my tasks sincerely.",
    traits: [
      { icon: "graduationCap" as AboutTraitIcon, label: "BSc in CSE", desc: "International Islamic University Chittagong" },
      { icon: "palette" as AboutTraitIcon, label: "Designer", desc: "Graphics & visual experiences" },
      { icon: "heart" as AboutTraitIcon, label: "Volunteer Leader", desc: "Selfless Organization BD - General Secretary" },
      { icon: "shield" as AboutTraitIcon, label: "BNCC Cadet", desc: "Cadet Sargent - military training" },
      { icon: "code" as AboutTraitIcon, label: "Programmer", desc: "C, C++, Python, Java, HTML, CSS" },
      { icon: "briefcase" as AboutTraitIcon, label: "Entrepreneur", desc: "Running small ventures" },
    ],
  },
  clubs: {
    eyebrow: "Clubs & Volunteering",
    title: "Community is everything.",
    items: [
      {
        icon: "heart" as ClubIcon,
        name: "Selfless Organization BD",
        role: "General Secretary",
        desc: "Led relief and welfare programs including food, clothing, and education support for underprivileged communities. Assisted in rehabilitation and empowerment projects for flood-affected families.",
        period: "Oct 2024 - Present",
      },
      {
        icon: "shield" as ClubIcon,
        name: "Bangladesh National Cadet Corps (BNCC)",
        role: "Cadet Sargent",
        desc: "Led two military training programs. Participated in COVID-19 awareness campaigns.",
        period: "Aug 2019 - Aug 2021",
      },
      {
        icon: "monitor" as ClubIcon,
        name: "IIUC Computer Club",
        role: "Asst. Social Welfare Secretary",
        desc: "Volunteered in multiple departmental events including Farewell, Fresher's Reception, Ramadan Fest, and Sports Week. Organized programming contests and academic programs.",
        period: "Oct 2024 - Present",
      },
      {
        icon: "globe" as ClubIcon,
        name: "IIUC Cyber Security Club",
        role: "Asst. Logistics & Events Secretary",
        desc: "Contributed to CyberQuest 101, Secure Insight Webinar, and Secure Coding 101. Coordinated logistics and event management.",
        period: "May 2025 - Dec 2025",
      },
      {
        icon: "users" as ClubIcon,
        name: "Cox's Bazar Students Welfare Association IIUC",
        role: "Assistant IT Secretary",
        desc: "Contributed to Reception, Farewell & Grand Iftar 2025 and Freshers & Merit Reception 2025.",
        period: "Feb 2025 - Present",
      },
      {
        icon: "droplets" as ClubIcon,
        name: "Lohagara Blood Donation Group",
        role: "General Member",
        desc: "Managed blood donors for patients and conducted awareness campaigns. Personally donated blood.",
        period: "Sep 2025 - Present",
      },
      {
        icon: "megaphone" as ClubIcon,
        name: "ICT Olympiad Bangladesh",
        role: "Campus Ambassador",
        desc: "Most Promising Ambassador (Season 3). Handled 2-day offline registration booth at IIUC campus.",
        period: "Aug 2025 - Present",
      },
      {
        icon: "zap" as ClubIcon,
        name: "SURGE Bangladesh",
        role: "Campus Ambassador",
        desc: "Handled full day offline registration booth and information session at IIUC campus.",
        period: "Mar 2026 - Present",
      },
    ],
  },
  achievements: {
    eyebrow: "Achievements",
    title: "Certifications & awards.",
    certificationsLabel: "Certifications",
    awardsLabel: "Awards",
    verifyLabel: "Verify",
    idLabel: "ID",
    certifications: [
      {
        title: "Machine Learning I",
        issuer: "Columbia+",
        date: "Oct 2025",
        link: "https://badges.plus.columbia.edu/992b0908-6b5a-4b80-8455-03691999f1ca#acc.qin6fvD3",
        credentialId: "162242148",
      },
      {
        title: "Agent X - AI Prompt Engineering & Microsoft 365 Copilot",
        issuer: "Credential",
        date: "Sep 2025",
        link: "https://verify.certs365.io/?=128166210926",
        credentialId: "128166210926",
      },
      {
        title: "AI Prompt Engineer Level 1",
        issuer: "AI CERTs",
        date: "Aug 2025",
        link: "https://verify.certs365.io/?=439ee6c361f0",
        credentialId: "439ee6c361f0",
      },
      {
        title: "Basic Programming with Python",
        issuer: "EDGE",
        date: "Apr 2025",
        link: "https://training.edge.gov.bd/certificate-validation",
        credentialId: "EDGE-DSTS-104-1699-00025",
      },
    ],
    awards: [
      { title: "3rd Position - CyberCamp101 CTF Competition", org: "IIUC Cyber Security Club", date: "Mar 2026" },
      { title: "3rd Place - Graphics Design Bootcamp 2025", org: "IIUC Developers & Entrepreneurs Society", date: "Mar 2026" },
      { title: "Champion - Volleyball", org: "Bangladesh National Cadet Corps", date: "Nov 2019" },
      { title: "Physics Olympiad Regional Round Winner", org: "Bangladesh Physics Olympiad", date: "Feb 2020" },
    ],
  },
  ventures: {
    eyebrow: "Ventures",
    titleTop: "Small businesses,",
    titleBottom: "big ambitions.",
    items: [
      {
        name: "Pico Picks",
        desc: "We import premium diecast cars, CCA, Hot Wheels, miniature items and many more.",
        status: "Active",
        mail: "picopicksbd@gmail.com",
        link: "https://www.facebook.com/picopicks",
      },
      {
        name: "Spark",
        desc: "We import premium decorative items, katana swords, watches, special key rings, lights, toys and more.",
        status: "Coming Soon",
        mail: "sparkbd2026@gmail.com",
        link: null,
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's work together.",
    description: "Whether you need a designer, a developer, or just want to chat about ideas - I'd love to hear from you.",
    location: "Uthman Ra Hall, IIUC, Kumira, Chittagong",
    footerNote: "Built with passion",
    socials: [
      { icon: "mail" as SocialIcon, label: "Email", href: "mailto:aamsayem01@gmail.com" },
      { icon: "github" as SocialIcon, label: "GitHub", href: "https://github.com/aamsayem" },
      { icon: "linkedin" as SocialIcon, label: "LinkedIn", href: "https://linkedin.com/in/aamsayem" },
      { icon: "facebook" as SocialIcon, label: "Facebook", href: "https://www.facebook.com/aamsayem01" },
      { icon: "phone" as SocialIcon, label: "Call", href: "tel:+8801886072936" },
    ],
  },
};
