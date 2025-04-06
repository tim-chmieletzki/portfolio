"use client";
import { motion } from "framer-motion";
import { MoveRight, Asterisk } from "lucide-react";

export const Hero = () => {
  const infos = ["TIM", "21", "STUDENT", "BHT"];
  const icons = [MoveRight, Asterisk];

  return (
    <section className="mx-4 border border-accentPrim">
      <div className="w-auto h-80 leading-5">
        <div>
          {infos.map((item, index) => (
            <div
              key={index}
              className="inline-flex items-center px-5 py-2 border border-textSec rounded-xl"
            >
              {item}
            </div>
          ))}
          {icons.map((Icon, index) => (
            <div
              key={index}
              className="inline-flex items-center bg-textPrim p-2 rounded-full w-fit h-auto text-background"
            >
              <Icon />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
