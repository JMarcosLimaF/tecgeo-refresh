
import React from 'react';
import FadeIn from './FadeIn';
import { Handshake, Building } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const partnersData = [
  {
    id: 1,
    name: 'ESRI',
    description: 'Líder mundial em sistemas de informação geográfica (GIS) e soluções de inteligência de localização.',
    logo: '/esri-logo.png'
  },
  {
    id: 2,
    name: 'Imagem',
    description: 'Empresa especializada em geotecnologias e distribuidora exclusiva dos produtos Esri no Brasil.',
    logo: null
  }
];

const Partners = () => {
  return (
    <section id="partners" className="py-16 bg-white">
      <div className="section-container">
        <FadeIn>
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-tecgeo-teal/10 text-tecgeo-teal text-sm font-medium mb-2">
              <Handshake className="w-4 h-4 mr-2" />
              <span>Parceiros</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-tecgeo-blue">Nossos Parceiros Estratégicos</h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Trabalhamos com parceiros líderes do mercado para oferecer as melhores soluções em geotecnologia para nossos clientes.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {partnersData.map((partner) => (
            <FadeIn key={partner.id} delay={partner.id * 100}>
              <Card className="h-full hover:shadow-md transition-shadow border-tecgeo-teal/10">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  {partner.logo ? (
                    <div className="w-16 h-16 flex items-center justify-center mb-4">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`} 
                        className="max-h-16 max-w-full object-contain" 
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-tecgeo-teal/10 flex items-center justify-center text-tecgeo-teal mb-4">
                      <Building size={32} />
                    </div>
                  )}
                  <h3 className="text-xl font-semibold text-tecgeo-blue">{partner.name}</h3>
                  <p className="mt-2 text-gray-600">{partner.description}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
