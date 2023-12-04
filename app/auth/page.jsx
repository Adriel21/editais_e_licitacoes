'use client'
import Image from 'next/image';
import styles from './style.module.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Auth = () => {
  const [tokenValue, setTokenValue] = useState('');
  const [loading, setLoading] = useState(false); // Novo estado para controle de carregamento
  const router = useRouter();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const getCookie = (name) => {
      const cookies = document.cookie.split(';');
      for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.trim().split('=');
        if (cookieName === name) {
          return cookieValue;
        }
      }
      return null;
    };

    setTokenValue(getCookie('token'));
  }, []);

  useEffect(() => {
    if (tokenValue) {
      setLoading(true); // Ativar indicador de carregamento
      router.replace('/home');
    }
  }, [tokenValue]);

  const handleLoginChange = (event) => {
    setLogin(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const logar = async (event) => {
    event.preventDefault();
    setLoading(true); // Ativar indicador de carregamento

    const options = {
      method: 'POST',
      body: JSON.stringify({ login, password }),
      headers: {
        'Content-type': 'application/json; charset=utf-8',
      },
    };

    try {
      const response = await fetch('http://localhost:8080/auth/login', options);

      if (response.ok) {
        const data = await response.json();
        const tokenData = data.token;
        const userData = data.user.id;

        const expirationDate = new Date();
        expirationDate.setHours(expirationDate.getHours() + 2);
        const expirationDateString = expirationDate.toUTCString();

        document.cookie = `token=${tokenData};  expires=${expirationDateString}; Path=/; SameSite=Strict`;

        const expirationDate2 = new Date();
        expirationDate2.setHours(expirationDate2.getHours() + 24);
        const expirationDateString2 = expirationDate2.toUTCString();

        document.cookie = `user=${userData}; expires=${expirationDateString2}; Path=/; SameSite=Strict`;

        if (typeof window !== 'undefined') {
          router.push('/home');
        }
      } else {
        alert('Usuário Inválido');
      }
    } catch (error) {
      console.error('Deu ruim', error.message);
    } finally {
      setLoading(false); // Desativar indicador de carregamento, seja sucesso ou falha
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-100">
        <div className="flex justify-center mb-4">
          <Image
            src="/images/logo_morato.png"
            alt="Example Image"
            width={150}
            height={230}
            responsive="true"
            className="text-center"
          />
        </div>
        <form action="">
          <div className="mb-4">
            <label htmlFor="usuario" className="block text-gray-700">
              Usuário
            </label>
            <input
              type="text"
              id="usuario"
              className={`${styles.input} border rounded-md w-full py-2 px-3`}
              placeholder="Usuário"
              value={login}
              onChange={handleLoginChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="senha" className="block text-gray-700">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              className={`${styles.input} border rounded-md w-full py-2 px-3`}
              placeholder="***"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          <div className="flex justify-end">
            <button className={styles.button} onClick={(event) => logar(event)}>
              Entrar
            </button>
          </div>
        </form>
        {loading && <p>Carregando...</p>}
      </div>
    </div>
  );
};

export default Auth;
