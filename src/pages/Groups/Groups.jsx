import React from "react";
import Layout from "../../components/Layout/Layout";
import { BsFillCircleFill } from "react-icons/bs";
import "./Groups.css";
import Spacer from "../../components/Spacer/Spacer";
import { useNavigate } from "react-router-dom";
import { navPaths } from "../../constants/paths";

const Groups = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(navPaths.HOME);
  };

  const handleGoActiveMembers = () => {
    navigate(navPaths.ACTIVE_MEMBERS);
  };

  return (
    <Layout>
      <div class="d-flex justify-content-start group-div">
        <div class="war-room-heading">
          <div className="back-arrow" onClick={handleBack}>
            <img src="/images/back-arrow.png" />
          </div>
          <h2>My Family</h2>
        </div>
        <div className="active-now">
          <p>
            Active Now <BsFillCircleFill />
          </p>
          <h4>2.5k people</h4>
        </div>
      </div>
      <div className="divider"></div>
      <Spacer y={20} />
      <div>
        <div class="watch-top-members-group mb-2">Watch top Members group</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="my-group">
              <img src="/images/group-icon.png" />
            </div>
            <div className="group-name">
              <img src="/images/group-img.png" />
              Kuntla Vinod
            </div>
            <span class="group-members">
              22k <span>Members</span>
            </span>
          </li>

          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="my-group">
              <img src="/images/group-icon.png" />
            </div>
            <div className="group-name">
              <img src="/images/group-img.png" /> Kuntla Vinod
            </div>
            <span class="group-members">
              11k <span>Members</span>
            </span>
          </li>

          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="my-group">
              <img src="/images/group-icon.png" />
            </div>
            <div className="group-name">
              <img src="/images/group-img.png" /> Kuntla Vinod
            </div>
            <span class="group-members">
              1k <span>Members</span>
            </span>
          </li>

          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="my-group">
              <img src="/images/group-icon.png" />
            </div>
            <div className="group-name">
              <img src="/images/group-img.png" /> Kuntla Vinod
            </div>
            <span class="group-members">
              11k <span>Members</span>
            </span>
          </li>
        </ul>
      </div>
      <div className="location-active" onClick={handleGoActiveMembers}>
        <div className="d-flex align-items-center">
          <img src="/images/location-icon.png" />
          <p>Yellareddy</p>
        </div>
        <div className="">8,000+</div>
      </div>

      <div className="location-active">
        <div className="d-flex align-items-center">
          <img src="/images/location-icon.png" />
          <p>Thadwai</p>
        </div>
        <div className="">3,500+</div>
      </div>

      <div className="location-active">
        <div className="d-flex align-items-center">
          <img src="/images/location-icon.png" />
          <p>Gandhari</p>
        </div>
        <div className="">6,670+</div>
      </div>

      <div className="location-active">
        <div className="d-flex align-items-center">
          <img src="/images/location-icon.png" />
          <p>Lingampalli</p>
        </div>
        <div className="">5,000+</div>
      </div>

      <div className="location-active">
        <div className="d-flex align-items-center">
          <img src="/images/location-icon.png" />
          <p>Lingampet</p>
        </div>
        <div className="">450+</div>
      </div>
    </Layout>
  );
};

export default Groups;
