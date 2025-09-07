import React, { useEffect } from "react";
import About1 from "../components/about/About1";
import ChooseUs2 from "../components/choose/ChooseUs2";
import Breadcrum from "../components/common/Breadcrum";
import Feature1 from "../components/feature/Feature1";
import BlogPost from "../components/home1/BlogPost";
import Layout from "../components/Layout/Layout";
import Testimonial1 from "../components/testmonial/Testimonial1";
import useMetaData from '../components/locales/metaData/useMetaData'
import Head from "next/head";

function About() {
    const meta = useMetaData('about');
  
    useEffect(() => {
      document.documentElement.lang = meta.lang || 'tr'; 
    }, [meta.lang]);
  return (
    <>
      <Head>
        <title>{meta.title || 'Hakkımızda - Kadievi Suits & Houses Otel'}</title>
        <meta name="description" content={meta.description || 'Şirketimizin hakkında bilgileri, vizyonu ve misyonunu öğrenin.'} />
        <meta property="og:title" content={meta.title || 'Hakkımızda - Kadievi Suits & Houses Otel'} />
        <meta property="og:description" content={meta.description || 'Şirketimizin hakkında bilgileri, vizyonu ve misyonunu öğrenin.'} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              "name": "Kadievi Suits & Houses Otel",
              "description": meta.description || 'Kadievi Suits & Houses Otel iletişim bilgileri:  Tevfik Fikret Caddesi No:11 50400 Ürgüp / Nevşehir, 50100. Email: info@kadievi.com, +90 532 3150128 / +90 384 3418866.',
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
      <Breadcrum pageName="About Us" pageTitle="About Us" />
      <About1 />
      <ChooseUs2 />
      <Feature1 />
      {/* <Testimonial1 /> */}
      {/* <BlogPost /> */}
    </Layout>
    </>

  );
}

export default About;
