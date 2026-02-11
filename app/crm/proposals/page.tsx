
import React from 'react';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import Badge from '../../../components/ui/Badge';

const ProposalGenerator: React.FC = () => {
  const templates = [
    { id: 1, title: 'Enterprise SaaS Architecture', type: 'Technical', estimation: '$45,000 - $80,000' },
    { id: 2, title: 'E-commerce Mobile Extension', type: 'Design & Dev', estimation: '$12,000 - $25,000' },
    { id: 3, title: 'Security Audit & Hardening', type: 'Compliance', estimation: '$8,000 - $15,000' }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold">Proposal Generator</h1>
          <p className="text-slate-500">Create professional engineering proposals using AI-guided templates.</p>
        </div>
        <Button icon="add">New Proposal</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {templates.map(temp => (
          <Card key={temp.id} className="p-6 group hover:border-primary transition-all cursor-pointer">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <span className="material-icons-round">description</span>
            </div>
            <h3 className="font-bold text-lg mb-2">{temp.title}</h3>
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="ghost">{temp.type}</Badge>
            </div>
            <p className="text-xs text-slate-500 mb-6 font-mono">EST: {temp.estimation}</p>
            <Button variant="outline" size="sm" className="w-full">Use Template</Button>
          </Card>
        ))}
      </div>

      <Card className="p-8 bg-slate-900 border-none text-white relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">Autonomous Drafting</h2>
            <p className="text-slate-400 text-sm max-w-md">Our AI can draft a full technical proposal based on your project chat history and visual canvas architecture.</p>
          </div>
          <Button variant="secondary" size="lg" icon="auto_awesome">Draft with AI</Button>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
      </Card>
    </div>
  );
};

export default ProposalGenerator;
