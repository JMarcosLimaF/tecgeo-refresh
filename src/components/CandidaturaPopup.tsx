
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface CandidaturaPopupProps {
  trigger?: React.ReactNode;
}

const CandidaturaPopup = ({ trigger }: CandidaturaPopupProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <Button className="bg-tecgeo-teal hover:bg-tecgeo-blue text-white gap-2">
            Iniciar Candidatura
            <ArrowRight size={16} />
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] overflow-y-auto max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-tecgeo-blue">Portal de Candidatura</DialogTitle>
          <DialogDescription>
            Bem-vindo ao nosso portal de candidaturas. Siga os passos abaixo para se candidatar.
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4">
          <h2 className="text-xl font-semibold mb-4">Como funciona nosso processo seletivo</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {/* Step 1 */}
            <Card className="border shadow overflow-hidden">
              <CardContent className="p-5">
                <div className="flex flex-col items-start">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-tecgeo-teal mb-4">
                    <span className="text-lg font-bold">1</span>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2">Cadastro</h3>
                  
                  <p className="text-gray-600 mb-4 text-sm">
                    Preencha seus dados pessoais e informações de contato.
                  </p>
                  
                  <Link to="/cadastro" className="text-tecgeo-teal hover:text-tecgeo-blue flex items-center group text-sm">
                    <span>Iniciar Cadastro</span>
                    <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            {/* Step 2 */}
            <Card className="border shadow overflow-hidden">
              <CardContent className="p-5">
                <div className="flex flex-col items-start">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-tecgeo-teal mb-4">
                    <span className="text-lg font-bold">2</span>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2">Questionário</h3>
                  
                  <p className="text-gray-600 mb-4 text-sm">
                    Responda às questões técnicas e comportamentais.
                  </p>
                  
                  <Link to="/questionario" className="text-tecgeo-teal hover:text-tecgeo-blue flex items-center group text-sm">
                    <span>Ver Questionário</span>
                    <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            {/* Step 3 */}
            <Card className="border shadow overflow-hidden">
              <CardContent className="p-5">
                <div className="flex flex-col items-start">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-tecgeo-teal mb-4">
                    <span className="text-lg font-bold">3</span>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2">Envio</h3>
                  
                  <p className="text-gray-600 mb-4 text-sm">
                    Revise todas as suas informações e envie sua candidatura.
                  </p>
                  
                  <Link to="/login" className="text-tecgeo-teal hover:text-tecgeo-blue flex items-center group text-sm">
                    <span>Acompanhar Candidatura</span>
                    <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="flex justify-end mt-4">
          <Button className="bg-tecgeo-teal hover:bg-tecgeo-blue text-white">
            Iniciar Processo
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CandidaturaPopup;
