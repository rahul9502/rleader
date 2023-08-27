import React from "react";
import Layout from "../../components/Layout/Layout";
import { BsFillCircleFill } from "react-icons/bs";
import "./ActiveMembers.css";
import Spacer from "../../components/Spacer/Spacer";
import { useNavigate } from "react-router-dom";

const ActiveMembers = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/groups");
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

      <div className="location-heading">
        <p>
          <img src="/images/location-icon.png" />
          Yellareddy
        </p>
      </div>

      <table className="table table-striped atcive-member-list">
        <thead>
          <tr>
            <th>
              <img src="/images/user.png" />
            </th>
            <th>Member ID</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src="/images/user.png" />
            </td>
            <td>ID-0252</td>
            <td>6,525+</td>
          </tr>
          <tr>
            <td>
              <img src="/images/user.png" />
            </td>
            <td>ID-0252</td>
            <td> 525+</td>
          </tr>
          <tr>
            <td>
              <img src="/images/user.png" />
            </td>
            <td>ID-0252</td>
            <td>1,511+</td>
          </tr>
          <tr>
            <td>
              <img src="/images/user.png" />
            </td>
            <td>ID-0252</td>
            <td>5,000+</td>
          </tr>
          <tr>
            <td>
              <img src="/images/user.png" />
            </td>
            <td>ID-0252</td>
            <td>857+</td>
          </tr>
          <tr>
            <td>
              <img src="/images/user.png" />
            </td>
            <td>ID-0252</td>
            <td>1,500+</td>
          </tr>
          <tr>
            <td>
              <img src="/images/user.png" />
            </td>
            <td>ID-0252</td>
            <td>8,000+</td>
          </tr>
          <tr>
            <td>
              <img src="/images/user.png" />
            </td>
            <td>ID-0252</td>
            <td>3,000+</td>
          </tr>
          <tr>
            <td>
              <img src="/images/user.png" />
            </td>
            <td>ID-0252</td>
            <td>3,300+</td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
};

export default ActiveMembers;
