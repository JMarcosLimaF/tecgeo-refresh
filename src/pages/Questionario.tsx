
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import CareersSidebar from '@/components/CareersSidebar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';

const Questionario = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <CareersSidebar />
        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold mb-6">Questionário</h1>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Experiência Profissional</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Descreva sua experiência prévia na área</label>
                  <Textarea placeholder="Conte-nos sobre sua experiência..." className="min-h-[100px]" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Quais tecnologias você domina?</label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'Java', 'GIS', 'Cartografia', 'Processamento de Imagens'].map((tech) => (
                      <div key={tech} className="flex items-center space-x-2">
                        <Checkbox id={tech} />
                        <label htmlFor={tech} className="text-sm">{tech}</label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button type="submit" className="bg-tecgeo-teal hover:bg-tecgeo-blue">
                    Salvar Respostas
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Questionario;
