import React from 'react'
import Marquee from 'react-fast-marquee'

const NewsNavbar = () => {
  return (
    <div>
      <div className="w-full bg-blue-900 min-h-10 flex justify-center gap-2 p-1 items-center text-white">
        <div className="w-11/12 md:w-3/4">
          <div className="flex items-center justify-center gap-5 ">
            <strong>Notice: </strong>
            <Marquee direction="right" pauseOnHover autoFill className='flex gap-x-10 items-center rounded-full' speed={100}>
              <p>This is a notice or news showing contents released by the department or directorate.</p>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsNavbar