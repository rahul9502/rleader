import React from "react";
import Layout from "../../components/Layout/Layout";
import Slider from "../Home/Slider";
import { useNavigate } from "react-router-dom";
import { navPaths } from "../../constants/paths";

const Hotspot = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(navPaths.HOME);
  };
  return (
    <Layout>
      <div class="war-room-heading">
        <div className="back-arrow" onClick={handleBack}>
          <img src="/images/back-arrow.png" />
        </div>
        <h2>Hotspot</h2>
      </div>
      <Slider />

      <div className="mt-4">
        <img src="/images/map.png" width={"100%"} />
      </div>

      <div className="mt-4">
        <img src="/images/graph.png" width={"100%"} />
      </div>
    </Layout>
  );
};

export default Hotspot;
