import { useContext, useEffect, useMemo } from "react";
import MainBanner from "../components/MainBanner";
import MenuSlider from "../components/MenuSlider";
//import OurBlog from "../components/OurBlog";
//import TeamCarosel from "../components/TeamCarosel";
import Testymonial from "../components/Testymonial";
import { IMAGES } from "../constent/theme";
import { Context } from "../context/AppContext";
import HomeImageBox from "../elements/HomeImageBox";
import HomeSpacialMenu from "../elements/HomeSpacialMenu";
import Reservation from "../elements/Reservation";

const Home = () => {
  const { setHeaderClass } = useContext(Context);
  useEffect(() => {
    document.body.setAttribute("data-color", "color_1");
  }, []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useMemo(() => setHeaderClass(false), []);
  return (
    <div className="page-content bg-white">
      <MainBanner />
      <section className="content-inner bg-white section-wrapper-2 overflow-hidden">
        <div className="container">
          <div className="section-head text-center">
            <h2 className="title wow flipInX">Special Menu</h2>
          </div>
          <HomeSpacialMenu />
        </div>
        
        <img className="bg2 dz-parallax" src={IMAGES.background_pic3} alt="/" />
      </section>
      <section className="content-inner-1 section-wrapper-3 overflow-hidden">
        <div className="container">
          

          <HomeImageBox />
        </div>
        <img className="bg1 dz-parallax" src={IMAGES.background_pic3} alt="/" />
        <img className="bg2 dz-parallax" src={IMAGES.background_pic4} alt="/" />
      </section>
      <section className="content-inner-1 bg-white overflow-hidden pt-sm-0">
      
        <div className="container">
        
          <div className="section-head text-center">
            <h2 className="title wow flipInX">From Our Menu</h2>
          </div>
          <MenuSlider />
        </div>
        
      </section>

      <section
        className="content-inner-1 section-wrapper-1 bg-parallax"
        style={{
          backgroundImage: `url(${IMAGES.background_pic1})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container">
          <div className="section-head text-center">
            <h2 className="title text-white wow flipInX">Reservation</h2>
            <Reservation />
          </div>
        </div>
      </section>
      <section className="content-inner-1 section-wrapper-2 right overflow-hidden">
        <div className="container">
          <div className="section-head text-center">
            <h2 className="title wow flipInX">Customer's Review</h2>
          </div>
          <Testymonial />
        </div>
        
      </section>
      
      <div className="map-iframe style-1">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3108.494648790286!2d-77.14502442472705!3d38.82113107174032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b3aead6f364b%3A0xb63a16a17550ce6b!2sEnat%20Fine%20Ethiopian%20Cuisine!5e0!3m2!1sen!2sus!4v1728887304509!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Home;
