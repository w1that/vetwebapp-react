import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { Route, useHistory } from "react-router";
import { Link } from "react-router-dom";
import { setCurrentUser } from "../redux/userSlice";
import Map from "../components/Map";
import Post from "../components/Post";
import NavigationBar from "../components/NavigationBar";
import { OwnerService } from "../api/ownerService";
import axios from "axios";

function MainPage() {
  const ownerService = new OwnerService()
  const user = useSelector((state) => state.user.currentUser);
  const history = useHistory();
  const isMobile = useMediaQuery({ query: "(max-width: 1227px)" });
  const isDesktop = useMediaQuery({
    query: "(min-width: 1227px)",
  });
  const dispatch = useDispatch();
  const [mapVisibility, setMapVisibility] = useState(true);

  useEffect(() => {    
    ownerService.getByUsername(user.username).then((response)=>dispatch(setCurrentUser(response.data.data)))
  }, []);

  
  function newPostControlHandler(){
    if(user.pets.length>0){
      alert("Normal üyelik için yanlızca 1 adet post oluşturma hakkınız var. Premium üyeliğe geçiş yapabilirsiniz")
  }else{
    history.push("/new-post")
  }
  
}

  return (
    <div style={{ background: "#FFFEF2" }}>
     <Route exact path="/mainpage"> <NavigationBar></NavigationBar></Route>

      <div className="mobileBottomBar"></div>

      {user.firstName && (
        <div>
          
            <button onClick={newPostControlHandler} style={user.pets.length>0&&{background:"#ff5c4a"}} className="newPostButton">Yeni gönderi oluştur</button>
          
        </div>
      )}
      {user.firstName && (
        <div className="googleMapField">
          <h3>
            Yakınındaki veterinerleri gör{" "}
            {isMobile && (
              <label
                onClick={() => setMapVisibility(!mapVisibility)}
                style={{ fontWeight: "bolder" }}
              >
                {" "}
                x
              </label>
            )}
          </h3>
          <Map
            isMarkerShown
            lat={Number(user.latitude)}
            long={Number(user.longitude)}
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDhnGNihMjkuJjLpo4HTcGfwuGn8frXPt4`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={
              <div
                className={
                  (isDesktop && "googleMap") || (isMobile && mapVisibility)
                    ? "googleMap"
                    : "googleMapHidden"
                }
              />
            }
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      )}
      {isMobile && <h3>Gönderiler</h3>}

      <div>
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </div>
    </div>
  );
}

export default MainPage;
