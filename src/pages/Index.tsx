import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Clients from '@/components/Clients';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CandidaturaPopup from '@/components/CandidaturaPopup';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (!targetId) return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function() {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="fixed bottom-8 right-8 z-50">
        <CandidaturaPopup 
          trigger={
            <Button className="bg-tecgeo-teal hover:bg-tecgeo-blue text-white shadow-lg rounded-full px-6 py-6 font-bold">
              Trabalhe Conosco
              <ArrowRight size={18} className="ml-2" />
            </Button>
          }
        />
      </div>
      <Services />
      <Projects />
      <Clients />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
