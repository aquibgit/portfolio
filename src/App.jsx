import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#05070d] text-white font-sans">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] bg-blue-600/20 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 -right-32 w-[36rem] h-[36rem] bg-cyan-400/10 blur-[120px] rounded-full" />
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-semibold tracking-wide">Aquib</span>
          <div className="flex gap-8 text-sm text-gray-300">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-28 text-center">
        <motion.div variants={fadeUp} initial="hidden" animate="show">
          <img
            src="/profile.jpg"
            alt="Aquib"
            className="mx-auto w-36 h-36 rounded-full border border-white/10 shadow-2xl mb-6"
          />

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Aquib Ummer Raof
          </h1>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            I build intelligent systems where full-stack engineering meets machine learning — creating products that are both functional and meaningful.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <a href="#projects" className="bg-blue-600 px-6 py-3 rounded-xl shadow-lg hover:bg-blue-500 transition">
              Explore Work
            </a>
            <a href="/resume.pdf" download className="border border-white/10 px-6 py-3 rounded-xl hover:bg-white hover:text-black transition">
              Resume
            </a>
          </div>
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-14">Selected Work</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-blue-600/10 to-cyan-400/10 rounded-2xl" />

              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {p.description}
              </p>

              <p className="text-xs text-blue-400 mt-3">{p.tech}</p>

              <div className="mt-5 flex gap-4 text-sm">
                <a href="#" className="underline hover:text-blue-400">GitHub</a>
                
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-10">Skills</h2>

        <div className="flex flex-wrap gap-3">
          {skills.map((s, i) => (
            <span
              key={i}
              className="px-4 py-2 text-sm rounded-full bg-white/5 border border-white/10 hover:border-blue-500 transition"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-4xl font-bold mb-6">Contact</h2>
          <p className="text-gray-400 mb-6">
            Open to opportunities, collaborations, and meaningful projects.
          </p>

          <div className="space-y-3 text-gray-300">
            <p>Email: aquiburaof123@gmail.com</p>
            <p>Phone: +91 9497277196</p>
            <p>Location: Kozhikode, Kerala</p>
          </div>
        </div>

        <form
          action="https://formsubmit.co/aquiburaof123@gmail.com"
          method="POST"
          className="space-y-4 bg-white/5 border border-white/10 rounded-2xl p-6"
        >
          <input type="hidden" name="_subject" value="New Portfolio Message" />

          <input
            name="name"
            required
            placeholder="Your Name"
            className="w-full p-3 bg-black/40 border border-white/10 rounded-lg focus:border-blue-500 outline-none"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full p-3 bg-black/40 border border-white/10 rounded-lg focus:border-blue-500 outline-none"
          />

          <textarea
            name="message"
            required
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 bg-black/40 border border-white/10 rounded-lg focus:border-blue-500 outline-none"
          />

          <button className="w-full bg-blue-600 py-3 rounded-xl hover:bg-blue-500 transition">
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm py-10 border-t border-white/5">
        © {new Date().getFullYear()} Aquib Ummer Raof — Built with precision
      </footer>
    </div>
  );
}

const projects = [
  {
    title: "MentApp",
    description: "Real-time emotion recognition system combining facial analysis and NLP to understand user sentiment.",
    tech: "TensorFlow • PyTorch • OpenCV • Transformers",
  },
  {
    title: "E-Market",
    description: "Full-featured e-commerce platform with scalable architecture, analytics, and secure transactions.",
    tech: "Django • SQL • Bootstrap",
  },
  {
    title: "MediPlus",
    description: "Healthcare system enabling efficient doctor-patient interaction and appointment management.",
    tech: "Django • MySQL",
  },
  {
    title: "Villa Project",
    description: "Real estate management system with structured listing and approval workflows.",
    tech: "Django",
  },
  {
    title: "CV Matcher",
    description: "NLP-based system that matches resumes to job descriptions with intelligent scoring.",
    tech: "Python • NLP",
  },
  {
    title: "CV Anonymizer",
    description: "Automated anonymization tool to remove bias in recruitment processes.",
    tech: "Python • NLP",
  },
  {
    title: "Task Manager",
    description: "Clean and efficient task tracking system with full CRUD operations.",
    tech: "Django • JavaScript",
  },
  {
    title: "Smart Canteen",
    description: "Digital ordering system designed to improve efficiency and reduce wait times.",
    tech: "Django",
  },
];

const skills = [
  "Python",
  "Django",
  "React",
  "TensorFlow",
  "PyTorch",
  "OpenCV",
  "Transformers",
  "MySQL",
  "PostgreSQL",
  "JavaScript",
  "REST APIs",
];
