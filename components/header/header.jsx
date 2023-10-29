
import BreadCrumbs from '../breadcrumbs/breadcrumbs';
import Image from 'next/image';
import Link from "next/link"


const Header = () => {
  return (
    <header className='p-5 pt-5 md:shadow lg:flex lg:items-center lg:justify-between'>
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
        {/* <Link href={"/vini"} title='Prefeitura de Francisco Morato'>
          <p>Vini</p>
        </Link>
        <Link href={"/vini/about"} title='Prefeitura de Francisco Morato'>
          <p>About</p>
        </Link> */}

    </header>
  )
}

export default Header

