'use client'
import '@szhsin/react-menu/dist/index.css'
import '@szhsin/react-menu/dist/transitions/slide.css'

import { ControlledMenu, MenuDivider, MenuItem, useClick } from '@szhsin/react-menu'
import Image from 'next/image'
import { BsChevronDown } from 'react-icons/bs'
import logo from '/public/assets/images/Logo.svg'
import { navLinks } from '@/app/info'
import { usePathname } from 'next/navigation'
import { useRef, useState } from 'react'
import Link from 'next/link'

function NavbarMobileNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const btnRef = useRef(null)
  const btnProps = useClick(isOpen, setIsOpen)
  const pathname = usePathname()

  return (
    <div id="mobile-navigation" className="md:hidden">
      <button className="flex items-center gap-[8px]" aria-label="Navigation menu" ref={btnRef} {...btnProps}>
        <Image src={logo} alt="Jackson's Bistro logo" className="h-[48px] w-fit" aria-hidden />
        <BsChevronDown className={`${isOpen && 'rotate-180'} text-xl text-primary duration-300`} aria-hidden />
      </button>

      <ControlledMenu
        align="center"
        gap={12}
        state={isOpen ? 'open' : 'closed'}
        anchorRef={btnRef}
        onClose={() => setIsOpen(false)}
        transition
      >
        {navLinks.map((navLink, i) => {
          const { label, path, divider } = navLink

          return (
            <div key={i}>
              <MenuItem className={`text-black-100 hover:bg-black-5 ${pathname === path && 'font-semibold'}`}>
                <Link href={path}>{label}</Link>
              </MenuItem>

              {divider && <MenuDivider className="bg-black-10" />}
            </div>
          )
        })}
      </ControlledMenu>
    </div>
  )
}

export default NavbarMobileNavigation
