
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Users, FileText, Clock } from 'lucide-react';

const Careers = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="section-container text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-tecgeo-teal/10 text-tecgeo-teal text-sm font-medium mb-4">
              <span>Portal de Candidatura</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Faça parte da equipe <span className="text-tecgeo-teal">TecGEO</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Bem-vindo ao nosso portal de candidaturas. Estamos em busca de talentos como você para fazer parte da nossa equipe.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-tecgeo-teal hover:bg-tecgeo-blue text-white gap-2">
                Iniciar Candidatura
                <ArrowRight size={16} />
              </Button>
              <Button variant="outline" className="border-tecgeo-teal text-tecgeo-teal hover:bg-tecgeo-teal/10">
                Saiba Mais
              </Button>
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="section-container">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-200 text-tecgeo-blue text-sm font-medium mb-4">
                <span>Sobre o Processo</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Como funciona nosso processo seletivo
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nosso processo foi desenhado para ser transparente, eficiente e justo, permitindo que você demonstre todo o seu potencial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <Card className="border-0 shadow-lg overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex flex-col items-start">
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-tecgeo-teal mb-6">
                      <span className="text-xl font-bold">1</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4">Cadastro</h3>
                    
                    <p className="text-gray-600 mb-6">
                      Preencha seus dados pessoais e informações de contato para iniciar o processo.
                    </p>
                    
                    <Link to="/cadastro" className="text-tecgeo-teal hover:text-tecgeo-blue flex items-center group">
                      <span>Iniciar Cadastro</span>
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
              
              {/* Step 2 */}
              <Card className="border-0 shadow-lg overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex flex-col items-start">
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-tecgeo-teal mb-6">
                      <span className="text-xl font-bold">2</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4">Questionário</h3>
                    
                    <p className="text-gray-600 mb-6">
                      Responda às questões técnicas e comportamentais para avaliarmos suas habilidades.
                    </p>
                    
                    <Link to="/questionario" className="text-tecgeo-teal hover:text-tecgeo-blue flex items-center group">
                      <span>Ver Questionário</span>
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
              
              {/* Step 3 */}
              <Card className="border-0 shadow-lg overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex flex-col items-start">
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-tecgeo-teal mb-6">
                      <span className="text-xl font-bold">3</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4">Envio</h3>
                    
                    <p className="text-gray-600 mb-6">
                      Revise todas as suas informações e envie sua candidatura para análise.
                    </p>
                    
                    <Link to="/enviar" className="text-tecgeo-teal hover:text-tecgeo-blue flex items-center group">
                      <span>Concluir Envio</span>
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Why Join Section */}
        <section className="py-16">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-tecgeo-teal/10 text-tecgeo-teal text-sm font-medium mb-4">
                  <span>Por que TecGEO?</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Junte-se a uma equipe inovadora
                </h2>
                
                <p className="text-gray-600 mb-8">
                  Na TecGEO, buscamos profissionais apaixonados, inovadores e comprometidos com a excelência. Oferecemos um ambiente colaborativo onde você poderá desenvolver seu potencial e contribuir para projetos desafiadores.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="text-tecgeo-teal flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold mb-2">Processo Simplificado</h3>
                      <p className="text-gray-600">Nosso portal oferece uma experiência intuitiva para que você possa se concentrar no que importa: demonstrar seu talento.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Users className="text-tecgeo-teal flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold mb-2">Avaliação Especializada</h3>
                      <p className="text-gray-600">Sua candidatura será avaliada por profissionais experientes que buscam os melhores talentos para nossa equipe.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <FileText className="text-tecgeo-teal flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold mb-2">Questionários Personalizados</h3>
                      <p className="text-gray-600">Nossos questionários são desenhados para avaliar suas habilidades técnicas e alinhar com nossas necessidades.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock className="text-tecgeo-teal flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold mb-2">Resposta Rápida</h3>
                      <p className="text-gray-600">Otimizamos nosso processo seletivo para que você receba um retorno sobre sua candidatura o mais rápido possível.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-16 rounded-lg flex flex-col items-center justify-center text-center">
                <h2 className="text-6xl font-bold text-tecgeo-teal mb-4">TecGEO</h2>
                <p className="text-xl text-tecgeo-blue">Tecnologia e inovação</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers;
