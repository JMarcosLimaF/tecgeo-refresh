
import React from 'react';
import FadeIn from './FadeIn';
import { Handshake, ExternalLink } from 'lucide-react';
import { Card, CardContent } from './ui/card';

// Define os parceiros com seus dados
const partnersData = [
  {
    id: 1,
    name: 'ESRI',
    description: 'Líder mundial em sistemas de informação geográfica (GIS) e soluções de inteligência de localização.',
    website: 'https://www.esri.com'
  },
  {
    id: 2,
    name: 'Imagem',
    description: 'Empresa especializada em geotecnologias e distribuidora exclusiva dos produtos Esri no Brasil.',
    website: 'https://www.img.com.br'
  }
];

const Partners = () => {
  return (
    <section id="partners" className="py-8 bg-white">
      <div className="section-container">
        <FadeIn>
          <div className="text-center mb-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-tecgeo-teal/10 text-tecgeo-teal text-sm font-medium mb-2">
              <Handshake className="w-4 h-4 mr-2" />
              <span>Parceiros</span>
            </div>
            <h2 className="text-2xl font-bold text-tecgeo-blue">Nossos Parceiros Estratégicos</h2>
            <p className="mt-2 text-sm text-gray-600 max-w-2xl mx-auto">
              Trabalhamos com parceiros líderes do mercado para oferecer as melhores soluções em geotecnologia.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
          {partnersData.map((partner) => (
            <FadeIn key={partner.id} delay={partner.id * 100}>
              <Card className="h-full hover:shadow-sm transition-shadow border-tecgeo-teal/10">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <h3 className="text-lg font-semibold text-tecgeo-blue mb-2">{partner.name}</h3>
                  <p className="text-xs text-gray-600 line-clamp-2">{partner.description}</p>
                  
                  {partner.website && (
                    <a 
                      href={partner.website} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="mt-2 inline-flex items-center text-tecgeo-teal hover:text-tecgeo-teal/80 text-xs font-medium"
                    >
                      Visitar site <ExternalLink className="ml-1 w-3 h-3" />
                    </a>
                  )}
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
