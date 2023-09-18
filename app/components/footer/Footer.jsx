import Link from 'next/link'
import { BsFacebook, BsInstagram, BsTiktok, BsTelephoneFill, BsEnvelopeFill } from 'react-icons/bs'

function Footer() {
  return (
    <footer className="px-[21px] py-[48px] flex justify-between flex-wrap gap-[64px] bg-[#FDFCFA] mt-[96px] sm:mt-[160px]">
      <div className="flex flex-col gap-[21px]">
        <h3 className="text-primary font-semibold">Legal</h3>

        <div className="flex flex-col gap-[11px]">
          <h4>© Jackson's Bistro</h4>
          <h4>
            <Link href="/">Privacy Policy</Link>
          </h4>
          <h4>
            <Link href="/">Terms & Conditions</Link>
          </h4>
        </div>
      </div>

      <div className="flex flex-col gap-[11px]">
        <h3 className="text-primary font-semibold">Hours</h3>

        <div className="flex flex-col">
          <h4>Monday - Thursday</h4>
          <p>11:00 AM - 10:00 PM</p>
        </div>
        <div className="flex flex-col">
          <h4>Friday & Saturday</h4>
          <p>11:00 AM - 11:00 PM</p>
        </div>
        <div className="flex flex-col">
          <h4>Sunday</h4>
          <p>10:00 AM - 9:00 PM</p>
        </div>
      </div>

      <div className="flex flex-col gap-[21px]">
        <h3 className="text-primary font-semibold">Contact & Social</h3>

        <div className="flex items-center justify-between w-full text-black-50 text-2xl">
          <Link href="/" aria-label="Facebook">
            <BsFacebook />
          </Link>
          <Link href="/" aria-label="TikTok">
            <BsTiktok />
          </Link>
          <Link href="/" aria-label="Instagram">
            <BsInstagram />
          </Link>
        </div>

        <div className="hidden sm:block h-[1px] w-full bg-black-50"></div>

        <div className="flex items-center gap-[21px]">
          <BsTelephoneFill className="text-black-50 text-2xl" />
          <p>(312) 555-1234</p>
        </div>

        <Link href="mailto:info@jacksonsbistro.eats" className="flex items-center gap-[21px]">
          <BsEnvelopeFill className="text-black-50 text-2xl" />
          <p>info@jacksonsbistro.eats</p>
        </Link>
      </div>

      <div className="flex flex-col gap-[21px]">
        <div className="flex flex-col gap-[11px]">
          <h3 className="text-primary font-semibold">Newsletter</h3>
          <p>Join for latest events, news and special discounts!</p>
        </div>

        <div className="flex flex-col gap-[11px]">
          <input type="email" placeholder="Email" aria-label="Email" className="px-[11px] py-[12px] border border-solid border-black-75 outline-none text-black-75" />
          <button className="link primary w-fit">Join</button>
        </div>
      </div>

      <div className="flex flex-col gap-[21px]">
        <h3 className="text-primary font-semibold">Location</h3>
        <h4>123 Culinary Avenue</h4>
        <h4>Chicago, IL 60601</h4>
        <Link href="/reservations" className="btn primary">Book a Table</Link>
      </div>
    </footer>
  )
}

export default Footer
