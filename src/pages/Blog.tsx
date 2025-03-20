import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Calendar, FileText, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: 'Geotecnologia na gestão de recursos hídricos',
    excerpt: 'Como as tecnologias geoespaciais estão revolucionando o monitoramento e gerenciamento de recursos hídricos no Brasil.',
    date: '12 de maio de 2023',
    author: 'Ana Silva',
    category: 'Recursos Hídricos',
    tags: ['geoprocessamento', 'recursos hídricos', 'meio ambiente']
  },
  {
    id: 2,
    title: 'Uso de drones no mapeamento urbano',
    excerpt: 'Os avanços no uso de drones para mapeamento de áreas urbanas e como isso beneficia o planejamento das cidades.',
    date: '23 de julho de 2023',
    author: 'Carlos Mendes',
    category: 'Tecnologia',
    tags: ['drones', 'mapeamento', 'cidades inteligentes']
  },
  {
    id: 3,
    title: 'Sistemas de Informação Geográfica na gestão municipal',
    excerpt: 'Como os SIGs podem auxiliar na tomada de decisões mais eficientes para a administração pública municipal.',
    date: '5 de outubro de 2023',
    author: 'Juliana Costa',
    category: 'Gestão Pública',
    tags: ['SIG', 'gestão municipal', 'administração pública']
  },
];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="section-container">
          <div className="flex items-center mb-8">
            <Link to="/" className="flex items-center text-tecgeo-blue hover:text-tecgeo-teal transition-colors">
              <ArrowLeft size={20} className="mr-2" />
              <span>Voltar para Início</span>
            </Link>
          </div>
          
          <h1 className="text-4xl font-bold text-tecgeo-blue mb-2">Blog TecGEO</h1>
          <p className="text-xl text-gray-600 mb-12">Novidades, artigos e insights sobre geotecnologia</p>
          
          <Tabs defaultValue="todos" className="mb-12">
            <TabsList className="mb-8">
              <TabsTrigger value="todos">Todos</TabsTrigger>
              <TabsTrigger value="tecnologia">Tecnologia</TabsTrigger>
              <TabsTrigger value="gestao">Gestão Pública</TabsTrigger>
              <TabsTrigger value="recursos">Recursos Hídricos</TabsTrigger>
            </TabsList>
            
            <TabsContent value="todos" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map(post => (
                  <Card key={post.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                    <CardHeader className="p-0">
                      <div className="h-48 bg-gray-200 relative">
                        <div className="absolute top-4 right-4 bg-tecgeo-teal text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {post.category}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar size={14} className="mr-1" />
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <User size={14} className="mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                      <CardDescription className="text-gray-600">{post.excerpt}</CardDescription>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center p-6 pt-0">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, idx) => (
                          <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded-full">{tag}</span>
                        ))}
                      </div>
                      <Button variant="link" className="text-tecgeo-blue hover:text-tecgeo-teal p-0 h-auto flex items-center gap-1">
                        Ler mais <FileText size={14} />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="tecnologia" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.filter(post => post.category === 'Tecnologia').map(post => (
                  <Card key={post.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                    <CardHeader className="p-0">
                      <div className="h-48 bg-gray-200 relative">
                        <div className="absolute top-4 right-4 bg-tecgeo-teal text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {post.category}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar size={14} className="mr-1" />
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <User size={14} className="mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                      <CardDescription className="text-gray-600">{post.excerpt}</CardDescription>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center p-6 pt-0">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, idx) => (
                          <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded-full">{tag}</span>
                        ))}
                      </div>
                      <Button variant="link" className="text-tecgeo-blue hover:text-tecgeo-teal p-0 h-auto flex items-center gap-1">
                        Ler mais <FileText size={14} />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="gestao" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.filter(post => post.category === 'Gestão Pública').map(post => (
                  <Card key={post.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                    <CardHeader className="p-0">
                      <div className="h-48 bg-gray-200 relative">
                        <div className="absolute top-4 right-4 bg-tecgeo-teal text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {post.category}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar size={14} className="mr-1" />
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <User size={14} className="mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                      <CardDescription className="text-gray-600">{post.excerpt}</CardDescription>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center p-6 pt-0">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, idx) => (
                          <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded-full">{tag}</span>
                        ))}
                      </div>
                      <Button variant="link" className="text-tecgeo-blue hover:text-tecgeo-teal p-0 h-auto flex items-center gap-1">
                        Ler mais <FileText size={14} />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="recursos" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.filter(post => post.category === 'Recursos Hídricos').map(post => (
                  <Card key={post.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                    <CardHeader className="p-0">
                      <div className="h-48 bg-gray-200 relative">
                        <div className="absolute top-4 right-4 bg-tecgeo-teal text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {post.category}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar size={14} className="mr-1" />
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <User size={14} className="mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                      <CardDescription className="text-gray-600">{post.excerpt}</CardDescription>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center p-6 pt-0">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, idx) => (
                          <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded-full">{tag}</span>
                        ))}
                      </div>
                      <Button variant="link" className="text-tecgeo-blue hover:text-tecgeo-teal p-0 h-auto flex items-center gap-1">
                        Ler mais <FileText size={14} />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
