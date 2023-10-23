const Registro = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    FullName: "",
    confirmPassword: "",
  });

  //This error is a import of authContext equals for currentuser
  const { error ,signup, currentuser  } = useAuth();
  const navigate = useNavigate();
  //this error show errror locals and backError show errors in authContext = err
  const [errror, setError] = useState()
  const [backError, setBackError] = useState()

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    console.log("i am in")
    if (error) {
        setInterval(() => {
            setBackError("")
        }, 5000)
        setBackError(error)
    }
}, [error, currentuser])


  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    try {
      const { email, password, confirmPassword, FullName } = user;
      if (
        password == "" ||
        confirmPassword == "" ||
        email == "" ||
        FullName == ""
      ) {
        setInterval(() => {
          setError("");
        }, 5000);
        return setError("Llene todos los campos");
      } else if (password !== confirmPassword) {
        setInterval(() => {
          setError("");
        }, 5000);
        return setError("La contraseña no coincide");
      } else if (!password.length >= 6 || !confirmPassword.length >= 6) {
        setInterval(() => {
          setError("");
        }, 5000);
        return setError("La contraseña debe de ser mayor a 6 caracteres");
      } else {
        await signup(user.email, user.password);
        navigate("/dashboard");
      }
    } catch (error) {
      setError(error.message)
    }
  }
  // const phonevalidation = process();

  //Save data

  return (
    <div className="img1 h-[100vh] flex items-center justify-center">
      <div>
        <div className="bg-slate-800 border text-left border-slate-400 rounded-md p-8 shadow-lg backdrop-filter blackdrop-blur-sm bg-opacity-30 relative z-40">
          {errror && <Alert message={errror} />}
          {backError && <Alert message={backError} />}
          <h1 className="text-white text-x1 font-bold text-center">Registro</h1>
          <form onSubmit={handleSubmit}>
            <div className="relative my-4">
              <input
                type="text"
                placeholder=""
                value={user.FullName}
                name="FullName"
                onChange={handleChange}
                className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600  peer"
              />
              <label
                htmlFor="fullname"
                className="text-white absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder:translate-y-0 peer-focus:-translate-y-6"
              >
                Nombres
              </label>
            </div>

            <div className="relative my-4">
              <input
                type="text"
                name="lastname"
                className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600  peer"
                placeholder=""
              />
              <label
                htmlFor="lastname"
                className="text-white absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder:translate-y-0 peer-focus:-translate-y-6"
              >
                Apellidos
              </label>
            </div>

            <div className="relative my-4">
              <input
                type="text"
                name="username"
                className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600  peer"
                placeholder=""
              />
              <label
                htmlFor="username"
                className="text-white absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder:translate-y-0 peer-focus:-translate-y-6"
              >
                Nombre de usuario
              </label>
            </div>

            <div className="relative my-4">
              <input
                type="text"
                placeholder=""
                value={user.email}
                name="email"
                onChange={handleChange}
                className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600  peer"
              />
              <label
                htmlFor="email"
                className="text-white absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder:translate-y-0 peer-focus:-translate-y-6"
              >
                Correo electrónico
              </label>
            </div>
            {/* Phone Number */}
            <form>
              <div className="relative my-4">
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600  peer"
                />
                <br />
                <label
                  htmlFor="phone"
                  className="text-white absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder:translate-y-0 peer-focus:-translate-y-6"
                >
                  Número de teléfono
                </label>
              </div>
            </form>
            <div
              id="info"
              name="info"
              className="alert alert-info display"
            ></div>
            <div
              id="info-error"
              name="info-error"
              className="alert alert-error display"
            ></div>
            {/* End Phone Number */}
            <div className="relative my-4">
              <input
                type="password"
                placeholder=""
                value={user.password}
                name="password"
                onChange={handleChange}
                className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600  peer"
              />
              <label
                htmlFor="password"
                className="text-white absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder:translate-y-0 peer-focus:-translate-y-6"
              >
                Contraseña
              </label>
            </div>

            <div className="relative my-4">
              <input
                type="password"
                placeholder=""
                value={user.confirmPassword}
                name="confirmPassword"
                onChange={handleChange}
                className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600  peer"
              />
              <label
                htmlFor="password"
                className="text-white absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder:translate-y-0 peer-focus:-translate-y-6"
              >
                Confirmar contraseña
              </label>
            </div>

            <div>
              <div className="text-x1 text-center">
                <input type="checkbox" name="" id="" required />
                <label htmlFor="agree" className="text-white">
                  Acepto los términos y condiciones
                </label>
              </div>
            </div>
            <input
              type="submit"
              className="text-white w-full mb-4 text-[18px] rounded mt-6 bg-blue-500 py-2 hover:bg-blue-600 transition-colors duration-300"
              value="Crear usuario"
            />
            <div>
              <span className="text-white">
                ¿Ya tienes una cuenta? <Link to="/Login">Inicia sesión</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
      <Helmet>
        <script type="module" src="/src/components/scripts/scripts"></script>
      </Helmet>
    </div>
  );
};

export default Registro;
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect} from "react";
import { useAuth } from "../context/authContext";
import { Alert } from "../components/_partials/Alert";
import { Helmet } from "react-helmet";
//Firebase
