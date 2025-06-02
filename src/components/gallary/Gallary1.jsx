import React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import { useEffect, useState } from "react";
import { getGallaryById } from "../../services/gallaryServices/gallaryService";
import { useRouter } from "next/router";
import { getPhotoUrl } from "../../services/homeServices/anasayfaService";
import { FormattedMessage } from "react-intl";

function Gallary1({evId,name}) {
  const [isOpenimg, setOpenimg] = useState({
    openingState: false,
    openingIndex: 0,
  });



  const router = useRouter();
  const [evData, setEvData] = useState(null);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    if (evId) {
      getGallaryById(evId).then((data) => {
        if (data && data.length > 0) {
          // resimTipId === 2 olanları filtrele
          const filteredData = data.filter(item => item.resimTipiId === 2);
          setEvData(filteredData);
          // console.log("Filtered data", filteredData);
  
          const dynamicSlides = filteredData.map((item, index) => ({
            src: `${getPhotoUrl()}${item.photo}`,
            index: index
          }));
  
          setSlides(dynamicSlides);
        }
      });
    }
  }, [evId]);
  
  
  


   const photoUrl = getPhotoUrl();

  return (
    <>
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
          {evData && evData.map((item, index) => (
  <div className="col-lg-4 col-md-6" key={item.galaryId}>
    <div className="gallery-item one">
      <img
        className="img-fluid"
        src={`${getPhotoUrl()}${item.photo}`}
        alt={`Gallery Image ${index + 1}`}
      />
      <a className="gallary-item-overlay">
        <i
          className="bi bi-eye"
          onClick={() => setOpenimg({ openingState: true, openingIndex: index })}
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

export default Gallary1;
