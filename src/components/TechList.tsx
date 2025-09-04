"use client"
import React from "react"

import { motion } from "framer-motion"
import { FaReact, FaNodeJs, FaWordpress, FaHtml5, FaCss3Alt } from "react-icons/fa"
import { SiElementor } from "react-icons/si"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

type TechListProps = {
  tecnologias: string[]
}

const techIcons: Record<string, JSX.Element> = {
  React: <FaReact className="text-sky-400 text-2xl" />,
  "Node.js": <FaNodeJs className="text-green-500 text-2xl" />,
  WordPress: <FaWordpress className="text-blue-500 text-2xl" />,
  Elementor: <SiElementor className="text-pink-500 text-2xl" />,
  "HTML/CSS": <FaHtml5 className="text-orange-500 text-2xl" />,
  CSS: <FaCss3Alt className="text-blue-400 text-2xl" />,
}

export function TechList({ tecnologias }: TechListProps) {
  return (
    <TooltipProvider>
      <ul className="flex flex-wrap gap-4">
        {tecnologias.map((tech) => (
          <motion.li
            key={tech}
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="cursor-pointer">
                  {techIcons[tech] || (
                    <span className="text-sm px-2 py-1 bg-gray-700 rounded">{tech}</span>
                  )}
                </div>
              </TooltipTrigger>
              <TooltipContent>{tech}</TooltipContent>
            </Tooltip>
          </motion.li>
        ))}
      </ul>
    </TooltipProvider>
  )
}
