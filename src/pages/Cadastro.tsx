
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import CareersSidebar from '@/components/CareersSidebar';

const Cadastro = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <CareersSidebar />
        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold mb-6">Cadastro</h1>
          <p className="text-lg text-gray-600">
            Preencha seu cadastro para iniciar o processo de candidatura.
          </p>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Cadastro;
