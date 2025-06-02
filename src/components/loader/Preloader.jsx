import Head from "next/head";
import React, { useEffect } from "react";
import useMetaData from "../locales/metaData/useMetaData";

function Preloader() {
    const meta = useMetaData('home');
  
    useEffect(() => {
      document.documentElement.lang = meta.lang || 'tr'; 
    }, [meta.lang]);
  return (
    <>
        <Head>
        <title>{meta.title || 'Anasayfa - Kadıevi Suits & Houses Otel'}</title>
        <meta name="description" content={meta.description || '1860 Kadievi Ürgüp otel, Kapadokya otel, 2+1 ev, 1+1 ev, Deluxe Suit. Kapadokya nın Kalbinde Tarihle İç İçe Bir Konaklama.'} />
        <meta property="og:title" content={meta.title || 'Anasayfa - Kadıevi Suits & Houses Otel'} />
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

      <div className="egns-preloader">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-6">
              <div className="circle-border">
                <div className="moving-circle" />
                <div className="moving-circle" />
                <div className="moving-circle" />
                <svg
                  width="180px"
                  height="150px"
                  viewBox="0 0 187.3 93.7"
                  preserveAspectRatio="xMidYMid meet"
                  style={{
                    left: "50%",
                    top: "50%",
                    position: "absolute",
                    transform: "translate(-50%, -50%) matrix(1, 0, 0, 1, 0, 0)",
                  }}
                >
                  <path
                    stroke="#D90A2C"
                    id="outline"
                    fill="none"
                    strokeWidth={4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                    d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
                  />
                  <path
                    id="outline-bg"
                    opacity="0.05"
                    fill="none"
                    stroke="#959595"
                    strokeWidth={4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                    d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Preloader;
