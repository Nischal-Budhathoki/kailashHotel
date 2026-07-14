import { motion } from "framer-motion";
import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaArrowRight,
} from "react-icons/fa6";

const Location = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-amber-50 to-white overflow-hidden">

      {/* Decorative Background */}
      <div className="absolute -top-32 -left-24 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="uppercase tracking-[6px] text-amber-500 font-semibold">
            Find Us
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mt-3 text-gray-800">
            Visit Hotel Kailash Parbat
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-5 text-lg leading-8">
            Conveniently located in Jyatha, Kathmandu,  our hotel offers luxury,
            comfort, and easy access to major destinations.
          </p>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, scale: .96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="relative"
        >

          <div className="rounded-[35px] overflow-hidden shadow-2xl group">

            <iframe
              title="Hotel Kailash Parbat"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2308807137665!2d85.30911818799233!3d27.710156863964613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1901e33dab89%3A0xceea022b481fe933!2zSG90ZWwgS2FpbGFzaCBQYXJiYXQg4KS54KWL4KSf4KSyIOCkleCliOCksuCkvuCktiDgpKrgpLDgpY3gpLXgpKQ!5e0!3m2!1sen!2snp!4v1783916627834!5m2!1sen!2snp"
              className="w-full h-[650px] border-0 transition duration-700 group-hover:scale-105"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>

          {/* Floating Card */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8, delay: .2 }}
            viewport={{ once: true }}
            className="absolute right-8 top-8 max-w-sm backdrop-blur-xl bg-white/90 rounded-3xl shadow-2xl border border-white p-8"
          >

            <div className="flex items-center gap-3 mb-6">
              <FaLocationDot className="text-amber-500 text-3xl animate-bounce" />

              <div>
                <h3 className="text-2xl font-bold">
                  Our Location
                </h3>

                <p className="text-gray-500">
                  Easy to Reach
                </p>
              </div>
            </div>

            <div className="space-y-6">

              <div className="flex gap-4">
                <FaLocationDot className="text-amber-500 mt-1" />

                <div>
                  <h4 className="font-semibold">
                    Address
                  </h4>

                  <p className="text-gray-600">
                    Kathmandu - Jyatha - 11, Nepal
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaPhone className="text-amber-500 mt-1" />

                <div>
                  <h4 className="font-semibold">
                    Phone
                  </h4>

                  <p className="text-gray-600">
                    +977-9841784216
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaEnvelope className="text-amber-500 mt-1" />

                <div>
                  <h4 className="font-semibold">
                    Email
                  </h4>

                  <p className="text-gray-600">
                    info@hotelkailashparbat.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaClock className="text-amber-500 mt-1" />

                <div>
                  <h4 className="font-semibold">
                    Reception
                  </h4>

                  <p className="text-gray-600">
                    Open 24 Hours
                  </p>
                </div>
              </div>

            </div>

            <a
              href="https://maps.google.com/?q=Hotel+Kailash+Parbat"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex justify-center items-center gap-3 bg-amber-500 hover:bg-amber-400 rounded-xl py-4 text-black font-semibold transition duration-300 hover:scale-105"
            >
              Get Directions

              <FaArrowRight />
            </a>

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default Location;