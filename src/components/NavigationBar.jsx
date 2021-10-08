import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { setCurrentUser } from "../redux/userSlice";
import SearchBar from "./SearchBar";

function NavigationBar() {
  const user = useSelector((state) => state.user.currentUser);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const selectedUserType = useSelector((state) => state.user.selectedUserType);
  function logoutHandler() {
    dispatch(setCurrentUser({}));
    // localStorage.removeItem("currentUser");
    history.push("/");
  }
  return (
    <div>
      <div className="navibar">
        <Link className="routerLinkRemove" to="/mainpage">
          <h1 className="logoHeader">Pet Vet app</h1>
        </Link>
        {/* {user.firstName&&  */}
        {selectedUserType === 0 && <SearchBar></SearchBar>}

        <div
          onClick={() => setDropdownVisible(!dropdownVisible)}
          onBlur={() => setDropdownVisible(false)}
          className="profileField"
        >
          {selectedUserType === 0 && (
            <img
              alt="alt"
              className="naviImage"
              src={
                user.image
                  ? user.image.imagePath
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
              }
            ></img>
          )}
          {selectedUserType === 1 && (
            <img
              alt="alt"
              className="naviImage"
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
              }
            ></img>
          )}
          <h3 className="usernameText">{user.username}</h3>
        </div>
      </div>
      <div
        style={
          dropdownVisible ? { visibility: "visible" } : { visibility: "hidden" }
        }
        className="dropdownMenu"
      >
        {selectedUserType === 0 && (
          <Link to={`/profile/${user.username}`}>
            <div className="dropdownItem">Profil</div>
          </Link>
        ) || selectedUserType===1&& (
          <Link to={`/profile/${user.clinicName}`}>
            <div className="dropdownItem">Profil</div>
          </Link>
        )}
        <Link className="routerLinkRemove" to="/">
          <div onClick={logoutHandler} className="dropdownItem">
            Çıkış
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NavigationBar;
