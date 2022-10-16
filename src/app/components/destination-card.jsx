import classNames from "classnames";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { destinationTypes } from "../data/destinations";

const translations = {
  nature: "Wisata Alam",
  religion: "Wisata Religi",
  education: "Wisata Edukasi",
  culinary: "Wisata Kuliner",
};

const colors = {
  nature: "bg-green-100",
  religion: "bg-yellow-100",
  education: "bg-blue-100",
  culinary: "bg-red-100",
};

const DestinationCard = (props) => {
  const { type, title, description, images, onClick } = props;
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
      <div className="relative aspect-video rounded-xl overflow-hidden mb-2">
        <img
          src={images[activeIndex]}
          alt={title}
          className="object-cover w-full h-full group-hover:brightness-[1.2] group-hover:contrast-[1.2] group-hover:saturate-[1.2]"
        />
        <div
          className={classNames(
            "select-none absolute rounded-xl px-2 py-1 right-2 top-2 text-black/80 text-xs text-center",
            colors[type]
          )}
        >
          {translations[type] || type}
        </div>
      </div>

      <h3 className="text-xl font-bold -tracking-widest">{title}</h3>
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
  bigImages: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func.isRequired,
};

export default DestinationCard;
