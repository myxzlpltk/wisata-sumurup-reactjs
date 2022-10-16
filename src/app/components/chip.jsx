import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

const Chip = (props) => {
  const { active, text, onClick } = props;

  return (
    <div
      onClick={onClick}
      className={classNames(
        "select-none flex items-center gap-1 px-2.5 py-1.5 rounded-full font-medium text-xs flex align-center w-max cursor-pointer transition duration-300 ease",
        {
          "text-white bg-green-600 hover:bg-green-700": active,
          "text-gray-500 bg-gray-200 hover:bg-gray-300": !active,
        }
      )}
    >
      <span>{text}</span>
      {active && <FontAwesomeIcon icon={faCheck} />}
    </div>
  );
};

Chip.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
  text: PropTypes.node,
};

export default Chip;
