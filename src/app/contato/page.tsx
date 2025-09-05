
"use client"

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, MapPin, Mail, Phone, User, Calendar } from "lucide-react";

const CardContato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string | undefined;
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string | undefined;
      const templateAutoReplyId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_AUTOREPLY_ID as string | undefined;
      const templateNotifyMeId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_NOTIFY_ME_ID as string | undefined;

      const missingVars: string[] = [];
      if (!publicKey) missingVars.push("NEXT_PUBLIC_EMAILJS_PUBLIC_KEY");
      if (!serviceId) missingVars.push("NEXT_PUBLIC_EMAILJS_SERVICE_ID");
      if (!templateAutoReplyId) missingVars.push("NEXT_PUBLIC_EMAILJS_TEMPLATE_AUTOREPLY_ID");
      if (missingVars.length > 0) {
        alert(
          `Configuração do EmailJS ausente. Verifique .env.local e reinicie o servidor.\nFaltando: ${missingVars.join(", ")}`
        );
        return;
      }

      const emailjs = (await import("@emailjs/browser")).default;

      const templateParams = {
        from_name: formData.nome,
        from_email: formData.email,
        message: formData.mensagem,
        reply_to: formData.email
      } as Record<string, unknown>;

      // 1) Auto-reply para o usuário
      await emailjs.send(serviceId as string, templateAutoReplyId as string, templateParams, { publicKey: publicKey as string });

      // 2) Notificação para você (se configurado)
      if (templateNotifyMeId) {
        await emailjs.send(
          serviceId as string,
          templateNotifyMeId as string,
          { ...templateParams, to_email: "daantadev@gmail.com" },
          { publicKey: publicKey as string }
        );
      }

      setFormData({ nome: "", email: "", mensagem: "" });
      setIsSuccessOpen(true);
    } catch (error: unknown) {
      const message =
        (typeof error === "object" && error && "message" in error && (error as { message: string }).message) ||
        (typeof error === "string" ? error : "Erro desconhecido ao enviar a mensagem.");
      console.error("Erro ao enviar via EmailJS:", error);
      alert(`Não foi possível enviar sua mensagem. Motivo: ${message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="pb-6 w-auto mx-auto sm:overflow-auto sm:h-[480px] bg-[#1D252B] text-white">
      <CardHeader className="flex flex-row items-center border-b border-gray-600">
        <CardTitle className="text-xl font-bold font-space-grotesk">Contato</CardTitle>
      </CardHeader>

      <CardContent className="px-6 pt-6 pb-8 space-y-8">
        {/* Mapa e Dados pessoais */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="relative group">
              <img
                src="/maps.png"
                alt="Mapa"
                className="rounded-lg max-h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105 shadow-lg"
              />
              <div className="absolute inset-0 bg-green-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          <div className="md:w-1/2 flex flex-col justify-center space-y-4 text-left text-white">
            <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors duration-300">
              <Calendar className="text-green-500 w-5 h-5" />
              <div>
                <p className="font-medium font-space-grotesk">Idade</p>
                <p className="text-gray-300 font-poppins">28 anos</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors duration-300">
              <MapPin className="text-green-500 w-5 h-5" />
              <div>
                <p className="font-medium font-space-grotesk">Endereço</p>
                <p className="text-gray-300 font-poppins">Leiria, Portugal</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors duration-300">
              <Mail className="text-green-500 w-5 h-5" />
              <div>
                <p className="font-medium font-space-grotesk">Email</p>
                <p className="text-gray-300 font-poppins">daantadev@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors duration-300">
              <Phone className="text-green-500 w-5 h-5" />
              <div>
                <p className="font-medium font-space-grotesk">Telefone</p>
                <p className="text-gray-300 font-poppins">913821065</p>
              </div>
            </div>
          </div>
        </div>

        {/* Formulário */}
        <section>
          <h2 className="text-xl font-bold border-b border-gray-600 pb-3 mb-6 font-space-grotesk">
            Formulário de Contato
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative group">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-green-500 transition-colors duration-300" />
                <Input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  placeholder="Seu nome"
                  required
                  className="w-full pl-10 bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500/20 transition-all duration-300 font-poppins"
                  aria-label="Nome"
                />
              </div>
              
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-green-500 transition-colors duration-300" />
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Seu email"
                  required
                  className="w-full pl-10 bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500/20 transition-all duration-300 font-poppins"
                  aria-label="Email"
                />
              </div>
            </div>
            
            <div className="relative group">
              <Textarea
                name="mensagem"
                value={formData.mensagem}
                onChange={handleInputChange}
                rows={4}
                placeholder="Sua mensagem..."
                required
                className="w-full resize-none bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500/20 transition-all duration-300 font-poppins"
                aria-label="Mensagem"
              />
            </div>
            
            <Button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full sm:w-fit bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl border border-green-500/20 hover:border-green-400/30 font-poppins disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Enviando...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  <span>Enviar Mensagem</span>
                </div>
              )}
              
              {/* Efeito de brilho */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg -z-10" />
            </Button>
          </form>
        </section>
      </CardContent>

      {/* Modal de Sucesso */}
      {isSuccessOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-title"
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsSuccessOpen(false)}
          />
          <div className="relative z-10 w-full max-w-md">
            <div className="bg-[#0F1418] text-white rounded-2xl shadow-2xl border border-green-500/20 overflow-hidden">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-600/40 via-green-400/30 to-emerald-500/40 blur-2xl opacity-40" />
                <div className="relative p-6 sm:p-8">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-600/20 border border-green-500/30">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-7 w-7 text-green-400">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                    </svg>
                  </div>
                  <h3 id="success-title" className="text-xl font-semibold font-space-grotesk text-white text-center">
                    Mensagem enviada!
                  </h3>
                  <p className="mt-2 text-gray-300 font-poppins text-center">
                    Obrigado por entrar em contato. Responderei o mais breve possível.
                  </p>
                  <div className="mt-6 flex items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => setIsSuccessOpen(false)}
                      className="inline-flex items-center justify-center rounded-lg border border-green-500/30 bg-gradient-to-r from-green-600 to-green-700 px-5 py-2.5 text-sm font-medium text-white shadow-lg transition-all hover:from-green-700 hover:to-green-800 focus:outline-none focus:ring-2 focus:ring-green-500/50"
                      autoFocus
                    >
                      Fechar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default CardContato;
