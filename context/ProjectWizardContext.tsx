
import React, { createContext, useContext, useState, useEffect } from 'react';

export interface ProjectData {
  id?: string;
  name: string;
  type: string;
  objective: string;
  audience: string;
  budget: string;
  deadline: string;
  description: string;
  features: string;
  references: string[];
  differentiator: string;
  observations: string;
  style: 'Modern' | 'Corporate' | 'Minimalist' | 'Premium';
  colors: string[];
  structure: string[];
  status: 'Em Análise' | 'Kick-off' | 'Design' | 'Technical' | 'Review';
}

interface ProjectWizardContextType {
  data: ProjectData;
  updateData: (updates: Partial<ProjectData>) => void;
  resetWizard: () => void;
  submitProject: () => string;
}

const initialData: ProjectData = {
  name: '',
  type: '',
  objective: '',
  audience: '',
  budget: '',
  deadline: '',
  description: '',
  features: '',
  references: [],
  differentiator: '',
  observations: '',
  style: 'Modern',
  colors: ['#2563EB'],
  structure: [],
  status: 'Em Análise'
};

const ProjectWizardContext = createContext<ProjectWizardContextType | undefined>(undefined);

export const ProjectWizardProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<ProjectData>(() => {
    const saved = localStorage.getItem('sb_wizard_data');
    return saved ? JSON.parse(saved) : initialData;
  });

  useEffect(() => {
    localStorage.setItem('sb_wizard_data', JSON.stringify(data));
  }, [data]);

  const updateData = (updates: Partial<ProjectData>) => {
    setData(prev => ({ ...prev, ...updates }));
  };

  const resetWizard = () => {
    setData(initialData);
    localStorage.removeItem('sb_wizard_data');
  };

  const submitProject = () => {
    const id = 'proj_' + Math.random().toString(36).substr(2, 9);
    const projects = JSON.parse(localStorage.getItem('sb_projects') || '[]');
    const newProject = { ...data, id, createdAt: new Date().toISOString() };
    projects.push(newProject);
    localStorage.setItem('sb_projects', JSON.stringify(projects));
    resetWizard();
    return id;
  };

  return (
    <ProjectWizardContext.Provider value={{ data, updateData, resetWizard, submitProject }}>
      {children}
    </ProjectWizardContext.Provider>
  );
};

export const useProjectWizard = () => {
  const context = useContext(ProjectWizardContext);
  if (context === undefined) {
    throw new Error('useProjectWizard must be used within a ProjectWizardProvider');
  }
  return context;
};
