import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Github, Linkedin, Mail, Menu, X, ChevronRight, Briefcase, User, Award, BookOpen, ExternalLink, Code2, Monitor, Check, Star, Sparkles, Leaf, Command, Activity, ArrowUpRight } from 'lucide-react';

// --- DATA CONFIGURATION ---
const DATA = {
  name: "Niharika Srivastava",
  role: "Content Marketer & Author",
  tagline: "Driving brand growth through data-driven content, AI applications, and compelling storytelling.",
  about: "I am a Content Marketer and published Author with a background in English Literature and German. I specialize in building engaged communities, crafting targeted content strategies, and leveraging AI tools to optimize brand reach. From scaling social media presence to publishing my novel 'To be Continued...', I blend creativity with technical proficiency to deliver measurable results.",
  email: "niharikasrivastava1998@gmail.com",
  github: "https://github.com/niharikasrivastava1998-nihu",
  linkedin: "https://www.linkedin.com/in/niharika-srivastava-47240a185/",
  expertise: [
    "Content Marketing", "Copywriting", "Social Media", "Brand Marketing", "Prompt Engineering"
  ],
  tools: [
    "Canva", "Semrush", "ChatGPT", "Gemini", "Grok", "GitHub", "Figma", "Google Analytics", "Google Search Console"
  ],
  projects: [
    {
      title: "Veggiesmart",
      description: "A smart web application for managing and purchasing fresh vegetables, featuring an intuitive user interface and streamlined experience.",
      link: "https://niharikasrivastava1998-nihu.github.io/Veggiesmart/",
      tags: ["Web App", "UI/UX", "Frontend"],
      icon: Leaf
    },
    {
      title: "Day.OS",
      description: "A comprehensive daily management dashboard designed to organize tasks, track productivity, and optimize daily workflows.",
      link: "https://niharikasrivastava1998-nihu.github.io/Day.OS/",
      tags: ["Dashboard", "Productivity", "Web App"],
      icon: Command
    },
    {
      title: "Socialmeter",
      description: "An analytics tool for tracking social media metrics, engagement rates, and audience growth across multiple platforms.",
      link: "https://niharikasrivastava1998-nihu.github.io/socialmeter/",
      tags: ["Analytics", "Social Media", "Dashboard"],
      icon: Activity
    }
  ],
  experience: [
    {
      role: "Communications Manager",
      company: "Bajaj Finance Limited",
      period: "Aug 2023 - Present",
      description: "Managed a LinkedIn community of 1M+ and scaled Instagram followers from 2K to 30,000. Leveraged advanced AI tools to maintain a 40% engagement rate while consistently exceeding recruitment targets through data-driven campaigns."
    },
    {
      role: "Technical Content Manager",
      company: "E2E Networks",
      period: "Apr 2022 - July 2023",
      description: "Developed targeted content strategies delivering measurable audience growth. Executed data-driven plans to optimize engagement and reach for the cloud platform, ensuring technical messaging aligned with core business objectives."
    },
    {
      role: "Marketing Executive, Tech",
      company: "Scaler Academy",
      period: "Nov 2021 - March 2022",
      description: "Managed CRM-driven lead generation to counsel 500+ IT professionals, successfully exceeding revenue targets by optimizing client satisfaction and brand marketing strategies."
    }
  ],
  education: [
    {
      degree: "PG Diploma in German",
      institution: "Delhi University",
      period: "2018 - 2020"
    },
    {
      degree: "Bachelors of English Literature",
      institution: "Delhi University",
      period: "2015 - 2018"
    }
  ],
  achievements: [
    {
      title: "Published Author",
      description: "Author of the novel 'To be Continued...' published by Blue Rose Publishers.",
      icon: BookOpen
    },
    {
      title: "100 Inspiring Authors of India 2018",
      description: "Awarded by The Indian Awaz for valuable contribution to the writing community.",
      icon: Award
    },
    {
      title: "Literary Captain",
      description: "Designated in the 'Army of Literary Warriors' at StoryMirror for promoting literature.",
      icon: Star
    },
    {
      title: "AI Web Applications",
      description: "Developed and deployed multiple AI-driven applications using Google AI Studio and open-source frameworks.",
      icon: Sparkles
    }
  ]
};

// --- COMPONENTS ---

