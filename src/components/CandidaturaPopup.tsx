
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft, Check, User, FileText, Upload } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';

interface CandidaturaPopupProps {
  trigger?: React.ReactNode;
}

type FormData = {
  nome: string;
  email: string;
  telefone: string;
  cidade: string;
  experiencia: string;
  tecnologias: string[];
};

const CandidaturaPopup = ({ trigger }: CandidaturaPopupProps) => {
  const [step, setStep] = useState(1);
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const isMobile = useIsMobile();
  
  const form = useForm<FormData>({
    defaultValues: {
      nome: '',
      email: '',
      telefone: '',
      cidade: '',
      experiencia: '',
      tecnologias: [],
    },
  });

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    toast({
      title: "Candidatura enviada!",
      description: "Acompanharemos o processo e entraremos em contato em breve.",
    });
    setStep(4); // Move to confirmation step
  };

  const tecnologias = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 
    'Python', 'Java', 'GIS', 'Cartografia', 
    'Processamento de Imagens'
  ];

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      form.handleSubmit(onSubmit)();
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const closeAndReset = () => {
    setOpen(false);
    setTimeout(() => {
      setStep(1);
      form.reset();
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button className="bg-tecgeo-teal hover:bg-tecgeo-blue text-white gap-2">
            Iniciar Candidatura
            <ArrowRight size={16} />
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="p-8">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-tecgeo-blue">Portal de Candidatura</DialogTitle>
          <DialogDescription>
            {step < 4 ? "Complete os passos abaixo para se candidatar." : "Candidatura enviada com sucesso!"}
          </DialogDescription>
        </DialogHeader>
        
        {/* Progress Steps - Adjusted icon size and positioning */}
        {step < 4 && (
          <div className="flex items-center justify-between mb-6 mt-2">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex flex-col items-center">
                <div 
                  className={cn(
                    "h-8 w-8 rounded-full flex items-center justify-center text-white mb-2 transition-all",
                    step === stepNumber ? "bg-tecgeo-teal" : step > stepNumber ? "bg-green-500" : "bg-gray-300"
                  )}
                >
                  {step > stepNumber ? (
                    <Check size={14} />
                  ) : stepNumber === 1 ? (
                    <User size={14} />
                  ) : stepNumber === 2 ? (
                    <FileText size={14} />
                  ) : (
                    <Upload size={14} />
                  )}
                </div>
                <span className={cn(
                  "text-sm",
                  step === stepNumber ? "text-tecgeo-teal font-medium" : ""
                )}>
                  {stepNumber === 1 ? "Dados Pessoais" : 
                   stepNumber === 2 ? "Experiência" : "Envio"}
                </span>
              </div>
            ))}
          </div>
        )}
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Step 1: Personal Information */}
            {step === 1 && (
              <div className="space-y-6 py-4">
                <h2 className="text-xl font-semibold">Dados Pessoais</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormItem>
                    <FormLabel htmlFor="nome" className="text-base">Nome completo</FormLabel>
                    <FormControl>
                      <Input
                        id="nome"
                        placeholder="Seu nome completo"
                        {...form.register('nome')}
                        required
                        className="h-12 text-base"
                      />
                    </FormControl>
                  </FormItem>
                  
                  <FormItem>
                    <FormLabel htmlFor="email" className="text-base">Email</FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        {...form.register('email')}
                        required
                        className="h-12 text-base"
                      />
                    </FormControl>
                  </FormItem>
                  
                  <FormItem>
                    <FormLabel htmlFor="telefone" className="text-base">Telefone</FormLabel>
                    <FormControl>
                      <Input
                        id="telefone"
                        placeholder="(00) 00000-0000"
                        {...form.register('telefone')}
                        required
                        className="h-12 text-base"
                      />
                    </FormControl>
                  </FormItem>
                  
                  <FormItem>
                    <FormLabel htmlFor="cidade" className="text-base">Cidade/Estado</FormLabel>
                    <FormControl>
                      <Input
                        id="cidade"
                        placeholder="Sua cidade/estado"
                        {...form.register('cidade')}
                        required
                        className="h-12 text-base"
                      />
                    </FormControl>
                  </FormItem>
                </div>
              </div>
            )}
            
            {/* Step 2: Experience */}
            {step === 2 && (
              <div className="space-y-6 py-4">
                <h2 className="text-xl font-semibold">Experiência Profissional</h2>
                
                <FormItem>
                  <FormLabel htmlFor="experiencia" className="text-base">Descreva sua experiência prévia na área</FormLabel>
                  <FormControl>
                    <Textarea
                      id="experiencia"
                      placeholder="Conte-nos sobre sua experiência..."
                      className="min-h-[180px] text-base"
                      {...form.register('experiencia')}
                      required
                    />
                  </FormControl>
                </FormItem>
              </div>
            )}
            
            {/* Step 3: Technologies */}
            {step === 3 && (
              <div className="space-y-6 py-4">
                <h2 className="text-xl font-semibold">Habilidades Técnicas</h2>
                
                <div className="space-y-4">
                  <FormLabel className="text-base">Quais tecnologias você domina?</FormLabel>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {tecnologias.map((tech) => (
                      <div key={tech} className="flex items-center space-x-3">
                        <Checkbox 
                          id={tech} 
                          className="h-5 w-5"
                          onCheckedChange={(checked) => {
                            const currentTechs = form.getValues('tecnologias') || [];
                            if (checked) {
                              form.setValue('tecnologias', [...currentTechs, tech]);
                            } else {
                              form.setValue('tecnologias', currentTechs.filter(t => t !== tech));
                            }
                          }}
                        />
                        <label htmlFor={tech} className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          {tech}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {/* Step 4: Confirmation */}
            {step === 4 && (
              <div className="flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-green-500 mb-6">
                  <Check size={40} />
                </div>
                <h4 className="text-2xl font-semibold text-tecgeo-blue mb-4">Candidatura enviada com sucesso!</h4>
                <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">Obrigado pelo seu interesse em se juntar à nossa equipe. Avaliaremos seu perfil e entraremos em contato em breve.</p>
                
                <Button 
                  type="button" 
                  className="bg-tecgeo-teal hover:bg-tecgeo-blue text-white h-12 px-8 text-base"
                  onClick={closeAndReset}
                >
                  Concluir
                </Button>
              </div>
            )}
            
            {/* Navigation Buttons */}
            {step < 4 && (
              <div className="flex justify-between mt-8">
                {step > 1 ? (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    className="gap-2 h-12 px-6 text-base"
                  >
                    <ArrowLeft size={18} />
                    Voltar
                  </Button>
                ) : (
                  <div></div> // Empty div to maintain flex spacing
                )}
                
                <Button
                  type="button"
                  className="bg-tecgeo-teal hover:bg-tecgeo-blue text-white gap-2 h-12 px-6 text-base"
                  onClick={nextStep}
                >
                  {step < 3 ? "Próximo" : "Enviar Candidatura"}
                  {step < 3 && <ArrowRight size={18} />}
                </Button>
              </div>
            )}
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CandidaturaPopup;
