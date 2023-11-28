import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import api from '@/app/services/api';
import Table from '@/components/table/table';
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers';


const Home = async () => {
  const cookieStore = cookies()
  const token = cookieStore.get('token')

  let data;
  try {
    data = await api.fetchData('', token.value, 'GET'); // passando o token para trazer os dados do usuário
  } catch (error) {
    console.error('Erro ao buscar os dados:', error);
  }



    if(!data) {
       redirect('/auth');
    }else{
      return (
        <>
          <Header />
          <main>
              <Table />
          </main>
          <Footer />
        </>
      )
    }
  }
  
  
  export default Home;
