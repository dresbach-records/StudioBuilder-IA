
import React from 'react';
import Sidebar from '../../components/layout/Sidebar';
import Topbar from '../../components/layout/Topbar';

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-[#090b14] text-white selection:bg-primary/30 font-sans">
      <Sidebar variant="admin" />
      <div className="flex-1 flex flex-col ml-20 lg:ml-64">
        <Topbar isEditor={false} />
        <main className="flex-1 overflow-y-auto custom-scrollbar">
           <div className="max-w-[1600px] mx-auto p-8 lg:p-12">
              {children}
           </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
