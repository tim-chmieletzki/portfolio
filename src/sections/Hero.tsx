"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { MoveLeft, Asterisk } from "lucide-react";

export const Hero = () => {
  const infos = [
    {
      title: "TIM",
      left: "0%",
      top: "calc(100% - 38px)",
    },
    {
      title: "21",
      left: "0%",
      top: "calc(100% - 76px)",
    },
    {
      title: "STUDENT",
      left: "calc(100% - 111px)",
      top: "calc(100% - 76px)",
    },
    {
      title: "BHT",
      left: "calc(100% - 72px)",
      top: "calc(100% - 38px)",
    },
  ];

  const icons = [
    {
      icon: MoveLeft,
      left: "72px",
      top: "calc(100% - 38px)",
    },
    {
      icon: Asterisk,
      left: "calc(100% - 110px)",
      top: "calc(100% - 38px)",
    },
  ];

  const constraintRef = useRef(null);

  return (
    <section className="m-4">
      <div
        className="relative border border-accentPrim h-80 font-spaceMono leading-5"
        ref={constraintRef}
      >
        {infos.map((info) => (
          <motion.div
            key={info.title}
            className="inline-flex absolute items-center px-5 py-2 border border-textSec rounded-xl"
            style={{
              left: info.left,
              top: info.top,
            }}
            drag
            dragConstraints={constraintRef}
          >
            <span>{info.title}</span>
          </motion.div>
        ))}
        {icons.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              className="inline-flex absolute items-center bg-textPrim p-[9px] rounded-full w-fit h-auto text-background"
              style={{
                left: item.left,
                top: item.top,
              }}
              drag
              dragConstraints={constraintRef}
            >
              <Icon className="w-5 h-auto" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
