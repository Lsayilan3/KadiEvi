import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { getGirisAboutDilId } from "../../services/aboutServices/aboutService";
import { getPhotoUrl } from "../../services/homeServices/anasayfaService";

function About1({name}) {
  const [girisAboutData, setGirisAboutData] = useState();
    const defaultDil = 'tr';
    const [dil, setDil] = useState(defaultDil);
  
    const fetchGirisAboutData = async (dil) => {
      const data = await getGirisAboutDilId(dil);
      if (data && data.length > 0) {
        setGirisAboutData(data[0]);
        // console.log("girisAboutData:", data[0]);
      } else {
        setGirisAboutData();
      }
    };
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        const storedDil = localStorage.getItem('Dil') || defaultDil;
        setDil(storedDil);
        fetchGirisAboutData(storedDil);
      }
    }, []);
  
    useEffect(() => {
      const handleStorageChange = (event) => {
        if (event.key === 'Dil') {
          const newDil = event.newValue || defaultDil;
          setDil(newDil);
          fetchGirisAboutData(newDil);
        }
      };
  
      if (typeof window !== 'undefined') {
        window.addEventListener('storage', handleStorageChange);
  
        // Dil değişikliğini manuel olarak kontrol etmek için
        const intervalId = setInterval(() => {
          const currentDil = localStorage.getItem('Dil') || defaultDil;
          if (currentDil !== dil) {
            setDil(currentDil);
            fetchGirisAboutData(currentDil);
          }
        }, 1000); // Her 1 saniyede bir kontrol eder
  
        return () => {
          window.removeEventListener('storage', handleStorageChange);
          clearInterval(intervalId);
        };
      }
    }, [dil]);

      if (!girisAboutData) return <p></p>;
    
      const photoUrl = getPhotoUrl();
  return (
    <div className="home-one-about pt-120 pb-120">
    <img className="about-vector" src="assets/images/bg/h1-about-bg.png" alt="" />
    <div className="container">
      <div className="row align-items-center pt-40 mb-40">
        <div className="col-lg-6">
          <div className="about-content">
            <div className="section-title1">
              <span> <FormattedMessage id="suitHouse" values={{ name }}/></span>
              <h2> {girisAboutData.baslik}</h2>
            </div>
            
             <p> {girisAboutData.pBir}  </p>
            <p>{girisAboutData.pIki} </p>
            <div className="author-area d-flex align-items-center">
              <div className="author-img">
                <img className="img-fluid" src="assets/images/bg/70x70kadievi_90x100.jpg" alt="" />
              </div>
              <div className="author-details">
                <h5><FormattedMessage id="yonetici" values={{ name }}/></h5>
                <img style={{display:"block",height:30}} src="assets/images/bg/Veli Toren.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="about-img">
            <img className="img-fluid" src={`${photoUrl}${girisAboutData.photo}`}  alt="" />
            <div className="reviews">
              <h2>5.0</h2>
              <ul className="stars d-flex align-items-center">
                <li><i className="bi bi-star-fill" /></li>
                <li><i className="bi bi-star-fill" /></li>
                <li><i className="bi bi-star-fill" /></li>
                <li><i className="bi bi-star-fill" /></li>
                <li><i className="bi bi-star-fill" /></li>
              </ul>
              <span>2000, <FormattedMessage id="incelemeler" values={{ name }}/></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default About1;
