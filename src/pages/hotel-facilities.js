import React, { useEffect } from 'react'
import Breadcrum from '../components/common/Breadcrum'
import Layout from '../components/Layout/Layout'
import { FormattedMessage } from 'react-intl'
import useMetaData from '../components/locales/metaData/useMetaData';
import Head from 'next/head';

function HotelFacilities({ name }) {

  const meta = useMetaData('facilities');

  useEffect(() => {
    document.documentElement.lang = meta.lang || 'tr';
  }, [meta.lang]);

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
        <Breadcrum pageName="Hotel Facilities" pageTitle="Hotel Facilities" />
        <div className="facilities-pages mb-120 pt-120">
          <div className="container">
            <div className="row align-items-center g-4 mb-70">
              <div className="col-lg-5">
                <div className="facilities-img">
                  <img style={{ borderRadius: 100 }} className="img-fluid" src="assets/images/bg/balon_526x415.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="facilities-content">
                  <span style={{ display: "block", fontSize: 25 }}><FormattedMessage id="balonBaslik" values={{ name }} /></span>
                  {/* <h3>efficitur sit amet Duis mollis nibh vitae libero.</h3> */}
                  <FormattedMessage id="balonAciklama" values={{ name }} />
                  <p></p>

                </div>
              </div>
              <div className='facilities-content' style={{ display: "flex", justifyContent: "center", gap: "50px", textAlign: "center", marginTop: 50 }}>
                <div>
                  <span style={{ display: "block", fontSize: 20 }}><FormattedMessage id="balonTurleri" values={{ name }} /></span>
                  <p><FormattedMessage id="balonSepet" values={{ name }} /></p>
                  <p> <FormattedMessage id="balonSure" values={{ name }} /></p>
                  <p><FormattedMessage id="balonIletisim" values={{ name }} /></p>
                </div>
                <div>
                  <span style={{ display: "block", fontSize: 20 }}> <FormattedMessage id="balonKonforBaslik" values={{ name }} /></span>
                  <p> <FormattedMessage id="balonKonforSepet" values={{ name }} /></p>
                  <p> <FormattedMessage id="balonKonforSure" values={{ name }} /></p>
                  <p> <FormattedMessage id="balonKonforIletisim" values={{ name }} /></p>
                </div>
              </div>
            </div>

            <div className="row align-items-center g-4 mb-70">
              <div className="col-lg-7 order-lg-1 order-2">
                <div className="facilities-content">
                  <span style={{ display: "block", fontSize: 25 }}> <FormattedMessage id="ulasim" values={{ name }} /></span>
                  <p> <FormattedMessage id="ulasimAciklama" values={{ name }} /></p>
                </div>
              </div>
              <div className="col-lg-5 order-lg-2 order-1">
                <div className="facilities-img">
                  <img style={{ borderRadius: 100 }} className="img-fluid" src="assets/images/bg/kapimiz.jpg" alt="" />
                </div>
              </div>
            </div>

            <div className="row align-items-center g-4 mb-70">
              <div className="col-lg-5">
                <div className="facilities-img">
                  <img style={{ borderRadius: 100 }} className="img-fluid" src="assets/images/bg/urgup.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="facilities-content">
                  <span style={{ display: "block", fontSize: 25 }}><FormattedMessage id="cevre" values={{ name }} /></span>
                  <p> <FormattedMessage id="cevreAciklama" values={{ name }} /> </p>
                </div>

              </div>
            </div>

            <div style={{ marginTop: 30 }} className="row align-items-center g-4 mb-70">
              <div className="col-lg-7 order-lg-1 order-2">
                <div className="facilities-content">
                  <span style={{ display: "block", fontSize: 25 }}><FormattedMessage id="geziRehberi" values={{ name }} /></span>
                  <div>
                    <a className="argeus-link" href='https://www.argeus.com'>https://www.argeus.com</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 order-lg-2 order-1">
                <div className="facilities-img">
                  <img className="img-fluid" src="assets/images/bg/logon.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>

  )
}

export default HotelFacilities