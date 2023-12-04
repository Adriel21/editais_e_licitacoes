import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import EditalForm from "@/components/edital/editalform/editalform";
import api from '@/app/services/api';
import SideBar from "@/components/sidebar/sidebar";
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers';



const CadastroEdital = async () => {
  const cookieStore = cookies()
  const token = cookieStore.get('token')
  const userId = cookieStore.get('user')
  

  let data;
  try {
    data = await api.fetchData(`auth/validate?id=${parseInt(userId.value)}`, token.value, 'GET'); // passando o token para trazer os dados do usuário
    alert('Edital cadastrado com sucesso!')
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
      <main className="flex">
        <SideBar />
        <section className="container px-5 bg-gray-100">
          <h1 className='my-4  font-bol text-1xl md:text-2xl lg:text-4xl dark:text-white"'>
            Cadastro de edital
          </h1>
          <EditalForm token={token.value} />
        </section>
      </main>

      <Footer />
    </>
  );

      }

        
          
           
export default CadastroEdital;

