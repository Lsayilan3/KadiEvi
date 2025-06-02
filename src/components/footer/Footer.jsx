import React from "react";
import Link from "next/link";
import { FormattedMessage } from "react-intl";
import { useMemo } from "react";
function Footer({ name }) {
  const currentYear = useMemo(() => new Date().getFullYear(), []);
  return (
    <footer>
  <div className="container">
    <div className="footer-top">
      <div className="row g-4 justify-content-start">
        <div className="col-lg-4 order-lg-0 order-2">
          <div className="footer-items footer-about">
            <h4> Kadıevi <FormattedMessage id="suitHouseK" values={{ name }}/></h4>
            <p> Kadıevi <FormattedMessage id="footerAciklama" values={{ name }}/></p>
            <div className="footer-btn">
              <a className="popup-youtube" target="_blank" rel="noreferrer" href="https://maps.app.goo.gl/F6w9jCmdr3L8mNZB7"><FormattedMessage id="siteHaritamiz" values={{ name }} /><i className="bi bi-chevron-right" /></a>
              {/* <a href="#">Legal Notice</a> */}
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="footer-items social-area">
            <span className="dot1" />
            <span className="dot2" />
            <div className="footer-logo text-center">
              <img style={{width:106, height:106}} src="/assets/images/footer-logo1d.svg" alt="" />
              <p><FormattedMessage  id="yasamTarzi"  values={{ name }}/></p>
              <span />
            </div>
            <div className="footer-social">
              <ul className="social-link d-flex align-items-center justify-content-center">
                <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
                <li><a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a></li>
                <li><a href="https://www.instagram.com/cappadocia_kadievi/"><i className="bx bxl-instagram" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 d-flex justify-content-sm-end justify-content-center">
          <div className="footer-items contact ">
            <h4>
              <FormattedMessage
                id="iletisim"
                values={{ name }}
              />
            </h4>
            <div className="hotline mb-30">
              <div className="hotline-icon">
                <img src="assets/images/icons/f-phone.svg" alt="" />
              </div>
              <div className="hotline-info">
                <h6 className="mb-10"><Link href="tel:+905323150128"> +90 532 315 01 28</Link></h6>
                <h6><Link href="tel:+903843418866">+90 384 341 88 66</Link></h6>
              </div>
            </div>
            <div className="email mb-30">
              <div className="email-icon">
                <img src="assets/images/icons/f-envlop.svg" alt="" />
              </div>
              <div className="email-info">
                <h6 className="mb-10"><Link href="mailto:info@kadievi.com">info@kadievi.com</Link></h6>
              </div>
            </div>
            <div className="email">
              <div className="email-icon">
                <img src="assets/images/icons/f-location.svg" alt="" />
              </div>
              <div className="email-info">
                <h6 className="mb-10"><Link href="">Tevfik Fikret Caddesi No: 7, D 11, 13 - 50400</Link></h6>
                <h6><Link href="">Ürgüp / Nevşehir</Link></h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-mdl">
      <div className="quick-menu">
        <ul>
          <li><Link href="/about"><span> <FormattedMessage  id="hakkimizda"  values={{ name }}/></span></Link></li>
          <li><Link href="/room-suits1"><span><FormattedMessage  id="roomSuits"  values={{ name }}/></span></Link></li>
          <li><Link href="/hotel-facilities"><span><FormattedMessage  id="olanaklar"  values={{ name }}/></span></Link></li>
          <li><Link href="/blog"><span><FormattedMessage  id="blogStandard"  values={{ name }}/></span></Link></li>
          {/* <li><Link href="#"><a>Terms &amp; Conditions</a></Link></li> */}
          <li><Link href="/contact"><span><FormattedMessage  id="iletisim"  values={{ name }}/></span></Link></li>
        </ul>
      </div>
    </div>
    <div className="footer-btm">
      <div className="container">
        <div className="row g-4">
            <div className="devlopar-area">
            <p><FormattedMessage id="telif" values={{ name }} /> 2025 - {currentYear}{" "} <Link href="/">Kadıevi</Link> | Kadıevi Suit & Evleri </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

  );
}

export default Footer;
