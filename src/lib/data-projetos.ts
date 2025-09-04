export type Projeto = {
	id: number
	title: string
	image: string
	category: string
	description?: string
	tecnologias?: string[]
	gallery?: string[] 
}
  
export const projetos: Projeto[] = [
	{ 
		id: 1, 
		title: "Barbearia Of Brothers", 
		image: "/mockup-barbearia.png", 
		category: "WordPress",
		description: "O site da Barbearia Of Brothers é um site institucional para uma barbearia localizada no coração de Leiria, Portugal. Ele promove serviços como cortes de cabelo (modernos e tradicionais), cuidados com a barba e design de sobrancelhas, destacando a experiência de mais de 10 anos do líder, Vitor Chagas, e uma equipe de três profissionais especializados. O foco é oferecer uma experiência única e relaxante, utilizando produtos de alta qualidade, com uma chamada para ação para agendar uma visita. <br> Desafios: Sites em WordPress podem ser limitados para funcionalidades mais complexas.",
		tecnologias: ["WordPress", "Elementor", "MongoDB", "Express" , "Node.js" , "React" , "CSS"   ],
		gallery: [
			
			"/barbearia-2.png", 
			"/barbearia-3.png",
			"/barbearia-4.png"
		]
	},
	{ 
		id: 2, 
		title: "Mens Concept Barbershop", 
		image: "/5.png", 
		category: "WordPress", 
		description: "Landing page para agendamento", 
		tecnologias: ["WordPress", "Elementor"],
		gallery: [
			"/2.png",
			"/3.png",
			"/4.png"
		]
	},
	{ 
		id: 3, 
		title: "Novo Nivel", 
		image: "/novo-nivel-5.png", 
		category: "WordPress", 
		description: "Landing Page para agencia", 
		tecnologias: ["Elementor", "Wordpress"],
		gallery: [
			"/novo-nivel-2.png",
			"/novo-nivel-3.png",
			"/novo-nivel-4.png",
			
		]
	},
	{ 
		id: 4, 
		title: "Dancing World", 
		image: "/dancing-5.png", 
		category: "WordPress", 
		description: "projeto full stack completo", 
		tecnologias: ["Elementor", "WordPress"],
		gallery: [
			"/dancing-2.png",
			"/dancing-3.png",
			"/dancing-4.png"
		]
	},
]
  
export const categorias: string[] = ["Todos", "Código", "WordPress", "Design"]
  