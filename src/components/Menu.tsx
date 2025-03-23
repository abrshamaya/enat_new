import { Link, useLocation } from "react-router-dom";
import { IMAGES } from "../constent/theme";
import { MenuArr } from "./MenuArr"; // Make sure to import your updated MenuArr
import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../context/AppContext";
import SocialLinks from "../elements/SocialLinks";

// const initialState = {
//   activeSubmenu: "",
// };


const Menu = () => {
  const { headerClass } = useContext(Context);
  const [active, setActive] = useState<string>("");
  const { pathname } = useLocation();
  const navRef = useRef<HTMLLIElement[]>([]);

  useEffect(() => {
    MenuArr.forEach((el) => {
      if (el) {
        if ("/contact-us" === pathname) {
          setActive(el.menu);
        }
        if (el.to === pathname) {
          setActive(el.menu);
        }
      }
    });
  }, [pathname]);

  const menuHandler = (status: string) => {
    setActive(active === status ? "" : status);
  };

  return (
    <>
      <div className="logo-header">
        <Link to="/" className="anim-logo">
          <img src={IMAGES.logo} alt="/" />
        </Link>
      </div>
      <ul className={`nav navbar-nav navbar ms-lg-4 ${headerClass ? "white" : ""}`}>
        {MenuArr?.map(({ menu, to }, ind) => (
          <li
            key={ind}
            className={`${active === menu ? "active" : ""}`}
            ref={(node) => {
              if (node) {
                navRef.current.push(node);
              }
            }}
            onClick={() => {
              menuHandler(menu);
            }}
          >
            <Link to={to} style={{ color: active === menu ? "var(--primary)" : "" }}>
              {menu}
            </Link>
          </li>
        ))}
      </ul>
      <div className="dz-social-icon">
        <SocialLinks />
      </div>
    </>
  );
};

export default Menu;
