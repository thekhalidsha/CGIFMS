import React from "react";

const DFooter = () => {
  return (
    <>
      <footer className="relative  top-10 w-full p-4 text-center bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300">
        &copy; {new Date().getFullYear()} CG IFMS. All rights reserved.
      </footer>
    </>
  );
};

export default DFooter;
