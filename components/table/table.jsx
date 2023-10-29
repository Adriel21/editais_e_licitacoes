import { library } from '@fortawesome/fontawesome-svg-core';
import style from './style.module.css';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from "next/link"

// Adicione os ícones que deseja usar à biblioteca
library.add(fas);


const Table = () => {
   
  
  return (
    <>
      <table className={'table-auto  divide-x border-collapse border border-slate-300'}>
        <thead>
          <tr className={`text-left bg-[#F0F0F0] p-5 ${style.trThead} border border-slate-300`}>
            <th className={`p-4 ${style.customTdWidthEdital} border border-slate-300`}>Edital</th>
            <th className={`p-4 ${style.customTdWidthObject} border border-slate-300`}>Objeto</th>
            <th className='p-4 border border-slate-300'>Data da Publicação</th>
            <th className='p-4 border border-slate-300'>Última Atualização</th>
            <th className='p-4 border border-slate-300'>Operações</th>
          </tr>
        </thead>
        <tbody className='border'>
          <tr>
            <td className='p-4 border border-slate-300'>PREGÃO ELETRÔNICO Nº 009/2023</td>
            <td className='p-4 border border-slate-300'>Malcolm Lockyer</td>
            <td className='p-4 border border-slate-300'>1961</td>
            <td className='p-4 border border-slate-300'>1961</td>
            <td className='p-4 border border-slate-300'>1961</td>
          </tr>
          <tr>
            <td className='p-4 border border-slate-300'>Witchy Woman</td>
            <td className='p-4 border border-slate-300'>The Eagles</td>
            <td className='p-4 border border-slate-300'>1972</td>
            <td className='p-4 border border-slate-300'>1961</td>
            <td className='p-4 border border-slate-300'>1961</td>
          </tr>
          <tr>
            <td className='p-4 border border-slate-300'>Shining Star</td>
            <td className='p-4 border border-slate-300'>Earth, Wind, and Fire</td>
            <td className='p-4 border border-slate-300'>1975</td>
            <td className='p-4 border border-slate-300'>1961</td>
            <td className='p-4 border border-slate-300'>1961</td>
          </tr>
          
        </tbody>
      </table>
    </>
     )

}

export default Table

