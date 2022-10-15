import { Tab } from "@headlessui/react";
import classNames from "classnames";
import PropTypes from "prop-types";
import React, { useState } from "react";
import destinations from "../data/destinations";

const DestinationsSection = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div
      ref={props.innerRef}
      id={props.id}
      className="container py-8 md:py-12 xl:py-16"
    >
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="basis-1/3">
          <div className="flex gap-2 mb-2">
            <div className="h-2 w-1/3 bg-dark inline-block"></div>
            <div className="h-2 w-2 bg-dark inline-block"></div>
            <div className="h-2 w-2 bg-dark inline-block"></div>
            <div className="h-2 w-2 bg-dark inline-block"></div>
            <div className="h-2 w-2 bg-dark inline-block"></div>
          </div>
          <h1 className="text-4xl font-open-sans-condensed font-black inline">
            Destinasi yang bisa kamu kunjungi
          </h1>
        </div>
        <div className="basis-2/3">
          <div className="w-full md:max-w-lg md:ml-auto md:py-4">
            <Tab.Group
              selectedIndex={selectedIndex}
              onChange={setSelectedIndex}
            >
              <Tab.List className="flex space-x-1 rounded-xl bg-green-900/10 p-1">
                {Object.keys(destinations).map((category) => (
                  <Tab
                    key={category}
                    className={({ selected }) =>
                      classNames(
                        "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                        "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none",
                        {
                          "text-black bg-white shadow": selected,
                          "text-dark hover:bg-white/[0.12]": !selected,
                        }
                      )
                    }
                  >
                    {category}
                  </Tab>
                ))}
              </Tab.List>
            </Tab.Group>
          </div>
        </div>
      </div>
      <div>
        <h4>Selected Tab {selectedIndex}</h4>
      </div>
    </div>
  );
};

DestinationsSection.propTypes = {
  id: PropTypes.string,
  innerRef: PropTypes.func,
};

export default DestinationsSection;
