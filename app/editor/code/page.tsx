
import React, { useState, useRef, useEffect } from 'react';
import Badge from '../../../components/ui/Badge';
import { aiService } from '../../../services/ai-service';

interface FileNode {
  id: string;
  name: string;
  type: 'file' | 'folder';
  isOpen?: boolean;
  active?: boolean;
  children?: FileNode[];
  content?: string;
}

interface Message {
  role: 'user' | 'assistant';
  text: string;
  time: string;
  isEditing?: boolean;
}

const EditorCode: React.FC = () => {
  // UI State
  const [explorerOpen, setExplorerOpen] = useState(true);
  const [aiPanelOpen, setAiPanelOpen] = useState(true);
  const [activeFile, setActiveFile] = useState<FileNode | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  
  // File System State
  const [fileSystem, setFileSystem] = useState<FileNode[]>([
    { 
      id: 'root', name: 'src', type: 'folder', isOpen: true, 
      children: [
        { 
          id: 'comp', name: 'components', type: 'folder', isOpen: true,
          children: [
            { id: 'pc', name: 'ProductCard.tsx', type: 'file', active: true, content: 'export const ProductCard = () => {\n  return <div>Product</div>;\n};' }
          ]
        }
      ]
    }
  ]);

  // Chat State
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', text: "Olá! Sou o Studio AI. Como posso ajudar no seu código hoje?", time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
  ]);

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Actions: File Management
  const addNode = (parentId: string, type: 'file' | 'folder') => {
    const name = window.prompt(`Nome do ${type === 'file' ? 'arquivo' : 'pasta'}:`);
    if (!name) return;

    const newNode: FileNode = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      type,
      children: type === 'folder' ? [] : undefined,
      content: type === 'file' ? '// Novo arquivo\n' : undefined
    };

    const updateTree = (nodes: FileNode[]): FileNode[] => {
      return nodes.map(node => {
        if (node.id === parentId) {
          return { ...node, children: [...(node.children || []), newNode], isOpen: true };
        }
        if (node.children) {
          return { ...node, children: updateTree(node.children) };
        }
        return node;
      });
    };

    setFileSystem(updateTree(fileSystem));
  };

  const selectFile = (file: FileNode) => {
    if (file.type === 'folder') {
      const toggleTree = (nodes: FileNode[]): FileNode[] => {
        return nodes.map(node => {
          if (node.id === file.id) return { ...node, isOpen: !node.isOpen };
          if (node.children) return { ...node, children: toggleTree(node.children) };
          return node;
        });
      };
      setFileSystem(toggleTree(fileSystem));
    } else {
      setActiveFile(file);
      const activateTree = (nodes: FileNode[]): FileNode[] => {
        return nodes.map(node => ({
          ...node,
          active: node.id === file.id,
          children: node.children ? activateTree(node.children) : undefined
        }));
      };
      setFileSystem(activateTree(fileSystem));
    }
  };

  // Actions: AI Chat
  const handleAiCommand = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputValue.trim() || isAiLoading) return;

    const userMsg = inputValue;
    setInputValue('');
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    setMessages(prev => [...prev, { role: 'user', text: userMsg, time: now }]);
    setIsAiLoading(true);

    try {
      const history = messages.map(m => ({
        role: m.role === 'assistant' ? 'model' : 'user' as any,
        parts: [{ text: m.text }]
      }));
      
      const response = await aiService.streamChat(userMsg, history);
      
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        text: response || "Desculpe, ocorreu um erro no processamento.", 
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
      }]);
    } catch (err) {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        text: "Erro de conexão com o Studio AI. Verifique sua rede.", 
        time: now 
      }]);
    } finally {
      setIsAiLoading(false);
    }
  };

  const editPrompt = (index: number) => {
    const newText = window.prompt("Editar prompt:", messages[index].text);
    if (newText !== null) {
      const newMessages = [...messages];
      newMessages[index].text = newText;
      setMessages(newMessages);
    }
  };

  const renderTree = (nodes: FileNode[]) => (
    <div className="space-y-0.5">
      {nodes.map(node => (
        <div key={node.id}>
          <div 
            onClick={() => selectFile(node)}
            className={`flex items-center justify-between group px-3 py-1.5 rounded-lg cursor-pointer transition-all ${node.active ? 'bg-primary/20 text-primary' : 'hover:bg-white/5 text-slate-400 hover:text-white'}`}
          >
            <div className="flex items-center gap-2">
              <span className="material-icons-round text-sm">
                {node.type === 'folder' ? (node.isOpen ? 'keyboard_arrow_down' : 'chevron_right') : 'description'}
              </span>
              <span className={`text-[11px] font-bold ${node.type === 'folder' ? 'text-blue-400' : ''}`}>{node.name}</span>
            </div>
            {node.type === 'folder' && (
              <span 
                onClick={(e) => { e.stopPropagation(); addNode(node.id, 'file'); }}
                className="material-icons-round text-xs opacity-0 group-hover:opacity-100 hover:text-primary"
              >add</span>
            )}
          </div>
          {node.type === 'folder' && node.isOpen && node.children && (
            <div className="ml-4 pl-2 border-l border-white/5">
              {renderTree(node.children)}
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="h-full flex flex-col bg-[#090b14] text-slate-300 font-sans overflow-hidden">
      {/* Top Header Explorer Path */}
      <div className="h-12 border-b border-white/5 bg-[#0c111d] flex items-center justify-between px-6 shrink-0 z-50">
        <div className="flex items-center gap-4">
           <button onClick={() => setExplorerOpen(!explorerOpen)} className={`p-1.5 rounded hover:bg-white/5 ${explorerOpen ? 'text-primary' : 'text-slate-500'}`}>
              <span className="material-icons-round text-lg">menu_open</span>
           </button>
           <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              <span className="material-icons-round text-sm">account_tree</span>
              project-main
              <span className="material-icons-round text-[10px] opacity-30">chevron_right</span>
              <span className="text-amber-500 italic">{activeFile?.name || 'Selecione um arquivo'}</span>
           </div>
        </div>
        <div className="flex items-center gap-4">
           <button onClick={() => setAiPanelOpen(!aiPanelOpen)} className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase transition-all ${aiPanelOpen ? 'bg-primary/20 text-primary border border-primary/30' : 'bg-white/5 text-slate-500 border border-white/5'}`}>
              <span className="material-icons-round text-sm">auto_fix_high</span>
              AI Assistant
           </button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* File Explorer Sidebar */}
        {explorerOpen && (
          <aside className="w-64 border-r border-white/5 bg-[#0c111d] flex flex-col shrink-0 animate-in slide-in-from-left-4 duration-300">
            <div className="p-4 flex justify-between items-center bg-black/20 border-b border-white/5">
               <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 italic">Explorer</span>
               <div className="flex gap-1">
                  <span onClick={() => addNode('root', 'folder')} className="material-icons-round text-sm text-slate-600 hover:text-white cursor-pointer p-1">create_new_folder</span>
                  <span onClick={() => addNode('root', 'file')} className="material-icons-round text-sm text-slate-600 hover:text-white cursor-pointer p-1">note_add</span>
               </div>
            </div>
            <div className="flex-1 overflow-y-auto custom-scrollbar p-2">
               {renderTree(fileSystem)}
            </div>
          </aside>
        )}

        {/* Editor Main Area */}
        <main className="flex-1 flex flex-col bg-[#050810] relative">
          <div className="h-10 border-b border-white/5 bg-[#0c111d] flex items-center shrink-0 px-2 overflow-x-auto custom-scrollbar">
             {activeFile && (
               <div className="h-full flex items-center gap-2 px-6 text-[10px] font-black uppercase tracking-widest bg-primary/10 text-primary border-b-2 border-primary">
                  <span className="material-icons-round text-xs">description</span>
                  {activeFile.name}
               </div>
             )}
          </div>

          <div className="flex-1 overflow-hidden flex flex-col font-mono text-[13px] leading-relaxed relative">
             {!activeFile ? (
               <div className="flex-1 flex flex-col items-center justify-center text-slate-700 space-y-4">
                  <span className="material-icons-round text-6xl opacity-20">code_off</span>
                  <p className="font-bold uppercase tracking-widest text-[10px]">Selecione um arquivo para editar</p>
               </div>
             ) : (
               <div className="flex-1 p-8 overflow-y-auto custom-scrollbar bg-black/10">
                  <div className="flex gap-6">
                    <div className="text-slate-800 text-right select-none border-r border-white/5 pr-6 min-w-[40px]">
                      {Array.from({length: 15}).map((_, i) => <div key={i}>{i+1}</div>)}
                    </div>
                    <pre className="flex-1 text-slate-300 focus:outline-none whitespace-pre-wrap" contentEditable>
                      {activeFile.content}
                    </pre>
                  </div>
               </div>
             )}

             {/* Output/Terminal Panel */}
             <div className="h-40 border-t border-white/5 bg-[#0c111d] flex flex-col shrink-0">
                <div className="px-6 py-2 border-b border-white/5 flex gap-6 text-[9px] font-black text-slate-600 uppercase tracking-widest">
                   <span className="text-primary border-b border-primary">Terminal</span>
                   <span>Output</span>
                   <span>Debug</span>
                </div>
                <div className="flex-1 overflow-y-auto custom-scrollbar p-4 font-mono text-[10px] text-emerald-500/60 leading-tight">
                   <p><span className="text-blue-500">➜</span> studio-builder: <span className="text-white">npm run dev</span></p>
                   <p className="mt-1">ready - started server on 0.0.0.0:3000, url: http://localhost:3000</p>
                   <p>event - compiled successfully in 124ms</p>
                </div>
             </div>
          </div>
        </main>

        {/* AI ASSISTANT SIDEBAR */}
        {aiPanelOpen && (
          <aside className="w-80 border-l border-white/5 bg-[#0c111d] flex flex-col shrink-0 animate-in slide-in-from-right-4 duration-300">
             <div className="p-4 border-b border-white/5 bg-black/20 flex items-center justify-between">
                <div className="flex items-center gap-2 text-primary font-black uppercase tracking-[0.2em] text-[10px]">
                   <span className="material-icons-round text-lg">auto_fix_high</span>
                   STUDIO AI
                </div>
                <button onClick={() => setAiPanelOpen(false)} className="text-slate-600 hover:text-white">
                   <span className="material-icons-round text-sm">close</span>
                </button>
             </div>

             <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-6">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''} group`}>
                     <div className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center text-[10px] font-bold ${msg.role === 'assistant' ? 'bg-primary/20 text-primary' : 'bg-slate-800 text-slate-400'}`}>
                        {msg.role === 'assistant' ? 'AI' : 'JD'}
                     </div>
                     <div className={`space-y-1 max-w-[85%] ${msg.role === 'user' ? 'text-right' : ''}`}>
                        <div className="flex items-center gap-2 justify-between">
                          <p className="text-[9px] font-black uppercase tracking-widest text-slate-600">
                             {msg.role === 'assistant' ? 'Studio AI' : 'Você'}
                          </p>
                          {msg.role === 'user' && (
                             <span onClick={() => editPrompt(i)} className="material-icons-round text-[10px] text-slate-700 opacity-0 group-hover:opacity-100 cursor-pointer hover:text-primary">edit</span>
                          )}
                        </div>
                        <div className={`p-3 rounded-2xl text-[11px] leading-relaxed ${msg.role === 'assistant' ? 'bg-primary/5 text-slate-300 border border-primary/10' : 'bg-white/5 text-slate-400 border border-white/5'}`}>
                           <p className="whitespace-pre-wrap">{msg.text}</p>
                        </div>
                     </div>
                  </div>
                ))}
                {isAiLoading && (
                  <div className="flex gap-3 animate-pulse">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 shrink-0"></div>
                    <div className="space-y-2 flex-1">
                      <div className="h-2 bg-white/5 rounded w-1/4"></div>
                      <div className="h-12 bg-white/5 rounded w-full"></div>
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
             </div>

             <div className="p-4 border-t border-white/5 bg-black/40">
                <form onSubmit={handleAiCommand} className="relative">
                   <input 
                     type="text" 
                     value={inputValue}
                     onChange={(e) => setInputValue(e.target.value)}
                     disabled={isAiLoading}
                     placeholder={isAiLoading ? "Processando..." : "Pergunte algo à IA..."} 
                     className="w-full bg-[#090b14] border border-white/10 rounded-xl py-3.5 pl-4 pr-12 text-[11px] font-medium outline-none focus:ring-1 focus:ring-primary/40 transition-all placeholder:text-slate-700 disabled:opacity-50"
                   />
                   <button 
                     type="submit"
                     disabled={isAiLoading}
                     className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 bg-primary/20 text-primary border border-primary/20 rounded-lg flex items-center justify-center shadow-lg group hover:bg-primary hover:text-white transition-all disabled:opacity-50"
                   >
                      {isAiLoading ? (
                        <span className="w-3 h-3 border-2 border-primary border-t-transparent rounded-full animate-spin"></span>
                      ) : (
                        <span className="material-icons-round text-sm group-hover:scale-110 transition-transform">send</span>
                      )}
                   </button>
                </form>
             </div>
          </aside>
        )}
      </div>

      {/* Engineering Footer Status Bar */}
      <footer className="h-7 border-t border-white/5 bg-primary px-6 flex items-center justify-between text-[8px] font-black uppercase tracking-[0.2em] text-white shrink-0">
         <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
               <span className="material-icons-round text-xs">account_tree</span>
               main*
            </div>
            <div className="flex items-center gap-4">
               <span className="flex items-center gap-1 opacity-80"><span className="material-icons-round text-xs">cancel</span> 0</span>
               <span className="flex items-center gap-1 opacity-80"><span className="material-icons-round text-xs">warning</span> 0</span>
            </div>
         </div>
         <div className="flex items-center gap-8">
            <span className="opacity-80">TypeScript JSX</span>
            <span className="opacity-100 font-bold">UTF-8</span>
         </div>
      </footer>
    </div>
  );
};

export default EditorCode;
