"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LogOut, User, Mail, Calendar, Shield } from 'lucide-react';

function DashboardContent() {
  const { user, signOut } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push('/');
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Dashboard</h1>
            <p className="text-gray-300">Bem-vindo ao seu painel administrativo</p>
          </div>
          <Button
            onClick={handleSignOut}
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Sair
          </Button>
        </div>

        {/* User Info Card */}
        <Card className="mb-6 bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <User className="h-5 w-5 mr-2" />
              Informações do Usuário
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="h-4 w-4 text-gray-400" />
              <div>
                <p className="text-sm text-gray-300">Email</p>
                <p className="text-white">{user.email}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Calendar className="h-4 w-4 text-gray-400" />
              <div>
                <p className="text-sm text-gray-300">Membro desde</p>
                <p className="text-white">
                  {new Date(user.created_at).toLocaleDateString('pt-BR')}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Shield className="h-4 w-4 text-gray-400" />
              <div>
                <p className="text-sm text-gray-300">Status</p>
                <p className="text-white">
                  {user.email_confirmed_at ? 'Email confirmado' : 'Email não confirmado'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Dashboard Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Projetos</CardTitle>
              <CardDescription className="text-gray-300">
                Gerencie seus projetos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-white text-2xl font-bold">4</p>
              <p className="text-gray-300 text-sm">Projetos ativos</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Visitas</CardTitle>
              <CardDescription className="text-gray-300">
                Estatísticas do portfólio
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-white text-2xl font-bold">1,234</p>
              <p className="text-gray-300 text-sm">Visitas este mês</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Contatos</CardTitle>
              <CardDescription className="text-gray-300">
                Mensagens recebidas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-white text-2xl font-bold">12</p>
              <p className="text-gray-300 text-sm">Novas mensagens</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mt-6 bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <CardTitle className="text-white">Ações Rápidas</CardTitle>
            <CardDescription className="text-gray-300">
              Acesso rápido às funcionalidades principais
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => router.push('/')}
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                Ver Portfólio
              </Button>
              <Button 
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                Adicionar Projeto
              </Button>
              <Button 
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                Configurações
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  );
}
