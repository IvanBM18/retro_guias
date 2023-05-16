import React, { Fragment, ReactElement, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import UserCredentials from '../../../../models/user'
import useUser from '../../../lib/useUser'
import fetchJson from '../../../lib/fetchJson'
interface newUserProps {
  onClose: () => void
}


const NewUserModal = (props: newUserProps) => {
  const [isLoading,setLoading] = useState<boolean>(false);
  const [name,setName] = useState<string>("");
  const [email,setEmail] = useState<string>("");
  const [password,setPassword] = useState<string>("");
  const {mutateUser} = useUser({redirectTo: '/dashboardPage',redirectIfFound: true});

  // const meetsRequierements= (pwd : string) => {
  //   if(pwd.length < 8) return false;
  //   return false;
  // }

  const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    setLoading(true);
    const body= {name,email,password};
    let newUser :UserCredentials = {
      email:email,
      password:password,
    };
    try{
      mutateUser(await fetchJson('/api/signup',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
      }))
    }catch(error){
      console.error('[ERROR]: An unexpected error happenedin signup:', error)
    }
    
  } 

  const onClose = () =>{
    setLoading(false)
    props.onClose();
  }

  return (
    <>
      <Transition
        appear
        show={true}
        as={Fragment}
      >
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto w-screen h-screen flex items-center justify-center bg-black bg-opacity-70"
          onClose={onClose}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0" />
              </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="inline-block h-screen align-middle" aria-hidden="true"> &#8203; </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-lg p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-800 shadow-xl rounded-2xl">
                <Dialog.Title as="h3" className="text-xl font-bold leading-6 text-white">
                  Registrate
                </Dialog.Title>

                <form className="w-full max-w-lg" onSubmit={handleSubmit} >
                  {/* Name TextBox */}
                  <div className="w-full px-3 mb-3">
                    <label htmlFor='grid-name' className="block uppercase tracking-wide text-slate-400 text-xs font-bold mb-2">
                      Nombre
                    </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        id="grid-name"
                        type="text"
                        placeholder="Nombre Completo"
                        required
                        name="fullName"
                        onChange={(e) =>
                          setName(e.target.value)
                        }
                      />
                  </div>
                  {/* Email TextBox */}
                  <div className="w-full px-3 mb-3">
                    <label htmlFor='grid-email' className="block uppercase tracking-wide text-slate-400 text-xs font-bold mb-2">
                      Correo
                    </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        id="grid-email"
                        type="email"
                        placeholder="Ejemplo@correo.com"
                        required
                        name="email"
                        onChange={(e) =>
                          setEmail(e.target.value)
                        }
                      />
                  </div>
                  {/* Password TextBox */}
                  <div className="w-full px-3 mb-3">
                    <label htmlFor='grid-password' className="block uppercase tracking-wide text-slate-400 text-xs font-bold mb-2">
                      Contraseña
                    </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        id="grid-password"
                        type="password"
                        required
                        placeholder='********'
                        name="password"
                        onChange={(e) =>
                          setPassword(e.target.value)
                        }
                      />
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center pt-8">
                    <button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 rounded-md px-4 py-3 text-sm font-medium text-white ">
                      Crear cuenta
                    </button>
                  </div>
                </form>
              </div>
            </Transition.Child>
          </div>
        </Dialog>

      </Transition>
    </>
  )
}

export default NewUserModal