'use client'

import { philosophy } from '../about/info'
import useLazyLoadBgImg from '../hooks/useLazyLoadBgImg'

function PhilosophyCards() {
  // Lazy load philosophy images
  useLazyLoadBgImg('.philosophy-card', 90)

  return philosophy.map((entry, index) => {
    const { title, description, path } = entry

    return (
      <div key={index} className="philosophy-card bg-cover bg-center border w-full h-[384px] relative" data-src={path}>
        <div className="flex flex-col gap-[24px] sm:gap-[32px] justify-center items-center absolute left-0 top-0 w-full h-full bg-[rgba(12,28,10,0.5)] text-white">
          <h3 className="text-white font-semibold">{title}</h3>

          <p className="w-11/12 sm:w-2/3 lg:w-[37%]">{description}</p>
        </div>
      </div>
    )
  })
}

export default PhilosophyCards
