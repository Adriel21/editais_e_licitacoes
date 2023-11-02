"use client"
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [isValid, setIsValid] = useState(false);

   // Função para definir isValid como false após 30 segundos
   const setInvalidAfterTimeout = () => {
    setTimeout(() => {
      setIsValid(false);
    },  2 * 60 * 60 * 1000); // 30 segundos em milissegundos
  };

  useEffect(() => {
    // Inicie o temporizador quando o componente for montado
    setInvalidAfterTimeout();
  }, []);

  // Quando o token é definido, redefina o temporizador
  useEffect(() => {
    if (token) {
      setInvalidAfterTimeout();
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, setToken, isValid, setIsValid }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
