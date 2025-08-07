export default function HomeHero() {

    return (
        <>
    <section className="relative min-h-[53rem] w-full bg-[url('../src/assets/housebg.png')] bg-cover bg-center">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative flex items-center justify-center min-h-[inherit] px-4">
        <div className="text-center w-full max-w-3xl">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
            Søg efter din drømmebolig
          </h1>

          <div className="bg-white shadow-md rounded-md p-6 text-left">
            <p className="text-sm font-semibold mb-2">
              Søg blandt <strong>158 boliger</strong> til salg i <strong>74 butikker</strong>
            </p>

            <label htmlFor="search" className="block text-gray-500 text-sm mb-1">
              Hvad skal din næste bolig indeholde
            </label>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 mt-2">
              <input
                type="text"
                id="search"
                placeholder="Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende"
                className="flex-1 p-2 border border-gray-300 rounded-md sm:rounded-r-none"
              />
              <button className="bg-blue-900 text-white px-6 py-2 rounded-md sm:rounded-l-none">
                Søg
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
        </>
    )
}


