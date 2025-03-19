import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerClose } from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Check, Calendar, MapPin, Banknote } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface Job {
  id: number;
  title: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
}

const jobs: Job[] = [
  {
    id: 1,
    title: 'Analista de Geoprocessamento',
    location: 'João Pessoa, PB',
    type: 'Tempo integral',
    salary: 'R$ 3.000 - R$ 4.500',
    description: 'Estamos buscando um analista de geoprocessamento para atuar em projetos de mapeamento e análise espacial.',
    requirements: [
      'Formação em Geografia, Engenharia Cartográfica ou áreas afins',
      'Experiência com software ESRI (ArcGIS)',
      'Conhecimento em cartografia e sensoriamento remoto',
      'Habilidade para trabalhar em equipe'
    ],
    responsibilities: [
      'Realizar processamento e análise de dados geoespaciais',
      'Desenvolver mapas temáticos e produtos cartográficos',
      'Participar de projetos de consultoria técnica',
      'Apoiar no desenvolvimento de soluções geotecnológicas'
    ],
    benefits: [
      'Plano de saúde',
      'Vale alimentação',
      'Auxílio educação para cursos de especialização',
      'Ambiente de trabalho colaborativo'
    ]
  },
  {
    id: 2,
    title: 'Desenvolvedor(a) SIG',
    location: 'Remoto',
    type: 'Tempo integral',
    salary: 'R$ 4.500 - R$ 6.000',
    description: 'Procuramos desenvolvedor(a) para criar soluções web e mobile com foco em sistemas de informação geográfica.',
    requirements: [
      'Formação em Ciência da Computação, Engenharia ou áreas afins',
      'Experiência com ArcGIS API, Leaflet ou OpenLayers',
      'Conhecimento em JavaScript, React e TypeScript',
      'Compreensão de conceitos de GIS e cartografia'
    ],
    responsibilities: [
      'Desenvolver aplicações web e mobile com componentes GIS',
      'Implementar soluções de visualização de dados espaciais',
      'Integrar APIs e serviços geoespaciais',
      'Participar de todas as fases do desenvolvimento de software'
    ],
    benefits: [
      'Trabalho remoto com horário flexível',
      'Plano de saúde',
      'Auxílio para home office',
      'Oportunidades de crescimento na carreira'
    ]
  },
  {
    id: 3,
    title: 'Especialista em Cartografia',
    location: 'João Pessoa, PB',
    type: 'Tempo integral',
    salary: 'R$ 4.000 - R$ 5.500',
    description: 'Buscamos especialista em cartografia para atuar em projetos de mapeamento de alta precisão.',
    requirements: [
      'Formação em Engenharia Cartográfica, Geografia ou áreas afins',
      'Experiência com produção cartográfica e geodésia',
      'Conhecimento em padrões cartográficos e normas técnicas',
      'Domínio de ferramentas CAD e GIS'
    ],
    responsibilities: [
      'Elaborar e revisar produtos cartográficos',
      'Realizar controle de qualidade em bases cartográficas',
      'Apoiar projetos de mapeamento sistemático',
      'Desenvolver metodologias para melhoria de processos cartográficos'
    ],
    benefits: [
      'Plano de saúde e odontológico',
      'Vale refeição/alimentação',
      'Participação nos lucros',
      'Programa de desenvolvimento profissional'
    ]
  }
];

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [open, setOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const isMobile = useIsMobile();
  
  const handleOpenJobDetails = (job: Job) => {
    setSelectedJob(job);
    setOpen(true);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    
    // Reset form after 5 seconds for demo purposes
    setTimeout(() => {
      setFormSubmitted(false);
      setOpen(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20">
        <div className="section-container">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-tecgeo-teal/10 text-tecgeo-teal text-sm font-medium mb-2">
                <span>Carreiras</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-tecgeo-blue">Oportunidades na TecGEO</h1>
              <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                Confira nossas vagas disponíveis e faça parte de uma equipe inovadora no setor de geotecnologia.
              </p>
              <Link to="/" className="inline-flex items-center text-tecgeo-blue hover:text-tecgeo-teal mt-6">
                <ArrowLeft size={16} className="mr-2" />
                Voltar para a página inicial
              </Link>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <FadeIn key={job.id} delay={job.id * 100}>
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-semibold text-tecgeo-blue mb-3">{job.title}</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <MapPin size={16} className="mr-2 text-tecgeo-teal" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar size={16} className="mr-2 text-tecgeo-teal" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Banknote size={16} className="mr-2 text-tecgeo-teal" />
                      <span>{job.salary}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 line-clamp-3">{job.description}</p>
                  
                  <Button 
                    onClick={() => handleOpenJobDetails(job)}
                    className="w-full bg-tecgeo-blue hover:bg-tecgeo-teal transition-colors"
                  >
                    Ver detalhes
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </main>
      
      {!isMobile ? (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl text-tecgeo-blue">
                {selectedJob?.title}
              </DialogTitle>
            </DialogHeader>
            
            {selectedJob && (
              <div className="mt-4">
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    <MapPin size={14} className="mr-1 text-tecgeo-teal" />
                    <span>{selectedJob.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    <Calendar size={14} className="mr-1 text-tecgeo-teal" />
                    <span>{selectedJob.type}</span>
                  </div>
                  <div className="flex items-center text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    <Banknote size={14} className="mr-1 text-tecgeo-teal" />
                    <span>{selectedJob.salary}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-tecgeo-blue mb-2">Descrição da vaga</h3>
                  <p className="text-gray-600">{selectedJob.description}</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-tecgeo-blue mb-2">Requisitos</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {selectedJob.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-tecgeo-blue mb-2">Responsabilidades</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {selectedJob.responsibilities.map((resp, index) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-lg font-medium text-tecgeo-blue mb-2">Benefícios</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {selectedJob.benefits.map((ben, index) => (
                      <li key={index}>{ben}</li>
                    ))}
                  </ul>
                </div>
                
                {formSubmitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-6 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-500 mb-4">
                      <Check size={24} />
                    </div>
                    <h4 className="text-xl font-semibold text-tecgeo-blue mb-2">Candidatura enviada!</h4>
                    <p className="text-gray-600">Obrigado pelo seu interesse. Analisaremos seu currículo e entraremos em contato.</p>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-lg font-medium text-tecgeo-blue mb-4">Candidate-se a esta vaga</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome completo</label>
                          <input 
                            type="text" 
                            id="name" 
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-tecgeo-teal/50 focus:border-tecgeo-teal"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                          <input 
                            type="email" 
                            id="email" 
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-tecgeo-teal/50 focus:border-tecgeo-teal"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                          <input 
                            type="tel" 
                            id="phone" 
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-tecgeo-teal/50 focus:border-tecgeo-teal"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1">LinkedIn (opcional)</label>
                          <input 
                            type="url" 
                            id="linkedin" 
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-tecgeo-teal/50 focus:border-tecgeo-teal"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">Currículo (PDF)</label>
                        <input 
                          type="file" 
                          id="resume" 
                          accept=".pdf"
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-tecgeo-teal/50 focus:border-tecgeo-teal"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem (opcional)</label>
                        <textarea 
                          id="message" 
                          rows={4} 
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-tecgeo-teal/50 focus:border-tecgeo-teal"
                          placeholder="Conte-nos sobre você e sua experiência..."
                        ></textarea>
                      </div>
                      
                      <div className="flex justify-end">
                        <Button 
                          type="submit" 
                          className="bg-tecgeo-teal hover:bg-tecgeo-blue transition-colors"
                        >
                          Enviar candidatura
                          <ArrowRight size={16} className="ml-2" />
                        </Button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>
      ) : (
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerContent className="max-h-[90vh] overflow-y-auto">
            <DrawerHeader>
              <DrawerTitle className="text-xl text-tecgeo-blue">
                {selectedJob?.title}
              </DrawerTitle>
              <DrawerClose />
            </DrawerHeader>
            
            {selectedJob && (
              <div className="px-4 pb-6">
                <div className="flex flex-wrap gap-2 mb-6">
                  <div className="flex items-center text-gray-600 bg-gray-100 px-2 py-1 rounded-full text-sm">
                    <MapPin size={12} className="mr-1 text-tecgeo-teal" />
                    <span>{selectedJob.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600 bg-gray-100 px-2 py-1 rounded-full text-sm">
                    <Calendar size={12} className="mr-1 text-tecgeo-teal" />
                    <span>{selectedJob.type}</span>
                  </div>
                  <div className="flex items-center text-gray-600 bg-gray-100 px-2 py-1 rounded-full text-sm">
                    <Banknote size={12} className="mr-1 text-tecgeo-teal" />
                    <span>{selectedJob.salary}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-tecgeo-blue mb-2">Descrição da vaga</h3>
                  <p className="text-gray-600">{selectedJob.description}</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-tecgeo-blue mb-2">Requisitos</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                    {selectedJob.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-tecgeo-blue mb-2">Responsabilidades</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                    {selectedJob.responsibilities.map((resp, index) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-lg font-medium text-tecgeo-blue mb-2">Benefícios</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                    {selectedJob.benefits.map((ben, index) => (
                      <li key={index}>{ben}</li>
                    ))}
                  </ul>
                </div>
                
                {formSubmitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-6 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-500 mb-4">
                      <Check size={24} />
                    </div>
                    <h4 className="text-lg font-semibold text-tecgeo-blue mb-2">Candidatura enviada!</h4>
                    <p className="text-gray-600 text-sm">Obrigado pelo seu interesse. Analisaremos seu currículo e entraremos em contato.</p>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-lg font-medium text-tecgeo-blue mb-4">Candidate-se a esta vaga</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="m-name" className="block text-sm font-medium text-gray-700 mb-1">Nome completo</label>
                        <input 
                          type="text" 
                          id="m-name" 
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-tecgeo-teal/50 focus:border-tecgeo-teal"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="m-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input 
                          type="email" 
                          id="m-email" 
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-tecgeo-teal/50 focus:border-tecgeo-teal"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="m-phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                        <input 
                          type="tel" 
                          id="m-phone" 
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-tecgeo-teal/50 focus:border-tecgeo-teal"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="m-resume" className="block text-sm font-medium text-gray-700 mb-1">Currículo (PDF)</label>
                        <input 
                          type="file" 
                          id="m-resume" 
                          accept=".pdf"
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-tecgeo-teal/50 focus:border-tecgeo-teal"
                          required
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-tecgeo-teal hover:bg-tecgeo-blue transition-colors"
                      >
                        Enviar candidatura
                        <ArrowRight size={16} className="ml-2" />
                      </Button>
                    </form>
                  </div>
                )}
              </div>
            )}
          </DrawerContent>
        </Drawer>
      )}
      
      <Footer />
    </div>
  );
};

export default Careers;
