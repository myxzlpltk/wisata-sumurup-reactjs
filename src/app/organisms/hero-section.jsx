import PropTypes from "prop-types";
import React, { useState } from "react";
import { Autoplay, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/react";
import HeroCard from "../components/hero-card";
import SlideButtons from "../components/slide-buttons";
import cards from "../data/cards";

const HeroSection = (props) => {
  const { id, innerRef } = props;
  const [indexHero, setIndexHero] = useState(0);

  return (
    <div
      ref={innerRef}
      id={id}
      className="bg-cover bg-center bg-fixed pt-24"
      style={{ backgroundImage: `url(${cards[indexHero].image})` }}
    >
      <div className="container py-8 md:py-16 xl:py-24">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="basis-1/3 text-white min-w-0">
            <h2 className="text-2xl font-bold font-open-sans-condensed mb-2">
              Selamat datang di
            </h2>
            <h1 className="text-5xl font-bold font-abril mb-6">
              WISATA
              <br />
              DESA SUMURUP
            </h1>
            <p className="md:text-base border-l-4 border-l-primary pl-4">
              Wisata outdoor yang menawarkan perpaduan suasana alam pegunungan
              yang asri dengan pemandangan langsung dari bendungan Bagong dari
              sisi yang ikonik.
            </p>
          </div>
          <div className="basis-2/3 min-w-0 w-screen">
            <Swiper
              modules={[EffectCoverflow, Autoplay]}
              onSlideChange={(swiper) => setIndexHero(swiper.activeIndex)}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              coverflowEffect={{
                rotate: 30,
                stretch: 30,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
              slidesPerView="auto"
              watchSlidesProgress={true}
            >
              {cards.map((data, index) => (
                <SwiperSlide
                  key={`swiper-slide-${index}`}
                  className="max-w-[200px] h-full transition duration-500 ease-in-out"
                >
                  <HeroCard {...data} />
                </SwiperSlide>
              ))}
              <div className="flex items-center justify-center gap-2 mt-6">
                <SlideButtons
                  allowSlidePrev={indexHero !== 0}
                  allowSlideNext={indexHero !== cards.length - 1}
                />
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroSection.propTypes = {
  id: PropTypes.string,
  innerRef: PropTypes.func,
};

export default HeroSection;
