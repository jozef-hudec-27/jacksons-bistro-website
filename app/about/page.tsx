import Image from 'next/image'
import { timeline } from './info'
import SlideGallery from '../components/slide_gallery/SlideGallery'

import chef from '/public/assets/images/team/chef.jpg'
import pastryChef from '/public/assets/images/team/pastry-chef.jpg'
import waiter from '/public/assets/images/team/waiter.jpg'

function AboutPage() {
  return (
    <div>
      <section id="our-story">
        <div className="bg-[url('/assets/images/about_hero.jpg')] bg-cover bg-center border w-full h-[20vh] sm:h-[25vh] relative">
          <div className="flex justify-center items-center absolute left-0 top-0 w-full h-full bg-[rgba(12,28,10,0.5)] text-white">
            <h2 className="text-white font-dancingScript font-semibold">Our Story</h2>
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
          slides={[
            {
              image: chef,
              alt: 'Chef',
              description: `A visionary culinary artist with a knack for marrying diverse flavors. Chef Ethan is a trailblazer in the kitchen, infusing global inspirations into every dish. His creativity and dedication shine through in each plate, making dining at Jackson's Bistro an unforgettable experience.`,
            },
            {
              image: pastryChef,
              alt: 'Pastry Chef',
              description: `A master of sweet alchemy, Olivia adds a touch of magic to every dessert she creates. Her exquisite pastries and innovative treats are a delightful finale to every meal, leaving guests craving for more.`,
            },
            {
              image: waiter,
              alt: 'Head Waiter',
              description: `Luis embodies the essence of gracious service at Jackson's Bistro. His professionalism, warmth, and extensive menu knowledge create an engaging dining experience that leaves guests wanting to return.`,
            },
          ]}
        />
      </section>
    </div>
  )
}

export default AboutPage
