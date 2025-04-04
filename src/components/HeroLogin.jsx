import React from 'react'
import heroImage from "../assets/hero_image.png";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const HeroLogin = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.email.value === 'abc@abc.in' && e.target.password.value === '123') {
      localStorage.setItem('isAuth', true);
      toast.success('Login Successful! Loading Dashboard', {
        theme: 'colored',
        autoClose: 2000,
      });
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    } else {
      toast.error('Login Failed! Try Again !', {
        theme: 'colored',
        autoClose: 4000
      });
    }
  };
  return (
    <div className="w-full md:w-1/2 h-full flex justify-center lg:p-6 overflow-hidden text-white">
      <div
        className="relative mx-auto w-full max-w-md bg-blue-600 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 rounded-2xl sm:px-10" data-aos='slide-right'>
        <div className="w-full">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-white">Sign in</h1>
            <p className="mt-2 text-gray-100">Sign in below to access your account</p>
          </div>
          <div className="mt-5">
            <form onSubmit={handleSubmit}>
              <div className="relative mt-6">
                <input type="email" name="emails" id="email" placeholder="Email Address" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none bg-blue-600 " />
                <label for="email" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-100 opacity-100 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-100 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-100 ">Email Address</label>
              </div>
              <div className="relative mt-6">
                <input type="password" name="passwords" id="password" placeholder="Password" className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none bg-blue-600" />
                <label for="password" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-100 opacity-100 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-100 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-100">Password</label>
              </div>
              <div className="my-6">
                <button className="w-full px-4 py-3 rounded-lg font-semibold text-md  border-2 border-blue-500 bg-white text-blue-500 focus:bg-gray-200">Sign In</button>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroLogin