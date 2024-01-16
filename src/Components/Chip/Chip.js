import React from "react";
import "./styles.css";
import Profile from "../../assets/profile.png";
const Chip = ({ item, removeChip }) => (
  <div className="chip">
    <div className="profile">
      <img src={Profile} alt="" />
      <span>{item.name}</span>
    </div>
    <button onClick={() => removeChip(item)}>X</button>
  </div>
);

export default Chip;
