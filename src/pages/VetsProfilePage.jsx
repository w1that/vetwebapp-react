import React, { useEffect, useReducer, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { OwnerService } from "../api/ownerService";
import { VetService } from "../api/vetService";
import NavigationBar from "../components/NavigationBar";
import Map from "../components/Map";


function VetsProfilePage() {
  const [file, setFile] = useState(null);
  const [visible, setVisible] = useState(false);
  const user = useSelector(state => state.user.currentUser)
  const [imageLength, setImageLength] = useState(user.vetImages.length)
  function visibleButton() {
    setVisible(!visible);
  }

  useEffect(() => {
      if(user.vetImages.length===5){
          toast.info("en fazla 5 fotoğraf ekleyebilirsiniz")
      }
  }, [user.vetImages.length])

  function handleImagePreview(e) {
    setFile(e.target.files[0]);
  }
  function fileUpload(file) {
    const vetService = new VetService();
    const formData = new FormData();
    formData.append("imageFile", file);
    vetService
      .uploadProfilePic(user, formData)
      .then(() =>
        {
            toast.success("fotoğraf başarıyla yüklendi")
            setImageLength(imageLength+1)
        }
      )
      .catch(() => toast.error("bir hata meydana geldi"));
  }
  return (
    <div>
      <div className="navibar" style={{ justifyContent: "flex-start" }}>
        <Link className="routerLinkRemove" to="/mainpage">
          <h1 style={{ left: "2em" }} className="logoHeader">
            Pet Vet app
          </h1>
        </Link>
      </div>
      <h1 style={{fontSize:"36px"}}>{user.clinicName}</h1>
      <div className="profileContainer">
        <div className="profileInnerContainerPetProfile">
       
        <h3>Foto Galeri</h3>
          {user.vetImages.length===0 ?  (
            <img
              onClick={visibleButton}
              className="profilePageImage"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
            ></img>
          ):(<div style={{overflow:"auto", padding:"1em", display:"flex", marginLeft:"auto", marginRight:"auto"}}>

         
            {user.vetImages.map((image) => (
              <img
                onClick={visibleButton}
                src={image.imagePath}
                className="profilePageImage"
                style={{borderRadius:"0px", width:"100%"}}
              ></img>
            )) }</div>
          ) }

          {visible ? (
            <div>
              <input
                onChange={handleImagePreview}
                className="uploadImageButton"
                type="file"
                accept="image/png, image/gif, image/jpeg"
                name="filename"
              ></input>
              <button disabled={imageLength===5?'true':'false'} className="profilePictureButton" onClick={()=>fileUpload(file)}>
                Onayla
              </button>
              <button
                className="profilePictureButton"
                onClick={() => setVisible(false)}
              >
                X
              </button>{" "}
            </div>
          ) : (
            ""
          )}

          {/* <h3>Konum</h3>

          <Map
            isMarkerShown
            lat={Number(user.latitude)}
            long={Number(user.longitude)}
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDhnGNihMjkuJjLpo4HTcGfwuGn8frXPt4`}
            loadingElement={<div style={{ height: "100%" }} />}
            containerElement={
              <div
                className="googleMap"
                style={{width:"100%", height:"500px", marginBottom:"3em"}}
              />
            }
            mapElement={<div style={{ height: "100%" }} />}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default VetsProfilePage;
