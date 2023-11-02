import { library } from '@fortawesome/fontawesome-svg-core';
import apiService from '../../app/services/api';
import style from './style.module.css';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

// Adicione os ícones que deseja usar à biblioteca
library.add(fas);

const UserTable = async () => {
  let data;

  try {
    data = await apiService.fetchData(''); // Use a função do módulo de serviço
    // Faça algo com os dados aqui
  } catch (error) {
    console.error('Erro ao buscar os dados:', error);
  }

  // let posts = data.slice(-5);

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
              {posts.map((post, index) => (
                <tr key={index}>
                  <td className="p-4 border border-slate-300">{post.title}</td>
                  <td className="p-4 border border-slate-300">{post.body}</td>
                  <td className="p-4 border border-slate-300">{post.userId}</td>
                  <td className="p-4 border border-slate-300">22/09/2023 07:50:11</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex items-center justify-between" style={{ marginBottom: '50px' }}>
            <div className={`flex items-center mt-2 gap-3`}>
              <label for="results">Exibir</label>
              <select name="results" id="">
                <option value="">5</option>
                <option value="">10</option>
                <option value="">25</option>
                <option value="">50</option>
                <option value="">100</option>
              </select>
              <span className={`${style.divisor}`}></span>
              <p>1-10 de 100 itens</p>
            </div>
            <div className={`flex items-center mt-2 gap-3`}>
              <label for="pagination">Página</label>
              <select name="pagination" id="">
                <option value="">5</option>
                <option value="">10</option>
                <option value="">25</option>
                <option value="">50</option>
                <option value="">100</option>
              </select>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserTable;