const ContactButton = ({ className = "" }: { className?: string }) => {
  const [copied, setCopied] = useState(false);
  
  const handleContact = (e: React.MouseEvent) => {
    e.preventDefault();
    // Copy to clipboard safely
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(DATA.email);
      }
    } catch (err) {
      console.error("Clipboard copy failed:", err);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    // Attempt to open mail client
    window.location.href = `mailto:${DATA.email}`;
  };

  return (
    <a 
      href={`mailto:${DATA.email}`}
      onClick={handleContact}
      className={`flex items-center justify-center gap-2 transition-all ${className}`}
    >
      {copied ? <Check size={18} /> : <Mail size={18} />}
      {copied ? "Email Copied!" : "Contact Me"}
    </a>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
        <a href="#" className="text-xl font-serif font-bold tracking-tight text-slate-900 hover:text-indigo-600 transition-colors">
          Niharika<span className="text-indigo-600">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors">
              {link.name}
            </a>
          ))}
          <ContactButton className="px-6 py-2.5 rounded-full bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-700 shadow-md hover:shadow-lg hover:shadow-indigo-200 hover:-translate-y-0.5" />
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 -mr-2 text-slate-600 hover:text-indigo-600 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-16 left-0 w-full bg-white border-b border-slate-200 shadow-xl md:hidden overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-base font-bold text-slate-700 hover:text-indigo-600 hover:bg-slate-50 py-3 px-4 rounded-xl transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <ContactButton className="mt-2 px-4 py-4 rounded-xl bg-indigo-600 text-white font-bold shadow-md" />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -100]);
  const y4 = useTransform(scrollY, [0, 1000], [0, 150]);
  
  return (
    <section className="pt-32 pb-16 md:pt-48 md:pb-32 min-h-[90vh] flex flex-col justify-center relative overflow-hidden">
      {/* Professional Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-20"></div>
      
      {/* Parallax Background Elements */}
      <motion.div style={{ y: y1 }} className="absolute top-20 left-10 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 -z-10"></motion.div>
      <motion.div style={{ y: y2 }} className="absolute top-40 right-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 -z-10"></motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto relative z-20 px-4 sm:px-6 lg:px-8">
        {/* Left Aligned Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-left"
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-indigo-600 font-bold text-sm md:text-base mb-4 tracking-widest uppercase flex items-center gap-2"
          >
            <Sparkles size={16} /> Welcome to my portfolio
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-extrabold tracking-tight text-slate-900 mb-4 md:mb-6 leading-[1.1]"
          >
            Crafting digital <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400">experiences.</span>
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-600 mb-6 md:mb-8"
          >
            I'm Niharika, a {DATA.role}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-slate-600 text-base sm:text-lg max-w-xl mb-10 leading-relaxed"
          >
            {DATA.tagline}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-indigo-600 text-white font-bold hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-200 transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5"
            >
              View My Work <ChevronRight size={18} />
            </a>
            <div className="flex items-center gap-4 mt-2 sm:mt-0">
              <a href={DATA.github} target="_blank" rel="noopener noreferrer" className="p-4 bg-white text-slate-600 rounded-full hover:text-indigo-600 hover:border-indigo-200 border border-slate-200 transition-all shadow-sm hover:shadow-md group">
                <Github size={22} className="group-hover:scale-110 transition-transform" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href={DATA.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 bg-white text-slate-600 rounded-full hover:text-indigo-600 hover:border-indigo-200 border border-slate-200 transition-all shadow-sm hover:shadow-md group">
                <Linkedin size={22} className="group-hover:scale-110 transition-transform" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right side abstract/parallax elements */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:block relative h-[500px] xl:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200/50 group"
        >
          <motion.img 
            style={{ y: y3, scale: 1.1 }}
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" 
            alt="Modern coding workspace" 
            className="w-full h-full object-cover absolute inset-0"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/40 to-transparent mix-blend-multiply group-hover:opacity-50 transition-opacity duration-500"></div>
          
          {/* Floating Glassmorphism Badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 left-10 bg-white/10 backdrop-blur-md p-5 rounded-2xl shadow-2xl border border-white/20 flex items-center gap-4 z-10"
          >
            <div className="bg-white/20 p-3 rounded-xl text-white"><Code2 size={24} /></div>
            <div className="text-left text-white">
              <p className="text-xs font-medium uppercase tracking-wider opacity-80">Specialization</p>
              <p className="text-sm font-bold">Frontend & UI/UX</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const SectionHeading = ({ title, icon: Icon }: { title: string, icon: any }) => (
  <div className="flex items-center gap-3 mb-10 md:mb-12">
    <div className="p-3 rounded-2xl bg-gradient-to-br from-indigo-50 to-slate-100 text-indigo-600 shadow-sm border border-slate-100">
      <Icon size={28} strokeWidth={1.5} />
    </div>
    <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900">{title}</h2>
    <div className="h-[2px] flex-1 bg-slate-100 ml-6"></div>
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading title="About Me" icon={User} />
        <div className="max-w-4xl text-slate-600 text-base md:text-lg leading-relaxed space-y-6">
          <p className="text-xl text-slate-700 font-medium leading-relaxed">{DATA.about}</p>
          
          <div className="pt-8 mt-8 border-t border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 font-serif">Education</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {DATA.education.map((edu, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <span className="inline-block text-sm font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full mb-3">{edu.period}</span>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">{edu.degree}</h4>
                  <p className="text-slate-500 font-medium">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-24 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading title="Experience" icon={Briefcase} />
        <div className="border-l-2 border-indigo-100 pl-6 md:pl-10 space-y-12 ml-3 md:ml-4">
          {DATA.experience.map((job, index) => (
            <motion.div 
              key={index} 
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="absolute -left-[35px] md:-left-[51px] bg-gradient-to-br from-white to-slate-50 text-indigo-600 rounded-full p-2 border-4 border-slate-100 shadow-sm">
                <Briefcase size={18} strokeWidth={1.5} />
              </div>
              <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 font-serif">{job.role}</h3>
                    <div className="text-indigo-600 font-bold mt-1">{job.company}</div>
                  </div>
                  <span className="text-sm font-bold text-slate-600 bg-slate-100 px-4 py-1.5 rounded-full self-start sm:self-auto whitespace-nowrap">
                    {job.period}
                  </span>
                </div>
                <p className="text-slate-600 leading-relaxed text-base">
                  {job.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: any, index: number, key?: string }) => {
  const Icon = project.icon;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="group flex flex-col h-full bg-white rounded-3xl border border-slate-200 hover:border-indigo-300 hover:shadow-2xl hover:shadow-indigo-100/50 transition-all duration-300 overflow-hidden relative"
    >
      <div className="relative h-48 md:h-56 bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center border-b border-slate-100 group-hover:from-indigo-50 group-hover:to-indigo-100 transition-colors duration-300 overflow-hidden">
        {/* Abstract Background Elements for Premium Feel */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(244,63,94,0.05),transparent_50%)]"></div>
        
        <div className="relative z-10 w-20 h-20 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-2xl"></div>
          <Icon size={36} className="text-indigo-600" strokeWidth={1.5} />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6 z-20">
          <span className="text-white font-bold tracking-wide flex items-center gap-2">
            View Live Project
          </span>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-indigo-600 text-white p-3 rounded-full hover:bg-white hover:text-indigo-600 transition-colors shadow-lg transform translate-y-4 group-hover:translate-y-0 duration-300">
            <ArrowUpRight size={20} />
          </a>
        </div>
      </div>
      
      <div className="p-6 md:p-8 flex flex-col flex-grow relative z-10 bg-white">
        <h3 className="text-2xl font-bold text-slate-900 mb-3 font-serif group-hover:text-indigo-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>
        
        <ul className="flex flex-wrap gap-2 mt-auto font-sans text-xs font-bold text-indigo-600">
          {project.tags.map((tag: string) => (
            <li key={tag} className="bg-indigo-50 px-3 py-1.5 rounded-lg">{tag}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading title="Featured Projects" icon={Monitor} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {DATA.projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading title="Expertise & Tools" icon={Code2} />
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-6 font-serif flex items-center gap-2">
              <Award className="text-indigo-600" size={24} /> Core Expertise
            </h3>
            <div className="flex flex-wrap gap-3">
              {DATA.expertise.map((skill, index) => (
                <motion.div 
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-5 py-2.5 rounded-xl bg-indigo-50 text-indigo-700 font-bold text-sm md:text-base hover:bg-indigo-600 hover:text-white transition-colors cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-6 font-serif flex items-center gap-2">
              <Monitor className="text-indigo-600" size={24} /> Tools & Platforms
            </h3>
            <div className="flex flex-wrap gap-3">
              {DATA.tools.map((tool, index) => (
                <motion.div 
                  key={tool}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-bold text-sm md:text-base hover:bg-slate-800 hover:text-white transition-colors cursor-default"
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-16 md:py-24 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading title="Awards & Highlights" icon={Award} />
        <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
          {DATA.achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col h-full bg-white rounded-3xl p-6 md:p-8 border border-slate-200 hover:border-indigo-200 hover:shadow-lg transition-all relative overflow-hidden"
              >
                <div className="text-indigo-600 mb-6 bg-gradient-to-br from-indigo-50 to-slate-100 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:from-indigo-600 group-hover:to-indigo-800 group-hover:text-white transition-all duration-300 shadow-sm border border-slate-100 group-hover:border-indigo-500 group-hover:shadow-indigo-200 group-hover:shadow-lg">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 font-serif group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed flex-grow">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 text-center border-t border-slate-200 mt-10 bg-white">
      <p className="text-slate-500 text-sm font-medium">
        Designed & Built by <span className="font-bold text-slate-700">{DATA.name}</span>
      </p>
      <div className="flex justify-center gap-5 mt-6">
        <a href={DATA.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 transition-colors p-2">
          <Github size={24} />
          <span className="sr-only">GitHub</span>
        </a>
        <a href={DATA.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 transition-colors p-2">
          <Linkedin size={24} />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a href={`mailto:${DATA.email}`} className="text-slate-400 hover:text-indigo-600 transition-colors p-2">
          <Mail size={24} />
          <span className="sr-only">Email</span>
        </a>
      </div>
    </footer>
  );
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            onAnimationComplete={() => setIsLoading(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
      </main>
      <Footer />
    </div>
  );
}
