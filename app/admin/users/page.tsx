
import React from 'react';

const UsersPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold">Platform Users</h1>
          <p className="text-slate-500">Manage access and account status for all platform entities.</p>
        </div>
        <button className="px-6 py-2.5 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20 flex items-center gap-2">
          <span className="material-icons-round">person_add</span>
          Invite User
        </button>
      </div>

      <div className="bg-white dark:bg-panel-dark border border-slate-200 dark:border-border-dark rounded-2xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 dark:bg-white/5 border-b border-slate-200 dark:border-border-dark">
            <tr className="text-[11px] font-bold uppercase text-slate-500 tracking-wider">
              <th className="px-6 py-4">Identity</th>
              <th className="px-6 py-4">Role</th>
              <th className="px-6 py-4">Account Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {[
              { name: 'Alex Sterling', email: 'alex@sterling.io', role: 'MANAGER', status: 'Active', avatar: 'https://picsum.photos/seed/a/100/100' },
              { name: 'Sarah Chen', email: 'sarah@devstack.io', role: 'DEVELOPER', status: 'Active', avatar: 'https://picsum.photos/seed/b/100/100' },
              { name: 'Marcus Aurelius', email: 'm.aurelius@rome.it', role: 'DESIGNER', status: 'Suspended', avatar: 'https://picsum.photos/seed/c/100/100' }
            ].map((user, i) => (
              <tr key={i} className="hover:bg-slate-50 dark:hover:bg-primary/5 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <img src={user.avatar} className="w-10 h-10 rounded-full border-2 border-slate-100 dark:border-slate-800" />
                    <div>
                      <p className="text-sm font-bold">{user.name}</p>
                      <p className="text-xs text-slate-500">{user.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full">{user.role}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${user.status === 'Active' ? 'bg-emerald-500' : 'bg-rose-500'}`}></span>
                    <span className="text-xs font-medium">{user.status}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 text-slate-400 hover:text-primary"><span className="material-icons-round">edit</span></button>
                  <button className="p-2 text-slate-400 hover:text-rose-500"><span className="material-icons-round">delete</span></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersPage;
