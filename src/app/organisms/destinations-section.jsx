import { faExpand, faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import Lottie from "react-lottie";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import * as animationData from "../../assets/lottie/no-data.json";
import Chip from "../components/chip";
import DestinationCard from "../components/destination-card";
import destinations, { destinationTypes } from "../data/destinations";

const DestinationsSection = (props) => {
  const { id, innerRef } = props;
  const [open, setOpen] = useState(false);
  const [activeDestination, setActiveDestination] = useState(null);
  const [activeIndexImage, setActiveIndexImage] = useState(null);
  const [categories, setCategories] = useState(new Set(destinationTypes));
  const [filteredDestinations, setFilteredDestinations] =
    useState(destinations);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const openModal = (index) => {
    setActiveDestination(filteredDestinations[index]);
    setOpen(true);
  };

  const closeModal = () => {
    setActiveDestination(null);
    setOpen(false);
  };

  const toggleCategory = (category) => {
    if (categories.has(category)) {
      categories.delete(category);
    } else {
      categories.add(category);
    }

    setFilteredDestinations(
      destinations.filter((data) => categories.has(data.type))
    );
    setCategories(new Set(categories));
  };

  return (
    <Fragment>
      <div ref={innerRef} id={id} className="container py-8 md:py-12 xl:py-16">
        <div className="mb-8 md:mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-2">
              <div className="flex gap-2 mb-2">
                <div className="h-2 w-1/3 bg-black/80 inline-block"></div>
                <div className="h-2 w-2 bg-green-500 inline-block"></div>
                <div className="h-2 w-2 bg-yellow-500 inline-block"></div>
                <div className="h-2 w-2 bg-blue-500 inline-block"></div>
                <div className="h-2 w-2 bg-red-500 inline-block"></div>
              </div>
              <h1 className="text-4xl font-open-sans-condensed font-black inline">
                Destinasi yang bisa kamu kunjungi
              </h1>
            </div>
            <div className="flex-1 w-full">
              <p className="mb-2 text-lg text-left md:text-right flex items-center justify-start md:justify-end gap-2">
                <FontAwesomeIcon icon={faFilter} />
                <span>Filter Jenis Wisata</span>
              </p>
              <div className="flex flex-wrap justify-start md:justify-end gap-2">
                <Chip
                  text="Alam"
                  active={categories.has("nature")}
                  activeColor="bg-green-600 hover:bg-green-700"
                  onClick={() => toggleCategory("nature")}
                />
                <Chip
                  text="Religi"
                  active={categories.has("religion")}
                  activeColor="bg-yellow-600 hover:bg-yellow-700"
                  onClick={() => toggleCategory("religion")}
                />
                <Chip
                  text="Edukasi"
                  active={categories.has("education")}
                  activeColor="bg-blue-600 hover:bg-blue-700"
                  onClick={() => toggleCategory("education")}
                />
                <Chip
                  text="Edukasi"
                  active={categories.has("culinary")}
                  activeColor="bg-red-600 hover:bg-red-700"
                  onClick={() => toggleCategory("culinary")}
                />
              </div>
            </div>
          </div>
        </div>

        {filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filteredDestinations.map((data, index) => (
              <DestinationCard
                key={`destination-card-${index}`}
                type="nature"
                onClick={() => openModal(index)}
                {...data}
              />
            ))}
          </div>
        ) : (
          <Fragment>
            <div className="max-w-sm mx-auto mb-2">
              <Lottie
                options={defaultOptions}
                width="100%"
                isClickToPauseDisabled={true}
              />
            </div>
            <p className="text-lg text-gray-500 text-center">
              Tidak ada data ditemukan
            </p>
          </Fragment>
        )}
      </div>
      {open && activeDestination !== null && (
        <BottomSheet
          open={open}
          onDismiss={closeModal}
          defaultSnap={({ maxHeight }) => maxHeight * 0.65}
          snapPoints={({ maxHeight }) => [
            maxHeight * 0.8,
            maxHeight * 0.5,
            maxHeight * 0.65,
          ]}
        >
          <Fragment>
            <div className="relative">
              <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView={1}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                grabCursor={true}
                navigation={true}
                onSwiper={(swiper) => setActiveIndexImage(swiper.activeIndex)}
                onSlideChange={(swiper) =>
                  setActiveIndexImage(swiper.activeIndex)
                }
              >
                {activeDestination.images.map((image, index) => (
                  <SwiperSlide key={`modal-image-${index}`}>
                    <div className="relative aspect-video overflow-hidden mb-2">
                      <img
                        src={image.toString()}
                        alt={activeDestination.title}
                        className="object-cover w-full h-full group-hover:brightness-[1.2] group-hover:contrast-[1.2] group-hover:saturate-[1.2]"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="absolute bottom-5 right-3 z-10">
                <button
                  onClick={() =>
                    window.open(
                      activeDestination.bigImages[activeIndexImage],
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                  className="aspect-square flex items-center justify-center p-3 bg-black/50 hover:bg-black/80 rounded-full focus:outline-none"
                >
                  <FontAwesomeIcon icon={faExpand} inverse size="lg" />
                </button>
              </div>
            </div>
            <div className="px-4 py-2">
              <h3 className="text-xl font-bold -tracking-widest">
                {activeDestination.title}
              </h3>
              <p className="text-sm text-gray-500 tracking-tighter">
                {activeDestination.description}
              </p>
            </div>
          </Fragment>
        </BottomSheet>
      )}
    </Fragment>
  );
};

DestinationsSection.propTypes = {
  id: PropTypes.string,
  innerRef: PropTypes.func,
};

export default DestinationsSection;
