import { Link } from "react-router"

const Home = () => {
  return (
    <>
      <section>
        <div className="section_main w-full min-h-[70vh] flex flex-col justify-center items-center text-center px-6 py-12 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Welcome to CCV-ter</h1>

          <p className="text-base sm:text-lg md:text-xl max-w-2xl mb-6 text-gray-300 px-2 sm:px-0">
            CCV-ter is your smart and simple currency converter built for students, travelers, and global peeps who hate math but love accuracy
          </p>

          <div className="max-w-3xl text-xs sm:text-sm md:text-base text-gray-400 space-y-4 px-2 sm:px-0">
            <p>
              Ever wondered how much your 1 USD is in BDT, EUR, INR, or even JPY?  
              Stop Googling every 2 seconds — CCV-ter got you.
            </p>
            <p>
              Whether you're buying stuff online, freelancing, or just flexing conversion skills, this app is built to give you fast & accurate results.
            </p>
            <p>
              Built with React + Tailwind, CCV-ter is smooth, minimal, and actually useful.
            </p>
          </div>

          <Link
            to={"/ccvter"} 
            className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition duration-300"
          >
            Try Converter Now
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home
