import React from "react";
import "./styles.css";
const InputField = ({ value, onChange, onFocus }) => (
  <input
    type="text"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    onFocus={onFocus}
    placeholder="Add New User"
  />
);

export default InputField;
