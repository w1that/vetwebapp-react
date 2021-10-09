import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { VetService } from "../api/vetService";
import Map from "../components/Map";

function VisitedVeterinaryPage() {
  let { clinicName } = useParams();
  const [clinic, setClinic] = useState({});
  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const vetService = new VetService();
    vetService.getByClinicNameContaining(clinicName).then((response) => {
      console.log(response.data.data);
      setClinic(response.data.data[0]);
      setImages(response.data.data[0].vetImages);
        setLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div>
        <div className="navibar" style={{ justifyContent: "flex-start" }}>
          <Link className="routerLinkRemove" to="/mainpage">
            <h1 style={{ left: "2em" }} className="logoHeader">
              Pet Vet app
            </h1>
          </Link>
        </div>
        <h1>loading</h1>
      </div>
    );
  }
  return (
    
    <div>
    {console.log(images)}
      <div className="navibar" style={{ justifyContent: "flex-start" }}>
        <Link className="routerLinkRemove" to="/mainpage">
          <h1 style={{ left: "2em" }} className="logoHeader">
            Pet Vet app
          </h1>
        </Link>
      </div>
      <div className="visitedVetContainer">
        <h1>{clinic.clinicName}</h1>
        <div style={{ display: "flex", width: "100%", overflow: "auto" }}>
          {images.length===0 ? (
            <img
              width="100%"
              src="https://fevzigandur.com/wp-content/themes/consultix/images/no-image-found-360x260.png"
            ></img>
          ) : (
            images.map((image) => {
              return <img width="100%" src={image.imagePath}></img>;
            })
          )}
        </div>

        <h1>Klinik Konumu</h1>
        <Map
          isMarkerShown
          lat={Number(clinic.latitude)}
          long={Number(clinic.longitude)}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDhnGNihMjkuJjLpo4HTcGfwuGn8frXPt4`}
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div className="googleMapVetpage" />}
          mapElement={<div style={{ height: "100%" }} />}
        />
      </div>
    </div>
  );
}

export default VisitedVeterinaryPage;
