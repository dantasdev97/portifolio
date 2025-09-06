# 🚀 Portfolio - Augusto Dantas (Dantas Dev)

## 📋 Visão Geral do Projeto

Este é um portfólio pessoal moderno e responsivo desenvolvido com **Next.js 15** e **TypeScript**. O projeto apresenta os trabalhos, habilidades e experiência de **Augusto Dantas** como desenvolvedor Full Stack, com foco em WordPress e desenvolvimento web.

### 👨‍💻 Sobre o Desenvolvedor
- **Nome**: Augusto Dantas
- **Idade**: 28 anos
- **Localização**: Leiria, Portugal
- **Nacionalidade**: Brasileiro
- **Especialização**: Web Designer & Full Stack Developer
- **Email**: daantadev@gmail.com
- **Telefone**: 913821065

---

## 🛠️ Stack Tecnológica

### Core Technologies
- **Next.js 15.4.6** - Framework React com App Router
- **React 19.1.0** - Biblioteca de interface
- **TypeScript 5** - Tipagem estática
- **Tailwind CSS 4** - Framework CSS utilitário

### UI/UX Libraries
- **Shadcn/ui** - Componentes de interface
- **Radix UI** - Componentes primitivos acessíveis
- **Lucide React** - Ícones modernos
- **Framer Motion** - Animações fluidas

### Funcionalidades Especiais
- **@tsparticles/react** - Efeitos de partículas no background
- **React Circular Progressbar** - Barras de progresso circulares
- **Embla Carousel** - Carrossel de imagens
- **EmailJS** - Envio de emails via formulário de contato

### Autenticação & Backend
- **Supabase** - Autenticação e banco de dados
- **@supabase/supabase-js** - Cliente Supabase

---

## 🏗️ Estrutura do Projeto

```
src/
├── app/                          # App Router (Next.js 15)
│   ├── layout.tsx               # Layout principal responsivo
│   ├── page.tsx                 # Página inicial
│   ├── globals.css              # Estilos globais
│   ├── portfolio/               # Seção de portfólio
│   │   ├── page.tsx            # Lista de projetos
│   │   └── [id]/               # Páginas dinâmicas de projetos
│   │       └── page.tsx        # Detalhes do projeto
│   ├── resumo/                  # Seção de resumo profissional
│   │   └── page.tsx            # Experiência e habilidades
│   ├── sobre/                   # Seção sobre mim
│   │   └── page.tsx            # Informações pessoais e serviços
│   ├── contato/                 # Seção de contato
│   │   └── page.tsx            # Formulário e informações
│   ├── login/                   # Sistema de autenticação
│   │   └── page.tsx            # Página de login
│   ├── signup/                  # Cadastro de usuários
│   │   └── page.tsx            # Página de registro
│   └── dashboard/               # Painel administrativo
│       ├── layout.tsx          # Layout do dashboard
│       └── page.tsx            # Dashboard principal
├── components/                   # Componentes reutilizáveis
│   ├── ui/                     # Componentes base (Shadcn/ui)
│   ├── cardperfil.tsx          # Card de perfil principal
│   ├── menulateral.tsx         # Menu lateral desktop
│   ├── TechCarousel.tsx        # Carrossel de tecnologias
│   ├── PortfolioBackground.tsx # Background animado
│   ├── BackButton.tsx          # Botão de voltar
│   └── ProtectedRoute.tsx      # Rota protegida
├── contexts/                    # Contextos React
│   └── AuthContext.tsx         # Contexto de autenticação
└── lib/                        # Utilitários e dados
    ├── data-projetos.ts        # Dados dos projetos
    └── tech-icons.ts           # Ícones das tecnologias
```

---

## 🎨 Design & UX

