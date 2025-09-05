"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { projetos, categorias } from "@/lib/data-projetos"

export default function PortfolioPage() {
  const [filtroAtivo, setFiltroAtivo] = useState("Todos")

  const projetosFiltrados = filtroAtivo === "Todos" 
    ? projetos 
    : projetos.filter(projeto => projeto.category === filtroAtivo)

  return (
    <div className="w-full bg-transparent text-foreground flex items-center justify-center">
      {/* Container principal com Card centralizado */}
      <div className="w-full max-w-4xl mx-auto">
        <Card className="text-muted-foreground pb-4 w-full overflow-y-auto h-auto sm:h-[480px] sm:overflow-auto bg-[#1D252B] border-none">
          <CardHeader className="flex flex-row items-center justify-between border-b border-gray-600 text-white p-4 sm:p-6">
            <CardTitle className="text-xl font-bold flex-shrink-0 g">
              <h1>Portfólio</h1>
            </CardTitle>
            
            {/* Filtros no header - Scroll horizontal invisível */}
            <div className="flex gap-2 overflow-x-auto scrollbar-hide min-w-0 flex-1 justify-end">
              {categorias.map((categoria) => (
                <button
                  key={categoria}
                  onClick={() => setFiltroAtivo(categoria)}
                  className={`px-3 sm:px-4 py-1.5 rounded-full transition-all duration-300 text-sm font-medium whitespace-nowrap flex-shrink-0 ${
                    filtroAtivo === categoria
                      ? "bg-green-500 text-white shadow-lg scale-105"
                      : "bg-gray-600 text-gray-200 hover:bg-green-500 hover:text-white hover:scale-105"
                  }`}
                >
                  {categoria}
                </button>
              ))}
            </div>
          </CardHeader>
          
          <CardContent className="text-sm leading-relaxed p-0 text-white">
            {/* Grid de Projetos - Cards padronizados */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6">
              {projetosFiltrados.map((projeto) => (
                <Link
                  key={projeto.id}
                  href={`/portfolio/${projeto.id}`}
                  className="group block"
                >
                  <div className=" rounded-lg overflow-hidden transition-all duration-300 group-hover:-translate-y-1 h-full">
                    {/* Imagem - Altura fixa */}
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={projeto.image}
                        alt={projeto.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{ objectFit: "cover" }}
                        className="transition-transform duration-300 group-hover:scale-105"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Conteúdo - Altura mínima fixa */}
                    <div className="p-4 flex flex-col h-40">
                      <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-white transition-colors line-clamp-1">
                        {projeto.title}
                      </h3>
                      
                      <span className="inline-block bg-primary text-background px-3 py-1 rounded-full text-sm mb-3 w-fit">
                        {projeto.category}
                      </span>

                      {projeto.description && (
                        <p className="text-gray-300 text-sm line-clamp-2 mb-3 flex-1">
                          {projeto.description.replace(/<[^>]*>/g, '').substring(0, 80)}...
                        </p>
                      )}

                      {/* Tecnologias - Sempre no final */}
                      {projeto.tecnologias && projeto.tecnologias.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {projeto.tecnologias.slice(0, 2).map((tech) => (
                            <span
                              key={tech}
                              className="bg-gray-600 text-gray-200 px-2 py-1 rounded text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                          {projeto.tecnologias.length > 2 && (
                            <span className="text-gray-400 text-xs px-2 py-1">
                              +{projeto.tecnologias.length - 2}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Mensagem quando não há projetos */}
            {projetosFiltrados.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-300">
                  Nenhum projeto encontrado para a categoria "{filtroAtivo}".
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}