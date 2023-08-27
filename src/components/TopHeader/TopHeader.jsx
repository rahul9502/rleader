import React from "react";
import { BsFillCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./TopHeader.css";

const TopHeader = ({ backArrow }) => {
  const nav = useNavigate();
  return (
    <div class="d-flex justify-content-start top-header">
      {backArrow ? (
        <div className="back-arrow" onClick={() => nav(-1)}>
          <img src="/images/back-arrow.png" />
        </div>
      ) : (
        <div>
          <div class="good-morning">
            <img src="/images/icon-morning.png" /> Good Morning
          </div>
          <div class="name">Kuntla Vinod Kumar</div>
        </div>
      )}

      <div className="active-now">
        <p>
          Active Now <BsFillCircleFill />
        </p>
        <h4>2.5k people</h4>
      </div>
    </div>
  );
};

export default TopHeader;
