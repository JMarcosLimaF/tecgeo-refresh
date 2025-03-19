
import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { ArrowUpRight } from 'lucide-react';

const projectCategories = ['Todos', 'Cartografia', 'Geoprocessamento', 'Geodésia', 'Topografia'];

const projectsData = [
  {
    id: 1,
    title: 'Mapeamento urbano da cidade de São Paulo',
    category: 'Cartografia',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1244&q=80',
    description: 'Elaboração de mapeamento digital detalhado para planejamento urbano.'
  },
  {
    id: 2,
    title: 'Análise de risco ambiental para mineradora',
    category: 'Geoprocessamento',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description: 'Análise de risco utilizando SIG para avaliação de impactos ambientais.'
  },
  {
    id: 3,
    title: 'Rede geodésica para obra de infraestrutura',
    category: 'Geodésia',
    image: 'https://images.unsplash.com/photo-1503387837-b154d5074bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80',
    description: 'Implantação de rede geodésica para controle de obra rodoviária.'
  },
  {
    id: 4,
    title: 'Levantamento topográfico para loteamento',
    category: 'Topografia',
    image: 'https://images.unsplash.com/photo-1606425271394-c3ca9aa1fc06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    description: 'Levantamento planialtimétrico para projeto de loteamento residencial.'
  },
  {
    id: 5,
    title: 'Mapeamento de áreas de preservação ambiental',
    category: 'Cartografia',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1313&q=80',
    description: 'Cartografia detalhada de áreas de preservação para gestão ambiental.'
  },
  {
    id: 6,
    title: 'Análise espacial para rede de distribuição',
    category: 'Geoprocessamento',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    description: 'Geoprocessamento aplicado à otimização de rotas de distribuição logística.'
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  
  const filteredProjects = activeCategory === 'Todos' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="section-container">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-tecgeo-teal/10 text-tecgeo-teal text-sm font-medium mb-2">
              <span>Projetos Realizados</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-tecgeo-blue">Conheça nossos projetos</h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Explore nosso portfólio de projetos executados com excelência técnica e 
              compromisso com a qualidade e a satisfação dos clientes.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {projectCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-tecgeo-teal text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 100} direction="up">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{project.category}</span>
                      <button className="w-8 h-8 rounded-full bg-tecgeo-teal/80 flex items-center justify-center">
                        <ArrowUpRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-tecgeo-blue mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={300}>
          <div className="mt-16 text-center">
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 rounded-full border border-tecgeo-blue text-tecgeo-blue font-medium hover:bg-tecgeo-blue hover:text-white transition-colors"
            >
              Solicitar um projeto personalizado
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Projects;
