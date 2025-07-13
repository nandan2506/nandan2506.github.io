import { useState } from "react";
import { IoMdSend, IoMdMail } from "react-icons/io";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";


export default function Contact() {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleMail = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:thenandansingh1999@gmail.com?subject=${encodeURIComponent(
      title
    )}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
    window.open(mailtoLink, "_blank");
  };

  return (
    <div id="contact" className="bg-[#0f152f] text-white py-16 px-4 scroll-mt-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-500 to-indigo-300 bg-clip-text text-transparent">
          Contact
        </h1>
        <p className="mt-2 text-gray-300">Feel free to reach out!</p>
      </div>

      {/* Contact Info + Form */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Info */}
        <div className="flex flex-col h-dvh gap-6">
          <div className="flex gap-2">
            <h2 className="text-xl font-semibold"> <IoMdMail /></h2>
            <p className="text-sm text-gray-300">thenandansingh1999@gmail.com</p>
          </div>
          <div className="flex gap-2">
            <h2 className="text-xl font-semibold"><MdOutlinePhoneIphone /></h2>
            <p className="text-sm text-gray-300">7906681383</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-4 text-3xl text-white">
            <a
              href="https://www.linkedin.com/in/nandan-singh-danu-125363343/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/nandan2506"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:thenandansingh1999@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 transition"
            >
              <IoMdMail />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleMail}
          className="bg-[#181d32] p-6 rounded-xl shadow-2xl flex flex-col gap-5"
        >
          <input
            className="bg-[#1f2942] text-white p-3 rounded-md outline-none focus:ring-2 focus:ring-[#be6464] transition"
            type="text"
            placeholder="Subject"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            className="bg-[#1f2942] text-white p-3 rounded-md outline-none focus:ring-2 focus:ring-[#be6464] transition"
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="bg-[#1f2942] text-white p-3 rounded-md outline-none focus:ring-2 focus:ring-[#be6464] transition"
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            className="bg-[#1f2942] text-white p-3 rounded-md outline-none focus:ring-2 focus:ring-[#be6464] transition"
            placeholder="Your Message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-indigo-400 hover:brightness-110 transition text-white font-semibold py-3 px-6 rounded-lg"
          >
            Send Message <IoMdSend className="text-xl" />
          </button>
        </form>
      </div>
    </div>
  );
}
