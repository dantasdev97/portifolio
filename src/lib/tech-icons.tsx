// src/lib/tech-icons.ts
import { FaReact, FaNodeJs, FaWordpress, FaHtml5, FaCss3Alt } from "react-icons/fa"
import { SiMongodb, SiExpress } from "react-icons/si"
import { SiElementor } from "react-icons/si" // Elementor não tem no Fa, mas existe em Simple Icons

// Tipagem correta: Record<string, React.ReactNode>
export const techIcons: Record<string, React.ReactNode> = {
  React: <FaReact className="text-sky-400 text-2xl" />,
  "Node.js": <FaNodeJs className="text-green-500 text-2xl" />,
  WordPress: <FaWordpress className="text-blue-500 text-2xl" />,
  Elementor: <SiElementor className="text-pink-500 text-2xl" />,
  "HTML/CSS": <FaHtml5 className="text-orange-500 text-2xl" />,
  CSS: <FaCss3Alt className="text-blue-400 text-2xl" />,
  MongoDB: <SiMongodb className="text-green-600 text-2xl" />,
  Express: <SiExpress className="text-gray-400 text-2xl" />,
}
