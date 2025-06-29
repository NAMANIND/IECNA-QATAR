import * as React from "react";
import { anton } from "@/styles/fonts";
import headimg from "../../../public/images/head/uae/about.jpg";
import awards from "../../../public/images/head/awards-hero.jpg";
import sponsors from "../../../public/images/head/uae/sponsors.jpg";
import speakers from "../../../public/images/head/speakers-hero.jpg";
import register from "../../../public/images/head/uae/register.jpg";
import register2 from "../../../public/images/head/register.png";
import votee from "../../../public/images/head/vote2.png";
import voteb from "../../../public/images/head/voteb.png";
import Image from "next/image";

function Headtop({ head, opacity }) {
  const lower = head.toLowerCase();
  let url = headimg;

  if (lower === "awards") {
    url = awards;
  }
  if (lower === "sponsors") {
    url = sponsors;
  }
  if (lower === "speakers") {
    url = speakers;
  }
  if (lower === "register") {
    url = register;
  }
  if (lower === "voting") {
    url = votee;
  }
  if (lower === "event registration") {
    url = register2;
  }
  if (lower === "vote for me") {
    url = voteb;
  }
  return (
    <main className="flex overflow-hidden relative flex-col pt-20 text-9xl text-center h-[80vh] md:min-h-[574px] text-white">
      <img
        src={url.src}
        className={`object-cover  absolute inset-0 w-full h-full  object-${
          lower === "event registration" ? "top" : "center"
        }  `}
        alt={head}
        width={1920}
        height={2080}
      />
      <h1
        className={`relative z-50  top-[40%]  -translate-y-1/2 sm:top-1/2 md:mt-0 mt-0 w-full max-md:max-w-full text-6xl md:text-9xl uppercase  ${
          anton.className
        }
        ${opacity ? "opacity-0" : "opacity-100"}
        
         `}
        style={{ textShadow: "0 44px 44px rgba(0, 0, 0, 0.85)" }}
      >
        {head}
      </h1>
      <section
        className="absolute bottom-0 w-full md:min-h-[25%] h-[50%] max-md:min-h-auto"
        style={{
          background: "linear-gradient(0deg, #000, transparent)",
        }}
      />
    </main>
  );
}

export default Headtop;
