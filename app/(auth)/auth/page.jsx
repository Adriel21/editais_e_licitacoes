import Image from 'next/image';
import styles from './style.module.css';

const Auth = () => {
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
              />
            </div>
  
            <div className="mb-4">
              <label htmlFor="senha" className="block text-gray-700">Senha</label>
              <input
                type="password"
                id="senha"
                className={`${styles.input} border rounded-md w-full py-2 px-3`}
                placeholder="***"
              />
            </div>

            <div className="flex justify-end"><button className={styles.button}>Entrar</button></div>
          </form>
        </div>
      </div>
    );
  };
  
  export default Auth;
  