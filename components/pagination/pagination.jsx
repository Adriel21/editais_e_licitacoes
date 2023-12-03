'use client'
import { useState, useEffect } from 'react';
import style from './style.module.css';

const Pagination = () => {
  const [resultsPerPage, setResultsPerPage] = useState(''); // Valor padrão, você pode definir o que desejar

  const handleResultsChange = (event) => {
    const selectedResults = parseInt(event.target.value, 10); // Converte para número
    setResultsPerPage(selectedResults);

      
    // Atualiza a string da URL manualmente
    window.history.pushState(null, null, `?results=${selectedResults}`);

  };

  useEffect(() => {
    console.log(resultsPerPage);
    // Aqui você pode realizar outras ações com o resultsPerPage
  }, [resultsPerPage]);


  return (
    <div className="flex items-center justify-center" style={{ marginBottom: '50px' }}>
      <div className={`flex items-center mt-2 gap-3`}>
        <label htmlFor="results">Exibir</label>
        <select name="results" id="results" onChange={handleResultsChange}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>

        <span className={`${style.divisor}`}></span>
        <p>1-10 de 100 itens</p>
      </div>
      <div className={`flex items-center mt-2 gap-3`}>
        {/* Adicione o restante do seu código aqui */}
      </div>
    </div>
  );
};

export default Pagination;
