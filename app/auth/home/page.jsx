'use client'
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import MenuLateral from '@/components/menulateral/menulateral';
import Table from '@/components/table/table';
import { useAuth } from '@/context/auth_context';
import { useRouter } from 'next/navigation'; // Importe o hook useRouter


export default function Home() {

  const { isValid } = useAuth();
  const router = useRouter(); // Inicialize o hook useRouter

  // Verifique o estado de autenticação e redirecione se não estiver autenticado
  if (!isValid) {
    router.push('/auth'); // Redireciona para a rota '/auth'
  } else{
    return (
      <>
        <Header />
        <main className='flex'>
        <MenuLateral />
          <section>
            <h1 className='mt-5 ms-4'>Gestão de Editais</h1>
            < Table />
          </section>
        </main>
        <Footer />
      </>
    )
  }

 
   }