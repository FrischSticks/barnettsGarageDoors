"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

interface GarageDoorCardProps {
  title: string;
  description: string;
  imageSrc: string;
  href?: string;
  featured?: boolean;
  badge?: string; // 👈 flexible badge text
}

const GarageDoorCard: React.FC<GarageDoorCardProps> = ({
  title,
  description,
  imageSrc,
  href = "#",
  featured = false,
  badge,
}) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`h-full rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl
        ${featured ? "ring-2 ring-primary" : ""}
      `}
    >
      <Link href={href} className="flex flex-col h-full">

        {/* Image */}
        <div className="relative w-full aspect-4/3">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />

          {/* Optional Badge */}
          {badge && (
            <span className="absolute top-4 right-4 z-10 rounded-full bg-primary px-4 py-1 text-sm font-semibold text-white shadow-md">
              {badge}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col grow p-6">
          <h3 className="text-2xl font-bold text-text-primary mb-2">
            {title}
          </h3>

          <p className="text-text-secondary grow">
            {description}
          </p>

          {/* Desktop CTA */}
          <span className="mt-4 hidden md:inline-block text-primary font-semibold hover:underline">
            View Details →
          </span>
        </div>

      </Link>
    </motion.div>
  );
};

export default GarageDoorCard;
