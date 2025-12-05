import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const reviews = [
  {
    text: "The team at PigoPi exceeded our expectations! They took the time to understand our brand and delivered a website that is both visually stunning and highly functional.",
    name: "Sonika Nair",
    role: "Marketing Director",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    text: "We needed a sleek, modern website that reflected our tech-driven brand, and PigoPi delivered beyond our imagination.",
    name: "Niva Tiparti",
    role: "CEO",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    text: "As a law firm, we wanted a professional yet approachable website that instills trust in potential clients. The team was incredibly professional.",
    name: "Udarsh Bansal",
    role: "Founder",
    image: "https://randomuser.me/api/portraits/men/43.jpg"
  },
];

const Review = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="bg-gradient-to-b from-black via-[#130F3A] to-black text-white flex flex-col justify-center items-center px-4 pb-24 pt-10 relative z-10">
      <h2 className="text-center text-4xl lg:text-5xl font-bold mb-20 text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">
        Client Reviews
      </h2>
      <div className="w-full max-w-4xl px-4">
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="flex justify-center">
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-3xl shadow-2xl p-15 flex flex-col items-center max-w-[4xl] w-full mx-auto space-y-6">

                {/* Image inside the card */}
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-24 h-24 rounded-full border-4 border-[#130F3A] shadow-lg object-cover bg-gray-700"
                />

                {/* Name & Role */}
                <div className="text-center">
                  <h4 className="text-xl sm:text-2xl font-semibold text-white">{review.name}</h4>
                  <p className="text-sm text-gray-400">{review.role}</p>
                </div>

                {/* Review Text */}
                <p className="text-lg sm:text-xl italic font-medium text-gray-200 text-center">
                  "{review.text}"
                </p>

              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div
      className="relative mt-20 w-full flex items-center justify-center mx-auto max-w-7xl h-[1px]"
      style={{
        background: `radial-gradient(circle at center, rgba(59,130,246,1) 0%, rgba(168,85,247,1) 30%, rgba(236,72,153,0.4) 70%, transparent 100%)`
      }}
    />
    </div>
  );
};

export default Review;
