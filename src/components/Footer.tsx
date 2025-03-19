
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-tecgeo-blue text-white">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <a href="#" className="flex items-center mb-6">
              <span className="font-display text-2xl font-bold text-white">
                Tec<span className="text-tecgeo-teal">GEO</span>
              </span>
            </a>
            <p className="text-gray-300 mb-6">
              Soluções em geotecnologia para planejamento territorial, 
              análise ambiental e projetos de engenharia.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/tecgeobr/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-tecgeo-teal/80 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/tecgeobr/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-tecgeo-teal/80 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://x.com/tecgeobr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-tecgeo-teal/80 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="https://www.linkedin.com/company/tecgeo?originalSubdomain=br" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-tecgeo-teal/80 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://www.youtube.com/channel/UCcITMMG8Gtq5iuZk_pK8eFg" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-tecgeo-teal/80 transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Empresa</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">Sobre nós</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projetos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Clientes</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Carreira</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Serviços</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cartografia</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Geoprocessamento</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Geodésia e GPS</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Topografia</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Projetos de Engenharia</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <ul className="space-y-3 text-gray-300">
              <li>Av. Juarez Távora, 522 - Torre</li>
              <li>Empresarial Maximum, Sala 608</li>
              <li>João Pessoa, PB - Brasil</li>
              <li>CEP - 58040-020</li>
              <li>contato@tecnologiageo.com.br</li>
              <li>+55 83 3244 7755</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/10">
        <div className="section-container py-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} TecGEO. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
