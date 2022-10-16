import PropTypes from "prop-types";
import React from "react";

const HeroCard = (props) => {
  const { title, subtitle, image } = props;

  return (
    <div className="max-w-full rounded overflow-hidden select-none">
      <img className="w-full" src={image} alt={title} />
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
};

export default HeroCard;
