"use client";

import { 
  FileText, 
  Sparkles,
  CheckCircle,
  ArrowRight,
  Star,
  Layout,
  Edit3,
  Lightbulb,
  Code,
  Palette as PaletteIcon,
  DollarSign,
  Users,
  BarChart,
  TrendingUp,
  Target
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-950 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Hero Section */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <div className="mb-8 animate-fade-in">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl mb-6 shadow-2xl transform hover:scale-110 transition-transform duration-300">
              <FileText className="w-12 h-12 text-white" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
              CurrículoPro
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4 font-medium">
              Transforme sua carreira com currículos profissionais
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
              Crie currículos impressionantes em minutos com nossos modelos personalizáveis, 
              editor intuitivo e dicas inteligentes que destacam suas qualificações
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-7 text-lg font-semibold shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <Sparkles className="w-6 h-6 mr-2" />
              Criar Meu Currículo Grátis
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="px-10 py-7 text-lg font-semibold border-2 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <Layout className="w-5 h-5 mr-2" />
              Ver Modelos
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span>Teste Gratuito</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span>Dicas Profissionais</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span>Download em PDF</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <span>Modelos Profissionais</span>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          <Card className="p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 hover:border-blue-500">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Layout className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Modelos Profissionais</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Escolha entre diversos templates modernos e elegantes, criados por designers profissionais
            </p>
          </Card>

          <Card className="p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 hover:border-purple-500">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Edit3 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Editor Intuitivo</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Arraste e solte seções facilmente, edite em tempo real e veja as mudanças instantaneamente
            </p>
          </Card>

          <Card className="p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 hover:border-yellow-500">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Dicas Inteligentes</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Receba sugestões automáticas para melhorar seu currículo e destacar suas conquistas
            </p>
          </Card>
        </div>

        {/* Templates Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Modelos para Todas as Áreas</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Templates especializados para destacar suas habilidades em qualquer setor
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Tecnologia */}
            <Card className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 hover:border-blue-500">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Tecnologia</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Perfeito para desenvolvedores, engenheiros e profissionais de TI
              </p>
              <Button variant="outline" className="w-full">
                Ver Modelo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>

            {/* Design */}
            <Card className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 hover:border-purple-500">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mb-4">
                <PaletteIcon className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Design</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Ideal para designers, criativos e profissionais visuais
              </p>
              <Button variant="outline" className="w-full">
                Ver Modelo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>

            {/* Marketing */}
            <Card className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 hover:border-pink-500">
              <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Marketing</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Destaque suas campanhas e resultados de marketing
              </p>
              <Button variant="outline" className="w-full">
                Ver Modelo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>

            {/* Vendas */}
            <Card className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 hover:border-green-500">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Vendas</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Mostre suas conquistas e metas alcançadas
              </p>
              <Button variant="outline" className="w-full">
                Ver Modelo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>

            {/* Financeiro */}
            <Card className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 hover:border-orange-500">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-xl flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Financeiro</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Para analistas, contadores e gestores financeiros
              </p>
              <Button variant="outline" className="w-full">
                Ver Modelo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>

            {/* RH */}
            <Card className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 hover:border-indigo-500">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Recursos Humanos</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Especializado para profissionais de RH e gestão de pessoas
              </p>
              <Button variant="outline" className="w-full">
                Ver Modelo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Planos que Cabem no Seu Bolso</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Escolha o plano ideal para suas necessidades
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Plano Diário */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Diário</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">R$ 7,90</span>
                  <span className="text-gray-600 dark:text-gray-400">/dia</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm">Acesso por 24 horas</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm">Download ilimitado</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm">Todos os modelos</span>
                </li>
              </ul>
              <Button className="w-full">Começar Agora</Button>
            </Card>

            {/* Plano Mensal */}
            <Card className="p-8 border-4 border-purple-500 relative hover:shadow-2xl transition-all transform scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                MAIS POPULAR
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Mensal</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">R$ 19,90</span>
                  <span className="text-gray-600 dark:text-gray-400">/mês</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm">Acesso por 30 dias</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm">Download ilimitado</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm">Suporte prioritário</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm">Atualizações ilimitadas</span>
                </li>
              </ul>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Começar Agora</Button>
            </Card>

            {/* Plano Anual */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-4 py-2 rounded-full text-xs font-bold mb-4">
                  ECONOMIZE 65%
                </div>
                <h3 className="text-2xl font-bold mb-2">Anual</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold">R$ 89,90</span>
                  <span className="text-gray-600 dark:text-gray-400">/ano</span>
                </div>
                <p className="text-xs text-green-600 dark:text-green-400 font-semibold">
                  Apenas R$ 7,49/mês
                </p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm">Acesso por 365 dias</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm">Download ilimitado</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm">Suporte VIP</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm">Modelos exclusivos</span>
                </li>
              </ul>
              <Button className="w-full bg-green-600 hover:bg-green-700">Começar Agora</Button>
            </Card>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Comece agora - Teste gratuitamente
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para criar seu currículo profissional?
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Junte-se a milhares de profissionais que já transformaram suas carreiras
          </p>
          
          <Button 
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-7 text-lg font-semibold shadow-2xl"
          >
            Criar Meu Primeiro Currículo
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
