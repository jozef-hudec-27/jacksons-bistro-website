function ReservationsPage() {
  return (
    <div>
      <section id="reservations">
        <div className="bg-[url('/assets/images/reservations_hero.jpg')] bg-cover bg-center border w-full h-[20vh] sm:h-[25vh] relative">
          <div className="flex justify-center items-center absolute left-0 top-0 w-full h-full bg-[rgba(12,28,10,0.5)] text-white">
            <h1 className="text-white font-dancingScript font-semibold">Reservations</h1>
          </div>
        </div>

        <div className="flex flex-col items-center gap-[32px] sm:gap-[48px] mt-[48px] sm:mt-[64px]">
          <p className="italic">Use the form below</p>

          <form className="flex flex-col items-center gap-[16px] w-11/12 sm:w-3/4 md:w-1/2 xl:w-1/3">
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
      </section>
    </div>
  )
}

export default ReservationsPage
