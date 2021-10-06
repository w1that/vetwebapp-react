import React from 'react'
import { Link } from 'react-router-dom'
import GenusDropdown from '../components/GenusDropdown'
import NavigationBar from '../components/NavigationBar'

function CreatePostPage() {
    return (
    <div>
        <div className="navibar">
        <Link className="routerLinkRemove" to="/mainpage"><h1 className="logoHeader">Pet Vet app</h1></Link>
        </div>
        
        <div class="newPostSchema">
        <h2 style={{margin:0, textAlign:'left'}}>New Post</h2>

            <GenusDropdown></GenusDropdown>
        </div>
            
    </div>
    )
}

export default CreatePostPage
