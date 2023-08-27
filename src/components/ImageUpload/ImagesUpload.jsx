import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { AiFillCloseCircle, AiOutlinePlus } from "react-icons/ai";
import "./ImagesUpload.css";

const ImagesUpload = (props) => {
  const [singleimagePreview, setSingleimagePreview] = useState("");

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setSingleimagePreview(imageUrl);
  };

  const image =
    singleimagePreview !== ""
      ? singleimagePreview
      : "https://cdn-icons-png.flaticon.com/512/10322/10322850.png";

  return (
    <Row className="images-upload-main">
      <div>
        <Row>
          <div className="preview-thumbnail-div ">
            <div className="thumbnail-img">
              <img src={image} alt="" />
            </div>
          </div>
          <div className="upload-btn-wrapper ">
            <div className="">
              <img src="/images/upload_image.png" />
              <p>Upload Image</p>
            </div>
            <input type="file" onChange={handleFileUpload} />
          </div>
        </Row>
      </div>
    </Row>
  );
};

export default ImagesUpload;
