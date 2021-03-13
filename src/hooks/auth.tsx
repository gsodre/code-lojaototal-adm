import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

interface User {
  codigo: number;
  funcao: number;
  nome: string;
  userName: string;
  urlAvatar?: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  user: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@LTotal:token');
    const user = localStorage.getItem('@LTotal:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ user, password }: SignInCredentials) => {
    const response = await api.post('sessons', { user, password });

    const { accessToken, usuario } = response.data;

    localStorage.setItem('@LTotal:token', accessToken);
    localStorage.setItem('@LTotal:user', JSON.stringify(usuario));

    setData({ token: accessToken, user: usuario });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@LTotal:token');
    localStorage.removeItem('@LTotal:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }

  return context;
}
