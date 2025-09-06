"use client";
import "./globals.css";
import { MenuLateral } from "@/components/menulateral";
import CardPerfil from "@/components/cardperfil";
import React, { useState, useRef, useEffect } from "react";
import PortfolioBackground from "@/components/PortfolioBackground";
import { Menu, X, House, UserCircle, MonitorCog, NotebookPen, Mail } from "lucide-react";
import Resumo from "@/app/resumo/page";
import Sobre from "@/app/sobre/page";
import Contato from "@/app/contato/page";
import PortfolioPage from "./portfolio/page";
import { usePathname, useRouter } from "next/navigation";
import { Space_Grotesk, Poppins } from 'next/font/google';
import { AuthProvider } from "@/contexts/AuthContext";
import { ConditionalLayout } from "@/components/ConditionalLayout";
import { ConditionalMain } from "@/components/ConditionalMain";

// Configuração das fontes
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const menuItems = [
  { label: "Resumo", href: "#resumo" },
  { label: "Sobre", href: "#sobre" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Blog", href: "#blog" },
  { label: "Contato", href: "#contato" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [menuAberto, setMenuAberto] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [desktopAnimation, setDesktopAnimation] = useState(false);
  const mainRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  const hideSidebar = pathname === '/login' || pathname === '/signup' || pathname.startsWith('/dashboard');

  useEffect(() => {
    setActiveHash(window.location.hash || "");
  }, []);

  function handleNavigate(href: string) {
    const id = href.replace("#", "");
    setMenuAberto(false);
    setIsTransitioning(true);

    // Só redireciona para home se estiver em uma página de projeto específico
    // e tentando navegar para uma seção da página inicial
    if (pathname.startsWith("/portfolio/") && href.startsWith("#")) {
      router.push("/");
      setTimeout(() => {
        smoothScrollToSection(id);
      }, 100);
      return;
    }

    smoothScrollToSection(id);
  }

  function handleDesktopNavigate(href: string) {
    setDesktopAnimation(true);
    setTimeout(() => {
      router.push(href);
      setDesktopAnimation(false);
    }, 400);
  }

  function smoothScrollToSection(sectionId: string) {
    const target = document.getElementById(sectionId);
    if (!target) {
      setIsTransitioning(false);
      return;
    }

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const headerOffset = window.innerWidth < 768 ? 120 : 20;
    const startY = window.scrollY;
    const targetY = target.getBoundingClientRect().top + window.scrollY - headerOffset;
    const distance = targetY - startY;

    if (Math.abs(distance) < 2 || prefersReduced) {
      window.scrollTo({ top: targetY, behavior: prefersReduced ? 'auto' : 'smooth' });
      setTimeout(() => {
        setIsTransitioning(false);
        setActiveHash(`#${sectionId}`);
        history.replaceState(null, "", `#${sectionId}`);
      }, 300);
      return;
    }

    const duration = window.innerWidth < 768 ? 800 : 900;
    const startTime = performance.now();

    function easeInOutCubic(t: number) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function step(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);
      window.scrollTo(0, startY + distance * eased);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setIsTransitioning(false);
        setActiveHash(`#${sectionId}`);
        history.replaceState(null, "", `#${sectionId}`);
      }
    }

    requestAnimationFrame(step);
  }

  const navigationItems = [
    { icon: <House size={20} />, label: "Resumo", href: "#resumo" },
    { icon: <UserCircle size={20} />, label: "Sobre", href: "#sobre" },
    { icon: <MonitorCog size={20} />, label: "Portfólio", href: "#portfolio" },
    { icon: <NotebookPen size={20} />, label: "Blog", href: "#blog" },
    { icon: <Mail size={20} />, label: "Contato", href: "#contato" },
  ];

  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} ${poppins.variable}`}>
      <body className="flex md:items-center md:justify-center h-auto md:h-screen w-screen bg-background text-foreground overflow-x-hidden font-poppins">
        <AuthProvider>
          <PortfolioBackground variant="radial-noise" accent="emerald" intensity={0.6} className="w-full h-full">
            <ConditionalLayout>
              
              {/* Desktop Layout */}
              {!hideSidebar && (
                <>
                  <div className="hidden md:flex flex-col">
                    <MenuLateral onNavigate={handleDesktopNavigate} />
                  </div>
                  <div className="hidden md:flex p-1">
                    <CardPerfil />
                  </div>
                </>
              )}

              <ConditionalMain desktopAnimation={desktopAnimation}>
                {children}
              </ConditionalMain>

              {/* Mobile Layout */}
              <div className="flex flex-col md:hidden w-full min-h-screen">
                {!hideSidebar ? (
                  <>
                    {/* Header Mobile */}
                    <div className="fixed top-0 left-0 right-0 z-50 bg-[#1D252B] border-b border-gray-600">
                      <header className="p-4 flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="relative">
                            <img
                              src="/perfil.jpg"
                              alt="Augusto Dantas"
                              className="w-12 h-12 rounded-full border-2 border-green-500 object-cover"
                            />
                          </div>
                          <div>
                            <button onClick={() => router.push("/")} className="text-left hover:opacity-80 transition-opacity">
                              <h1 className="text-white font-bold text-lg leading-tight font-space-grotesk">Augusto Dantas</h1>
                              <p className="text-green-500 text-sm font-medium animate-pulse font-poppins">Desenvolvedor Full Stack</p>
                            </button>
                          </div>
                        </div>

                        <button
                          onClick={() => setMenuAberto(true)}
                          className="text-white hover:text-green-500 transition-colors p-2 rounded-md hover:bg-gray-700"
                          aria-label="Abrir menu"
                        >
                          <Menu size={24} />
                        </button>
                      </header>

                      <nav className="px-4 pb-3 flex justify-between items-center">
                        {navigationItems.map(({ icon, label, href }) => {
                          const isActive = activeHash === href;
                          return (
                            <button
                              key={href}
                              onClick={() => handleNavigate(href)}
                              disabled={isTransitioning}
                              className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-all min-w-[60px] ${
                                isActive ? 'text-green-500 bg-green-500/10' : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                              } ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''}`}
                              aria-label={label}
                            >
                              <div className={`transition-transform duration-300 ${isActive ? 'scale-110' : ''}`}>{icon}</div>
                              <span className="text-xs font-medium truncate font-poppins">{label}</span>
                            </button>
                          );
                        })}
                      </nav>
                    </div>

                    {/* Menu Mobile */}
                    <div
                      className={`fixed inset-0 bg-black z-40 transition-all duration-300 ${
                        menuAberto ? 'bg-opacity-50 visible' : 'bg-opacity-0 invisible pointer-events-none'
                      }`}
                      onClick={() => setMenuAberto(false)}
                    />
                    
                    <aside className={`fixed left-0 top-0 w-64 h-full bg-[#1D252B] z-50 p-4 overflow-y-auto transition-transform duration-300 ${
                      menuAberto ? 'translate-x-0' : '-translate-x-full'
                    }`}>
                      <div className="flex justify-between items-center mb-6">
                        <h2 className="text-white font-bold text-lg font-space-grotesk">Menu</h2>
                        <button onClick={() => setMenuAberto(false)} className="text-white hover:text-green-500 transition-colors">
                          <X size={20} />
                        </button>
                      </div>

                      <nav className="flex flex-col space-y-3">
                        {menuItems.map(({ label, href }) => {
                          const isActive = activeHash === href;
                          return (
                            <button
                              key={href}
                              onClick={() => handleNavigate(href)}
                              disabled={isTransitioning}
                              className={`block px-4 py-2 rounded text-sm font-medium transition text-left w-full font-poppins ${
                                isActive ? "bg-green-600 text-white" : "text-white hover:bg-green-500/80"
                              } ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                              {label}
                            </button>
                          )
                        })}
                      </nav>
                    </aside>

                    {/* Conteúdo Mobile - Página inicial ou páginas separadas */}
                    {pathname === '/' ? (
                      <div ref={mainRef} className="flex-1 px-4 y center mr-1 relative pt-[140px]">
                        <section id="perfil" className="mb-3 scroll-mt-5 transition-all duration-700 ease-out pt-5">
                          <CardPerfil />
                        </section>

                        <section id="resumo" className="min-h-[calc(100vh-120px)] scroll-mt-20 transition-all duration-700 ease-out">
                          <Resumo />
                        </section>

                        <section id="sobre" className="min-h-[calc(100vh-120px)] mt-3 scroll-mt-20 transition-all duration-700 ease-out">
                          <Sobre />
                        </section>

                        <section id="portfolio" className="min-h-[450px] mt-3 scroll-mt-20 transition-all duration-700 ease-out">
                          <PortfolioPage />
                        </section>

                        <section id="contato" className="min-h-[calc(100vh-120px)] mt-3 scroll-mt-20 transition-all duration-700 ease-out">
                          <Contato />
                        </section>
                      </div>
                    ) : (
                      <div className="flex-1 w-full pt-[140px] mt-4 px-1">
                        {children}
                      </div>
                    )}
                  </>
                ) : (
                  <div className="flex-1 w-full">
                    {children} {/* Para login/signup */}
                  </div>
                )}
              </div>
            </ConditionalLayout>
          </PortfolioBackground>
        </AuthProvider>
      </body>
    </html>
  );
}
