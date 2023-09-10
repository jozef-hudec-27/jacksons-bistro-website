import Link from "next/link"

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
    </div>
  )
}

export default HomePage
