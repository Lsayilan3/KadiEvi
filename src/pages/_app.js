import "../../public/assets/css/all.css";
import "../../public/assets/css/bootstrap.min.css";
import "../../public/assets/css/bootstrap-icons.css";
import "../../public/assets/css/boxicons.min.css";
import "react-modal-video/css/modal-video.css";
import "../../public/assets/css/swiper-bundle.min.css";
import "../../public/assets/css/animate.css";
import "../../public/assets/css/custom.css";
import "../../public/assets/css/style.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import enMessages from '../components/locales/en/en.json'
import trMessages from '../components/locales/tr/tr.json';
import itMessages from '../components/locales/it/it.json';
import esMessages from '../components/locales/es/es.json';
import ruMessages from '../components/locales/ru/ru.json';
import jaMessages from '../components/locales/ja/ja.json';
import deMessages from '../components/locales/de/de.json';
import ptMessages from '../components/locales/pt/pt.json';
import frMessages from '../components/locales/fr/fr.json';
import metaDataMessages from '../components/locales/metaData/metaData.json';
import { IntlProvider } from "react-intl";
import Head from "next/head.js";

const messages = {
  en: enMessages,
  tr: trMessages,
  it: itMessages,
  es: esMessages,
  ru: ruMessages,
  ja: jaMessages,
  de: deMessages,
  fr: frMessages,
  pt: ptMessages
};

// //Default Warniing Error Hide
// console.log = console.warn = console.error = () => {};
function MyApp({ Component, pageProps }) {
  const [locale, setLocale] = useState('tr');
  const [meta, setMeta] = useState({
    description: '',
    title: '',
    lang: 'tr'
  });

  useEffect(() => {
    if (!localStorage.getItem('Dil')) {
      localStorage.setItem('Dil', '1'); // Varsayılan olarak Türkçe ayarla
    }

    const savedLocale = localStorage.getItem('Dil');
    const localeMap = {
      '1': 'tr', // Türkçe
      '2': 'en', // İngilizce
      '3': 'it', // İtalyanca
      '4': 'es', // İspanyolca
      '5': 'ru', // Rusça
      '6': 'ja', // Japonca
      '7': 'de', // Almanca
      '8': 'fr', // Fransızca
      '9': 'pt'  // Portekizce
    };

    const currentLocale = localeMap[savedLocale] || 'tr';
    setLocale(currentLocale);

    const currentMeta = metaDataMessages[currentLocale] || { description: '', title: '' };
    setMeta(currentMeta);

    const handleStorageChange = () => {
      const updatedLocale = localStorage.getItem('Dil');
      const updatedLocaleValue = localeMap[updatedLocale] || 'tr';
      setLocale(updatedLocaleValue);
      setMeta(metaDataMessages[updatedLocaleValue] || { description: '', title: '' });
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  useEffect(() => {
    import("../../public/js/bootstrap.bundle.min.js");
  }, []);



  
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    AOS.init();

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowWhatsApp(true);
      } else {
        setShowWhatsApp(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
          <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
         <link rel="icon" type="image/png" href="/favicon.png"></link>
      </Head>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <div style={{ position: 'relative', minHeight: '100vh' }}>
          <Component {...pageProps} />
        </div>
        
      </IntlProvider>
      {showWhatsApp && (
        <a
          id="wp"
          href="https://wa.me/905323150128?text=merhaba.."
          target="_blank"
          rel="noreferrer"
          className="wayra-coc-floating-button wayra-coc-floating-style2"
        >
          <i
            className="fa-brands fa-whatsapp"
            style={{ fontSize: 38, color: "white", overflow: "hidden" }}
          ></i>
        </a>
      )}
    </>
  );
}
export default MyApp;
