"use client"

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const navLinks = [
  { name: "About", href: "/about", external: false },
  { name: "Services", href: "/services", external: false },
  { name: "Gallery", href: "/gallery", external: false },
  { name: "Contact", href: "/contact", external: false },
];

const NavBar: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleNav = () => setNavOpen((prev) => !prev);

  // Close mobile menu on Escape key or clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setNavOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (navOpen && event.key === "Escape") {
        setNavOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [navOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-secondary-dark text-white shadow-md shadow-secondary-dark/80 z-50">

      {/* ===================== DESKTOP NAVBAR ===================== */}
      <div className="hidden md:flex justify-between items-center w-full h-20 bg-secondary-dark">
        {/* Logo */}
        <div className="relative h-full w-54">
          <Link href="/" className="h-full w-full block" aria-label="Barnett's Garage Doors Home">
            <Image
              src="/images/barnetts-garage-doors.png"
              alt="Barnett's Garage Doors Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="flex flex-row items-center gap-10 lg:gap-16 xl:gap-20 mr-10 lg:mr-16 xl:mr-20">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="text-lg lg:text-xl uppercase font-semibold hover:border-b-4 border-terminal hover:scale-105 transition-transform hover:text-primary"
            >
              {link.external ? (
                <a href={link.href} target="_blank" rel="noopener noreferrer" className="font-semibold">
                  {link.name}
                </a>
              ) : (
                <Link href={link.href} className="font-semibold">{link.name}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* ===================== MOBILE NAVBAR ===================== */}
      <div className="flex md:hidden justify-between items-center w-full h-16 sm:h-18 bg-secondary-dark">
        {/* Logo flush left */}
        <div className="relative h-full w-43 sm:w-49">
          <Link href="/" className="h-full w-full block" aria-label="Barnett's Garage Doors Home">
            <Image
              src="/images/barnetts-garage-doors.png"
              alt="Barnett's Garage Doors Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Hamburger/X toggle */}
        <button
          className="cursor-pointer pr-4 z-50 relative flex items-center justify-center"
          onClick={toggleNav}
          aria-label={navOpen ? "Close Menu" : "Open Menu"}
        >
          {navOpen ? (
            <AiOutlineClose size={26} className="text-primary" />
          ) : (
            <AiOutlineMenu size={26} className="text-white" />
          )}
        </button>
      </div>

      {/* ===================== MOBILE MENU OVERLAY ===================== */}
      {navOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black/90 z-40 md:hidden flex">
          <div
            ref={menuRef}
            className="w-[70%] h-screen bg-secondary-dark p-10 transform translate-x-0 transition-transform duration-300"
          >
            <ul className="mt-16 flex flex-col items-center text-xl text-white gap-5">
              {navLinks.map((link) => (
                <li key={link.name} className="uppercase">
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold"
                      onClick={toggleNav}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link href={link.href} className="font-semibold" onClick={toggleNav}>
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}

              {/* Optional Mobile Logo at bottom */}
              <div className="mt-10 relative h-16 w-36">
                <Link href="/" onClick={toggleNav} className="h-full w-full block" aria-label="Barnett's Garage Doors Home">
                  <Image
                    src="/images/barnetts-garage-doors.png"
                    alt="Barnett's Garage Doors Logo"
                    fill
                    className="object-contain rounded-xl"
                  />
                </Link>
              </div>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;