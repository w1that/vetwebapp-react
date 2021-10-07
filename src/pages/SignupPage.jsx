import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, useHistory } from "react-router-dom";
import { OwnerService } from "../api/ownerService";
import { VetService } from "../api/vetService";

function SignupPage() {


  const isDesktop = useMediaQuery({
    query: "(min-width: 1227px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 1227px)" });

  const history = useHistory();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [clinicName, setClinicName] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const [selectedUserType, setSelectedUserType] = useState(0);

  useEffect(() => {
    const r = window.confirm(
      "Yakınındaki veterinerlere erişebilmek ve daha kolay bir kullanım için adresine erişmemiz gerek."
    );
    if (r === true) {
      selectCoordinates();
    } else {
      setLatitude("1");
      setLongitude("1");
    }
  }, []);

  function setOwnerOption() {
    setClinicName("");
    setUsername("");
    setPassword("");
    setEmail("");
    setSelectedUserType(0); // 0 means selected tab is owner
  }

  function setVetOption() {
    setUsername("");
    setPassword("");
    setEmail("");
    setFirstName("");
    setLastName("");
    setSelectedUserType(1); // 1 means selected tab is vet
  }

  function selectCoordinates() {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatitude(position.coords.latitude.toString());
      setLongitude(position.coords.longitude.toString());
    });
  }

  function signUpHandler() {
    const ownerService = new OwnerService();
    const vetService = new VetService();
    if (selectedUserType === 0) {
      const owner = {
        username: username,
        password: password,
        email: email,
        firstName: firstName,
        lastName: lastName,
        latitude: latitude,
        longitude: longitude,
      };
      ownerService
        .register(owner)
        .then((response) => {
          if (response.data.success) {
            alert("başarıyla kayıt oldun");
            history.push("/");
          } else {
            alert(response.data.message);
            setUsername("");
            setPassword("");
            setEmail("");
          }
        })
    }
    if (selectedUserType === 1) {
      const vet = {
        username: username,
        password: password,
        email: email,
        clinicName: clinicName,
        latitude: latitude,
        longitude: longitude,
      };
      vetService
        .register(vet)
        .then((response) => {
          if (response.data.success) {
            alert("başarıyla kayıt olundu");
            history.push("/");
          } else {
            alert(response.data.message);
            setUsername("");
            setPassword("");
            setEmail("");
          }
        })
    }
  }

  return (
    <div>
      <div className="backgroundDiv">
       
          
        
        <div
          className={
            (isMobile && "blurredFieldSignUpMobile") ||
            (isDesktop && "blurredFieldSignUpDesktop")
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
              {selectedUserType === 0 && (
                <div>
                  <input
                    className={(isMobile&&`signUpPageMobileInput welcomepageFont`)|| (isDesktop&&`signUpPageInput welcomepageFont`)}
                    placeholder="isim"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  ></input>
                </div>
              )}
              {selectedUserType === 0 && (
                <div>
                  <input
                    className={(isMobile&&`signUpPageMobileInput welcomepageFont`)|| (isDesktop&&`signUpPageInput welcomepageFont`)}
                    placeholder="soyisim"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  ></input>
                </div>
              )}
              {selectedUserType === 1 && (
                <div>
                  <input
                    className={(isMobile&&`signUpPageMobileInput welcomepageFont`)|| (isDesktop&&`signUpPageInput welcomepageFont`)}
                    placeholder="klinik ismi"
                    value={clinicName}
                    onChange={(e) => setClinicName(e.target.value)}
                  ></input>
                </div>
              )}
              <div>
                <input
                  className={(isMobile&&`signUpPageMobileInput welcomepageFont`)|| (isDesktop&&`signUpPageInput welcomepageFont`)}
                  placeholder="kullanıcı adı"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                ></input>
              </div>
              <div>
                <input
                  className={(isMobile&&`signUpPageMobileInput welcomepageFont`)|| (isDesktop&&`signUpPageInput welcomepageFont`)}
                  placeholder="e-posta"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
              <div>
                <input
                  className={(isMobile&&`signUpPageMobileInput welcomepageFont`)||( isDesktop&&`signUpPageInput welcomepageFont`)}
                  placeholder="şifre"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                ></input>
              </div>

              <button
                onClick={signUpHandler}
                className={
                  (isMobile && "signUpPageButtonMobile welcomepageFont") ||
                  (isDesktop && "signUpPageButtonDesktop welcomepageFont")
                }
              >
                Kayıt Ol{" "}
              </button>
              <p
                className={
                  (isMobile && "signUpPageMessageMobile welcomepageFont") ||
                  (isDesktop && "signUpPageMessageDesktop welcomepageFont")
                }
              >
                ya da{" "}
                <Link to="/">
                  <label className="welcomepageFont loginHereLabel">
                    giriş yap
                  </label>
                </Link>
              </p>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
