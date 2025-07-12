import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="bg-[#0f152f] text-white px-6 py-10 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo */}
        <h1 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-indigo-300 bg-clip-text text-transparent">
          Nandan
        </h1>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm font-light">
          <a href="#home" className="hover:text-red-400 transition">
            Home
          </a>
          <a href="#about" className="hover:text-red-400 transition">
            About
          </a>
          <a href="#projects" className="hover:text-red-400 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-red-400 transition">
            Contact
          </a>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-4 text-2xl">
          <a
            href="https://www.linkedin.com/in/nandan-singh-danu-125363343/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/nandan2506"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-300"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:thenandansingh1999@gmail.com"
            className="hover:text-indigo-300"
          >
            <IoMdMail />
          </a>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 mt-6">
        © {new Date().getFullYear()} Nandan Singh Danu. All rights reserved.
      </div>
    </footer>
  );
}
