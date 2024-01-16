// ItemList.js
import React from "react";
import "./styles.css";
import Profile from "../../assets/profile.png";
const ItemList = ({
  items,
  isInputFocused,
  inputValue,
  selectItem,
  selectedItems,
}) => {
  if (isInputFocused) {
    const filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    const remainingItems = filteredItems.filter(
      (item) => !selectedItems.includes(item)
    );
    return (
      <div className="item-list">
        {remainingItems.map((item) => (
          <div className="item" key={item.id} onClick={() => selectItem(item)}>
            <div className="user">
              <img src={Profile} alt="" />
              {item.name}
            </div>
            <div className="user-email">{item.email}</div>
          </div>
        ))}
      </div>
    );
  }

  return null;
};

export default ItemList;
