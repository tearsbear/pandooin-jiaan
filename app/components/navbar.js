import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`p-5 fixed top-0 left-0 w-full z-10 transition-colors duration-300 ${
        isScrolled ? "bg-[#FAF9F5] shadow-md scrolled" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Image
          src={`${isScrolled ? "/assets/logo.webp" : "/assets/logo-white.svg"}`}
          alt="logo"
          width="120"
          height="120"
        />

        {/* Desktop Navigation */}
        <ul className="hidden md:flex mt-1 space-x-20">
          <li className="nav-active">
            <a
              href="#"
              className={`${
                isScrolled ? "text-color-secondary" : "text-white"
              } font-albert-semi`}
            >
              Homepage
            </a>
          </li>
          <li>
            <a
              href="#discover-tailored-experiences"
              className={`${
                isScrolled ? "text-color-secondary" : "text-white"
              } font-albert-semi`}
            >
              Customize You Trip
            </a>
          </li>
          <li>
            <a
              href="https://www.zamrood.com/destination"
              target="_blank"
              className={`${
                isScrolled ? "text-color-secondary" : "text-white"
              } font-albert-semi`}
            >
              Destination
            </a>
          </li>
          <li>
            <a
              href="#article"
              className={`${
                isScrolled ? "text-color-secondary" : "text-white"
              } font-albert-semi`}
            >
              Article
            </a>
          </li>
          <li>
            <button
              className={`font-albert-bold border-2 ${
                isScrolled
                  ? "border-color-secondary text-color-secondary hover:bg-color-secondary hover:border-color-secondary hover:text-white"
                  : "border-white text-white hover:bg-color-primary hover:border-color-primary"
              } transition-colors ease-in-out duration-300 bg-transparent px-7 py-3 rounded-full`}
            >
              Need Assistence?
            </button>
          </li>
        </ul>

        {/* Mobile Navigation - Burger Icon */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="cursor-pointer"
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.9639 18.9623H39.9639"
              stroke="#337172"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M15.9639 27.9623H39.9639"
              stroke="#337172"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M15.9639 36.9623H39.9639"
              stroke="#337172"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <rect
              x="1"
              y="1"
              width="54"
              height="54"
              rx="27"
              stroke="#337172"
              stroke-width="2"
            ></rect>
          </svg>
        </button>

        {/* Side Panel (Mobile Menu) */}
        <div
          className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <div className="absolute top-4 right-4">
            <button className="text-3xl" onClick={() => setIsMenuOpen(false)}>
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.2825 13.584L13.4227 13.4227C13.6665 13.1788 13.9897 13.0305 14.3336 13.0048C14.6775 12.9791 15.0192 13.0777 15.2966 13.2825L15.4578 13.4227L25 22.9629L34.5422 13.4208C34.7862 13.1772 35.1096 13.0293 35.4534 13.0039C35.7973 12.9785 36.1389 13.0774 36.416 13.2825L36.5773 13.4227C36.8212 13.6665 36.9694 13.9897 36.9952 14.3336C37.0209 14.6775 36.9223 15.0192 36.7175 15.2966L36.5773 15.4578L27.0371 25L36.5792 34.5422C36.8228 34.7862 36.9707 35.1096 36.9961 35.4534C37.0215 35.7973 36.9226 36.1389 36.7175 36.416L36.5773 36.5773C36.3335 36.8212 36.0103 36.9694 35.6664 36.9952C35.3225 37.0209 34.9808 36.9223 34.7034 36.7175L34.5422 36.5773L25 27.0371L15.4578 36.5792C15.2138 36.8228 14.8904 36.9707 14.5466 36.9961C14.2027 37.0215 13.8611 36.9226 13.584 36.7175L13.4227 36.5773C13.1788 36.3335 13.0305 36.0103 13.0048 35.6664C12.9791 35.3225 13.0777 34.9808 13.2825 34.7034L13.4227 34.5422L22.9629 25L13.4208 15.4578C13.1772 15.2138 13.0293 14.8904 13.0039 14.5466C12.9785 14.2027 13.0774 13.8611 13.2825 13.584Z"
                  fill="#0B7373"
                ></path>
                <rect
                  x="1"
                  y="1"
                  width="48"
                  height="48"
                  rx="24"
                  stroke="#0B7373"
                  stroke-width="2"
                ></rect>
              </svg>
            </button>
          </div>
          <div className="relative flex justify-end mt-20">
            <ul className="flex flex-col p-10">
              <li className="mb-3">
                <a className="font-albert-medium text-2xl text-color-secondary">
                  HomePage
                </a>
              </li>
              <li className="mb-3">
                <a className="font-albert-medium text-2xl text-color-secondary">
                  Customize Your Trip
                </a>
              </li>
              <li className="mb-3">
                <a className="font-albert-medium text-2xl text-color-secondary">
                  Destination
                </a>
              </li>
              <li className="mb-3">
                <a className="font-albert-medium text-2xl text-color-secondary">
                  Article
                </a>
              </li>
              <li>
                <button
                  className={`mt-3 font-albert-bold border-2 border-color-secondary text-color-secondary hover:bg-color-secondary hover:border-color-secondary hover:text-white transition-colors ease-in-out duration-300 bg-transparent px-7 py-5 rounded-full`}
                >
                  Need Assistence?
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
