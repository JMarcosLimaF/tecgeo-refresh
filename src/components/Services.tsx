
import React from 'react';
import FadeIn from './FadeIn';
import { MapPin, Globe, Map, Compass, Building, Truck, Database, GraduationCap, BarChart3 } from 'lucide-react';

const serviceItems = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Aquisição de Informação Aérea',
    description: 'Aerofotogrametria, imagens de satélites e drones para coleta de dados geoespaciais de alta qualidade.',
    color: 'bg-blue-50 text-blue-500'
  },
  {
    icon: <Map className="w-6 h-6" />,
    title: 'Base Cartográfica',
    description: 'Produção de Base Cartográfica Digital de Precisão com os mais altos padrões técnicos.',
    color: 'bg-teal-50 text-teal-500'
  },
  {
    icon: <Building className="w-6 h-6" />,
    title: 'Cadastro Urbano e Rural',
    description: 'CAR, Cadastro Fundiário, Imobiliário, Socioeconômico e Multifinalitário para gestão territorial eficiente.',
    color: 'bg-amber-50 text-amber-500'
  },
  {
    icon: <Compass className="w-6 h-6" />,
    title: 'Mapeamento Móvel 360º',
    description: 'Imageamento de fachadas e infraestrutura com tecnologia avançada para visualização completa.',
    color: 'bg-purple-50 text-purple-500'
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: 'Mapeamento Urbano e Rural',
    description: 'Levantamento de dados no meio Urbano e Rural para planejamento territorial estratégico.',
    color: 'bg-green-50 text-green-500'
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Planta de Valores Genéricos',
    description: 'Geração de Planta de Valores Genéricos (PVG) para atualização da base tributária municipal.',
    color: 'bg-indigo-50 text-indigo-500'
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: 'Desenvolvimento de SIG',
    description: 'Desenvolvimento e Implantação de Sistemas de Informações Geográficas (SIG) customizados.',
    color: 'bg-red-50 text-red-500'
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: 'Consultoria & Treinamento',
    description: 'Consultoria e Treinamento nas mais diversas ferramentas de geotecnologia para sua equipe.',
    color: 'bg-emerald-50 text-emerald-500'
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Data Science e BI',
    description: 'Painéis Inteligentes com técnicas avançadas de Data Science e Business Intelligence.',
    color: 'bg-cyan-50 text-cyan-500'
  }
];

const Services = () => {
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
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
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
    </section>
  );
};

export default Services;
