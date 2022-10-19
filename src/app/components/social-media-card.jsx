import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React from "react";
import Image from "react-image-webp";

const SocialMediaCard = (props) => {
  const {
    data: { type, multiple, placeholder, fallback },
    width,
    onClick,
  } = props;

  return (
    <div
      className="group hover:scale-105 cursor-pointer transition duration-300 ease-in-out"
      style={{ maxWidth: width }}
      onClick={onClick}
    >
      <Image
        src={fallback}
        webp={placeholder}
        alt="Postingan komunitas"
        className="rounded-lg"
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
      {multiple && (
        <div className="absolute top-0 left-0 p-2">
          <FontAwesomeIcon
            icon={faImages}
            size="xl"
            inverse
            className="text-white/50 group-hover:text-white"
          />
        </div>
      )}
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
    multiple: PropTypes.bool,
  }),
  width: PropTypes.number,
  onClick: PropTypes.func,
};

export default SocialMediaCard;
