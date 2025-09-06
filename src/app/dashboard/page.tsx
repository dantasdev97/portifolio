"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  FolderOpen, 
  Eye, 
  MessageSquare, 
  TrendingUp, 
  Plus,
  ExternalLink,
  BarChart3,
  Users,
  Calendar,
  Mail
} from 'lucide-react';

export default function DashboardPage() {
  const { user } = useAuth();
  const router = useRouter();

  const stats = [
    {
      title: "Projetos Ativos",
      value: "4",
      description: "Projetos no portfólio",
      icon: FolderOpen,
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      title: "Visualizações",
      value: "1,234",
      description: "Este mês",
      icon: Eye,
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20"
    },
    {
      title: "Mensagens",
      value: "12",
      description: "Não lidas",
      icon: MessageSquare,
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20"
    },
    {
      title: "Taxa de Conversão",
      value: "3.2%",
      description: "+0.5% vs mês anterior",
      icon: TrendingUp,
      color: "text-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-900/20"
    }
  ];

  const recentProjects = [
    {
      name: "Barbearia Of Brothers",
      status: "Ativo",
      views: 245,
      lastUpdate: "2 dias atrás"
    },
    {
      name: "Mens Concept Barbershop",
      status: "Ativo",
      views: 189,
      lastUpdate: "1 semana atrás"
    },
    {
      name: "Novo Nivel",
      status: "Ativo",
      views: 156,
      lastUpdate: "2 semanas atrás"
    },
    {
      name: "Dancing World",
      status: "Ativo",
      views: 98,
      lastUpdate: "3 semanas atrás"
    }
  ];

  const quickActions = [
    {
      title: "Adicionar Projeto",
      description: "Criar um novo projeto para o portfólio",
      icon: Plus,
      action: () => router.push('/dashboard/projetos/novo'),
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      title: "Ver Portfólio",
      description: "Visualizar o portfólio público",
      icon: ExternalLink,
      action: () => router.push('/'),
      color: "bg-blue-500 hover:bg-blue-600"
    },
    {
      title: "Analytics",
      description: "Ver estatísticas detalhadas",
      icon: BarChart3,
      action: () => router.push('/dashboard/analytics'),
      color: "bg-purple-500 hover:bg-purple-600"
    },
    {
      title: "Mensagens",
      description: "Gerenciar mensagens recebidas",
      icon: Mail,
      action: () => router.push('/dashboard/mensagens'),
      color: "bg-orange-500 hover:bg-orange-600"
    }
  ];

  return (
    <div className="flex-1 flex flex-col h-full w-full">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Dashboard
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Bem-vindo de volta, Augusto! Aqui está um resumo do seu portfólio.
              </p>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <Calendar className="h-4 w-4" />
              <span>{new Date().toLocaleDateString('pt-BR')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-hidden">
        <div className="h-full w-full space-y-6 overflow-y-auto">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
              <div>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                          {stat.title}
                        </p>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">
                          {stat.value}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {stat.description}
                </p>
              </div>
                      <div className={`p-3 rounded-full ${stat.bgColor}`}>
                        <Icon className={`h-6 w-6 ${stat.color}`} />
              </div>
            </div>
          </CardContent>
        </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* Recent Projects */}
            <Card>
            <CardHeader>
                <CardTitle className="flex items-center">
                  <FolderOpen className="h-5 w-5 mr-2" />
                  Projetos Recentes
                </CardTitle>
                <CardDescription>
                  Seus projetos mais visualizados
              </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                  {recentProjects.map((project, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {project.name}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {project.views} visualizações • {project.lastUpdate}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                          {project.status}
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => router.push(`/portfolio/${index + 1}`)}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
            </CardContent>
          </Card>

            {/* Quick Actions */}
            <Card>
            <CardHeader>
                <CardTitle>Ações Rápidas</CardTitle>
                <CardDescription>
                  Acesso rápido às funcionalidades principais
              </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {quickActions.map((action, index) => {
                    const Icon = action.icon;
                    return (
                      <Button
                        key={index}
                        onClick={action.action}
                        className={`${action.color} text-white h-auto p-4 flex flex-col items-start space-y-2`}
                      >
                        <div className="flex items-center space-x-2">
                          <Icon className="h-5 w-5" />
                          <span className="font-medium">{action.title}</span>
                        </div>
                        <p className="text-sm opacity-90 text-left">
                          {action.description}
                        </p>
                      </Button>
                    );
                  })}
                </div>
            </CardContent>
          </Card>
          </div>

          {/* User Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Informações da Conta
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Email</p>
                  <p className="text-gray-900 dark:text-white">{user?.email}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Membro desde</p>
                  <p className="text-gray-900 dark:text-white">
                    {user?.created_at ? new Date(user.created_at).toLocaleDateString('pt-BR') : 'N/A'}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Status</p>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                    Ativo
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}