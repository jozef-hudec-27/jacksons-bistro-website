import Image from 'next/image'
import { philosophy, team, timeline } from './info'
import SlideGallery from '../components/slide_gallery/SlideGallery'
import GallerySwiper from '../components/GallerySwiper'
import PhilosophyCards from '../components/PhilosophyCards'

export const metadata = {
  title: 'About Us',
  description:
    "Jackson's Bistro is a restaurant with rich history. From our humble beginnings to our current success, we are proud to serve you.",
}

function AboutPage() {
  return (
    <div>
      <section id="our-story">
        <div className="hero-bg bg-[url('/assets/images/heros/about/about_hero_lg.avif')]">
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
                  sizes="(min-width: 1024px) 384px, (min-width: 768px) 320px, 288px"
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

        <PhilosophyCards />
      </section>

      <section id="gallery" className="section mid-section w-11/12 flex flex-col items-center gap-[48px] sm:gap-[64px]">
        <h2>Gallery</h2>

        <GallerySwiper />
      </section>
    </div>
  )
}

export default AboutPage
