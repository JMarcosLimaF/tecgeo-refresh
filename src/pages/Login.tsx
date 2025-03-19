
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const Login = () => {
  return (
    <div className="min-h-screen flex w-full bg-background">
      <main className="flex-1 p-6 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input id="email" type="email" placeholder="seu@email.com" />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">Senha</label>
                <Input id="password" type="password" placeholder="••••••••" />
              </div>
              <Button type="submit" className="w-full bg-tecgeo-teal hover:bg-tecgeo-blue">
                Entrar
              </Button>
            </form>
            <div className="mt-4 text-center text-sm">
              <a href="#" className="text-tecgeo-teal hover:underline">
                Esqueceu sua senha?
              </a>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Login;
