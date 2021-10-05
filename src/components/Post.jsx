import React from "react";

function Post() {
  return (
    <div className="post">
    <div className="postFooter">
          <div className="postOwnerField">
              <img className="postOwnerImage" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img>
              <h3>İsim Soyisim</h3>  
          </div>
      </div>
      <img
        className="postImage"
        src="https://image.shutterstock.com/image-photo/adult-stylish-man-playing-pet-600w-1040307988.jpg"
      ></img>

      <div className="postDescription">
        <p>
          Easy to set up for real, you can make it work in less than 10sec!
          Super easy to customize RTL support Swipe to close 👌 Can choose swipe
          direction Super easy to use an animation of your choice. Works well
          with animate.css for example Can display a react component inside the
          toast! Has onOpen and onClose hooks. Both can access the props passed
          to the react component rendered inside the toast Can remove a toast
          programmatically Define behavior per toast Pause toast when the window
          loses focus 👁 Fancy progress bar to display the remaining time
          Possibility to update a toast You can control the progress bar a la
          nprogress 😲 You can limit the numgrammatically Define behavior per
          toast Pause toast when the window loses focus 👁 Fancy progress bar to
          display the remaining time Possibility to update a toastber of to
        </p>
      </div>
      
    </div>
  );
}

export default Post;
