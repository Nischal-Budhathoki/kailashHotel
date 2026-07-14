import { food } from "../utils/Constants";

const Restaurant = () => {
  return (
    <section className="relative">
      {/* Hero Section */}
      <div
        className="relative min-h-[1050px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/djdip2cyb/image/upload/v1783838522/jay-wennington-N_Y88TWmGwA-unsplash_rcctvh.jpg')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 text-center">
          <span className="rounded-full border border-white/30 bg-white/10 px-6 py-2 text-sm tracking-[0.3em] uppercase text-white backdrop-blur-sm">
            Restaurant & Dining
          </span>

          <h2 className="mt-8 max-w-4xl text-5xl font-bold leading-tight text-white md:text-7xl">
            Fine Dining at <span className="underline underline-offset-8 decoration-red-700"> Hotel Kailash Parbat</span>
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-9 text-gray-200">
            Indulge in an unforgettable culinary journey featuring authentic
            Nepalese, Indian, Chinese, Continental, and International cuisines.
            Every dish is crafted with fresh ingredients, exceptional care, and
            served with the warm hospitality that defines Hotel Kailash Parbat.
          </p>

          <button className="mt-10 rounded-full bg-red-600 px-10 py-4 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-red-700">
            Explore Our Menu
          </button>

          {/* Cards */}
          <div className="mt-24 grid w-full grid-cols-1 justify-items-center gap-8 md:grid-cols-2 xl:grid-cols-4 md:mb-6">
            {food.map((item, index) => (
              <div
                key={index}
                className="group w-full max-w-[290px] overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:border-red-400 hover:bg-white/20"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-56 w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="flex flex-col items-center px-7 py-8 text-center">
                  <h3 className="text-2xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-200">
                    {item.desc}
                  </p>

                  <button className="mt-7 rounded-full border border-white px-6 py-2 text-sm font-medium text-white transition duration-300 hover:bg-white hover:text-gray-900">
                    Discover More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Restaurant;