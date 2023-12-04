'use client' //Dirita para renderização via Client
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import style from './style.module.css';

// Adicione os ícones que deseja usar à biblioteca
library.add(fas);

const BreadCrumbs = () => {  
const pathname = usePathname();
// Estado para armazenar as partes da rota
const [routeParts, setRouteParts] = useState([]);

useEffect(() => {
  // Divide a pathname em partes usando a barra como delimitador
  const parts = pathname.split('/').filter(part => part !== '');
  setRouteParts(parts);
}, [pathname]);

  return (
    <nav className="lg:ps-5 mt-3 me-5">
      <div className={`flex items-center gap-3`}>
        <Link href={'https://www.franciscomorato.sp.gov.br/'} title='Prefeitura de Francisco Morato'>
          <FontAwesomeIcon icon={['fas', 'house']} color='#1351b4' className={style.icon}/>
        </Link>
        <p> <FontAwesomeIcon icon={['fas', 'angle-right']} color='#a49fa3' className={style.angleIcon}/>
        <Link href={'/'} className={style.routeColor}>Licitações</Link></p>
        {routeParts && routeParts.length > 0 && (
          <p>
            {routeParts.map((part, index) => (
              <span key={index} className={style.DynamicrouteColor}>
              {part != '' && ( // Verifica se part é diferente de string vazia, ou seja, rota raiz
                  <>
                    <FontAwesomeIcon icon={['fas', 'angle-right']} color='#a49fa3' className={style.DynamicAngleIcon} />
                  </>
              )}
                <Link href={`/${routeParts.slice(0, index + 1).join('/')}`}>{part}</Link>
              </span>
            ))}
         </p>
        )}
      </div>
    </nav>
  );
};

export default BreadCrumbs;
