import React from "react";
import { useNavigate } from "react-router-dom";
import "./PageTitle.css";

const PageTitle = ({ pageName, heading, add, subtext, handleAdd }) => {
  const nav = useNavigate();
  return (
    <>
      <div class="page-title-div">
        <div className="back-arrow" onClick={() => nav(-1)}>
          <img src="/images/back-arrow.png" />
        </div>
        <div>
          <div className="page-title">{pageName}</div>
          <div className="sub-text">{subtext}</div>
        </div>
        {add ? (
          <div className="add-text" onClick={handleAdd}>
            <img src="/images/plus-icon.png" />
            Add
          </div>
        ) : (
          <div className="cancel-text">Cancel</div>
        )}
      </div>
      <div className="header-title">{heading}</div>
    </>
  );
};

export default PageTitle;
