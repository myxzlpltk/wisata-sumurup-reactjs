import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React from "react";
import Image from "react-image-webp";

const SocialMediaCard = (props) => {
  const {
    data: { type, placeholder, fallback },
    width,
    onClick,
  } = props;

  return (
    <div
      className="group hover:scale-105 cursor-pointer transition duration-300 ease-in-out"
      style={{ maxWidth: width }}
      onClick={onClick}
      role="feed"
    >
      <Image
        src={fallback}
        webp={placeholder}
        className="rounded-lg"
        alt={`Postingan komunitas di ${type}`}
      />
      <div className="absolute bottom-0 right-0 p-2">
        {type === "instagram" && (
          <FontAwesomeIcon
            icon={faInstagram}
            size="xl"
            inverse
            className="text-white/50 group-hover:text-white"
          />
        )}
        {type === "tiktok" && (
          <FontAwesomeIcon
            icon={faTiktok}
            size="xl"
            inverse
            className="text-white/50 group-hover:text-white"
          />
        )}
      </div>
    </div>
  );
};

SocialMediaCard.propTypes = {
  index: PropTypes.number,
  data: PropTypes.shape({
    type: PropTypes.string,
    url: PropTypes.string,
    placeholder: PropTypes.string,
    fallback: PropTypes.string,
  }),
  width: PropTypes.number,
  onClick: PropTypes.func,
};

export default SocialMediaCard;
