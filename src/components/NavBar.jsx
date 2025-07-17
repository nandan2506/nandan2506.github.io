import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdHome, IoMdMail } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleResume = () => {
    const resumeViewURL = "https://drive.google.com/file/d/1f3_XtWx9Und1ZYPKf3n1j_oBA1pi2L8C/view"; // replace with your link
    const resumeDownloadURL = "https://drive.google.com/uc?export=download&id=1f3_XtWx9Und1ZYPKf3n1j_oBA1pi2L8C"; // replace with same ID

    // Open in new tab
    window.open(resumeViewURL, "_blank");

    // Trigger download
    const link = document.createElement("a");
    link.href = resumeDownloadURL;
    link.download = "Nandan_Singh_Danu_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="md:px-10 px-6 py-4 flex items-center justify-between bg-[#0f152f] text-white sticky top-0 z-50 shadow-md">
      {/* Logo */}
      <div>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-indigo-300 bg-clip-text text-transparent cursor-pointer">
          Nandan
        </h1>
      </div>

      {/* Desktop Nav */}
      <div className="hidden lg:flex gap-6 items-center">
        <NavLink icon={<IoMdHome />} label="Home" href="#home" />
        <NavLink icon={<IoPersonSharp />} label="About" href="#about" />
        <NavLink icon={<GrProjects />} label="Projects" href="#projects" />
        <NavLink icon={<IoMdMail />} label="Contact" href="#contact" />
        <button
          onClick={handleResume}
          className="cursor-pointer bg-gradient-to-r from-red-500 to-indigo-300 hover:opacity-90 transition px-4 py-2 rounded-md font-semibold"
        >
          Resume
        </button>
      </div>

      {/* Hamburger Icon */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-2xl cursor-pointer">
          <GiHamburgerMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#1a223f] flex flex-col items-start p-4 shadow-lg lg:hidden animate-slide-down">
          <MobileLink label="Home" href="#home" />
          <MobileLink label="About" href="#about" />
          <MobileLink label="Projects" href="#projects" />
          <MobileLink label="Contact" href="#contact" />
          <button
            onClick={handleResume}
            className="w-full text-start py-2 px-2 rounded hover:bg-red-500 transition cursor-pointer"
          >
            Resume
          </button>
        </div>
      )}
    </nav>
  );
}

function NavLink({ icon, label, href }) {
  return (
    <a
      href={href}
      className="flex items-center gap-1 px-3 py-2 rounded-md hover:bg-white/10 transition cursor-pointer"
    >
      {icon} <span>{label}</span>
    </a>
  );
}

function MobileLink({ label, href }) {
  return (
    <a
      href={href}
      className="w-full text-start py-2 px-2 rounded hover:bg-red-500 transition cursor-pointer"
    >
      {label}
    </a>
  );
}
