import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Logo & About */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <img
              src="https://res.cloudinary.com/djdip2cyb/image/upload/v1783909629/35be46d257de8eb58da9307f9e4aec57_qpoe0i.png"
              alt="Hotel Kailash Parbat"
              className="w-14 h-14 object-contain cursor-pointer"
            />

            <div>
              <h2 className="text-2xl font-bold text-white">
                Hotel Kailash
              </h2>
              <span className="text-amber-400 tracking-widest text-sm">
                PARBAT
              </span>
            </div>
          </div>

          <p className="leading-7 text-gray-400">
            Experience luxury, comfort, and authentic Nepali hospitality.
            Every stay is designed to create unforgettable memories with
            world-class service and breathtaking surroundings.
          </p>

          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="w-10 h-10  cursor-pointer rounded-full border border-gray-600 flex items-center justify-center hover:bg-amber-500 hover:text-black transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-10 h-10  cursor-pointer rounded-full border border-gray-600 flex items-center justify-center hover:bg-amber-500 hover:text-black transition"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-10 h-10 cursor-pointer rounded-full border border-gray-600 flex items-center justify-center hover:bg-amber-500 hover:text-black transition"
            >
              <FaXTwitter />
            </a>

            <a
              href="#"
              className="w-10 h-10 cursor-pointer rounded-full border border-gray-600 flex items-center justify-center hover:bg-amber-500 hover:text-black transition"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl text-white font-semibold mb-6">
            Quick Links
          </h3>

          <ul className="space-y-3">
            <li><a href="#" className="hover:text-amber-400 transition cursor-pointer">Home</a></li>
            <li><a href="#" className="hover:text-amber-400 transition cursor-pointer">About Us</a></li>
            <li><a href="#" className="hover:text-amber-400 transition cursor-pointer">Rooms & Suites</a></li>
            <li><a href="#" className="hover:text-amber-400 transition cursor-pointer">Restaurant</a></li>
            <li><a href="#" className="hover:text-amber-400 transition cursor-pointer">Gallery</a></li>
            <li><a href="#" className="hover:text-amber-400 transition cursor-pointer">Contact Us</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl text-white font-semibold mb-6">
            Our Services
          </h3>

          <ul className="space-y-3">
            <li>Luxury Accommodation</li>
            <li>Fine Dining Restaurant</li>
            <li>Conference Hall</li>
            <li>Banquet & Events</li>
            <li>Free High-Speed Wi-Fi</li>
            <li>Airport Pickup</li>
            <li>Laundry Service</li>
            <li>Free Parking</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl text-white font-semibold mb-6">
            Contact Us
          </h3>

          <div className="space-y-5">

            <div className="flex gap-4">
              <FaMapMarkerAlt className="text-amber-400 mt-1" />
              <p>
                Kantipath-jyatha 11, Kathmandu,
                <br />
                Nepal
              </p>
            </div>

            <div className="flex  flex-col gap-4">
              <div className="flex gap-3">
                <FaPhoneAlt className="text-amber-400 mt-1" />
                 <p>+977-985107258</p>
              </div>
              <div className="flex gap-3">
                <FaPhoneAlt className="text-amber-400 mt-1" />
                 <p>+977- 01 - 5039231</p>
              </div>
              <div className="flex gap-3">
                <FaPhoneAlt className="text-amber-400 mt-1" />
                 <p>+977- 01 - 50267351</p>
              </div>
            </div>

            <div className="flex gap-4">
              <FaEnvelope className="text-amber-400 mt-1" />
              <p>info@hotelkailashparbat.com</p>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-gray-500">
            © 2026 Hotel Kailash Parbat. All Rights Reserved.
          </p>

            <p className="text-sm text-gray-500">
            Build by Jayanti Technologies
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-amber-400">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-amber-400">
              Terms & Conditions
            </a>

            <a href="#" className="hover:text-amber-400">
              Cancellation Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;