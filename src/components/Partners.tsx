
import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { Handshake, Building, ExternalLink } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { AspectRatio } from './ui/aspect-ratio';

const partnersData = [
  {
    id: 1,
    name: 'ESRI',
    description: 'Líder mundial em sistemas de informação geográfica (GIS) e soluções de inteligência de localização.',
    logo: '/lovable-uploads/4240845f-383a-4238-ae33-1b4f4a51482f.png',
    website: 'https://www.esri.com'
  },
  {
    id: 2,
    name: 'Imagem',
    description: 'Empresa especializada em geotecnologias e distribuidora exclusiva dos produtos Esri no Brasil.',
    logo: null,
    website: 'https://www.img.com.br'
  }
];

const Partners = () => {
  const [imageErrors, setImageErrors] = useState<{[key: number]: boolean}>({});

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
                  {partner.logo && !imageErrors[partner.id] ? (
                    <div className="w-full max-w-[240px] border border-gray-200 rounded-md p-6 mb-4 bg-white">
                      <AspectRatio ratio={16/9} className="bg-white">
                        <img 
                          src={partner.logo} 
                          alt={`${partner.name} logo`} 
                          className="w-full h-full object-contain" 
                          onError={() => {
                            console.log(`Error loading image for ${partner.name}`);
                            setImageErrors(prev => ({...prev, [partner.id]: true}));
                          }}
                        />
                      </AspectRatio>
                    </div>
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-tecgeo-teal/10 flex items-center justify-center text-tecgeo-teal mb-4">
                      <Building size={36} />
                    </div>
                  )}
                  <h3 className="text-xl font-semibold text-tecgeo-blue">{partner.name}</h3>
                  <p className="mt-2 text-gray-600">{partner.description}</p>
                  
                  {partner.website && (
                    <a 
                      href={partner.website} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="mt-4 inline-flex items-center text-tecgeo-teal hover:text-tecgeo-teal/80 text-sm font-medium"
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
