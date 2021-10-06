import React from 'react'
import { Link } from 'react-router-dom'
import AgeInput from '../components/AgeInput'
import DiseaseDescription from '../components/DiseaseDescription'
import DiseaseObserve from '../components/DiseaseObserve'
import GenusDropdown from '../components/GenusDropdown'
import NavigationBar from '../components/NavigationBar'
import UploadedImages from '../components/UploadedImages'

function CreatePostPage() {
    return (
    <div>
        <div className="navibar">
        <Link className="routerLinkRemove" to="/mainpage"><h1 className="logoHeader">Pet Vet app</h1></Link>
        </div>
        
        <div class="newPostSchema">
        <h2 style={{margin:0, textAlign:'left'}}>New Post</h2>

            <div style={{ marginLeft:"auto", marginRight:"auto", width:"80%", padding:"2em"}}>
            <div style={{display:"flex", justifyContent:"space-evenly", marginTop:"1em"}}>
            <GenusDropdown></GenusDropdown>
            <AgeInput></AgeInput>
            </div>
            <DiseaseObserve></DiseaseObserve>
            <DiseaseDescription></DiseaseDescription>
            <input className="uploadImageButton" type="file" id="myFile" name="filename"></input>
            <UploadedImages></UploadedImages>
            </div>
        </div>
            
    </div>
    )
}

export default CreatePostPage
