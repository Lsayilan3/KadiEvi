import React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import { useEffect, useState } from "react";
import { getGallaryAnasayfa, getGallaryById } from "../../services/gallaryServices/gallaryService";
import { useRouter } from "next/router";
import { getPhotoUrl } from "../../services/homeServices/anasayfaService";
import { FormattedMessage } from "react-intl";

function Gallary2({evId,name}) {
  const [isOpenimg, setOpenimg] = useState({
    openingState: false,
    openingIndex: 0,
  });



  const router = useRouter();
  const [gallary, setGallary] = useState(null);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const resimTipiId = 1;
  
    getGallaryAnasayfa().then((data) => {
      if (data && data.length > 0) {
        const filteredData = data.filter(item => item.resimTipiId === resimTipiId);
        setGallary(filteredData);
        // console.log("filteredData", filteredData);
  
        const dynamicSlides = filteredData.map((item, index) => ({
          src: `${getPhotoUrl()}${item.photo}`,
          index: index
        }));
  
        setSlides(dynamicSlides);
      }
    });
  }, []);
  
  
  
  


   const photoUrl = getPhotoUrl();

  return (
    <>
      <div className="home-one-gallery mb-120">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title1 text-center">
                <span style={{fontSize:50}}><FormattedMessage id="gallery" values={{ name }}/></span>
                {/* <h2><FormattedMessage id="otelimiziGorun" values={{ name }}/></h2> */}
              </div>
            </div>
          </div>
          <div className="row g-2">
  {gallary && gallary.map((item, index) => (
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
    </>
  );
}

export default Gallary2;
