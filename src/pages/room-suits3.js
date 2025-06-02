import Link from "next/link";
import React, { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import Breadcrum from "../components/common/Breadcrum";
import Layout from "../components/Layout/Layout";
import roomData from "../data/room_suits2.json";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import { getPhotoUrl } from "../services/homeServices/anasayfaService";
import { getEvDilId } from "../services/housesServices/houseService";
import useMetaData from "../components/locales/metaData/useMetaData";
import Head from "next/head";

function RoomSuits3() {

  const meta = useMetaData('deluxe');

  useEffect(() => {
    document.documentElement.lang = meta.lang || 'tr';
  }, [meta.lang]);

  const [startDate1, setStartDate1] = useState(new Date());
  const [startDate2, setStartDate2] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);

  const options = [
    { value: "Person 1", label: "Person 1" },
    { value: "Person 2", label: "Person 2" },
    { value: "Person 3", label: "Person 3" },
    { value: "Person 4", label: "Person 4" },
    { value: "Person 5", label: "Person 5" },
    { value: "Person 6", label: "Person 6" },
  ];
  const roomOptions = [
    { value: "Room 1", label: "Room 1" },
    { value: "Room 2", label: "Room 2" },
    { value: "Room 3", label: "Room 3" },
    { value: "Room 4", label: "Room 4" },
    { value: "Room 5", label: "Room 5" },
  ];
  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      width: state.selectProps.width,
      borderBottom: "1px dotted pink",
      color: state.selectProps.menuColor,
      padding: 5,
      zIndex: 2,
    }),
    control: (provided) => ({
      ...provided,
      height: 16,
      width: "100%",
      maxWidth: "450px",
      marginTop: "-5px",
      paddingRight: 5,
      border: "0px solid red",
      fontSize: 15,
      fontWeight: "500",
      backgroundColor: "none",
      outline: "none",
      boxShadow: "none",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#1C171D",
    }),
    container: (provided) => ({
      ...provided,
      paddingLeft: 55,
      marginTop: -12,
    }),

    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#3caa9f",
    }),
  };


  const [data, setData] = useState([]);
  const defaultDil = 'tr'; // Varsayılan dil değeri
  const [dil, setDil] = useState(defaultDil);

  const fetchData = async (selectedDil) => {
    try {
      const response = await getEvDilId(selectedDil);
      // Verileri doğrudan ayarlayın
      setData(response || []);
      // console.log(response);
    } catch (error) {
      console.error("Ev get api hatası", error);
      setData([]);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedDil = localStorage.getItem('Dil') || defaultDil;
      setDil(storedDil);
      fetchData(storedDil);
    }
  }, []);

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'Dil') {
        const newDil = event.newValue || defaultDil;
        setDil(newDil);
        fetchData(newDil);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('storage', handleStorageChange);

      // Dil değişikliğini manuel olarak kontrol etmek için
      const intervalId = setInterval(() => {
        const currentDil = localStorage.getItem('Dil') || defaultDil;
        if (currentDil !== dil) {
          setDil(currentDil);
          fetchData(currentDil);
        }
      }, 1000); // Her 1 saniyede bir kontrol eder

      return () => {
        window.removeEventListener('storage', handleStorageChange);
        clearInterval(intervalId);
      };
    }
  }, [dil]);

  const photoUrl = getPhotoUrl();

  // `data`'yı sadece `url`'si '1' olan öğelerle filtreleyerek render ediyoruz
  return (
    <>
      <Head>
        <title>{meta.title || 'Hakkımızda - Kadıevi Suits & Houses Otel'}</title>
        <meta name="description" content={meta.description || '1860 Kadievi Ürgüp otel, Kapadokya otel, 2+1 ev, 1+1 ev, Deluxe Suit. Kapadokya nın Kalbinde Tarihle İç İçe Bir Konaklama.'} />
        <meta property="og:title" content={meta.title || 'Hakkımızda - Kadıevi Suits & Houses Otel'} />
        <meta property="og:description" content={meta.description || '1860 Kadievi Ürgüp otel, Kapadokya otel, 2+1 ev, 1+1 ev, Deluxe Suit. Kapadokya nın Kalbinde Tarihle İç İçe Bir Konaklama.'} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              "name": "Kadıevi Suits & Houses Otel",
              "description": meta.description || 'Kadıevi Suits & Houses Otel iletişim bilgileri:  Tevfik Fikret Caddesi No:11 50400 Ürgüp / Nevşehir, 50100. Email: info@kadievi.com, +90 532 3150128 / +90 384 3418866.',
              "url": "https://cevatzadedental.com",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+905323150128",
                "contactType": "Customer Service"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Tevfik Fikret Caddesi No:11 50400",
                "addressLocality": "Ürgüp",
                "addressRegion": "Nevşehir",
                "postalCode": "50100",
                "addressCountry": "TR"
              },
              "sameAs": [
                "https://www.instagram.com/cappadocia_kadievi/"
              ]
            })
          }}
        />
       <link rel="icon" href="favicon.ico" />
      </Head>
      <Layout>
        <Breadcrum pageName="Room & Suits 02" pageTitle="Room & Suits 02" />
        <div className="room-suits-page-2 pt-120 mb-120">
          <div className="container">
            <div className="row mb-70">
              <div className="col-12">
                <div className="multi-main-searchber">
                  <div className="row align-items-center">
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-4 justify-content-center">
              {data
                .filter((item) => item.url === '3')  // `url`'si '1' olanları filtreliyoruz
                .map((data) => {  // Filtrelenmiş veriyi mapliyoruz
                  return (
                    <div className="col-lg-4 col-md-6 col-sm-10" key={data.id}>
                      <div className="room-suits-wrrap">
                        <div className="room-suits-img">
                          <img src={`${photoUrl}${data.photo}`} alt={data.baslik} />
                        </div>
                        <div className="room-suits-content text-center">
                          <div className="client-review">
                            <ul className="stars d-flex align-items-center justify-content-center">
                              <li>
                                <i className="bi bi-star-fill" />
                              </li>
                              <li>
                                <i className="bi bi-star-fill" />
                              </li>
                              <li>
                                <i className="bi bi-star-fill" />
                              </li>
                              <li>
                                <i className="bi bi-star-fill" />
                              </li>
                              <li>
                                <i className="bi bi-star-fill" />
                              </li>
                              <li>(5.0)</li>
                            </ul>
                          </div>
                          <div className="price-tag">
                            {/* <span>{price}</span> / Per Night */}
                          </div>
                          <h3>
                            <Link href={`/ev/${data.evId}`}>
                              <a>{data.baslik}</a>
                            </Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </Layout>
    </>

  );
}

export default RoomSuits3;
