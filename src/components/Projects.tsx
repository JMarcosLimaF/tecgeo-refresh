
import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { ArrowUpRight } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

// Expanded project data with additional details for the popup
const projectCategories = ['Todos', 'Cartografia', 'Geoprocessamento', 'Geodésia', 'Topografia'];

const projectsData = [
  {
    id: 1,
    title: 'Mapeamento urbano da cidade de São Paulo',
    category: 'Cartografia',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1244&q=80',
    description: 'Elaboração de mapeamento digital detalhado para planejamento urbano.',
    fullDescription: 'Este projeto envolveu o mapeamento completo da área urbana de São Paulo utilizando tecnologias avançadas de sensoriamento remoto e SIG. O resultado foi um conjunto de dados geoespaciais precisos que auxiliam no planejamento urbano, gestão de recursos e tomada de decisões pelos órgãos públicos.',
    galleryImages: [
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1244&q=80',
      'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1615&q=80'
    ]
  },
  {
    id: 2,
    title: 'Análise de risco ambiental para mineradora',
    category: 'Geoprocessamento',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description: 'Análise de risco utilizando SIG para avaliação de impactos ambientais.',
    fullDescription: 'Utilizando técnicas avançadas de geoprocessamento, realizamos uma análise completa de riscos ambientais para uma grande mineradora. O projeto incluiu modelagem de dispersão de poluentes, análise de vulnerabilidade do solo e águas subterrâneas, e desenvolvimento de planos de contingência baseados em cenários geoespaciais.',
    galleryImages: [
      'https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1519456264917-42d0aa2a0625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1582554234519-c444adbd0587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    ]
  },
  {
    id: 3,
    title: 'Rede geodésica para obra de infraestrutura',
    category: 'Geodésia',
    image: 'https://images.unsplash.com/photo-1503387837-b154d5074bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80',
    description: 'Implantação de rede geodésica para controle de obra rodoviária.',
    fullDescription: 'Este projeto envolveu a implantação de uma rede geodésica de alta precisão para o controle geométrico de uma obra rodoviária de grande porte. Utilizamos equipamentos GNSS de dupla frequência e realizamos o ajustamento da rede por mínimos quadrados, garantindo precisão milimétrica para todas as fases da construção.',
    galleryImages: [
      'https://images.unsplash.com/photo-1503387837-b154d5074bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80',
      'https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1530256191289-a3d50d2c8265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80'
    ]
  },
  {
    id: 4,
    title: 'Levantamento topográfico para loteamento',
    category: 'Topografia',
    image: 'https://images.unsplash.com/photo-1606425271394-c3ca9aa1fc06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    description: 'Levantamento planialtimétrico para projeto de loteamento residencial.',
    fullDescription: 'Realizamos um levantamento topográfico completo para um loteamento residencial de alto padrão. O trabalho incluiu o levantamento planialtimétrico cadastral, demarcação de lotes, implantação de marcos de referência e elaboração de plantas topográficas detalhadas para o projeto urbanístico.',
    galleryImages: [
      'https://images.unsplash.com/photo-1606425271394-c3ca9aa1fc06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      'https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1512187846776-baf1d3dfdb73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    ]
  },
  {
    id: 5,
    title: 'Mapeamento de áreas de preservação ambiental',
    category: 'Cartografia',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1313&q=80',
    description: 'Cartografia detalhada de áreas de preservação para gestão ambiental.',
    fullDescription: 'Desenvolvemos um mapeamento detalhado de áreas de preservação ambiental para auxiliar na gestão e monitoramento ambiental. O projeto incluiu o uso de imagens de satélite de alta resolução, classificação supervisionada de uso do solo e integração com dados oficiais para delimitação precisa de APPs, reservas legais e unidades de conservação.',
    galleryImages: [
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1313&q=80',
      'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1275&q=80',
      'https://images.unsplash.com/photo-1572099606223-6e29045d7de3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    ]
  },
  {
    id: 6,
    title: 'Análise espacial para rede de distribuição',
    category: 'Geoprocessamento',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    description: 'Geoprocessamento aplicado à otimização de rotas de distribuição logística.',
    fullDescription: 'Utilizando técnicas avançadas de análise espacial e geoprocessamento, desenvolvemos um sistema de otimização de rotas para uma grande rede de distribuição logística. O projeto incluiu análise de rede viária, modelagem de tempos de deslocamento considerando fatores como tráfego e restrições de circulação, resultando em redução significativa de custos operacionais.',
    galleryImages: [
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    ]
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState<(typeof projectsData)[0] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const filteredProjects = activeCategory === 'Todos' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  const handleProjectClick = (project: (typeof projectsData)[0]) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setIsDialogOpen(true);
  };

  const handleNextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.galleryImages.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handlePrevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.galleryImages.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="section-container">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-tecgeo-teal/10 text-tecgeo-teal text-sm font-medium mb-2">
              <span>Soluções</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-tecgeo-blue">Conheça nossas soluções</h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Explore nosso portfólio de soluções executadas com excelência técnica e 
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
              <div 
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
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

      {/* Project Detail Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-4xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl text-tecgeo-blue">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-sm text-gray-500">{selectedProject.category}</DialogDescription>
              </DialogHeader>
              
              <div className="mt-4">
                {/* Image Gallery */}
                <div className="relative rounded-lg overflow-hidden aspect-video mb-6">
                  <img 
                    src={selectedProject.galleryImages[currentImageIndex]} 
                    alt={`${selectedProject.title} - imagem ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Navigation Arrows */}
                  <div className="absolute inset-0 flex items-center justify-between p-4">
                    <button 
                      onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
                      className="w-10 h-10 rounded-full bg-black/30 text-white flex items-center justify-center hover:bg-black/50 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
                      className="w-10 h-10 rounded-full bg-black/30 text-white flex items-center justify-center hover:bg-black/50 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Image Counter */}
                  <div className="absolute bottom-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                    {currentImageIndex + 1} / {selectedProject.galleryImages.length}
                  </div>
                </div>
                
                {/* Thumbnail Navigation */}
                <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                  {selectedProject.galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-20 h-14 flex-shrink-0 rounded-md overflow-hidden border-2 transition-all ${
                        currentImageIndex === idx ? 'border-tecgeo-teal scale-105' : 'border-transparent opacity-70'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
                
                {/* Project Description */}
                <div className="prose prose-sm max-w-none">
                  <h3 className="text-lg font-medium text-tecgeo-blue mb-2">Sobre o projeto</h3>
                  <p className="text-gray-700">{selectedProject.fullDescription}</p>
                </div>
                
                {/* Contact Button */}
                <div className="mt-8 flex justify-end">
                  <a 
                    href="#contact" 
                    onClick={() => setIsDialogOpen(false)}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-tecgeo-teal text-white font-medium hover:bg-tecgeo-teal/90 transition-colors"
                  >
                    Solicitar projeto similar
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
