
import React, { useEffect, useState } from 'react';
import FadeIn from './FadeIn';
import { Handshake, Building } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const partnersData = [
  {
    id: 1,
    name: 'ESRI',
    description: 'Líder mundial em sistemas de informação geográfica (GIS) e soluções de inteligência de localização.',
    logo: '/lovable-uploads/ee2dc2b6-268e-4427-8275-180af3cb4e95.png'
  },
  {
    id: 2,
    name: 'Imagem',
    description: 'Empresa especializada em geotecnologias e distribuidora exclusiva dos produtos Esri no Brasil.',
    logo: null
  }
];

const Partners = () => {
  const [imagesLoaded, setImagesLoaded] = useState<{[key: string]: boolean}>({});
  
  useEffect(() => {
    // Preload images
    partnersData.forEach(partner => {
      if (partner.logo) {
        const img = new Image();
        img.onload = () => {
          setImagesLoaded(prev => ({...prev, [partner.id]: true}));
        };
        img.onerror = () => {
          console.error(`Failed to load image for partner: ${partner.name}`);
        };
        img.src = partner.logo;
      }
    });
  }, []);

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
                    <div className="w-32 h-32 flex items-center justify-center mb-4 border border-gray-100 rounded-md overflow-hidden">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`} 
                        className="max-h-28 max-w-28 object-contain" 
                        onError={(e) => {
                          console.error(`Error loading image: ${partner.logo}`);
                          // Fallback to icon if image fails to load
                          e.currentTarget.style.display = 'none';
                          // We'll add a data attribute so we can style a fallback
                          e.currentTarget.parentElement?.setAttribute('data-image-error', 'true');
                        }}
                      />
                      <div className={`hidden ${imagesLoaded[partner.id] ? 'hidden' : 'flex'} items-center justify-center`}>
                        <Building size={48} className="text-tecgeo-teal/50" />
                      </div>
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
