import React from 'react'
import heroImage from "../assets/hero_image.png";


const HeroRight = () => {
  return (
    <div className="w-full md:w-1/2 h-full flex justify-center p-1 lg:p-6 overflow-hidden" data-aos="slide-left" data-aos-delay="100">
      <div className="max-w-xl rounded-full shadow_custom bg-blue-700 p-6 lg:p-8 custom_padding md:hover:scale-105 transition-all duration-200 ease-in">
        <div className="rounded-full w-full h-full shadow_custom bg-blue-500 p-6 lg:p-8 custom_padding">
          <div className="w-full h-full  rounded-full flex items-center shadow_custom bg-gray-100 dark:bg-gray-300">
            <img className="h-5/6 hover:scale-110 overflow-hidden block m-auto transition-all duration-200 ease-in" src={heroImage} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroRight