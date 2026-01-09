"use client";

import { useState } from 'react';
import Image from 'next/image';
import barnettsGarageDoorsLogo from '../public/images/barnetts-garage-doors.png';
import Contact from '../components/ContactForm';

export default function HomePage() {
  const [showContact, setShowContact] = useState(false);

  return (
    <main className="w-full bg-neutral-offwhite">
      {/* Hero Section */}
      <section className="h-screen w-full flex items-center justify-between overflow-hidden relative">
        {/* Left Content Section */}
        <div className="flex-1 flex flex-col justify-center pl-12 pr-8">
          <h1 className="text-[6rem] font-bold text-text-primary leading-tight mb-4">
            Garage Doors.
            <br />
            Done Right.
          </h1>
          
          <p className="text-4xl text-text-secondary mb-8 font-medium">
            Installation ● Maintenance ● Repair
          </p>
          
          {!showContact && (
            <button 
              onClick={() => setShowContact(true)}
              className="px-12 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-accent transition-colors text-lg uppercase"
            >
              Get Quote
            </button>
          )}
        </div>

        {/* Right Image Section */}
        <div className="flex-1 flex items-center justify-center pr-12 pl-8 h-full relative">
          <Image
            src={barnettsGarageDoorsLogo}
            alt="Barnett's Garage Doors Logo"
            width={700}
            height={700}
            priority
            className="object-contain"
          />
          
          {/* Contact Form Overlay */}
          {showContact && (
            <div className="absolute inset-0 flex items-center justify-center">
                <Contact />
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
