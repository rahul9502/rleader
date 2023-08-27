import React from "react";
import Layout from "../../components/Layout/Layout";
import Input from "../../components/Form/Input";
import Spacer from "../../components/Spacer/Spacer";
import Button from "../../components/Button/Button";
import "./ReportProblem.css";
import Textarea from "../../components/Form/Textarea";
import { useNavigate } from "react-router-dom";
import { navPaths } from "../../constants/paths";

const ReportProblem = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(navPaths.HOME);
  };

  return (
    <Layout>
      <div class="war-room-heading group-div">
        <div className="back-arrow" onClick={handleBack}>
          <img src="/images/back-arrow.png" />
        </div>
        <h2>Problems</h2>
      </div>
      <div className="divider"></div>
      <Spacer y={20} />
      <h3 className="report-heading">Report a Problem</h3>
      <div className="mt-4">
        <Textarea label="Description" />
        <Spacer y="25px" />

        <Input label="Name" />
        <Spacer y="25px" />

        <Input label="Village" />
        <Spacer y="25px" />

        <Input label="Phone Number" />
        <Spacer y="25px" />

        <div className="d-flex mt-4">
          <Button buttonName="Clear" extraClass="me-3" />
          <Button buttonName="Submit" bgColor="#438B0A" />
        </div>
      </div>
    </Layout>
  );
};

export default ReportProblem;
