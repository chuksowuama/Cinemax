import React from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from 'react-router-dom';

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { useMediaQuery } from 'react-responsive';

// A reusable carousel for one genre
const GenreCarousel = ({ title, data }) => {
  const mobile=useMediaQuery({query:"(min-width:200px)"})
  const tablet=useMediaQuery({query:"(min-width:768px)"})
  return (
    <section className="mb-12">
      <div className="flex items-center justify-between px-2 mb-4">
        <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
        <Link to={`/genres/${title.toLowerCase()}`} className="text-accent hover:underline">
          View All
        </Link>
      </div>

      <Swiper
        spaceBetween={10}
        autoplay={{ delay: 4000 }}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 3, spaceBetween: 10 },
          768: { slidesPerView: 4, spaceBetween: 10 },
          1024: { slidesPerView: 6, spaceBetween: 12 },
        }}
        navigation={tablet?true:false}
        modules={[Navigation, Autoplay]}
        className="w-full"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <Link to={`/details/${item.name}`}>
              <div className="h-[250px] relative group cursor-pointer overflow-hidden rounded-lg shadow-lg">
                <img
                  src={item.image?.medium}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 group-hover:opacity-70 transition-all duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white text-sm font-medium truncate">{item.name}</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

const Categories = () => {
  const movies = useSelector((state) => state.stored.items);

  // Filtered data (your logic kept as-is)
  const dramaCategories = movies.filter(item => item.genres.includes("Drama")).slice(0, 15);
  const actionCategories = movies.filter(item => item.genres.includes("Action")).slice(0, 15);
  const scienceFictionCategories = movies.filter(item => item.genres.includes("Science-Fiction")).slice(0, 15);
  const comedyCategories = movies.filter(item => item.genres.includes("Comedy")).slice(0, 15);
  const horrorCategories = movies.filter(item => item.genres.includes("Horror")).slice(0, 15);
  const romanceCategories = movies.filter(item => item.genres.includes("Romance")).slice(0, 15);

  return (
    <div className="px-4 py-10 bg-gray-950 text-white">
      <GenreCarousel title="Drama" data={dramaCategories} />
      <GenreCarousel title="Action" data={actionCategories} />
      <GenreCarousel title="Science Fiction" data={scienceFictionCategories} />
      <GenreCarousel title="Comedy" data={comedyCategories} />
      <GenreCarousel title="Horror" data={horrorCategories} />
      <GenreCarousel title="Romance" data={romanceCategories} />
    </div>
  );
};

export default Categories;






