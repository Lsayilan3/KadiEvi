import React, { useEffect } from "react";
import Breadcrum from "../components/common/Breadcrum";
import Layout from "../components/Layout/Layout";
import { FormattedMessage } from "react-intl";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from "formik";
import * as Yup from "yup";
// import moment from 'moment';
import { postRandevu } from "../services/iletisimServices/iletisimService";
import useMetaData from '../components/locales/metaData/useMetaData'
import Head from "next/head";

function Contact({ name }) {
  const meta = useMetaData('contact');

  useEffect(() => {
    document.documentElement.lang = meta.lang || 'tr'; 
  }, [meta.lang]);

  const validationSchema = Yup.object({
    isim: Yup.string().required("Adınız zorunludur"),
    soyisim: Yup.string().required("Soyadınız zorunludur"), 
    mail: Yup.string().required("E-mailiniz zorunludur"), 
    soru: Yup.string().required("Sorunuz zorunludur"), 
    mesaj: Yup.string().required("Mesajınız zorunludur")
  });

  const formik = useFormik({
    initialValues: {
      isim: '',
      soyisim: '',
      mail: "",
      soru: "",
      mesaj: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const formattedValues = {
          ...values,
          // tarih: moment(values.tarih).format('YYYY-MM-DDTHH:mm:ss')
        };
        const result = await postRandevu(formattedValues);
        // console.log('API yanıtı:', result);
        formik.resetForm();
        toast.success('Soru talebiniz başarıyla alındı. En kısa zamanda size geri dönüş yapacağız!', {
          autoClose: 10000
        });
      } catch (error) {
        console.error('API hatası:', error);
        toast.error('Soru gönderilirken bir hata oluştu.', {
          autoClose: 10000
        });
      }
    }
  });

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
      <Layout>
      <ToastContainer />
      <Breadcrum pageName="Contact Us" pageTitle="Contact Us" />
      <div className="contact-page mb-120  overflow-hidden">
        <div className="container-fluid px-0">
          <div className="row mb-120 g-4 ">
            <div className="col-lg-6">
              <div className="address-area ">
                <div className="section-title mb-50">
                  <h2>
                  <FormattedMessage id="contactletisim" values={{ name }} />
                  </h2>
                </div>
                <ul className="address-list">
                  <li>
                    <div className="text">
                      <h4>
                      <FormattedMessage id="contactKonum" values={{ name }} />
                      </h4>
                      <p>
                        Tevfik Fikret Caddesi No: 7, D 11, 13  50400
                        Ürgüp / Nevşehir
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="text">
                      <h4><FormattedMessage id="telefon" values={{ name }} /></h4>
                      <a href="tel:+905323150128">+90 532 3150128</a> <br />
                      <a href="tel:+903843418866">+90 384 3418866</a>
                    </div>
                  </li>
                  <li>
                    <div className="text">
                      <h4><FormattedMessage id="emailH" values={{ name }} /></h4>
                      <a href="mailto:info@kadievi.com">
                      info@kadievi.com{" "}
                      </a>{" "}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="location-map">
              <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3116.7153142027623!2d34.909060200000006!3d38.6324298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152a5cdf29a5131f%3A0x29eaa81557a39c62!2s1860%20KADIEV%C4%B0!5e0!3m2!1str!2str!4v1746040525166!5m2!1str!2str"
  width="600"
  height="450"
  style={{ border: '0' }}
  allowfullscreen=""
  loading="lazy"
 referrerPolicy="no-referrer"
/>

              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h2> <FormattedMessage id="sorunuzVarmı" values={{ name }} /></h2>
              </div>
              <form onSubmit={formik.handleSubmit}>
                <div className="row g-4">
                  <div className="col-lg-3">
                    <div className="form-inner">
                    <input
                      type="text"
                      className="form-control"
                      id="Isim"
                      name="isim"
                      placeholder="Enter your name"
                      value={formik.values.isim}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.isim && formik.errors.isim ? (
                      <div className="error">{formik.errors.isim}</div>
                    ) : null}
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="form-inner">
                    <input
                      type="text"
                      className="form-control"
                      id="Soyisim"
                      name="soyisim"
                      placeholder="Enter your surname"
                      value={formik.values.soyisim}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.soyisim && formik.errors.soyisim ? (
                      <div className="error">{formik.errors.soyisim}</div>
                    ) : null}
                    
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="form-inner">
                    <input
                      type="email"
                      className="form-control"
                      id="Mail"
                      name="mail"
                      placeholder="Enter your email"
                      value={formik.values.mail}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.mail && formik.errors.mail ? (
                      <div className="error">{formik.errors.mail}</div>
                    ) : null}
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="form-inner">
                    <input
                      type="text"
                      className="form-control"
                      id="Soru"
                      name="soru"
                      placeholder="Query"
                      value={formik.values.soru}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.soru && formik.errors.soru ? (
                      <div className="error">{formik.errors.soru}</div>
                    ) : null}
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-inner">
                    <textarea
                      name="mesaj"
                      className="form-control"
                      id="Mesaj"
                      cols="30"
                      rows="8"
                      placeholder="Your message"
                      value={formik.values.mesaj}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    ></textarea>
                    {formik.touched.mesaj && formik.errors.mesaj ? (
                      <div className="error">{formik.errors.mesaj}</div>
                    ) : null}
                    </div>
                  </div>
                  <div className="col-md-12 d-flex justify-content-center">
                    <div className="form-inner">
                      <button type="submit">  
                           <FormattedMessage id="mesaj" values={{ name }} />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
    </>

  );
}

export default Contact;
