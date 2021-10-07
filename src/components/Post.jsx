import { nanoid } from "@reduxjs/toolkit";
import React from "react";

function Post(props) {
  return (
    <div className="post">
      <div className="postFooter">
        <div className="postOwnerField">
          <img
            alt="alt"
            className="postOwnerImage"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          ></img>
          <h3>{props.petOwner.username}</h3>
        </div>
      </div>
      {(props.pet.images.length === 1 && 
        <img alt="alt" className="postImage" src={props.pet.images[0].imagePath}></img>)
       ||
        (props.pet.images.length > 1 && 
          <div className="multiplePostImagesContainer">
            {props.pet.images.map((image) => (
              <img
              alt="alt"
                className="postImage"
                src={image.imagePath}
                key={nanoid()}
              ></img>
            ))} 
          </div>)
        }

      <div className="postDescription">
        <h3>{props.pet.disease}</h3>
        <p>{props.pet.description}</p>
      </div>
    </div>
  );
}

export default Post;
