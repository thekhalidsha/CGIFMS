import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../features/themeSlice";
import { Sun, Moon, Menu, X } from "lucide-react";
import mainLogo from './../../assets/logo.png'
import { update } from "../../features/basicSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const isLogin = useSelector((state) => state.pageData.isLoginPage)
  const toggleLoginPage = () => {
    dispatch(update({ isLoginPage: !isLogin }));
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
  }

  return (
    <nav className="sticky top-0 p-4 shadow-lg bg-gray-100 dark:bg-gray-900 dark:border-b z-40 max-w-full">
      <div className="container mx-auto flex justify-between items-center text-black dark:text-white">
        <a href="/#main" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          <img src={mainLogo} className="custom-drop_shadow max-w-sm max-md:w-3/4" />
        </a>

        <div className="hidden md:flex gap-6 items-center">
          <a href="#modules" className="text-gray-800 dark:text-gray-200">Modules</a>
          <a href="#contact" className="text-gray-800 dark:text-gray-200">Contact</a>
          <a href="#faq" className="text-gray-800 dark:text-gray-200">Faq</a>
          {/* <button onClick={() => { console.log(useSelector((state) => state.pageData.isLoginPage)) }} className="text-gray-800 dark:text-gray-200">Dashboard</button> */}
          <button onClick={toggleLoginPage} className="w-full px-3 py-1 rounded font-semibold text-md bg-blue-500 text-white border-2 border-blue-500 dark:bg-white dark:text-blue-500">{isLogin ? 'Home' : 'Login'}</button>
          <button title="Alt + S" onClick={() => dispatch(toggleTheme())} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        <div className="md:hidden flex gap-1">
          <button onClick={() => dispatch(toggleTheme())} className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700">
            {theme === "dark" ? <Sun /> : <Moon />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded bg-gray-200 dark:bg-gray-700 ">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <div className={`absolute w-full left-0 my-2  md:hidden flex flex-col items-center gap-4 p-4 bg-gray-100 dark:bg-gray-800  ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full hidden"} border-b-2`}>
        <a href="#modules" className="text-gray-800 dark:text-gray-200" onClick={() => setIsOpen(false)}>Modules</a>
        <a href="#contact" className="text-gray-800 dark:text-gray-200" onClick={() => setIsOpen(false)}>Contact</a>
        {/* <button onClick={() => dispatch(toggleTheme())} className="p-2 px-4 rounded-lg font-bold text-white  bg-blue-700 focus:bg-blue-500">
          Login
        </button> */}
        <button onClick={()=>{toggleLoginPage(); setIsOpen(false)}} className="px-3 py-1 rounded-md font-semibold text-md bg-blue-500 text-white border-2 border-blue-500 dark:bg-white dark:text-blue-500">{isLogin ? 'Home' : 'Login'}</button>

      </div>
    </nav>
  );
};

export default Navbar;
