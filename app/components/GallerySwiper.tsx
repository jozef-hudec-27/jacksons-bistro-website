'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Scrollbar } from 'swiper/modules'
import 'swiper/css/bundle'

import bar from '/public/assets/images/gallery/bar.jpg'
import food2 from '/public/assets/images/gallery/food_2.jpg'
import food1 from '/public/assets/images/gallery/food_1.jpg'
import inside1 from '/public/assets/images/gallery/inside_1.jpg'
import inside2 from '/public/assets/images/gallery/inside_2.jpg'

interface Photo {
  image: any
  alt: string
}

function GallerySwiper() {
  const gallery: Photo[] = [
    { image: inside1, alt: 'Inside of the restaurant' },
    { image: inside2, alt: 'Inside of the restaurant 2' },
    { image: food1, alt: 'Food served on plates' },
    { image: bar, alt: 'Bar' },
    { image: food2, alt: 'Food from a different angle' },
  ]

  return (
    <Swiper
      slidesPerView="auto"
      spaceBetween={4}
      freeMode={true}
      scrollbar={{ draggable: true }}
      pagination={{ clickable: true }}
      modules={[FreeMode, Scrollbar]}
      onReachEnd={(swiper) => {
        // @ts-ignore
        swiper.snapGrid = [...swiper.slidesGrid]
      }}
    >
      {gallery.map((photo, index) => {
        const { image, alt } = photo

        return (
          <SwiperSlide key={index}>
            <Image src={image} alt={alt} className="h-[288px] sm:h-[384px] w-auto" />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default GallerySwiper
