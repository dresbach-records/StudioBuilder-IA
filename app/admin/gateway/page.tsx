
import React from 'react';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
// Added missing import for Badge component
import Badge from '../../../components/ui/Badge';

const GatewaySettingsPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold">Gateway Settings</h1>
        <p className="text-slate-500">Configure suas chaves de API e conexões de infraestrutura externa.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-8 space-y-6">
           <div className="flex items-center gap-3">
              <span className="material-icons-round text-primary">credit_card</span>
              <h3 className="font-bold">Payment Providers</h3>
           </div>
           <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/5">
                 <div className="flex items-center gap-3">
                    <img src="https://img.icons8.com/color/48/stripe.png" className="w-8 h-8" alt="Stripe" />
                    <span className="text-sm font-bold">Stripe Payments</span>
                 </div>
                 <Badge variant="success">Connected</Badge>
              </div>
              <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/5">
                 <div className="flex items-center gap-3">
                    <img src="https://img.icons8.com/color/48/paypal.png" className="w-8 h-8" alt="PayPal" />
                    <span className="text-sm font-bold">PayPal Business</span>
                 </div>
                 <button className="text-[10px] font-black text-primary uppercase">Connect</button>
              </div>
           </div>
        </Card>

        <Card className="p-8 space-y-6">
           <div className="flex items-center gap-3">
              <span className="material-icons-round text-emerald-500">cloud</span>
              <h3 className="font-bold">Cloud Infrastructure</h3>
           </div>
           <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/5">
                 <div className="flex items-center gap-3">
                    <img src="https://img.icons8.com/color/48/amazon-web-services.png" className="w-8 h-8" alt="AWS" />
                    <span className="text-sm font-bold">AWS S3 / EC2</span>
                 </div>
                 <Badge variant="success">Active</Badge>
              </div>
              <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/5">
                 <div className="flex items-center gap-3">
                    <img src="https://img.icons8.com/color/48/google-logo.png" className="w-8 h-8" alt="GCP" />
                    <span className="text-sm font-bold">Google Cloud</span>
                 </div>
                 <Badge variant="ghost">Standby</Badge>
              </div>
           </div>
        </Card>
      </div>
    </div>
  );
};

export default GatewaySettingsPage;