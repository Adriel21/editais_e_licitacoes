import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import api from '@/app/services/api';
import MenuLateral from '@/components/menulateral/menulateral';
import Table from '@/components/table/table';
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers';


const Home = async () => {
  const cookieStore = cookies()
  const token = cookieStore.get('token')

  let data;
  try {
    data = await api.fetchData('', token.value, 'GET'); // passando o token para trazer os dados do usuário
    // console.log(data)
  } catch (error) {
    console.error('Erro ao buscar os dados:', error);
  }

  let validate = data;

 

    if(!validate) {
       redirect('/auth');
    }else{
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
  
  
  export default Home;
