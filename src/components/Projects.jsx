import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

export default function Projects() {
  return (
    <div
      id="projects"
      className="bg-[#0f152f] scroll-mt-20 text-white py-16 px-6 md:px-20"
    >
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-12">
        Featured{" "}
        <span className="bg-gradient-to-r from-red-500 to-indigo-300 bg-clip-text text-transparent">
          Projects
        </span>
      </h1>

      {/* Project Card */}
      <div className="flex flex-col gap-6">
        <div className="bg-[#181d32] p-8 rounded-xl shadow-lg hover:shadow-indigo-500/30 transition">
          {/* Project Title */}
          <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 bg-gradient-to-r from-red-500 to-indigo-300 bg-clip-text text-transparent">
            DonateNow
          </h2>
          <hr className="h-[2px] bg-gradient-to-r from-red-500 to-indigo-300 w-33 mb-4" />

          {/* Stack Icons */}
          <div className="flex gap-4 mb-4 text-indigo-400 text-3xl">
            <FaNodeJs />
            <SiExpress />
            <FaReact />
            <SiMongodb />
          </div>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed mb-6">
            <strong>DonateNow</strong> is a full-stack crowdfunding platform
            built with React, Tailwind CSS, Node.js, and MongoDB. Users can
            create campaigns, donate securely, leave comments, and manage
            campaigns. Real-time updates, accessibility, and responsive design
            enhance both donor and creator experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://ddonatenow.netlify.app/"
              className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-indigo-300 hover:opacity-90 transition text-white px-4 py-2 rounded-md"
            >
              <LuSquareArrowOutUpRight /> Live Project
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/nandan2506/donate.now"
              className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-indigo-300 hover:opacity-90 transition text-white px-4 py-2 rounded-md"
            >
              <FiGithub /> GitHub
            </a>
          </div>
        </div>

        <div className="bg-[#181d32] p-8 rounded-xl shadow-lg hover:shadow-indigo-500/30 transition">
          {/* Project Title */}
          <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 bg-gradient-to-r from-red-500 to-indigo-300 bg-clip-text text-transparent">
            BookNest
          </h2>
          <hr className="h-[2px] bg-gradient-to-r from-red-500 to-indigo-300 w-33 mb-4" />

          {/* Stack Icons */}
          <div className="flex gap-4 mb-4 text-indigo-400 text-3xl">
            <FaNodeJs />
            <SiExpress />
            <FaReact />
            <SiMongodb />
          </div>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed mb-6">
            <strong>BookNest</strong> The Library Management System is a
            full-stack web application designed to manage books, track
            borrowings, and maintain an organized record of book transactions.
            It allows users to register, log in, search for books, borrow, and
            return them while providing administrators with tools to manage the
            library database.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://booknestlibraryapp.netlify.app/"
              className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-indigo-300 hover:opacity-90 transition text-white px-4 py-2 rounded-md"
            >
              <LuSquareArrowOutUpRight /> Live Project
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/nandan2506/BookNest"
              className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-indigo-300 hover:opacity-90 transition text-white px-4 py-2 rounded-md"
            >
              <FiGithub /> GitHub
            </a>
          </div>
        </div>

        <div className="bg-[#181d32] p-8 rounded-xl shadow-lg hover:shadow-indigo-500/30 transition">
          {/* Project Title */}
          <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 bg-gradient-to-r from-red-500 to-indigo-300 bg-clip-text text-transparent">
            Thinktactoe
          </h2>
          <hr className="h-[2px] bg-gradient-to-r from-red-500 to-indigo-300 w-33 mb-4" />

          {/* Stack Icons */}
          <div className="flex gap-4 mb-4 text-indigo-400 text-3xl">
            <FaNodeJs />
            <FaReact />
          </div>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed mb-6">
            <strong>Thinktactoe</strong> is a sleek, browser-based 2-player Tic
            Tac Toe game built using React, Tailwind CSS, and React Router. It
            blends classic gameplay with a modern UI, smooth animations, and
            real-time interaction. The game tracks scores, resets automatically
            after each round, and includes responsive design for all screen
            sizes.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://thinktactoe.netlify.app/"
              className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-indigo-300 hover:opacity-90 transition text-white px-4 py-2 rounded-md"
            >
              <LuSquareArrowOutUpRight /> Live Project
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/nandan2506/thinktactoe"
              className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-indigo-300 hover:opacity-90 transition text-white px-4 py-2 rounded-md"
            >
              <FiGithub /> GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
