import React, { useEffect } from "react";
import Slider from "./Slider";
import MemberGroup from "./MemberGroup";
import AroundYou from "./AroundYou/AroundYou";
import Layout from "../../components/Layout/Layout";
import TopHeader from "../../components/TopHeader/TopHeader";
import Spacer from "../../components/Spacer/Spacer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  return (
    <Layout>
      <TopHeader />
      <Slider />
      <MemberGroup />
      <AroundYou />
    </Layout>
  );
};

export default Home;
