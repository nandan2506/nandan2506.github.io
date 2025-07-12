import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

export default function Projects() {
  return (
    <div id="projects" className="bg-[#0f152f] scroll-mt-20 text-white py-16 px-6 md:px-20">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-12">
        Featured{" "}
        <span className="bg-gradient-to-r from-red-500 to-indigo-300 bg-clip-text text-transparent">
          Projects
        </span>
      </h1>

      {/* Project Card */}
      <div className="bg-[#181d32] p-8 rounded-xl shadow-lg hover:shadow-indigo-500/30 transition">
        {/* Project Title */}
        <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 bg-gradient-to-r from-red-500 to-indigo-300 bg-clip-text text-transparent">
          DonateNow
        </h2>
        <hr className="h-[2px] bg-gradient-to-r from-red-500 to-indigo-300 w-28 mb-4" />

        {/* Stack Icons */}
        <div className="flex gap-4 mb-4 text-indigo-400 text-3xl">
          <FaNodeJs />
          <SiExpress />
          <FaReact />
          <SiMongodb />
        </div>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed mb-6">
          <strong>DonateNow</strong> is a full-stack crowdfunding platform built
          with React, Tailwind CSS, Node.js, and MongoDB. Users can create
          campaigns, donate securely, leave comments, and manage campaigns.
          Real-time updates, accessibility, and responsive design enhance both
          donor and creator experiences.
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
    </div>
  );
}
