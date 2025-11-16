"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Loader2, XCircle } from "lucide-react";

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('Processando seu pagamento...');

  useEffect(() => {
    // Obter parâmetros da URL do Mercado Pago
    const paymentId = searchParams.get('payment_id');
    const paymentStatus = searchParams.get('status');
    const merchantOrderId = searchParams.get('merchant_order_id');
    const preferenceId = searchParams.get('preference_id');
    const collectionStatus = searchParams.get('collection_status');

    // Mapear preference_id para plano
    const planMap: { [key: string]: 'daily' | 'monthly' | 'annual' } = {
      '245781992-28fd724e-300a-4c97-8800-d8c70d63b814': 'daily',
      '245781992-f2eb9b89-6593-434e-befb-4263e4e2c8ec': 'monthly',
      '245781992-216c8c46-842e-4b01-93d1-214f5c91deb4': 'annual'
    };

    const plan = preferenceId ? planMap[preferenceId] : null;

    // Verificar se o pagamento foi aprovado
    if (paymentStatus === 'approved' || collectionStatus === 'approved') {
      if (paymentId && plan) {
        // Calcular data de expiração baseada no plano
        const now = new Date();
        const expiresAt = new Date(now);
        
        switch (plan) {
          case 'daily':
            expiresAt.setDate(expiresAt.getDate() + 1);
            break;
          case 'monthly':
            expiresAt.setMonth(expiresAt.getMonth() + 1);
            break;
          case 'annual':
            expiresAt.setFullYear(expiresAt.getFullYear() + 1);
            break;
        }

        // Salvar assinatura no localStorage
        const subscription = {
          paymentId: paymentId,
          plan: plan,
          status: 'active' as const,
          activatedAt: now.toISOString(),
          expiresAt: expiresAt.toISOString()
        };

        localStorage.setItem('subscription', JSON.stringify(subscription));

        setStatus('success');
        setMessage('Pagamento confirmado! Sua assinatura está ativa.');

        // Redirecionar para a home após 3 segundos
        setTimeout(() => {
          router.push('/');
        }, 3000);
      } else {
        setStatus('error');
        setMessage('Erro ao processar pagamento. Informações incompletas.');
      }
    } else if (paymentStatus === 'pending' || collectionStatus === 'pending') {
      setStatus('loading');
      setMessage('Pagamento pendente. Aguardando confirmação...');
      
      // Redirecionar após 5 segundos
      setTimeout(() => {
        router.push('/');
      }, 5000);
    } else {
      setStatus('error');
      setMessage('Pagamento não foi aprovado. Tente novamente.');
    }
  }, [searchParams, router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-950 flex items-center justify-center p-4">
      <Card className="max-w-md w-full p-8 text-center">
        {status === 'loading' && (
          <>
            <Loader2 className="w-16 h-16 mx-auto mb-4 text-blue-600 animate-spin" />
            <h1 className="text-2xl font-bold mb-2">Processando Pagamento</h1>
            <p className="text-gray-600 dark:text-gray-400">{message}</p>
          </>
        )}

        {status === 'success' && (
          <>
            <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-600" />
            <h1 className="text-2xl font-bold mb-2 text-green-600">Pagamento Confirmado!</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">{message}</p>
            <p className="text-sm text-gray-500">Redirecionando em 3 segundos...</p>
            <Button 
              onClick={() => router.push('/')}
              className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600"
            >
              Ir para Home
            </Button>
          </>
        )}

        {status === 'error' && (
          <>
            <XCircle className="w-16 h-16 mx-auto mb-4 text-red-600" />
            <h1 className="text-2xl font-bold mb-2 text-red-600">Erro no Pagamento</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">{message}</p>
            <Button 
              onClick={() => router.push('/')}
              variant="outline"
            >
              Voltar para Home
            </Button>
          </>
        )}
      </Card>
    </div>
  );
}
