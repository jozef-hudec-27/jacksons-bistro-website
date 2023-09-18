import Tabs from '../components/tabs/Tabs'
import Image from 'next/image'
import { menu } from './info'

export const metadata = {
  title: 'Our Menu',
  description: 'Indulge in a Culinary Symphony. Each Dish Tells a Story.',
}

function MenuPage() {
  return (
    <div>
      <section id="hero">
        <div
          className="bg-[url('/assets/images/menu_hero.jpg')] bg-cover bg-center border w-full h-[25vh] sm:h-[47vh]"
          aria-hidden
        ></div>

        <h1 className="w-11/12 md:w-3/4 xl:w-1/2 mx-auto mt-[32px] sm:mt-[64px]">
          Our Menu - Indulge in a Culinary Symphony. Each Dish Tells a Story.{' '}
          <span className="text-primary">Bon Appétit</span>.
        </h1>
      </section>

      <section id="menu" className="section mid-section w-11/12">
        <Tabs
          defaultIndex={1}
          tabs={menu.map((menuSection) => {
            return {
              title: menuSection.title,
              body: (
                <div className="menu-items grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-[16px] sm:gap-[24px] w-fit mx-auto mt-[48px] sm:mt-[64px]">
                  {menuSection.meals.map((meal, index) => {
                    return (
                      <div className="w-fit relative group cursor-default" tabIndex={0} key={index}>
                        <div className="hidden group-hover:flex group-focus:block absolute left-0 top-0 w-full h-full bg-[rgba(12,28,10,0.33)] text-white z-10">
                          <div className="flex flex-col gap-[8px] sm:gap-[16px] ml-[24px] sm:ml-[32px] mt-[24px] sm:mt-[32px]">
                            <h4 className="text-white font-semibold">{meal.name}</h4>
                            <p className="w-11/12 lg:w-2/3 text-[12px]">{meal.description}</p>
                          </div>
                        </div>

                        <Image
                          src={meal.image}
                          alt={meal.name}
                          className="h-[288px] sm:h-[320px] lg:h-[384px] w-[288px] sm:w-[320px] lg:w-[384px] group-hover:blur-[2px]"
                        />
                      </div>
                    )
                  })}
                </div>
              ),
            }
          })}
        />
      </section>
    </div>
  )
}

export default MenuPage
