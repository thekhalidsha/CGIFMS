import Container from "./shared/Container";
import MainCard from "./shared/MainCard";
import HeroRight from "./HeroRight";
import HeroLogin from "./HeroLogin";
import { useSelector } from "react-redux";
import { Facebook, Instagram, InstagramIcon, Linkedin, Twitter } from 'lucide-react'


const HeroSection = () => {
  const isLoginPage = useSelector((state) => state.pageData.isLoginPage);
  return (
    <Container className='' id={'main'}>
      <MainCard className="">
        <div className="flex items-center justify-around h-full overflow-hidden p-2 min_h_70svh">
          <div className="flex flex-col gap-6 md:flex-row items-center max-w-8xl w-full h-full">
            <div className=" md:order-none w-full md:w-1/2 lg:pr-10 text-center flex flex-col items-center" data-aos="fade-up-right" data-aos-delay="400">
              <h2 className="text-4xl lg:text-5xl text-center md:text-left text-black dark:text-white leading-tight font-bold">WELCOME TO CG-IFMS</h2>
              <h3 className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-900 dark:text-gray-300 font-light tracking-wider leading-relaxed">
                Single Source of Truth for the Financials of the State.
              </h3>
              <div className="mt-10 flex flex-col justify-center md:justify-start">
                <small className="my-1">Conect with us:</small>
                <div className="flex min-w-max justify-between gap-2">
                  <a href="" className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-700 text-gray-50 hover:bg-blue-900">
                    <Facebook className='font-light' />
                  </a>
                  <a href="#" className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-700 text-gray-50 hover:bg-blue-900">
                    <Instagram className='font-light ' />
                  </a>
                  <a href="#" className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-700 text-gray-50 hover:bg-blue-900">
                    <Linkedin className='font-light ' />
                  </a>
                  <a href="#" className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-700 text-gray-50 hover:bg-blue-900">
                    <Twitter className='font-light ' />
                  </a>
                </div>
                {/* <button className="w-full px-4 py-3 rounded-md font-semibold text-md bg-blue-500 text-white border-2 border-blue-500 dark:bg-white dark:text-blue-500 focus:bg-blue-800">Get started</button> */}
              </div>
            </div>
            {isLoginPage ? <HeroLogin /> : <HeroRight />}
          </div>
        </div>
      </MainCard>
    </Container>
  );
};

export default HeroSection;