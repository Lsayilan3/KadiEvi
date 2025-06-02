import React, { useEffect, useState } from "react";
import Breadcrum from "../components/common/Breadcrum";
import Layout from "../components/Layout/Layout";
import blogData from "../data/blog_grid.json";
import Link from "next/link";
import { getPhotoUrl } from "../services/homeServices/anasayfaService";
import { getBlogilId } from "../services/blogServices/blogService";
import { FormattedMessage } from "react-intl";
import Head from "next/head";
import useMetaData from "../components/locales/metaData/useMetaData";

function Blog({ name }) {

   const meta = useMetaData('blog');

   useEffect(() => {
     document.documentElement.lang = meta.lang || 'tr';
   }, [meta.lang]);
  
  const [data, setData] = useState([]);
  const defaultDil = 'tr'; 
  const [dil, setDil] = useState(defaultDil);

  const fetchData = async (dil) => {
    try {
      const response = await getBlogilId(dil);
      setData(response || []);
      // console.log(response || []);
    } catch (error) {
      console.log("getBlogilId get api hatası", error);
      setData([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


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
      <Breadcrum pageName="Blog Grid" pageTitle="Blog Grid" />
      <div className="home-one-blog pt-120 mb-120">
        <div className="container">
          <div className="row g-4 justify-content-center">
          {data.map((data, index) => (
  <div key={data.blogId || index} className="col-lg-4 col-md-6 col-sm-10">
                  <div className="blog-wrrap">
                    <div className="blog-img">
                      <img src={photoUrl + data.photo} alt="" />
                      <div className="batch">
                        <Link href={`/blog/${data.blogId}`}>
                          <a>{data.tarih}</a>
                        </Link>
                      </div>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <Link href={`/blog/${data.blogId}`}>By, Admin -</Link>{" "}
                        <Link href={`/blog/${data.blogId}`}>{data.yer}</Link>
                      </div>
                      <div className="blog-title">
                        <h4>
                          <Link href={`/blog/${data.blogId}`}>
                            <a>{data.aciklama}</a>
                          </Link>
                        </h4>
                      </div>
                      <div className="read-more-btn">
                        <Link href={`/blog/${data.blogId}`}>
                          <a>
                            <svg
                              width={43}
                              height={10}
                              viewBox="0 0 43 10"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 5H41"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                              />
                              <path
                                d="M36 9L41 5L36 1"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                              />
                            </svg>
                            <FormattedMessage id="devaminiOku" values={{ name }}/>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
    ))}
          </div>
          {/* <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Previous
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      01
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      02
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      03
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div> */}
        </div>
      </div>
    </Layout>
    </>


  );
}

export default Blog;
