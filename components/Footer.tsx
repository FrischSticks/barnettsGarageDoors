"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { FaFacebookF, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="w-full bg-secondary-dark text-white shadow-inner shadow-black/30">
      
      {/* ===== JSON-LD Structured Data ===== */}
      <Script
        type="application/ld+json"
        id="localbusiness-jsonld"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Barnett's Garage Doors",
            "image": "https://BarnettsGarageDoors.com/images/barnetts-garage-doors.webp",
            "url": "https://BarnettsGarageDoors.com",
            "telephone": "+1-765-499-3971",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1319 S Jefferson St",
              "addressLocality": "Hartford City",
              "addressRegion": "IN",
              "postalCode": "47348",
              "addressCountry": "US"
            },
            "sameAs": [
              "https://www.facebook.com/p/Barnetts-garage-doors-61575573969998/"
            ]
          }),
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* ===== Logo & Branding ===== */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Link href="/" className="relative h-16 w-40 mb-4 block" aria-label="Home">
            <Image
              src="/images/barnetts-garage-doors.png"
              alt="Barnett's Garage Doors Logo"
              fill
              className="object-contain"
              priority={false} // optimized
            />
          </Link>
          <p className="text-md italic font-semibold text-gray-300">
            Garage Doors. Done Right!
          </p>
        </div>

        {/* ===== Quick Links ===== */}
        <nav className="flex flex-col items-center" aria-label="Quick Links">
          <h4 className="text-md uppercase font-semibold text-primary mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-accent transition-colors font-semibold uppercase"
                  aria-label={`Go to ${link.name} page`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* ===== Contact & Social ===== */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <h4 className="text-md uppercase font-semibold text-primary mb-4">Get in Touch</h4>
          <address className="not-italic flex flex-col space-y-2 text-sm text-gray-300">
            <div className="flex items-center gap-2 justify-center md:justify-end">
              <FaPhoneAlt className="text-primary text-[1.1rem] sm:text-[1.15rem] lg:text-[1.2rem] 2xl:text-[1.25rem]" />
              <a
                href="tel:7654993971"
                className="text-[1.1rem] sm:text-[1.15rem] lg:text-[1.2rem] 2xl:text-[1.25rem] hover:text-accent"
                aria-label="Call Barnett's Garage Doors"
              >
                (765) 499-3971
              </a>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-end">
              <FaEnvelope className="text-primary text-[1.1rem] sm:text-[1.15rem] lg:text-[1.2rem] 2xl:text-[1.25rem]" />
              <a
                href="mailto:TBarnett1988@gmail.com"
                className="text-[1.1rem] sm:text-[1.15rem] lg:text-[1.2rem] 2xl:text-[1.25rem] hover:text-accent"
                aria-label="Email Barnett's Garage Doors"
              >
                TBarnett1988@gmail.com
              </a>
            </div>
          </address>

          {/* Socials */}
          <nav aria-label="Social Links" className="flex gap-4 mt-4">
            <a
              href="https://www.facebook.com/p/Barnetts-garage-doors-61575573969998/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary hover:bg-accent transition"
              aria-label="Visit our Facebook page"
            >
              <FaFacebookF />
            </a>
          </nav>
        </div>
      </div>

      {/* ===== Bottom Bar ===== */}
      <div className="w-full bg-black/50 text-center py-4 text-xs text-gray-400">
        © {new Date().getFullYear()} Barnett's Garage Doors | All rights reserved.
      </div>
      <div className="w-full bg-black/50 text-center pb-2 text-xs text-gray-400">
        Designed by{" "}
        <a
          href="https://www.frischedigitalsolutions.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-accent transition-colors"
        >
          Frische Digital Solutions™
        </a>
      </div>
    </footer>
  );
};

export default Footer;