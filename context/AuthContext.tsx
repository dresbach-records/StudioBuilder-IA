
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, Role } from '../types/user.types';
import { authService } from '../services/auth-service';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Simulando usuário já logado para a demonstração não expulsar o usuário
  const [user, setUser] = useState<User | null>({
    id: 'usr_demo_123',
    name: 'Admin Demo',
    email: 'admin@studiobuilder.ai',
    role: Role.MANAGER,
    avatar: 'https://picsum.photos/seed/admin/200/200'
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const currentUser = authService.getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    const userData = await authService.login(email, password);
    setUser(userData);
  };

  const register = async (name: string, email: string) => {
    const userData = await authService.register(name, email);
    setUser(userData);
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
