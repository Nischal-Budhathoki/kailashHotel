import { motion , type Variants} from "framer-motion";
import { activities } from "../utils/Constants";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const Adventures = () => {
  return (
    <section className="min-h-screen w-full flex items-center py-20 bg-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-red-600 uppercase tracking-[6px] font-semibold">
            Adventure
          </span>

          <h2 className="text-5xl font-bold mt-4 text-gray-900">
            Experience Nepal
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg leading-8">
            Discover breathtaking adventures, majestic mountains,
            thrilling rivers, and unforgettable moments across Nepal.
          </p>
        </motion.div>

        {/* Cards */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {activities.map((activity) => (
            <motion.div
              key={activity.title}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}

              <div className="overflow-hidden h-72">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}

              <div className="p-7">
                <span className="text-red-600 text-sm font-medium">
                  📍 {activity.location}
                </span>

                <h3 className="text-2xl font-bold mt-3 text-gray-900">
                  {activity.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-7">
                  {activity.description}
                </p>

                <button className="mt-6 font-semibold text-red-600 hover:translate-x-2 transition-transform duration-300">
                  Learn More →
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Adventures;