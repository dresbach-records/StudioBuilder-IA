
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { paymentService } from '../../../services/payment-service';

const CheckoutPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('scale');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [cardName, setCardName] = useState('');
  const navigate = useNavigate();

  const plans = [
    { id: 'basic', name: 'Basic Tier', price: 29, specs: ['2GB RAM', '20GB SSD Storage', 'Standard Bandwidth'] },
    { id: 'scale', name: 'Scale Tier', price: 79, specs: ['8GB RAM', '100GB SSD Storage', 'Auto-Scaling Enabled', 'Direct IDE Sync'], recommended: true },
    { id: 'enterprise', name: 'Enterprise', price: 249, specs: ['Dedicated Resources', '24/7 Engineering Support', 'Priority Deployment', 'Custom Firewall Rules'] }
  ];

  const activePlan = plans.find(p => p.id === selectedPlan)!;

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    try {
      const result = await paymentService.processPayment({
        planId: selectedPlan,
        amount: activePlan.price + 15,
        cardName: cardName
      });
      
      if (result.success) {
        setIsSuccess(true);
        setTimeout(() => {
          navigate('/client/portal');
        }, 3000);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsProcessing(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="h-full flex flex-col items-center justify-center space-y-6 text-center animate-in zoom-in-95 duration-500">
        <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-2xl shadow-emerald-500/20">
          <span className="material-icons-round text-5xl">check</span>
        </div>
        <h1 className="text-4xl font-bold">Payment Successful!</h1>
        <p className="text-slate-500 max-w-md">Your hosting node is being provisioned. You will be redirected to your dashboard in a few seconds.</p>
        <div className="w-full max-w-xs bg-slate-100 dark:bg-slate-800 h-1 rounded-full overflow-hidden">
          <div className="h-full bg-emerald-500 animate-[progress_3s_linear]"></div>
        </div>
        <style>{`@keyframes progress { from { width: 0%; } to { width: 100%; } }`}</style>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-12 pb-24 animate-in slide-in-from-bottom-4 duration-700">
      <header className="text-center md:text-left max-w-2xl">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Select Your Engineering Infrastructure</h1>
        <p className="text-lg text-slate-500 dark:text-slate-400">Choose a high-performance hosting environment optimized for StudioBuilder AI deployments. Powered by Hostinger Global Infrastructure.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 space-y-4">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id)}
              className={`p-6 rounded-2xl border-2 transition-all cursor-pointer relative group ${
                selectedPlan === plan.id 
                ? 'border-primary bg-primary/5 shadow-2xl ring-4 ring-primary/5' 
                : 'border-slate-200 dark:border-border-dark bg-white dark:bg-panel-dark hover:border-slate-400'
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">RECOMMENDED</div>
              )}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <p className="text-xs text-slate-500 mt-1 italic">Ideal for production-scale applications</p>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-black">${plan.price}</span>
                  <span className="text-sm text-slate-500 font-medium">/mo</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {plan.specs.map(spec => (
                  <div key={spec} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <span className="material-icons-round text-primary text-lg">check_circle</span>
                    {spec}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-border-dark flex items-center gap-6">
             <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary shrink-0">
               <span className="material-icons-round">language</span>
             </div>
             <div>
               <h4 className="font-bold text-sm">Hostinger Global Partnership</h4>
               <p className="text-xs text-slate-500 mt-1">Your application is hosted on Tier-3 data centers with 99.9% uptime guarantee.</p>
             </div>
          </div>
        </div>

        <aside className="lg:col-span-5">
          <div className="bg-white dark:bg-panel-dark rounded-2xl border border-slate-200 dark:border-border-dark p-8 shadow-2xl sticky top-28">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">{activePlan.name} Hosting</span>
                <span className="font-bold">${activePlan.price.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Dev Validation Fee</span>
                <span className="font-bold">$15.00</span>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-border-dark flex justify-between items-end">
                <div>
                  <p className="text-[10px] font-bold uppercase text-slate-400">Monthly Total</p>
                  <p className="text-xs text-slate-500 italic">Starting today</p>
                </div>
                <p className="text-4xl font-black text-primary">${(activePlan.price + 15).toFixed(2)}</p>
              </div>
            </div>

            <form onSubmit={handlePayment} className="space-y-6">
              <div className="space-y-4">
                <label className="text-[11px] font-bold text-slate-500 uppercase flex items-center gap-2">
                  <span className="material-icons-round text-sm">lock</span> Secure Payment
                </label>
                <div className="space-y-3">
                  <input 
                    required
                    type="text" 
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    placeholder="Cardholder Name" 
                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-border-dark rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/50 outline-none" 
                  />
                  <input required type="text" placeholder="Card Number" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-border-dark rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/50 outline-none" />
                  <div className="grid grid-cols-2 gap-4">
                    <input required type="text" placeholder="MM/YY" className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-border-dark rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/50 outline-none" />
                    <input required type="password" placeholder="CVC" className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-border-dark rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/50 outline-none" />
                  </div>
                </div>
              </div>

              <button 
                disabled={isProcessing}
                className="w-full py-4 bg-primary hover:bg-blue-600 disabled:opacity-50 text-white font-bold rounded-xl shadow-xl shadow-primary/30 transition-all flex items-center justify-center gap-3 active:scale-95"
              >
                {isProcessing ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <><span className="material-icons-round">rocket_launch</span> Pay & Request Deployment</>
                )}
              </button>
            </form>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CheckoutPage;
