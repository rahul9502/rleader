import React from "react";
import Layout from "../../components/Layout/Layout";
import "./WarRoom.css";
import { useNavigate } from "react-router-dom";
import { navPaths } from "../../constants/paths";

const WarRoom = () => {
  const navigate = useNavigate();

  const handleMoreNews = () => {
    navigate(navPaths.NEWS_MORE);
  };

  const handleBack = () => {
    navigate(navPaths.HOME);
  };

  return (
    <Layout>
      <div class="war-room-heading">
        <div className="back-arrow" onClick={handleBack}>
          <img src="/images/back-arrow.png" />
        </div>
        <h2>War Room</h2>
      </div>

      <table class="table table-bordered mt-4 news-table">
        <tbody>
          <tr>
            <td>
              <p>Total News</p>
              <h3>100</h3>
            </td>
            <td>
              <p>Political</p>
              <h3 style={{ color: "var(--main-color)" }}>50</h3>
            </td>
            <td>
              <p>BJP</p>
              <h3 style={{ color: "#FF5C00" }}>10</h3>
            </td>
            <td>
              <p>TRS</p>
              <h3 style={{ color: "#FF00B8" }}>30</h3>
            </td>
            <td>
              <p>Congress</p>
              <h3 style={{ color: "#FF5C00" }}>10</h3>
            </td>
          </tr>
        </tbody>
      </table>
      <table class="table partywise-news-count">
        <thead>
          <tr>
            <th scope="col">Party</th>
            <th scope="col">Positive</th>
            <th scope="col">Negetive</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>TRS - 30</td>
            <td>10</td>
            <td>20</td>
          </tr>
          <tr>
            <td>BJP - 10</td>
            <td>02</td>
            <td>08</td>
          </tr>
          <tr>
            <td>Congress - 05</td>
            <td>02</td>
            <td>03</td>
          </tr>
          <tr>
            <td>Congress sub - 05</td>
            <td>04</td>
            <td>01</td>
          </tr>
        </tbody>
      </table>

      <h2 className="news-heading">Find your all Leaders News</h2>

      <div className="d-flex justify-content-between news-div">
        <div className="">
          <img src="/images/news1.png" />
        </div>
        <div className="">
          <h3>"Scrapping Of Article 370 A Historic"</h3>
          <p>
            t is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout.
          </p>
          <span onClick={handleMoreNews}>Read More..</span>
        </div>
      </div>

      <div className="d-flex justify-content-between news-div">
        <div className="">
          <img src="/images/news1.png" />
        </div>
        <div className="">
          <h3>"Scrapping Of Article 370 A Historic"</h3>
          <p>
            t is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout.
          </p>
          <span onClick={handleMoreNews}>Read More..</span>
        </div>
      </div>

      <div className="d-flex justify-content-between news-div">
        <div className="">
          <img src="/images/news1.png" />
        </div>
        <div className="">
          <h3>"Scrapping Of Article 370 A Historic"</h3>
          <p>
            t is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout.
          </p>
          <span onClick={handleMoreNews}>Read More..</span>
        </div>
      </div>

      <div className="d-flex justify-content-between news-div">
        <div className="">
          <img src="/images/news1.png" />
        </div>
        <div className="">
          <h3>"Scrapping Of Article 370 A Historic"</h3>
          <p>
            t is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout.
          </p>
          <span onClick={handleMoreNews}>Read More..</span>
        </div>
      </div>

      <div className="d-flex justify-content-between news-div">
        <div className="">
          <img src="/images/news1.png" />
        </div>
        <div className="">
          <h3>"Scrapping Of Article 370 A Historic"</h3>
          <p>
            t is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout.
          </p>
          <span onClick={handleMoreNews}>Read More..</span>
        </div>
      </div>

      <div className="chat-icon-div">
        <img src="/images/chat-icon.png" className="chat-icon" />
      </div>
    </Layout>
  );
};

export default WarRoom;
