import { Link } from "react-router-dom";
import { IMAGES } from "../constent/theme";
import { useRef } from "react";

const Footer = () => {
  const heartRef = useRef<HTMLSpanElement | null>(null);
  return (
    <>
      <footer className="site-footer  style-1 bg-dark" id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-5 col-md-12">
                <div className="dz-form-card bg-primary">
                  <div className="section-head">
                    <h4 className="title m-0">Contact us</h4>
                    <p className="m-t10">
                    Whether you have questions, need reservations, or just want to chat about our menu, we're here to help. We look forward to hearing from you!
                    </p>
                  </div>
                  <form className="dzForm dezPlaceAni">
                    <input
                      type="hidden"
                      className="form-control"
                      name="dzToDo"
                      value="Contact"
                    />
                    <input
                      type="hidden"
                      className="form-control"
                      name="reCaptchaEnable"
                      value="0"
                    />
                    <div className="dzFormMsg"></div>
                    <div className="row">
                      <div className="col-lg-12 col-md-12">
                        <div className="input-group input-line">
                          <input
                            name="dzName"
                            required
                            type="text"
                            className="form-control"
                            placeholder="Your Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="input-group input-line">
                          <input
                            name="dzEmail"
                            required
                            type="text"
                            className="form-control"
                            placeholder="Email Address"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="input-group input-line">
                          <input
                            name="dzOther[Subject]"
                            required
                            type="text"
                            className="form-control"
                            placeholder="Subject"
                          />
                        </div>
                      </div>
                      <div className="col-sm-12 ">
                        <div className="input-group input-line">
                          <textarea
                            name="dzMessage"
                            required
                            className="form-control"
                            placeholder="Message"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <button
                          type="button"
                          name="submit"
                          value="submit"
                          className="btn btn-md btn-white btn-hover-1"
                        >
                          <span>Send Message</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-5 wow fadeInUp">
                <div className="widget widget_getintuch">
                  <h5 className="footer-title">Contact</h5>
                  <ul>
                    <li>
                      <i className="flaticon-placeholder"></i>
                      <p>
                        4709 N Chambliss St, Alexandria, VA 22312
                      </p>
                    </li>
                    <li>
                      <i className="flaticon-telephone"></i>
                      <p>
                        (703) 642-3628
                        
                      </p>
                    </li>
                    <li>
                      <i className="flaticon-email-1"></i>
                      <p>
                        info@enat.com
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-3 col-6 wow fadeInUp">
                <div className="widget widget_services">
                  <h5 className="footer-title">Our Links</h5>
                  <ul>
                    <li>
                      <Link to="/">
                        <span>Home</span>
                      </Link>
                    </li>
                    <li>
                    <Link to="/our-menu-5">
                      <span>Our Menu</span>
                    </Link>
                  </li>
                    <li>
                      <Link to="/about-us">
                        <span>About Us</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services">
                        <span>Services</span>
                      </Link>
                    </li>
                    
                    
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-3 col-6 wow fadeInUp">
                <div className="widget widget_services">
                  <h5 className="footer-title">Help Center</h5>
                  <ul>
                    <li>
                      <Link to="/faq">
                        <span>FAQ</span>
                      </Link>
                    </li>
                    <li>
                    <Link to="/contact-us">
                      <span>Seat Reservation</span>
                    </Link>
                  </li>
                    <li>
                      <Link to="/testimonial">
                        <span>Testimonials</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact-us">
                        <span>Contact Us</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="footer-bottom">
            <div className="row">
              <div className="col-xl-6 col-md-6 text-md-start">
                <p>Copyright 2023 All rights reserved.</p>
              </div>
              <div className="col-xl-6 col-md-6 text-md-end">
                <span className="copyright-text">
                  Crafted With{" "}
                  <span
                    className="heart"
                    ref={heartRef}
                    onClick={() => {
                      heartRef.current?.classList.toggle("heart-blast");
                    }}
                  ></span>{" "}
                  by{" "}
                  <Link to="https://rasdev.netlify.app" target="_blank">
                    RasDevelopment
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        <img className="bg1 dz-move" src={IMAGES.background_pic5} alt="/" />
        <img className="bg2 dz-move" src={IMAGES.background_pic6} alt="/" />
      </footer>
    </>
  );
};

export default Footer;
