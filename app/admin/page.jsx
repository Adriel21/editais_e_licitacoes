import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import MenuLateral from '@/components/menulateral/menulateral';
import Table from '@/components/table/table';

export default function Admin() {
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