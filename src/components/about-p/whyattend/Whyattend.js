"use client";
import * as React from "react";
import { useState } from "react";

import { anton, work_sans } from "@/styles/fonts";
import { motion } from "framer-motion";
import Image from "next/image";
import networking from "../../../../public/images/aboutnew/uae/networking.jpg";
import insights from "../../../../public/images/aboutnew/uae/ii.jpg";
import buiness from "../../../../public/images/aboutnew/uae/bo.jpg";
import exclusive from "../../../../public/images/aboutnew/exclusive.jpg";
import awardnre from "../../../../public/images/aboutnew/uae/awardnre.jpg";

function Whyattend() {
  const cardData = [
    {
      title: "Enhance Your\nKnowledge",
      imageUrl: networking,
      text: "Benefit from exclusive perspectives shared by marketing pioneers and tech leaders.",
    },
    {
      title: "Broaden Your\nConnections",
      imageUrl: insights,
      text: "Network with top brands, creators, and innovators in the industry.",
    },
    {
      title: "Seize New\nOpportunities",
      imageUrl: buiness,
      text: "Explore exciting collaborations and partnerships to take your business or career to the next level.",
    },
    {
      title: "Stay Ahead\nof the Curve",
      imageUrl: awardnre,
      text: "Gain insights into the latest influencer marketing trends shaping the global scene.",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const offscreen = {
    y: 100,
    opacity: 0,
  };

  const onscreen = {
    y: 0,
    opacity: 1,

    transition: {
      delay: 0.1,
      duration: 0.41,
    },
  };

  return (
    <div
      className={`flex flex-col items-center sm:px-10 px-5 sm:py-20 py-5 bg-white ${work_sans.className} `}
    >
      <motion.div
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
        className={`text-5xl text-center text-black uppercase leading-[61.92px] max-md:text-4xl ${anton.className} `}
      >
        WHY ATTEND?
      </motion.div>
      <motion.div
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
        className="self-stretch mt-20 w-full sm:text-4xl text-xl italic font-bold tracking-tighter leading-7 text-center text-black uppercase max-md:mt-10 max-md:max-w-full  "
      >
        <span className="font-semibold  italic">
          Empower Your Influence, Expand Your Reach! Countdown to Qatar! Get
          ready to elevate your influence with us!
          <br /> WE ARE BRINGING TOGETHER OVER{" "}
        </span>
        <span className="font-semibold italic text-[#51B6FF]">
          100+ Marketers
        </span>
        <span className="font-semibold italic"> & </span>
        <span className="font-semibold italic text-[#51B6FF]">
          100+ Influencers!
        </span>
      </motion.div>
      <motion.div
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
        className="mt-11 text-2xl sm:px-10 px-0 mb-28 font-medium tracking-tighter leading-8 text-center text-black max-md:mt-10 max-md:max-w-full"
      >
        Discover a unique opportunity to lead and innovate in one of the world’s
        most dynamic digital landscapes. This event is your gateway to influence
        and industry leadership, far beyond the typical conference experience.
      </motion.div>
      {/* Render each card dynamically */}
      <div className="self-stretch mt-2 w-full max-md:max-w-full">
        <div className="flex gap-y-5 sm:px-[5%] px-[0%] gap-x-[6%] flex-wrap max-md:gap-0 ">
          <div className="grid grid-cols-2 gap-8 md:px-4 md:py-12 mx-auto max-w-7xl py-0 px-0 max-md:grid-cols-1">
            {cardData.map((card, index) => (
              <motion.div
                key={index}
                initial={offscreen}
                whileInView={onscreen}
                viewport={{ once: true, amount: 0.3 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`transform transition-all duration-300  ${
                  hoveredIndex === index ? "scale-[1.02]" : ""
                }`}
              >
                <div
                  className=" bg-white mis group hover:bg-black/90 transition-all duration-500 hover:text-white text-wrap rounded-3xl overflow-hidden h-full shadow-[0_0_30px_0_rgba(81,182,255,0.3)]
            hover:shadow-[0_0_30px_0_rgba(81,182,255,0.3)]
    
            "
                >
                  {/* Card Header */}
                  <div className="p-8 md:p-10">
                    <h2
                      className={`text-7xl max-md:text-4xl font-bold text-[#51B6FF] tracking-tight leading-tight
                    ${anton.className}
                    uppercase   w-full   group-hover:text-[#ccff00]
                    `}
                    >
                      {card.title}
                    </h2>
                  </div>

                  {/* Card Image */}
                  <div className="relative px-4">
                    <div className="relative overflow-hidden rounded-2xl">
                      <img
                        src={card.imageUrl.src}
                        alt={card.title}
                        width={600}
                        height={300}
                        className="w-full  object-cover h-[300px]  transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3"
                      />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-8 md:p-10">
                    <p className=" text-neutral-950 text-xl  font-medium group-hover:text-white leading-7">
                      {card.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whyattend;
