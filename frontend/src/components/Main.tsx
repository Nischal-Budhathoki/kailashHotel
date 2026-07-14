import { locationBtn } from "../utils/Constants";

const Main = () => {
     const buttonStyles =
    "border-2 border-gray-500 text-white bg-black/100 mt-4 px-6 py-2 rounded-xl transition-all duration-300 ease-in-out hover:bg-blue-500 hover:text-white hover:border-transparent hover:scale-105";

  return (
    <main className="relative">
      {/* Background */}
      <img
        className="w-full min-h-screen object-cover"
        src="https://res.cloudinary.com/djdip2cyb/image/upload/v1782320583/vojtech-bruzek-Yrxr3bsPdS0-unsplash_vqsa73.jpg"
        alt=""
      />

      {/* Single Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-start pt-48 bg-black/40 text-center">

        {/* Heading */}
        <h2 className="text-5xl text-white font-bold">
          Visit us at your Convenience!
        </h2>

        {/* Booking Form */}
        <form className="mt-8 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg flex flex-col md:flex-row gap-4 items-center">
          
          {/* Check-in */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600">Check-in</label>
            <input type="date" className="px-4 py-2 border rounded-lg" />
          </div>

          {/* Check-out */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600">Check-out</label>
            <input type="date" className="px-4 py-2 border rounded-lg" />
          </div>

          {/* Guests */}
          <div className="flex gap-3">
            <div className="flex flex-col">
              <label className="text-sm text-gray-600">Adults</label>
              <input type="number" min={1} defaultValue={1}
                className="w-20 px-3 py-2 border rounded-lg" />
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-gray-600">Children</label>
              <input type="number" min={0} defaultValue={0}
                className="w-20 px-3 py-2 border rounded-lg" />
            </div>
          </div>

          {/* Search */}
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all">
            Search
          </button>
        </form>

        {/* Location Buttons (BELOW form) */}
        <div className="mt-8 flex  gap-4 flex-wrap justify-center">

          {locationBtn.map((item, index) => (
            <button
              key={index}
              className="flex items-center gap-2 px-5 py-2 bg-white/90 backdrop-blur-md rounded-full shadow-md hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              <span className="text-orange-600">{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </button>
          ))}

        </div>
        {/* book-now-button */}
        <button className={buttonStyles}>Contact us Now</button>

      </div>
      
    </main>
  );
};

export default Main;