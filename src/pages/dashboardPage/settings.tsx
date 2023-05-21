import DashboardLayout from '@/layouts/dashboard'
import React, { ReactElement, ReactNode } from 'react'
import { NextPageWithLayout } from '../_app'
import useUser from '@/lib/useUser'
import Image from 'next/image'

const SettingsPage : NextPageWithLayout = () => {

  const {user, mutateUser} = useUser({redirectTo: '/loginPage', redirectIfFound: false})

  if(!user || user.isLoggedIn === false){
    return (
      <h1 className="text-center text-white">Incia sesion para ver esta pagina</h1>
    )
  }
  return (
    <>
      <main className='mx-auto max-w-7xl'>
        <div className='flex justify-evenly'>
          <h1 className='mt-24 font-serif font-bold text-center text-4xl text-white decoration-gray-400 '>Ajustes de Usuario</h1>
          <div className='flex flex-col items-center'>
            <Image
              className='cursor-pointer mt-10 rounded-full hover:opacity-50 '
              alt="user image"
              height={180}
              width={180}
              src={user.avatarUrl ?? "https://yca.org.ar/wp-content/uploads/sites/4/2019/06/perfil-avatar-hombre-icono-redondo_24640-14044.jpg"}
            />
            <div className='pt-2 text-gray-300 text-md'>
              Haz click en la imagen para cambiarla
            </div>
          </div>
          
        </div>
        <section className='flex justify-evenly mt-10'>
          <form className='flex flex-col w-2/5'>
            <label htmlFor="name" className='text-white text-xl'>Nombre</label>
            <input className='appearance-none relative block w-full px-3 py-2 text-gray-900  rounded-b-md sm:text-sm md:text-xl h-10 '
              id="name"  
              type="text" 
              placeholder={user.name ?? "Nombre"} />
            <label htmlFor="email" className='text-white text-xl'>Correo</label>
            <input className='appearance-none relative block w-full px-3 py-2 text-gray-900 rounded-b-md sm:text-sm md:text-xl h-10 ' 
              id="email"
              type="email" 
              name='email'
              placeholder={user.email ?? "Correo"} 
              />
              <label htmlFor="password" className='mb-2 text-white text-xl'>Contraseña</label>
              <input className="appearance-none relative block w-full px-3 py-2 text-gray-900 rounded-b-md sm:text-sm md:text-xl h-10 "
                id="password"
                type="password" 
                name='password'
                placeholder="********" />
              {/* Submit Button */}
                <button
                  type="submit"
                  className="mt-8 h px-4 py-3 rounded-md bg-blue-800 hover:bg-sky-600 text-sky-100 text-2xl"
                >
                  Guardar Cambios
                </button>
          </form>
        </section>
      </main>
    </>
  )
}

SettingsPage.getLayout = function getLayout(page : ReactElement) : ReactNode{
  return(
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )
}


export default SettingsPage;