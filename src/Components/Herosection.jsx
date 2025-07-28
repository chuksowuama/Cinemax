import React from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const HeroSection = () => {
  const Movies = useSelector((state) => state.stored.items);

  // Take 5 featured movies
  const heroImages = Movies.slice(10, 15);

  return (
    <div className="w-full mt-16">
      <Swiper
        autoplay={{ delay: 7000 }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="w-full h-[500px] md:h-[600px]"
      >
        {heroImages.map((hero) => (
          <SwiperSlide key={hero.id}>
            <Link to={`/details/${hero.id}`}>
              <div className="relative w-full h-full group cursor-pointer overflow-hidden">
                {/* Background Image */}
                <img
                  src={hero.image?.original}
                  alt={hero.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                {/* Text Content */}
                <div className="absolute bottom-0 p-6 md:p-10 text-white opacity-90">
                  <h2 className="text-2xl md:text-4xl font-bold mb-2">
                    {hero.name}
                  </h2>
                  <p className="text-sm md:text-lg text-gray-200 mb-2">
                    {hero.genres.join(", ")}
                  </p>
                  <p className="hidden md:block max-w-xl text-gray-300">
                    {hero.summary
                      .replace(/<[^>]+>/g, "")
                      .slice(0, 180)}
                    ...
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;

