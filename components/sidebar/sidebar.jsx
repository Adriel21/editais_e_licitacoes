'use client'
import { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './style.module.css'
import Image from 'next/image';
import Link from "next/link"

// Adicione os ícones que deseja usar à biblioteca
library.add(fas);


const SideBar = () => {
    const [menuAberto, setMenuAberto] = useState(true);

    const toggleMenu = () => {
      setMenuAberto(!menuAberto);
    };
  
  return (
   <div className={`${style.menuLateral} shadow-2xl  ${menuAberto ? '' : style.menuFechado}`}>
        <div className={`${style.titleMenu} flex items-center justify-between`}>
            <div className='flex items-center justify-between'>
                <FontAwesomeIcon icon={ ['fas', 'times']} color='white' style={{marginLeft: '10px', marginRight: '15px', cursor: 'pointer'}} onClick={toggleMenu}/>
                <p>Menu</p>
            </div>
            <FontAwesomeIcon icon={['fas', 'angle-right']} color='white' style={{marginRight: '10px', cursor: 'pointer'}} onClick={() => setMenuAberto(true)}/>
        </div>
        <nav className={style.nav}>
            <ul className='ps-4'>
                <span className='flex items-center justify-between'>
                    <Link href={'http://localhost:3000/home/edital/cadastro'}>
                        <li className='mt-4 mb-4'>Adicionar Edital</li>
                    </Link>
                </span>
                <hr />
                <span className='flex items-center justify-between'>
                    <li className='mt-4 mb-4'>Item do Menu</li>
                    
                </span>                
                <hr />
                <span className='flex items-center justify-between'>
                    <li className='mt-4 mb-4'>Item do Menu</li>
                    
                </span>                
                <hr />
            </ul>
        </nav>
   </div>
  )
}

export default SideBar

