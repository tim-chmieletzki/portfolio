"use client";
import { Space_Mono } from "next/font/google";

const space_mono = Space_Mono({
  weight: ["400"],
  subsets: ["latin"],
});

export const Hero = () => {
  const infos = ["TIM", "21", "STUDENT", "BHT"];
  const icons = [];

  return (
    <section className="border border-accentPrim mx-4">
      <div className={`${space_mono.className} h-[320px] leading-5`}>
        <div className="flex flex-col items-start">
          {infos.map((item, index) => (
            <div
              key={index}
              className="py-2 px-5 border border-textSec rounded-xl"
            >
              {item}
            </div>
          ))}
          {icons.map((Icon, index) => (
            <div
              key={index}
              className="p-2 text-background bg-textPrim rounded-full flex items-center justify-center"
            >
              <Icon className="w-5 h-5" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
