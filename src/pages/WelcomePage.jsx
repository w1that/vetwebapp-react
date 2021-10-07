import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { OwnerService } from "../api/ownerService";
import { VetService } from "../api/vetService";
import { setCurrentUser } from "../redux/userSlice";

function WelcomePage() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1227px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 1227px)" });

  const [selectedUserType, setSelectedUserType] = useState(0);

  const history = useHistory();
  const dispatch = useDispatch()

  useEffect(() => {
    if(localStorage.getItem('currentUser')){
      history.push("/mainPage")
    }
  }, [history])

  function setOwnerOption() {
    setUsername("");
    setPassword("");
    setSelectedUserType(0); // 0 means selected tab is owner
  }

  function setVetOption() {
    setUsername("");
    setPassword("");
    setSelectedUserType(1); // 1 means selected tab is vet
  }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function loginHandler(){
      const ownerService = new OwnerService()
      const vetService = new VetService()

      if(selectedUserType===0){
          ownerService.getByUsername(username).then(response=>{
            const owner = response.data.data
            if(owner !=null ){
              if(owner.password===password){
                dispatch(setCurrentUser(owner))
                toast("başarıyla giriş yaptın")
                localStorage.setItem('currentUser', JSON.stringify(owner))
                history.push("/mainpage")
              }
              else{
                toast("böyle bir kullanıcı bulunamadı")
              }
            }else{
              toast("böyle bir kullanıcı bulunamadı")
            }
          })
      }

      if(selectedUserType===1){
        vetService.getByUsername(username).then(response=>{
          const vet = response.data.data
          if(vet !=null ){
            if(vet.password===password){
              dispatch(setCurrentUser(vet))
              toast("başarıyla giriş yaptın")
              localStorage.setItem('currentUser', JSON.stringify(vet))
              history.push("/mainpage")
            }
            else{
              toast("böyle bir kullanıcı bulunamadı")
            }
          }else{
            toast("böyle bir kullanıcı bulunamadı")
          }
        })
      }
  }

  return (
    <div>
      <div className="backgroundDiv">
        <div
          className={
            (isMobile && "blurredFieldMobile") ||
            (isDesktop && "blurredFieldDesktop")
          }
        >
          <h1 className="welcomepageFont welcomepageHeader">VET WEB APP</h1>
          <div className="whiteFieldInBlurred">
            <div className="userSelectTab">
              <h3
                onClick={setOwnerOption}
                className={(isDesktop&&`welcomepageFont ${
                  selectedUserType === 0 ? "selectedOption" : "selectOption"
                }`)|| (isMobile&&`welcomepageFont ${
                  selectedUserType === 0 ? "selectedMobileOption" : "selectMobileOption"
                }`)}
              >
                hayvan sahibi
              </h3>
              <h3
                onClick={setVetOption}
                className={(isDesktop&&`welcomepageFont ${
                  selectedUserType === 1 ? "selectedOption" : "selectOption"
                }`)|| (isMobile&&`welcomepageFont ${
                  selectedUserType === 1 ? "selectedMobileOption" : "selectMobileOption"
                }`)}
              >
                veteriner
              </h3>
            </div>

            <div className="formField">
              <div>
                <input
                  className="welcomePageInput welcomepageFont"
                  placeholder="kullanıcı adı"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  
                ></input>
              </div>
              <div>
                <input
                  className="welcomePageInput welcomepageFont"
                  placeholder="şifre"
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  value={password}
                ></input>
              </div>
              <button onClick={loginHandler} className="welcomepageButton welcomepageFont">
                Giriş Yap
              </button>
              <p className="registerMessage welcomepageFont">
                Henüz bir hesabın yoksa{" "}
                <Link to="/signup">
                  <label className="welcomepageFont registerHereLabel">
                    buraya
                  </label>
                </Link>{" "}
                tıklayarak kayıt ol!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
