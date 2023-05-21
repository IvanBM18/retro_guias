import React, { useState } from "react";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import NewUserModal from "./components/newUserModal";
import fetchJson , {FetchError} from "../../lib/fetchJson";
import useUser from "../../lib/useUser";
import Image from "next/image";


const inter = Inter({ subsets: ["latin"] });

function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [openNewUserModal, setOpenNewUserModal] = useState<boolean>(false);

  const [errorMsg, setErrorMsg] = useState<string>("");
  const { mutateUser } = useUser({ redirectTo: "/dashboardPage", redirectIfFound: true });
  const router = useRouter();

  const closeNewuserModal = () => {
    setOpenNewUserModal(false);
    router.push('/landingPage')
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = { email, password };
    try{
      mutateUser(
        await fetchJson("/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        })
      )
    }catch (error) {
      if (error instanceof FetchError) {
        setErrorMsg(error.data.message)
        alert("Credenciales Invalidas, intente de nuevo")
        console.log("[ERROR]: An unexpected fetch error happened in login: ", error.data.message)
      } else {
        console.error('[ERROR]: An unexpected error happened in login: ', errorMsg)
      }
    }
  };

  return (
    <>
      {openNewUserModal && <NewUserModal onClose={closeNewuserModal} />}
      <div className={inter.className}>
        <div className="flex items-center justify-center h-screen bg-gray-900">
          <div>
            <section>
              <Image
                height={40}
                width={500}
                className="mx-auto h-40 w-auto"
                src="https://cdn-icons-png.flaticon.com/512/2296/2296559.png"
                alt="Logo"
              />
              <h2 className="mt-6 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text  font-extrabold text-transparent text-3xl sm:text-5xl ">
                Inicia sesión
              </h2>
            </section>

            <form className="mt-8 space-y-2" 
            onSubmit={handleLogin}>
              {/* Email Textbox */}
              <div className="rounded-md shadow-sm -space-y-px">
                <label htmlFor="email_adress" className="text-white text-xl mb-2">
                  {" "}
                  Correo{" "}
                </label>
                <input
                  type="email"
                  id="email_adress"
                  name="email_adress"
                  autoComplete="email"
                  required
                  placeholder="Ejemplo@correo.com"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm md:text-lg"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/* Password Textbox */}
              <div>
                <label htmlFor="password" className="text-white text-xl mb-2">
                  Contraseña
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm md:text-lg"
                  placeholder="Contraseña"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {/* Crear Cuenta */}
              <div className="text-white text-opacity-60 hover:underline hover:text-opacity-90 ">
                <span onClick={() => setOpenNewUserModal(true)}>
                  No tienes una cuenta?, Crea una
                </span>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-8">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 rounded-md px-4 py-3 sm:text-sm md:text-xl font-medium text-white "
                >
                  Inicia Sesion
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
