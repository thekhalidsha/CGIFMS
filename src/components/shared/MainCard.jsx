import React from 'react'

const MainCard = ({className, children}) => {
  return (
    <div className={`p-4 shadow_custom dark:bg-gray-900 rounded-xl my-2 text-black dark:text-white ${className}`} >
        {children}
    </div>
  )
}

export default MainCard