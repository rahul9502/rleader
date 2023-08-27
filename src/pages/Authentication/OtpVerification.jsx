import React, { useState } from "react";
import "./Authentication.css";
import Spacer from "../../components/Spacer/Spacer";
import OTPInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import { navPaths } from "../../constants/paths";

const OtpVerification = () => {
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();

  const handleVerifyNumber = async (values) => {
    navigate(navPaths.HOME);
  };

  return (
    <div className="otp-div">
      <Spacer y="50px" />
      <h2 className="otp-heading">Enter 6 digit OTP</h2>
      <p className="otp-sent-number">
        We just sent a OTP to your mobile number <br />
        +91 9010110250
      </p>
      <div className="opt-input-div">
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          inputType="number"
          renderInput={(props) => <input {...props} />}
          className="otp-input"
          containerStyle={{ justifyContent: "center" }}
        />
        <Spacer y="10px" />
        <p className="waiting-otp">
          Waiting for the OTP... <span>15 sec</span>
        </p>
      </div>

      <span className="resend-otp">Resend OTP</span>

      <button
        className="btn btn-primary get-started-btn"
        disabled={otp === "" || (otp && otp.length < 6)}
        onClick={handleVerifyNumber}
      >
        Verify OTP
      </button>
    </div>
  );
};

export default OtpVerification;
