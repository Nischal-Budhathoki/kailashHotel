import { imgDock } from "../utils/Constants";

const Orders = () => {
  return (
    <section className="py-20 bg-white">
      <div className="text-center mb-12">
        <h6 className="font-semibold  text-red-600 uppercase">
          Our Online Partners <span className="lowercase">at</span>
        </h6>
        <h2 className="text-5xl font-bold mt-4 text-gray-900">Hotel Kailash Parbat</h2>
        <p className="mt-3 text-gray-500 text-lg">
          For your comfort from anywhere in the world.
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-10 px-6">
        {imgDock.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-center bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition duration-300"
          >
            <img
              src={item.img}
              alt={item.alt}
              className="h-14 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Orders;