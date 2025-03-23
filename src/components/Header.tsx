import { Link } from "react-router-dom";
import { IMAGES } from "../constent/theme";
import Menu from "./Menu";
import { useContext, useEffect, useState } from "react";
import { Context } from "../context/AppContext";

const Header = () => {
  const { headerClass, headerSidebar, setHeaderSidebar } = useContext(Context);
  //const [cart, setCart] = useState<boolean>(false);
  //const cartRef = useRef<HTMLLIElement[]>([]);
  const [scroll, setScroll] = useState<boolean>(false);

  // const _cartButton = () => {
  //   setCart(!cart);
  // };
  // const _deletItems = (ind: number) => {
  //   cartRef.current[ind].classList.add("cartListItems");
  //   setTimeout(() => {
  //     cartRef.current[ind].remove();
  //   }, 500);
  // };

  const scrollHandler = () => {
    if (window.scrollY > 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <header className="site-header mo-left header header-transparent transparent-white style-1">
      <div
        className={`sticky-header main-bar-wraper navbar-expand-lg ${
          scroll ? "is-fixed" : ""
        }`}
      >
        <div className="main-bar clearfix ">
          <div className="container clearfix">
            <div className="logo-header mostion">
              <div className="logo-header mostion">
                {headerClass ? (
                  <>
                    {scroll ? (
                      <Link to="/" className="anim-logo">
                        <img src={IMAGES.logo} alt="/" />
                      </Link>
                    ) : (
                      <Link to="/" className="anim-logo-white">
                        <img src={IMAGES.logo2} alt="/" />
                      </Link>
                    )}
                  </>
                ) : (
                  <Link to="/" className="anim-logo">
                    <img src={IMAGES.logo} alt="/" />
                  </Link>
                )}
              </div>
            </div>

            <button
              className={`navbar-toggler collapsed navicon justify-content-end ${
                headerSidebar ? "open" : ""
              }`}
              type="button"
              onClick={() => {
                setHeaderSidebar(!headerSidebar);
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <div className="extra-nav">
              <div className="extra-cell">
                <ul>
                  <li>
                    <Link
                      className="btn btn-white btn-square btn-shadow"
                      to={
                        "https://direct.chownow.com/order/19791/locations/28490"
                      }
                    >
                      <img alt="/" className="media-object" src={IMAGES.chow} />
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="btn btn-white btn-square btn-shadow cart-btn"
                      to={
                        "https://www.clover.com/online-ordering/enat-restaurant-alexandria-2"
                      }
                    >
                      <img
                        alt="/"
                        className="media-object"
                        src={IMAGES.clover}
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className={`header-nav navbar-collapse justify-content-end ${
                headerSidebar ? "show" : ""
              }`}
              id="navbarNavDropdown"
            >
              {" "}
              <Menu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
