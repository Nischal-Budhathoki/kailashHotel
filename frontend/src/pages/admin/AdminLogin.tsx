import { Link } from "react-router-dom";
import {
  HiBuildingOffice2,
  HiShieldCheck,
} from "react-icons/hi2";
import {
  FaHotel,
  FaBed,
  FaMoneyBillWave,
  FaClipboardList,
} from "react-icons/fa";

const AdminLogin = () => {
  return (
    <section className="min-h-screen grid lg:grid-cols-2 bg-slate-100">

      {/* LEFT PANEL */}
      <div className="hidden lg:flex relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#2563eb30,transparent_50%)]" />

        <div className="relative z-10 flex flex-col justify-center px-16">

          {/* Logo */}

          <div className="flex items-center gap-4 mb-10">

            <div className="rounded-2xl bg-blue-600 p-4">
              <HiBuildingOffice2 className="text-5xl" />
            </div>

            <div>
              <h1 className="text-4xl font-bold">
                Hotel Kailash
              </h1>

              <p className="text-slate-300">
                Hotel Management System
              </p>
            </div>
          </div>

          <h2 className="text-5xl font-bold leading-tight">
            Staff
            <br />
            Control Center
          </h2>

          <p className="mt-6 max-w-lg text-slate-300 leading-8">
            Secure access for authorized hotel staff to manage
            reservations, guests, restaurant services,
            payments and daily hotel operations.
          </p>

          {/* Stats */}

          <div className="grid grid-cols-2 gap-5 mt-14">

            <div className="rounded-2xl bg-white/10 backdrop-blur p-6">
              <FaBed className="text-3xl text-blue-400 mb-3" />

              <h3 className="text-3xl font-bold">
                82%
              </h3>

              <p className="text-slate-300 mt-2">
                Room Occupancy
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 backdrop-blur p-6">
              <FaClipboardList className="text-3xl text-green-400 mb-3" />

              <h3 className="text-3xl font-bold">
                124
              </h3>

              <p className="text-slate-300 mt-2">
                Today's Bookings
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 backdrop-blur p-6">
              <FaMoneyBillWave className="text-3xl text-yellow-400 mb-3" />

              <h3 className="text-3xl font-bold">
                $12.5K
              </h3>

              <p className="text-slate-300 mt-2">
                Daily Revenue
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 backdrop-blur p-6">
              <FaHotel className="text-3xl text-pink-400 mb-3" />

              <h3 className="text-3xl font-bold">
                148
              </h3>

              <p className="text-slate-300 mt-2">
                Guests Checked-In
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}

      <div className="flex items-center justify-center px-6 py-10">

        <div className="w-full max-w-lg rounded-[32px] bg-white shadow-2xl p-10">

          {/* Header */}

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-4xl font-bold text-slate-800">
                Staff Login
              </h2>

              <p className="text-slate-500 mt-2">
                Welcome back to Hotel Kailash.
              </p>

            </div>

            <HiShieldCheck className="text-5xl text-blue-600" />

          </div>

          {/* Secure Badge */}

          <div className="mt-6 rounded-xl bg-green-50 border border-green-200 px-4 py-3">

            <p className="text-green-700 text-sm font-medium">
              🔒 Secure Staff Authentication
            </p>

          </div>

          {/* FORM */}

          <form className="space-y-5 mt-8">

            <input
              type="text"
              placeholder="Employee ID"
              className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-blue-600"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-blue-600"
            />

            <select
              defaultValue=""
              className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-blue-600"
            >
              <option value="" disabled>
                Select Department
              </option>

              <option>Reception</option>

              <option>Booking</option>

              <option>Restaurant</option>

              <option>Accounts</option>

              <option>Housekeeping</option>

              <option>Hotel Manager</option>

            </select>

            <div className="flex justify-between items-center">

              <label className="flex items-center gap-2 text-sm">

                <input type="checkbox" />

                Remember Me

              </label>

              <button
                type="button"
                className="text-blue-700 text-sm hover:underline"
              >
                Forgot Password?
              </button>

            </div>

            <button
              className="w-full rounded-xl bg-blue-700 py-4 font-semibold text-white transition hover:bg-blue-800"
            >
              Sign In
            </button>

          </form>

          {/* Footer */}

          <div className="mt-10 text-center">

            <p className="text-gray-500">
              Need a staff account?
            </p>

            <Link
              to="/admin/signup"
              className="mt-4 block rounded-xl border border-blue-700 py-4 font-semibold text-blue-700 transition hover:bg-blue-700 hover:text-white"
            >
              Create Staff Account
            </Link>

          </div>

          <p className="mt-8 text-center text-xs text-gray-400">
            Hotel Kailash Management System • Version 1.0
          </p>

        </div>

      </div>

    </section>
  );
};

export default AdminLogin;