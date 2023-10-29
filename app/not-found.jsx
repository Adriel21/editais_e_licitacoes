import Link from "next/link"

export default function NotFound(){
   return (
   <>
    <h1>Não achou!</h1>
    <p><Link href={"/"}>Voltar</Link></p>
   </>
  )
}