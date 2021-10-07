import { nanoid } from '@reduxjs/toolkit';
import React from 'react'


function UploadedImages({files}) {
    
    return (
        <div className="selectedImages">
        
            {files.map(file=>{
                if(file){
                    return <img alt="alt" key={nanoid()} className="previewImage" style={{marginLeft:"1em"}} width="60px" src={URL.createObjectURL(file)}></img>
                }
                return '' 
            })}
        </div>
    )
}

export default UploadedImages

