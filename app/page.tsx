import Link from 'next/link'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import MealsCarousel from './components/MealsCarousel'
import Image from 'next/image'
import { instagramPosts } from './info'

function HomePage() {
  return (
    <div>
      <section id="hero">
        <div
          className="bg-[url('/assets/images/bartender_hero.jpg')] bg-cover bg-center border w-full h-[25vh] sm:h-[47vh]"
          aria-hidden
        ></div>

        <div className="flex flex-col gap-[21px] sm:gap-[42px] w-11/12 md:w-3/4 xl:w-1/2 mx-auto mt-[32px] sm:mt-[64px]">
          <h1>Experience Culinary Bliss at Jackson's Bistro. Where Flavors Dance and Memories Are Savored.</h1>

          <Link href="" className="btn primary">
            Indulge Today
          </Link>
        </div>
      </section>

      <section id="foods" className="section mid-section">
        <MealsCarousel />
      </section>

      <section
        id="social"
        className="section mid-section flex flex-col items-center gap-[48px] sm:gap-[64px] w-11/12"
      >
        <h2 className="uppercase">
          The latest from <br />
          <span className="text-primary">@JacksonsBistro</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-y-[24px] sm:gap-y-[48px] gap-x-[32px]">
          {instagramPosts.map((post, index) => {
            const { image, alt, description } = post

            return (
              <div key={index} className="relative group cursor-default" tabIndex={0}>
                <div className="hidden group-hover:flex group-focus:flex justify-center items-center absolute left-0 top-0 w-full h-full bg-[rgba(12,28,10,0.5)] text-white">
                  <p className="w-11/12 lg:w-2/3 text-[12px]">{description}</p>
                </div>

                <Image
                  src={image}
                  alt={alt}
                  className="h-[288px] sm:h-[320px] lg:h-[384px] w-[288px] sm:w-[320px] lg:w-[384px]"
                />
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default HomePage
