"use client"

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { NotebookPen, MonitorCog, ChartLine } from "lucide-react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import TechCarousel from "@/components/TechCarousel";


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
        <CardTitle className="text-xl font-bold">Resumodev
          
        </CardTitle>
      </CardHeader>

      <CardContent className="p-0 space-y-6 text-white">
        {/* Experiência e Cursos */}
        <div className="flex flex-col md:flex-row gap-6 text-white pl-6">
          <section className="flex-1">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 ">
              <MonitorCog size={24} />
              Experiência
            </h2>
            <div className="space-y-4 text-white pl-6">
              <div>
                <h3 className="text-lg font-semibold text-white">2022-2024</h3>
                <p>
                  O Novo Nivel <br />
                  Portugal <br />
                  Soluções personalizadas para o sucesso do seu negócio testando o teste.
                </p>
              </div>
            </div>
          </section>

          <section className="flex-1 text-white">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-2">
              <NotebookPen size={24} />
              Cursos
            </h2>
            <div>
              <h3 className="text-lg font-semibold text-white">2019-2020</h3>
              <p >
                Análise e Desenvolvimento de Sistemas <br />
                Barra Funda - São Paulo <br />
                Soluções personalizadas para o sucesso do seu negócio.
              </p>
            </div>
            
          </section>
        </div>

        {/* Habilidades */}
        <div className="border-b border-gray-300 pb-4 pl-6">
          <h2 className="text-xl font-bold">Habilidades</h2>
        </div>

        {/* Codificação e Conhecimentos */}
        <div className="flex flex-col md:flex-row gap-6 pl-6">
          <section className="flex-1 ">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
              <MonitorCog size={24} />
              Codificação
            </h2>

            <div className="grid grid-cols-2 gap-6 max-w-md mx-auto md:mx-0 text-white">
              {skills.map(({ label, value, color }, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-2 text-white"
                  style={{ width: 100, height: 100 }}
                >
                  <CircularProgressbar
                    value={value}
                    text={`${value}%`}
                    styles={buildStyles({
                      pathColor: color,
                      trailColor: darkBlack,
                      textColor: color,
                      strokeLinecap: "round",
                      textSize: "24px",
                    })}
                  />
                  <span className="text-center text-sm font-semibold ">{label}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="flex-1">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
              <NotebookPen size={24} />
              Conhecimentos
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-white">
              {textList.map((item, index) => (
                <li key={index} className="flex items-center gap-2 break-words">
                  <ChartLine className="text-blue-400" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </section>
          

     

        </div>

        <section className="border-b border-gray-300 pb-4 pl-6 flex">
  <h2 className="text-xl font-bold">Tecnologias</h2>
</section>

<TechCarousel />
      </CardContent>
    </Card>
  );
};

export default Resumo;
