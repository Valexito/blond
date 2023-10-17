const Registro = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="img1 h-[100vh] flex items-center justify-center">
      <div>
        <div className="bg-slate-800 border text-left border-slate-400 rounded-md p-8 shadow-lg backdrop-filter blackdrop-blur-sm bg-opacity-30 relative z-40">
        {error && <Alert message={error} />}
          <h1 className="text-x1 font-bold text-center">Registro</h1>
          <form onSubmit={handleSubmit}>
            <div className="relative my-4">
              <input
                type="text"
                className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600  peer"
                placeholder=""
              />
              <label
                htmlFor=""
                className="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder:translate-y-0 peer-focus:-translate-y-6"
              >
                Nombres
              </label>
            </div>

            <div className="relative my-4">
              <input
                type="text"
                className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600  peer"
                placeholder=""
              />
              <label
                htmlFor=""
                className="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder:translate-y-0 peer-focus:-translate-y-6"
              >
                Apellidos
              </label>
            </div>

            <div className="relative my-4">
              <input
                type="text"
                className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600  peer"
                placeholder=""
              />
              <label
                htmlFor=""
                className="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder:translate-y-0 peer-focus:-translate-y-6"
              >
                Nombre de usuario
              </label>
            </div>

            <div className="relative my-4">
              <input
                type='email' 
                name='email'
                className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600  peer"
                placeholder=""
                onChange={handleChange}
              />
              <label
                htmlFor='email'
                className="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder:translate-y-0 peer-focus:-translate-y-6"
              >
                Correo electrónico
              </label>
            </div>

            <div className="relative my-4">
              <input
                type="email"
                className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600  peer"
                placeholder=""
              />
              <label
                htmlFor=""
                className="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder:translate-y-0 peer-focus:-translate-y-6"
              >
                Número de teléfono
              </label>
            </div>

            <div className="relative my-4">
              <input
                type='password' 
                name='password'
                className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600  peer"
                placeholder=""
                onChange={handleChange}
              />
              <label
                htmlFor='password'
                className="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder:translate-y-0 peer-focus:-translate-y-6"
              >
                Contraseña
              </label>
            </div>

            <div className="relative my-4">
              <input
                type="password"
                className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600  peer"
                placeholder=""
              />
              <label
                htmlFor=""
                className="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder:translate-y-0 peer-focus:-translate-y-6"
              >
                Confirmar contraseña
              </label>
            </div>

            <div>
              <div className="text-x1 text-center">
                <input type="checkbox" name="" id="" />
                <label htmlFor="Recordarme">
                  Acepto los términos y condiciones
                </label>
              </div>
            </div>
            <button
              className="w-full mb-4 text-[18px] rounded mt-6 bg-blue-500 py-2 hover:bg-blue-600 transition-colors duration-300"
            >
              Crear usuario
            </button>

            <div>
              <span>
                ¿Ya tienes una cuenta? <Link to="/Login">Inicia sesión</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Registro;
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/authContext";
import { Alert } from '../components/_partials/Alert'
