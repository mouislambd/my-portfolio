"use client";
import { useState, useEffect, SyntheticEvent } from "react";

const FontLink = () => (
    <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Syne:wght@400;600;700;800&display=swap');
    * { margin:0; padding:0; box-sizing:border-box; }
    :root {
      --bg: #080b10;
      --surface: #0d1117;
      --border: rgba(0,255,163,0.12);
      --accent: #00ffa3;
      --accent2: #00c3ff;
      --muted: #4a5568;
      --text: #e2e8f0;
      --subtext: #94a3b8;
      --mono: 'Space Mono', monospace;
      --sans: 'Syne', sans-serif;
    }
    html { scroll-behavior: smooth; }
    body { background: var(--bg); color: var(--text); font-family: var(--sans); overflow-x: hidden; }
    ::selection { background: var(--accent); color: #000; }
    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: var(--bg); }
    ::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 2px; }
    .container { max-width: 1100px; margin: 0 auto; padding: 0 24px; }
    section { padding: 100px 0; }
    nav {
      position: fixed; top: 0; width: 100%; z-index: 100;
      padding: 16px 0;
      background: rgba(8,11,16,0.85);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--border);
    }
    .nav-inner { display: flex; justify-content: space-between; align-items: center; }
    .nav-logo { font-family: var(--mono); font-size: 18px; color: var(--accent); letter-spacing: 2px; }
    .nav-links { display: flex; gap: 32px; }
    .nav-links a {
      font-family: var(--mono); font-size: 13px; color: var(--subtext);
      text-decoration: none; letter-spacing: 1px; transition: color 0.2s; position: relative;
    }
    .nav-links a::after {
      content: ''; position: absolute; bottom: -4px; left: 0;
      width: 0; height: 1px; background: var(--accent); transition: width 0.3s;
    }
    .nav-links a:hover { color: var(--accent); }
    .nav-links a:hover::after { width: 100%; }
    .hero { min-height: 100vh; display: flex; align-items: center; position: relative; overflow: hidden; }
    .hero-grid {
      position: absolute; inset: 0; opacity: 0.04;
      background-image: linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px);
      background-size: 60px 60px;
    }
    .hero-glow {
      position: absolute; top: 20%; right: -10%;
      width: 600px; height: 600px; border-radius: 50%;
      background: radial-gradient(circle, rgba(0,255,163,0.06) 0%, transparent 70%);
      pointer-events: none;
    }
    .hero-glow2 {
      position: absolute; bottom: 10%; left: -5%;
      width: 400px; height: 400px; border-radius: 50%;
      background: radial-gradient(circle, rgba(0,195,255,0.05) 0%, transparent 70%);
    }
    .hero-content { position: relative; z-index: 1; }
    .hero-tag {
      display: inline-flex; align-items: center; gap: 8px;
      font-family: var(--mono); font-size: 12px; color: var(--accent);
      letter-spacing: 3px; margin-bottom: 24px;
    }
    .hero-tag span { display: inline-block; width: 40px; height: 1px; background: var(--accent); }
    .hero-name { font-size: clamp(52px, 8vw, 96px); font-weight: 800; line-height: 1; letter-spacing: -2px; margin-bottom: 12px; }
    .hero-name em { font-style: normal; color: var(--accent); }
    .hero-role { font-family: var(--mono); font-size: clamp(14px, 2vw, 18px); color: var(--subtext); margin-bottom: 28px; letter-spacing: 1px; }
    .hero-desc { font-size: 17px; color: var(--subtext); max-width: 520px; line-height: 1.8; margin-bottom: 48px; }
    .hero-cta { display: flex; gap: 16px; flex-wrap: wrap; }
    .btn {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 14px 28px; border-radius: 4px;
      font-family: var(--mono); font-size: 13px; letter-spacing: 1px;
      text-decoration: none; cursor: pointer; transition: all 0.25s; border: none; outline: none;
    }
    .btn-primary { background: var(--accent); color: #000; font-weight: 700; }
    .btn-primary:hover { background: #00e694; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,255,163,0.25); }
    .btn-outline { background: transparent; color: var(--text); border: 1px solid var(--border); }
    .btn-outline:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-2px); }
    .hero-scroll {
      position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%);
      display: flex; flex-direction: column; align-items: center; gap: 8px;
      font-family: var(--mono); font-size: 10px; color: var(--muted); letter-spacing: 3px;
    }
    .scroll-line { width: 1px; height: 48px; background: linear-gradient(var(--accent), transparent); animation: scrollPulse 2s ease-in-out infinite; }
    @keyframes scrollPulse { 0%,100%{opacity:0.3} 50%{opacity:1} }
    .section-label {
      font-family: var(--mono); font-size: 11px; color: var(--accent);
      letter-spacing: 4px; margin-bottom: 12px; display: flex; align-items: center; gap: 12px;
    }
    .section-label::after { content: ''; flex: 1; max-width: 60px; height: 1px; background: var(--accent); opacity: 0.4; }
    .section-title { font-size: clamp(32px, 5vw, 48px); font-weight: 800; letter-spacing: -1px; margin-bottom: 16px; }
    .section-sub { font-size: 16px; color: var(--subtext); line-height: 1.7; max-width: 560px; }
    .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; margin-top: 64px; }
    .about-avatar-wrap { position: relative; display: flex; justify-content: center; }
    .about-avatar { width: 300px; height: 300px; border-radius: 12px; border: 2px solid var(--border); overflow: hidden; position: relative; }
    .about-avatar img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.4s; }
    .about-avatar:hover img { transform: scale(1.05); }
    .about-avatar::after { content: ''; position: absolute; inset: 0; background: linear-gradient(to bottom, transparent 60%, rgba(0,255,163,0.08)); pointer-events: none; }
    .avatar-fallback {
      display: none; position: absolute; inset: 0;
      align-items: center; justify-content: center;
      font-size: 96px; background: var(--surface);
    }
    .avatar-corner { position: absolute; width: 20px; height: 20px; border-color: var(--accent); border-style: solid; border-width: 0; z-index: 2; }
    .avatar-corner.tl { top: -2px; left: -2px; border-top-width: 2px; border-left-width: 2px; }
    .avatar-corner.tr { top: -2px; right: -2px; border-top-width: 2px; border-right-width: 2px; }
    .avatar-corner.bl { bottom: -2px; left: -2px; border-bottom-width: 2px; border-left-width: 2px; }
    .avatar-corner.br { bottom: -2px; right: -2px; border-bottom-width: 2px; border-right-width: 2px; }
    .about-text p { color: var(--subtext); line-height: 1.8; margin-bottom: 20px; font-size: 16px; }
    .about-text strong { color: var(--accent); }
    .about-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 24px; }
    .tag { font-family: var(--mono); font-size: 11px; letter-spacing: 1px; padding: 6px 12px; border-radius: 3px; border: 1px solid var(--border); color: var(--subtext); }
    #skills { background: var(--surface); }
    .skills-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; margin-top: 64px; }
    .skill-card { padding: 28px; border-radius: 8px; background: var(--bg); border: 1px solid var(--border); transition: all 0.3s; }
    .skill-card:hover { border-color: var(--accent); transform: translateY(-4px); }
    .skill-card-icon { font-size: 28px; margin-bottom: 16px; }
    .skill-card-title { font-size: 14px; font-weight: 700; letter-spacing: 2px; margin-bottom: 20px; color: var(--accent); }
    .skill-list { list-style: none; }
    .skill-list li { font-family: var(--mono); font-size: 13px; color: var(--subtext); padding: 6px 0; border-bottom: 1px solid var(--border); display: flex; align-items: center; gap: 8px; }
    .skill-list li::before { content: '▸'; color: var(--accent); font-size: 10px; }
    .skill-list li:last-child { border-bottom: none; }
    .projects-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 24px; margin-top: 64px; }
    .project-card { border-radius: 8px; border: 1px solid var(--border); background: var(--surface); overflow: hidden; transition: all 0.35s; }
    .project-card:hover { border-color: var(--accent); transform: translateY(-6px); box-shadow: 0 16px 48px rgba(0,255,163,0.08); }
    .project-card.featured { grid-column: span 2; }
    .project-thumb { height: 200px; display: flex; align-items: center; justify-content: center; font-size: 64px; position: relative; overflow: hidden; }
    .project-card.featured .project-thumb { height: 260px; }
    .project-thumb-bg { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(0,255,163,0.04), rgba(0,195,255,0.04)); }
    .project-thumb-grid {
      position: absolute; inset: 0; opacity: 0.06;
      background-image: linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px);
      background-size: 30px 30px;
    }
    .project-emoji { position: relative; z-index: 1; }
    .project-body { padding: 24px; }
    .project-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 12px; }
    .project-tag { font-family: var(--mono); font-size: 10px; letter-spacing: 1px; padding: 3px 8px; border-radius: 3px; background: rgba(0,255,163,0.08); color: var(--accent); border: 1px solid rgba(0,255,163,0.2); }
    .project-title { font-size: 20px; font-weight: 700; margin-bottom: 8px; }
    .project-desc { font-size: 14px; color: var(--subtext); line-height: 1.7; margin-bottom: 20px; }
    .project-links { display: flex; gap: 12px; }
    .project-link { font-family: var(--mono); font-size: 12px; letter-spacing: 1px; color: var(--subtext); text-decoration: none; display: flex; align-items: center; gap: 6px; transition: color 0.2s; padding: 8px 14px; border: 1px solid var(--border); border-radius: 4px; }
    .project-link:hover { color: var(--accent); border-color: var(--accent); }
    #learning { background: var(--surface); }
    .learning-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 24px; margin-top: 64px; }
    .learning-card { padding: 28px; border-radius: 8px; border: 1px solid var(--border); background: var(--bg); transition: border-color 0.3s; }
    .learning-card:hover { border-color: var(--accent2); }
    .learning-card-title { font-size: 18px; font-weight: 700; margin-bottom: 8px; }
    .learning-card-desc { font-size: 14px; color: var(--subtext); line-height: 1.6; margin-bottom: 20px; }
    .prog-label { font-family: var(--mono); font-size: 12px; color: var(--subtext); margin-bottom: 6px; display: flex; justify-content: space-between; }
    .prog-bar { height: 3px; background: var(--border); border-radius: 2px; overflow: hidden; margin-bottom: 12px; }
    .prog-fill { height: 100%; border-radius: 2px; background: linear-gradient(90deg, var(--accent), var(--accent2)); }
    .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; margin-top: 64px; align-items: start; }
    .contact-item { display: flex; align-items: center; gap: 16px; padding: 20px 0; border-bottom: 1px solid var(--border); }
    .contact-item-icon { width: 44px; height: 44px; border-radius: 6px; background: rgba(0,255,163,0.08); border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; font-size: 18px; flex-shrink: 0; }
    .contact-item-label { font-family: var(--mono); font-size: 10px; color: var(--muted); letter-spacing: 2px; margin-bottom: 4px; }
    .contact-item-value { font-size: 15px; color: var(--text); }
    .contact-item-value a { color: var(--text); text-decoration: none; transition: color 0.2s; }
    .contact-item-value a:hover { color: var(--accent); }
    .contact-form { display: flex; flex-direction: column; gap: 16px; }
    .form-group { display: flex; flex-direction: column; gap: 8px; }
    .form-label { font-family: var(--mono); font-size: 11px; color: var(--subtext); letter-spacing: 2px; }
    .form-input, .form-textarea { background: var(--surface); border: 1px solid var(--border); border-radius: 4px; padding: 12px 16px; color: var(--text); font-family: var(--mono); font-size: 14px; outline: none; transition: border-color 0.2s; resize: none; width: 100%; }
    .form-input:focus, .form-textarea:focus { border-color: var(--accent); }
    .form-textarea { min-height: 120px; }
    footer { padding: 40px 0; border-top: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; }
    .footer-copy { font-family: var(--mono); font-size: 12px; color: var(--muted); }
    .footer-copy span { color: var(--accent); }
    .footer-links { display: flex; gap: 20px; }
    .footer-links a { font-family: var(--mono); font-size: 12px; color: var(--muted); text-decoration: none; transition: color 0.2s; }
    .footer-links a:hover { color: var(--accent); }
    .cursor-glow { position: fixed; width: 300px; height: 300px; border-radius: 50%; background: radial-gradient(circle, rgba(0,255,163,0.04) 0%, transparent 70%); pointer-events: none; z-index: 0; transform: translate(-50%, -50%); transition: left 0.08s, top 0.08s; }
    .fade-in { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
    .fade-in.visible { opacity: 1; transform: translateY(0); }
    .blink { animation: blink 1s step-end infinite; }
    @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
    @media(max-width: 768px) {
      .about-grid, .contact-grid, .learning-grid { grid-template-columns: 1fr; }
      .skills-grid { grid-template-columns: 1fr; }
      .projects-grid { grid-template-columns: 1fr; }
      .project-card.featured { grid-column: span 1; }
      .nav-links { display: none; }
      footer { flex-direction: column; gap: 16px; text-align: center; }
      .about-avatar { width: 240px; height: 240px; }
    }
  `}</style>
);

// ════════════════════════════════════════════════
// ✏️ এখানে তোমার নিজের INFO দাও
// ════════════════════════════════════════════════
const ME = {
    name: "kanich fatema mou",
    photo: "/mou.jpg",              
    email: "tanhaislammou097@gmail.com",
    linkedin: "https://www.linkedin.com/in/kanich-fatimah-mou/",
    github: "https://github.com/mouislambd",
    location: "Bangladesh 🇧🇩",
    roles: [
        "MERN Stack Web Developer",
        "Future Data Scientist",
        " aspiring AI Engineer (in progress)",
    ],
};

const SKILLS = [
    { icon: "", title: "WEB DEVELOPMENT", items: ["HTML5 & Semantic CSS", "Tailwind CSS", "JavaScript (ES6+)", "React.js", "Next.js"] },
    { icon: "", title: "PROGRAMMING", items: ["Python (Learning)", "DOM Manipulation","node.js", "express.js", "MongoDB", "Firebase", "REST API Integration", "Git & GitHub", "vercel",] },
    { icon: "", title: "FUTURE STACK", items: ["Data Science (Upcoming)", "Machine Learning", "NumPy & Pandas", "Data Visualization", " aspiring AI Engineering"] },
];

const PROJECTS = [
    {
        image: "/pic.png", featured: true,
        tags: ["Next.js", "Tailwind CSS", "React"],
        title: "keep-keeper",
        desc: "Fully functional productivity web application/note-taking app. a clean  and intuitive interface and responsive application designed to help developeers track their project, timelines,and progress efficintly .build using next.js, react, and tailwind css, it features a minimalist dark-themes",
        live: "https://keenkeeper-beryl.vercel.app/",
        github: "https://github.com/mouislambd/assignment-7.git",
    },
    {
        image: "/p2.png", featured: true,
        tags: ["JavaScript", "OpenWeather API, thailwindcss"],
        title: "github-issues-trackers",
        desc: "Real-time weather app fetching live data from OpenWeather API with 5-day forecast.",
        live: "github-issues-trackers-2005.netlify.app",
        github: "https://github.com/mouislambd/b13-a5-github-tracker.git",
    },
    {
        image: "/p3.png", featured: true,
        tags: ["React", "LocalStorage"],
        title: "Digital Tools Professional React App",
        desc: "Interactive productivity app with tasks, local persistence, and priority tagging.",
        live: "https://kanich-fatema-mou67.netlify.app/",
        github: "https://github.com/mouislambd/digital-tools-project.git",
    },

    {
        image: "/p4.png", featured: true,
        tags: ["javasript", "Tailwind CSS",],
        title: "job-trackers",
        desc: "Fully functional productivity web application.",
        live: "https://mouislambd.github.io/job-tracker/",
        github: "https://github.com/mouislambd/job-tracker.git",
    },
    {
        image: "/p5.png", featured: true,
        tags: ["javasript", "next.js", "react.js", "firebase authentication", "json server", "vercel", "Tailwind CSS",],
        title: "tiles-gallry",
        desc: "a responsive tiles gallery web applicatin build with next.js where users can browse tiles,search products,and view information. the project includes authentication protected routes dynamic routing and responsive desing for mobile teblet and dekhtop devices",
        live: "https://tiles-v2.vercel.app",
        github: "https://github.com/mouislambd/tiles-gallery.git",
    },

];

const LEARNING = [
    { title: "React & Next.js", desc: "App Router, Server Components, API Routes.", skills: [{ label: "Next.js App Router", pct: 70 }, { label: "React Hooks & State", pct: 75 }] },
    { title: "Python Fundamentals", desc: "Building Python skills as a bridge to Data Science.", skills: [{ label: "Python Basics", pct: 50 }, { label: "OOP Concepts", pct: 40 }] },
    { title: "DSA", desc: "Strengthening CS foundations for problem solving.", skills: [{ label: "Arrays & Strings", pct: 60 }, { label: "Recursion & Trees", pct: 35 }] },
    { title: "Machine Learning (Soon)", desc: "Planned: scikit-learn, NumPy, pandas.", skills: [{ label: "Math & Stats", pct: 30 }, { label: "ML Algorithms", pct: 10 }] },
];
// ════════════════════════════════════════════════

function useTypewriter(texts: string[], speed = 80, pause = 1800) {
    const [display, setDisplay] = useState("");
    const [idx, setIdx] = useState(0);
    const [charIdx, setCharIdx] = useState(0);
    const [deleting, setDeleting] = useState(false);
    useEffect(() => {
        const current = texts[idx];
        const timeout = setTimeout(() => {
            if (!deleting) {
                setDisplay(current.slice(0, charIdx + 1));
                if (charIdx + 1 === current.length) setTimeout(() => setDeleting(true), pause);
                else setCharIdx((c) => c + 1);
            } else {
                setDisplay(current.slice(0, charIdx - 1));
                if (charIdx - 1 === 0) { setDeleting(false); setIdx((i) => (i + 1) % texts.length); setCharIdx(0); }
                else setCharIdx((c) => c - 1);
            }
        }, deleting ? speed / 2 : speed);
        return () => clearTimeout(timeout);
    }, [display, deleting, charIdx, idx, texts, speed, pause]);
    return display;
}

function useFadeIn() {
    useEffect(() => {
        const els = document.querySelectorAll(".fade-in");
        const obs = new IntersectionObserver(
            (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
            { threshold: 0.12 }
        );
        els.forEach((el) => obs.observe(el));
        return () => obs.disconnect();
    }, []);
}

function handleImgError(e: SyntheticEvent<HTMLImageElement>) {
    const img = e.currentTarget;
    img.style.display = "none";
    const fallback = img.nextElementSibling as HTMLElement | null;
    if (fallback) fallback.style.display = "flex";
}

export default function Portfolio() {
    const [cursor, setCursor] = useState({ x: -999, y: -999 });
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [sent, setSent] = useState(false);
    const typed = useTypewriter(ME.roles);
    useFadeIn();

    useEffect(() => {
        const move = (e: MouseEvent) => setCursor({ x: e.clientX, y: e.clientY });
        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, []);

    const handleSubmit = () => {
        if (form.name && form.email && form.message) {
            setSent(true);
            setTimeout(() => setSent(false), 3000);
            setForm({ name: "", email: "", message: "" });
        }
    };

    return (
        <>
            <FontLink />
            <div className="cursor-glow" style={{ left: cursor.x, top: cursor.y }} />

            {/* NAV */}
            <nav>
                <div className="container">
                    <div className="nav-inner">
                        <span className="nav-logo">{ME.name.toUpperCase()}_DEV</span>
                        <div className="nav-links">
                            {["About", "Skills", "Projects", "Learning", "Contact"].map((l) => (
                                <a key={l} href={`#${l.toLowerCase()}`}>{l}</a>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {/* HERO */}
            <section className="hero" id="home">
                <div className="hero-grid" />
                <div className="hero-glow" />
                <div className="hero-glow2" />
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-tag"><span />AVAILABLE FOR WORK<span /></div>
                        <h1 className="hero-name">Hi, I&apos;m <em>{ME.name}</em></h1>
                        <p className="hero-role">
                            <span style={{ color: "var(--accent2)" }}>{">"}</span>{" "}
                            {typed}<span className="blink">|</span>
                        </p>
                        <p className="hero-desc">
                            CST student building production-ready web apps today
                            and laying the groundwork for Data Science &amp; AI tomorrow.
                        </p>
                        <div className="hero-cta">
                            <a className="btn btn-primary" href="#projects">View Projects →</a>
                            <a className="btn btn-outline" href="#contact">Hire Me</a>
                        </div>
                    </div>
                </div>
                <div className="hero-scroll">SCROLL<div className="scroll-line" /></div>
            </section>

            {/* ABOUT */}
            <section id="about">
                <div className="container">
                    <div className="section-label">  ABOUT</div>
                    <h2 className="section-title">Who I Am</h2>
                    <div className="about-grid">
                        <div className="about-avatar-wrap fade-in">
                            <div className="about-avatar">
                                <img src={ME.photo} alt={ME.name} onError={handleImgError} />
                                <div className="avatar-fallback">🧑‍💻</div>
                                <div className="avatar-corner tl" />
                                <div className="avatar-corner tr" />
                                <div className="avatar-corner bl" />
                                <div className="avatar-corner br" />
                            </div>
                        </div>
                        <div className="about-text fade-in">
                            <p><strong>CST (Computer Science &amp; Technology)</strong> student passionate about building things for the web. Currently focused on mastering modern front-end with <strong>React &amp; Next.js</strong>.</p>
                            <p>Short-term goal: land a <strong>web developer role</strong>. Long-term: become a <strong>Data Scientist + AI Engineer</strong>.</p>
                            <p>I believe in shipping code, learning in public, and letting projects speak louder than words.</p>
                            <div className="about-tags">
                                {["CST Student", "Next.js", "React", "Tailwind CSS", "Python (learning)", "Open to Work"].map((t) => (
                                    <span key={t} className="tag">{t}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SKILLS */}
            <section id="skills">
                <div className="container">
                    <div className="section-label"> SKILLS</div>
                    <h2 className="section-title">What I Work With</h2>
                    <p className="section-sub">Honest skills only what I actually use. No fakes.</p>
                    <div className="skills-grid">
                        {SKILLS.map((s, i) => (
                            <div key={i} className="skill-card fade-in">
                                <div className="skill-card-icon">{s.icon}</div>
                                <div className="skill-card-title">{s.title}</div>
                                <ul className="skill-list">
                                    {s.items.map((item, j) => <li key={j}>{item}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROJECTS */}
            <section id="projects" style={{ background: "var(--surface)" }}>
                <div className="container">
                    <div className="section-label"> PROJECTS</div>
                    <h2 className="section-title">Things I&apos;ve Built</h2>
                    <p className="section-sub">Real projects. Live links. Open source code.</p>
                    <div className="projects-grid">
                        {PROJECTS.map((p, i) => (
                            <div key={i} className={`project-card fade-in${p.featured ? " featured" : ""}`}>
                                <div className="project-thumb">
                                    <div className="project-thumb-bg" />
                                    <div className="project-thumb-grid" />
                                    <img src={p.image} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover", position: "relative", zIndex: 1 }} />
                                </div>
                                <div className="project-body">
                                    <div className="project-tags">
                                        {p.tags.map((t, j) => <span key={j} className="project-tag">{t}</span>)}
                                    </div>
                                    <div className="project-title">{p.title}</div>
                                    <p className="project-desc">{p.desc}</p>
                                    <div className="project-links">
                                        <a href={p.live} target="_blank" rel="noreferrer" className="project-link">↗ Live Demo</a>
                                        <a href={p.github} target="_blank" rel="noreferrer" className="project-link">⌥ GitHub</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* LEARNING */}
            <section id="learning">
                <div className="container">
                    <div className="section-label"> CURRENTLY LEARNING</div>
                    <h2 className="section-title">Growth Mode: ON</h2>
                    <p className="section-sub">Building skills deliberately — web first, then data &amp; AI.</p>
                    <div className="learning-grid">
                        {LEARNING.map((item, i) => (
                            <div key={i} className="learning-card fade-in">
                                <div className="learning-card-title">{item.title}</div>
                                <div className="learning-card-desc">{item.desc}</div>
                                {item.skills.map((s, j) => (
                                    <div key={j}>
                                        <div className="prog-label"><span>{s.label}</span><span>{s.pct}%</span></div>
                                        <div className="prog-bar"><div className="prog-fill" style={{ width: `${s.pct}%` }} /></div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CONTACT */}
            <section id="contact" style={{ background: "var(--surface)" }}>
                <div className="container">
                    <div className="section-label"> CONTACT</div>
                    <h2 className="section-title">Let&apos;s Work Together</h2>
                    <p className="section-sub">Open to freelance, internship, and full-time opportunities.</p>
                    <div className="contact-grid">
                        <div className="fade-in">
                            {[
                                { icon: "📧", label: "EMAIL", val: <a href={`mailto:${ME.email}`}>{ME.email}</a> },
                                { icon: "💼", label: "LINKEDIN", val: <a href={ME.linkedin} target="_blank" rel="noreferrer">{ME.linkedin.replace("https://", "")}</a> },
                                { icon: "🐙", label: "GITHUB", val: <a href={ME.github} target="_blank" rel="noreferrer">{ME.github.replace("https://", "")}</a> },
                                { icon: "📍", label: "LOCATION", val: <span>{ME.location}</span> },
                            ].map((c, i) => (
                                <div key={i} className="contact-item">
                                    <div className="contact-item-icon">{c.icon}</div>
                                    <div>
                                        <div className="contact-item-label">{c.label}</div>
                                        <div className="contact-item-value">{c.val}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="contact-form fade-in">
                            {(["name", "email", "message"] as const).map((key) => (
                                <div key={key} className="form-group">
                                    <label className="form-label">{key.toUpperCase()}</label>
                                    {key === "message" ? (
                                        <textarea className="form-textarea" placeholder="Tell me about the opportunity..."
                                            value={form[key]} onChange={(e) => setForm({ ...form, [key]: e.target.value })} />
                                    ) : (
                                        <input className="form-input" placeholder={key === "name" ? "Your name" : "your@email.com"}
                                            value={form[key]} onChange={(e) => setForm({ ...form, [key]: e.target.value })} />
                                    )}
                                </div>
                            ))}
                            <button className="btn btn-primary" onClick={handleSubmit} style={{ width: "100%", justifyContent: "center" }}>
                                {sent ? "✓ Sent!" : "Send Message →"}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <div className="container">
                <footer>
                    <p className="footer-copy">© 2025 <span>{ME.name}</span> · Built with Next.js &amp; </p>
                    <div className="footer-links">
                        <a href={ME.github} target="_blank" rel="noreferrer">GitHub</a>
                        <a href={ME.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                        <a href={`mailto:${ME.email}`}>Email</a>
                    </div>
                </footer>
            </div>
        </>
    );
}