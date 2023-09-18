'use client'

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { Carousel } from 'react-responsive-carousel'

interface Meal {
  path: string
  alt: string
}

function MealsCarousel() {
  const meals: Meal[] = [
    { path: 'bg-[url("/assets/images/food/salmon-hq.jpg")]', alt: 'Salmon served with vegetables' },
    { path: 'bg-[url("/assets/images/food/chicken-bowl-hq.jpg")]', alt: 'Chicken bowl' },
    { path: 'bg-[url("/assets/images/food/pasta-pan-hq.jpg")]', alt: 'Pasta with meat and vegetables' },
    { path: 'bg-[url("/assets/images/food/mixed-salad-hq.jpg")]', alt: 'Mixed salad' },
  ]

  const carouselArrow = (direction: 'left' | 'right', clickHandler: () => void, label: string): React.ReactNode => {
    return (
      <button
        className={`hidden sm:block absolute ${
          direction === 'left' ? 'left-[48px]' : 'right-[48px]'
        } top-1/2 -translate-y-1/2 text-white text-5xl z-10`}
        onClick={clickHandler}
        aria-label={label}
      >
        {direction === 'left' ? <BsChevronLeft /> : <BsChevronRight />}
      </button>
    )
  }

  return (
    <Carousel
      ariaLabel="Meals carousel"
      interval={5000}
      showStatus={false}
      showThumbs={false}
      autoPlay
      infiniteLoop
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        return (
          <li
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            key={index}
            role="button"
            tabIndex={0}
            aria-label={`${label} ${index + 1}`}
            className={`w-[8px] sm:w-[12px] h-[8px] sm:h-[12px] ${
              isSelected ? 'bg-white' : 'bg-black-25'
            } rounded-full`}
          >
            {isSelected}
          </li>
        )
      }}
      renderArrowPrev={(clickHandler, hasPrev, label) => {
        return carouselArrow('left', clickHandler, label)
      }}
      renderArrowNext={(clickHandler, hasPrev, label) => {
        return carouselArrow('right', clickHandler, label)
      }}
    >
      {meals.map((meal, i) => {
        const { path, alt } = meal

        return <div key={i} className={`h-[25vh] sm:h-[47vh] ${path} bg-cover bg-center`} role="img" aria-label={alt}></div>
      })}
    </Carousel>
  )
}

export default MealsCarousel
