import React, { useEffect, useState } from "react";
import Link from "next/link";
import Select from "react-select";
import Breadcrum from "../components/common/Breadcrum";
import Layout from "../components/Layout/Layout";
import RoomFeatures from "../components/roomSuitsDetails/RoomFeatures";
import SummarOffer from "../components/roomSuitsDetails/SummarOffer";
import roomdata from "../data/rooms_data.json";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Gallary1 from "../components/gallary/Gallary1";
import { FormattedMessage } from "react-intl";
import Head from "next/head";
import useMetaData from "../components/locales/metaData/useMetaData";

SwiperCore.use([Navigation, Pagination, Autoplay]);
function RoomSuitsDetails({name}) {
    const meta = useMetaData('about');
  
    useEffect(() => {
      document.documentElement.lang = meta.lang || 'tr'; 
    }, [meta.lang]);
  

  const [startDate1, setStartDate1] = useState(false);
  const [startDate2, setStartDate2] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: "Person 1", label: "Person 1" },
    { value: "Person 2", label: "Person 2" },
    { value: "Person 3", label: "Person 3" },
    { value: "Person 4", label: "Person 4" },
    { value: "Person 5", label: "Person 5" },
    { value: "Person 6", label: "Person 6" },
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
      height:45 ,
      width: "100%",
      maxWidth: "450px",
      border: "0px solid red",
      fontSize: 15,
      fontWeight: "500",
      backgroundColor: "#fff",
      outline: "none",
      boxShadow: "none",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#1C171D",
    }),
    container: (provided) => ({
      ...provided,
      width: "100%",
    }),

    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#3caa9f",
      top: "10px"
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      position:"relative !important",
      top: "2px"
    }),
  };
  const roomsuitsSlider = {
    loop: true,
    loopFillGroupWithBlank: true,
    speed: 2000,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: ".swiper-button-next-m",
      prevEl: ".swiper-button-prev-m",
    },
  };
  const roomSlide = {
    slidesPerView: "auto",
    spaceBetween: 40,
    loop: true,
    loopFillGroupWithBlank: true,
    speed: 1500,
    autoplay: {
      delay: 2000,
    },
    navigation: {
      nextEl: ".swiper-button-next-n",
      prevEl: ".swiper-button-prev-n",
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
      1600: {
        slidesPerView: 3,
      },
    },
  };
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
      <Breadcrum
        pageName={<FormattedMessage id="suites_houses_details" values={{ name }} />}
        pageTitle={<FormattedMessage id="suites_houses_details" values={{ name }} />}
      />
      <div className="room-suits-details-page pt-120 mb-120">
        <div className="container">
        <Gallary1 />
          <div className="row mb-120">
            <div className="col-lg-12">

              <RoomFeatures />
            </div>
            
          </div>

        </div>
      </div>
    </Layout>
  </>

  );
}

export default RoomSuitsDetails;
