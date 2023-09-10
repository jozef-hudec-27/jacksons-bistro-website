'use client'
import '@szhsin/react-menu/dist/index.css'
import '@szhsin/react-menu/dist/transitions/slide.css'

import { Menu, MenuDivider, MenuItem } from '@szhsin/react-menu'
import Image from 'next/image'
import { BsChevronDown } from 'react-icons/bs'
import logo from '/public/assets/images/Logo.svg'
import { navLinks } from '@/app/info'
import { usePathname } from 'next/navigation'

function NavbarMobileNavigation() {
  const pathname = usePathname()

  return (
    <div id="mobile-navigation" className="md:hidden">
      <Menu
        menuButton={
          <button className="flex items-center gap-[8px]" aria-label="Navigation menu">
            <Image src={logo} alt="Jackson's Bistro logo" className="h-[48px] w-fit" aria-hidden />
            <BsChevronDown className="text-xl text-primary" aria-hidden />
          </button>
        }
        align="center"
        gap={12}
        transition
      >
        {navLinks.map((navLink, i) => {
          const { label, path, divider } = navLink

          return (
            <div key={i}>
              <MenuItem
                href={path}
                className={`text-black-100 hover:bg-black-5 ${pathname === path && 'font-semibold'}`}
              >
                {label}
              </MenuItem>

              {divider && <MenuDivider className="bg-black-10" />}
            </div>
          )
        })}
      </Menu>
    </div>
  )
}

export default NavbarMobileNavigation
