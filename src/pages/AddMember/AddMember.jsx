import React from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import Layout from "../../components/Layout/Layout";
import Input from "../../components/Form/Input";
import Button from "../../components/Button/Button";
import Spacer from "../../components/Spacer/Spacer";
import ImagesUpload from "../../components/ImageUpload/ImagesUpload";
import { useNavigate } from "react-router-dom";

const AddMember = () => {
  const navigate = useNavigate();

  const handleAddMember = () => {
    navigate("/group-members");
  };

  return (
    <Layout>
      <PageTitle pageName="Add A Member" heading="Member Details" />

      <div className="mt-5">
        <ImagesUpload name="trophies" />
        <Input label="Name" />
        <Spacer y="25px" />

        <Input label="Mobile Number" />
        <span className="send-otp">Send OTP</span>
        <Spacer y="25px" />

        <Input label="OTP" />
        <Spacer y="25px" />

        <Input label="Village Name" />
        <Spacer y="25px" />

        <Input label="Description" />
        <Spacer y="25px" />

        <Button buttonName="Add" onClick={handleAddMember} />
      </div>
    </Layout>
  );
};

export default AddMember;
