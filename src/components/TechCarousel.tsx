"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPhp } from "react-icons/fa";
import { SiTypescript, SiMysql, SiNextdotjs } from "react-icons/si";

const icons = [
  { icon: <FaReact size={40} color="#61DBFB" />, name: "React" },
  { icon: <SiNextdotjs size={40} color="white" />, name: "Next.js" },
  { icon: <SiTypescript size={40} color="#3178c6" />, name: "TypeScript" },
  { icon: <FaNodeJs size={40} color="#3c873a" />, name: "Node.js" },
  { icon: <SiMysql size={40} color="#00758f" />, name: "MySQL" },
  { icon: <FaPhp size={40} color="#8993be" />, name: "PHP" },
  { icon: <FaHtml5 size={40} color="#e34c26" />, name: "HTML5" },
  { icon: <FaCss3Alt size={40} color="#264de4" />, name: "CSS3" },
];

export default function TechCarousel() {
  return (
    <div className="relative w-full overflow-hidden py-6 bg-[#1D252B]">
      <motion.div
        className="flex gap-12"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {/* duplicar lista para efeito infinito */}
        {[...icons, ...icons].map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center min-w-[80px]"
          >
            {item.icon}
            <span className="text-sm text-white mt-2">{item.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
