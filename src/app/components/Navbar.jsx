import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Disclosure } from "@headlessui/react";
import classNames from "classnames";
import React, { Fragment, useEffect, useState } from "react";
import Assets from "../../assets/Assets";
import navigation from "../data/navigation";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <Disclosure
      as="nav"
      className={classNames("fixed top-0 left-0 right-0 z-10", {
        "bg-gradient-to-b from-black/50 to-transparent": !navbar,
        "bg-black/50 border-b border-b-white/25": navbar,
      })}
    >
      {({ open }) => (
        <Fragment>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 sm:py-2 lg:px-8 lg:py-4">
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
                    src={Assets.logoWhite}
                    alt="Wisata Desa Sumurup"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          "px-3 py-2 text-md font-medium flex space-x-2 items-center",
                          {
                            "bg-white text-primary": item.current,
                            "text-white hover:bg-white hover:text-primary":
                              !item.current,
                          }
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        <FontAwesomeIcon
                          icon={item.icon}
                          className="inline"
                          fixedWidth
                        />
                        <span>{item.name}</span>
                      </a>
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
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    "block px-3 py-2 text-base flex space-x-2 items-center",
                    {
                      "bg-white text-dark font-semibold": item.current,
                      "text-white font-medium hover:bg-white hover:text-primary":
                        !item.current,
                    }
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  <FontAwesomeIcon icon={item.icon} className="inline" />
                  <span>{item.name}</span>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </Fragment>
      )}
    </Disclosure>
  );
};

export default Navbar;
