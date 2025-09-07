import Head from "next/head";
import { useEffect, useState } from "react";
import About1 from "../components/about/About1";
import Bannere1 from "../components/banner/Bannere1";
import Video from "../components/common/Video";
import Feature1 from "../components/feature/Feature1";
import Footer from "../components/footer/Footer";
import Header1 from "../components/header/Header1";
import Preloader from "../components/loader/Preloader";
import Offer2 from "../components/offers/Offer2";
import Gallary2 from "../components/gallary/Gallary2";
import useMetaData from '../components/locales/metaData/useMetaData'
import { getAnasayfaDilId } from "../services/homeServices/anasayfaService";

export default function Home() {
  const meta = useMetaData('home');

  useEffect(() => {
    document.documentElement.lang = meta.lang || 'tr'; 
  }, [meta.lang]);

const [anasayfaData, setAnasayfaData] = useState(null);
const [loading, setLoading] = useState(true);
const defaultDil = 'tr';
const [dil, setDil] = useState(defaultDil);

const fetchAnasayfaData = async (dil) => {
  try {
    const data = await getAnasayfaDilId(dil);
    if (data && data.length > 0) {
      setAnasayfaData(data[0]);
    } else {
      setAnasayfaData(null);
    }
  } catch (error) {
    console.error('Veri çekme hatası:', error);
    setAnasayfaData(null);
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

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }
}, []);

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 1000); // 1 saniye bekletir
  return () => clearTimeout(timer);
}, []);

  return (
    <>
        <Head>
        <title>{meta.title || 'Anasayfa - Kadievi Suits & Houses Otel'}</title>
        <meta name="description" content={meta.description || '1860 Kadievi Ürgüp otel, Kapadokya otel, 2+1 ev, 1+1 ev, Deluxe Suit. Kapadokya nın Kalbinde Tarihle İç İçe Bir Konaklama.'} />
        <meta property="og:title" content={meta.title || 'Anasayfa - Kadievi Suits & Houses Otel'} />
        <meta property="og:description" content={meta.description || '1860 Kadievi Ürgüp otel, Kapadokya otel, 2+1 ev, 1+1 ev, Deluxe Suit. Kapadokya nın Kalbinde Tarihle İç İçe Bir Konaklama.'} />
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
          <Header1 />
          <Bannere1 />
          <About1 />
          {/* <Room1 /> */}
          <Offer2 />
          <Feature1 />
          {/* <Offers1 /> */}
          {/* <Testimonial1 /> */}
          {/* <Video /> */}
          <Gallary2 />
          {/* <BlogPost /> */}
          <Footer />
        </>
  );
}
