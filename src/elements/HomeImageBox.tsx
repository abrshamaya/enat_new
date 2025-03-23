import { useState } from "react";
import { HomeImageBoxArr } from "./JsonData";

const HomeImageBox = () => {
  const [activebox, setActivebox] = useState<number>(1); // This is used, so keep it
  return (
    <>
      <div className="section-head text-center">
        <h2 className="title wow flipInX">Quality Services</h2>
      </div>

      <div className="icon-wrapper1">
        <div className="row wow fadeInUp">
          {HomeImageBoxArr.map(({ img2, icon, title, info }, ind) => (
            <div className="col-lg-3 col-md-6 col-sm-6" key={ind}>
              <div
                onMouseEnter={() => {
                  setActivebox(ind);
                }}
                className={`icon-bx-wraper style-1 box-hover center ${
                  activebox === ind ? "active" : ""
                }`}
                style={{ backgroundImage: `url(${img2})` }}
              >
                <div className="inner-content">
                  <div className="icon-bx m-b25">
                    <span className="icon-cell icon-md">
                      <i className={icon}></i>
                    </span>
                  </div>
                  <div className="icon-content">
                    <h5 className="dz-title">{title}</h5>
                    <p>{info}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeImageBox;
