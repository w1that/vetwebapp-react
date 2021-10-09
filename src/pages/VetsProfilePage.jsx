import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { VetService } from "../api/vetService";

function VetsProfilePage() {
  const [file, setFile] = useState(null);
  const [visible, setVisible] = useState(false);
  const user = useSelector((state) => state.user.currentUser);
  const [imageLength, setImageLength] = useState(user.vetImages.length);
  function visibleButton() {
    setVisible(!visible);
  }

  useEffect(() => {
    if (user.vetImages.length === 5) {
      toast.info("en fazla 5 fotoğraf ekleyebilirsiniz");
    }
  }, [user.vetImages.length]);

  function handleImagePreview(e) {
    setFile(e.target.files[0]);
  }
  function fileUpload(file) {
    // setVisible(false)
    const vetService = new VetService();
    const formData = new FormData();
    formData.append("imageFile", file);
    vetService
      .uploadProfilePic(user, formData)
      .then(() => {
        toast.success("fotoğraf başarıyla yüklendi");
        setImageLength(imageLength + 1);
      })
      .catch(() => toast.error("bir hata meydana geldi"));
  }
  function addProfilePictureHandler(){
    console.log("112121")
    fileUpload(file)
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
      <h1 style={{ fontSize: "36px" }}>{user.clinicName}</h1>
      <div className="profileContainer">
        <div  className="profileInnerContainerPetProfile">
          <h3>Foto Galeri</h3>
          {user.vetImages.length === 0 ? (
            <img
              onClick={user.vetImages.length===5?'':()=>visibleButton}
              className="profilePageImage"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
            ></img>
          ) : (
            <div
              style={{
                overflow: "auto",
                padding: "1em",
                display: "flex",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              {user.vetImages.map((image) => (
                <img
                  onClick={visibleButton}
                  src={image.imagePath}
                  className="profilePageImage"
                  style={{ borderRadius: "0px", width: "100%" }}
                ></img>
              ))}
            </div>
          )}

          {visible ? (
            <div>
              <input
                onChange={handleImagePreview}
                className="uploadImageButton"
                type="file"
                accept="image/png, image/gif, image/jpeg"
                name="filename"
              ></input>
              <button
                // disabled={imageLength === 5 ? "true" : "false"}
                className="profilePictureButton"
                onClick={addProfilePictureHandler}
              >
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
        </div>
      </div>
    </div>
  );
}

export default VetsProfilePage;
