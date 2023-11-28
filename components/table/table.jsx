import { library } from '@fortawesome/fontawesome-svg-core';
import style from './style.module.css';
import { fas } from '@fortawesome/free-solid-svg-icons';
import SideBar from '@/components/sidebar/sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from "next/link"

// Adicione os ícones que deseja usar à biblioteca
library.add(fas);


const Table = () => {
   
  
  return (
    <>

     <SideBar /> 
    {/* <h1 className='mt-5 ms-4'>Gestão de Editais</h1> */}
    <section className='flex items-center justify-center'>
      <table className={`table-auto  divide-x border-collapse border border-slate-300 ${style.customTable}`}>
        <thead>
          <tr className={`text-center bg-[#F0F0F0]  ${style.trThead} border border-slate-300`}>
            <th className={`p-4  border border-slate-300`}>Código</th>
            <th className={`p-4  border border-slate-300`}>Data da Solicitação</th>
            <th className='p-4 border border-slate-300'>Edital</th>
            <th className='p-4 border border-slate-300'>Pessoa</th>
            <th className='p-4 border border-slate-300'>Contato</th>
            <th className='p-4 border border-slate-300'>Opções</th>
          </tr>
        </thead>
        <tbody className='border'>
          <tr>
            <td className={`${style.breakWord} p-3 border border-slate-300`}>10638</td>
            <td className={`${style.breakWord} p-3 border border-slate-300`}>24/11/2023 16:00:57</td>
            <td className={`${style.breakWord} p-3 border border-slate-300`}>PREGÃO ELETRÔNICO Nº 014/2023</td>
            <td className={`${style.breakWord} p-3 border border-slate-300`}>VERONICA MARTINS SANTOS</td>
            <td className={`${style.breakWord} p-3 border border-slate-300`}>smartinsveronica@gmail.com</td>
          </tr>
          <tr>
            <td className={`${style.breakWord} p-3 border border-slate-300`}>10638</td>
            <td className={`${style.breakWord} p-3 border border-slate-300`}>23/11/2023 16:00:57</td>
            <td className={`${style.breakWord} p-3 border border-slate-300`}>PREGÃO ELETRÔNICO Nº 013/2023</td>
            <td className={`${style.breakWord} p-3 border border-slate-300`}>VERONICA MARTINS</td>
            <td className={`${style.breakWord} p-3 border border-slate-300`}>smartinsveronica@gmail.com</td>
          </tr>
          <tr>
            <td className={`${style.breakWord} p-3 border border-slate-300`}>Shining Star</td>
            <td className={`${style.breakWord} p-3 border border-slate-300`}>Earth, Wind, and Fire</td>
            <td className={`${style.breakWord} p-3 border border-slate-300`}>1975</td>
            <td className={`${style.breakWord} p-3 border border-slate-300`}>1961</td>
            <td className={`${style.breakWord} p-3 border border-slate-300`}>1961</td>
          </tr>
          
        </tbody>
      </table>

      </section>
    </>
     )

}

export default Table

