import React, { useState } from "react";

function GenusDropdown() {
  const items = [
    { id: 1, name: "kedi" },
    { id: 2, name: "köpek" },
  ];

  const [dropdown, setDropdown] = useState(false);
  const [selectedItem, setSelectedItem] = useState({ name: "tür" });

  return (
    <div className="genusDropdown">
      <button className="genusButton" onClick={() => setDropdown(!dropdown)}>
        {selectedItem.name}
      </button>
      {dropdown && (
        <div className="genusDropdownMenu">
          {items.map((item) => (
            <div
              onClick={() => {
                setSelectedItem(item);
                setDropdown(false);
              }}
              key={item.id}
              className="genusItem"
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default GenusDropdown;
