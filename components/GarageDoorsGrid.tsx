"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import GarageDoorCard from "./GarageDoorCard";

const garageDoors = [
  {
    title: "Raised Panel Doors",
    description: "A timeless garage door style that blends durability with curb appeal.",
    imageSrc: "/images/doors/raised-panel.jpg",
    href: "/garage-doors/raised-panel",
    badge: "Most Popular ⭐"
  },
  {
    title: "Carriage House Doors",
    description: "Old-world charm with modern materials and smooth operation.",
    imageSrc: "/images/doors/carriage-house.jpg",
    href: "/garage-doors/carriage-house",
  },
  {
    title: "Modern Flush Doors",
    description: "Clean lines and contemporary design for modern homes.",
    imageSrc: "/images/doors/flush.jpg",
    href: "/garage-doors/modern",
  },
  {
    title: "Raised Panel Doors",
    description: "A timeless garage door style that blends durability with curb appeal.",
    imageSrc: "/images/doors/raised-panel.jpg",
    href: "/garage-doors/raised-panel",
  },
  {
    title: "Carriage House Doors",
    description: "Old-world charm with modern materials and smooth operation.",
    imageSrc: "/images/doors/carriage-house.jpg",
    href: "/garage-doors/carriage-house",
  },
  {
    title: "Modern Flush Doors",
    description: "Clean lines and contemporary design for modern homes.",
    imageSrc: "/images/doors/flush.jpg",
    href: "/garage-doors/modern",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const GarageDoorGrid = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-20">

      {/* Grid of Garage Doors */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {garageDoors.map((door, index) => (
          <motion.div key={door.title + index} variants={itemVariants}>
            <GarageDoorCard {...door} />
          </motion.div>
        ))}
      </motion.div>

      {/* Manufacturer Logos */}
      <div className="flex flex-wrap justify-center items-center gap-16 mt-16">
        {/* First Logo */}
        <a
          href="https://doorlinkmfg.com/design-shop/"
          target="_blank"
          rel="noopener noreferrer"
          className="block max-w-25 hover:scale-105 transition-transform"
        >
          <Image
            src="/images/doorlink.png"
            alt="DoorLink Manufacturer"
            width={150}
            height={150}
            className="object-contain"
          />
        </a>

        {/* Second Logo */}
        <a
          href="https://invictadoor.renoworks.com/pages/project/gallery"
          target="_blank"
          rel="noopener noreferrer"
          className="block max-w-25 hover:scale-105 transition-transform"
        >
          <Image
            src="/images/invicta-garage-doors.png"
            alt="Invicta Garage Doors"
            width={150}
            height={150}
            className="object-contain"
          />
        </a>
      </div>
    </section>
  );
};

export default GarageDoorGrid;