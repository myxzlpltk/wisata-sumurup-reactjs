import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Disclosure } from "@headlessui/react";
import classNames from "classnames";
import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import Index from "../../assets";
import navigation from "../data/navigation";
import { Link } from "react-scroll";

const Navbar = ({ activeIndex }) => {
  const [navbar, setNavbar] = useState(false);
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    setHeight(ref.current.clientHeight);
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <Disclosure ref={ref} as="nav" className="fixed top-0 left-0 right-0 z-10">
      {({ open }) => (
        <div
          className={classNames({
            "bg-gradient-to-b from-black/50 to-transparent": !navbar && !open,
            "bg-black/50 border-b border-b-white/25": navbar && !open,
            "bg-dark": open,
          })}
        >
          <div className="container md:py-2 xl:py-4">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-dark">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <FontAwesomeIcon
                      icon={faTimes}
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faBars}
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-12 w-auto"
                    src={Index.logoWhite}
                    alt="Wisata Desa Sumurup"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        spy={true}
                        activeClass="bg-white text-primary"
                        className="px-3 py-2 text-md font-medium flex space-x-2 items-center cursor-pointer text-white hover:bg-white hover:text-primary rounded"
                        offset={-height}
                      >
                        <FontAwesomeIcon
                          icon={item.icon}
                          className="inline"
                          fixedWidth
                        />
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  as={Link}
                  key={item.name}
                  to={item.href}
                  spy={true}
                  activeClass="bg-white text-primary"
                  className="block px-3 py-2 text-md font-medium flex space-x-2 items-center cursor-pointer text-white hover:bg-white hover:text-primary"
                  offset={-height}
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="inline"
                    fixedWidth
                  />
                  <span>{item.name}</span>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
};

Navbar.propTypes = {
  activeIndex: PropTypes.number.isRequired,
};

export default Navbar;
