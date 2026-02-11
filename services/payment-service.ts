
export interface PaymentDetails {
  planId: string;
  amount: number;
  cardName: string;
}

export const paymentService = {
  processPayment: async (details: PaymentDetails): Promise<{ success: boolean; transactionId: string }> => {
    console.log('Processing payment for:', details);
    // Simulating gateway latency
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    return {
      success: true,
      transactionId: 'tx_' + Math.random().toString(36).substr(2, 12).toUpperCase()
    };
  }
};
