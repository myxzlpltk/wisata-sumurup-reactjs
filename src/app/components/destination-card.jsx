import classNames from "classnames";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import Image from "react-image-webp";
import {
  bgColors,
  colors,
  destinationTypes,
  translations,
} from "../data/destinations";

const DestinationCard = (props) => {
  const { type, title, description, images, imagesWebp, onClick } = props;
  const [activeIndex, setActiveIndex] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((activeIndex + 1) % images.length);
    }, (Math.floor(Math.random() * 20) + 30) * 100);

    return () => {
      clearInterval(interval);
    };
  }, [activeIndex, images]);

  return (
    <div
      className="group flex-row cursor-pointer transition duration-300"
      onClick={onClick}
    >
      <div className="aspect-video rounded-xl overflow-hidden mb-2">
        <Image
          src={images[activeIndex]}
          webp={imagesWebp[activeIndex]}
          alt={title}
          className="object-cover w-full h-full group-hover:brightness-[1.2] group-hover:contrast-[1.2] group-hover:saturate-[1.2]"
        />
      </div>

      <span
        className={classNames(
          "select-none px-2 py-1 text-xs font-bold tracking-wide inline-block mb-1",
          colors[type],
          bgColors[type]
        )}
      >
        {translations[type] || type}
      </span>
      <h3 className="text-lg -tracking-wide line-clamp-1">{title}</h3>
      <p className="text-sm text-gray-500 tracking-tighter line-clamp-2">
        {description}
      </p>
    </div>
  );
};

DestinationCard.propTypes = {
  type: PropTypes.oneOf(destinationTypes),
  title: PropTypes.string,
  image: PropTypes.arrayOf(PropTypes.string),
  imagesWebp: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func.isRequired,
};

export default DestinationCard;
