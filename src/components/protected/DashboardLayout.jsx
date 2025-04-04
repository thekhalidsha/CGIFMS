import React, { useState, useEffect, useRef } from "react";
import Container from "../shared/Container";
import DFooter from "./shared/DFooter";
import {
  Bell,
  Menu,
  Moon,
  PanelLeftClose,
  PanelLeftOpen,
  Sun,
} from "lucide-react";
import logo from "./../../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../features/themeSlice";
import DMenu from "./shared/DMenu";

const DashboardLayout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuLogo, isMenuLogo] = useState(<PanelLeftOpen />);
  const sidebarRef = useRef(null);
  const buttonRef = useRef(null);
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <Container className={"pl-0 pt-0 pb-0 pr-0"}>
      <div className="">
        <div className="h-screen flex overflow-hidden ">
          <div
            ref={sidebarRef}
            className={`z-10 dark:border-r absolute bg-gray-800 text-white w-4/5 md:w-1/3 min-h-screen overflow-y-auto transition-all transform ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            } ease-in-out duration-300`}
          >
            <div className="">
              <div className="flex justify-between items-center p-4 border-b border-gray-600">
                <h1 className="p-4 text-2xl font-semibold">CG IFMS</h1>
                <button
                  onClick={() => dispatch(toggleTheme())}
                  className="p-2 rounded-full border dark:bg-gray-700"
                >
                  {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>

              <DMenu></DMenu>
            </div>
          </div>

          <div className="flex-1 flex flex-col overflow-hidden ">
            <div className="shadow dark:bg-gray-900">
              <div className="container mx-auto">
                <div className="flex justify-between items-center py-4 px-2 ">
                  {/* <h1 className="text-xl font-semibold">Animated Drawer</h1> */}
                  <img src={logo} alt="" className="max-w-sm max-md:w-4/6" />
                  <div className="flex gap-1">
                    <div className="relative">
                      <button className="p-2  border rounded-md">
                        <Bell className="rotate-12" />
                        <span className="absolute -bottom-2 -left-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                          1
                        </span>
                      </button>
                    </div>
                    <button
                      ref={buttonRef}
                      className="border p-2 rounded-md "
                      onClick={() => {
                        setIsMenuOpen(!isMenuOpen);
                      }}
                    >
                      <Menu />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-auto">
              {/* <h1 className="text-2xl font-semibold">Welcome to our website</h1>
                <p>... Content goes here ...</p> */}
              <Container id={"dashboard"} className={""}>
                {children}
              </Container>
              <DFooter />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DashboardLayout;
