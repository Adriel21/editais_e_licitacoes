
import BreadCrumbs from '../breadcrumbs/breadcrumbs';
import Image from 'next/image';
import Link from "next/link";
import style from './header.module.css';


const Header = () => {
  return (
    <header className={'p-5 pt-5 md:shadow '}>
        <div className={style.limitator}>
          <div className='lg:flex lg:items-center lg:justify-between'>
            <Link href={"/"} title='Prefeitura de Francisco Morato'>
                <Image
                    src="/images/logo_morato.png"
                    alt="Example Image"
                    width={150}
                    height={230}
                    responsive="true"
                />
            </Link>
            <BreadCrumbs />
          </div>
        </div>
    </header>
  )
}

export default Header

