import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { FormattedMessage } from 'react-intl';
SwiperCore.use([Navigation, Pagination, Autoplay, Navigation]);
function Feature1({name}) {
  const featuresSlide = {
    // centeredSlides: true,
    slidesPerView: "auto",
    speed: 2000,
    spaceBetween: 25,
    loop: true,
    autoplay: true,
    roundLengths: true,
    pagination: {
      el: ".swiper-pagination",
    },
  }
  return (
    <div className="home-one-features mb-120">
  <div className="container-fluid">
    <div className="row align-items-center">
      <div className=" col-xl-12 px-0">
        <div className="feature-content">
          <div className="section-title1"   >
            <span><FormattedMessage id="tesislerimiz" values={{ name }}/></span>
            <h2><FormattedMessage id="temelOzellikler" values={{ name }}/></h2>
          </div>
            <ul className="row g-3 justify-content-center nav nav-tabs" id="pills-tab" role="tablist">
            <li className="col-md-3 col-sm-4 col-6 nav-item" role="presentation">
              <button className="nav-link feature-items active" id="pills-restaurant-tab" data-bs-toggle="tab" data-bs-target="#pills-restaurant" type="button" role="tab" aria-controls="pills-restaurant-tab" aria-selected="true">
              <svg width={50} height={50} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M160 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM126.5 199.3c-1 .4-1.9 .8-2.9 1.2l-8 3.5c-16.4 7.3-29 21.2-34.7 38.2l-2.6 7.8c-5.6 16.8-23.7 25.8-40.5 20.2s-25.8-23.7-20.2-40.5l2.6-7.8c11.4-34.1 36.6-61.9 69.4-76.5l8-3.5c20.8-9.2 43.3-14 66.1-14c44.6 0 84.8 26.8 101.9 67.9L281 232.7l21.4 10.7c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3L247 287.3c-10.3-5.2-18.4-13.8-22.8-24.5l-9.6-23-19.3 65.5 49.5 54c5.4 5.9 9.2 13 11.2 20.8l23 92.1c4.3 17.1-6.1 34.5-23.3 38.8s-34.5-6.1-38.8-23.3l-22-88.1-70.7-77.1c-14.8-16.1-20.3-38.6-14.7-59.7l16.9-63.5zM68.7 398l25-62.4c2.1 3 4.5 5.8 7 8.6l40.7 44.4-14.5 36.2c-2.4 6-6 11.5-10.6 16.1L54.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L68.7 398z"/></svg>
              <FormattedMessage id="trekkingTurları" values={{ name }}/>
              </button>
            </li>
            <li className="col-md-3 col-sm-4 col-6 nav-item" role="presentation">
              <button className="nav-link feature-items" id="pills-spa-tab" data-bs-toggle="tab" data-bs-target="#pills-spa" type="button" role="tab" aria-controls="pills-spa-tab" aria-selected="false">
                <svg width={50} height={50} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M482.3 192c34.2 0 93.7 29 93.7 64c0 36-59.5 64-93.7 64l-116.6 0L265.2 495.9c-5.7 10-16.3 16.1-27.8 16.1l-56.2 0c-10.6 0-18.3-10.2-15.4-20.4l49-171.6L112 320 68.8 377.6c-3 4-7.8 6.4-12.8 6.4l-42 0c-7.8 0-14-6.3-14-14c0-1.3 .2-2.6 .5-3.9L32 256 .5 145.9c-.4-1.3-.5-2.6-.5-3.9c0-7.8 6.3-14 14-14l42 0c5 0 9.8 2.4 12.8 6.4L112 192l102.9 0-49-171.6C162.9 10.2 170.6 0 181.2 0l56.2 0c11.5 0 22.1 6.2 27.8 16.1L365.7 192l116.6 0z"/></svg>
                <FormattedMessage id="havaAlanıTransferi" values={{ name }}/>
              </button>
            </li>
            <li className="col-md-3 col-sm-4 col-6 nav-item" role="presentation">
              <button className="nav-link feature-items" id="pills-gym-tab" data-bs-toggle="tab" data-bs-target="#pills-gym" type="button" role="tab" aria-controls="pills-gym-tab" aria-selected="false">
              <svg width={50} height={50} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M165.4 96l181.2 0c13.6 0 25.7 8.6 30.2 21.4L402.9 192l-293.8 0 26.1-74.6c4.5-12.8 16.6-21.4 30.2-21.4zm-90.6 .3L39.6 196.8C16.4 206.4 0 229.3 0 256l0 80c0 23.7 12.9 44.4 32 55.4L32 448c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-48 256 0 0 48c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-56.6c19.1-11.1 32-31.7 32-55.4l0-80c0-26.7-16.4-49.6-39.6-59.2L437.2 96.3C423.7 57.8 387.4 32 346.6 32L165.4 32c-40.8 0-77.1 25.8-90.6 64.3zM208 272l96 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM48 280c0-13.3 10.7-24 24-24l32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24zm360-24l32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"/></svg>
              <FormattedMessage id="kiralama" values={{ name }}/>
              </button>
            </li>
            <li className="col-md-3 col-sm-4 col-6 nav-item" role="presentation">
              <button className="nav-link feature-items" id="pills-pool-tab" data-bs-toggle="tab" data-bs-target="#pills-pool" type="button" role="tab" aria-controls="pills-pool-tab" aria-selected="false">
 
              <svg width={50} height={50} viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                <path d="M32 2C20.954 2 12 10.954 12 22c0 6.627 5.373 12 12 12h16c6.627 0 12-5.373 12-12 0-11.046-8.954-20-20-20zM24 34h16v4H24v-4zm4 6h8v4h-8v-4z" fill="#000000"/>
                </svg>
                <FormattedMessage id="ballonTuru" values={{ name }}/>
              </button>
            </li>
            <li className="col-md-3 col-sm-4 col-6 nav-item" role="presentation">
              <button className="nav-link feature-items" id="pills-gamming-tab" data-bs-toggle="tab" data-bs-target="#pills-gaming" type="button" role="tab" aria-controls="pills-gamming-tab" aria-selected="false">
              <svg width={50} height={50} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M288 0C422.4 0 512 35.2 512 80l0 16 0 32c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l0 160c0 17.7-14.3 32-32 32l0 32c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-32-192 0 0 32c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-32c-17.7 0-32-14.3-32-32l0-160c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32c0 0 0 0 0 0l0-32s0 0 0 0l0-16C64 35.2 153.6 0 288 0zM128 160l0 96c0 17.7 14.3 32 32 32l112 0 0-160-112 0c-17.7 0-32 14.3-32 32zM304 288l112 0c17.7 0 32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-112 0 0 160zM144 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM384 80c0-8.8-7.2-16-16-16L208 64c-8.8 0-16 7.2-16 16s7.2 16 16 16l160 0c8.8 0 16-7.2 16-16z"/></svg>
              <FormattedMessage id="gunlukTurlar" values={{ name }}/>
              </button>
            </li>
            {/* <li className="col-md-3 col-sm-4 col-6 nav-item" role="presentation">
              <button className="nav-link feature-items" id="pills-parking-tab" data-bs-toggle="tab" data-bs-target="#pills-parking" type="button" role="tab" aria-controls="pills-parking-tab" aria-selected="false">
              <svg width={50} height={50} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M171.3 96L224 96l0 96-112.7 0 30.4-75.9C146.5 104 158.2 96 171.3 96zM272 192l0-96 81.2 0c9.7 0 18.9 4.4 25 12l67.2 84L272 192zm256.2 1L428.2 68c-18.2-22.8-45.8-36-75-36L171.3 32c-39.3 0-74.6 23.9-89.1 60.3L40.6 196.4C16.8 205.8 0 228.9 0 256L0 368c0 17.7 14.3 32 32 32l33.3 0c7.6 45.4 47.1 80 94.7 80s87.1-34.6 94.7-80l130.7 0c7.6 45.4 47.1 80 94.7 80s87.1-34.6 94.7-80l33.3 0c17.7 0 32-14.3 32-32l0-48c0-65.2-48.8-119-111.8-127zM434.7 368a48 48 0 1 1 90.5 32 48 48 0 1 1 -90.5-32zM160 336a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
              <FormattedMessage id="cipSafari" values={{ name }}/>
              </button>
            </li> */}
            {/* <li className="col-md-3 col-sm-4 col-6 nav-item" role="presentation">
              <button className="nav-link feature-items" id="pills-locker-tab" data-bs-toggle="tab" data-bs-target="#pills-locker" type="button" role="tab" aria-controls="pills-locker-tab" aria-selected="true">
              <svg width={50} height={50}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M465.4 409.4l87.1-150.2-32-.3-55.1 95L259.2 0 23 407.4l32 .3L259.2 55.6zm-355.3-44.1h32.1l117.4-202.5L463 511.9l32.5 .1-235.8-404.6z"/></svg>
                <FormattedMessage id="semazenTuru" values={{ name }}/>
              </button>
            </li> */}
            <li className="col-md-3 col-sm-4 col-6 nav-item" role="presentation">
              <button className="nav-link feature-items" id="pills-transport-tab" data-bs-toggle="tab" data-bs-target="#pills-transport" type="button" role="tab" aria-controls="pills-transport-tab" aria-selected="false">
                <svg width={50} height={50} viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_2_10678)">
                    <path d="M14.2969 0.107399C13.7695 0.253883 13.0567 0.810524 12.7734 1.26951C12.4707 1.75779 12.3047 2.53904 12.3047 3.48631V4.08201L10.625 4.12107C9.02345 4.15037 8.90626 4.1699 8.34962 4.42381C7.57813 4.78513 6.82618 5.53709 6.48438 6.28904C6.23048 6.84568 6.20118 6.99216 6.17188 8.41795L6.13282 9.95115L3.51563 9.98045C1.04493 10.0097 0.878915 10.0195 0.615243 10.2148C-0.00975665 10.6738 8.96752e-06 10.5957 8.96752e-06 15.8691C8.96752e-06 21.1426 -0.00975665 21.0644 0.615243 21.5234C0.859384 21.709 1.03517 21.7285 2.19727 21.7285C3.35938 21.7285 3.53517 21.709 3.77931 21.5234C4.40431 21.0644 4.39454 21.123 4.39454 16.0351V11.4258H5.27345H6.15235V14.5508V17.6855L6.39649 17.9199C6.69923 18.2324 7.07032 18.2324 7.37306 17.9199L7.6172 17.6855V12.5781C7.6172 9.14061 7.65626 7.34373 7.72462 7.08006C7.8711 6.55271 8.61329 5.82029 9.1504 5.67381C9.4336 5.59568 13.916 5.56638 25.2246 5.58591L40.8984 5.61521L41.3184 5.90818C41.5527 6.0742 41.875 6.39646 42.041 6.63084L42.334 7.05076L42.3633 20.957L42.3828 34.8633H39.7949C37.0215 34.8633 36.7871 34.9023 36.3574 35.3613C36.1328 35.6152 34.4727 39.4043 34.4727 39.6777C34.4727 39.9707 34.707 40.3418 34.9707 40.4883C35.1953 40.5957 35.918 40.625 38.8184 40.625H42.3828V41.2695C42.3828 41.6308 42.3242 42.0996 42.2656 42.3242C42.1094 42.8515 41.3867 43.5742 40.8594 43.7304C40.3223 43.8867 9.71681 43.9062 9.1504 43.7402C8.63282 43.6035 7.86134 42.832 7.72462 42.334C7.66602 42.1191 7.6172 41.6504 7.6172 41.2793V40.625H11.2109C14.5899 40.625 14.8145 40.6152 15.1074 40.4297C15.6934 40.0781 15.6641 39.8144 14.6973 37.5781C14.2285 36.4844 13.75 35.4883 13.6426 35.3613C13.2129 34.9023 12.9785 34.8633 10.2051 34.8633H7.6172V27.7441C7.6172 20.6933 7.6172 20.625 7.41212 20.3711C7.13868 20.0195 6.63087 20.0195 6.35743 20.3808L6.15235 20.6347L6.17188 31.582L6.20118 42.5293L6.47462 43.1152C6.83595 43.8769 7.5879 44.6387 8.31056 44.9707L8.88673 45.2246V46.582C8.88673 47.9199 8.88673 47.9394 9.19923 48.5449C9.55079 49.2187 10.166 49.7168 10.8496 49.9023C11.1035 49.9707 12.3242 50 14.2383 49.9804C17.1192 49.9512 17.2559 49.9414 17.6367 49.7363C18.2031 49.4336 18.6426 48.9648 18.9063 48.3887C19.1113 47.959 19.1406 47.7539 19.1406 46.6015V45.3125H25H30.8594V46.6211C30.8594 47.9101 30.8692 47.9394 31.1817 48.5449C31.5234 49.2187 32.1387 49.7168 32.8223 49.9023C33.0762 49.9707 34.2969 50 36.2109 49.9804C39.0918 49.9512 39.2285 49.9414 39.6094 49.7363C40.1758 49.4336 40.6152 48.9648 40.8789 48.3887C41.084 47.9492 41.1133 47.7539 41.1133 46.5625V45.2246L41.6895 44.9707C42.4121 44.6387 43.1641 43.8769 43.5254 43.1152L43.7988 42.5293L43.8281 26.9726L43.8477 11.4258H44.7266H45.6055V16.0351C45.6055 21.123 45.5957 21.0644 46.2207 21.5234C46.4649 21.709 46.6406 21.7285 47.8027 21.7285C48.9649 21.7285 49.1406 21.709 49.3848 21.5234C50.0098 21.0644 50 21.1426 50 15.8691C50 10.5957 50.0098 10.6738 49.3848 10.2148C49.1211 10.0195 48.9551 10.0097 46.4844 9.98045L43.8672 9.95115L43.8281 8.41795C43.7988 6.93357 43.7891 6.86521 43.4961 6.24998C43.1055 5.43943 42.5 4.83396 41.6992 4.4531C41.0742 4.16013 41.0254 4.15037 39.3945 4.12107L37.7246 4.08201L37.666 3.06638C37.5781 1.57224 37.1875 0.839821 36.1914 0.312477L35.6934 0.0488052L25.1465 0.029274C18.9844 0.0195084 14.4727 0.0488052 14.2969 0.107399ZM35.5078 1.62107C35.9961 1.85545 36.1621 2.24607 36.2109 3.24216L36.25 4.10154H25H13.75L13.7891 3.24216C13.8379 2.25584 14.0039 1.85545 14.4727 1.63084C14.7656 1.48435 15.7715 1.46482 24.9805 1.46482C34.2188 1.46482 35.2051 1.48435 35.5078 1.62107ZM2.9297 15.8691V20.3125H2.19727H1.46485V15.8691V11.4258H2.19727H2.9297V15.8691ZM48.5352 15.8691V20.3125H47.8027H47.0703V15.8691V11.4258H47.8027H48.5352V15.8691ZM13.0371 37.4219C13.291 38.0273 13.5645 38.6719 13.6426 38.8379L13.7695 39.1601H10.6934H7.6172V37.7441V36.3281H10.0879H12.5684L13.0371 37.4219ZM42.3828 37.7441V39.1601H39.3066H36.2305L36.3574 38.8379C36.4356 38.6719 36.709 38.0273 36.9629 37.4219L37.4316 36.3281H39.9121H42.3828V37.7441ZM17.6758 46.5332V47.7539L17.3438 48.125L17.0117 48.4863H14.0137H11.0156L10.6836 48.125L10.3516 47.7539V46.5332V45.3125H14.0137H17.6758V46.5332ZM39.6484 46.5332V47.7539L39.3164 48.125L38.9844 48.4863H35.9863H32.9883L32.6563 48.125L32.3242 47.7539V46.5332V45.3125H35.9863H39.6484V46.5332Z" />
                    <path d="M12.6171 7.22656C12.1582 7.65625 12.4707 8.49609 13.0859 8.49609C13.457 8.49609 13.7695 8.16406 13.7695 7.76367C13.7695 7.36328 13.457 7.03125 13.0859 7.03125C12.9492 7.03125 12.7343 7.11914 12.6171 7.22656Z" />
                    <path d="M16.7578 7.23633C16.5723 7.38281 16.5039 7.5293 16.5039 7.76367C16.5039 7.99805 16.5723 8.14453 16.7578 8.29102C17.0215 8.49609 17.0703 8.49609 25 8.49609C32.9297 8.49609 32.9785 8.49609 33.2422 8.29102C33.5938 8.01758 33.5938 7.50977 33.2422 7.23633C32.9785 7.03125 32.9297 7.03125 25 7.03125C17.0703 7.03125 17.0215 7.03125 16.7578 7.23633Z" />
                    <path d="M36.4453 7.22654C36.1523 7.49997 36.1523 8.02732 36.4453 8.30076C36.9043 8.72068 37.5977 8.39841 37.5977 7.76365C37.5977 7.36326 37.2852 7.03122 36.9141 7.03122C36.7773 7.03122 36.5625 7.11911 36.4453 7.22654Z" />
                    <path d="M10.0586 10.1465C9.87305 10.2441 9.58984 10.4883 9.42383 10.6836L9.13086 11.0547L9.10156 19.5117C9.0918 24.1699 9.10156 28.125 9.13086 28.3008C9.19922 28.6914 9.70703 29.2871 10.127 29.4531C10.3906 29.5703 12.998 29.5898 25.0195 29.5898C39.0332 29.5898 39.6191 29.5801 39.9414 29.4043C40.127 29.3066 40.4102 29.0625 40.5762 28.8672L40.8691 28.4961V19.7754V11.0547L40.5762 10.6836C40.4102 10.4883 40.127 10.2441 39.9414 10.1465C39.6191 9.9707 39.0332 9.96094 25 9.96094C10.9668 9.96094 10.3809 9.9707 10.0586 10.1465ZM39.4043 19.7754V28.0762H25H10.5957L10.5664 19.873C10.5566 15.3613 10.5664 11.6113 10.5957 11.543C10.625 11.4453 13.5645 11.4258 25.0195 11.4453L39.4043 11.4746V19.7754Z" />
                    <path d="M16.5919 32.7441C16.1817 33.0176 15.8985 33.5449 15.9571 33.9355C15.9962 34.2285 18.3692 39.707 18.6232 40.1074C18.9649 40.625 18.9649 40.625 25.0001 40.625C31.0353 40.625 31.0353 40.625 31.3771 40.1074C31.631 39.707 34.004 34.2285 34.0431 33.9355C34.1017 33.5449 33.8185 33.0176 33.4083 32.7441C33.0958 32.5293 32.9884 32.5195 31.2306 32.5195C29.4044 32.5195 29.3849 32.5195 29.1505 32.7637C28.8575 33.0469 28.838 33.3887 29.0919 33.7012C29.2677 33.9258 29.3458 33.9355 30.879 33.9844L32.4903 34.0332L31.3575 36.5918L30.2345 39.1602H25.0001H19.7755L18.6427 36.5918L17.5099 34.0332L22.0411 33.9844L26.5821 33.9355L26.7677 33.7012C27.0216 33.3887 27.0021 33.0469 26.7091 32.7637L26.4747 32.5195H21.6993H16.9239L16.5919 32.7441Z" />
                    <path d="M21.1523 36.0449C20.9668 36.1914 20.8984 36.3379 20.8984 36.5723C20.8984 36.8066 20.9668 36.9531 21.1523 37.0996C21.4062 37.2949 21.5234 37.3047 25 37.3047C28.4766 37.3047 28.5938 37.2949 28.8477 37.0996C29.0332 36.9531 29.1016 36.8066 29.1016 36.5723C29.1016 36.3379 29.0332 36.1914 28.8477 36.0449C28.5938 35.8496 28.4766 35.8398 25 35.8398C21.5234 35.8398 21.4062 35.8496 21.1523 36.0449Z" />
                  </g>
                </svg>
                <FormattedMessage id="transfer" values={{ name }}/>
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className=" col-xl-6 px-0 "   >
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-restaurant" role="tabpanel" aria-labelledby="pills-restaurent-tab" tabIndex={0}>
            <Swiper className="swiper feature-slider" {...featuresSlide}>
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide"><img className="img-fluid" src="assets/images/bg/Restaurant001.png" alt="" /></SwiperSlide>
                <SwiperSlide className="swiper-slide"><img className="img-fluid" src="assets/images/bg/Restaurant002.png" alt="" /></SwiperSlide>
                <SwiperSlide className="swiper-slide"><img className="img-fluid" src="assets/images/bg/Restaurant003.png" alt="" /></SwiperSlide>
              </div>
              <div className="swiper-pagination" />
            </Swiper>
          </div>
          <div className="tab-pane fade" id="pills-parking" role="tabpanel" aria-labelledby="pills-parking-tab" tabIndex={0}>
            <Swiper className="swiper feature-slider" {...featuresSlide}>
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide"><img className="img-fluid" src="assets/images/bg/Car-Parking001.png" alt="" /></SwiperSlide>
                <SwiperSlide className="swiper-slide"><img className="img-fluid" src="assets/images/bg/Car-Parking002.png" alt="" /></SwiperSlide>
                <SwiperSlide className="swiper-slide"><img className="img-fluid" src="assets/images/bg/Car-Parking003.png" alt="" /></SwiperSlide>
              </div>
              <div className="swiper-pagination" />
            </Swiper>
          </div>
          <div className="tab-pane fade" id="pills-gym" role="tabpanel" aria-labelledby="pills-gym-tab" tabIndex={0}>
            <Swiper className="swiper feature-slider" {...featuresSlide}>
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide"><img className="img-fluid" src="assets/images/bg/Gym001.png" alt="" /></SwiperSlide>
                <SwiperSlide className="swiper-slide"><img className="img-fluid" src="assets/images/bg/Gym002.png" alt="" /></SwiperSlide>
                <SwiperSlide className="swiper-slide"><img className="img-fluid" src="assets/images/bg/Gym003.png" alt="" /></SwiperSlide>
              </div>
              <div className="swiper-pagination" />
            </Swiper>
          </div>
          <div className="tab-pane fade" id="pills-spa" role="tabpanel" aria-labelledby="pills-spa-tab" tabIndex={0}>
            <Swiper className="swiper feature-slider" {...featuresSlide}>
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide"><img className="img-fluid" src="assets/images/bg/Spa001.png" alt="" /></SwiperSlide>
                <SwiperSlide className="swiper-slide"><img className="img-fluid" src="assets/images/bg/Spa002.png" alt="" /></SwiperSlide>
                <SwiperSlide className="swiper-slide"><img className="img-fluid" src="assets/images/bg/Spa003.png" alt="" /></SwiperSlide>
              </div>
              <div className="swiper-pagination" />
            </Swiper>
          </div>
          <div className="tab-pane fade" id="pills-gaming" role="tabpanel" aria-labelledby="pills-gamming-tab" tabIndex={0}>
            <Swiper className="swiper feature-slider" {...featuresSlide}>
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide"><img className="img-fluid" src="assets/images/bg/Gaming001.png" alt="" /></SwiperSlide>
                <SwiperSlide className="swiper-slide"><img className="img-fluid" src="assets/images/bg/Gaming002.png" alt="" /></SwiperSlide>
                <SwiperSlide className="swiper-slide"><img className="img-fluid" src="assets/images/bg/Gaming003.png" alt="" /></SwiperSlide>
              </div>
              <div className="swiper-pagination" />
            </Swiper>
          </div>
          <div className="tab-pane fade" id="pills-transport" role="tabpanel" aria-labelledby="pills-transport-tab" tabIndex={0}>
            <Swiper className="swiper feature-slider" {...featuresSlide}>
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide"><img className="img-fluid" src="assets/images/bg/Transport001.png" alt="" /></SwiperSlide>
                <SwiperSlide className="swiper-slide"><img className="img-fluid" src="assets/images/bg/Transport002.png" alt="" /></SwiperSlide>
                <SwiperSlide className="swiper-slide"><img className="img-fluid" src="assets/images/bg/Transport003.png" alt="" /></SwiperSlide>
              </div>
              <div className="swiper-pagination" />
            </Swiper>
          </div>
          <div className="tab-pane fade" id="pills-pool" role="tabpanel" aria-labelledby="pills-pool-tab" tabIndex={0}>
            <Swiper className="swiper feature-slider" {...featuresSlide}>
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide"><img className="img-fluid" src="assets/images/bg/Pool001.png" alt="" /></SwiperSlide>
                <SwiperSlide className="swiper-slide"><img className="img-fluid" src="assets/images/bg/Pool002.png" alt="" /></SwiperSlide>
                <SwiperSlide className="swiper-slide"><img className="img-fluid" src="assets/images/bg/Pool003.png" alt="" /></SwiperSlide>
              </div>
              <div className="swiper-pagination" />
            </Swiper>
          </div>
          <div className="tab-pane fade" id="pills-locker" role="tabpanel" aria-labelledby="pills-locker-tab" tabIndex={0}>
            <Swiper className="swiper feature-slider" {...featuresSlide}>
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide"><img className="img-fluid" src="assets/images/bg/Locker001.png" alt="" /></SwiperSlide>
                <SwiperSlide className="swiper-slide"><img className="img-fluid" src="assets/images/bg/Locker002.png" alt="" /></SwiperSlide>
                <SwiperSlide className="swiper-slide"><img className="img-fluid" src="assets/images/bg/Locker003.png" alt="" /></SwiperSlide>
              </div>
              <div className="swiper-pagination" />
            </Swiper>
          </div>
        </div>
      </div> */}
    </div>
  </div>
</div>

  )
}

export default Feature1