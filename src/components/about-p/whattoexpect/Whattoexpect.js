"use client";
import * as React from "react";
import Marquee from "react-fast-marquee";
import { anton, work_sans } from "@/styles/fonts";
import { motion } from "framer-motion";
import engaging from "../../../../public/images/aboutnew/uae/ei.jpg";
import curated from "../../../../public/images/aboutnew/uae/cp.jpg";
import future from "../../../../public/images/about/future.jpg";
import top from "../../../../public/images/aboutnew/uae/tni.jpg";

import Image from "next/image";
function Whattoexpect() {
  // Sample data for cards
  const cardData = [
    {
      title: "Meaningful Connections",
      imgUrl: engaging,
      description:
        "Work alongside a vibrant community of marketers, creators, and tech pioneers.",
    },
    {
      title: "Expert Insights",
      imgUrl: curated,
      description:
        "Gain practical strategies and wisdom from industry leaders.",
    },
    {
      title: "Future-Forward Trends",
      imgUrl: future,
      description:
        "Stay on top of emerging technologies and practices shaping marketing's future.",
    },
    {
      title: "Endless Possibilities",
      imgUrl: top,
      description:
        "Whether you're a marketer, influencer, or tech innovator, unlock unlimited opportunities for growth.",
    },
  ];

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
    <div className="flex flex-col items-center  bg-white">
      <div className={`${anton.className} w-full`}>
        <h1 className="uppercase text-5xl relative z-10 text-center text-black leading-[62.4px] max-md:text-4xl max-md:leading-7 max-md:max-w-full max-md:mt-10 max-md:mb-5  top-[132px]">
          What to expect
        </h1>
        <Marquee
          gradient={false}
          speed={50}
          autoFill
          className="self-stretch w-full h-[200px] text-8xl text-center leading-[62.4px] text-black text-opacity-10 max-md:max-w-full "
        >
          <h2> &nbsp; EXPECT EVERYTHING UNEXPECTED!</h2>
        </Marquee>
      </div>

      <motion.div
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
        className={`mt-10 text-xl  sm:px-20 px-5 font-medium tracking-tighter leading-8 text-center text-black max-md:mt-10 max-md:max-w-full ${work_sans.className} `}
      >
        Qatar’s digital landscape is rapidly evolving, driven by a young,
        tech-conscious population and a rising trend of social media engagement.
        This thriving environment offers ample opportunities for innovative
        ideas and strategic partnerships.
      </motion.div>

      <div className="w-full max-md:mt-10 max-md:max-w-full sm:p-20 p-5">
        <div className="grid grid-cols-2 gap-[4%] rounded-[36px] max-md:gap-0 max-md:grid-cols-1">
          {cardData.map((card, index) => (
            <motion.div
              initial={offscreen}
              whileInView={onscreen}
              viewport={{ once: true, amount: 0.3 }}
              key={index}
              className="flex flex-col w-full h-full max-md:ml-0 max-md:w-full py-5 group"
              style={{ display: "flex" }}
            >
              <div
                className="flex overflow-hidden relative flex-col pt-20 max-md:mt-10 max-md:max-w-full h-full rounded-[36px]"
                style={{ flex: 1 }}
              >
                <img
                  src={card.imgUrl.src}
                  alt={card.title}
                  className="object-cover absolute inset-0 size-full group-hover:scale-105 transition-transform duration-300 ease-in-out rounded-[36px]"
                />
                <div
                  className="flex relative flex-col overflow-hidden px-6 pt-20 pb-8 mt-40 rounded-[36px] max-md:px-5 max-md:mt-10 max-md:max-w-full"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
                    flex: 1,
                  }}
                >
                  <div
                    className={`mt-12 text-5xl text-[var(--brand)] uppercase leading-[62px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[58px] ${anton.className}`}
                  >
                    {card.title}
                  </div>
                  <div
                    className={`mt-6 sm:text-2xl text-lg font-medium tracking-tighter leading-7 text-white max-md:max-w-full ${work_sans.className}`}
                  >
                    {card.description}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Whattoexpect;
