import React, { useEffect, useReducer, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { OwnerService } from '../api/ownerService'
import { VetService } from '../api/vetService'
import NavigationBar from '../components/NavigationBar'

function VetsProfilePage() {
    let {clinicName} = useParams()
    const [user, setUser] = useState({})
    const [file, setFile] = useState(null)
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        const vetService = new VetService()
        vetService.getByClinicNameContaining(clinicName).then(response=>setUser(response.data.data))
        console.log(user)
    }, [])

    function visibleButton(){
        setVisible(!visible)
    }
    
      function handleImagePreview(e) {
        setFile(e.target.files[0]);
      }
      function fileUpload(file) {
          
        const vetService = new VetService()
        const formData = new FormData();
        formData.append("imageFile", file);
        vetService.uploadProfilePic(user[0], formData).then(()=>toast.success(`fotoğraf eklendi. ${5-user[0].images} tane daha fotoğraf yükleyebilirsin`)).catch(()=>toast.error("bir hata meydana geldi"))
      }
    return (
        <div>
            <div className="navibar" style={{ justifyContent:"flex-start"}}>
                <Link className="routerLinkRemove" to="/mainpage"><h1 style={{left:"2em"}} className="logoHeader">Pet Vet app</h1></Link>
                
            </div>
            {/* <div className="profileContainer">
                <div className="profileInnerContainer">
                    {user[0].vetImages?user[0].vetImages.map(image=><img onClick={visibleButton} src={image.imagePath} className="profilePageImage"></img>):
                    <img onClick={visibleButton} className="profilePageImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"></img>}
                
                    {visible?<div ><input
            onChange={handleImagePreview}
            className="uploadImageButton"
            type="file"
            accept="image/png, image/gif, image/jpeg"
            name="filename"
          ></input>
          <button  className="profilePictureButton" onClick={fileUpload}>Onayla</button><button className="profilePictureButton" onClick={()=>setVisible(false)}>X</button>             </div>:''}
               
                </div>
                
            
            </div> */}
        </div>
    )
}

export default VetsProfilePage