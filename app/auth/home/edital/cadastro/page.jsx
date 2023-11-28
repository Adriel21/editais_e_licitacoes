import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import api from '@/app/services/api';
import SideBar from "@/components/sidebar/sidebar";
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers';





const CadastroEdital = async () => {
  const router = useRouter(); 

  const [token, setToken] = useState('');
  useEffect(() => {
    const cookieToken = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
    setToken(cookieToken);
  
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    number: '',
    id: null,
    description: '',
    //datePublication: '',
    //dateLastUpdate: '',
    disponibility: false,
    visibility: false,
    userId: 1
  });

//verificas as mudanças no formulario e adiciona ao seu objeto
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    try {
      const response = await fetch('http://localhost:8080/edital', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
  
     console.log(response)
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
    }
  };
  
  return (
    <>
      <Header />
      <main className="flex">
        <SideBar />
        <section className="container px-5 bg-gray-100">
          <h1 className='my-4  font-bol text-1xl md:text-2xl lg:text-4xl dark:text-white"'>
            Cadastro de edital
          </h1>

          <div className="w-full  rounded overflow-hidden shadow-lg mx-auto p-3 bg-white">
            <form
              className="grid grid-cols-4 gap-4"
              onSubmit={handleSubmit}
            >
              {/* nome do edital */}
              <div className="md:col-span-2 col-span-full ">
                <label
                  htmlFor="name"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Nome do edital
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"                   
                    value={formData.name}
                    onChange={handleInputChange}
                    className="block w-full  rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {/* numero do edital */}
              <div className="md:col-span-1 col-span-3">
                <label
                  htmlFor="number"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Numero do processo
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="number"
                    value={formData.number}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {/* id */}
              <div className="">
                <label
                  htmlFor="id"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  ID
                </label>
                <div className="mt-2">
                  <input
                    readOnly
                    type="text"
                    value={formData.id}
                    onChange={handleInputChange}
                    className=" block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {/* Descrição */}
              <div className="col-span-full">
                <label
                  htmlFor="description"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Descrição
                </label>
                <div className="mt-2">
                  <textarea
                     id="description"
                     name="description"
                     rows={3}
                     className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                     value={formData.description}
                     onChange={handleInputChange}
                  />
                </div>
              </div>
              {/* data de publicação */}
               <div className={`md:col-span-2 col-span-full ${formData.id === null ? 'hidden' : 'block'}`}>
                <label
                  htmlFor="datePublication"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Data da publicação
                </label>
                <div className="mt-2 ">
                <input                    
                    type="datetime-local"
                    name="datePublication"
                    id="datePublication"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    disabled={formData.id === null}
                  />
                </div>
              </div> 
               {/*Data da ultima atualização */}
            <div className={`md:col-span-2 col-span-full ${formData.id === null ? 'hidden' : 'block'}`}>
                <label
                  htmlFor="dateLastUpdate"
                  className="block text-sm font-bold leading-6 text-gray-900 "
                >
                  Data da ultima atualização
                </label>
                <div className="mt-2">
                <input                    
                    type="datetime-local"
                    name="dateLastUpdate"
                    id="dateLastUpdate"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    disabled={formData.id === null}
                  />
                </div>
              </div>
              {/* files */}
              {/* <div className="md:col-span-2 col-span-full">
                <label className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded cursor-pointer">
                    <span>Escolher arquivo</span>
                    <input type="file" className="hidden" />
                    </label>
              </div> */}
              {/* disponibilidade */}
              <div className="md:col-span-1 col-span-full">
                <div className="relative flex gap-x-3 mt-auto">
                  <div className="flex h-6 items-center">
                    <input
                      id="disponibility"
                      name="disponibility"
                      type="checkbox"
                      value={formData.disponibility}
                    onChange={handleInputChange}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="disponibility" className="font-bold text-gray-900">
                      Disponibilidade
                    </label>                
                  </div>
                </div>
              </div>
               {/* disponibilidade */}
              <div className="md:col-span-1 col-span-full">

               <div className="relative flex gap-x-3 mt-auto">
                <div className="flex h-6 items-center">
                  <input                   
                    name="visibility"
                    type="checkbox"
                    value={formData.visibility}
                    onChange={handleInputChange}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                    <label htmlFor="disponibility" className="font-bold text-gray-900">
                      Visibilidade
                    </label>                
                  </div>
              </div>
              </div>

              {/* Botoões */}
              <div className="mt-6 flex items-center justify-end col-span-full gap-4">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );

      }

        }
          
           
export default CadastroEdital;

