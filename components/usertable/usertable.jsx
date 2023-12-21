'use client'
import { useState, useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import style from './style.module.css';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

library.add(fas);

const UserTable = () => {

   const [data, setData] = useState([]);
   const [pageable, setPageAble] = useState({
    totalPages: 0,
    totalElements: 0,
    limit: null,
    count: null,
    pageNumber: 0
  });  


   const fetchData = async () => {
    try {
      const endpoint = pageable.limit ? `http://localhost:8080/index/list?size=${pageable.limit}&page=${pageable.pageNumber}` : `http://localhost:8080/index/list?page=${pageable.pageNumber}`
      const response = await fetch(endpoint);
      const result = await response.json();
      setData(result.body.content);
      setPageAble((prevPageable) => ({
        ...prevPageable,
        totalPages: result.body.totalPages,
        totalElements: result.body.totalElements,
        count: result.body.content.length
      }));
    } catch (error) {
      console.log('Erro ao buscar os dados');
    }
  };

  const handleResultsChange = (event) => {
    const selectedResults = parseInt(event.target.value, 10);
    setPageAble((prevPageable) => ({
      ...prevPageable,
      limit: selectedResults
    }));
  };

  const handlePaginationChange = (event) => {
    const selectedPage = parseInt(event.target.value, 10);
    setPageAble((prevPageable) => ({
      ...prevPageable,
      pageNumber: selectedPage
    }));
  };

  const initializeData = async () => {
    await fetchData();
  };

  useEffect(() => {
    initializeData();
  }, [pageable.limit, pageable.pageNumber]); // Re-run effect when limit changes

  
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
          <div className="flex items-center justify-between" style={{ marginBottom: '50px' }}>
            <div className={`flex items-center mt-2 gap-3`}>
              <label for="results">Exibir</label>
              <select name="results" id="results" onChange={handleResultsChange}>
              <option value="5">5</option>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
              <span className={`${style.divisor}`}></span>
              <p>1-{pageable.count} de {pageable.totalElements} itens</p>
            </div>
            <div className={`flex items-center mt-2 gap-3`}>
              <label for="pagination">Página</label>
              <select name="pagination" id="pagination" onChange={handlePaginationChange}>
                {/* Loop for tradicional para gerar as opções */}
                  {(() => {
                    const options = [];
                    for (let i = 0; i <= pageable.totalPages; i++) {
                      options.push(
                        <option key={i} value={i}>
                           {i === 0 ? "Início" : i}
                        </option>
                      );
                    }
                    return options;
                  })()}
                </select>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserTable;
