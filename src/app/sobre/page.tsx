"use client"
// components/card-sobre-mim.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CardSobreMim() {
  return (
    <Card className="text-muted-foreground pb-4 w-auto max-w-4xl overflow-y-auto h-auto sm:h-[480px] sm:overflow-auto bg-[#1D252B] border-none  sm:pl-6">
      <CardHeader className="flex flex-row items-center justify-between border-b bordeackr-bl text-white  ">
        <CardTitle className="text-xl font-bold" >
       <h1>Sobre Mim</h1>
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm leading-relaxed p-0 text-white">
        <p className="pl-6 text-white">
          Olá, tudo bem? <br />
          Sou um entusiasta da tecnologia, atuando como Programador e Web Designer. Atualmente, moro em Leiria, Portugal, onde continuo a aprimorar minhas habilidades no desenvolvimento web.
        </p>
        <p className="p-6 text-white">
          Com uma formação robusta e experiência adquirida no Brasil, destaco-me por criar soluções inovadoras que otimizam processos e elevam a experiência do usuário.
        </p>
        <p className="p-6 text-white">
          Sempre comprometido com a inovação e excelência, busco desafios que me permitam aplicar minhas habilidades em ambientes dinâmicos e colaborativos.
        </p>
		<div className=" ">

		<div className="grid grid-cols-2 gap-4 text-sm mt-4 pb-4">
          <div className="pl-6 text-white">
            <strong>Idade:</strong> 28<br />
            <strong>Residência:</strong> Leiria, Portugal
          </div>
          <div>
            <strong className="text-white pl-6">Nacionalidade:</strong> Brasil<br />
            <strong className="text-white pl-6">Freelancer:</strong> Disponível
          </div>
        </div>
  
  <div className="flex flex-row items-center justify-between border-b bordeackr-bl pt-4 pb-4 ">
  <h2 className="text-xl font-bold pl-6">Meus Serviços</h2>

  </div>
 
 

  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 pl-6 mt-6">
    <div className=" rounded-lg ">
      <h3 className="text-xl font-semibold mb-2">Front End</h3>
      <p className="text-white text-sm pr-1">
        Site moderno e pronto para dispositivos móveis que ajudará você a alcançar todo o seu marketing.
      </p>
    </div>

  

    <div className="rounded-lg  ">
      <h3 className="text-xl font-semibold mb-2">Back End</h3>
      <p className="text-white text-sm pr-1">
        UI/UX focado no usuário; backend robusto focado em segurança e dados.
      </p>
    </div>

   
    <div className="rounded-lg pr-1 ">
      <h3 className="text-xl font-semibold mb-2">Desenvolvimento WordPress</h3>
      <p className="text-white text-sm ">
        Serviços especializados para melhorar sites de negócios com WordPress.
      </p>
    </div>

    <div className="rounded-lg ">
      <h3 className="text-xl font-semibold mb-2">E-commerce & Segurança</h3>
      <p className="text-white text-sm">
        Soluções para lojas virtuais com foco em segurança e performance.
      </p>
    </div>
  </div>
</div>

<div className="">
<div className="items-center border-b bordeackr-bl pt-4 pb-4">

<h2 className=" text-xl font-bold pl-6">Clientes</h2>
</div>
 
  <div className="flex flex-wrap justify-center items-center gap-8 mt-6">
    <img
      src="/logobfbrothers.png"
      alt="Barbearia Of Brothers"
      className="h-16 w-auto object-contain"
    />
    <img
      src="/mensconcept.jpg"
      alt="Mens Concept Luxembourg"
      className="h-16 w-auto object-contain"
    />
   
    {/* Adicione quantas logos quiser */}
  </div>
</div>
       
      </CardContent>
    </Card>
  )
}
