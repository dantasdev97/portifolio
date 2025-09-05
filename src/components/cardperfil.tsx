"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Github, Download, MessageCircle } from "lucide-react";

const CardPerfil = () => {
  // const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   setOpen(true); // ativa animação ao montar
  // }, []);

  return (
    <Card className="w-full sm:max-w-md shadow-xl bg-[#1D252B] border-none h-[480px] transition-all duration-500 ease-out ">
      <div className="aspect-video w-full -mt-6 relative overflow-hidden">
        <video
          className="w-full h-full rounded-t-lg transition-transform duration-700 hover:scale-105"
          src="/videos/videoprogram.mp4"
          title="Video de apresentação"
          muted
          loop
          playsInline
          autoPlay
          controls={false}
        />
        {/* Overlay sutil no hover */}
        <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-300 rounded-t-lg" />
      </div>

      <CardContent className="flex flex-col items-center gap-4 py-6">
        <Avatar className="w-24 h-24 -mt-25 transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-green-500/20">
          <AvatarImage src="/perfil.jpg" alt="Sua foto" />
          <AvatarFallback className="bg-green-600 text-white font-bold text-xl">AD</AvatarFallback>
        </Avatar>

        {/* Nome com animação de entrada */}
        <h2 className="text-xl font-bold text-white dark:text-white font-space-grotesk transition-all duration-500 hover:text-green-400">
          Augusto Dantas
        </h2>
        
        {/* Profissão com animação verde */}
        <p className="text-sm text-[#52E035] font-medium animate-pulse font-poppins">
          Web Designer &{" "}
          <span className="text-green-500 font-semibold animate-bounce inline-block">
            Full Stack
          </span>
        </p>

        {/* Redes sociais com animações */}
        <div className="flex gap-4 mt-2">
          <Button 
            size="icon" 
            variant="outline" 
            asChild
            className="group transition-all duration-300 hover:scale-110 hover:bg-pink-500/10 hover:border-pink-500 hover:text-pink-400"
          >
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
            </a>
          </Button>

          <Button 
            size="icon" 
            variant="outline" 
            asChild
            className="group transition-all duration-300 hover:scale-110 hover:bg-blue-500/10 hover:border-blue-500 hover:text-blue-400"
          >
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
            </a>
          </Button>

          <Button 
            size="icon" 
            variant="outline" 
            asChild
            className="group transition-all duration-300 hover:scale-110 hover:bg-gray-500/10 hover:border-gray-500 hover:text-gray-400"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
            </a>
          </Button>
        </div>

        {/* Botões de ação - 50% cada */}
        <div className="flex gap-3 w-full mt-4 px-4">
          {/* Botão Baixar CV */}
          <Button 
            className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 group"
            size="sm"
          >
            <Download className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-y-1" />
            Baixar CV
          </Button>

          {/* Botão WhatsApp */}
          <Button 
            className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 group"
            size="sm"
            asChild
          >
            <a
              href="https://wa.me/351913821065?text=Olá! Vi seu portfólio e gostaria de conversar sobre um projeto."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-y-1" />
              WhatsApp
            </a>
          </Button>
        </div>

        {/* Efeito de brilho sutil */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none" />
      </CardContent>
    </Card>
  );
};

export default CardPerfil;
