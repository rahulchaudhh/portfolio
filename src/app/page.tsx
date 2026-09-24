'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [skillFilter, setSkillFilter] = useState('');
  const [askInput, setAskInput] = useState('');
  const [modalText, setModalText] = useState<string | null>(null);
  const [activeCta, setActiveCta] = useState<'hire' | 'portfolio'>('hire');

  const skillsData = [
    {
      category: 'AI & Machine Learning',
      items: [
        'PyTorch',
        'LangChain',
        'Large Language Models',
        'Prompt Structuring',
        'Grounding Constraints',
      ],
    },
    {
      category: 'Engineering',
      items: [
        'Python',
        'JavaScript / TypeScript',
        'REST APIs',
        'Tech Stack Analysis',
        'Git & GitHub',
      ],
    },
    {
      category: 'Tools & Systems',
      items: ['macOS Workflows', 'VS Code', 'Jupyter Notebooks', 'Postman'],
    },
    {
      category: 'Education',
      items: [
        'BSc (Hons) Computing with AI',
        'Islington College',
        'English (Fluent)',
        'Nepali (Native)',
      ],
    },
  ];

  const handleAskSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (askInput.trim()) {
      setModalText(
        `Thanks for asking: "${askInput}". The best way to reach out is via email!`
      );
      setAskInput('');
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Fixed Navigation Bar */}
      <header className="fixed top-0 inset-x-0 z-50 bg-gradient-to-b from-black/80 via-black/50 to-transparent text-white transition-all">
        <div className="max-w-[86rem] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a
            href="#"
            className="text-[13px] font-semibold tracking-[0.45em] uppercase text-white drop-shadow-md"
          >
            RAHUL CHAUDHARY
          </a>
          <nav className="hidden md:flex items-center gap-1">
            <a
              href="#work"
              className="px-4 py-2 text-[14px] font-medium rounded-[4px] text-white/90 hover:text-white hover:bg-white/10 transition-colors drop-shadow-sm"
            >
              Work
            </a>
            <a
              href="#about"
              className="px-4 py-2 text-[14px] font-medium rounded-[4px] text-white/90 hover:text-white hover:bg-white/10 transition-colors drop-shadow-sm"
            >
              About
            </a>
            <a
              href="#skills"
              className="px-4 py-2 text-[14px] font-medium rounded-[4px] text-white/90 hover:text-white hover:bg-white/10 transition-colors drop-shadow-sm"
            >
              Skills
            </a>
            <a
              href="#experience"
              className="px-4 py-2 text-[14px] font-medium rounded-[4px] text-white/90 hover:text-white hover:bg-white/10 transition-colors drop-shadow-sm"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="px-4 py-2 text-[14px] font-medium rounded-[4px] text-white/90 hover:text-white hover:bg-white/10 transition-colors drop-shadow-sm"
            >
              Contact
            </a>
          </nav>
          <div className="hidden md:block">
            <a
              href="/Rahul%20Chaudhary.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 text-[14px] font-medium text-white/90 hover:text-white hover:bg-white/10 transition-colors drop-shadow-sm"
            >
              Resume ↗
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-[100vh] overflow-hidden bg-neutral-900 text-white flex flex-col justify-start items-center text-center px-6 pt-24 pb-12">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/bg.jpg"
            alt="Hero Background"
            className="object-cover w-full h-full opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50"></div>
        </div>

        {/* Top Tagline Text — Remains fixed near top */}
        <div className="relative z-10 pt-6 md:pt-8">
          <span className="text-[18px] md:text-[20px] font-normal text-white/95 tracking-tight drop-shadow-md">
            0% Time Wasted · Available Oct 2026
          </span>
        </div>

        {/* Hero Headline & Subtitle — Pushed down independently */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-2xl space-y-3 mt-28 md:mt-36"
        >
          <h1 className="text-white text-[42px] sm:text-[54px] md:text-[64px] font-medium leading-[1.1] tracking-tight drop-shadow-md">
            Rahul Chaudhary
          </h1>
          <p className="text-white/95 text-[14px] md:text-[16px] font-normal leading-[1.43] drop-shadow">
            Bachelor in Artificial Intelligence · Building practical AI applications, LLM tools, and Python workflows.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#contact"
              onClick={() => setActiveCta('hire')}
              className={`inline-flex items-center justify-center text-[14px] font-medium rounded-[4px] w-[200px] min-h-[40px] px-4 transition-all shadow-lg ${activeCta === 'hire'
                  ? 'bg-[#3E6AE1] text-white hover:bg-[#3459c4]'
                  : 'bg-white/10 backdrop-blur-md text-white border border-white/40 hover:bg-white hover:text-[#171A20]'
                }`}
            >
              Hire Me
            </a>
            <a
              href="#work"
              onClick={() => setActiveCta('portfolio')}
              className={`inline-flex items-center justify-center text-[14px] font-medium rounded-[4px] w-[200px] min-h-[40px] px-4 transition-all shadow-lg ${activeCta === 'portfolio'
                  ? 'bg-[#3E6AE1] text-white hover:bg-[#3459c4]'
                  : 'bg-white/10 backdrop-blur-md text-white border border-white/40 hover:bg-white hover:text-[#171A20]'
                }`}
            >
              View Portfolio
            </a>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70 text-[10px] tracking-[0.32em] uppercase">
          Scroll
        </div>
      </section>

      {/* Main Content */}
      <main>
        {/* About Section */}
        <section
          id="about"
          className="relative w-full bg-white text-[#171A20] py-28 border-b border-[#EEEEEE]"
        >
          <div className="max-w-[86rem] mx-auto px-6 md:px-10">
            <span className="text-[14px] font-medium text-[#5C5E62]">
              About
            </span>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
              <div className="md:col-span-7">
                <h2 className="text-[32px] md:text-[48px] leading-[1.1] font-medium text-[#171A20]">
                  Engineered for real-world AI implementation.
                </h2>
                <p className="mt-8 text-[14px] md:text-[16px] leading-[1.7] max-w-2xl text-[#393C41]">
                  Completed BSc (Hons) in Computing with Artificial Intelligence
                  at Islington College. Experience centered on Python, LangChain,
                  PyTorch, and large language models (LLMs) to build grounded,
                  trustworthy AI applications and software tools.
                </p>

                <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#EEEEEE] border border-[#EEEEEE] rounded-[4px] overflow-hidden">
                  <div className="p-5 bg-white">
                    <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#5C5E62]">
                      Degree
                    </div>
                    <div className="mt-2 text-[20px] md:text-[22px] font-medium text-[#171A20]">
                      BSc (Hons) Computing with Artificial Intelligence
                    </div>
                  </div>
                  <div className="p-5 bg-white">
                    <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#5C5E62]">
                      Institution
                    </div>
                    <div className="mt-2 text-[20px] md:text-[22px] font-medium text-[#171A20]">
                      Islington College
                    </div>
                  </div>
                  <div className="p-5 bg-white">
                    <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#5C5E62]">
                      Primary Stack
                    </div>
                    <div className="mt-2 text-[20px] md:text-[22px] font-medium text-[#171A20]">
                      Python & LLMs
                    </div>
                  </div>
                  <div className="p-5 bg-white">
                    <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#5C5E62]">
                      Status
                    </div>
                    <div className="mt-2 text-[20px] md:text-[22px] font-medium text-[#171A20]">
                      Available
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-5">
                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[12px] bg-[#F4F4F4]">
                  <img
                    src="/images/profile.jpg"
                    alt="Rahul Chaudhary"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Work */}
        <section
          id="work"
          className="relative w-full bg-white text-[#171A20] py-28 border-b border-[#EEEEEE]"
        >
          <div className="max-w-[86rem] mx-auto px-6 md:px-10">
            <span className="text-[14px] font-medium text-[#5C5E62]">
              Selected Work
            </span>
            <h2 className="mt-3 text-[32px] md:text-[48px] leading-[1.1] font-medium text-[#171A20]">
              AI Applications & Tooling Pipelines
            </h2>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1 */}
              <a
                href="https://projectrag.duckdns.org/"
                target="_blank"
                rel="noreferrer"
                className="group relative block w-full aspect-[16/10] overflow-hidden rounded-[12px] bg-[#F4F4F4] cursor-pointer"
              >
                <img
                  src="/images/projects/p1.png"
                  alt="Conversational RAG Backend"
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute top-5 left-5 text-white text-[12px] font-medium uppercase tracking-widest text-white/80">
                  AI · FastAPI · Claude 3 · Pinecone · AWS EC2 ↗
                </div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-[22px] md:text-[26px] font-medium leading-[1.2]">
                    Conversational RAG Backend
                  </h3>
                  <p className="mt-1 text-[14px] text-white/85">
                    Production RAG backend deployed on AWS EC2 with Docker & Nginx. Integrates Pinecone vector retrieval and Redis multi-turn conversational memory.
                  </p>
                </div>
              </a>

              {/* Card 2 */}
              {/* Card 2: Review Extraction Pipeline */}
              <a
                href="https://review-extraction-pipeline.streamlit.app/"
                target="_blank"
                rel="noreferrer"
                className="group relative block w-full aspect-[16/10] overflow-hidden rounded-[12px] bg-[#F4F4F4] cursor-pointer"
              >
                <img
                  src="/images/projects/p2.png"

                  // src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=85" //
                  alt="Review Extraction Pipeline"
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute top-5 left-5 text-white text-[12px] font-medium uppercase tracking-widest text-white/80">
                  LangChain · Groq · FastAPI · Streamlit ↗
                </div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-[22px] md:text-[26px] font-medium leading-[1.2]">
                    Review Extraction Pipeline
                  </h3>
                  <p className="mt-1 text-[14px] text-white/85">
                    Automated sentiment & theme extraction from user feedback into structured JSON with real-time Streamlit dashboard visualization.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section id="skills" className="relative w-full bg-[#F4F4F4] text-[#171A20] py-28">
          <div className="max-w-[86rem] mx-auto px-6 md:px-10">
            <span className="text-[14px] font-medium text-[#5C5E62]">Capabilities</span>
            <h2 className="mt-3 text-[32px] md:text-[48px] leading-[1.1] font-medium text-[#171A20]">
              Stack, languages, and instruments.
            </h2>



            {/* 4-Column Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#EEEEEE] rounded-[4px] overflow-hidden">
              <div className="p-7 bg-white">
                <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#5C5E62]">
                  Engineering
                </div>
                <ul className="mt-5 space-y-2.5">
                  {['Python', 'JavaScript', 'FastAPI', 'React.js', 'PostgreSQL', 'Redis']
                    .filter((item) => item.toLowerCase().includes(skillFilter.toLowerCase()))
                    .map((item, idx) => (
                      <li key={idx} className="text-[15px] font-medium text-[#171A20]">{item}</li>
                    ))}
                </ul>
              </div>

              <div className="p-7 bg-white">
                <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#5C5E62]">
                  AI / Research
                </div>
                <ul className="mt-5 space-y-2.5">
                  {['Generative AI & LLMs', 'PyTorch', 'LangChain', 'Claude 3 API', 'Ollama', 'RAG Pipelines', 'Embeddings']
                    .filter((item) => item.toLowerCase().includes(skillFilter.toLowerCase()))
                    .map((item, idx) => (
                      <li key={idx} className="text-[15px] font-medium text-[#171A20]">{item}</li>
                    ))}
                </ul>
              </div>

              <div className="p-7 bg-white">
                <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#5C5E62]">
                  Cloud & Tools
                </div>
                <ul className="mt-5 space-y-2.5">
                  {['AWS (EC2)', 'Docker', 'Nginx & Certbot', 'n8n Workflow']
                    .filter((item) => item.toLowerCase().includes(skillFilter.toLowerCase()))
                    .map((item, idx) => (
                      <li key={idx} className="text-[15px] font-medium text-[#171A20]">{item}</li>
                    ))}
                </ul>
              </div>

              <div className="p-7 bg-white">
                <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#5C5E62]">
                  Languages
                </div>
                <ul className="mt-5 space-y-2.5">
                  {['English', 'Nepali', 'Hindi']
                    .filter((item) => item.toLowerCase().includes(skillFilter.toLowerCase()))
                    .map((item, idx) => (
                      <li key={idx} className="text-[15px] font-medium text-[#171A20]">{item}</li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className="relative w-full bg-white text-[#171A20] py-28 border-b border-[#EEEEEE]"
        >
          <div className="max-w-[86rem] mx-auto px-6 md:px-10">
            <span className="text-[14px] font-medium text-[#5C5E62]">
              Experience
            </span>
            <h2 className="mt-3 text-[32px] md:text-[48px] leading-[1.1] font-medium text-[#171A20]">
              A trajectory in AI engineering.
            </h2>

            <div className="mt-16">
              <ul className="divide-y divide-[#EEEEEE] border-t border-b border-[#EEEEEE]">
                <li className="grid grid-cols-12 gap-4 md:gap-8 py-7 md:py-8 hover:bg-black/[0.025] transition-colors">
                  <div className="col-span-12 md:col-span-2 text-[14px] font-medium text-[#5C5E62]">
                    2026
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <div className="text-[18px] md:text-[22px] font-medium leading-[1.2] text-[#171A20]">
                      AI Application Developer
                    </div>
                    <div className="text-[14px] mt-1 text-[#393C41]">
                      Independent Projects & Tooling
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-6 text-[14px] leading-[1.6] text-[#393C41]">
                    Building LLM orchestration tools, grounding frameworks, and evaluating production workflows using Python and PyTorch.
                  </div>
                </li>
                <li className="grid grid-cols-12 gap-4 md:gap-8 py-7 md:py-8 hover:bg-black/[0.025] transition-colors">
                  <div className="col-span-12 md:col-span-2 text-[14px] font-medium text-[#5C5E62]">
                    Undergraduate
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <div className="text-[18px] md:text-[22px] font-medium leading-[1.2] text-[#171A20]">
                      BSc (Hons) Computing with Artificial Intelligence
                    </div>
                    <div className="text-[14px] mt-1 text-[#393C41]">
                      Islington College
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-6 text-[14px] leading-[1.6] text-[#393C41]">
                    Completed specialized coursework and practical builds in artificial intelligence, software design, and database systems.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="relative w-full bg-white text-[#171A20] pt-28 pb-40"
        >
          <div className="max-w-[86rem] mx-auto px-6 md:px-10">
            <span className="text-[14px] font-medium text-[#5C5E62]">
              Contact
            </span>
            <h2 className="mt-3 text-[32px] md:text-[56px] leading-[1.05] font-medium text-[#171A20]">
              Let's build something quietly excellent.
            </h2>
            <p className="mt-6 text-[15px] md:text-[16px] leading-[1.6] text-[#393C41] max-w-xl">
              Available for full-time roles starting oct 2026. Open to Fellowships and Internships
            </p>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <a
                href="mailto:rc005405@gmail.com"
                className="inline-flex items-center justify-center text-[14px] font-medium rounded-[4px] bg-[#3E6AE1] text-white w-[180px] h-[44px] hover:bg-[#3459c4] transition-colors"
              >
                Hire Me
              </a>
              <a
                href="tel:+9779817831552"
                className="inline-flex items-center justify-center text-[14px] font-medium rounded-[4px] border border-[#8E8E93] text-[#171A20] bg-transparent w-[200px] h-[44px] hover:bg-black/5 transition-colors"
              >
                Schedule a Call
              </a>
            </div>

            {/* Clean Vertical Dividers Grid */}
            <div className="mt-20 pt-10 border-t border-[#EEEEEE] grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
              <a
                href="https://github.com/rahulchaudhh"
                target="_blank"
                rel="noreferrer"
                className="group md:pr-8"
              >
                <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#8E8E93]">
                  GITHUB
                </div>
                <div className="mt-3 text-[16px] font-medium text-[#171A20] group-hover:text-[#3E6AE1] transition-colors">
                  @rahulchaudhh
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/rahul-chaudhary-5063a12b1/"
                target="_blank"
                rel="noreferrer"
                className="group md:px-8 md:border-l md:border-[#EEEEEE]"
              >
                <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#8E8E93]">
                  LINKEDIN
                </div>
                <div className="mt-3 text-[16px] font-medium text-[#171A20] group-hover:text-[#3E6AE1] transition-colors">
                  /in/rahul-chaudhary
                </div>
              </a>

              <a
                href="mailto:rc005405@gmail.com"
                className="group md:px-8 md:border-l md:border-[#EEEEEE]"
              >
                <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#8E8E93]">
                  EMAIL
                </div>
                <div className="mt-3 text-[16px] font-medium text-[#171A20] group-hover:text-[#3E6AE1] transition-colors">
                  rc005405@gmail.com
                </div>
              </a>

              <a
                href="/Rahul%20Chaudhary.pdf"
                target="_blank"
                rel="noreferrer"
                className="group md:pl-8 md:border-l md:border-[#EEEEEE]"
              >
                <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#8E8E93]">
                  RESUME
                </div>
                <div className="mt-3 text-[16px] font-medium text-[#171A20] group-hover:text-[#3E6AE1] transition-colors">
                  PDF ↗
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Bottom Bar */}
      <form
        onSubmit={handleAskSubmit}
        className="fixed bottom-4 inset-x-3 md:inset-x-6 z-40 max-w-3xl mx-auto rounded-[10px] backdrop-blur-md border border-[#EEEEEE]/30 bg-white/92 text-[#171A20] flex items-center gap-3 px-4 py-3 shadow-2xl"
      >
        <span className="hidden sm:inline text-[14px] font-medium pr-3 border-r border-[#EEEEEE] text-[#171A20] whitespace-nowrap">
          Ask me anything
        </span>
        <input
          type="text"
          value={askInput}
          onChange={(e) => setAskInput(e.target.value)}
          placeholder="What's the best way to reach you?"
          className="flex-1 bg-transparent outline-none text-[14px] text-[#171A20] placeholder:text-neutral-500"
          required
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center text-[12px] md:text-[13px] font-medium rounded-[4px] px-4 py-2 bg-[#3E6AE1] text-white hover:bg-[#3459c4] transition-colors whitespace-nowrap"
        >
          Send →
        </button>
      </form>

      {/* Modal Dialog */}
      {modalText && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-[8px] max-w-md w-full p-6 space-y-4 shadow-xl">
            <h3 className="text-[18px] font-medium text-[#171A20]">
              Message Received
            </h3>
            <p className="text-[14px] text-[#393C41] leading-relaxed">
              {modalText}
            </p>
            <div className="flex justify-end pt-2">
              <button
                onClick={() => setModalText(null)}
                className="px-4 py-2 text-[14px] font-medium bg-[#3E6AE1] text-white rounded-[4px] hover:bg-[#3459c4] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}