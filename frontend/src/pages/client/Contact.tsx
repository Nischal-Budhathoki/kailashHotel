import { CgProfile } from "react-icons/cg";
import {
  FaCalendarAlt,
  FaHotel,
  FaCheckCircle,
  FaHistory,
} from "react-icons/fa";

const user = {
  firstName: "Nischal",
  lastName: "Budhathoki",
  email: "nischal@gmail.com",
  phone: "+977 98XXXXXXXX",
  joined: "January 2026",
};

const upcomingBookings = [
  {
    id: 1,
    room: "Deluxe Room",
    checkIn: "15 July 2026",
    checkOut: "17 July 2026",
    guests: 2,
    status: "Confirmed",
  },
];

const bookingHistory = [
  {
    id: 101,
    room: "Standard Room",
    checkIn: "12 June 2026",
    checkOut: "14 June 2026",
    status: "Completed",
  },
  {
    id: 102,
    room: "Suite Room",
    checkIn: "25 May 2026",
    checkOut: "28 May 2026",
    status: "Cancelled",
  },
  {
    id: 103,
    room: "Deluxe Room",
    checkIn: "05 April 2026",
    checkOut: "08 April 2026",
    status: "Completed",
  },
];

const Contact = () => {
  return (
    <section className="min-h-screen bg-slate-100 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-8">

        {/* ================= PROFILE ================= */}

        <div className="bg-white rounded-3xl shadow-lg p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <CgProfile className="text-8xl text-blue-600" />

            <div className="flex-1">
              <h1 className="text-4xl font-bold">
                Welcome, {user.firstName}
              </h1>

              <p className="text-gray-500 mt-2">{user.email}</p>

              <p className="text-gray-500">
                Phone: {user.phone}
              </p>

              <p className="text-gray-500">
                Member Since: {user.joined}
              </p>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl">
              Edit Profile
            </button>
          </div>
        </div>

        {/* ================= STATS ================= */}

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white rounded-2xl shadow p-6 text-center">
            <FaHotel className="mx-auto text-4xl text-blue-600 mb-3" />
            <h2 className="text-3xl font-bold">4</h2>
            <p>Total Bookings</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6 text-center">
            <FaCalendarAlt className="mx-auto text-4xl text-green-600 mb-3" />
            <h2 className="text-3xl font-bold">1</h2>
            <p>Upcoming</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6 text-center">
            <FaCheckCircle className="mx-auto text-4xl text-indigo-600 mb-3" />
            <h2 className="text-3xl font-bold">2</h2>
            <p>Completed</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6 text-center">
            <FaHistory className="mx-auto text-4xl text-red-500 mb-3" />
            <h2 className="text-3xl font-bold">1</h2>
            <p>Cancelled</p>
          </div>

        </div>

        {/* ================= BOOK ROOM ================= */}

        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-8">
            Book Your Stay
          </h2>

          <form className="grid md:grid-cols-2 gap-6">

            <input
              type="date"
              className="border rounded-xl p-3"
            />

            <input
              type="date"
              className="border rounded-xl p-3"
            />

            <input
              type="number"
              placeholder="Adults"
              className="border rounded-xl p-3"
            />

            <input
              type="number"
              placeholder="Children"
              className="border rounded-xl p-3"
            />

            <select className="border rounded-xl p-3">
              <option>Select Room</option>
              <option>Standard Room</option>
              <option>Deluxe Room</option>
              <option>Suite Room</option>
            </select>

            <input
              type="text"
              placeholder="Special Request"
              className="border rounded-xl p-3"
            />

            <button
              className="md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-semibold"
            >
              Book Now
            </button>

          </form>
        </div>

        {/* ================= UPCOMING BOOKINGS ================= */}

        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6">
            Upcoming Reservations
          </h2>

          <div className="space-y-4">

            {upcomingBookings.map((booking) => (
              <div
                key={booking.id}
                className="border rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center"
              >
                <div>
                  <h3 className="text-xl font-bold">
                    {booking.room}
                  </h3>

                  <p>
                    Check In: {booking.checkIn}
                  </p>

                  <p>
                    Check Out: {booking.checkOut}
                  </p>

                  <p>
                    Guests: {booking.guests}
                  </p>

                  <span className="text-green-600 font-semibold">
                    {booking.status}
                  </span>
                </div>

                <div className="flex gap-3 mt-4 md:mt-0">
                  <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
                    View
                  </button>

                  <button className="bg-red-500 text-white px-5 py-2 rounded-lg">
                    Cancel
                  </button>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* ================= BOOKING HISTORY ================= */}

        <div className="bg-white rounded-3xl shadow-lg p-8 overflow-x-auto">
          <h2 className="text-3xl font-bold mb-6">
            Booking History
          </h2>

          <table className="w-full border-collapse">

            <thead>
              <tr className="bg-slate-200">
                <th className="p-4 text-left">Booking ID</th>
                <th className="p-4 text-left">Room</th>
                <th className="p-4 text-left">Check In</th>
                <th className="p-4 text-left">Check Out</th>
                <th className="p-4 text-left">Status</th>
              </tr>
            </thead>

            <tbody>

              {bookingHistory.map((booking) => (
                <tr
                  key={booking.id}
                  className="border-b hover:bg-slate-50"
                >
                  <td className="p-4">#{booking.id}</td>

                  <td className="p-4">{booking.room}</td>

                  <td className="p-4">{booking.checkIn}</td>

                  <td className="p-4">{booking.checkOut}</td>

                  <td
                    className={`p-4 font-semibold ${
                      booking.status === "Completed"
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {booking.status}
                  </td>
                </tr>
              ))}

            </tbody>

          </table>
        </div>

      </div>
    </section>
  );
};

export default Contact;