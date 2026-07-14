import { roomDetails } from "../utils/Constants";
import { FaBed, FaUsers, FaMapMarkerAlt } from "react-icons/fa";

const Rooms = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-800">
          Our Rooms
        </h2>

        <p className="text-gray-500 mt-3">
          Choose the perfect room for your memorable stay.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {roomDetails.map((room) => (
          <div
            key={room.id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 group"
          >
            <div className="overflow-hidden">
              <img
                src={room.image}
                alt={room.roomType}
                className="h-64 w-full object-cover group-hover:scale-110 transition duration-700"
              />
            </div>

            <div className="p-6">

              <h3 className="text-2xl font-semibold text-gray-800">
                {room.roomType}
              </h3>

              <p className="text-gray-500 mt-3 line-clamp-3">
                {room.description}
              </p>

              <div className="mt-6 space-y-3">

                <div className="flex items-center gap-3">
                  <FaUsers className="text-yellow-500" />
                  <span>{room.pax}</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaBed className="text-yellow-500" />
                  <span>{room.bedSize} Bed</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-yellow-500" />
                  <span>{room.location}</span>
                </div>

              </div>

              <button className="mt-8 w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg transition">
                View Details
              </button>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rooms;