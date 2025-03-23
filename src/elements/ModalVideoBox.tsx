import { useState } from "react";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
import { IMAGES } from "../constent/theme";

const ModalVideoBox = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 1 }}
        isOpen={open}
        videoId="hRaZbyLi8z0"
        onClose={() => setOpen(false)}
      />
      <section className="content-inner pb-0">
        <div className="container">
          <div className="section-head text-center">
            <h2 className="title">Welcome To Our Restaurant</h2>
            <p className="about-p">
            <br/>At Enat Restaurant, located near Landmark Plaza in Alexandria, We proudly bring you the traditional flavors of Ethiopia with a modern touch. Inspired by the Amharic word for "mother," Enat was created as a family-oriented space where guests can enjoy authentic Ethiopian cuisine. <br/><br/> Our restaurant is a cozy blend of home-like comfort and modern aesthetics, complete with plasma screen TVs and beautiful wood furniture.

            Like the warmth of a mother's cooking, we aim to deliver meals that feel like home, making every bite a connection to our heritage and hospitality. <br/><br/>


            </p>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="about-media dz-media rounded-md">
                <img src={IMAGES.background_pic11} alt="/" />
                <Link
                  className="video video-btn popup-youtube"
                  to={"#"}
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  <i className="fa-solid fa-play"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ModalVideoBox;
