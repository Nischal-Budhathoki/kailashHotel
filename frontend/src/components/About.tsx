import { RiHotelFill } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const About = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      // Main timeline
      const tl = gsap.timeline({
        defaults: {
          duration: 0.8,
          ease: "expo.out",
        },
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
          toggleActions: "play none none none",
          once: true,
          
        },
      });

      tl.from(".about-img", {
        x: -150,
        autoAlpha: 0,
        duration: 1.2,
      })
        .from(
          ".hotel-icon",
          {
            rotate: 180,
            scale: 0,
            duration: 0.6,
          },
          "-=0.7"
        )
        .from(
          ".title",
          {
            y: -40,
            autoAlpha: 0,
          },
          "<"
        )
        .from(".description", {
          y: 30,
          autoAlpha: 0,
        })
        .from(".feature", {
          x: 40,
          autoAlpha: 0,
          stagger: 0.15,
          duration: 0.5,
        })
        .from(".btn", {
          scale: 0,
          autoAlpha: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
        });

      // Subtle image parallax
      gsap.to(".about-img", {
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="max-w-7xl mx-auto px-6 py-20 overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row items-center gap-14">
        {/* Left Image */}
        <div className="lg:w-1/2 overflow-hidden rounded-2xl">
          <img
            src="https://res.cloudinary.com/djdip2cyb/image/upload/v1757686402/samples/outdoor-woman.jpg"
            alt="Hotel Kailash"
            className="about-img w-full h-[500px] object-cover rounded-2xl shadow-xl"
          />
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          {/* Heading */}
          <div className="flex items-center gap-3">
            <RiHotelFill className="hotel-icon text-yellow-500 text-4xl" />
            <h2 className="title text-3xl md:text-4xl font-bold text-gray-800">
              About Hotel Kailash
            </h2>
          </div>

          {/* Description */}
          <p className="description text-gray-600 text-lg leading-8">
            At Kailash Hotel, we offer comfortable accommodations, modern
            amenities, and warm hospitality to make every stay relaxing,
            memorable, and enjoyable—whether you're here for business or
            leisure.
          </p>

          {/* Features */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            <li className="feature flex items-center gap-2">
              <FaCheckCircle className="text-green-500" />
              Where Comfort Meets Luxury
            </li>

            <li className="feature flex items-center gap-2">
              <FaCheckCircle className="text-green-500" />
              Your Home Away From Home
            </li>

            <li className="feature flex items-center gap-2">
              <FaCheckCircle className="text-green-500" />
              Stay. Relax. Experience.
            </li>

            <li className="feature flex items-center gap-2">
              <FaCheckCircle className="text-green-500" />
              Comfort You Can Trust
            </li>
          </ul>

          {/* Button */}
          <div>
            <button className="btn bg-yellow-500 hover:bg-yellow-600 hover:scale-105 transition-all duration-300 text-white font-semibold px-8 py-3 rounded-lg shadow-lg">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;