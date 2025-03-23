import { Link } from "react-router-dom";
import CommonBanner from "../elements/CommonBanner";
import { IMAGES } from "../constent/theme";
import { TestimonialArr } from "../elements/JsonData";

const Testimonial = () => {
  return (
    <div className="page-content bg-white">
      <CommonBanner
        img={IMAGES.images_bnr5}
        title="Testimonial"
        subtitle="Customer's Commen"
      />
      <section className="content-inner-1 overflow-hidden">
        <div className="container">
          <div className="row loadmore-content">
            {TestimonialArr.map(({ img, name, diraction, info }, ind) => {
              if (diraction == "left") {
                return (
                  <div className="col-lg-12 m-lg-b60 m-b30" key={ind}>
                    <div className="testimonial-2">
                      <div className="dz-media">
                        <img src={img} alt="/" />
                      </div>
                      <div className="testimonial-detail">
                        <div className="testimonial-text">
                          <p>
                          {info}
                          </p>
                        </div>
                        <div className="testimonial-info">
                          <h5 className="testimonial-name">{name}</h5>
                          <span className="testimonial-position">
                            Food Expert
                          </span>
                        </div>
                        <i className="flaticon-right-quote quote"></i>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className="col-lg-12 m-lg-b60 m-b30" key={ind}>
                    <div className="testimonial-2 right">
                      <div className="testimonial-detail">
                        <div className="testimonial-text">
                          <p>
                          {info}
                          </p>
                        </div>
                        <div className="testimonial-info">
                          <h5 className="testimonial-name">{name}</h5>
                          <span className="testimonial-position">
                            Food Expert
                          </span>
                        </div>
                        <i className="flaticon-right-quote quote"></i>
                      </div>
                      <div className="dz-media">
                        <img src={img} alt="/" />
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div className="text-center m-t10">
            <Link className="btn btn-primary dz-load-more btn-hover-2" to={"https://www.google.com/search?sca_esv=33073fab614d76a8&q=enat+restaurant&source=lnms&fbs=AEQNm0DzinMFLCeqQs_J6bMti2ao9DE73y_8shzprnOrc_FfyCPLV07j7-8Nq5irjpLAKZvU5W8AWiDUmjaGP8fn6FWDaVs7AyrzcLz97mDR84ycOvMKN3Um9-gt3Pn9hmvAKqK2PO1fCsjpEjAHref_26Dy10oCN8i09b52Ut87oORvHZ_AFIHt4bvnJElliniZXYpj9XI2_FY32d3sHJClHM2GFgaLNA&sa=X&ved=2ahUKEwinntCcqI2JAxWzMVkFHabKGXEQ0pQJegQIDBAB&biw=1358&bih=650&dpr=1#lrd=0x89b7b3aead6f364b:0xb63a16a17550ce6b,1,,,,"}>
              Load More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
