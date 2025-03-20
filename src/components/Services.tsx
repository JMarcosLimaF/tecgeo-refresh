import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { MapPin, Globe, Map, Building, Truck, Database, GraduationCap, BarChart3, View } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const serviceItems = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Aquisição de Informação Aérea',
    description: 'Aerofotogrametria, imagens de satélites e drones para coleta de dados geoespaciais de alta qualidade.',
    color: 'bg-blue-50 text-blue-500',
    fullDescription: 'Utilizamos tecnologias avançadas de sensoriamento remoto para aquisição de dados geoespaciais, incluindo aerofotogrametria com aviões equipados com câmeras métricas, imageamento orbital com satélites de alta e média resolução, e levantamentos com drones (VANTs) para áreas menores ou de difícil acesso. Todos os processos seguem rigorosos padrões de qualidade, garantindo precisão e confiabilidade dos dados coletados.',
    galleryImages: [
      'https://images.unsplash.com/photo-1508614589041-895b88991e3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    ]
  },
  {
    icon: <Map className="w-6 h-6" />,
    title: 'Base Cartográfica',
    description: 'Produção de Base Cartográfica Digital de Precisão com os mais altos padrões técnicos.',
    color: 'bg-teal-50 text-teal-500',
    fullDescription: 'Desenvolvemos bases cartográficas digitais de precisão seguindo os mais altos padrões técnicos internacionais. Nosso processo inclui restituição fotogramétrica, ortorretificação de imagens, geração de modelos digitais de terreno (MDT) e de superfície (MDS), e produtos derivados como curvas de nível, hidrografia, sistema viário e uso do solo. Todas as bases são validadas quanto à precisão posicional conforme normas técnicas vigentes.',
    galleryImages: [
      'https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80',
      'https://images.unsplash.com/photo-1575505586569-646b2ca898fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1005&q=80',
      'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    ]
  },
  {
    icon: <Building className="w-6 h-6" />,
    title: 'Cadastro Urbano e Rural',
    description: 'CAR, Cadastro Fundiário, Imobiliário, Socioeconômico e Multifinalitário para gestão territorial eficiente.',
    color: 'bg-amber-50 text-amber-500',
    fullDescription: 'Realizamos levantamentos cadastrais completos para áreas urbanas e rurais, incluindo Cadastro Ambiental Rural (CAR), Cadastro Fundiário, Cadastro Imobiliário e Socioeconômico. Nossa metodologia integra levantamentos de campo com técnicas avançadas de geoprocessamento para criar bases cadastrais multifinalitárias que atendem às necessidades de gestão territorial dos municípios e proprietários rurais, em conformidade com a legislação vigente.',
    galleryImages: [
      'https://images.unsplash.com/photo-1513807016779-d51c0c026263?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
      'https://images.unsplash.com/photo-1492138645880-160f6a5136fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    ]
  },
  {
    icon: <View className="w-6 h-6" />,
    title: 'Mapeamento Móvel 360º',
    description: 'Imageamento de fachadas e infraestrutura com tecnologia avançada para visualização completa.',
    color: 'bg-purple-50 text-purple-500',
    fullDescription: 'Utilizamos tecnologia de mapeamento móvel 360° para captura de imagens georreferenciadas de alta resolução do ambiente urbano. Com câmeras omnidirecionais montadas em veículos, coletamos imagens de fachadas, equipamentos urbanos e infraestrutura, permitindo visualizações imersivas e medições remotas. Esta solução é ideal para inventário de ativos urbanos, planejamento de obras e documentação visual do ambiente construído.',
    galleryImages: [
      'https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
      'https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1520763185298-1b434c919102?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80'
    ]
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: 'Mapeamento Urbano e Rural',
    description: 'Levantamento de dados no meio Urbano e Rural para planejamento territorial estratégico.',
    color: 'bg-green-50 text-green-500',
    fullDescription: 'Realizamos mapeamentos completos de áreas urbanas e rurais com foco em planejamento territorial. Nossos serviços incluem mapeamento de uso e ocupação do solo, vegetação, hidrografia, sistema viário, e áreas de interesse especial. Utilizamos múltiplas fontes de dados (imagens de satélite, aerolevantamentos e levantamentos de campo) para gerar produtos cartográficos precisos que subsidiam o planejamento estratégico territorial.',
    galleryImages: [
      'https://images.unsplash.com/photo-1513124146946-c2fab48ad3a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1633&q=80',
      'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    ]
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Planta de Valores Genéricos',
    description: 'Geração de Planta de Valores Genéricos (PVG) para atualização da base tributária municipal.',
    color: 'bg-indigo-50 text-indigo-500',
    fullDescription: 'Desenvolvemos Plantas de Valores Genéricos (PVG) para atualização da base tributária municipal. Nossa metodologia combina análise estatística avançada com geoprocessamento para determinar valores de referência para imóveis urbanos, considerando fatores como localização, infraestrutura, topografia e dinâmica imobiliária. O resultado é uma base justa e tecnicamente fundamentada para o cálculo do IPTU e ITBI, aumentando a arrecadação municipal de forma equitativa.',
    galleryImages: [
      'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1557&q=80'
    ]
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: 'Desenvolvimento de SIG',
    description: 'Desenvolvimento e Implantação de Sistemas de Informações Geográficas (SIG) customizados.',
    color: 'bg-red-50 text-red-500',
    fullDescription: 'Desenvolvemos e implantamos Sistemas de Informações Geográficas (SIG) customizados para atender às necessidades específicas de cada cliente. Nossos sistemas integram diferentes camadas de informação geoespacial em plataformas intuitivas e acessíveis, facilitando a visualização, análise e gestão de dados territoriais. Oferecemos desde a concepção do sistema até sua implantação, incluindo migração de dados, treinamento e suporte técnico continuado.',
    galleryImages: [
      'https://images.unsplash.com/photo-1581092335397-9583eb92d232?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    ]
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: 'Consultoria & Treinamento',
    description: 'Consultoria e Treinamento nas mais diversas ferramentas de geotecnologia para sua equipe.',
    color: 'bg-emerald-50 text-emerald-500',
    fullDescription: 'Oferecemos serviços de consultoria técnica especializada e treinamentos personalizados em geotecnologias. Nossa equipe de especialistas fornece orientação em todas as etapas de projetos de geoinformação, desde a concepção até a implementação. Os treinamentos abrangem diversas ferramentas e metodologias, incluindo sistemas de informação geográfica, processamento de imagens, cartografia digital e análise espacial, capacitando sua equipe para extrair o máximo das geotecnologias.',
    galleryImages: [
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80'
    ]
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Data Science e BI',
    description: 'Painéis Inteligentes com técnicas avançadas de Data Science e Business Intelligence.',
    color: 'bg-cyan-50 text-cyan-500',
    fullDescription: 'Integramos técnicas avançadas de Data Science e Business Intelligence para transformar dados geoespaciais em insights estratégicos. Desenvolvemos dashboards interativos e painéis de controle que permitem visualizar informações territoriais de forma clara e objetiva, facilitando a tomada de decisões. Nossos especialistas utilizam algoritmos de machine learning e análise estatística para identificar padrões espaciais e tendências que apoiam o planejamento e a gestão territorial.',
    galleryImages: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1551503766-ac63dfa6401c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1426&q=80'
    ]
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<(typeof serviceItems)[0] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleServiceClick = (service: (typeof serviceItems)[0]) => {
    setSelectedService(service);
    setCurrentImageIndex(0);
    setIsDialogOpen(true);
  };

  const handleNextImage = () => {
    if (selectedService) {
      setCurrentImageIndex((prev) => 
        prev === selectedService.galleryImages.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handlePrevImage = () => {
    if (selectedService) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedService.galleryImages.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="section-container">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-tecgeo-teal/10 text-tecgeo-teal text-sm font-medium mb-2">
              <span>Nossos Serviços</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-tecgeo-blue">Soluções personalizadas em Geotecnologia</h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Oferecemos um portfólio completo de serviços técnicos para atender às suas necessidades em geoinformação.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <FadeIn key={index} delay={index * 100} direction="up">
              <div 
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 cursor-pointer"
                onClick={() => handleServiceClick(service)}
              >
                <div className={`${service.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-tecgeo-blue mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={300}>
          <div className="mt-16 text-center">
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 rounded-full bg-tecgeo-teal text-white font-medium hover:bg-tecgeo-blue transition-colors shadow-lg hover:shadow-xl"
            >
              Solicitar Orçamento
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Service Detail Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-4xl">
          {selectedService && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl text-tecgeo-blue">{selectedService.title}</DialogTitle>
                <DialogDescription className="text-sm text-gray-500">
                  Soluções personalizadas em Geotecnologia
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4">
                {/* Image Gallery */}
                <div className="relative rounded-lg overflow-hidden aspect-video mb-6">
                  <img 
                    src={selectedService.galleryImages[currentImageIndex]} 
                    alt={`${selectedService.title} - imagem ${currentImageIndex + 1}`}
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
                    {currentImageIndex + 1} / {selectedService.galleryImages.length}
                  </div>
                </div>
                
                {/* Thumbnail Navigation */}
                <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                  {selectedService.galleryImages.map((img, idx) => (
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
                
                {/* Service Description */}
                <div className="prose prose-sm max-w-none">
                  <h3 className="text-lg font-medium text-tecgeo-blue mb-2">Sobre o serviço</h3>
                  <p className="text-gray-700">{selectedService.fullDescription}</p>
                </div>
                
                {/* Contact Button */}
                <div className="mt-8 flex justify-end">
                  <a 
                    href="#contact" 
                    onClick={() => setIsDialogOpen(false)}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-tecgeo-teal text-white font-medium hover:bg-tecgeo-teal/90 transition-colors"
                  >
                    Solicitar orçamento
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

export default Services;

