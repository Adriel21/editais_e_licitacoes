'use client'
import Image from 'next/image';
import styles from './style.module.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Importe o hook useRouter
import { useAuth } from '@/context/auth_context';


const Auth = () => {
  const router = useRouter(); // Inicialize o hook useRouter
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const { setToken, setIsValid } = useAuth();
 
  // Função para atualizar o estado 'login' quando o campo de usuário muda
  const handleLoginChange = (event) => {
    setLogin(event.target.value);
  };

  // Função para atualizar o estado 'password' quando o campo de senha muda
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
            const token = data.token; // Extrai o token da resposta
            // Quando o usuário faz login com sucesso
            setToken(token);
            setIsValid(data.validate);

            // Defina a data de expiração do cookie (por exemplo, 2 horas a partir do momento atual)
            const expirationDate = new Date();
            expirationDate.setHours(expirationDate.getHours() + 2); // Defina o tempo desejado de expiração
          // Armazene o token em um cookie HTTP-only
          document.cookie = `token=${token}; Secure; HttpOnly; SameSite=Strict; Path=/`;

     
            if (typeof window !== 'undefined') {
              // Verifique se o código é executado no lado do cliente antes de redirecionar
              router.push('/home');
            }

          } else {
            console.error("Erro ao fazer login:", response.status, response.statusText);
          }
        } catch (error) {
          console.error("Deu ruim", error.message);
        }
      };

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
                value={login} // Defina o valor do campo com o estado 'login'
                onChange={handleLoginChange} // Configure a função de tratamento de evento
              />
            </div>
  
            <div className="mb-4">
              <label htmlFor="senha" className="block text-gray-700">Senha</label>
              <input
                type="password"
                id="senha"
                className={`${styles.input} border rounded-md w-full py-2 px-3`}
                placeholder="***"
                value={password} // Defina o valor do campo com o estado 'password'
                onChange={handlePasswordChange} // Configure a função de tratamento de evento
              />
            </div>

            <div className="flex justify-end"><button className={styles.button} onClick={(event) => logar(event)}>Entrar</button></div>
          </form>
        </div>
      </div>
    );
  };
  
  export default Auth;
  