import Link from 'next/link'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import MealsCarousel from './components/MealsCarousel'
import Image from 'next/image'

import chefKitchen from '/public/assets/images/instagram-posts/chef-kitchen.jpg'
import chefSlice from '/public/assets/images/instagram-posts/chef-slice.jpg'
import insideRestaurant from '/public/assets/images/instagram-posts/inside-restaurant.jpg'
import meal from '/public/assets/images/instagram-posts/meal.jpg'
import pastaPan from '/public/assets/images/instagram-posts/pasta-pan.jpg'
import waiter from '/public/assets/images/instagram-posts/waiter.jpg'

interface InstagramPost {
  image: any
  alt: string
  description: string
}

function HomePage() {
  const instagramPosts: InstagramPost[] = [
    {
      image: chefKitchen,
      alt: 'Chef cooking in the kitchen',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia arcu in neque fermentum, ac maximus dui lobortis. In facilisis ultricies sapien vel interdum. Phasellus maximus sed orci non porta. Praesent luctus convallis tellus. Curabitur vel sodales nulla. Mauris volutpat nisl sed risus sodales, at tempor lectus ultricies. Vivamus pulvinar, magna at aliquam cursus, justo ante imperdiet nunc, at vestibulum risus dolor ut tortor.',
    },
    {
      image: chefSlice,
      alt: 'Chef slicing vegetables with a knife',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia arcu in neque fermentum, ac maximus dui lobortis. In facilisis ultricies sapien vel interdum. Phasellus maximus sed orci non porta. Praesent luctus convallis tellus. Curabitur vel sodales nulla. Mauris volutpat nisl sed risus sodales, at tempor lectus ultricies. Vivamus pulvinar, magna at aliquam cursus, justo ante imperdiet nunc, at vestibulum risus dolor ut tortor.',
    },
    {
      image: insideRestaurant,
      alt: 'Restaurant interior',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia arcu in neque fermentum, ac maximus dui lobortis. In facilisis ultricies sapien vel interdum. Phasellus maximus sed orci non porta. Praesent luctus convallis tellus. Curabitur vel sodales nulla. Mauris volutpat nisl sed risus sodales, at tempor lectus ultricies. Vivamus pulvinar, magna at aliquam cursus, justo ante imperdiet nunc, at vestibulum risus dolor ut tortor.',
    },
    {
      image: meal,
      alt: 'Cooked meal',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia arcu in neque fermentum, ac maximus dui lobortis. In facilisis ultricies sapien vel interdum. Phasellus maximus sed orci non porta. Praesent luctus convallis tellus. Curabitur vel sodales nulla. Mauris volutpat nisl sed risus sodales, at tempor lectus ultricies. Vivamus pulvinar, magna at aliquam cursus, justo ante imperdiet nunc, at vestibulum risus dolor ut tortor.',
    },
    {
      image: pastaPan,
      alt: 'Pan with pasta and vegetables',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia arcu in neque fermentum, ac maximus dui lobortis. In facilisis ultricies sapien vel interdum. Phasellus maximus sed orci non porta. Praesent luctus convallis tellus. Curabitur vel sodales nulla. Mauris volutpat nisl sed risus sodales, at tempor lectus ultricies. Vivamus pulvinar, magna at aliquam cursus, justo ante imperdiet nunc, at vestibulum risus dolor ut tortor.',
    },
    {
      image: waiter,
      alt: 'Waiter holding a plate with finished meal',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia arcu in neque fermentum, ac maximus dui lobortis. In facilisis ultricies sapien vel interdum. Phasellus maximus sed orci non porta. Praesent luctus convallis tellus. Curabitur vel sodales nulla. Mauris volutpat nisl sed risus sodales, at tempor lectus ultricies. Vivamus pulvinar, magna at aliquam cursus, justo ante imperdiet nunc, at vestibulum risus dolor ut tortor.',
    },
  ]

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

      <section id="foods" className="mt-[96px] sm:mt-[160px]">
        <MealsCarousel />
      </section>

      <section
        id="social"
        className="flex flex-col items-center gap-[48px] sm:gap-[64px] w-11/12 mt-[96px] sm:mt-[160px] mx-auto"
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
