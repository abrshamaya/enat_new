import { Link } from "react-router-dom";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { MainBannerArr } from "../elements/JsonData";
import { EffectFade, Thumbs, Navigation, Pagination } from "swiper/modules";
import { IMAGES } from "../constent/theme";
import { useRef, useState, ReactNode } from "react";

// Define the types for the 'p1' component
interface P1Props {
  children: ReactNode;
  className?: string;
}

const P1: React.FC<P1Props> = ({ children, className }) => {
  return (
    <p className={className} style={{ color: "white" }}>
      {children}
    </p>
  ); // Using a regular <p> element
};

const MainBanner = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  const [thumbsSwiper, _setThumbsSwiper] = useState<any>();
  const ref = useRef<SwiperRef | null>(null);
  const pagination = {
    clickable: true,
    el: ".main-slider-pagination",
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <div className="main-bnr-one">
      <Swiper
        className="main-slider-1 swiper"
        slidesPerView={1}
        loop={true}
        effect={"fade"}
        modules={[EffectFade, Thumbs, Navigation, Pagination]}
        pagination={pagination}
        navigation={{
          prevEl: ".main-button-prev",
          nextEl: ".main-button-next",
        }}
        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
        onSwiper={(swiper) => {
          if (ref.current) ref.current.swiper = swiper;
        }}
      >
        {MainBannerArr.map(
          ({ img, subtitle, title, title2, title3, text }, ind) => (
            <SwiperSlide className="swiper-slide" key={ind}>
              <div className="banner-inner">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-xl-7 col-lg-7 col-md-7">
                      <div className="banner-content">
                        <span className="sub-title">{subtitle}</span>
                        <h1 className="title  ">
                          {title}
                          <br />
                          {title2}{" "}
                          <span className="text-primary">{title3}</span>
                        </h1>

                        <P1 className="wow fadeInUp">{text}</P1>
                        <div className="banner-btn d-flex align-items-center wow fadeInUp">
                          <Link
                            to="/contact-us"
                            className="btn btn-primary btn-md shadow-primary m-r30 btn-hover-1"
                          >
                            <span>Book a Table</span>
                          </Link>
                          <Link
                            to="/our-menu-5"
                            className="btn btn-outline-primary btn-md shadow-primary btn-hover-1"
                          >
                            <span>Our Menu</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-5">
                      <div className="banner-media wow fadeInRight">
                        <img src={img} alt="/" />
                      </div>
                    </div>
                  </div>
                </div>
                <img src={IMAGES.main_slide_img3} className="img1" alt="/" />
                <img src={IMAGES.main_slide_img1} className="img2" alt="/" />
                <img src={IMAGES.main_slide_img2} className="img3" alt="/" />
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
};

export default MainBanner;
