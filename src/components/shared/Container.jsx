import React from 'react'

const Container = ({id, className, children}) => {
  return (
    <section id={`${id}`} className={`p-3 text-black dark:text-white ${className} overflow-hidden`}>
        {children}
    </section>
  )
}

export default Container