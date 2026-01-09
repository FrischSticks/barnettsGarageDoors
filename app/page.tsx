"use client";

import { useState } from "react";
import Image from "next/image";
import barnettsGarageDoorsLogo from "../public/images/barnetts-garage-doors.png";
import garageDoorRemoteOpener from "../public/images/garage-door-remote-opener.png";
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
              alt="Personal Photo - Barnett's Garage Doors"
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

      {/* Split Text / Image Section */}
      <section className="w-full px-6 md:px-12 py-20">

        <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
          ABOUT US
        </h2>

        {/* Image floats on desktop */}
        <div className="md:float-right md:w-2/5 md:ml-10 mb-6">
          <Image
            src={barnettsGarageDoorsLogo}
            alt="Barnett's Garage Doors"
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* ONE continuous text block */}
        <div className="text-lg md:text-xl text-text-secondary space-y-4">
          <p>
            We provide reliable garage door installation, repair, and maintenance
            services designed to keep your home safe, functional, and looking its best.
            From minor fixes to full replacements, our focus is on quality workmanship
            and dependable results.
          </p>

          <p>
            Every project is handled with care, clear communication, and attention to
            detail. We believe customers deserve honest recommendations, fair pricing,
            and service they can feel confident in long after the job is done.
          </p>

          <p>
            This section is intentionally written as a starting point. It should be
            customized to highlight what sets your business apart — whether that’s
            years of experience, family ownership, fast response times, local roots, or
            a commitment to doing the job right the first time.
          </p>

          <p className="uppercase font-semibold">
            IMAGE: Replace with a personal, authentic photo — ideally you or your
            team at work, in front of a completed garage door installation.
          </p>
        </div>

        {/* Clear float so next section behaves */}
        <div className="clear-both" />

      </section>

      <section className="w-full px-6 md:px-12 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-text-primary justify-center flex">
          FIND YOUR NEXT GARAGE DOOR
        </h2>
        {/* Garage Doors Grid */}
        <GarageDoorGrid />
      </section>

      <section className="w-full px-6 md:px-12 py-20">
        {/* Image floats LEFT on desktop */}
        <div className="md:float-left md:w-1/2 lg:w-1/3 xl:w-1/4 md:mr-10 mb-6">
          <Image
            src={garageDoorRemoteOpener}
            alt="Garage Door Remote Opener"
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* ONE continuous text block */}
        <div className="text-lg md:text-xl text-text-secondary space-y-4">
                  <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
          REMOTE OPENERS
        </h2>
          <p>
            We specialize in diagnosing and servicing garage door openers to keep your system
            running smoothly and reliably. Whether your opener is struggling to lift, making
            unusual noises, or not responding at all, we provide efficient repairs that restore
            safe and dependable operation.
          </p>

          <p>
            Routine maintenance plays a key role in extending the life of your garage door
            opener. Our maintenance services help prevent unexpected breakdowns by addressing
            worn components, alignment issues, and performance concerns before they become
            costly problems.
          </p>

          <p>
            When repair is no longer the best option, we offer professional opener replacement
            and upgrades. We’ll help you choose a solution that fits your needs — whether that
            means improved reliability, quieter operation, modern safety features, or smart
            technology integration — and ensure it’s installed correctly the first time.
          </p>
        </div>

        {/* Clear float so next section behaves */}
        <div className="clear-both" />

      </section>

    </main>
  );
}
