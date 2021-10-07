import React from 'react'

// function UploadedImages({file}) {
//     const imageList=[{imagePath:file},
//         {imagePath:file},{imagePath:file},{imagePath:file},{imagePath:file},
//     ]
    
//     return (
//         <div className="selectedImages">
        
//             {imageList.map(image=>{
//                 var reader = new FileReader();
//                 var url = reader.readAsDataURL(file);
//                 return <img className="previewImage" style={{marginLeft:"1em"}} width="60px" src={URL.createObjectURL(image.imagePath)}></img>

//             })}
//         </div>
//     )
// }

// export default UploadedImages

function UploadedImages({files}) {
    
    return (
        <div className="selectedImages">
        
            {files.map(file=>{
                var reader = new FileReader();
                return <img className="previewImage" style={{marginLeft:"1em"}} width="60px" src={URL.createObjectURL(file)}></img>

            })}
        </div>
    )
}

export default UploadedImages

