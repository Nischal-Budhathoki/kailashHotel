import { Link } from "react-router-dom";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SignUp = () => {
  return (
    <section className="min-h-screen grid lg:grid-cols-2">
      {/* LEFT SIDE */}
      <div
        className="hidden lg:flex relative bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/djdip2cyb/image/upload/v1783911869/visualsofdana-T5pL6ciEn-I-unsplash_zguyad.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="relative z-10 flex flex-col justify-end p-16 text-white">
          <p className="uppercase tracking-[12px] text-yellow-200 mb-3">
            Hotel Kailash Parbat
          </p>

          <h1 className="text-6xl font-bold leading-tight">
            Begin
            <br />
            Your Luxury
            <br />
            Journey
          </h1>

          <p className="mt-6 max-w-md text-gray-200 leading-8">
            Experience elegant rooms, breathtaking mountain views,
            world-class dining, and unforgettable hospitality.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center bg-stone-50 px-6 py-8">
        <div className="w-full max-w-lg rounded-[32px] bg-white p-10 shadow-2xl">
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-gray-900">
              Create Account
            </h2>

            <p className="mt-3 text-gray-500">
              Join Hotel Kailash and enjoy premium hospitality.
            </p>
          </div>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition focus:border-yellow-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition focus:border-yellow-500"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition focus:border-yellow-500"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition focus:border-yellow-500"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition focus:border-yellow-500"
            />

            <button className="w-full rounded-xl bg-yellow-600 py-4 font-semibold text-white transition hover:bg-yellow-700">
              Create Account
            </button>
          </form>

          <div className="my-8 flex items-center">
            <div className="h-px flex-1 bg-gray-300" />
            <span className="mx-4 text-gray-500">OR</span>
            <div className="h-px flex-1 bg-gray-300" />
          </div>

          <div className="flex justify-center gap-5">
            <button className="flex h-12 w-12 items-center justify-center rounded-full border hover:shadow-lg transition">
              <FaGoogle className="text-red-500" />
            </button>

            <button className="flex h-12 w-12 items-center justify-center rounded-full border hover:shadow-lg transition">
              <FaFacebookF className="text-blue-600" />
            </button>

            <button className="flex h-12 w-12 items-center justify-center rounded-full border hover:shadow-lg transition">
              <FaXTwitter />
            </button>
          </div>

          <p className="mt-8 text-center text-gray-500">
            Already have an account?
          </p>

          <Link
            to="/login"
            className="mt-4 block rounded-xl border border-yellow-600 py-4 text-center font-semibold text-yellow-700 transition hover:bg-yellow-600 hover:text-white"
          >
            Sign In
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignUp;