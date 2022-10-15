import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { useSwiper } from "swiper/react";

const SlideButtons = ({ allowSlidePrev, allowSlideNext }) => {
  const swiper = useSwiper();

  return (
    <Fragment>
      <button
        className="rounded-full p-2 aspect-square flex items-center justify-center bg-white hover:bg-secondary disabled:bg-gray-500 text-black disabled:text-white"
        disabled={!allowSlidePrev}
        onClick={allowSlidePrev ? () => swiper.slidePrev() : null}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        className="rounded-full p-2 aspect-square flex items-center justify-center bg-white hover:bg-secondary disabled:bg-gray-500 text-black disabled:text-white"
        disabled={!allowSlideNext}
        onClick={allowSlideNext ? () => swiper.slideNext() : null}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </Fragment>
  );
};

SlideButtons.propTypes = {
  allowSlidePrev: PropTypes.bool.isRequired,
  allowSlideNext: PropTypes.bool.isRequired,
};

export default SlideButtons;
