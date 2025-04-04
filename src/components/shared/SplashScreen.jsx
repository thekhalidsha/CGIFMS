import React from "react";

const SplashScreen = () => {
  return (
    <>
      <div className="fixed inset-0 w-screen min-h-screen h-full overflow-hidden max-w-full scroll-m-0 bg-white dark:bg-gray-600  z-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
        <span className="ml-4 text-gray-700 dark:text-white text-md md:text-lg">Loading...</span>
      </div>
    </>
  );
};

export default SplashScreen;
