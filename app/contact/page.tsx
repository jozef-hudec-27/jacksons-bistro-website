import Link from 'next/link'
import { BsFacebook, BsTiktok, BsInstagram, BsEnvelopeFill, BsTelephoneFill } from 'react-icons/bs'

function ContactPage() {
  return (
    <div>
      <section id="contact">
        <div className="bg-[url('/assets/images/contact_hero.jpg')] bg-cover bg-center border w-full h-[20vh] sm:h-[25vh] relative">
          <div className="flex justify-center items-center absolute left-0 top-0 w-full h-full bg-[rgba(12,28,10,0.5)] text-white">
            <h1 className="text-white font-dancingScript font-semibold">Contact</h1>
          </div>
        </div>

        <div className="flex flex-col items-center gap-[48px] sm:gap-[64px] mt-[48px] sm:mt-[64px] mx-auto w-11/12 sm:w-3/4 md:w-2/3 xl:w-1/3">
          <p className="italic">Leave us a message</p>

          <form className="flex flex-col gap-[16px] w-full">
            <input type="text" className="input primary w-full" placeholder="Name" required />

            <input type="email" className="input primary w-full" placeholder="Email" required />

            <textarea className="input primary w-full" placeholder="Message" required></textarea>

            <button className="text-black-100 font-bold font-crimsonText text-xl py-[8px]">Send</button>
          </form>
        </div>
      </section>

      <section id="contact-2" className="section mid-section flex flex-col items-center gap-[48px] sm:gap-[64px]">
        <p className="italic">Reach out to us</p>

        <div className="flex flex-col gap-[24px] sm:gap-[32px] w-[240px]">
          <div className="flex items-center justify-between text-3xl text-black-50 px-[4px]">
            <Link href="/">
              <BsFacebook />
            </Link>

            <Link href="/">
              <BsTiktok />
            </Link>

            <Link href="/">
              <BsInstagram />
            </Link>
          </div>

          <div className="w-full bg-black-50 h-[1px]"></div>

          <div className="flex items-center justify-between">
            <BsTelephoneFill className="text-3xl text-black-50" />
            <p>(312) 555-1234</p>
          </div>

          <div className="flex items-center justify-between">
            <BsEnvelopeFill className="text-3xl text-black-50" />
            <Link href="mailto:info@jacksonsbistro.eats">
              <p>info@jacksonsbistro.eats</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
