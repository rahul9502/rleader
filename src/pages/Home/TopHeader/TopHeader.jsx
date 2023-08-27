import React from "react";
import "./TopHeader.css";
import { BsFillCircleFill } from "react-icons/bs";

const TopHeader = () => {
  return (
    <>
      <div class="d-flex justify-content-start">
        <div>
          <div class="good-morning">
            <img src="/images/icon-morning.png" /> Good Morning
          </div>
          <div class="name">Kuntla Vinod Kumar</div>
        </div>
        <div className="active-now">
          <p>
            Active Now <BsFillCircleFill />
          </p>
          <h4>2.5k people</h4>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
