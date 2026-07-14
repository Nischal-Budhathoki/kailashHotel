import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface Props {
  title: string;
  description: string;
  images: string[];
  reverse?: boolean;
  delay?: number;
}

const Destination = ({
  title,
  description,
  images,
  reverse = false,
  delay = 3000,
}: Props) => {
  return (
    <section className="w-full min-h-screen">

      <div
        className={`grid lg:grid-cols-2 h-full ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* IMAGE */}

        <div className="relative h-full">

          <Swiper
            modules={[Pagination, Autoplay]}
            loop
            autoplay={{
              delay,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            className="h-full"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Overlay */}

          <div className="absolute inset-0 bg-black/25"></div>

        </div>

        {/* CONTENT */}

        <div className="flex items-center justify-center bg-white px-20">

          <div className="max-w-xl">

            <span className="uppercase tracking-[6px] text-red-500 font-semibold">
              Explore Nepal
            </span>

            <h2 className="text-6xl font-bold mt-4">
              {title}
            </h2>

            <div className="w-24 h-1 bg-red-500 my-8"></div>

            <p className="text-lg leading-9 text-gray-600">
              {description}
            </p>

            <button className="mt-10 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg transition">
              Explore {title}
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Destination;