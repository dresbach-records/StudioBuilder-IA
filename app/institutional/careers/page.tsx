
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';

const CareersPage: React.FC = () => {
  const navigate = useNavigate();

  const jobs = [
    { title: 'Desenvolvedor Backend Sênior', location: 'Remote / Brasil', type: 'Full-time', slug: 'job-details' },
    { title: 'Senior AI Engineer', location: 'Remote / London', type: 'Full-time', slug: 'job-details' },
    { title: 'Infrastructure Architect', location: 'Palo Alto', type: 'Hybrid', slug: 'job-details' },
    { title: 'Developer Experience Designer', location: 'Remote', type: 'Contract', slug: 'job-details' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-8 py-24">
      <div className="text-center mb-24">
        <h1 className="text-6xl font-black mb-6">Build the Core</h1>
        <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">We're looking for humans who want to build the tools that empower the next billion engineers.</p>
        
        <div className="flex justify-center gap-6 mt-12 text-xs font-bold uppercase tracking-widest text-slate-500">
           <span className="hover:text-primary cursor-pointer transition-colors">Vagas</span>
           <span className="hover:text-primary cursor-pointer transition-colors">Cultura</span>
           <span className="hover:text-primary cursor-pointer transition-colors">Blog</span>
           <button className="px-6 py-2 bg-primary/10 border border-primary/20 text-primary rounded-lg hover:bg-primary hover:text-white transition-all">Ver Todas as Vagas</button>
        </div>
      </div>

      <div className="space-y-6">
        {jobs.map((job, i) => (
          <div 
            key={i} 
            onClick={() => navigate(`/institutional/careers/${job.slug}`)}
            className="p-8 bg-white/5 border border-white/10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 hover:border-primary/50 transition-all cursor-pointer group"
          >
            <div>
              <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{job.title}</h3>
              <div className="flex gap-4 mt-2 text-sm text-slate-500 font-medium">
                <span className="flex items-center gap-1"><span className="material-icons-round text-sm">place</span> {job.location}</span>
                <span className="flex items-center gap-1"><span className="material-icons-round text-sm">schedule</span> {job.type}</span>
              </div>
            </div>
            <Button 
              className="px-8 py-3 bg-white text-slate-900 font-bold rounded-xl hover:bg-primary hover:text-white transition-all"
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/institutional/careers/${job.slug}`);
              }}
            >
              Apply Now
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareersPage;
