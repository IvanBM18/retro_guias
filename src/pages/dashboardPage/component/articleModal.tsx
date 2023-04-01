import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

interface articleModalProps{
  onClose : () => void
}

const ArticleModal = (props: articleModalProps) => {
  const [isLoading,setLoading] = useState<boolean>(false);

  const onClose = () =>{
    setLoading(false)
    props.onClose();
  }

  return (
    <>
      <Transition
        appear
        as={Fragment}
        show={true}
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
              <div className="inline-block p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-800 shadow-xl rounded-2xl">
                <Dialog.Title as="h3" className="text-xl font-bold leading-6 text-white mb-2">
                  Nueva Entrada
                </Dialog.Title>

                <form className="w-full">
                  {/* Title TextBox */}
                  <div className="w-full px-3 mb-3">
                    <label htmlFor='grid-title' className="block uppercase tracking-wide text-slate-400 text-xs font-bold mb-2">
                      Titulo
                    </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        id="grid-title"
                        type="text"
                        placeholder="Titulo del articulo"
                        required
                        name="title"
                        
                      />
                  </div>
                  {/* Description TextBox */}
                  <div className="w-full px-3 mb-3">
                    <label htmlFor='grid-description' className="block uppercase tracking-wide text-slate-400 text-xs font-bold mb-2">
                      Descripcion
                    </label>
                      <textarea
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        id="grid-description"
                        placeholder="Descripcion breve"
                        required
                        name="description"
                        
                      />
                  </div>
                  {/* Submit Button */}
                  <div className="flex justify-center pt-8 w-full md:w-96">
                    <button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 rounded-md px-4 py-3 text-sm font-medium text-white ">
                      Crear Entrada
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

export default ArticleModal