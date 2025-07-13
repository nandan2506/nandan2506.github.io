import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import { SiRedux, SiMongodb, SiPostman, SiExpress } from "react-icons/si";
import { IoPersonSharp } from "react-icons/io5";
import photo from "../assets/myPhoto.jpeg";

export default function About() {
  return (
    <div id="about" className="flex flex-col items-center scroll-mt-20 text-white py-20 px-6 gap-12 bg-[#0f152f]">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center">
        About <span className="text-[#ff8a8b]">Nandan</span>
      </h1>

      {/* Image & Bio */}
      <div className="flex flex-col lg:flex-row items-center gap-8 max-w-5xl w-full">
        <img
          src={photo}
          alt="Nandan"
          className="rounded-full w-40 h-40 object-cover border-4 border-indigo-400"
        />
        <div>
          <h2 className="flex items-center gap-2 text-2xl font-semibold bg-gradient-to-r from-red-500 to-indigo-300 bg-clip-text text-transparent">
            <IoPersonSharp className="text-[#da3d3d]" /> About Me
          </h2>
          <hr className="my-2 h-1 bg-gradient-to-r from-red-500 to-indigo-300 w-36 rounded" />
          <p className="text-gray-300 text-lg leading-relaxed">
            Hi, I'm <strong>Nandan Singh Danu</strong>, a full-stack
            web developer from Uttarakhand. I graduated from IGNOU and completed
            a Software Development course at Masai School.
            <br />
            <br />I specialize in the <strong>MERN stack</strong> (MongoDB,
            Express, React, Node.js) and enjoy building responsive,
            user-friendly web applications. From dynamic frontends with React
            and Tailwind CSS to scalable backends with Node.js, I love
            transforming ideas into real-world projects.
          </p>
        </div>
      </div>

      {/* Skills */}
      <div className="text-center w-full max-w-6xl">
        <h2 className="text-3xl font-bold mb-6">
          My{" "}
          <span className="bg-gradient-to-r from-red-500 to-indigo-300 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-items-center text-white">
          {[
            { icon: <FaHtml5 />, label: "HTML" },
            { icon: <FaCss3Alt />, label: "CSS" },
            { icon: <FaJs />, label: "JavaScript" },
            { icon: <FaReact />, label: "React" },
            { icon: <FaNodeJs />, label: "Node.js" },
            { icon: <SiRedux />, label: "Redux" },
            { icon: <SiExpress />, label: "Express" },
            { icon: <SiMongodb />, label: "MongoDB" },
            { icon: <SiPostman />, label: "Postman" },
            { icon: <FaGitAlt />, label: "Git" },
            { icon: <FaPython />, label: "Python" },
          ].map(({ icon, label }, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 bg-[#181d32] p-4 rounded-lg shadow-md cursor-pointer hover:shadow-indigo-400/50 transition duration-300 w-[90px]"
            >
              <div className="text-4xl text-indigo-300">{icon}</div>
              <span className="text-sm">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
