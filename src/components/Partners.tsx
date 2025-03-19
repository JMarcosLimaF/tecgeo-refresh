
import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { Handshake, ExternalLink, ImageIcon } from 'lucide-react';
import { Card, CardContent } from './ui/card';

// Define os parceiros com seus dados
const partnersData = [
  {
    id: 1,
    name: 'ESRI',
    description: 'Líder mundial em sistemas de informação geográfica (GIS) e soluções de inteligência de localização.',
    logo: '/esri-logo.png', // Use a static image that exists in the public directory
    website: 'https://www.esri.com'
  },
  {
    id: 2,
    name: 'Imagem',
    description: 'Empresa especializada em geotecnologias e distribuidora exclusiva dos produtos Esri no Brasil.',
    logo: '/imagem-logo.png', // Use a static image that exists in the public directory
    website: 'https://www.img.com.br'
  }
];

const Partners = () => {
  // Estado para controlar imagens com erro de carregamento
  const [imageErrors, setImageErrors] = useState<{[key: number]: boolean}>({});

  const handleImageError = (id: number) => {
    console.log(`Erro ao carregar imagem do parceiro ${id}`);
    setImageErrors(prev => ({...prev, [id]: true}));
  };

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
                  <div className="w-full max-w-[240px] mb-6 flex items-center justify-center min-h-[120px]">
                    {!imageErrors[partner.id] ? (
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`} 
                        className="max-w-full max-h-[120px] object-contain" 
                        onError={() => handleImageError(partner.id)}
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-gray-400">
                        <ImageIcon size={48} />
                        <span className="mt-2 text-sm">Logo não disponível</span>
                      </div>
                    )}
                  </div>
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
