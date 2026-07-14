const Enquiry = () => {
  return (
    <section
      className="relative py-24 bg-fixed bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/djdip2cyb/image/upload/v1783911869/visualsofdana-T5pL6ciEn-I-unsplash_zguyad.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div className="text-white space-y-6">
          <span className="uppercase tracking-[6px] text-amber-400 font-semibold">
            Get in Touch
          </span>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Plan Your Perfect
            <span className="block text-amber-400">
              Himalayan Escape
            </span>
          </h2>

          <p className="text-gray-300 text-lg leading-8">
            Whether you're planning a relaxing vacation, a family holiday,
            or a business stay, our team is always ready to assist you.
            Send us your enquiry and we'll respond as soon as possible.
          </p>

          <div className="flex gap-8 pt-4">
            <div>
              <h3 className="text-3xl font-bold text-amber-400">24/7</h3>
              <p className="text-gray-300">Customer Support</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-amber-400">100%</h3>
              <p className="text-gray-300">Best Hospitality</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-10 shadow-2xl">

          <h3 className="text-3xl font-bold text-white mb-2">
            Send Your Enquiry
          </h3>

          <p className="text-gray-300 mb-8">
            We'd love to hear from you.
          </p>

          <form className="space-y-6">

            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="First Name"
                className="w-full rounded-xl bg-white/10 border border-white/20 px-5 py-4 text-white placeholder-gray-300 outline-none focus:border-amber-400 transition"
                required
              />

              <input
                type="text"
                placeholder="Last Name"
                className="w-full rounded-xl bg-white/10 border border-white/20 px-5 py-4 text-white placeholder-gray-300 outline-none focus:border-amber-400 transition"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl bg-white/10 border border-white/20 px-5 py-4 text-white placeholder-gray-300 outline-none focus:border-amber-400 transition"
                required
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl bg-white/10 border border-white/20 px-5 py-4 text-white placeholder-gray-300 outline-none focus:border-amber-400 transition"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Nationality"
                className="w-full rounded-xl bg-white/10 border border-white/20 px-5 py-4 text-white placeholder-gray-300 outline-none focus:border-amber-400 transition"
              />

              <select
                className="w-full rounded-xl bg-white/10 border border-white/20 px-5 py-4 text-white outline-none focus:border-amber-400 transition"
              >
                <option className="text-black">
                  Room Type
                </option>

                <option className="text-black">
                  Deluxe Room
                </option>

                <option className="text-black">
                  Family Suite
                </option>

                <option className="text-black">
                  Executive Room
                </option>

                <option className="text-black">
                  Presidential Suite
                </option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-5">

              <input
                type="date"
                className="w-full rounded-xl bg-white/10 border border-white/20 px-5 py-4 text-white outline-none focus:border-amber-400 transition"
              />

              <input
                type="date"
                className="w-full rounded-xl bg-white/10 border border-white/20 px-5 py-4 text-white outline-none focus:border-amber-400 transition"
              />

            </div>

            <textarea
              rows={5}
              placeholder="Tell us about your stay, special requests or any questions..."
              className="w-full rounded-xl bg-white/10 border border-white/20 px-5 py-4 text-white placeholder-gray-300 outline-none focus:border-amber-400 transition resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-400 text-black font-semibold py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg"
            >
              Send Enquiry
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Enquiry;