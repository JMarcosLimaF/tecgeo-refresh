
import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { MapPin, Mail, Phone, ArrowRight, Check } from 'lucide-react';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally handle form submission
    // For demo purposes, we'll just show the success message
    setFormSubmitted(true);
    
    // Reset form after 5 seconds for demo purposes
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-tecgeo-teal/10 text-tecgeo-teal text-sm font-medium mb-2">
              <span>Contato</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-tecgeo-blue">Fale com nossa equipe</h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Entre em contato para saber mais sobre nossos serviços e como podemos ajudar no seu projeto.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <FadeIn className="lg:col-span-2" delay={200}>
            <div className="bg-white p-8 rounded-xl shadow-lg h-full">
              <h3 className="text-xl font-semibold text-tecgeo-blue mb-6">Informações de contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-tecgeo-teal/10 flex items-center justify-center text-tecgeo-teal shrink-0 mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-tecgeo-blue">Nosso endereço</h4>
                    <p className="text-gray-600 mt-1">Av. Juarez Távora, 522 - Torre<br />Empresarial Maximum, Sala 608<br />João Pessoa, PB - Brasil<br />CEP - 58040-020</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-tecgeo-teal/10 flex items-center justify-center text-tecgeo-teal shrink-0 mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-tecgeo-blue">Email</h4>
                    <p className="text-gray-600 mt-1">contato@tecnologiageo.com.br</p>
                    <p className="text-gray-600">comercial@tecnologiageo.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-tecgeo-teal/10 flex items-center justify-center text-tecgeo-teal shrink-0 mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-tecgeo-blue">Telefone</h4>
                    <p className="text-gray-600 mt-1">(11) 3456-7890</p>
                    <p className="text-gray-600">(11) 98765-4321</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="font-medium text-tecgeo-blue mb-3">Horário de atendimento</h4>
                <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                <p className="text-gray-600">Sábado: 9h às 13h</p>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn className="lg:col-span-3" delay={400}>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-tecgeo-blue mb-6">Envie uma mensagem</h3>
              
              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-500 mb-4">
                    <Check size={32} />
                  </div>
                  <h4 className="text-xl font-semibold text-tecgeo-blue mb-2">Mensagem enviada com sucesso!</h4>
                  <p className="text-gray-600">Obrigado pelo seu contato. Retornaremos em breve.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome completo</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-tecgeo-teal/50 focus:border-tecgeo-teal"
                        placeholder="Seu nome"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-tecgeo-teal/50 focus:border-tecgeo-teal"
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Assunto</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-tecgeo-teal/50 focus:border-tecgeo-teal"
                      placeholder="Assunto da mensagem"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-tecgeo-teal/50 focus:border-tecgeo-teal"
                      placeholder="Sua mensagem aqui..."
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="inline-flex items-center px-6 py-3 bg-tecgeo-teal text-white font-medium rounded-lg hover:bg-tecgeo-blue transition-colors"
                  >
                    Enviar mensagem
                    <ArrowRight size={18} className="ml-2" />
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
