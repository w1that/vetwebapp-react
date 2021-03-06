import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { OwnerService } from "../api/ownerService";

function OwnersProfilePage() {
  let { username } = useParams();
  const [user, setUser] = useState({});
  const [file, setFile] = useState(null);
  const [visible, setVisible] = useState(false);
  const history = useHistory()
  useEffect(() => {
    const ownerService = new OwnerService();
    ownerService
      .getByUsername(username)
      .then((response) => setUser(response.data.data));
  }, []);

  function changeProfilePictureHandler() {
    setVisible(false);
    if (user.image) {
      const ownerService = new OwnerService();
      ownerService.removeProfilePic(user.image.id).then(() => fileUpload(file));
      return;
    } else {
      fileUpload(file);
    }
  }
  function visibleButton() {
    setVisible(!visible);
  }

  function handleImagePreview(e) {
    setFile(e.target.files[0]);
  }
  function fileUpload(file) {
    const ownerService = new OwnerService();
    const formData = new FormData();
    formData.append("imageFile", file);
    ownerService
      .uploadProfilePic(user, formData)
      .then(() => {
        toast.success("profil fotoğrafı güncellendi")
         history.push("/mainpage")
      })
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

      <div className="profileContainer">
        <h3>Profil Fotoğrafı</h3>
        <div className="profileInnerContainer">
          {user.image ? (
            <img
              onClick={visibleButton}
              src={user.image.imagePath}
              className="profilePageImage"
            ></img>
          ) : (
            <img
              onClick={visibleButton}
              className="profilePageImage"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
            ></img>
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
                className="profilePictureButton"
                onClick={changeProfilePictureHandler}
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

export default OwnersProfilePage;
