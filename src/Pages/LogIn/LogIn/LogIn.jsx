import React, { useContext, useState } from 'react';
import { LuLogIn } from 'react-icons/lu';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const LogIn = () => {

  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location)

  const from = location.state?.from?.pathname || "/categories/0";


  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user)
        navigate(from,{ replace: true })

      })
      .catch(error => {
        console.log(error)
      });
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded-lg shadow-md w-96 ">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            type="email"
            name='email'
            placeholder='email'
            id="email"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
            placeholder='password'
            required

          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600 transition duration-200"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default LogIn;
