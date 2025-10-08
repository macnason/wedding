"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FadeInView from "../components/animations/FadeInView";
import HoverScale from "../components/animations/HoverScale";
import StaggerContainer, {
  itemVariants,
} from "../components/animations/StaggerContainer";

export default function HomePage() {
  const [isRSVPModalOpen, setIsRSVPModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section id="hero" className="min-h-screen relative overflow-hidden">
        {/* Background layers matching Figma exactly */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Solid background color */}
          <div className="absolute bg-[#4a1923] inset-0" />

          {/* Background image at 10% opacity - using hero.png */}
          <div className="absolute inset-0 opacity-10 overflow-hidden">
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage: "url('/images/hero.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>

          {/* Gradient overlay matching Figma */}
          <div className="absolute bg-gradient-to-t from-[rgba(108,104,84,0)] from-[40.174%] to-[rgba(74,25,35,0.5)] to-[84.201%] inset-0" />
        </div>

        {/* Navigation - centered at top as in Figma */}
        <nav className="absolute z-50 top-6 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center gap-12 bg-transparent rounded-full px-8 py-0">
            <HoverScale>
              <button
                onClick={() => scrollToSection("celebration")}
                className="text-fg-inverted text-[16px] font-domaine font-medium tracking-[0.32px] leading-none hover:opacity-80 transition-opacity"
              >
                Details
              </button>
            </HoverScale>
            <HoverScale>
              <button
                onClick={() => scrollToSection("moments")}
                className="text-fg-inverted text-[16px] font-domaine font-medium tracking-[0.32px] leading-none hover:opacity-80 transition-opacity"
              >
                Moments
              </button>
            </HoverScale>
            <HoverScale>
              <button
                onClick={() => scrollToSection("moments")}
                className="text-fg-inverted text-[16px] font-domaine font-medium tracking-[0.32px] leading-none hover:opacity-80 transition-opacity"
              >
                Jukebox
              </button>
            </HoverScale>
            <HoverScale>
              <button
                onClick={() => setIsRSVPModalOpen(true)}
                className="bg-fg-inverted text-fg-accent px-5 py-4 text-[16px] font-domaine font-medium tracking-[0.32px] leading-none rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-fg-inverted/20"
              >
                RSVP
              </button>
            </HoverScale>
          </div>
        </nav>

        {/* Hero Content - centered layout matching Figma */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center">
            {/* Names - centered as single line */}
            <FadeInView delay={0.2}>
              <h1 className="text-fg-inverted text-[245.592px] font-editorial font-thin italic leading-none mb-4">
                Olivia & Mac
              </h1>
            </FadeInView>

            {/* Date - centered below names */}
            <FadeInView delay={0.6}>
              <p className="text-fg-inverted text-[52px] font-domaine font-normal leading-[1.1]">
                29.03.2026
              </p>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* The Celebration Section */}
      <section
        id="celebration"
        className="py-[200px] px-0 bg-[#f2efe3] flex flex-col items-center justify-center"
      >
        <div className="max-w-full w-full flex flex-col items-center gap-[120px]">
          <FadeInView>
            <div className="text-center flex flex-col gap-[20px] items-center">
              <h2 className="font-editorial text-[96px] font-normal italic leading-[1.1] text-[#6c6854]">
                The Celebration
              </h2>
              <p className="font-domaine text-[36px] font-normal leading-[1.3] text-[#4b4945]">
                Saturday, June 15th, 2024
              </p>
              <div className="w-[96px] h-px bg-[#6c6854]"></div>
            </div>
          </FadeInView>

          {/* Event Schedule */}
          <FadeInView delay={0.2}>
            <div className="bg-[#fbf9ee] rounded-[20px] border border-dashed border-[#6c6854] p-0 max-w-[720px] relative">
              <StaggerContainer>
                {[
                  {
                    time: "1 pm",
                    title: "Ceremony",
                    location: "THE trust · Flinders lane",
                    description: "Garden ceremony with string quartet",
                  },
                  {
                    time: "2 pm",
                    title: "Ceremony",
                    location: "THE trust · Flinders lane",
                    description: "Garden ceremony with string quartet",
                  },
                  {
                    time: "3 pm",
                    title: "Ceremony",
                    location: "THE trust · Flinders lane",
                    description: "Garden ceremony with string quartet",
                  },
                  {
                    time: "4 pm",
                    title: "Ceremony",
                    location: "THE trust · Flinders lane",
                    description: "Garden ceremony with string quartet",
                  },
                ].map((event, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex gap-[40px] items-start px-[56px] py-[40px] pb-[48px] border-b border-dashed border-[#6c6854] last:border-b-0"
                  >
                    <div className="w-[104px] flex-shrink-0">
                      <p className="font-editorial text-[36px] font-normal italic leading-[1.3] text-[#6c6854]">
                        {event.time}
                      </p>
                    </div>
                    <div className="flex-1">
                      <div className="mb-[20px] flex flex-col gap-[4px]">
                        <p className="font-domaine text-[36px] font-normal leading-[1.3] text-[#6c6854]">
                          {event.title}
                        </p>
                        <p className="font-grotesk text-[14px] font-normal uppercase tracking-[1.96px] leading-[1.3] text-[#4b4945]">
                          {event.location}
                        </p>
                      </div>
                      <p className="font-domaine text-[20px] font-normal leading-[1.3] text-[#222222]">
                        {event.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </StaggerContainer>
            </div>
          </FadeInView>

          {/* Maps Button */}
          <FadeInView delay={0.4}>
            <HoverScale>
              <button className="bg-[#fbf9ee] flex items-center gap-[8px] justify-center px-[32px] py-[24px] rounded-[16px] hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#4b4945]/20">
                <span className="text-[26px] text-[#4b4945] tracking-[0.52px]">
                  📍
                </span>
                <span className="font-domaine text-[32px] font-medium tracking-[0.64px] text-[#222222] text-shadow-sm">
                  Maps
                </span>
              </button>
            </HoverScale>
          </FadeInView>
        </div>
      </section>

      {/* Moments Section */}
      <section
        id="moments"
        className="py-40 px-0 bg-bg-tint relative border-t border-fg-accent"
      >
        <div className="max-w-full w-full flex flex-col items-center gap-32">
          {/* Tilted Photos */}
          <FadeInView>
            <div className="relative h-[600px] w-[800px] mb-20">
              <motion.div
                className="absolute w-[640px] h-[480px] bg-gray-200 rounded-lg shadow-lg"
                style={{
                  transform: "rotate(-7.5deg)",
                  top: "20px",
                  left: "10px",
                  background: "linear-gradient(45deg, #e5e5e5, #f5f5f5)",
                }}
                whileHover={{ scale: 1.02, rotate: -6 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg border-8 border-bg-base shadow-xl" />
              </motion.div>
              <motion.div
                className="absolute w-[696px] h-[480px] bg-gray-300 rounded-lg shadow-lg"
                style={{
                  transform: "rotate(10.7deg)",
                  top: "0px",
                  left: "0px",
                  background: "linear-gradient(45deg, #d5d5d5, #e5e5e5)",
                }}
                whileHover={{ scale: 1.02, rotate: 12 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500 rounded-lg border-8 border-bg-base shadow-xl" />
              </motion.div>
            </div>
          </FadeInView>

          <FadeInView delay={0.2}>
            <div className="text-center mb-20">
              <h2 className="section-heading mb-12">Moments</h2>
              <p className="section-subtitle">Share your highlights with us</p>
            </div>
          </FadeInView>

          <FadeInView delay={0.4}>
            <HoverScale>
              <button className="btn-accent">Upload</button>
            </HoverScale>
          </FadeInView>
        </div>
      </section>

      {/* RSVP Section */}
      <section
        id="rsvp"
        className="py-80 px-0 bg-bg-feature relative overflow-hidden"
        style={{ borderTopLeftRadius: "200px" }}
      >
        {/* Background illustration */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/3 w-[820px] h-[1050px] opacity-30">
          <div className="w-full h-full bg-gradient-to-t from-fg-inverted/10 to-transparent rounded-full" />
        </div>

        <div className="relative z-10 max-w-full w-full flex flex-col items-center gap-80">
          <FadeInView>
            <div className="text-center">
              <h2 className="section-heading text-fg-inverted mb-14">RSVP</h2>
              <p className="cta-heading max-w-[555px]">
                Join us on our special day
              </p>
            </div>
          </FadeInView>

          <FadeInView delay={0.2}>
            <HoverScale>
              <button
                onClick={() => setIsRSVPModalOpen(true)}
                className="btn-secondary"
              >
                RSVP
              </button>
            </HoverScale>
          </FadeInView>
        </div>
      </section>

      {/* RSVP Modal - keeping existing functionality */}
      {isRSVPModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsRSVPModalOpen(false);
            }
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-bg-base rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="section-heading text-fg-accent">RSVP</h2>
                <button
                  onClick={() => setIsRSVPModalOpen(false)}
                  className="text-fg-primary hover:text-fg-accent text-2xl leading-none p-2 hover:bg-fg-primary/5 rounded-full transition-colors"
                >
                  ×
                </button>
              </div>
              <p className="section-subtitle text-center mb-8">
                We can&apos;t wait to celebrate with you!
              </p>
              <div className="text-center">
                <p className="event-description mb-8">
                  Please fill out our RSVP form to let us know you&apos;ll be
                  joining us for our special day.
                </p>
                <HoverScale>
                  <button className="btn-primary">Coming Soon</button>
                </HoverScale>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
