import { createContext } from 'react';

export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

export interface Session {
  user: User;
  tokens: {
    token: string;
    refreshToken: string;
  };
}

export const AuthContext = createContext(
  {} as {
    isAuthenticated: boolean;
    isLoading: boolean;
    user?: User;
    session?: Session;
    login: (session: Session) => void;
    signOut: () => void;
  },
);
