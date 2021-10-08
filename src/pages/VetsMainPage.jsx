import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { Route} from "react-router";
import { getOwners, setCurrentUser } from "../redux/userSlice";
import Post from "../components/Post";
import NavigationBar from "../components/NavigationBar";
import { OwnerService } from "../api/ownerService";
import { getPets } from "../redux/petSlice";
import { nanoid } from "@reduxjs/toolkit";
import { VetService } from "../api/vetService";

function VetsMainPage() {
    const owners = useSelector((state) => state.user.owners);
  const user = useSelector((state) => state.user.currentUser);
  const isMobile = useMediaQuery({ query: "(max-width: 1227px)" });
  const dispatch = useDispatch();
  useEffect(() => {
    const vetService = new VetService();
    vetService
      .getByUsername(user.username)
      .then((response) => dispatch(setCurrentUser(response.data.data)));
    
      
  }, [dispatch]);

  useEffect(() => {
    dispatch(getOwners())
  }, [])
    return (
        <div style={{ background: "#FFFEF2" }}>
      <Route exact path="/mainpage">
        {" "}
        <NavigationBar></NavigationBar>
      </Route>
      <div className="mobileBottomBar"></div>
        
      {isMobile && <h3>Gönderiler</h3>}

      <div>
        {[...owners]
          .reverse()
          .map((owner) =>
            owner.pets.map((pet) => (
              <Post key={nanoid()} petOwner={owner} pet={pet}></Post>
            ))
          )}
      </div>
    </div>
    )
}

export default VetsMainPage
