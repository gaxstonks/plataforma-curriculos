// Versão final e recomendada: totalmente assíncrona e pronta para integrar com Postgres ou Stripe.

export async function hasActiveSubscription(userId?: string) {
  try {
    return await subscription.check(userId);
  } catch (e) {
    return false;
  }
}

export const subscription = {
  async activate(userId?: string) {
    // Aqui você pode integrar Stripe ou atualizar seu banco Postgres
  },

  async check(userId?: string) {
    // Exemplo de verificação real:
    // const result = await db.query("SELECT active FROM subscriptions WHERE user_id = $1", [userId]);
    // return result.rows[0]?.active === true;

    return false; // padrão seguro
  }
};
