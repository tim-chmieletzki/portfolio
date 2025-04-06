"use client";
import { Space_Mono } from "next/font/google";
import { motion } from "framer-motion";
import StarIcon from "@/assets/icons/star.svg";
import ArrowRight from "@/assets/icons/arrow-right.svg";

const space_mono = Space_Mono({
  weight: ["400"],
  subsets: ["latin"],
});

export const Hero = () => {
  const infos = ["TIM", "21", "STUDENT", "BHT"];
  const icons = [StarIcon, ArrowRight];

  return (
    <section className="mx-4 border border-accentPrim">
      <div className={`${space_mono.className} h-[320px] leading-5`}>
        <div className="flex flex-col">
          {infos.map((item, index) => (
            <div
              key={index}
              className="px-5 py-2 border border-textSec rounded-xl max-w-fit"
            >
              {item}
            </div>
          ))}
          {icons.map((Icon, index) => (
            <div
              key={index}
              className="flex justify-center items-center bg-textPrim p-2 rounded-full max-w-fit text-background"
            >
              <Icon />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
