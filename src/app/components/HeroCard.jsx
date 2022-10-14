import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

const HeroCard = (props) => {
  return (
    <div
      className={classNames(
        "max-w-full rounded overflow-hidden shadow-lg transition duration-500 ease-in-out",
        {
          "md:opacity-100": props.diff >= 0,
          "md:opacity-40": props.diff === -1,
          "md:opacity-20": props.diff === -2,
          "md:opacity-0": props.diff <= -3,
        }
      )}
    >
      <img className="w-full" src={props.image} alt={props.title} />
      <div
        className={classNames("p-4 transition duration-500 ease-in-out", {
          "bg-white": !props.active,
          "bg-secondary": props.active,
        })}
      >
        <div className="font-bold text-xl mb-2">{props.title}</div>
        <p className="text-grey-darker text-base">{props.subtitle}</p>
      </div>
    </div>
  );
};

HeroCard.propTypes = {
  active: PropTypes.bool,
  diff: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default HeroCard;
