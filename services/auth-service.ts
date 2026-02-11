
import { User, Role } from '../types/user.types';

const AUTH_KEY = 'sb_ai_auth_user';

export const authService = {
  getCurrentUser: (): User | null => {
    const data = localStorage.getItem(AUTH_KEY);
    return data ? JSON.parse(data) : null;
  },

  login: async (email: string, password: string): Promise<User> => {
    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (password === 'error') throw new Error('Invalid credentials');
    
    const mockUser: User = {
      id: 'usr_' + Math.random().toString(36).substr(2, 9),
      name: email.split('@')[0],
      email: email,
      role: email.includes('admin') ? Role.MANAGER : Role.DEVELOPER,
      avatar: `https://picsum.photos/seed/${email}/200/200`
    };
    
    localStorage.setItem(AUTH_KEY, JSON.stringify(mockUser));
    return mockUser;
  },

  register: async (name: string, email: string): Promise<User> => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    const mockUser: User = {
      id: 'usr_' + Math.random().toString(36).substr(2, 9),
      name,
      email,
      role: Role.DEVELOPER,
      avatar: `https://picsum.photos/seed/${email}/200/200`
    };
    localStorage.setItem(AUTH_KEY, JSON.stringify(mockUser));
    return mockUser;
  },

  logout: () => {
    localStorage.removeItem(AUTH_KEY);
  }
};
