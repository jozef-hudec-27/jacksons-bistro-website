import Image from 'next/image'
import logo from '/public/assets/images/Logo.svg'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className="p-[24px] flex justify-between items-center">
      <div className="flex items-center gap-[48px]">
        <Image src={logo} alt="Jackson's Bistro logo" className="h-[48px] w-fit" />

        <Link href="/">
          <h6>Menu</h6>
        </Link>

        <Link href="/">
          <h6>About Us</h6>
        </Link>

        <Link href="/">
          <h6>Reservations</h6>
        </Link>

        <Link href="/">
          <h6>Contact</h6>
        </Link>
      </div>

      <div className="flex items-center gap-[24px]">
        <Link href="/" className="link primary">
          Book a Table
        </Link>

        <div className="h-[22px] w-[1px] bg-black-50"></div>

        <h6 className="text-black-50">(312) 555-1234</h6>
      </div>
    </nav>
  )
}

export default Navbar
