import React from "react";
import "./Form.css";

const Textarea = ({ label }) => {
  return (
    <div class="form-react-bootstrap">
      <div class="form-floating">
        <textarea
          id="message"
          class="form-control"
          placeholder={label}
          rows="6"
        ></textarea>
        <label for="message" class="form__label">
          {label}
        </label>
      </div>
    </div>
  );
};

export default Textarea;
