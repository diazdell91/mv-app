import { createContext } from 'react';

export interface User {
  id: string;
  email: string;
  name: string;
  roles: string[];
}

export interface Session {
  user: User;
  token: string;
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
