"use client"

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { NotebookPen, MonitorCog, ChartLine } from "lucide-react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import TechCarousel from "@/components/TechCarousel";
import { motion } from "framer-motion";


const textList = [
  "Desenvolvimento WordPress",
  "Instalação de Hospedagem",
  "Responsivo e pronto para dispositivos móveis",
  "Serviços de publicidade",
  "HTML, CSS, jQuery",
  "Marketing de mecanismos de pesquisa",
];

const skills = [
  { label: "SQL/PHP", value: 80, color: "#40F708" },
  { label: "Angular / JS", value: 95, color: "#40F708" },
  { label: "HTML / CSS", value: 95, color: "#40F708" },
  { label: "Wordpress", value: 93, color: "#40F708" },
];

const darkBlack = "#1a1a1a";

const Resumo = () => {
  return (
    <Card className="text-muted-foreground pb-4 w-auto max-w-4xl sm:h-[480px] overflow-y-auto bg-[#1D252B] border-none">
      <CardHeader className="flex flex-row items-center justify-between border-b bordeackr-bl text-white  ">
        <CardTitle className="text-xl font-bold">Resumo

        </CardTitle>
      </CardHeader>

      <CardContent className="p-0 space-y-10 text-white">
  {/* Experiência e Cursos */}
  <div className="flex flex-col md:flex-row gap-6 px-6">
    {/* Experiência */}
    <div className="flex-1 bg-[#1D252B] border-l-4 border-[#40F708] rounded-xl p-6 hover:shadow-[0_0_15px_#40F708] transition">
      <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
        <span className="p-2 rounded-full bg-[#40F708]/20">
          <MonitorCog className="text-[#40F708]" size={24} />
        </span>
        Experiência
      </h2>
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">2022–2024</h3>
        <p className="opacity-90">
          O Novo Nível <br />
          Portugal <br />
          Soluções personalizadas para o sucesso do seu negócio.
        </p>
      </div>
    </div>

    {/* Cursos */}
    <div className="flex-1 bg-[#1D252B] border-l-4 border-[#40F708] rounded-xl p-6 hover:shadow-[0_0_15px_#40F708] transition">
      <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
        <span className="p-2 rounded-full bg-[#40F708]/20">
          <NotebookPen className="text-[#40F708]" size={24} />
        </span>
        Cursos
      </h2>
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">2019–2020</h3>
        <p className="opacity-90">
          Análise e Desenvolvimento de Sistemas <br />
          Barra Funda – São Paulo <br />
          Soluções personalizadas para o sucesso do seu negócio.
        </p>
      </div>
    </div>
  </div>

  {/* Habilidades */}
  <div className="border-b border-gray-700 pb-4 px-6">
    <h2 className="text-xl font-bold">Habilidades</h2>
  </div>

  {/* Codificação e Conhecimentos */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
  {/* Codificação */}
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="bg-[#1D252B] rounded-xl p-6 border border-gray-800 hover:shadow-[0_0_15px_#40F708] transition"
  >
    <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
      <MonitorCog size={26} className="text-[#40F708]" />
      Codificação
    </h2>

    <div className="grid grid-cols-2 gap-6 place-items-center">
      {skills.map(({ label, value, color }, i) => (
        <div
          key={i}
          className="flex flex-col items-center gap-3 w-28 h-28"
        >
          <CircularProgressbar
            value={value}
            text={`${value}%`}
            styles={buildStyles({
              pathColor: color,
              trailColor: "#0f0f0f",
              textColor: color,
              strokeLinecap: "round",
              textSize: "20px",
            })}
          />
          <span className="text-sm font-medium text-gray-200">{label}</span>
        </div>
      ))}
    </div>
  </motion.section>

  {/* Conhecimentos */}
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    viewport={{ once: true }}
    className="bg-[#1D252B] rounded-xl p-6 border border-gray-800 hover:shadow-[0_0_15px_#40F708] transition"
  >
    <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
      <NotebookPen size={26} className="text-[#40F708]" />
      Conhecimentos
    </h2>

    <ul className="space-y-3">
      {textList.map((item, index) => (
        <motion.li
          key={index}
          whileHover={{ scale: 1.05, x: 5 }}
          className="flex items-center gap-2 text-gray-200"
        >
          <ChartLine className="text-blue-400" size={20} />
          {item}
        </motion.li>
      ))}
    </ul>
  </motion.section>
</div>

  {/* Tecnologias */}
  <section className="border-b border-gray-700 pb-4 px-6">
    <h2 className="text-xl font-bold">Tecnologias</h2>
  </section>

  <TechCarousel />
</CardContent>
    </Card>
  );
};

export default Resumo;
