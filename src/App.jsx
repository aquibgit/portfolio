import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Portfolio() {
  return (
    <div className="relative min-h-screen bg-[#05070d] text-white overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#05070d] via-[#0a0f1c] to-black" />

        {/* Glow */}
        <div className="absolute w-[600px] h-[600px] bg-blue-500/10 blur-[140px] top-[-150px] left-[-150px] animate-pulse" />
        <div className="absolute w-[500px] h-[500px] bg-purple-500/10 blur-[140px] bottom-[-150px] right-[-150px] animate-pulse" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.05] 
          [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] 
          [background-size:40px_40px]" />

        {/* Particles */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 backdrop-blur-xl bg-black/30 border-b border-white/5 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
          <span className="font-semibold">Aquib</span>
          <div className="flex gap-6 text-gray-300">
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
<section className="max-w-4xl mx-auto px-6 py-28 grid md:grid-cols-[auto_1fr] gap-12 md:gap-12 items-center"> 
  
   {/* Left: Photo */}
  <motion.div
    variants={fadeUp}
    initial="hidden"
    animate="show"
    className="flex justify-center md:justify-start"
  >
    <div className="relative w-44 h-44 md:w-48 md:h-48">

      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500 to-purple-500 blur-2xl opacity-30"></div>

      <img
        src="/profile.jpg"
        alt="Aquib"
        className="relative w-full h-full object-cover rounded-2xl 
                   border border-white/10 shadow-2xl"
      />
    </div>
  </motion.div>

  {/* Right: Text */}
  <motion.div
    variants={fadeUp}
    initial="hidden"
    animate="show"
    className="text-center md:text-left max-w-xl"
  >

    <h1 className="text-4xl md:text-5xl font-bold 
                   bg-gradient-to-r from-white to-blue-400 
                   bg-clip-text text-transparent whitespace-nowrap">
      Aquib Ummer Raof
    </h1>

    <p className="mt-5 text-gray-400 text-lg">
      AI/ML Engineer • Python Full Stack Developer
    </p>

    <p className="mt-4 text-gray-500">
      I build intelligent systems combining machine learning with scalable web applications, focusing on real-world problem solving and impactful solutions.
    </p>

    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
      <a href="#projects" className="bg-blue-600 px-6 py-3 rounded-xl">
        Explore Work
      </a>

      <a href="/resume.pdf" className="border border-white/10 px-6 py-3 rounded-xl">
        Resume
      </a>
    </div>

  </motion.div>

</section>
      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-14">Project Works</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 
                         hover:-translate-y-2 hover:bg-white/10 
                         hover:shadow-2xl hover:shadow-blue-500/10 
                         transition-all duration-300"
            >

              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition 
                bg-gradient-to-r from-transparent via-white/10 to-transparent blur-xl 
                pointer-events-none" />

              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>

              <p className="text-gray-400 text-sm">{p.description}</p>

              <p className="text-blue-400 text-xs mt-3">{p.tech}</p>

              <div className="mt-5">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 rounded-lg 
                               hover:bg-white hover:text-black 
                               hover:shadow-lg hover:shadow-blue-500/20 
                               transition-all duration-300"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="text-center py-20">
        <h2 className="text-4xl font-bold mb-10">Skills</h2>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((s, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 
                         hover:border-blue-500 hover:scale-105 transition"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">

  {/* Contact Info Card */}
  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">

    <h2 className="text-3xl font-bold mb-6">Contact</h2>

    <p className="text-gray-400 mb-6">
      Open to opportunities and collaborations.
    </p>

    <div className="space-y-3 text-gray-300">
      <p>Email: aquiburaof123@gmail.com</p>
      <p>Phone: +91 9497277196</p>
      <p>Location: Kozhikode, Kerala</p>
    </div>

    <div className="mt-6 flex gap-4">
      <a
        href="https://www.linkedin.com/in/aquib-ummer-raof-python-developer"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 transition"
      >
        LinkedIn
      </a>

      <a
        href="https://github.com/aquibgit"
        target="_blank"
        rel="noopener noreferrer"
        className="border border-white/10 px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
      >
        GitHub
      </a>
    </div>

  </div>

  {/* Form Card */}
  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">

    <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>

    <form
      action="https://formsubmit.co/aquiburaof123@gmail.com"
      method="POST"
      className="space-y-4"
    >
      <input
        name="name"
        placeholder="Your Name"
        required
        className="w-full p-3 bg-black/40 border border-white/10 rounded-lg"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="w-full p-3 bg-black/40 border border-white/10 rounded-lg"
      />

      <textarea
        name="message"
        rows="5"
        placeholder="Your Message"
        required
        className="w-full p-3 bg-black/40 border border-white/10 rounded-lg"
      />

      <button className="w-full bg-blue-600 py-3 rounded-xl hover:bg-blue-500 transition">
        Send Message
      </button>
    </form>

  </div>

</section>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-10 border-t border-white/5">
        © {new Date().getFullYear()} Aquib Ummer Raof
      </footer>
    </div>
  );
}

const projects = [
  {
    title: "MentApp",
    description:
      "An AI-driven emotion recognition system that analyzes facial expressions and textual input to detect user sentiment in real time. Built using deep learning models and NLP techniques to improve human-computer interaction.",
    tech:
      "TensorFlow • PyTorch • OpenCV • Transformers • CNN",
    github: null
  },
  {
    title: "E-Market",
    description:
      "A full-stack e-commerce platform featuring product management, user authentication, cart functionality, and order processing. Designed with a scalable backend and dynamic UI for real-world online shopping workflows.",
    tech:
      "Django • MySQL • HTML • CSS • JavaScript • Bootstrap",
    github: "https://github.com/aquibgit/E-marketing"
  },
  {
    title: "MediPlus",
    description:
      "A healthcare management system enabling efficient interaction between doctors and patients, including appointment scheduling, record handling, and query management with a structured backend architecture.",
    tech:
      "Django • MySQL • HTML • CSS • Bootstrap",
    github: "https://github.com/aquibgit/mediplus"
  },
  {
    title: "Villa Project",
    description:
      "A real estate platform that allows property listing, approval workflows, and user inquiries. Designed to simulate real-world property management systems with structured data handling.",
    tech:
      "Django • HTML • CSS • JavaScript",
    github: "https://github.com/aquibgit/villa-real-estate"
  },
  {
    title: "CV Matcher",
    description:
      "An NLP-based system that evaluates how well a resume matches a job description using text similarity and keyword extraction techniques, helping streamline recruitment processes.",
    tech:
      "Python • NLP • Scikit-learn • Cosine Similarity",
    github: "https://github.com/aquibgit/cv-matcher-nlp"
  },
  {
    title: "CV Anonymizer",
    description:
      "A system designed to remove personal identifiers such as names, emails, and phone numbers from resumes, ensuring unbiased hiring by focusing purely on skills and experience.",
    tech:
      "Python • NLP • Regex • Text Processing",
    github: "https://github.com/aquibgit/cv-anonymizer"
  },
  {
  title: "Smart Canteen",
  description:
    "A digital food ordering and management system designed to streamline canteen operations by allowing users to place orders online, reduce wait times, and improve service efficiency.",
  tech:
    "Django • HTML • CSS • JavaScript • MySQL",
  github: null
}
];

const skills = [
  "Python", "Django", "React", "TensorFlow", "PyTorch",
  "OpenCV", "MySQL", "PostgreSQL", "JavaScript",  "Git",
  "CSS", "HTML", "REST APIs",
];