### Paleta de Cores
- **Primária**: Verde (#22c55e, #10b981)
- **Background**: Preto (#1D252B, #0F1418)
- **Texto**: Branco (#ffffff)
- **Acentos**: Verde neon (#40F708)

### Tipografia
- **Títulos**: Space Grotesk (Google Fonts)
- **Corpo**: Poppins (Google Fonts)

### Layout Responsivo
- **Desktop**: Layout com sidebar lateral e card de perfil
- **Mobile**: Layout em seções com navegação por scroll
- **Breakpoints**: Tailwind CSS (sm, md, lg, xl)

### Animações
- **Framer Motion**: Transições suaves entre seções
- **Hover Effects**: Efeitos de hover em cards e botões
- **Scroll Animations**: Animações baseadas em scroll
- **Particle Effects**: Background com partículas animadas

---

## 📱 Funcionalidades Principais

### 1. **Seção Perfil**
- Card com foto, nome e profissão
- Links para redes sociais (Instagram, LinkedIn, GitHub)
- Botões de ação (Baixar CV, WhatsApp)
- Video de apresentação em background

### 2. **Seção Resumo**
- Experiência profissional (2022-2024: O Novo Nível, Portugal)
- Formação acadêmica (2019-2020: Análise e Desenvolvimento de Sistemas)
- Habilidades com barras de progresso circulares:
  - SQL/PHP: 80%
  - Angular/JS: 95%
  - HTML/CSS: 95%
  - WordPress: 93%
- Carrossel de tecnologias

### 3. **Seção Sobre**
- Informações pessoais (idade, localização, nacionalidade)
- Serviços oferecidos:
  - Front End
  - Back End
  - Desenvolvimento WordPress
  - E-commerce & Segurança
- Logos de clientes (Barbearia Of Brothers, Mens Concept)

### 4. **Seção Portfólio**
- Grid responsivo de projetos
- Sistema de filtros por categoria (Todos, Código, WordPress, Design)
- Cards com imagem, título, categoria e tecnologias
- Páginas dinâmicas para cada projeto com:
  - Carrossel de imagens
  - Descrição detalhada
  - Lista de tecnologias utilizadas
  - Botão de voltar

### 5. **Seção Contato**
- Formulário de contato funcional com EmailJS
- Informações de contato (email, telefone, localização)
- Mapa visual
- Modal de confirmação de envio

### 6. **Sistema de Autenticação**
- Login e registro com Supabase
- Dashboard administrativo protegido
- Rotas protegidas
- Contexto de autenticação global

---

## 🎯 Projetos em Destaque

### 1. **Barbearia Of Brothers**
- **Categoria**: WordPress
- **Tecnologias**: WordPress, Elementor, MongoDB, Express, Node.js, React, CSS
- **Descrição**: Site institucional para barbearia em Leiria, Portugal
- **Galeria**: 4 imagens

### 2. **Mens Concept Barbershop**
- **Categoria**: WordPress
- **Tecnologias**: WordPress, Elementor
- **Descrição**: Landing page para agendamento
- **Galeria**: 4 imagens

### 3. **Novo Nivel**
- **Categoria**: WordPress
- **Tecnologias**: Elementor, WordPress
- **Descrição**: Landing Page para agência
- **Galeria**: 4 imagens

### 4. **Dancing World**
- **Categoria**: WordPress
- **Tecnologias**: Elementor, WordPress
- **Descrição**: Projeto full stack completo
- **Galeria**: 4 imagens

---

## ⚙️ Configuração e Instalação

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn
- Conta no Supabase (para autenticação)
- Conta no EmailJS (para formulário de contato)

### Instalação
```bash
# Clone o repositório
git clone [URL_DO_REPOSITORIO]

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env.local
```

### Variáveis de Ambiente
```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=sua_url_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anonima

# EmailJS
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=sua_chave_publica
NEXT_PUBLIC_EMAILJS_SERVICE_ID=seu_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_AUTOREPLY_ID=template_autoreply
NEXT_PUBLIC_EMAILJS_TEMPLATE_NOTIFY_ME_ID=template_notify
```

### Executar o Projeto
```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start
```

---

## 🚀 Deploy

### Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Outras Plataformas
- **Netlify**: Compatível com Next.js
- **Railway**: Deploy com banco de dados
- **DigitalOcean**: VPS personalizado

---

## 🔧 Scripts Disponíveis

```json
{
  "dev": "next dev --turbopack",     // Desenvolvimento com Turbopack
  "build": "next build",             // Build de produção
  "start": "next start",             // Servidor de produção
  "lint": "next lint"                // Linting do código
}
```

---

## 📊 Características Técnicas

### Performance
- **Next.js 15** com App Router
- **Turbopack** para desenvolvimento rápido
- **Image Optimization** automática
- **Code Splitting** automático
- **Static Generation** para páginas de projetos

### SEO
- **Metadata** otimizada
- **Open Graph** tags
- **Structured Data** para projetos
- **Sitemap** automático

### Acessibilidade
- **ARIA** labels
- **Keyboard Navigation**
- **Screen Reader** friendly
- **Color Contrast** adequado

### Responsividade
- **Mobile First** design
- **Breakpoints** otimizados
- **Touch Friendly** interface
- **Cross Browser** compatibility

---

## 🎨 Customizações

### Adicionar Novo Projeto
1. Edite `src/lib/data-projetos.ts`
2. Adicione o projeto no array `projetos`
3. Inclua as imagens na pasta `public/`
4. Configure a galeria e tecnologias

### Modificar Cores
1. Edite `src/app/globals.css`
2. Atualize as variáveis CSS
3. Modifique o tema no Tailwind

### Adicionar Nova Seção
1. Crie a página em `src/app/[secao]/page.tsx`
2. Adicione ao menu em `src/app/layout.tsx`
3. Configure a navegação

---

## 🐛 Problemas Conhecidos e Soluções

### 1. **Duplicação de Conteúdo Mobile**
- **Problema**: Conteúdo duplicado em páginas dinâmicas no mobile
- **Solução**: Layout mobile separado do desktop com `hidden md:block`

### 2. **Navegação de Cards**
- **Problema**: Cards não redirecionavam para páginas dinâmicas
- **Solução**: Correção na lógica de navegação do layout

### 3. **Autenticação**
- **Problema**: Rotas protegidas não funcionavam
- **Solução**: Implementação do AuthContext com Supabase

---

## 📈 Próximas Funcionalidades

- [ ] **Blog** integrado
- [ ] **Sistema de comentários** nos projetos
- [ ] **Analytics** de visitantes
- [ ] **Modo escuro/claro**
- [ ] **Internacionalização** (PT/EN)
- [ ] **PWA** (Progressive Web App)
- [ ] **API** para gerenciar projetos
- [ ] **Sistema de tags** para projetos

---

## 📞 Contato e Suporte

- **Email**: daantadev@gmail.com
- **WhatsApp**: +351 913821065
- **LinkedIn**: [Perfil LinkedIn]
- **GitHub**: [Perfil GitHub]
- **Instagram**: [Perfil Instagram]

---

## 📄 Licença

Este projeto é de uso pessoal e profissional. Todos os direitos reservados a Augusto Dantas.

---

## 🙏 Agradecimentos

- **Next.js Team** - Framework incrível
- **Vercel** - Deploy e hospedagem
- **Supabase** - Backend e autenticação
- **Shadcn/ui** - Componentes de qualidade
- **Tailwind CSS** - Framework CSS utilitário

---

*Última atualização: Dezembro 2024*
*Versão: 1.0.0*