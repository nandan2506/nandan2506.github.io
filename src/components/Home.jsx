import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa6";

export default function Home() {
  return (
    <div id="home" className="flex flex-col items-center justify-center scroll-mt-20 text-white min-h-screen px-6 gap-6 border-b-4 border-white/10">
      {/* Intro */}
      <h1 className="text-4xl md:text-6xl font-bold text-center">
        Hi! I&apos;m <span className="text-[#ff8a8b]">Nandan</span>
      </h1>
      <p className="text-xl md:text-2xl font-mono text-center">MERN Stack Developer</p>

      {/* Info */}
      <p className="text-center text-lg font-serif px-4 md:w-[520px] text-gray-300">
        I'm currently looking for full-time remote or on-site opportunities in India.
        Feel free to connect with me on
        <span className="text-[#ff8a8b]"> LinkedIn</span> or
        <span className="text-[#ff8a8b]"> Email</span>.
      </p>

      {/* Buttons and Icons */}
      <div className="flex items-center gap-6 mt-4">
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1f3_XtWx9Und1ZYPKf3n1j_oBA1pi2L8C/view?usp=sharing"
          className="bg-gradient-to-r from-red-500 to-indigo-400 hover:brightness-110 text-white px-6 py-2 rounded-lg font-semibold transition"
        >
          View Resume
        </a>
        <a
          href="https://www.linkedin.com/in/nandan-singh-danu-125363343/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:text-indigo-300 transition"
        >
          <IoLogoLinkedin />
        </a>
        <a
          href="https://github.com/nandan2506/donate.now"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:text-gray-400 transition"
        >
          <FaGithub />
        </a>
      </div>

      {/* Scroll Hint */}
      <div className="flex flex-col items-center mt-16 animate-bounce">
        <a href="#about" className="flex flex-col items-center">
          <span className="bg-gradient-to-r from-red-500 to-indigo-300 bg-clip-text text-transparent font-medium">
          Scroll or click to enter
        </span>
        <FaArrowDown className="text-2xl mt-2" />
        </a>
      </div>
    </div>
  );
}
