import React from "react";
import Layout from "../../components/Layout/Layout";
import PageTitle from "../../components/PageTitle/PageTitle";
import "./GroupMembers.css";
import { useNavigate } from "react-router-dom";

const GroupMembers = () => {
  const navigate = useNavigate();

  const handleAddMember = () => {
    navigate("/add-member");
  };

  return (
    <Layout>
      <PageTitle
        pageName="Vanasthalipuram village"
        heading="Group member"
        subtext="Sai vikram’s group"
        add
        handleAdd={handleAddMember}
      />

      <div className="mt-5">
        <div className="member-div">
          <img src="/images/member_image.png" />
          <div className="">
            <p>Darrell Steward</p>
            <span>(671) 555-0110</span>
          </div>
        </div>

        <div className="member-div">
          <img src="/images/member_image.png" />
          <div className="">
            <p>Theresa Webb</p>
            <span>(629) 555-0129</span>
          </div>
        </div>

        <div className="member-div">
          <img src="/images/member_image.png" />
          <div className="">
            <p>Cody Fisher</p>
            <span>(270) 555-0117</span>
          </div>
        </div>

        <div className="member-div">
          <img src="/images/member_image.png" />
          <div className="">
            <p>Darrell Steward</p>
            <span>(671) 555-0110</span>
          </div>
        </div>

        <div className="member-div">
          <img src="/images/member_image.png" />
          <div className="">
            <p>Darrell Steward</p>
            <span>(671) 555-0110</span>
          </div>
        </div>

        <div className="member-div">
          <img src="/images/member_image.png" />
          <div className="">
            <p>Darrell Steward</p>
            <span>(671) 555-0110</span>
          </div>
        </div>

        <div className="member-div">
          <img src="/images/member_image.png" />
          <div className="">
            <p>Darrell Steward</p>
            <span>(671) 555-0110</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GroupMembers;
