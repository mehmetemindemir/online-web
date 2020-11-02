import { useState, useEffect, Fragment } from "react";
import { Container } from "react-bootstrap";
import Link from "next/link";
import {
  IoIosSearch,
  IoMdPerson,
  IoIosHeartEmpty,
  IoIosCart,
  IoIosMenu
} from "react-icons/io";
import Navigation from "./elements/Navigation";
import AboutOverlay from "./elements/AboutOverlay";
import SearchOverlay from "./elements/SearchOverlay";
import MobileMenu from "./elements/MobileMenu";

const HeaderOne = ({ aboutOverlay,menu }) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [offCanvasAboutActive, setOffCanvasAboutActive] = useState(false);
  const [offCanvasSearchActive, setOffCanvasSearchActive] = useState(false);
  const [offCanvasCartActive, setOffCanvasCartActive] = useState(false);
  const [offCanvasWishlistActive, setOffCanvasWishlistActive] = useState(false);
  const [offCanvasMobileMenuActive, setOffCanvasMobileMenuActive] = useState(
    false
  );

  useEffect(() => {
    const header = document.querySelector("header");
    setHeaderTop(header.offsetTop);
    setHeaderHeight(header.offsetHeight);
    window.addEventListener("scroll", handleScroll);
    scroll > headerTop
      ? (document.body.style.paddingTop = `${headerHeight}px`)
      : (document.body.style.paddingTop = 0);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <Fragment>
      <header
        className={`topbar-shadow ${scroll > headerTop ? "is-sticky" : ""}`}
      >
        <Container className="wide">
          <div className="header-content d-flex align-items-center justify-content-between position-relative space-py-mobile-only--30">
            {/* logo */}
            <div className="header-content__logo d-flex align-items-center space-pr--15">
              <button
                onClick={() => {
                  setOffCanvasAboutActive(true);
                  document
                    .querySelector("body")
                    .classList.add("overflow-hidden");
                }}
                className={`${
                  aboutOverlay === false
                    ? "d-none"
                    : "about-overlay-trigger d-none d-lg-block"
                }`}
              >
                <IoIosMenu />
              </button>
              <Link href="/" as={process.env.PUBLIC_URL + "/"}>
                <a>
                  <img
                      src={process.env.PUBLIC_URL + "/assets/images/logo.png"}
                      className="img-fluid"
                      alt=""
                  />
                </a>
              </Link>
            </div>

            {/* navigation */}
            <Navigation  menu={menu}/>

            {/* icons */}
            <div className="header-content__icons space-pl--15">
              <ul className="d-none d-lg-block">
                <li>
                  <button
                    onClick={() => {
                      setOffCanvasSearchActive(true);
                      document
                        .querySelector("body")
                        .classList.add("overflow-hidden");
                    }}
                  >
                    <IoIosSearch />
                  </button>
                </li>
                <li>
                  <Link
                    href="/other/login-register"
                    as={process.env.PUBLIC_URL + "/other/login-register"}
                  >
                    <a>
                      <IoMdPerson />
                    </a>
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setOffCanvasWishlistActive(true);
                      document
                        .querySelector("body")
                        .classList.add("overflow-hidden");
                    }}
                  >
                    <IoIosHeartEmpty />

                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setOffCanvasCartActive(true);
                      document
                        .querySelector("body")
                        .classList.add("overflow-hidden");
                    }}
                  >
                    <IoIosCart />

                  </button>
                </li>
              </ul>

              <ul className="d-block d-lg-none">
                <li>
                  <Link
                    href="/other/wishlist"
                    as={process.env.PUBLIC_URL + "/other/wishlist"}
                  >
                    <a>
                      <IoIosHeartEmpty />

                    </a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/other/cart"
                    as={process.env.PUBLIC_URL + "/other/cart"}
                  >
                    <a>
                      <IoIosCart />

                    </a>
                  </Link>
                </li>
                <li>
                  <button onClick={() => setOffCanvasMobileMenuActive(true)}>
                    <IoIosMenu />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </header>

      {/* about overlay */}
      {aboutOverlay === false ? (
        ""
      ) : (
        <AboutOverlay
          activeStatus={offCanvasAboutActive}
          getActiveStatus={setOffCanvasAboutActive}
        />
      )}
      {/* search overlay */}
      <SearchOverlay
        activeStatus={offCanvasSearchActive}
        getActiveStatus={setOffCanvasSearchActive}
      />



      {/* Mobile Menu */}
      <MobileMenu
        activeStatus={offCanvasMobileMenuActive}
        getActiveStatus={setOffCanvasMobileMenuActive}
      />
    </Fragment>
  );
};



export default HeaderOne;
