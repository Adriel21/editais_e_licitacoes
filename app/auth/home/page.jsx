import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import api from '@/app/services/api';
import Table from '@/components/table/table';
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers';


const Home = async () => {
  const cookieStore = cookies()
  const token = cookieStore.get('token')
  const userId = cookieStore.get('user')
  

  let data;
  try {
    data = await api.fetchData(`auth/validate?id=${parseInt(userId.value)}`, token.value, 'GET'); // passando o token para trazer os dados do usuário
    console.log(data);
  } catch (error) {
    console.error('Erro ao buscar os dados:', error);
  }


   if (!data) {
     console.error('Token ou userId ausente. Redirecionando para a página de login.')
     redirect('/auth');
   }
        return (
        <>
          <Header />
          <main className='flex'>
              <Table />
          </main>
          <Footer />
        </>
      )
    }
  
  
  
  
  export default Home;
