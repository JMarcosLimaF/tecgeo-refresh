
import React from 'react';
import FadeIn from './FadeIn';
import { MapPin, Globe, Map, Compass, Database, PenTool } from 'lucide-react';

const serviceItems = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Levantamento Topográfico',
    description: 'Levantamentos topográficos com precisão milimétrica utilizando equipamentos de alta tecnologia.',
    color: 'bg-blue-50 text-blue-500'
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Geoprocessamento',
    description: 'Processamento e análise de dados geoespaciais para tomada de decisões estratégicas.',
    color: 'bg-teal-50 text-teal-500'
  },
  {
    icon: <Map className="w-6 h-6" />,
    title: 'Cartografia Digital',
    description: 'Produção de mapas digitais e plantas topográficas com alto padrão de qualidade.',
    color: 'bg-amber-50 text-amber-500'
  },
  {
    icon: <Compass className="w-6 h-6" />,
    title: 'Geodésia e GPS',
    description: 'Levantamentos geodésicos e rastreamento GPS para georreferenciamento de imóveis.',
    color: 'bg-purple-50 text-purple-500'
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: 'Banco de Dados Geográficos',
    description: 'Desenvolvimento e implementação de bancos de dados geográficos para gestão territorial.',
    color: 'bg-green-50 text-green-500'
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    title: 'Projetos de Engenharia',
    description: 'Elaboração de projetos de engenharia com suporte de tecnologias geoespaciais.',
    color: 'bg-indigo-50 text-indigo-500'
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
