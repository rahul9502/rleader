import React from "react";
import { BsFillCircleFill } from "react-icons/bs";
import Layout from "../../components/Layout/Layout";
import Spacer from "../../components/Spacer/Spacer";
import Slider from "../Home/Slider";
import "./MyGroup.css";
import TopHeader from "../../components/TopHeader/TopHeader";
import { useNavigate } from "react-router-dom";
import { navPaths } from "../../constants/paths";

const MyGroup = () => {
  const navigate = useNavigate();

  const handleCreateGroup = () => {
    navigate(navPaths.ADD_MEMBER);
  };
  return (
    <Layout>
      <TopHeader backArrow={true} />

      <Slider />

      <div className="create-group">
        <img src="/images/mygroup.png" className="cg-img" />
        <h2 className="no-group-text">There are no groups created yet</h2>
        <p className="click-button-text">Click button to create your group</p>
        <button className="btn create-group-btn" onClick={handleCreateGroup}>
          Create Group
        </button>
      </div>
    </Layout>
  );
};

export default MyGroup;
