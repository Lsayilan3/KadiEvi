import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getAnasayfaDilId, getPhotoUrl } from "../../services/homeServices/anasayfaService";

function Bannere1({data}) {


  const { rotaId, foto, baslik, aciklama } = data || {};

  const [isOpen, setOpen] = useState(false);

  const [anasayfaData, setAnasayfaData] = useState();
  const defaultDil = 'tr';
  const [dil, setDil] = useState(defaultDil);

  const fetchAnasayfaData = async (dil) => {
    const data = await getAnasayfaDilId(dil);
    if (data && data.length > 0) {
      setAnasayfaData(data[0]);
      // console.log("anasayfaData:", data[0]);
    } else {
      setAnasayfaData();
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedDil = localStorage.getItem('Dil') || defaultDil;
      setDil(storedDil);
      fetchAnasayfaData(storedDil);
    }
  }, []);

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'Dil') {
        const newDil = event.newValue || defaultDil;
        setDil(newDil);
        fetchAnasayfaData(newDil);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('storage', handleStorageChange);

      // Dil değişikliğini manuel olarak kontrol etmek için
      const intervalId = setInterval(() => {
        const currentDil = localStorage.getItem('Dil') || defaultDil;
        if (currentDil !== dil) {
          setDil(currentDil);
          fetchAnasayfaData(currentDil);
        }
      }, 1000); // Her 1 saniyede bir kontrol eder

      return () => {
        window.removeEventListener('storage', handleStorageChange);
        clearInterval(intervalId);
      };
    }
  }, [dil]);



  // const [anasayfaDataFotoUrl, setAnasayfaDataFotoUrl] = useState();


  // useEffect(() => {
  //   const fetchAnasayfaDataFotoUrl = async () => {
  //     const data = await getAnasayfaFotoUrl();
  //     if (data && data.length > 0) {
  //       setAnasayfaDataFotoUrl(data[0]);
  //     } else {
  //       setAnasayfaDataFotoUrl(null);
  //     }
  //   };

  //   fetchAnasayfaDataFotoUrl();
  // }, []);

  if (!anasayfaData) return <p></p>;

  const photoUrl = getPhotoUrl();
  
  return (
    <div className="hero-style1">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12 px-0">
          <div className="hero-video">
            {/* <video autoPlay loop="loop" muted preload="auto">
              <source src="https://demo.egenslab.com/download/hotel-room-2021-11-03-20-39-09-utc.mp4" type="video/mp4" />
            </video> */}
            <img className="girisPhoto" src={`${photoUrl}${anasayfaData.photo}`} alt="" />

            <div className="hero-content">
              <h4>{anasayfaData.aciklama}</h4>
              <h1>Kadievi Suites & Houses.</h1>
            </div>
            <div className="scroll-dowm">
              <a href="#about-area"><img src="assets/images/icons/scroll-down.svg" alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default Bannere1;
