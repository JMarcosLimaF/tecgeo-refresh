
import React from 'react';
import FadeIn from './FadeIn';
import { CheckCircle, Award, Users, BarChart } from 'lucide-react';

const About = () => {
  const stats = [
    { value: '20+', label: 'Anos de experiência' },
    { value: '200+', label: 'Projetos concluídos' },
    { value: '50+', label: 'Clientes satisfeitos' },
    { value: '9/10', label: 'Avaliação de satisfação' },
  ];

  const values = [
    { 
      icon: <CheckCircle className="w-5 h-5" />, 
      title: 'Precisão e qualidade', 
      description: 'Compromisso com os mais altos padrões de precisão em todos os projetos.'
    },
    { 
      icon: <Award className="w-5 h-5" />, 
      title: 'Excelência técnica', 
      description: 'Equipe altamente qualificada e em constante atualização tecnológica.'
    },
    { 
      icon: <Users className="w-5 h-5" />, 
      title: 'Foco no cliente', 
      description: 'Soluções personalizadas que atendem às necessidades específicas de cada cliente.'
    },
    { 
      icon: <BarChart className="w-5 h-5" />, 
      title: 'Inovação contínua', 
      description: 'Adoção das mais recentes tecnologias e metodologias do mercado.'
    },
  ];

  return (
    <section id="about" className="py-20">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <FadeIn>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-tecgeo-teal/10 text-tecgeo-teal text-sm font-medium mb-2">
                <span>Sobre Nós</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-tecgeo-blue mb-6">
                Experiência e inovação em geotecnologia desde 2005
              </h2>
              <p className="text-gray-600 mb-8">
                A TecGEO é uma empresa especializada em serviços de geotecnologia, 
                oferecendo soluções completas em cartografia, geoprocessamento e 
                levantamentos geodésicos. Com uma equipe de profissionais altamente 
                qualificados, garantimos a excelência em cada projeto.
              </p>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="space-y-4 mb-8">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-tecgeo-teal mr-3 mt-1">{value.icon}</div>
                    <div>
                      <h4 className="font-semibold text-tecgeo-blue">{value.title}</h4>
                      <p className="text-gray-600 text-sm">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={400}>
              <a 
                href="#projects" 
                className="inline-flex items-center font-medium text-tecgeo-teal hover:text-tecgeo-blue"
              >
                Conheça nossos projetos
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </FadeIn>
          </div>

          <FadeIn direction="left">
            <div className="relative">
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Equipe TecGEO" 
                  className="w-full h-auto rounded-2xl object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tecgeo-blue/30 to-transparent"></div>
              </div>

              {/* Stats Card */}
              <div className="absolute -bottom-10 -right-10 z-20 glass p-6 rounded-xl shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-tecgeo-teal">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Background decorative element */}
              <div className="absolute -left-10 -top-10 w-64 h-64 bg-tecgeo-teal/10 rounded-full -z-10"></div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;
