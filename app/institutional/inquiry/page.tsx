
import React from 'react';

const InquiryPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-24">
      <div>
        <h1 className="text-6xl font-black mb-8">Let's build <br/> something <span className="text-primary italic">extraordinary.</span></h1>
        <p className="text-slate-400 text-xl mb-12">Whether you're an enterprise looking for autonomous scale or a startup building the first MVP, we're here to help.</p>
        
        <div className="space-y-8">
          <div className="flex gap-6">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
               <span className="material-icons-round">alternate_email</span>
            </div>
            <div>
              <h4 className="font-bold text-lg">Email Us</h4>
              <p className="text-slate-500">solutions@studiobuilder.ai</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
               <span className="material-icons-round">forum</span>
            </div>
            <div>
              <h4 className="font-bold text-lg">Sales Support</h4>
              <p className="text-slate-500">+1 (555) 890-3421</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 p-12 rounded-3xl shadow-2xl">
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase">First Name</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/50 outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase">Last Name</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/50 outline-none" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase">Company Email</label>
            <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/50 outline-none" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase">Project Description</label>
            <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/50 outline-none resize-none"></textarea>
          </div>
          <button className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-xl shadow-primary/30 hover:bg-blue-600 transition-all">
            Send Inquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default InquiryPage;
