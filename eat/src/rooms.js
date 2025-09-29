import './App.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Particles from './Particles';
import HamburgerMenu from './Hamburger';
import ScrollToTop from "./ScrollToTop";

function Rooms() {
  return (
      <div>
        <div style={{ width:'100vw', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 999, pointerEvents:'none', }}>
           <Particles    
                  particleColors={['#ffffff', '#ffffff']}
                  particleCount={1000}
                  particleSpread={10}
                  speed={0.1}
                  particleBaseSize={100}
                  moveParticlesOnHover={true}
                  alphaParticles={false}
                  disableRotation={false}
            />
          
        </div>

        <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
                          {/* Main Header*/}
              <header className="main-header">
                  <div className="header-top">
                      <div className="auto-container">
                          <div className="inner clearfix">
                              <div className="top-left clearfix">
                                  <ul className="top-info clearfix">
                                      <li><i className="icon far fa-map-marker-alt" /> Abuja Intercontiental, Wuze Zone 4</li>
                                      <li><i className="icon far fa-clock" /> Daily : 8.00 am to 10.00 pm</li>
                                  </ul>
                              </div>
                              <div className="top-right clearfix">
                                  <ul className="top-info clearfix">
                                      <li><a href="tel:+11234567890"><i className="icon far fa-phone" /> +1 123 456 7890</a></li>
                                      <li><a href="mailto:booking@restaurant.com"><i className="icon far fa-envelope" /> booking@restaurant.com</a></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
                  {/* Header Upper */}
                  <div className="header-upper">
                      <div className="auto-container">
                          {/* Main Box */}
                          <div className="main-box clearfix">
                              {/*Logo*/}
                              <div className="logo-box">
                                  <div className="logo"><a href="index.html" title="Abuja Intercontinental Hotel"><img src="assets/images/logo.png" alt="image" title="Abuja Intercontinental Hotel" /></a></div>
                              </div>
                              <div className="nav-box clearfix">
                                  {/*Nav Outer*/}
                                  <div className="nav-outer clearfix">
                                      <nav className="main-menu">
                                          <ul className="navigation clearfix">
                                              <li className=""><a href="/">Home</a>
                                              </li>
                                              <li className="current  has-mega-menu"><a href="rooms.js">Rooms & Suites</a>
                                              </li>
                                              <li><a href="restlounges.js">Resturant & Lounges</a></li>
                                              <li><a href="about.js">About Us</a></li>
                                              <li><a href="contact.js">Contact</a></li>
                                          </ul>
                                      </nav>
                                      {/* Main Menu End*/}
                                  </div>
                                  {/*Nav Outer End*/}
                                  <div className="links-box clearfix">
                                      <div className="link link-btn">
                                          <a href="contact.js" className="theme-btn btn-style-one clearfix">
                                              <span className="btn-wrap">
                                                  <span className="text-one">find a table</span>
                                                  <span className="text-two">find a table</span>
                                              </span>
                                          </a>
                                      </div>

                                      <HamburgerMenu/>
                                    </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </header>
              {/*End Main Header */}
              {/*Menu Backdrop*/}
              <div className="menu-backdrop" />
              {/* Hidden Navigation Bar */}
              <section className="hidden-bar">
                  {/* Hidden Bar Wrapper */}
                  <div className="inner-box">
                      <div className="cross-icon hidden-bar-closer"><span className="far fa-close" /></div>
                      <div className="logo-box"><a href="index.html" title="Abuja Intercontinental Hotel"><img src="images/resource/sidebar-logo.png" alt="image" title="Abuja Intercontinental Hotel" /></a></div>
                      {/* .Side-menu */}
                      <div className="side-menu">
                          <ul className="navigation clearfix">
                              <li className="dropdown"><a href="/">Home</a>
                              </li>
                              <li className="current dropdown"><a href="rooms.js">Rooms & Suites</a>
                              </li>
                              <li><a href="restlounges.js">Resturant & Lounges</a></li>
                              <li><a href="about.js">About Us</a></li>
                              <li><a href="contact.js">Contact</a></li>
                          </ul>
                      </div>{/* /.Side-menu */}
                  </div>{/* / Hidden Bar Wrapper */}
              </section>
              {/* / Hidden Bar */}
              {/*Info Back Drop*/}
              <div className="info-back-drop" />
              {/* Hidden Bar */}
              <section className="info-bar">
                  <div className="inner-box">
                      <div className="cross-icon"><span className="far fa-close" /></div>
                      <div className="image-box"><img src="images/resource/sidebar-image.jpg" alt="image" title /></div>
                      <div className="logo-box"><a href="index.html" title="Abuja Intercontinental Hotel"><img src="images/resource/sidebar-logo.png" alt="image" title="Abuja Intercontinental Hotel" /></a></div>
                      <h5>Visit Us</h5>
                      <ul className="info">
                          <li>Abuja Intercontiental, <br /> Wuze Zone 4</li>
                          <li> <span className="ib-ttl"> Lunch Time </span>- 10.00 am – 3:30 pm </li>
                          <li><span className="ib-ttl"> Dinner Time</span> - 08.00 pm – 10:30 pm</li>
                          <li><a href="mailto:booking@domainame.com">booking@domainame.com</a></li>
                      </ul>
                      <div className="booking-info">
                          <div className="bk-no"><a href="tel:+234 (0) 2094612000 / 08070602727">Booking: +234 (0) 2094612000 / 08070602727</a></div>
                      </div>
                  </div>
              </section>
              {/*End Hidden Bar */}
              {/* Inner Banner Section */}
              <section className="inner-banner">
                  <div className="image-layer" style={{ backgroundImage: 'url(assets/images/rooms/general.jpg)' }} />
                  <div className="auto-container">
                      <div className="inner">
                          <h1>Luxurious, Exclusive & Comfortable Rooms</h1>
                      </div>
                  </div>
              </section>
              {/*End Banner Section */}
              {/*Special Offer Section*/}
              <section className="special-offer-two section-kt">
                  <div className="auto-container">
                      <div className="title-box centered">
                          <div className="subtitle"><span>starter</span></div>
                          <h2>Exclusive Rooms</h2>
                      </div>
                      <div className="row clearfix">
                          {/*Item*/}
                          <div className="offer-block-three col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                              <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
                                  <br /> <br />
                                  <div className="image"><a href="menu-list-2.html#"><img src="assets/images/rooms/Diplomatic.jpg" alt="image" /></a></div>
                                  <h5><a href="menu-list-1.html">Diplomatic Suite</a></h5>
                                  <div className="text desc text-light">Experience an unparalleled luxury and pleasure within the confines of our prestigious Diplomatic Suite. Designed for discerning guests who require the utmost comfort, space, and privacy in the heart of the city.</div>
                              </div>
                          </div>
                          {/*Item*/}
                          <div className="offer-block-three col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                              <div className="inner-box special-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                                  <br /> <br />
                                  <div className="image"><a href="menu-list-2.html#"><img src="assets/images/rooms/Presidential.jpg" alt="image" /></a> <span className="special-tag">Popular</span> </div>
                                  <h5><a href="menu-list-1.html">Presidential Suite</a></h5>
                                  <div className="text desc text-light">Experience unparalleled Luxury in Our Presidential Suite - Where Every Detail Reflects Your Elite Status and Every Moment Exudes Prestige.</div>
                              </div>
                          </div>
                          {/*Item*/}
                          <div className="offer-block-three col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                              <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="400ms">
                                   <br /> <br />
                                  <div className="image"><a href="menu-list-2.html#"><img src="/assets/images/rooms/Super-King.jpg" alt="image" /></a></div>
                                  <h5><a href="menu-list-1.html">Superior King Suite</a></h5>
                                  <div className="text desc text-light">Unwind in the refined comfort of our Superior King Room.</div>
                              </div>
                          </div>
                          {/*Item*/}
                          <div className="offer-block-three col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                              <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="600ms">
                                  <br /> <br />
                                  <div className="image"><a href="menu-list-2.html#"><img src="assets/images/rooms/Executive-Suite.jpg" alt="image" /></a></div>
                                  <h5><a href="menu-list-1.html">Executive Suite</a></h5>
                                  <div className="text desc text-light">Discover the perfect blend of privacy, flexibility, and professional amenities in our executive suites.</div>
                              </div>
                          </div>
                          {/*Item*/}
                          <div className="offer-block-three col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                              <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
                                  <br /> <br />
                                  <div className="image"><a href="menu-list-2.html#"><img src="/assets/images/rooms/Deluxe.jpg" alt="image" /></a></div>
                                  <h5><a href="menu-list-1.html">Deluxe Suite</a></h5>
                                  <div className="text desc text-light">Experience timeless elegance in our Deluxe Room, featuring a plush king-size bed, cozy seating area, and stunning city or pool views. Enjoy modern comforts with high-speed Wi-Fi, a minibar, and a flat-screen TV, while the spa-inspired bathroom with luxury amenities ensures total relaxation.</div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              {/*Special Offer Section*/}
              <section className="special-offer-two section-kt">
                  <div className="auto-container">
                      <div className="title-box centered">
                          <div className="subtitle"><span>Delights</span></div>
                          <h2>Premium Executive Suite</h2>
                      </div>
                      <div className="row clearfix">
                          {/*Item*/}
                          <div className="offer-block-three col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                              <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
                                  <br /> <br /> 
                                  <div className="image"><a href="menu-list-2.html#"><img  src="assets/images/rooms/Prem-Exe.jpg" alt="image" /></a></div>
                                  <h5><a href="menu-list-1.html">Premium Suites</a></h5>
                                  <div className="text desc text-light text-light">Step into our Premium Executive Suite, where luxury embraces you. From the plush furnishings to the panoramic city views, every moment is a masterpiece of indulgence.</div>
                              </div>
                          </div>
                          {/*Item*/}
                          <div className="offer-block-three col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                              <div className="inner-box special-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                                  <br /> <br /> 
                                  <div className="image"><a href="menu-list-2.html#"><img src="/assets/images/rooms/Prem-Jun.jpg" alt="image" /></a> <span className="special-tag">Popular</span> </div>
                                  <h5><a href="menu-list-1.html">Premium Junior</a></h5>
                                  <div className="text desc text-light text-light">Discover Unparalleled Comfort in Our Premium Junior Suites – Elevate Your Stay to a New Level of Luxury.</div>
                              </div>
                          </div>
                          {/*Item*/}
                          <div className="offer-block-three col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                              <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="400ms">
                                    <br /> <br />
                                  <div className="image"><a href="menu-list-2.html#"><img src="/assets/images/rooms/Prem-Jun.jpg" alt="image" /></a></div>  
                                  <h5><a href="menu-list-1.html text-light">Premium Executive Suite</a></h5>
                                  <div className="text desc text-light text-light">Step into our Premium Executive Suite, where luxury embraces you. From the plush furnishings to the panoramic city views, every moment is a masterpiece of indulgence.</div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              {/*Reservation Section*/}
              <section className="reserve-section style-two section-kt">
                  <div className="image-layer" style={{ backgroundImage: 'url(images/background/image-10.jpg)' }} />
                  <div className="auto-container">
                      <div className="outer-box">
                          <div className="row clearfix">
                              <div className="reserv-col col-lg-8 col-md-12 col-sm-12 mx-auto">
                                  <div className="inner">
                                      <div className="title-box centered">
                                          <div className="subtitle"><span> reservation</span></div>
                                          <h2>Book A Table</h2>
                                          <div className="request-info">Booking request <a href="menu-list-2.html#">+234 (0) 2094612000 / 08070602727</a> or fill out the order form</div>
                                      </div>
                                      <div className="default-form reservation-form">
                                          <form method="post" action="index.html">
                                              <div className="row clearfix">
                                                  <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                                      <div className="field-inner"><input type="text" name="fieldname" defaultValue="" placeholder="Your Name" required />                                                      </div>
                                                  </div>
                                                  <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                                      <div className="field-inner">
                                                          <input type="number" name="fieldname" defaultValue="" placeholder="Phone Number" required />                                                      
                                                        </div>
                                                  </div>
                                                  <div className="form-group col-lg-4 col-md-6 col-sm-12">
                                                      <div className="field-inner">
                                                          <span className="alt-icon far fa-user" />
                                                          <select className="l-icon">
                                                              <option>1 Person</option>
                                                              <option>2 Person</option>
                                                              <option>3 Person</option>
                                                              <option>4 Person</option>
                                                              <option>5 Person</option>
                                                              <option>6 Person</option>
                                                              <option>7 Person</option>
                                                          </select>
                                                          <span className="arrow-icon far fa-angle-down" />
                                                      </div>
                                                  </div>
                                                  <div className="form-group col-lg-4 col-md-6 col-sm-12">
                                                      <div className="field-inner">
                                                          <span className="alt-icon far fa-calendar" />
                                                              <input
                                                                  className="l-icon datepicker"
                                                                  type="date"
                                                                  name="fieldname"
                                                                  defaultValue=""
                                                                  placeholder="DD-MM-YYYY"
                                                                  required
                                                              />
                                                          <span className="arrow-icon" />
                                                      </div>
                                                  </div>
                                                  <div className="form-group col-lg-4 col-md-12 col-sm-12">
                                                      <div className="field-inner">
                                                          <span className="alt-icon far fa-clock" />
                                                          <select className="l-icon">
                                                              <option>08 : 00 am</option>
                                                              <option>09 : 00 am</option>
                                                              <option>10 : 00 am</option>
                                                              <option>11 : 00 am</option>
                                                              <option>12 : 00 pm</option>
                                                              <option>01 : 00 pm</option>
                                                              <option>02 : 00 pm</option>
                                                              <option>03 : 00 pm</option>
                                                              <option>04 : 00 pm</option>
                                                              <option>05 : 00 pm</option>
                                                              <option>06 : 00 pm</option>
                                                              <option>07 : 00 pm</option>
                                                              <option>08 : 00 pm</option>
                                                              <option>09 : 00 pm</option>
                                                              <option>10 : 00 pm</option>
                                                          </select>
                                                          <span className="arrow-icon far fa-angle-down" />
                                                      </div>
                                                  </div>
                                                  <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                                      <div className="field-inner">
                                                          <textarea name="fieldname" placeholder="Message" required defaultValue={""} />
                                                      </div>
                                                  </div>
                                                  <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                                      <div className="field-inner">
                                                          <button type="submit" className="theme-btn btn-style-one clearfix">
                                                              <span className="btn-wrap">
                                                                  <span className="text-one">book a table</span>
                                                                  <span className="text-two">book a table</span>
                                                              </span>
                                                          </button>
                                                      </div>
                                                  </div>
                                              </div>
                                          </form>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              {/*Main Footer*/}
              <footer className="main-footer">
                  <div className="upper-section">
                      <div className="fluid-section">
                          <div className="row clearfix">
                              {/*Footer Col*/}
                              <div className="footer-col footer-map-col col-lg-6 col-md-12 col-sm-12 px-0">
                                  <div className="footer-map">
                                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.998661644971!2d7.481666175010819!3d9.063885088441936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b5fcf7624d5%3A0x2b03f1d1ef382d7f!2sAbuja%20Continental%20Hotel!5e0!3m2!1sen!2sng!4v1758959024881!5m2!1sen!2sng" width="100%" height={500} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                  </div>
                              </div>
                              {/*Footer Col*/}
                              <div className="footer-col info-col col-lg-6 col-md-12 col-sm-12 px-0">
                                  <div className="inner wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                      <div className="content">
                                          <div className="footer-image">
                                              <img src="/assets/images/resource/footer-img-1.jpg" alt="image" />
                                          </div>
                                          <div className="logo"><a href="index.html" title="Abuja Intercontinental Hotel"><img src="/assets/images/logo.png" alt="image" title="Abuja Intercontinental Hotel" /></a></div>
                                          <div className="info">
                                              <h6>visit us </h6>
                                              <ul>
                                                  <li>Abuja Intercontiental 1, Ladi Kwali Street, Wuse Zone 4,</li>
                                                  <li>Daily - 8.00 am to 10.00 pm</li>
                                                  <li><a href="mailto:info@abujacontinental.com">info@abujacontinental.com</a></li>
                                                  <li><a href="tel:+08070602727">Booking Request : +234 (0) 2094612000 / 08070602727</a></li>
                                              </ul>
                                          </div>
                                      </div>
                                      {/* last footer */}
                                      <div className="bottom_footer">
                                          {/* container start */}
                                          <div className="auto-container">
                                              {/* row start */}
                                              <div className="row clearfix">
                                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                                      <p>© 2025 All Rights Reserved</p>
                                                  </div>
                                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                                      <ul className="social_media">
                                                          <li><a href="https://themeforest.net/user/kalanidhithemes/portfolio" aria-label="facebook page"><i className="fa-brands fa-facebook-f" /></a></li>
                                                          <li><a href="https://www.behance.net/kalanidhithemes" aria-label="twitter page"><i className="fa-brands fa-instagram" /></a></li>
                                                          <li><a href="https://themeforest.net/user/kalanidhithemes/portfolio" aria-label="instagram page"><i className="fa-brands fa-pinterest-p" /></a></li>
                                                          <li><a href="https://themeforest.net/user/kalanidhithemes/portfolio" aria-label="pinterest page"><i className="fa-brands fa-youtube" /></a></li>
                                                      </ul>
                                                  </div>
                                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                                      <p className="developer_text">Crafted by <a href="https://themeforest.net/user/kalanidhithemes/portfolio" target="blank">Kalanidhi Themes</a></p>
                                                  </div>
                                              </div>
                                              {/* row end */}
                                          </div>
                                          {/* container end */}
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </footer>
          </div>
          {/*End pagewrapper*/}
          {/*Scroll to top*/}
          <ScrollToTop />
      </div>


    
  );
}

export default Rooms