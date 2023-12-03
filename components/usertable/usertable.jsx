import { library } from '@fortawesome/fontawesome-svg-core';
import api from '@/app/services/api';
import style from './style.module.css';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Pagination from '../pagination/pagination';
import Link from 'next/link';

library.add(fas);

const UserTable = async () => {

   
  const editalList = async () => {
    try {
      const data = await api.fetchDataPublic('index', 'GET'); // Use a função do módulo de serviço
      return data.body;
    } catch (error) {
      console.error('Erro ao buscar os dados:', error);
      return null
    }
  }

  let data = await editalList();
  
  console.log(data)


  return (
    <>
      <section className="mt-5 mb-5 flex items-center justify-center">
        <div>
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold mb-4">Editais e Licitação</h1>
            <form className={`relative mb-4 ${style.search}`}>
              <input
                type="text"
                className={`w-full border rounded-lg p-2 pr-8 ${style.inputsearch}`}
                placeholder="O que você procura?"
              />
              <button>
                <FontAwesomeIcon
                  icon={['fas', 'search']}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-600"
                />
              </button>
            </form>
          </div>
          <table className={'table-auto divide-x border-collapse border border-slate-300 '}>
            <thead>
              <tr className={`text-left bg-[#F0F0F0] p-5 ${style.trThead} border border-slate-300`}>
                <th className={`p-4 ${style.customTdWidthEdital} border border-slate-300`}>Edital</th>
                <th className={`p-4 ${style.customTdWidthObject} border border-slate-300`}>Objeto</th>
                <th className={`p-4 border border-slate-300 ${style.customTdWidthDate}`}>Data da Publicação</th>
                <th className={`p-4 border border-slate-300 ${style.customTdWidthDate}`}>Última Atualização</th>
              </tr>
            </thead>
            <tbody className="border">
            
               {data.map(({ id, name, number, description, datePublication }) => (
              <tr key={id}>
                <td className="p-4 border border-slate-300">{number}</td>
                <td className="p-4 border border-slate-300">{name}</td>
                <td className="p-4 border border-slate-300">{description}</td>
                <td className="p-4 border border-slate-300">{datePublication}</td>
              </tr>
            ))}    

         
            </tbody>
          </table>
        
        </div>
      </section>
    </>
  );
};

export default UserTable;
