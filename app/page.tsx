"use client";

import { useState } from "react";
import Image from "next/image";
import barnettsGarageDoorsLogo from "../public/images/barnetts-garage-doors.png";
import Contact from "../components/ContactForm";
import GarageDoorGrid from "../components/GarageDoorsGrid";

export default function HomePage() {
  const [showContact, setShowContact] = useState(false);

  return (
    <main className="w-full bg-neutral-offwhite">
      {/* Hero Section */}
      <section className="min-h-screen w-full flex flex-col md:flex-row items-center relative overflow-hidden">

        {/* Left Content */}
        <div className="flex-1 md:w-2/5 flex flex-col justify-center items-center px-6 md:pl-12 md:pr-8">
          <h1 className="text-[3rem] md:text-[4rem] lg:text-[6rem] font-bold text-text-primary leading-tight mb-4 mt-20 md:mt-0">
            Garage Doors.
            <br />
            Done Right!
          </h1>

          <p className="text-xl md:text-4xl text-text-secondary mb-12 font-medium">
            Installation ● Maintenance ● Repair
          </p>

          {!showContact && (
            <button
              onClick={() => setShowContact(true)}
              className="w-full px-12 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-accent transition-colors text-lg uppercase"
            >
              Get Quote
            </button>
          )}
        </div>

        {/* RIGHT SIDE — DESKTOP ONLY */}
        {showContact ? (
          /* Contact form (md+) */
          <div className="hidden md:flex md:w-3/5 items-center justify-center px-6 md:px-12">
            <Contact />
          </div>
        ) : (
          /* Image (md+ ONLY — no mobile render at all) */
          <div className="hidden md:flex flex-1 items-center justify-center px-6 md:px-12">
            <Image
              src={barnettsGarageDoorsLogo}
              alt="Barnett's Garage Doors Logo"
              width={750}
              height={750}
              priority
              className="object-contain"
            />
          </div>
        )}


        {showContact && (
          <section className="md:hidden w-full px-6 py-12">
            <Contact />
          </section>
        )}

      </section>
      <section>
        {/* Garage Doors Grid */}
        <GarageDoorGrid />
      </section>
    </main>
  );
}
