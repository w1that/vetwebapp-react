import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useMediaQuery } from 'react-responsive';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { setCurrentUser } from '../redux/userSlice';
import Map from "../components/Map";

function MainPage() {
    const user = useSelector(state => state.user.currentUser)
    
    const dispatch = useDispatch()
    const [dropdownVisible, setDropdownVisible] = useState(false)
    function logoutHandler(){
        dispatch(setCurrentUser(null))
    }
    return (
        <div>
            <div className="navibar">
                <h1 className="logoHeader">Pet Vet app</h1>
                <div>
                <input className="searchBar"></input>
                <button className="searchButton">Ara</button>
                </div>
                <div onClick={()=>setDropdownVisible(!dropdownVisible)} onBlur={()=>setDropdownVisible(false)} className="profileField">
                <img className="naviImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQthHVYX7uaGAQbJifvkv4GskIjvp14b9KIAQ&usqp=CAU"></img>
                <h3 className="usernameText">{user.username}</h3>
                </div>
            </div>
            <div style={dropdownVisible?{visibility:"visible"}:{visibility:"hidden"}} className="dropdownMenu">
                <div className="dropdownItem">Profil</div>
                <Link to="/"><div onClick={logoutHandler} className="dropdownItem">Çıkış</div></Link>
            </div>

           {
               user.firstName&& <Map
            isMarkerShown
            lat={Number(user.latitude)}
            long={Number(user.longitude)}
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDhnGNihMjkuJjLpo4HTcGfwuGn8frXPt4`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={
              <div
                style={{
                  height: `400px`,
                  width: `400px`,
                  position: "absolute",
                  right: "45em",
                  top: "6em",
                }}
              />
            }
            mapElement={<div style={{ height: `100%` }} />}
          />
           }
        </div>
    )
}

export default MainPage
