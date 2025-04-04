import React from 'react'
import Tilt from 'react-parallax-tilt'

const TiltCard = ({ children }) => {
    return (
        <>
            <Tilt>
                <div data-aos='fade-up' data-aos-delay="100" className="relative overflow-hidden rounded-2xl border bg-blue-600 text-white select-none hover:shadow hover:shadow-teal-200 p-2 dark:shadow-sm dark:shadow-white shadow-lg shadow-gray-400">
                    <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                        {children}
                    </div>
                </div>
            </Tilt>
        </>
    )
}

export default TiltCard