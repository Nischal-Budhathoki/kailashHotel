import { Link } from "react-router-dom";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Login = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/djdip2cyb/image/upload/v1783911869/visualsofdana-T5pL6ciEn-I-unsplash_zguyad.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55 backdrop-blur-sm" />

      {/* Login Card */}
      <div className="relative z-10 w-[90%] max-w-md rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-10 shadow-2xl">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">
            Welcome Back
          </h1>

          <p className="text-gray-200 mt-2">
            Sign in to continue your luxury stay.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-xl border border-white/30 bg-white/20 px-5 py-3 text-white placeholder:text-gray-300 outline-none focus:border-blue-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl border border-white/30 bg-white/20 px-5 py-3 text-white placeholder:text-gray-300 outline-none focus:border-blue-400"
          />

          <div className="flex justify-end">
            <a
              href="#"
              className="text-sm text-gray-200 hover:text-white"
            >
              Forgot Password?
            </a>
          </div>

          <button
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-8">
          <div className="h-px flex-1 bg-white/20" />
          <span className="text-sm text-gray-300">OR</span>
          <div className="h-px flex-1 bg-white/20" />
        </div>

        {/* Social Login */}
        <div className="flex justify-center gap-5">
          <button className="rounded-full bg-white p-3 transition hover:scale-110">
            <FaGoogle className="text-red-500 text-xl" />
          </button>

          <button className="rounded-full bg-white p-3 transition hover:scale-110">
            <FaFacebookF className="text-blue-600 text-xl" />
          </button>

          <button className="rounded-full bg-white p-3 transition hover:scale-110">
            <FaXTwitter className="text-black text-xl" />
          </button>
        </div>

        {/* Signup */}
        <p className="mt-8 text-center text-gray-200">
          New to Hotel Kailash?
        </p>

        <Link
          to="/signup"
          className="mt-4 block rounded-xl border border-white/30 py-3 text-center font-semibold text-white transition hover:bg-white hover:text-black"
        >
          Create an Account
        </Link>
      </div>
    </section>
  );
};

export default Login;