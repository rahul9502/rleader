import React from "react";
import Layout from "../../components/Layout/Layout";
import PageTitle from "../../components/PageTitle/PageTitle";
import Button from "../../components/Button/Button";
import Input from "../../components/Form/Input";
import Spacer from "../../components/Spacer/Spacer";
import { useNavigate } from "react-router-dom";

const CreateGroup = () => {
  const navigate = useNavigate();

  const handleCreateGroup = () => {
    navigate("/add-member");
  };
  return (
    <Layout>
      <PageTitle pageName="Create Group" heading="Group Detaits" />
      <Spacer y="55px" />
      <Input label="Group Name" />
      <Spacer y="25px" />

      <Input label="Leader ID" />
      <Spacer y="25px" />
      <Button buttonName="Submit" onClick={handleCreateGroup} />
    </Layout>
  );
};

export default CreateGroup;
