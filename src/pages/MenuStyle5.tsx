import { Link } from "react-router-dom";
import { IMAGES } from "../constent/theme";
import CommonBanner from "../elements/CommonBanner";
import { useRef, useState } from "react";
import { MenuStyle5Arr } from "../elements/JsonData";

const Buttons = [
  { icon: "flaticon-fast-food", title: "ALL" },
  { icon: "flaticon-salad", title: "APPETIZERS AND SALAD" },
  { icon: "flaticon-coffee-cup", title: "Breakfast" },
  { icon: "flaticon-pot", title: "Combination" },
  { icon: "flaticon-cupcake", title: "KIDS MENU" },
  { icon: "flaticon-chef-hat", title: "MEAT ENTRES" },
  { icon: "flaticon-cuisine", title: "NONE ETHIOPIAN DISH" },
  { icon: "flaticon-room-service", title: "SEAFOOD" },
  { icon: "flaticon-meat", title: "TIBS" },
];

interface MenuFile {
  img: string;
  categery: string;
  name: string;
  price: string;
  info: string;
}

const MenuStyle5 = () => {
  const [active, setActive] = useState<number>(0);
  const [hoverActive, setHoverActive] = useState<number>();
  const [data, setData] = useState<MenuFile[]>(MenuStyle5Arr);
  const cardRef = useRef<HTMLLIElement[]>([]);

  const filterGallery = (name: string) => {
    if (cardRef.current) {
      cardRef.current.forEach((ele) => {
        if (ele) {
          ele.style.transform = "scale(0)";
        }
      });

      const updateItems = MenuStyle5Arr.filter((el: MenuFile) =>
        el.categery.includes(name)
      );

   
      setData(updateItems);

      setTimeout(() => {
        cardRef.current.forEach((ele) => {
          if (ele) {
            ele.style.transform = "scale(1)";
          }
        });
      }, 100);
    }
  };

  return (
    <div className="page-content bg-white">
      <CommonBanner
        img={IMAGES.images_bnr5}
        title="Menu"
        subtitle="Menu"
      />

      <section className="content-inner">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="site-filters style-1 clearfix">
                <ul className="filters">
                  {Buttons.map(({ icon, title }, ind) => (
                    <li
                      className={active === ind ? "active" : ""}
                      key={ind}
                      onClick={() => {
                        setActive(ind);
                        filterGallery(title);
                      }}
                    >
                      <Link to="#">
                        <span>
                          <i className={icon}></i>
                        </span>
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <ul id="masonry" className="row">
            {data.map(({ img, name, price, info }, ind) => (
              <li
                className="card-container col-lg-3 col-md-6 col-sm-6 m-b30"
                style={{ transition: "all .2s" }}
                key={ind}
                ref={(node) => {
                  if (node) {
                    cardRef.current.push(node);
                  }
                }}
              >
                <div
                  className={`dz-img-box style-2 box-hover ${
                    hoverActive === ind ? "active" : ""
                  }`}
                  onMouseEnter={() => {
                    setHoverActive(ind);
                  }}
                >
                  <div className="dz-media">
                    <img src={img} alt="/" />
                  </div>
                  <div className="dz-content">
                    <h4 className="dz-title">
                      <Link to="/product-detail">{name}</Link>
                    </h4>
                    <p>{info}</p>
                    <h5 className="dz-price text-primary">{price}</h5>
                    
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default MenuStyle5;
