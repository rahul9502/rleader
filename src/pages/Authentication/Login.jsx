import React, { useState } from "react";
import "./Authentication.css";
import Spacer from "../../components/Spacer/Spacer";
import Input from "../../components/Form/Input";
import { useNavigate } from "react-router-dom";
import { navPaths } from "../../constants/paths";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handlePhoneNumberChange = (event) => {
    const newPhoneNumber = event.target.value;
    setPhoneNumber(newPhoneNumber);
  };

  const handleKeyDown = (event) => {
    // Allow only numeric characters and control keys like backspace
    // if (!/[0-9]/.test(event.key)) {
    //   event.preventDefault();
    // }
  };

  const handleSubmit = (event) => {
    navigate(navPaths.OTP_VERIFICATION);
  };

  return (
    <div className="login-div">
      <img src="/images/logo.png" />
      <Spacer y="25px" />
      <Input
        label="Enter mobile number"
        onChange={handlePhoneNumberChange}
        onKeyDown={handleKeyDown}
      />

      <div class="mb-3 form-check alerts-check">
        <input type="checkbox" class="form-check-input" checked />
        <label class="form-check-label " for="exampleCheck1">
          Send me reminders and alerts on
        </label>
      </div>

      <p className="agree-terms">
        By continuing , I agree to <span>Privacy Policy, T&C</span> and{" "}
        <span>Equifax Credit Information</span>
      </p>

      <button
        className="btn btn-primary get-started-btn"
        disabled={phoneNumber <= 10}
        onClick={handleSubmit}
      >
        Get started
      </button>
    </div>
  );
};

export default Login;
