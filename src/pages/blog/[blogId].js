import React, { useEffect, useState } from "react";
// import RecentPostWidget from "../components/blog/RecentPostWidget";
// import SearchWidget from "../components/blog/SearchWidget";
// import SocialWidget from "../components/blog/SocialWidget";
// import TagWidget from "../components/blog/TagWidget";
import { useRouter } from "next/router";
import Breadcrum from "../../components/common/Breadcrum";
import Layout from "../../components/Layout/Layout";
import { getBlogDetailDilId } from "../../services/blogServices/blogService";
import { getPhotoUrl } from "../../services/homeServices/anasayfaService";
import { getGallaryBlogById } from "../../services/gallaryServices/gallaryService";
import Lightbox from "yet-another-react-lightbox";
import { Fullscreen } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import { FormattedMessage } from "react-intl";

function BlogDetails() {
    const router = useRouter();
    const { blogId } = router.query;
  // console.log("blogId", blogId);


  const [blogData, setBlogData] = useState(null)

  const defaultDil = 'tr';
  const [dil, setDil] = useState(defaultDil);

  const fetchBlogData = async (blogId, dil) => {
    const data = await getBlogDetailDilId(blogId, dil);
    if (data && data.length > 0) {
      setBlogData(data[0]);
      // console.log(data);
    } else {
      setBlogData(null);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedDil = localStorage.getItem('Dil') || defaultDil;
      setDil(storedDil);
      fetchBlogData(blogId, storedDil);
    }
  }, [blogId]); // hizmetId'yi dependency olarak ekleyin
  
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'Dil') {
        const newDil = event.newValue || defaultDil;
        setDil(newDil);
        fetchBlogData(blogId, newDil);
      }
    };
  
    if (typeof window !== 'undefined') {
      window.addEventListener('storage', handleStorageChange);
  
      const intervalId = setInterval(() => {
        const currentDil = localStorage.getItem('Dil') || defaultDil;
        if (currentDil !== dil) {
          setDil(currentDil);
          fetchBlogData(blogId, currentDil);
        }
      }, 1000);
  
      return () => {
        window.removeEventListener('storage', handleStorageChange);
        clearInterval(intervalId);
      };
    }
  }, [dil, blogId]);


  // GALLARY BLOG 

    const [isOpenimg, setOpenimg] = useState({
      openingState: false,
      openingIndex: 0,
    });

  const [blogGallaryData, setBlogGallaryData] = useState(null);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    if (blogId) {
      getGallaryBlogById(blogId).then((data) => {
        if (data && data.length > 0) {
          setBlogGallaryData(data);
          // console.log(data);  
          
          // Fotoğrafları map ederek slides dizisini oluştur
          const dynamicSlides = data.map((item, index) => ({
            src: `${getPhotoUrl()}${item.photo}`,
            index: index
          }));
          
          setSlides(dynamicSlides);  // Tüm fotoğrafları slides'a ekle
        }
      });
    }
  }, [blogId]);
  
  


    
    
  
  
     const photoUrl = getPhotoUrl();

  if (!blogData) return <p>Nevşehir Diş Kliniği...</p>;
  return (
    <>
      <Layout>
        <Breadcrum pageName="Blog Details" pageTitle="Blog Details" />
        <div className="inner-blog pt-120 mb-120">
          <div className="container">
            <div className="row g-4">

              <div className="col-lg-12">
                <div className="blog-post-area">
                  <div className="blog-details mb-120">

                    <div className="blog-meta">
                    <span> By, Admin {blogData.tarih}  {blogData.yer}</span>
                    </div>
                    <div className="post-content">
                      <h3>
                      {blogData.baslik}
                      </h3>
                      <p>
                      {blogData.aciklama}
                      </p>















      <div className="home-one-gallery mb-120">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title1 text-center">
                <span><FormattedMessage id="gallery" values={{ name }}/></span>
                <h2><FormattedMessage id="otelimiziGorun" values={{ name }}/></h2>
              </div>
            </div>
          </div>
          <div className="row g-2">
  {blogGallaryData && blogGallaryData.map((item, index) => (
    <div className="col-lg-4 col-md-6" key={item.galaryId}>
      <div className="gallery-item one">
        <img
          className="img-fluid"
          src={`${getPhotoUrl()}${item.photo}`}  // Doğrudan photo'yu kullan
          alt={`Gallery Image ${index + 1}`}  // Fotoğraf için alt metin
        />
        <a className="gallary-item-overlay">
          <i
            className="bi bi-eye"
            onClick={() => setOpenimg({ openingState: true, openingIndex: index })}  // Tıklanan fotoğrafın index'ini set et
          />
        </a>
      </div>
    </div>
  ))}



           
            </div>
          </div>
        </div>

        <Lightbox
  open={isOpenimg.openingState}
  plugins={[Fullscreen]}
  index={isOpenimg.openingIndex}
  close={() => setOpenimg(false)}
  styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
  slides={slides}
/>

                      <span dangerouslySetInnerHTML={{ __html: blogData.editor }}></span>
                      <div className=" pt-20">
                        <div className="col-md-12 d-flex justify-content-lg-end">
                          <div className="social-link">
                            <h5><FormattedMessage id="paylaş" values={{ name }}/>:</h5>
                            <ul>
                              <li>
                                <a href="https://www.facebook.com/">
                                  <i className="bx bxl-facebook" />
                                </a>
                              </li>
                              <li>
                                <a href="https://twitter.com/">
                                  <i className="bx bxl-twitter" />
                                </a>
                              </li>
                              <li>
                                <a href="https://www.pinterest.com/">
                                  <i className="bx bxl-pinterest-alt" />
                                </a>
                              </li>
                              <li>
                                <a href="https://www.instagram.com/cappadocia_kadievi/" target="_blank" rel="noreferrer">
                                  <i className="bx bxl-instagram" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default BlogDetails;
