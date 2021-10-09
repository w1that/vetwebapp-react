import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { VetService } from "../api/vetService";

function SearchBar() {
  const [input, setInput] = useState("");
  const [clinics, setClinics] = useState([]);
  const [visible, setVisible] = useState(false);
  const history = useHistory();

  function onBlurHandler() {
    setTimeout(() => {
      setVisible(false);
      setInput("");
    }, 500);
  }

  useEffect(() => {
    const vetService = new VetService();
    vetService
      .getByClinicNameContaining(input)
      .then((response) => setClinics(response.data.data));
  }, [input]);
  return (
    <div>
      <div>
        <input
          onFocus={() => setVisible(true)}
          value={input}
          onBlur={onBlurHandler}
          onChange={(e) => setInput(e.target.value)}
          placeholder="klinik ara"
          className="searchBar"
        ></input>

        {visible && clinics.length > 0 && input.length > 0 ? (
          <div className="foundClinics">
            {clinics.map((clinic) => (
              <div
                onClick={() => history.push(`/veterinary/${clinic.clinicName}`)}
                className="foundClinic"
              >
                {clinic.clinicName}
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default SearchBar;
