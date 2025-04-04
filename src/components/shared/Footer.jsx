const Footer = () => {
  return (
    <footer className="p-4 text-center bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300 border-t">
      <div className="">
        <div className="max-w-screen-lg px-4 sm:px-6 sm:grid md:grid-cols-3 sm:grid-cols-2 mx-auto">
          <div className="p-5">
            <img
              src="/favicon.svg"
              className="md:hover:scale-105 mx-auto w-2/4 md:w-full lg:w-2/3"
              alt=""
            />
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-blue-600 font-bold">
              Support
            </div>
            <a className="my-3 block" href="/#">
              Home <span className=" text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="/#">
              Privacy Policy <span className=" text-xs p-1 "></span>
            </a>
            <a className="my-3 block" href="/login">
              Login <span className=" text-xs p-1"></span>
            </a>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-blue-600 font-bold">
              Contact us
            </div>
            <a className="my-3 block" href="/#">
              Peroorkada, Trivandrum, Kerala
              <span className=" text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="/#">
              thekhalidsha@gmail.com
              <span className=" text-xs p-1"></span>
            </a>
          </div>
        </div>
      </div>

      <div className="">
        <div className="flex pb-5 px-3 m-auto pt-5 border-t w-full text-sm flex-col max-w-screen-xl items-center border-gray-400">
          <div className="">© Copyright 2025. CG-IFMS.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
