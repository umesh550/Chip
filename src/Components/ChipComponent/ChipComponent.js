// ChipComponent.js
import React, { useState, useEffect } from "react";

import Chip from "../Chip/Chip";
import InputField from "../InputField/InputField";
import ItemList from "../ItemList/ItemList";
import "./styles.css";

const ChipComponent = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [isInputFocused, setIsInputFocused] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const updateChips = () => {
    return selectedItems.map((item) => (
      <Chip key={item.id} item={item} removeChip={removeChip} />
    ));
  };

  const selectItem = (item) => {
    setSelectedItems([...selectedItems, item]);
    setItems(items.filter((i) => i.id !== item.id));
    setInputValue("");
  };

  const removeChip = (item) => {
    setSelectedItems(selectedItems.filter((i) => i.id !== item.id));
    setItems([...items, item]);
  };

  return (
    <div className="chip-component">
      <div id="chip-container" className="chip-container">
        {updateChips()}
        <InputField
          value={inputValue}
          onChange={setInputValue}
          onFocus={() => setIsInputFocused(true)}
          placeholder="Add New User..."
        />
      </div>
      <ItemList
        items={items}
        isInputFocused={isInputFocused}
        inputValue={inputValue}
        selectItem={selectItem}
        selectedItems={selectedItems}
      />
    </div>
  );
};

export default ChipComponent;
