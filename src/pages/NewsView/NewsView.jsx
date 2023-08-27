import React from "react";
import Layout from "../../components/Layout/Layout";
import "./NewsView.css";
import { useNavigate } from "react-router-dom";

const NewsView = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/war-room");
  };
  return (
    <Layout>
      <div class="war-room-heading">
        <div className="back-arrow" onClick={handleBack}>
          <img src="/images/back-arrow.png" />
        </div>
        <h2>News</h2>
      </div>

      <div className="news-view-div">
        <h3>Scrapping Of Article 370 A Historic</h3>
        <img src="/images/news-view.png" />

        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text.
        </p>

        <img className="social-icons" src="/images/social-icons.png" />
      </div>
    </Layout>
  );
};

export default NewsView;
