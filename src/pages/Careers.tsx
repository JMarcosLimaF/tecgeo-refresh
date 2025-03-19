
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import { ArrowRight, Check, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Careers = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally handle form submission
    // For demo purposes, we'll just show the success message
    setFormSubmitted(true);
    
    // Reset form after 5 seconds for demo purposes
    setTimeout(() => {
      setFormSubmitted(false);
      // Optionally, reset the form fields here
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
              <h1 className="text-3xl md:text-4xl font-bold text-tecgeo-blue">Faça parte do nosso time</h1>
              <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                Junte-se à nossa equipe e participe de projetos inovadores na área de geotecnologia.
                Estamos sempre em busca de profissionais talentosos e apaixonados.
              </p>
            </div>
          </FadeIn>
          
          <div className="max-w-3xl mx-auto">
            <FadeIn delay={200}>
              <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
                <Link to="/" className="inline-flex items-center text-tecgeo-blue hover:text-tecgeo-teal mb-6">
                  <ArrowLeft size={16} className="mr-2" />
                  Voltar para a página inicial
                </Link>
                
                <h2 className="text-2xl font-semibold text-tecgeo-blue mb-6">Envie sua candidatura</h2>
                
                {formSubmitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-10">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-500 mb-4">
                      <Check size={32} />
                    </div>
                    <h4 className="text-xl font-semibold text-tecgeo-blue mb-2">Candidatura enviada!</h4>
                    <p className="text-gray-600">Obrigado pelo seu interesse. Analisaremos seu currículo e entraremos em contato.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="career-name" className="block text-sm font-medium text-gray-700 mb-1">Nome completo</label>
                      <input 
                        type="text" 
                        id="career-name" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-tecgeo-teal/50 focus:border-tecgeo-teal"
                        placeholder="Seu nome"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="career-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input 
                        type="email" 
                        id="career-email" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-tecgeo-teal/50 focus:border-tecgeo-teal"
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="career-phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                      <input 
                        type="tel" 
                        id="career-phone" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-tecgeo-teal/50 focus:border-tecgeo-teal"
                        placeholder="(00) 00000-0000"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="career-area" className="block text-sm font-medium text-gray-700 mb-1">Área de interesse</label>
                      <select 
                        id="career-area" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-tecgeo-teal/50 focus:border-tecgeo-teal"
                        required
                      >
                        <option value="">Selecione uma área</option>
                        <option value="cartografia">Cartografia</option>
                        <option value="geoprocessamento">Geoprocessamento</option>
                        <option value="topografia">Topografia</option>
                        <option value="desenvolvimento">Desenvolvimento SIG</option>
                        <option value="consultoria">Consultoria</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="career-resume" className="block text-sm font-medium text-gray-700 mb-1">Currículo (PDF)</label>
                      <input 
                        type="file" 
                        id="career-resume" 
                        accept=".pdf"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-tecgeo-teal/50 focus:border-tecgeo-teal"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="career-message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem (opcional)</label>
                      <textarea 
                        id="career-message" 
                        rows={4} 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-tecgeo-teal/50 focus:border-tecgeo-teal"
                        placeholder="Conte-nos sobre você e sua experiência..."
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit" 
                      className="inline-flex items-center px-6 py-3 bg-tecgeo-blue text-white font-medium rounded-lg hover:bg-tecgeo-teal transition-colors"
                    >
                      Enviar candidatura
                      <ArrowRight size={18} className="ml-2" />
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>
            
            <FadeIn delay={400}>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-semibold text-tecgeo-blue mb-6">Por que trabalhar na TecGEO?</h2>
                
                <div className="space-y-4">
                  <div className="p-4 bg-tecgeo-teal/5 rounded-lg">
                    <h3 className="font-medium text-tecgeo-blue">Projetos inovadores</h3>
                    <p className="text-gray-600 mt-1">Trabalhe com tecnologias de ponta e projetos desafiadores na área de geotecnologia.</p>
                  </div>
                  
                  <div className="p-4 bg-tecgeo-teal/5 rounded-lg">
                    <h3 className="font-medium text-tecgeo-blue">Crescimento profissional</h3>
                    <p className="text-gray-600 mt-1">Oportunidades de desenvolvimento e crescimento na carreira com treinamentos constantes.</p>
                  </div>
                  
                  <div className="p-4 bg-tecgeo-teal/5 rounded-lg">
                    <h3 className="font-medium text-tecgeo-blue">Ambiente colaborativo</h3>
                    <p className="text-gray-600 mt-1">Equipe unida e colaborativa, com foco em resultados e no bem-estar de todos.</p>
                  </div>
                  
                  <div className="p-4 bg-tecgeo-teal/5 rounded-lg">
                    <h3 className="font-medium text-tecgeo-blue">Impacto real</h3>
                    <p className="text-gray-600 mt-1">Ajude a transformar cidades e organizações com soluções geotecnológicas de alto impacto.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers;
