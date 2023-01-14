import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login, putAccessToken } from "../utils/network-data";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = () => {
    login({ email, password }).then((res) => {
      putAccessToken(res.data.accessToken);
      navigate("/");
    });
  };

  return (
    <div className="dark:bg-gray-700 dark:text-white min-h-screen">
      <div className="flex flex-col justify-center max-w-xl mx-auto pt-40">
        <h1 className="text-center font-bold text-3xl">Personal Notes</h1>
        <p className="text-center text-gray-500 dark:text-gray-300">
          Silahkan login untuk melanjutkan
        </p>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="border p-2 rounded mt-4 mx-auto w-96 focus:outline-none dark:bg-gray-600"
          placeholder="Email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="border p-2 rounded mt-2 mx-auto w-96 focus:outline-none dark:bg-gray-600"
          placeholder="Password"
        />
        <button
          onClick={handleSubmit}
          type="submit"
          className="mt-4 bg-yellow-500 w-96 text-white p-2 rounded mx-auto"
        >
          Login
        </button>
        <span className="mt-6 text-gray-500 dark:text-gray-300 text-center text-sm">
          Belum punya akun?{" "}
          <Link to="/register" className="text-blue-500 font-bold">
            Daftar
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Login;
