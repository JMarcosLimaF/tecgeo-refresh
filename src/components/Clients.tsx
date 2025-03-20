
import React, { useEffect, useState } from 'react';
import { Building, Landmark } from 'lucide-react';
import FadeIn from './FadeIn';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel';

const clientList = [
  { id: 1, name: 'Prefeitura de Maceió', type: 'municipality' },
  { id: 2, name: 'Prefeitura de Jaboatão dos Guararapes', type: 'municipality' },
  { id: 3, name: 'Prefeitura de Cabedelo', type: 'municipality' },
  { id: 4, name: 'Prefeitura de Campina Grande', type: 'municipality' },
  { id: 5, name: 'Prefeitura de Caruaru', type: 'municipality' },
  { id: 6, name: 'Prefeitura de Ipojuca', type: 'municipality' },
  { id: 7, name: 'Prefeitura de São José do Ribamar', type: 'municipality' },
  { id: 8, name: 'Prefeitura de São Luís', type: 'municipality' },
  { id: 9, name: 'Prefeitura de João Pessoa', type: 'municipality', logo: './lovable-uploads/973264d0-ef7b-406e-82cb-e3343fd3eb43.png' },
  { id: 10, name: 'Prefeitura de Garanhuns', type: 'municipality' },
  { id: 11, name: 'Prefeitura de Recife', type: 'municipality' },
  { id: 12, name: 'Prefeitura de Teresina', type: 'municipality' },
  { id: 13, name: 'Prefeitura de Santa Rita', type: 'municipality' },
  { id: 14, name: 'SEBRAE', type: 'organization' },
  { id: 15, name: 'CAGEPA', type: 'organization', logo: './lovable-uploads/a67fe434-a140-4e15-9bb3-a0e542e7a458.png' },
  { id: 16, name: 'CREA-PB', type: 'organization' },
  { id: 17, name: 'CODATA', type: 'organization' },
];

const Clients = () => {
  const [api, setApi] = useState<any>(null);
  const [imagesLoaded, setImagesLoaded] = useState<{[key: number]: boolean}>({});

  // Track which images are successfully loaded
  const handleImageLoad = (id: number) => {
    setImagesLoaded(prev => ({...prev, [id]: true}));
  };

  const handleImageError = (id: number) => {
    setImagesLoaded(prev => ({...prev, [id]: false}));
    console.error(`Failed to load image for client ${id}`);
  };

  useEffect(() => {
    if (!api) return;

    // Set up auto-scroll interval
    const autoScrollInterval = setInterval(() => {
      if (api) {
        api.scrollNext();
      }
    }, 3000); // Scroll every 3 seconds

    // Clean up interval on component unmount
    return () => {
      clearInterval(autoScrollInterval);
    };
  }, [api]);

  return (
    <section id="clients" className="py-16 bg-gray-50">
      <div className="section-container">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Clientes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Trabalhamos com diversas prefeituras e organizações em todo o Brasil, 
              fornecendo soluções geoespaciais personalizadas e de alta qualidade.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="mt-8">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              setApi={setApi}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {clientList.map((client) => (
                  <CarouselItem key={client.id} className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 h-36 flex flex-col items-center justify-center hover:shadow-md hover:border-secondary/20 transition-all duration-300">
                      {client.logo ? (
                        <div className="h-20 flex items-center justify-center mb-2">
                          {imagesLoaded[client.id] !== false && (
                            <img 
                              src={client.logo} 
                              alt={client.name} 
                              className="max-h-16 max-w-full object-contain" 
                              onLoad={() => handleImageLoad(client.id)}
                              onError={() => handleImageError(client.id)}
                            />
                          )}
                          {imagesLoaded[client.id] === false && (
                            client.type === 'municipality' ? (
                              <Landmark className="h-8 w-8 text-secondary" />
                            ) : (
                              <Building className="h-8 w-8 text-accent" />
                            )
                          )}
                        </div>
                      ) : (
                        <div className="mb-2">
                          {client.type === 'municipality' ? (
                            <Landmark className="h-8 w-8 text-secondary" />
                          ) : (
                            <Building className="h-8 w-8 text-accent" />
                          )}
                        </div>
                      )}
                      <h3 className="font-medium text-center text-sm">{client.name}</h3>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden md:block">
                <CarouselPrevious className="left-0" />
                <CarouselNext className="right-0" />
              </div>
            </Carousel>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Clients;
