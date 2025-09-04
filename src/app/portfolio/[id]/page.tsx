
import { BackButton } from "@/components/BackButton"
import Image from "next/image"
import { projetos } from "@/lib/data-projetos"
import { techIcons } from "@/lib/tech-icons"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// ✅ MUDANÇA 1: Tipo correto para Next.js 15
interface PageProps {
  params: { id: string }
}

export async function generateStaticParams() {
  return projetos.map((projeto) => ({
    id: projeto.id.toString(),
  }))
}

export default async function ProjetoPage({ params }: PageProps) {
  const { id } = params  // ← direto, sem await

  const projetoId = parseInt(id)
  const projeto = projetos.find((p) => p.id === projetoId)

  if (!projeto) {
    return <div className="p-6 text-white">Projeto não encontrado.</div>
  }

  // Usar galeria se existir, senão usar apenas a imagem principal
  const imagens = projeto.gallery || [projeto.image]

  return (
    <div className="mx-auto p-4 sm:p-6 rounded-md text-white h-auto sm:h-[480px] flex flex-col overflow-y-auto bg-[#1D252B]">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl sm:text-2xl font-bold">{projeto.title}</h1>
        <BackButton />
      </div>

      {/* Carrossel de Imagens */}
      <div className="mb-4 relative w-full">
        {imagens.length > 1 ? (
          <Carousel className="w-full max-w-full">
            <CarouselContent className="-ml-0">
              {imagens.map((image, index) => (
                <CarouselItem key={index} className="pl-0">
                  <div className="h-48 sm:h-64 relative w-full rounded-md overflow-hidden">
                    <Image
                      src={image}
                      alt={`${projeto.title} - Imagem ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                      style={{ objectFit: "cover" }}
                      className="rounded-md"
                      priority={index === 0}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Botões de navegação - mais próximos da imagem */}
            <CarouselPrevious className="bg-green-600 hover:bg-green-700 text-white border-green-600 left-2 top-1/2 -translate-y-1/2" />
            <CarouselNext className="bg-green-600 hover:bg-green-700 text-white border-green-600 right-2 top-1/2 -translate-y-1/2" />
          </Carousel>
        ) : (
          // Imagem única se não houver galeria
          <div className="h-48 sm:h-64 relative w-full rounded-md overflow-hidden">
            <Image
              src={projeto.image}
              alt={projeto.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
              style={{ objectFit: "cover" }}
              className="rounded-md"
              priority
            />
          </div>
        )}
      </div>

      <div className="pr-0 sm:pr-2">
        <p
          className="mb-4 text-sm sm:text-base"
          dangerouslySetInnerHTML={{ __html: projeto.description || "" }}
        />
        {projeto.tecnologias?.length ? (
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-2">Tecnologias usadas:</h2>
            <ul className="flex flex-wrap gap-2 sm:gap-3">
              {projeto.tecnologias.map((tech) => (
                <li
                  key={tech}
                  className="flex items-center gap-1 sm:gap-2 bg-primary text-background px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm whitespace-nowrap"
                >
                  {/* Ícone da tecnologia */}
                  {techIcons[tech] || null}

                  {/* Nome da tecnologia */}
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  )
}