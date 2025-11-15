// Utilitários para gerenciar assinatura do usuário

export interface Subscription {
  paymentId: string;
  plan: 'daily' | 'monthly' | 'annual';
  status: 'active' | 'expired' | 'cancelled';
  activatedAt: string;
  expiresAt: string;
}

export function getSubscription(): Subscription | null {
  if (typeof window === 'undefined') return null;
  
  const data = localStorage.getItem('subscription');
  if (!data) return null;
  
  try {
    return JSON.parse(data);
  } catch {
    return null;
  }
}

export function hasActiveSubscription(): boolean {
  const subscription = getSubscription();
  if (!subscription) return false;
  
  const now = new Date();
  const expiresAt = new Date(subscription.expiresAt);
  
  return subscription.status === 'active' && now < expiresAt;
}

export function getPlanFeatures(plan: 'daily' | 'monthly' | 'annual') {
  const features = {
    daily: {
      downloads: Infinity,
      templates: 'all',
      support: 'basic',
      updates: true
    },
    monthly: {
      downloads: Infinity,
      templates: 'all',
      support: 'priority',
      updates: true
    },
    annual: {
      downloads: Infinity,
      templates: 'all',
      support: 'vip',
      updates: true,
      exclusive: true
    }
  };
  
  return features[plan];
}

export function canDownloadPDF(): boolean {
  return hasActiveSubscription();
}

export function getSubscriptionMessage(): string {
  const subscription = getSubscription();
  
  if (!subscription) {
    return 'Você precisa de uma assinatura ativa para baixar em PDF.';
  }
  
  if (!hasActiveSubscription()) {
    return 'Sua assinatura expirou. Renove para continuar baixando.';
  }
  
  const expiresAt = new Date(subscription.expiresAt);
  const daysLeft = Math.ceil((expiresAt.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
  
  return `Sua assinatura está ativa. ${daysLeft} dia(s) restante(s).`;
}

export function clearSubscription(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('subscription');
  }
}
