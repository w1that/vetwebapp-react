import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PetService } from "../api/petService";
import AgeInput from "../components/AgeInput";
import DiseaseDescription from "../components/DiseaseDescription";
import DiseaseObserve from "../components/DiseaseObserve";
import GenusDropdown from "../components/GenusDropdown";
import PublishPost from "../components/PublishPost";
import UploadedImages from "../components/UploadedImages";
import {  useHistory } from "react-router";
import { toast } from "react-toastify";

function CreatePostPage() {
  const petService = new PetService();
  const history = useHistory();
  const user = useSelector((state) => state.user.currentUser);
  const genus = useSelector((state) => state.pet.genus);
  const age = useSelector((state) => state.pet.age);
  const description = useSelector((state) => state.pet.description);
  const disease = useSelector((state) => state.pet.disease);
const [files, setFiles] = useState([]);

  const [pet, setPet] = useState({ ownerId: user.id });
  useEffect(() => {
    setPet({
      ...pet,
      genus: genus,
      age: age,
      description: description,
      disease: disease,
    });
  }, [genus, age, description, disease, pet]);

  useEffect(() => {
    if (user.pets.length > 0) {
      alert(
        "Normal üyelik için yanlızca 1 adet post oluşturma hakkınız var. Premium üyeliğe geçiş yapabilirsiniz"
      );
      history.push("/mainpage");
    }
  }, [history, user.pets.length]);

  function addPetHandler() {
    petService.add(genus, user, age, description, disease).then(()=>{
        files.forEach(file => {
            fileUpload(file)
        })
        toast.success("gönderi başarıyla oluşturuldu")
        setTimeout(() => {
            
            history.push("/mainpage")
        }, 500);
    })
  }

  function handleImagePreview(e) {
    setFiles([...files, e.target.files[0]]);
  }
  function fileUpload(file) {
    const formData = new FormData();
    formData.append("imageFile", file);
    petService.getAll().then((response) => {
      const pets = response.data.data;
      petService.addImage(pets[pets.length - 1], formData);
    });
  }

  return (
    <div>
      <div className="navibar">
        <Link className="routerLinkRemove" to="/mainpage">
          <h1 className="logoHeader">Pet Vet app</h1>
        </Link>
      </div>

      <div class="newPostSchema">
        <h2 className="newPostHeader">Yeni Gönderi</h2>

        <div
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            width: "80%",
            padding: "2em",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: "1em",
            }}
          >
            <GenusDropdown></GenusDropdown>
            <AgeInput></AgeInput>
          </div>
          <DiseaseObserve></DiseaseObserve>
          <DiseaseDescription></DiseaseDescription>
          <input
            disabled={files.length===5&&'true'}
            onChange={handleImagePreview}
            className="uploadImageButton"
            type="file"
            id="myFile"
            name="filename"
          ></input>

          <UploadedImages files={files}></UploadedImages>
          <PublishPost addPetHandler={addPetHandler}></PublishPost>
        </div>
      </div>
    </div>
  );
}

export default CreatePostPage;
