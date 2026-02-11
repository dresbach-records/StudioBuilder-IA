
import React, { useState } from 'react';
import Card from '../../../components/ui/Card';
import Input from '../../../components/ui/Input';

const ConversationalEditor: React.FC = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Hello! I am your lead architect agent. How can I help you build today?', time: '10:00 AM' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input) return;
    setMessages([...messages, { role: 'user', text: input, time: '10:02 AM' }]);
    setInput('');
    setTimeout(() => {
       setMessages(prev => [...prev, { role: 'assistant', text: 'I am analyzing your request. I will start generating the project scaffolding based on these specifications.', time: '10:02 AM' }]);
    }, 1500);
  };

  return (
    <div className="h-full flex flex-col bg-slate-50 dark:bg-background-dark/50">
      <div className="p-8 pb-4">
        <h1 className="text-2xl font-bold">Planning Chat</h1>
        <p className="text-sm text-slate-500">Conversational engineering and agent orchestration.</p>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar p-8 space-y-6">
         {messages.map((msg, i) => (
           <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2`}>
              <div className={`max-w-[70%] p-4 rounded-2xl ${
                msg.role === 'user' 
                ? 'bg-primary text-white shadow-lg' 
                : 'bg-white dark:bg-panel-dark border border-slate-200 dark:border-white/5'
              }`}>
                 <p className="text-sm leading-relaxed">{msg.text}</p>
                 <p className={`text-[10px] mt-2 font-bold uppercase ${msg.role === 'user' ? 'text-blue-200' : 'text-slate-400'}`}>{msg.time}</p>
              </div>
           </div>
         ))}
      </div>

      <div className="p-8 shrink-0">
         <div className="bg-white dark:bg-panel-dark border border-slate-200 dark:border-white/5 p-2 rounded-2xl shadow-2xl flex items-center gap-4">
            <button className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-500 flex items-center justify-center hover:text-primary transition-all">
               <span className="material-icons-round">attach_file</span>
            </button>
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              type="text" 
              placeholder="Describe what you want to build..." 
              className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-4"
            />
            <button 
              onClick={handleSend}
              className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
            >
               <span className="material-icons-round">send</span>
            </button>
         </div>
      </div>
    </div>
  );
};

export default ConversationalEditor;
