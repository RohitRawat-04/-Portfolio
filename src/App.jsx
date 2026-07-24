 import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

export default function App() {
  

  const projects = [
    {
      id: 1,
      name: "Student Management System",
      description: "A full-stack student record management app built using MERN stack.",
      live: "https://chic-cobbler-298e53.netlify.app/",
    },
    {
      id: 2,
      name: "ShopCart",
      description: "A  E-com style React application.",
      live: "https://shopcart-web.netlify.app/",
    },
    {
      id: 3,
      name: "Project 3",
      description: "Another awesome project built with modern technologies.",
      live: "#",
    },
  ];

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "C++",
    "Python",
  ];

  return (
    <div className="min-h-screen bg-black text-white scroll-smooth">
      {/* NAVBAR */}
      <nav className="fixed w-full bg-black/80 backdrop-blur-md z-50 px-6 md:px-16 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-500">Rohit Rawat</h1>

        <div className="hidden md:flex gap-8">
          <a href="#projects" className="hover:text-indigo-400">Projects</a>
          <a href="#skills" className="hover:text-indigo-400">Skills</a>
          <a href="#contact" className="hover:text-indigo-400">Contact</a>
        </div>

      
      </nav>
 
      {/* HERO */}
      <section className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-10 px-6 md:px-16 pt-32 min-h-screen">
        <div className="max-w-2xl space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Hi, I'm <span className="text-indigo-500">Rohit Rawat</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gray-400 text-lg"
          >
            MERN Stack Developer passionate about building responsive and modern web applications.
          </motion.p>

          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-6 py-2 bg-indigo-600 rounded-2xl hover:bg-indigo-700 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-2 border border-white rounded-2xl hover:bg-white hover:text-black transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          src="https://th.bing.com/th/id/R.2f88e617a0a1f9bca905d62aaf194238?pid=ImgRaw&r=0"
          alt="profile"
          className="w-60 md:w-80 object-contain bg-white p-6 rounded-3xl shadow-2xl"
        />
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 md:px-16 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg space-y-4"
            >
              <h3 className="text-xl font-semibold text-indigo-400">{project.name}</h3>
              <p className="text-gray-300">{project.description}</p>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-4 py-2 bg-indigo-600 rounded-xl hover:bg-indigo-700 transition"
              >
                Live
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-6 md:px-16 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 py-4 text-center rounded-full hover:-translate-y-1 hover:bg-indigo-600 transition duration-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 md:px-16 py-20 text-center">
        <h2 className="text-3xl font-bold mb-10">Contact Me</h2>
        <div className="flex justify-center gap-10 text-3xl">
          <a href="https://github.com/Rohit-25-04" target="_blank" rel="noopener noreferrer">
            <Github />
          </a>
          <a href="mailto:rohiirwt08@gmail.com">
            <Mail />
          </a>
          <a href="https://www.linkedin.com/in/Rohit-Rwt" target="_blank" rel="noopener noreferrer">
            <Linkedin />
          </a>
        </div>
      </section>
    </div>
  );
}
