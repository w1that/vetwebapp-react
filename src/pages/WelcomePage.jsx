import React, { useState } from 'react'

function WelcomePage() {
    const [selectedUserType, setSelectedUserType] = useState(0)

    function setOwnerOption(){
        setSelectedUserType(0)      // 0 means selected tab is owner 
        console.log(selectedUserType)
    } 

    function setVetOption(){
        setSelectedUserType(1)        // 1 means selected tab is vet
        console.log(selectedUserType)
    } 

    return (
        <div>

          <div className="backgroundDiv" >
            <div className="blurredField">
            <h1 className="welcomepageFont welcomepageHeader">VET WEB APP</h1>
                <div className="whiteFieldInBlurred">
                    <div className="userSelectTab">
                        <h3 onClick={setOwnerOption} className={`welcomepageFont ${selectedUserType==0?'selectedOption':'selectOption'}`}>hayvan sahibi</h3>
                        <h3 onClick={setVetOption} className={`welcomepageFont ${selectedUserType==1?'selectedOption':'selectOption'}`}>veteriner</h3>
                    </div>

                    <div className="formField">
                        <div><input className="welcomePageInput welcomepageFont" placeholder="kullanıcı adı"></input></div>
                        <div><input className="welcomePageInput welcomepageFont" placeholder="şifre"></input></div>
                        <button className="welcomepageButton welcomepageFont">Giriş Yap</button>
                        <p className="registerMessage welcomepageFont">Henüz bir hesabın yoksa <label className="welcomepageFont registerHereLabel">buraya</label> tıklayarak kayıt ol!</p>

                    </div>

                </div>
            </div>
          </div>
            
          </div>
    )
}

export default WelcomePage
