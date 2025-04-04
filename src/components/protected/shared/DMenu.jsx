import React from "react";
import Container from "../../shared/Container";
import MainCard from "../../shared/MainCard";
import { Link } from "react-router-dom";

const DMenu = () => {
  return (
    <>
      <Container className={"text-white"}>
        <ul className="mt-4 p-4  md:w-1/2">
          <li className="mb-2">
            <Link to="/" className="block hover:text-indigo-400">
              Home
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/logout" className="block hover:text-indigo-400">
              Logout
            </Link>
          </li>
        </ul>
        <MainCard className={"dark:bg-gray-900"}>
          <h3 className="text-lg font-bold text-white mb-2">Widgets</h3>
          <div class="w-full grid grid-flow-col grid-cols-3 gap-5 rounded-t lg:rounded-t-none lg:rounded-l text-center shadow-lg ">
            <div class="block rounded-t overflow-hidden  text-center col-span-2 ">
              <div class="bg-blue-500 text-white py-1">March</div>
              <div class="pt-1 border-l border-r border-white bg-white dark:text-black">
                <span class="text-5xl font-bold leading-tight">17</span>
              </div>
              <div class="border-l border-r border-b rounded-b-lg text-center border-white bg-white -pt-2 -mb-1 dark:text-black">
                <span class="text-sm">Sunday</span>
              </div>
              <div class="pb-2 border-l border-r border-b rounded-b-lg text-center border-white bg-white dark:text-black">
                <span class="text-xs leading-normal">8:00 am to 5:00 pm</span>
              </div>
            </div>
            <div class="text-6xl font-bold text-white flex flex-col justify-center items-center border rounded-lg">
              <div class=" text-white text-sm">Screen Size</div>
              <span class="inline-block sm:hidden">XS</span>
              <span class="hidden sm:inline-block md:hidden">SM</span>
              <span class="hidden md:inline-block lg:hidden">MD</span>
              <span class="hidden lg:inline-block xl:hidden">LG</span>
              <span class="hidden xl:inline-block">XL</span>
            </div>
          </div>
        </MainCard>
      </Container>
    </>
  );
};

export default DMenu;
