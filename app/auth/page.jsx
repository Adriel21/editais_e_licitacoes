'use client'
import Image from 'next/image';
import styles from './style.module.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; 


const Auth = () => {

  const [tokenValue, setTokenValue] = useState('');
  useEffect(() => {
    // Função para obter o valor de um cookie por nome
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

    // Exemplo: Obtendo o valor do cookie chamado 'token'
    setTokenValue(getCookie('token'));
    console.log('Valor do cookie "token":', tokenValue);
  }, []); // Executa apenas uma vez ao montar o componente

 

  const router = useRouter(); 
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
 
  const handleLoginChange = (event) => {
    setLogin(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

      const logar = async (event) => {

        event.preventDefault();

        const options = {
          method: "POST",
          body: JSON.stringify({ login, password }),
          headers: {
            "Content-type": "application/json; charset=utf-8",
          },
        };

        try {
          const response = await fetch("http://192.168.18.60:8080/auth/login", options);

          if (response.ok) {
            const data = await response.json();
            const tokenData = data.token; // Extrai o token da resposta

             // Defina a data de expiração para 2 horas a partir do momento atual
              const expirationDate = new Date();
              expirationDate.setHours(expirationDate.getHours() + 2);

              // Construa a string de data no formato UTC para o cookie
              const expirationDateString = expirationDate.toUTCString();

              document.cookie = `token=${tokenData}; expires=${expirationDateString}; Path=/; SameSite=Strict`;
     
              if (typeof window !== 'undefined') {
                //  Verifique se o código é executado no lado do cliente antes de redirecionar
                router.push('/home');
              }

          } else {
            alert('Usuário Inválido');
          }
        } catch (error) {
          console.error("Deu ruim", error.message);
        }
      };

      if(tokenValue) {
        router.push('/home');
        // console.log(tokenValue)
      } else { 
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-100">
        <div className='flex justify-center mb-4'>
            <Image
                    src="/images/logo_morato.png"
                    alt="Example Image"
                    width={150}
                    height={230}
                    responsive="true"
                    className='text-center'
                />
        </div>
          <form action="">
            <div className="mb-4">
              <label htmlFor="usuario" className="block text-gray-700">Usuário</label>
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
              <label htmlFor="senha" className="block text-gray-700">Senha</label>
              <input
                type="password"
                id="senha"
                className={`${styles.input} border rounded-md w-full py-2 px-3`}
                placeholder="***"
                value={password} 
                onChange={handlePasswordChange} 
              />
            </div>

            <div className="flex justify-end"><button className={styles.button} onClick={(event) => logar(event)}>Entrar</button></div>
          </form>
        </div>
      </div>
    );
   } 
  };
  
  export default Auth;
  