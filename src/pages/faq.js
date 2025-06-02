import React, { useEffect } from 'react'
import Breadcrum from '../components/common/Breadcrum'
import Layout from '../components/Layout/Layout'
import { FormattedMessage } from 'react-intl'
import useMetaData from '../components/locales/metaData/useMetaData';
import Head from 'next/head';

function Faq({ name }) {

    const meta = useMetaData('faq');
  
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
        <Breadcrum pageName="FAQ" pageTitle="FAQ"/>

        <div className="faq-page pt-120 mb-120">
  <div className="container">
    <div className="row mb-120 g-4">
      <div className="col-lg-12">
        <div className="faq-wrap">
          <h3> <FormattedMessage id="sss" values={{ name }}/></h3>
          <a href='contact' className="faq-link">
          <FormattedMessage id="sssAciklama" values={{ name }}/>
          </a>
          <div className="faq-item">
            <button id="heading10" className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-controls="collapse10" aria-expanded="true">
               <FormattedMessage id="sssSbir" values={{ name }}/>
            </button>
            <div id="collapse10" className="accordion-collapse collapse show" aria-labelledby="heading10">
              <div className="faq-body">
               <FormattedMessage id="sssAbir" values={{ name }}/>
              </div>
            </div>
          </div>
          <div className="faq-item">
            <h5 id="heading11" className="accordion-button  collapsed" data-bs-toggle="collapse" data-bs-target="#collapse11" aria-controls="collapse11" aria-expanded="true">
               <FormattedMessage id="sssSIki" values={{ name }}/>
            </h5>
            <div id="collapse11" className="accordion-collapse collapse" aria-labelledby="heading11">
              <div className="faq-body">
               <FormattedMessage id="sssAIki" values={{ name }}/>
              </div>
            </div>
          </div>
          <div className="faq-item">
            <h5 id="heading12" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse12" aria-controls="collapse12">
               <FormattedMessage id="sssSUc" values={{ name }}/>
            </h5>
            <div id="collapse12" className="accordion-collapse collapse" aria-labelledby="heading12">
              <div className="faq-body">
               <FormattedMessage id="sssAUc" values={{ name }}/>
              </div>
            </div>
          </div>
          <div className="faq-item">
            <h5 id="heading13" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse13" aria-controls="collapse13">
               <FormattedMessage id="sssSDort" values={{ name }}/>
            </h5>
            <div id="collapse13" className="accordion-collapse collapse" aria-labelledby="heading13">
              <div className="faq-body">
               <FormattedMessage id="sssADort" values={{ name }}/>
              </div>
            </div>
          </div>
          {/* <div className="faq-item">
            <h5 id="heading14" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse14" aria-controls="collapse14">
               <FormattedMessage id="sssSBes" values={{ name }}/>
            </h5>
            <div id="collapse14" className="accordion-collapse collapse" aria-labelledby="heading14">
              <div className="faq-body">
               <FormattedMessage id="sssABes" values={{ name }}/>
              </div>
            </div>
          </div> */}
          <div className="faq-item">
            <h5 id="heading15" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse15" aria-controls="collapse14">
               <FormattedMessage id="sssSAlti" values={{ name }}/>
            </h5>
            <div id="collapse15" className="accordion-collapse collapse" aria-labelledby="heading15">
              <div className="faq-body">
               <FormattedMessage id="sssAAlti" values={{ name }}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="col-lg-4">
        <div className="faq-form">
          <h3>Sormaktan çekinmeyin:</h3>
          <form>
            <div className="form-inner mb-30">
              <input type="text" placeholder="Your Name :" />
            </div>
            <div className="form-inner mb-30">
              <input type="email" placeholder="Your Email :" />
            </div>
            <div className="form-inner mb-30">
              <input type="text" placeholder="Subject :" />
            </div>
            <div className="form-inner mb-30">
              <textarea placeholder="Write Message" cols={30} rows={10} defaultValue={""} />
            </div>
            <div className="form-inner">
              <button type="submit">Send Now</button>
            </div>
          </form>
        </div>
      </div> */}
    </div>
  </div>
</div>

    </Layout>
    </>

  )
}

export default Faq