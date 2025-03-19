
import React from 'react';
import FadeIn from './FadeIn';
import AnimatedMap from './AnimatedMap';
import { ArrowRight, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <AnimatedMap />
      </div>
      
      {/* Content */}
      <div className="section-container relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <FadeIn>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-tecgeo-teal/10 text-tecgeo-teal text-sm font-medium mb-2">
                <MapPin size={16} className="mr-1" />
                <span>Soluções em Geotecnologia</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={200}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-tecgeo-blue">
                Transformando a gestão pública <br />
                com <span className="text-tecgeo-teal">geotecnologia</span> e inovação!
              </h1>
            </FadeIn>
            
            <FadeIn delay={400}>
              <p className="text-lg text-gray-600 max-w-lg">
                Combinamos expertise técnica e inovação para desenvolver soluções 
                precisas em cartografia, geoprocessamento e levantamentos geodésicos.
              </p>
            </FadeIn>
            
            <FadeIn delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href="#services" 
                  className="px-6 py-3 rounded-full bg-tecgeo-teal text-white font-medium hover:bg-tecgeo-blue transition-colors shadow-lg hover:shadow-xl text-center"
                >
                  Conheça Nossos Serviços
                </a>
                <a 
                  href="#contact" 
                  className="px-6 py-3 rounded-full border border-tecgeo-blue text-tecgeo-blue font-medium hover:bg-tecgeo-blue hover:text-white transition-colors flex items-center justify-center"
                >
                  Fale Conosco <ArrowRight size={18} className="ml-2" />
                </a>
              </div>
            </FadeIn>
          </div>
          
          <FadeIn direction="left" delay={400}>
            <div className="relative">
              <div className="w-full h-[400px] lg:h-[500px] relative overflow-hidden rounded-2xl shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-tecgeo-teal/20 to-tecgeo-blue/30 mix-blend-overlay z-10"></div>
                <img 
                  src="/lovable-uploads/a77ee97e-fab8-40e1-832d-e4385fec4b32.png" 
                  alt="Vista aérea de bairro residencial" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -bottom-6 -left-6 glass p-4 rounded-xl shadow-lg animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-tecgeo-teal/20">
                    <MapPin className="text-tecgeo-teal" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-tecgeo-blue">Precisão Geodésica</h4>
                    <p className="text-xs text-gray-500">Tecnologia avançada</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-4 -right-4 glass p-4 rounded-xl shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-tecgeo-amber/20">
                    <svg className="text-tecgeo-amber" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-tecgeo-blue">Análise de Dados</h4>
                    <p className="text-xs text-gray-500">Soluções inteligentes</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
      
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
