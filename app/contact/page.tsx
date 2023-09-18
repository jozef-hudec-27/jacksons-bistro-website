import Link from 'next/link'
import { BsFacebook, BsTiktok, BsInstagram, BsEnvelopeFill, BsTelephoneFill } from 'react-icons/bs'

export const metadata = {
  title: 'Contact',
  description:
    'Reach out to us. We would love to hear from you. Email us at info@jacksonsbistro.eats or call (312) 555-1234.',
}

function ContactPage() {
  return (
    <div>
      <section id="contact">
        <div className="hero-bg bg-[url('/assets/images/contact_hero.jpg')]">
          <div className="wrapper">
            <h1>Contact</h1>
          </div>
        </div>

        <div className="flex flex-col items-center gap-[48px] sm:gap-[64px] mt-[48px] sm:mt-[64px] mx-auto w-11/12 sm:w-3/4 md:w-2/3 xl:w-1/3">
          <p className="italic">Leave us a message</p>

          <form className="flex flex-col gap-[16px] w-full">
            <input type="text" className="input primary w-full" placeholder="Name" aria-label="Name" required />

            <input type="email" className="input primary w-full" placeholder="Email" aria-label="Email" required />

            <textarea className="input primary w-full" placeholder="Message" aria-label="Message" required></textarea>

            <button className="text-black-100 font-bold font-crimsonText text-xl py-[8px]">Send</button>
          </form>
        </div>
      </section>

      <section id="contact-2" className="section mid-section flex flex-col items-center gap-[48px] sm:gap-[64px]">
        <p className="italic">Reach out to us</p>

        <div className="flex flex-col gap-[24px] sm:gap-[32px] w-[240px]">
          <div className="flex items-center justify-between text-3xl text-black-50 px-[4px]">
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

          <div className="w-full bg-black-50 h-[1px]"></div>

          <div className="flex items-center justify-between">
            <BsTelephoneFill className="text-3xl text-black-50" />
            <p>(312) 555-1234</p>
          </div>

          <Link href="mailto:info@jacksonsbistro.eats" className="flex items-center justify-between">
            <BsEnvelopeFill className="text-3xl text-black-50" aria-hidden />
            <p>info@jacksonsbistro.eats</p>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
