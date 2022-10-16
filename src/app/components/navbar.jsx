import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import Index from "../../assets";
import navigation from "../data/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
  }, [setHeight]);

  console.log(isMenuOpen);

  return (
    <nav ref={ref} className="fixed top-0 left-0 right-0 z-10">
      <div
        className={classNames({
          "bg-dark": isMenuOpen,
          "bg-gradient-to-b from-black/50 to-transparent":
            !navbar && !isMenuOpen,
          "bg-black/50 border-b border-b-white/25": navbar && !isMenuOpen,
        })}
      >
        <div className="container md:py-2 xl:py-4">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
              <button
                className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-dark"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
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
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center md:justify-between">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="h-12 w-auto"
                  src={Index.logoWhite}
                  alt="Wisata Desa Sumurup"
                />
              </div>
              <div className="hidden md:ml-6 md:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      spy={true}
                      hashSpy={true}
                      smooth={true}
                      duration={500}
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

        <div
          className={classNames("md:hidden", {
            block: isMenuOpen,
            hidden: !isMenuOpen,
          })}
        >
          <div className="space-y-1 pt-2 pb-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                spy={true}
                hashSpy={true}
                smooth={true}
                duration={500}
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
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
