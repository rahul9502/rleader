import React from "react";
import "./MemberGroup.css";

const MemberGroup = () => {
  return (
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
            351 <span>Members</span>
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
            351 <span>Members</span>
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
            351 <span>Members</span>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default MemberGroup;
