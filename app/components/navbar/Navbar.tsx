import Image from 'next/image'
import logo from '/public/assets/images/Logo.svg'
import Link from 'next/link'
import NavbarMobileNavigation from './NavbarMobileNavigation'
import { navLinks } from '@/app/info'

function Navbar() {
  return (
    <nav className="p-[24px] flex justify-center md:justify-between items-center">
      <div className="hidden md:flex items-center gap-[24px] lg:gap-[48px]">
        <Image src={logo} alt="Jackson's Bistro logo" className="h-[48px] w-fit" />

        {navLinks.slice(1).map((navLink) => {
          const { label, path } = navLink

          return (
            <Link href={path}>
              <h6>{label}</h6>
            </Link>
          )
        })}
      </div>

      <div className="hidden md:flex items-center gap-[12px] lg:gap-[24px]">
        <Link href="/" className="link primary">
          Book a Table
        </Link>

        <div className="h-[22px] w-[1px] bg-black-50"></div>

        <h6 className="text-black-50">(312) 555-1234</h6>
      </div>

      <NavbarMobileNavigation />
    </nav>
  )
}

export default Navbar
