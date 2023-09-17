import Image from 'next/image'
import { philosophy, team, timeline } from './info'
import SlideGallery from '../components/slide_gallery/SlideGallery'
import GallerySwiper from '../components/GallerySwiper'

function AboutPage() {
  return (
    <div>
      <section id="our-story">
        <div className="hero-bg bg-[url('/assets/images/about_hero.jpg')]">
          <div className="wrapper">
            <h2>Our Story</h2>
          </div>
        </div>

        <div className="w-11/12 xl:w-2/3 mx-auto mt-[48px] sm:mt-[64px] flex flex-col gap-[32px] sm:gap-[48px]">
          {timeline.map((era, index) => {
            const { title, description, image } = era

            return (
              <div
                key={index}
                className={`flex items-center flex-col-reverse ${
                  index % 2 !== 0 ? 'self-end sm:flex-row-reverse' : 'sm:flex-row'
                } gap-[24px] sm:gap-[32px] w-11/12 xl:w-3/4`}
              >
                <Image
                  src={image}
                  alt={title}
                  className="h-[288px] sm:h-[320px] lg:h-[384px] w-[288px] sm:w-[320px] lg:w-[384px] rounded-[1px]"
                />

                <div className="flex flex-col gap-[16px] items-center">
                  <h3 className="text-primary">{title}</h3>
                  <p>{description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section id="our-team" className="section mid-section flex flex-col items-center gap-[48px] sm:gap-[64px]">
        <h2>Our Team</h2>

        <SlideGallery
          slides={team.map((member) => ({ image: member.image, alt: member.name, description: member.description }))}
        />
      </section>

      <section
        id="our-philosophy"
        className="section mid-section w-full sm:w-10/12 flex flex-col items-center gap-[48px] sm:gap-[64px]"
      >
        <h2>Our Philosophy</h2>

        {philosophy.map((entry, index) => {
          const { title, description, path } = entry

          return (
            <div key={index} className={`${path} bg-cover bg-center border w-full h-[384px] relative`}>
              <div className="flex flex-col gap-[24px] sm:gap-[32px] justify-center items-center absolute left-0 top-0 w-full h-full bg-[rgba(12,28,10,0.5)] text-white">
                <h3 className="text-white font-semibold">{title}</h3>

                <p className="w-11/12 sm:w-2/3 lg:w-[37%]">{description}</p>
              </div>
            </div>
          )
        })}
      </section>

      <section id="gallery" className="section mid-section w-11/12 flex flex-col items-center gap-[48px] sm:gap-[64px]">
        <h2>Gallery</h2>

        <GallerySwiper />
      </section>
    </div>
  )
}

export default AboutPage
