import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { GenusService } from "../api/genusService";
import { setGenus } from "../redux/petSlice";

function GenusDropdown() {
  const [genuses, setGenuses] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    const genusService = new GenusService()
    genusService.getAll().then(response=> setGenuses(response.data.data))
  }, [])

  const [dropdown, setDropdown] = useState(false);
  const [selectedItem, setSelectedItem] = useState({ name: "tür" });

  return (
    <div className="genusDropdown">
      <button className="genusButton" onClick={() => setDropdown(!dropdown)}>
        {selectedItem.name}
      </button>
      {dropdown && (
        <div className="genusDropdownMenu">
          {genuses.map((item) => (
            <div
              onClick={() => {
                setSelectedItem(item);
                dispatch(setGenus(item))
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
