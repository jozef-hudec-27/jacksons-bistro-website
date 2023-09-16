'use client'

import Image from 'next/image'
import { useState } from 'react'
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs'

interface Slide {
  image: any
  alt: string
  description?: string
}

function SlideGallery({ slides }: { slides: Slide[] }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const prevSlide = (current: number) => (current === 0 ? slides.length - 1 : current - 1)
  const nextSlide = (current: number) => (current === slides.length - 1 ? 0 : current + 1)

  //   Cannot use dynamic values because of Tailwind
  const displayImgClass =
    'min-h-[288px] max-h-[288px] md:min-h-[320px] md:max-h-[320px] lg:min-h-[384px] lg:max-h-[384px] min-w-[288px] max-w-[288px] md:min-w-[320px] md:max-w-[320px] lg:min-w-[384px] lg:max-w-[384px]'
  const hiddenImgClass =
    'min-h-[216px] max-h-[216px] md:min-h-[240px] md:max-h-[240px] lg:min-h-[288px] lg:max-h-[288px] min-w-[216px] max-w-[216px] md:min-w-[240px] md:max-w-[240px] lg:min-w-[288px] lg:max-w-[288px'
  const descriptionClass = 'w-[288px] md:w-[320px] lg:w-[384px]'
  const btnClass = (type: 'prev' | 'next') => {
    return type === 'prev'
      ? 'Xtranslate-x-[-24px] md:translate-x-[88px] lg:translate-x-[112px]'
      : 'Xtranslate-x-[24px] md:translate-x-[-88px] lg:translate-x-[-112px]'
  }

  return (
    <div className="flex flex-col items-center gap-[24px] sm:gap-[32px]">
      <div className="flex items-center">
        <button
          onClick={() => setCurrentSlide((current) => nextSlide(current))}
          className={`text-2xl text-primary ${btnClass('prev')} hover:-rotate-45 focus:-rotate-45 h-fit duration-700 hover:duration-300`}
          aria-label="Previous slide"
        >
          <BsChevronLeft aria-hidden />
        </button>

        <div className="flex items-center">
          <div className="hidden sm:block translate-x-3/4 sm:translate-x-1/2" aria-hidden>
            <Image
              src={slides[prevSlide(currentSlide)].image}
              alt={slides[prevSlide(currentSlide)].alt}
              className={`${hiddenImgClass} opacity-90`}
            />
          </div>

          <div className="z-10 shadow-xl">
            <Image
              src={slides[currentSlide].image}
              alt={`Team member - ${slides[currentSlide].alt}`}
              className={displayImgClass}
            />
          </div>

          <div className="hidden sm:block -translate-x-3/4 sm:-translate-x-1/2" aria-hidden>
            <Image
              src={slides[nextSlide(currentSlide)].image}
              alt={slides[nextSlide(currentSlide)].alt}
              className={`${hiddenImgClass} opacity-90`}
            />
          </div>
        </div>

        <button
          onClick={() => setCurrentSlide((current) => prevSlide(current))}
          className={`text-2xl text-primary ${btnClass('next')} hover:rotate-45 focus:rotate-45 h-fit duration-700 hover:duration-300`}
          aria-label="Next slide"
        >
          <BsChevronRight aria-hidden />
        </button>
      </div>

      <p className={descriptionClass}>{slides[currentSlide].description}</p>
    </div>
  )
}

export default SlideGallery
