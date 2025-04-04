
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const Cadastro = () => {
  return (
    <div className="min-h-screen w-full bg-background p-6">
      <main className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Cadastro</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>Informações Pessoais</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="nome" className="text-sm font-medium">Nome completo</label>
                  <Input id="nome" placeholder="Seu nome completo" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="seu@email.com" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="telefone" className="text-sm font-medium">Telefone</label>
                  <Input id="telefone" placeholder="(00) 00000-0000" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="cidade" className="text-sm font-medium">Cidade/Estado</label>
                  <Input id="cidade" placeholder="Sua cidade/estado" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="endereco" className="text-sm font-medium">Endereço completo</label>
                  <Input id="endereco" placeholder="Rua, número, bairro, complemento" />
                </div>
              </div>
              
              <div className="pt-4">
                <Button type="submit" className="bg-tecgeo-teal hover:bg-tecgeo-blue">
                  Salvar e Continuar
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Cadastro;
