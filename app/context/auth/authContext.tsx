import { createContext } from 'react';

export interface User {
  id: string;
  email: string;
  name: string;
  roles: number;
  token: string;
}

export const AuthContext = createContext(
  {} as {
    isAuthenticated: boolean;
    isLoading: boolean;
    user?: User;
    signOut: () => void;
    login: (user: User) => void;
  },
);
