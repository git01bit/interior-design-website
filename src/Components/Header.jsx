import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";

function Header() {
  // Check for screen resolution
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Variable and function for hamburger menu interaction
  const [hamburgerMenuState, setHamburgerMenuState] = useState("close");
  function toggleHamburgerMenu() {
    if (hamburgerMenuState === "open") {
      setHamburgerMenuState("close");
    } else {
      setHamburgerMenuState("open");
    }
  }

  //Mobile header
  const mobileHeader = () => {
    return (
      <header className="">
        {/* Hamburger menu icon and phone number */}
        <div className="flex items-center justify-between">
          <FontAwesomeIcon
            icon="fa-solid fa-bars"
            size="xl"
            onClick={toggleHamburgerMenu}
          />

          <p className="bg-teal-700 px-4 py-1 tracking-wider text-white">
            شماره تماس - 021
          </p>
        </div>

        {/* Hamburger menu */}
        {/* Backdrop filter when hamburger menu is open*/}
        <div
          className={`${hamburgerMenuState === "open" ? "z-40 opacity-100" : "-z-50 opacity-0"} absolute inset-0 backdrop-blur-xs transition-opacity duration-150 ease-in-out`}
        ></div>

        {/* Logo and navbar */}
        <nav
          className={`${
            hamburgerMenuState === "close" ? "-right-96" : "right-0"
          } absolute top-0 z-50 flex h-dvh w-80 flex-col gap-y-4 bg-white p-6 shadow-[0_0_12px_rgba(0,0,0,0.12)] transition-all duration-500 ease-in-out`}
        >
          {/* Logo */}
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-x-2 text-xl">
              <FontAwesomeIcon icon="fa-solid fa-couch" />
              <Link href="/" className="font-bold">
                دکوراسیون داخلی
              </Link>
            </span>

            <FontAwesomeIcon
              icon="fa-solid fa-xmark"
              size="xl"
              onClick={toggleHamburgerMenu}
            />
          </div>

          {/* Navbar */}
          <ul className="flex flex-col gap-y-6 p-6">
            <li>
              <NavLink
                to={"/interior-design-website/"}
                end
                className={({ isActive }) =>
                  isActive ? "border-r-2 p-1 pr-2 text-teal-700" : ""
                }
              >
                صفحه اصلی
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/interior-design-website/contact-us"}
                className={({ isActive }) =>
                  isActive ? "border-r-2 p-1 pr-2 text-teal-700" : ""
                }
              >
                تماس با ما
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/interior-design-website/about-us"}
                className={({ isActive }) =>
                  isActive ? "border-r-2 p-1 pr-2 text-teal-700" : ""
                }
              >
                درباره ما
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  };

  // Desktop header
  const desktopHeader = () => {
    return (
      <header>
        {/* Logo */}
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-x-2 text-xl">
            <FontAwesomeIcon icon="fa-solid fa-couch" />
            <Link href="/" className="font-bold">
              دکوراسیون داخلی
            </Link>
          </span>

          {/* Navbar */}
          <nav>
            <ul className="flex gap-x-8 p-6">
              <li>
                <NavLink
                  to={"/interior-design-website/"}
                  end
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 p-1 pb-2 text-teal-700"
                      : "p-1 pb-2 hover:border-b-2 hover:text-teal-700"
                  }
                >
                  صفحه اصلی
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/interior-design-website/contact-us"}
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 p-1 pb-2 text-teal-700"
                      : "p-1 pb-2 hover:border-b-2 hover:text-teal-700"
                  }
                >
                  تماس با ما
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/interior-design-website/about-us"}
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 p-1 pb-2 text-teal-700"
                      : "p-1 pb-2 hover:border-b-2 hover:text-teal-700"
                  }
                >
                  درباره ما
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Phone number */}
          <a
            href="tel:+9821"
            className="cursor-pointer bg-teal-700 px-4 py-1 tracking-wider text-white transition-colors duration-150 ease-in-out hover:bg-teal-800"
          >
            شماره تماس - 021
          </a>
        </div>
      </header>
    );
  };

  // Return the correct header
  if (width <= 768) {
    return mobileHeader();
  } else {
    return desktopHeader();
  }
}

export default Header;
