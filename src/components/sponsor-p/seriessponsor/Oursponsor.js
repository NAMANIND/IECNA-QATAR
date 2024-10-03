"use client";
import * as React from "react";
import { anton, work_sans } from "@/styles/fonts";
import Button from "@/components/button/Button";
import { motion } from "framer-motion";
import proven from "../../../../public/images/sponsors/uae/proven.png";
import takefluence from "../../../../public/images/sponsors/uae/takef.png";
import socialChameleon from "../../../../public/images/sponsors/uae/socialc.png";
import yalaYala from "../../../../public/images/sponsors/uae/yalayala.png";

import socialCash from "../../../../public/images/sponsors/uae/socialcash.png";
import chef from "../../../../public/images/sponsors/uae/insta.png";
import fly from "../../../../public/images/sponsors/uae/flybharti.png";
import views from "../../../../public/images/sponsors/uae/views.jpg";
import soge from "../../../../public/images/sponsors/uae/soge.png";
import greenroom from "../../../../public/images/sponsors/uae/greenroom.png";

import Image from "next/image";

function Oursponsor2() {
  // Define data for sponsors
  const sponsors = [
    {
      title: "Gold Sponsor",
      name: "Social Chameleon",
      description:
        "Social Chameleon is a leading Search-First Social Media® agency with expertise in social media, search, and content creation. Our teams in London and Sydney work with pioneering brands to deliver measurable outcomes and strategies that get noticed.",
      imageUrl: "/images/sponsors/uae/og/socialc.png",
      logoUrl: socialChameleon,
      link: "https://socialchameleon.com",
    },
    {
      title: "Exhibitor",
      name: "PROVEN 360",
      description:
        "Founded in 2022, PROVEN 360 is a premier digital marketing agency dedicated to helping businesses grow through tailored strategies. They offer website development, social media, SEO, and more to drive engagement and conversions.",
      imageUrl: "/images/sponsors/uae/og/proven.png",
      logoUrl: proven,
      link: "https://www.proven-360.com",
    },
    {
      title: "Solution partner",
      name: "Takefluence",
      description:
        "Takefluence is a platform to collaborate with creators/influencers or even engage customers to create, distribute, amplify content, drive sales with promocode attribution, write reviews and get paid. We automate all the flow from invitation, moderation, reporting to payouts.",
      imageUrl: "/images/sponsors/uae/og/takef.png",
      logoUrl: takefluence,
      link: "https://takefluence.com",
    },
    {
      title: "Exhibitor",
      name: "Yala Yala Media CO. L.L.C",
      description:
        "Yala Yala Media CO. L.L.C, a Dubai-based social media company focused on TikTok. With a founding team from China. They understand TikTok’s commercial potential and aim to foster stronger collaborations with brands and media companies to build a robust MCN ecosystem in the Middle East.",
      imageUrl: "/images/sponsors/uae/og/yalayala.png",
      logoUrl: yalaYala,
      link: "https://yalayala.ae",
    },

    {
      title: "Exhibitor",
      name: "Social Cash",
      description:
        "Social Cash is a UAE-based Influencer Marketing Platform where anyone can become an influencer, regardless of their follower count and get paid based on their social engagement. Social Cash empowers brands to connect with influencers who truly align with their campaign goals through advanced algorithms that match profiles based on demographics, interests, and engagement rates. By focusing on authentic digital word-of-mouth marketing, Social Cash enables brands to run targeted, impactful campaigns with influencers who resonate with their audience, ensuring maximum reach and meaningful connections.",
      imageUrl: "/images/sponsors/uae/og/socialcash.png",
      logoUrl: socialCash,
      link: "https://www.socialcash.ae/",
    },
    {
      title: "TITLE SPONSOR",
      name: "Insta Chef",
      description:
        "InstaChef, Dubai’s top Chef service, offers professional chefs for hire at your home. Available for daily, weekly, monthly needs, or parties, our chefs create delicious, personalized home-cooked meals.",
      imageUrl: "/images/sponsors/uae/og/instachef-og.jpg",
      logoUrl: chef,
      link: "https://www.instachef.ae/",
    },
    {
      title: "PRESENTING PARTNER",
      name: "Fly Bharathi",
      description:
        "Fly Bharathi Aviations and Aeronautics Pvt Ltd (FBAA) is a new Indian aviation company offering airport operations, aircraft MRO, cargo handling, and flight training services.",
      imageUrl: "/images/sponsors/uae/og/flybharathi-og.jpg",
      logoUrl: fly,
      link: "#",
    },
    {
      title: "DATA ANALYTICS PARTNER",
      name: "Views",
      description:
        "Views is a platform designed for charities, non-profits, and social purpose organizations to manage data and measure impact. It features modules for managing contacts, tracking projects, storing evidence, and generating reports.",
      imageUrl: "/images/sponsors/uae/og/views-og.jpg",
      logoUrl: views,
      link: "https://www.viewsapp.net/",
    },
    {
      title: "Lanyard Sponsor",
      name: "Socio Genee",
      description:
        "Socio Genee is the leading platform offering 100% transparency and business growth for Influencers, focused on building communities to enhance and uplift the creator ecosystem.",
      imageUrl: "/images/sponsors/uae/og/soge-og.jpg",
      logoUrl: soge,
      link: "https://sociogenee.com/",
    },
    {
      title: "Solution Partner",
      name: "Greenroom now",
      description:
        "Greenroom is a content and influencer marketing agency based in Bangalore and Mumbai. We believe in turning attention to retention: crafting long-term impact. We are here for brands and creators who are looking to navigate and thrive in the attn economy and work with some of the top brands in the country.",
      imageUrl: "/images/sponsors/uae/og/greenroom-og.png",
      logoUrl: greenroom,
      link: "https://www.greenroomnow.com/",
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
    <div
      className={`flex flex-col items-center sm:p-20 p-5 sm:pt-[50px] bg-white ${work_sans.className}`}
    >
      <motion.div
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
        className={`text-5xl text-center text-black  uppercase leading-[61.92px] max-md:text-4xl ${anton.className} `}
      >
        our series sponsor
      </motion.div>

      <div className="self-stretch mt-24 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-[2%] gap-y-14 flex-wrap  max-md:flex-col max-md:gap-0">
          {/* Map over sponsors array and render sponsor cards dynamically */}
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex flex-wrap w-[32%] max-md:ml-0 max-md:w-full"
            >
              <div
                className="flex flex-col grow pb-11 w-full text-2xl tracking-tighter 
              group
               leading-6 text-white bg-black rounded-[36px] max-md:mt-6"
              >
                <div className="overflow-hidden rounded-t-[36px]">
                  <img
                    loading="lazy"
                    src={sponsor.imageUrl}
                    className="w-full aspect-[2.38] group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
                <motion.div
                  initial={offscreen}
                  whileInView={onscreen}
                  viewport={{ once: true, amount: 0.3 }}
                  className="flex flex-col px-11 mt-7 max-md:px-5"
                >
                  <div className="self-center font-medium text-center">
                    {sponsor.title}
                  </div>
                  <div className="mt-9 font-bold text-[var(--brand)]">
                    {sponsor.name}
                  </div>
                  <div className="mt-6 text-sm tracking-tight leading-5">
                    {sponsor.description}
                  </div>
                  <a href={sponsor.link} target="_blank" rel="noreferrer">
                    <Image
                      loading="lazy"
                      src={sponsor.logoUrl}
                      className="mt-14 max-w-full aspect-[2.13] w-[114px] max-md:mt-10"
                    />
                  </a>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Oursponsor2;
