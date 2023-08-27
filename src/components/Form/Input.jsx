import React from "react";

const Input = ({ label, onChange, onKeyDown }) => {
  return (
    <div class="form-react-bootstrap">
      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder={label}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <label for="name">{label}</label>
      </div>
    </div>
  );
};

export default Input;
