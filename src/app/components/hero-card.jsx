import PropTypes from "prop-types";
import React from "react";
import Image from "react-image-webp";

const HeroCard = (props) => {
  const { title, subtitle, image, imageWebp } = props;

  return (
    <div className="max-w-full rounded overflow-hidden select-none">
      <Image className="w-full" src={image} webp={imageWebp} alt={title} />
      <div className="p-4 transition duration-500 ease-in-out bg-white">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-grey-darker text-base">{subtitle}</p>
      </div>
    </div>
  );
};

HeroCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageWebp: PropTypes.string.isRequired,
};

export default HeroCard;
