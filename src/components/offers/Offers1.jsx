import React from "react";
import Link from "next/link";
function Offers1() {
  return (
    <div className="home-one-offers mb-120">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-title1 text-center">
            <span>Hotel Offer</span>
            <h2>Best Summer Offer</h2>
          </div>
        </div>
      </div>
      <div className="row g-4 justify-content-center">
        <div className="col-lg-7">
          <div className="scroll-offer">
            <div className="single-offer mb-30">
              <img className="img-fluid" src="assets/images/bg/offer-img-1.png" alt="" />
              <div className="offer-card d-flex align-items-center">
                <div className="offer">
                  <svg width={64} height={64} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <path d="M64 27.723L61.2363 30.7235L63.3536 34.1993L60.055 36.6196L61.4815 40.4269L57.7984 42.2117L58.5283 46.2124L54.5945 47.3452L54.639 51.4122L50.5659 51.8874L49.9307 55.8992L45.8408 55.6947L44.5314 59.5462L40.5363 58.6455L38.5582 62.2041L34.7971 60.5961L32.1839 63.7237L29.0636 61.4194L26.1717 64L23.5528 61.1432L20.1985 63.0938L18.2427 59.7562L14.5429 60.9442L13.3839 57.2585L9.50583 57.5845L9.22723 53.733L5.37698 53.1749L5.9899 49.3621L2.36253 47.9586L3.81125 44.3723L0.573916 42.2283L2.74142 39.0178L0 36.277L2.76371 33.282L0.651924 29.8007L3.94498 27.3859L2.51854 23.5731L6.20164 21.7883L5.4717 17.7931L9.40554 16.6548L9.36653 12.5933L13.4341 12.1181L14.0693 8.10085L18.1592 8.3053L19.4686 4.45933L23.4637 5.36004L25.4418 1.80142L29.2029 3.4039L31.8217 0.276291L34.942 2.58608L37.8339 0L40.4472 2.86237L43.8071 0.906234L45.7573 4.24383L49.4627 3.0613L50.6161 6.74702L54.4942 6.41547L54.7728 10.267L58.623 10.8251L58.0101 14.6379L61.6375 16.0414L60.1888 19.6277L63.4261 21.7717L61.2586 24.9822L64 27.723Z" />
                  </svg>
                  <div className="content">
                    <h4>50%</h4>
                    <span>OFF</span>
                  </div>
                </div>
                <div className="day">
                  <span>01 Day Left</span>
                </div>
              </div>
              <div className="content d-flex justify-content-between align-items-center">
                <div className="left-content">
                  <div className="price-tag">
                    <span>$350</span> / Per Night
                  </div>
                  <h3><Link href="/room-suits-details"><a>Double Room</a></Link></h3>
                  <ul className="stars d-flex align-items-center">
                    <li><i className="bi bi-star-fill" /></li>
                    <li><i className="bi bi-star-fill" /></li>
                    <li><i className="bi bi-star-fill" /></li>
                    <li><i className="bi bi-star-fill" /></li>
                    <li><i className="bi bi-star-fill" /></li>
                  </ul>
                </div>
                <div className="book-btn">
                  <Link href="/room-suits-details"><a className="btn--primary2">Book Now</a></Link>
                </div>
              </div>
            </div>
            <div className="single-offer mb-30">
              <img className="img-fluid" src="assets/images/bg/offer-img-2.png" alt="" />
              <div className="offer-card d-flex align-items-center">
                <div className="offer">
                  <svg width={64} height={64} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <path d="M64 27.723L61.2363 30.7235L63.3536 34.1993L60.055 36.6196L61.4815 40.4269L57.7984 42.2117L58.5283 46.2124L54.5945 47.3452L54.639 51.4122L50.5659 51.8874L49.9307 55.8992L45.8408 55.6947L44.5314 59.5462L40.5363 58.6455L38.5582 62.2041L34.7971 60.5961L32.1839 63.7237L29.0636 61.4194L26.1717 64L23.5528 61.1432L20.1985 63.0938L18.2427 59.7562L14.5429 60.9442L13.3839 57.2585L9.50583 57.5845L9.22723 53.733L5.37698 53.1749L5.9899 49.3621L2.36253 47.9586L3.81125 44.3723L0.573916 42.2283L2.74142 39.0178L0 36.277L2.76371 33.282L0.651924 29.8007L3.94498 27.3859L2.51854 23.5731L6.20164 21.7883L5.4717 17.7931L9.40554 16.6548L9.36653 12.5933L13.4341 12.1181L14.0693 8.10085L18.1592 8.3053L19.4686 4.45933L23.4637 5.36004L25.4418 1.80142L29.2029 3.4039L31.8217 0.276291L34.942 2.58608L37.8339 0L40.4472 2.86237L43.8071 0.906234L45.7573 4.24383L49.4627 3.0613L50.6161 6.74702L54.4942 6.41547L54.7728 10.267L58.623 10.8251L58.0101 14.6379L61.6375 16.0414L60.1888 19.6277L63.4261 21.7717L61.2586 24.9822L64 27.723Z" />
                  </svg>
                  <div className="content">
                    <h4>30%</h4>
                    <span>OFF</span>
                  </div>
                </div>
                <div className="day">
                  <span>01 Day Left</span>
                </div>
              </div>
              <div className="content d-flex justify-content-between align-items-center">
                <div className="left-content">
                  <div className="price-tag">
                    <span>$550</span> / Per Night
                  </div>
                  <h3><Link href="/room-suits-details"><a>Family Room</a></Link></h3>
                  <ul className="stars d-flex align-items-center">
                    <li><i className="bi bi-star-fill" /></li>
                    <li><i className="bi bi-star-fill" /></li>
                    <li><i className="bi bi-star-fill" /></li>
                    <li><i className="bi bi-star-fill" /></li>
                    <li><i className="bi bi-star-fill" /></li>
                  </ul>
                </div>
                <div className="book-btn">
                <Link href="/room-suits-details"><a className="btn--primary2">Book Now</a></Link>
                </div>
              </div>
            </div>
            <div className="single-offer mb-30">
              <img className="img-fluid" src="assets/images/bg/offer-img-3.png" alt="" />
              <div className="offer-card d-flex align-items-center">
                <div className="offer">
                  <svg width={64} height={64} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <path d="M64 27.723L61.2363 30.7235L63.3536 34.1993L60.055 36.6196L61.4815 40.4269L57.7984 42.2117L58.5283 46.2124L54.5945 47.3452L54.639 51.4122L50.5659 51.8874L49.9307 55.8992L45.8408 55.6947L44.5314 59.5462L40.5363 58.6455L38.5582 62.2041L34.7971 60.5961L32.1839 63.7237L29.0636 61.4194L26.1717 64L23.5528 61.1432L20.1985 63.0938L18.2427 59.7562L14.5429 60.9442L13.3839 57.2585L9.50583 57.5845L9.22723 53.733L5.37698 53.1749L5.9899 49.3621L2.36253 47.9586L3.81125 44.3723L0.573916 42.2283L2.74142 39.0178L0 36.277L2.76371 33.282L0.651924 29.8007L3.94498 27.3859L2.51854 23.5731L6.20164 21.7883L5.4717 17.7931L9.40554 16.6548L9.36653 12.5933L13.4341 12.1181L14.0693 8.10085L18.1592 8.3053L19.4686 4.45933L23.4637 5.36004L25.4418 1.80142L29.2029 3.4039L31.8217 0.276291L34.942 2.58608L37.8339 0L40.4472 2.86237L43.8071 0.906234L45.7573 4.24383L49.4627 3.0613L50.6161 6.74702L54.4942 6.41547L54.7728 10.267L58.623 10.8251L58.0101 14.6379L61.6375 16.0414L60.1888 19.6277L63.4261 21.7717L61.2586 24.9822L64 27.723Z" />
                  </svg>
                  <div className="content">
                    <h4>20%</h4>
                    <span>OFF</span>
                  </div>
                </div>
                <div className="day">
                  <span>01 Day Left</span>
                </div>
              </div>
              <div className="content d-flex justify-content-between align-items-center">
                <div className="left-content">
                  <div className="price-tag">
                    <span>$380</span> / Per Night
                  </div>
                  <h3><Link href="/room-suits-details"><a> Deluxe Room</a></Link></h3>
                  <ul className="stars d-flex align-items-center">
                    <li><i className="bi bi-star-fill" /></li>
                    <li><i className="bi bi-star-fill" /></li>
                    <li><i className="bi bi-star-fill" /></li>
                    <li><i className="bi bi-star-fill" /></li>
                    <li><i className="bi bi-star-fill" /></li>
                  </ul>
                </div>
                <div className="book-btn">
                <Link href="/room-suits-details"><a className="btn--primary2">Book Now</a></Link>
                </div>
              </div>
            </div>
            <div className="single-offer mb-30">
              <img className="img-fluid" src="assets/images/bg/offer-img-1.png" alt="" />
              <div className="offer-card d-flex align-items-center">
                <div className="offer">
                  <svg width={64} height={64} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <path d="M64 27.723L61.2363 30.7235L63.3536 34.1993L60.055 36.6196L61.4815 40.4269L57.7984 42.2117L58.5283 46.2124L54.5945 47.3452L54.639 51.4122L50.5659 51.8874L49.9307 55.8992L45.8408 55.6947L44.5314 59.5462L40.5363 58.6455L38.5582 62.2041L34.7971 60.5961L32.1839 63.7237L29.0636 61.4194L26.1717 64L23.5528 61.1432L20.1985 63.0938L18.2427 59.7562L14.5429 60.9442L13.3839 57.2585L9.50583 57.5845L9.22723 53.733L5.37698 53.1749L5.9899 49.3621L2.36253 47.9586L3.81125 44.3723L0.573916 42.2283L2.74142 39.0178L0 36.277L2.76371 33.282L0.651924 29.8007L3.94498 27.3859L2.51854 23.5731L6.20164 21.7883L5.4717 17.7931L9.40554 16.6548L9.36653 12.5933L13.4341 12.1181L14.0693 8.10085L18.1592 8.3053L19.4686 4.45933L23.4637 5.36004L25.4418 1.80142L29.2029 3.4039L31.8217 0.276291L34.942 2.58608L37.8339 0L40.4472 2.86237L43.8071 0.906234L45.7573 4.24383L49.4627 3.0613L50.6161 6.74702L54.4942 6.41547L54.7728 10.267L58.623 10.8251L58.0101 14.6379L61.6375 16.0414L60.1888 19.6277L63.4261 21.7717L61.2586 24.9822L64 27.723Z" />
                  </svg>
                  <div className="content">
                    <h4>50%</h4>
                    <span>OFF</span>
                  </div>
                </div>
                <div className="day">
                  <span>01 Day Left</span>
                </div>
              </div>
              <div className="content d-flex justify-content-between align-items-center">
                <div className="left-content">
                  <div className="price-tag">
                    <span>$350</span> / Per Night
                  </div>
                  <h3><Link href="/room-suits-details"><a>Double Room</a></Link></h3>
                  <ul className="stars d-flex align-items-center">
                    <li><i className="bi bi-star-fill" /></li>
                    <li><i className="bi bi-star-fill" /></li>
                    <li><i className="bi bi-star-fill" /></li>
                    <li><i className="bi bi-star-fill" /></li>
                    <li><i className="bi bi-star-fill" /></li>
                  </ul>
                </div>
                <div className="book-btn">
                <Link href="/room-suits-details"><a className="btn--primary2">Book Now</a></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-9">
          <div className="single-offer2 mb-30">
            <div className="offer-img">
              <img className="img-fluid" src="assets/images/bg/offer-img-21.png" alt="" />
            </div>
            <div className="offer-batch">
              <div className="offer">
                <img src="assets/images/icons/offer-bg.svg" alt="" />
                <div className="content">
                  <h4>50%</h4>
                  <span>OFF</span>
                </div>
              </div>
            </div>
            <div className="background" />
            <div className="offer-content">
              <div className="price-tag">
                <span>$600</span> / Per Night
              </div>
              <h3><Link href="/room-suits-details"><a>Luxury Room</a></Link></h3>
              <div className="bed-and-person d-flex align-items-center">
                <div className="bed-qty">
                  <p><img src="assets/images/icons/double-bed.svg" alt="" /> 2 Double Bed</p>
                </div>
                <div className="persons">
                  <p><img src="assets/images/icons/persons.svg" alt="" />6  Guest</p>
                </div>
              </div>
              <div className="book-btn">
              <Link href="/room-suits-details"><a className="btn--primary2">Book Now</a></Link>
              </div>
            </div>
          </div>
          <div className="single-offer2 mb-30">
            <div className="offer-img">
              <img className="img-fluid" src="assets/images/bg/offer-img-22.png" alt="" />
            </div>
            <div className="offer-batch">
              <div className="offer">
                <img src="assets/images/icons/offer-bg.svg" alt="" />
                <div className="content">
                  <h4>50%</h4>
                  <span>OFF</span>
                </div>
              </div>
            </div>
            <div className="background" />
            <div className="offer-content">
              <div className="price-tag">
                <span>$320</span> / Per Night
              </div>
              <h3><Link href="/room-suits-details"><a>Luxury Room</a></Link></h3>
              <div className="bed-and-person d-flex align-items-center">
                <div className="bed-qty">
                  <p><img src="assets/images/icons/double-bed.svg" alt="" /> 2 Double Bed</p>
                </div>
                <div className="persons">
                  <p><img src="assets/images/icons/persons.svg" alt="" />6  Guest</p>
                </div>
              </div>
              <div className="book-btn">
              <Link href="/room-suits-details"><a className="btn--primary2">Book Now</a></Link>
              </div>
            </div>
          </div>
          <div className="single-offer2 mb-30">
            <div className="offer-img">
              <img className="img-fluid" src="assets/images/bg/offer-img-23.png" alt="" />
            </div>
            <div className="offer-batch">
              <div className="offer">
                <img src="assets/images/icons/offer-bg.svg" alt="" />
                <div className="content">
                  <h4>50%</h4>
                  <span>OFF</span>
                </div>
              </div>
            </div>
            <div className="background" />
            <div className="offer-content">
              <div className="price-tag">
                <span>$600</span> / Per Night
              </div>
              <h3><Link href="/room-suits-details"><a>Luxury Room</a></Link></h3>
              <div className="bed-and-person d-flex align-items-center">
                <div className="bed-qty">
                  <p><img src="assets/images/icons/double-bed.svg" alt="" /> 2 Double Bed</p>
                </div>
                <div className="persons">
                  <p><img src="assets/images/icons/persons.svg" alt="" />6  Guest</p>
                </div>
              </div>
              <div className="book-btn">
              <Link href="/room-suits-details"><a className="btn--primary2">Book Now</a></Link>
              </div>
            </div>
          </div>
          <div className="offer-banner d-flex align-items-center">
            <div className="left-banner">
              <span className="vector" />
              <h5>Get 20% Off Of 1st Book!</h5>
              <span>Use Coupon Code</span>
              <p>BOOK-NOW-0256</p>
            </div>
            <div className="right-banner">
              <h3>This</h3>
              <h3 className="sammer">Summer</h3>
              <h3 className="offer">Offer</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default Offers1;
