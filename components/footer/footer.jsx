import style from './footer.module.css';
import Image from 'next/image';
import Link from "next/link"


const Footer = () => {
  return (
    <footer className={`${style.footer}  flex items-center justify-center`}>
        <p className='text-center text-white'>Texto destinado a exibição de <strong className='font-bold	'>liçensa de uso</strong></p>
    </footer>
  )
}

export default Footer

