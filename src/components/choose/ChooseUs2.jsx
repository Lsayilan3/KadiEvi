import React from "react";
import Link from "next/link";
import { FormattedMessage } from "react-intl";
function ChooseUs2({name}) {
  return (
    <div className="home-two-choose mb-120">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6 order-lg-1 order-2">
            <div className="choose-left">
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="choose-img one">
                    <img src="assets/images/bg/2_302x301.jpg" alt="choose-img" />
                  </div>
                  <div className="choose-img two">
                    <img src="assets/images/bg/4_302x413.jpg" alt="choose-img" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="choose-img three">
                    <img src="assets/images/bg/5_302x412.jpg" alt="choose-img" />
                  </div>
                  <div className="choose-img four">
                    <img src="assets/images/bg/1_302x312.jpg" alt="choose-img" />
                  </div>
                </div>
              </div>
              <div className="tripadvisor-icon">
                <img style={{height:170,display:"block"}}  src="assets/images/icons/indir.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="section-title2">
              <span><FormattedMessage id="nedenBiz" values={{ name }}/></span>
              <h2><FormattedMessage id="nedenBizBaslik" values={{ name }}/></h2>
              <img src="assets/images/icons/section-bg.svg" alt="" />
              <p>
              <FormattedMessage id="nedenBizAciklama" values={{ name }}/>
              </p>
            </div>
            <div className="choose-feature">
              <ul>
                <li>
                  <img src="assets/images/icons/check.svg" alt="check" /> 
                  <FormattedMessage id="havaalani" values={{ name }}/>
                </li>
                <li>
                  <img src="assets/images/icons/check.svg" alt="check" />{" "}
                  <FormattedMessage id="acikKahvalti" values={{ name }}/>
                </li>
                <li>
                  <img src="assets/images/icons/check.svg" alt="check" /> 
                  <FormattedMessage id="wifi" values={{ name }}/>
                </li>
                <li>
                  <img src="assets/images/icons/check.svg" alt="check" />{" "}
                  <FormattedMessage id="tarihiDeneyim" values={{ name }}/>
                </li>
                <li>
                  <img src="assets/images/icons/check.svg" alt="check" /> 
                  <FormattedMessage id="konforluKonaklama" values={{ name }}/>
                </li>
                <li>
                  <img src="assets/images/icons/check.svg" alt="check" /> 
                  <FormattedMessage id="manzara" values={{ name }}/>
                </li>
                <li>
                  <img src="assets/images/icons/check.svg" alt="check" /> 
                  <FormattedMessage id="GuvenliEmniyetli" values={{ name }}/>
                </li>
                {/* <li>
                  <img src="assets/images/icons/check.svg" alt="check" /> <FormattedMessage id="nedenBiz" values={{ name }}/>

                </li> */}
              </ul>
              <Link href="/hotel-facilities">
                <a className="btn--primary3">Özelliği Keşfedin</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs2;
