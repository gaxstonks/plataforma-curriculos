"use client";

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Download, Home } from 'lucide-react';
import Link from 'next/link';

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams();
  const paymentId = searchParams.get('payment_id');
  const [subscription, setSubscription] = useState<any>(null);

  useEffect(() => {
    // Verificar pagamento e obter informações da assinatura
    if (paymentId) {
      // Salvar no localStorage temporariamente
      const subscriptionData = {
        paymentId,
        plan: searchParams.get('plan') || 'monthly',
        status: 'active',
        activatedAt: new Date().toISOString(),
        expiresAt: calculateExpirationDate(searchParams.get('plan') || 'monthly')
      };
      
      localStorage.setItem('subscription', JSON.stringify(subscriptionData));
      setSubscription(subscriptionData);
    }
  }, [paymentId, searchParams]);

  const calculateExpirationDate = (plan: string) => {
    const now = new Date();
    switch (plan) {
      case 'daily':
        now.setDate(now.getDate() + 1);
        break;
      case 'monthly':
        now.setMonth(now.getMonth() + 1);
        break;
      case 'annual':
        now.setFullYear(now.getFullYear() + 1);
        break;
    }
    return now.toISOString();
  };

  const getPlanName = (plan: string) => {
    switch (plan) {
      case 'daily': return 'Diário';
      case 'monthly': return 'Mensal';
      case 'annual': return 'Anual';
      default: return 'Desconhecido';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-green-950 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full p-8 md:p-12 text-center">
        <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-12 h-12 text-green-600" />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Pagamento Confirmado! 🎉
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Seu pagamento foi processado com sucesso e sua assinatura está ativa.
        </p>

        {subscription && (
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8 text-left">
            <h3 className="font-bold text-lg mb-4">Detalhes da Assinatura</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Plano:</span>
                <span className="font-semibold">{getPlanName(subscription.plan)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Status:</span>
                <span className="font-semibold text-green-600">Ativo</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">ID do Pagamento:</span>
                <span className="font-mono text-xs">{paymentId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Válido até:</span>
                <span className="font-semibold">
                  {new Date(subscription.expiresAt).toLocaleDateString('pt-BR')}
                </span>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 font-medium">
            Agora você pode baixar seu currículo em PDF quantas vezes quiser!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white">
                <Download className="w-5 h-5 mr-2" />
                Baixar Meu Currículo
              </Button>
            </Link>

            <Link href="/">
              <Button size="lg" variant="outline">
                <Home className="w-5 h-5 mr-2" />
                Voltar ao Início
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
          <p className="text-sm text-blue-700 dark:text-blue-300">
            💡 <strong>Dica:</strong> Você pode editar e baixar seu currículo quantas vezes quiser durante o período da sua assinatura.
          </p>
        </div>
      </Card>
    </div>
  );
}
