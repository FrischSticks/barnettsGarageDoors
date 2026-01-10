"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Script from "next/script";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const [buttonText, setButtonText] = useState("Send");
  const [isMessageSent, setIsMessageSent] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

  const submitForm = (data: FormData) => {
    setButtonText("Sending...");
    const templateParams = { name: data.name, email: data.email, message: data.message, userEmail: data.email };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {

        setIsMessageSent(true);
        setButtonText("Message Sent! ✅");
        reset();
        setTimeout(() => { setButtonText("Send"); setIsMessageSent(false); }, 5000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setButtonText("Message Failed ❌");
        setTimeout(() => { setButtonText("Send"); setIsMessageSent(false); }, 5000);
      });
  };

  return (
    <>
      {/* Structured Data for LocalBusiness + ContactPoint */}
      <Script
        type="application/ld+json"
        strategy="afterInteractive"
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
            "openingHours": "Mo-Su 07:00-22:00",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "telephone": "+1-765-499-3971",
              "email": "TBarnett1988@gmail.com",
              "availableLanguage": "English"
            },
            "sameAs": [
              "https://www.facebook.com/p/Barnetts-garage-doors-61575573969998/"
            ]
          })
        }}
      />

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .fade-in {
          animation: fadeIn 0.6s ease-in;
        }
      `}</style>

      <div className="w-full p-10 fade-in">
        <form
          id="contactForm"
          onSubmit={handleSubmit(submitForm)}
          className="flex flex-col max-w-3xl mx-auto bg-neutral-offwhite p-6 rounded-lg shadow-lg border-secondary-dark border-4"
          noValidate
          style={{ minHeight: "450px" }}
        >
          <label htmlFor="user_name" className="mt-0 mb-1 font-bold text-lg">Name</label>
          <input
            id="user_name"
            aria-required="true"
            {...register("name", { required: "Name is required" })}
            className="border border-gray-300 rounded p-2"
          />
          {errors.name && <p role="alert" className="text-red-500">{errors.name.message}</p>}

          <label htmlFor="user_email" className="mt-4 mb-1 font-bold text-lg">Email</label>
          <input
            id="user_email"
            type="email"
            aria-required="true"
            {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } })}
            className="border border-gray-300 rounded p-2"
          />
          {errors.email && <p role="alert" className="text-red-500">{errors.email.message}</p>}

          <label htmlFor="message" className="mt-4 mb-1 font-bold text-lg">Message</label>
          <textarea
            id="message"
            aria-required="true"
            {...register("message", { required: "Message is required" })}
            className="border border-gray-300 rounded p-2 h-64"
            style={{ minHeight: "200px" }}
          />
          {errors.message && <p role="alert" className="text-red-500">{errors.message.message}</p>}

          <input
            type="submit"
            value={buttonText}
            disabled={buttonText === "Sending..."}
            className={`mt-3 px-4 py-2 text-white font-semibold uppercase rounded shadow-sm shadow-[#280C04] transition
              ${isMessageSent
                ? "bg-green-600 hover:bg-green-700 cursor-default"
                : buttonText === "Sending..."
                ? "bg-gray-500 cursor-wait"
                : buttonText.includes("Failed")
                ? "bg-red-600 hover:bg-red-700 cursor-pointer"
                : "bg-primary hover:bg-accent cursor-pointer"
              }`}
          />
        </form>

        <p className="text-lg italic font-bold text-primary flex justify-end mt-4 max-w-3xl mx-auto">
          <a href="tel:7654993971" className="hover:underline hover:text-accent" aria-label="Call Barnett's Garage Doors">
            (765) 499-3971
          </a>
        </p>
      </div>
    </>
  );
};

export default Contact;