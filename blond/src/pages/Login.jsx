const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  const { signin, SigninWithGoogle, resetPassword } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState()
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    try {
      await signin(user.email, user.password)
      navigate('/dashboard')
    } catch (error) {
      setError(error.message)
    }
  }
  const handleGoogleSignin = async () => {
    try {
      await SigninWithGoogle()
      navigate('/dashboard')
    } catch (error) {
      setError(error.message)
    }
  }
  const handleResetPassword = async () => {
    if (!user.email) return setError('Please enter your email')
    try {
      await resetPassword(user.email)
      setError('We sent you an email with the link to reset your password')
    } catch (error) {
      setError(error.message)
    }
  }
  return (
      <div className="img2 h-[100vh] flex items-center justify-center bg-cover">
        <div className="bg-slate-800 border text-left border-slate-400 rounded-md p-8 shadow-lg backdrop-filter blackdrop-blur-sm bg-opacity-30 relative z-40">
        {error && <Alert message={error} />}
          <h1 className="text-x1 font-bold text-center">Iniciar Sesión</h1>
          <form onSubmit={handleSubmit}>
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
                Nombre de usuario
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

            <div>
              <div className="text-x1 text-center">
                <input type="checkbox" name="" id="" />
                <label htmlFor="Recordarme">Recordar mi usuario</label>
              </div>
            </div>
            <button
              className="w-full mb-4 text-[18px] rounded mt-6 bg-blue-500 py-2 hover:bg-blue-600 transition-colors duration-300"
            >
              Iniciar Sesión
            </button>

            <div className="text-x1 text-center">
              <a href="#!" onClick={handleResetPassword}>Olvidaste tu contraseña</a>
            </div>

            <div>
              <span>
                ¿Eres nuevo? <Link to="/Registro">Crear una cuenta</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
  );
};
export default Login;
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from '../context/authContext'
import { Alert } from '../components/_partials/Alert'
