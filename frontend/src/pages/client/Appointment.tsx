import { Link } from "react-router-dom";
import { HiBuildingOffice2 } from "react-icons/hi2";

const Appointment = () => {
  return (
    <section className="min-h-screen grid lg:grid-cols-2 bg-slate-100">
      {/* Left Panel */}
      <div className="hidden lg:flex bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900" />

        <div className="relative z-10 flex flex-col justify-center px-16">
          <div className="flex items-center gap-3 mb-6">
            <HiBuildingOffice2 className="text-5xl text-blue-400" />
            <div>
              <h2 className="text-3xl font-bold">
                Hotel Kailash
              </h2>

              <p className="text-slate-300">
                Management System
              </p>
            </div>
          </div>

          <h1 className="text-5xl font-bold leading-tight">
            Create
            <br />
            Staff Account
          </h1>

          <p className="mt-6 max-w-lg text-slate-300 leading-8">
            Register hotel employees and assign their operational role.
            Staff accounts provide secure access to bookings,
            payments, restaurant orders, and hotel management features.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-6">
            <div className="rounded-xl bg-white/10 p-5">
              <h3 className="font-semibold">Bookings</h3>
              <p className="text-sm text-slate-300 mt-2">
                Manage reservations efficiently.
              </p>
            </div>

            <div className="rounded-xl bg-white/10 p-5">
              <h3 className="font-semibold">Payments</h3>
              <p className="text-sm text-slate-300 mt-2">
                Secure billing and invoices.
              </p>
            </div>

            <div className="rounded-xl bg-white/10 p-5">
              <h3 className="font-semibold">Restaurant</h3>
              <p className="text-sm text-slate-300 mt-2">
                Handle dining orders.
              </p>
            </div>

            <div className="rounded-xl bg-white/10 p-5">
              <h3 className="font-semibold">Operations</h3>
              <p className="text-sm text-slate-300 mt-2">
                Manage day-to-day hotel activities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-xl rounded-3xl bg-white shadow-2xl p-10">
          <h2 className="text-4xl font-bold text-slate-800">
            Staff Registration
          </h2>

          <p className="text-slate-500 mt-2 mb-8">
            Create a new employee account.
          </p>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-blue-600"
            />

            <input
              type="text"
              placeholder="Employee ID"
              className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-blue-600"
            />

            <input
              type="email"
              placeholder="Official Email"
              className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-blue-600"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-blue-600"
            />

            <select
              className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-blue-600"
              defaultValue=""
            >
              <option value="" disabled>
                Select Employee Role
              </option>

              <option value="RECEPTIONIST">Receptionist</option>

              <option value="BOOKING_OFFICER">
                Booking Officer
              </option>

              <option value="RESTAURANT_STAFF">
                Restaurant Staff
              </option>

              <option value="HOUSEKEEPING">
                Housekeeping
              </option>

              <option value="ACCOUNTANT">
                Accountant
              </option>

              <option value="HOTEL_MANAGER">
                Hotel Manager
              </option>
            </select>

            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-blue-600"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-blue-600"
            />

            <button className="w-full rounded-xl bg-blue-700 py-4 font-semibold text-white transition hover:bg-blue-800">
              Create Staff Account
            </button>
          </form>

          <p className="mt-8 text-center text-slate-500">
            Already have a staff account?
          </p>

          <Link
            to="/admin/login"
            className="mt-4 block rounded-xl border border-blue-700 py-4 text-center font-semibold text-blue-700 transition hover:bg-blue-700 hover:text-white"
          >
            Staff Login
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Appointment;