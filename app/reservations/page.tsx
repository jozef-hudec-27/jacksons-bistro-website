function ReservationsPage() {
  return (
    <div>
      <section id="reservations">
        <div className="hero-bg bg-[url('/assets/images/reservations_hero.jpg')]">
          <div className="wrapper">
            <h1>Reservations</h1>
          </div>
        </div>

        <div className="flex flex-col items-center sm:items-start sm:flex-row gap-[48px] sm:gap-[128px] lg:-translate-x-[128px] w-full sm:w-4/5 md:w-3/4 xl:w-1/2 mt-[48px] sm:mt-[64px] mx-auto pl-[16px]">
          <div className="flex flex-col gap-[11px]">
            <h3 className="text-primary font-semibold">Availability</h3>

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

          <div className="flex flex-col items-center gap-[32px] sm:gap-[48px] flex-1">
            <p className="italic">Use the form below</p>
            <form className="flex flex-col items-center gap-[16px] w-full">
              <input type="text" className="input primary w-full" placeholder="Name" required />

              <div className="flex gap-[16px] w-full">
                <input type="tel" className="input primary flex-1 w-1/2" placeholder="Phone" required />
                <input
                  type="number"
                  className="input primary flex-1 w-1/2"
                  placeholder="Party Size"
                  min={1}
                  max={20}
                  required
                />
              </div>

              <input type="datetime-local" className="input primary w-full" required />

              <textarea className="input primary w-full" placeholder="Special Requests"></textarea>

              <button className="text-black-100 font-bold font-crimsonText text-xl py-[8px]">Reserve Now</button>
            </form>

            <p className="italic">Or give us a call at (312) 555-1234</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ReservationsPage
