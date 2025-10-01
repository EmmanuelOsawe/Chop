import './App.css';
import "swiper/css";
import "swiper/css/pagination";
import Particles from './Particles';
import HamburgerMenu from './Hamburger';
import ScrollToTop from "./ScrollToTop";

function Rest() {
  return (
      <div>
          <div style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 999, pointerEvents: 'none', }}>
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
                                      <li><i className="icon far fa-map-marker-alt" /> Abuja Continental 1, Ladi Kwali Street, Wuse Zone 4,</li>
                                      <li><i className="icon far fa-clock" /> Daily : 8.00 am to 10.00 pm</li>
                                  </ul>
                              </div>
                              <div className="top-right clearfix">
                                  <ul className="top-info clearfix">
                                      <li><a href="tel:+8070602727"><i className="icon far fa-phone" /> +234 (0) 2094612000 / 08070602727</a></li>
                                      <li><a href="mailto:info@abujacontinental.com"><i className="icon far fa-envelope" /> info@abujacontinental.com</a></li>
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
                                  <div className="logo"><a href="index.html" title="Abuja Intercontinenal"><img src="/assets/images/logo.png" alt="image" title="Abuja Intercontinenal" /></a></div>
                              </div>
                              <div className="nav-box clearfix">
                                  {/*Nav Outer*/}
                                  <div className="nav-outer clearfix">
                                      <nav className="main-menu">
                                          <ul className="navigation clearfix">
                                              <li className=""><a href="/">Home</a>
                                              </li>
                                              <li className="has-mega-menu"><a href="rooms.js">Rooms & Suites</a>
                                              </li>
                                              <li><a href="restlounges.js">Resturant & Lounges</a></li>
                                              <li><a href="about.js">About Us</a></li>
                                              <li className="current"><a href="contact-us.html">Contact</a></li>
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
                      <div className="logo-box"><a href="index.html" title="Abuja Intercontinenal"><img src="assets/images/rooms/logo.png" alt="image" title="Abuja Intercontinenal" /></a></div>
                      {/* .Side-menu */}
                      <div className="side-menu">
                          <ul className="navigation clearfix">
                              <li className="dropdown"><a href="/">Home</a>
                              </li>
                              <li className="current dropdown"><a href="menu-list-1.html">Rooms & Suites</a>
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
                      <div className="logo-box"><a href="index.html" title="Abuja Intercontinenal"><img src="/assets/images/logo.png" alt="image" title="Abuja Intercontinenal" /></a></div>
                      <h5>Visit Us</h5>
                      <ul className="info">
                          <li>Restoria, Arrondissement,<br />Paris 9578</li>
                          <li> <span className="ib-ttl"> Lunch Time </span>- 10.00 am – 3:30 pm </li>
                          <li><span className="ib-ttl"> Dinner Time</span> - 08.00 pm – 10:30 pm</li>
                          <li><a href="mailto:booking@domainame.com">booking@domainame.com</a></li>
                      </ul>
                      <div className="booking-info">
                          <div className="bk-no"><a href="tel:23408070602727">Booking: 23408070602727</a></div>
                      </div>
                  </div>
              </section>
              {/*End Hidden Bar */}
              {/* Inner Banner Section */}
              <section className="inner-banner">
                  <div className="image-layer" style={{ backgroundImage: 'url(/assets/images/gallery/rest-loun.jpg)' }} />
                  <div className="auto-container">
                      <div className="inner">
                          <h1>Exquisite Restaurants & Vibrant Lounges </h1>
                          <div className="sub_text"> <p> Savor African, International & Pan-Asian Flavors in Abuja</p> </div>
                      </div>
                  </div>
              </section>
              {/*End Banner Section */}
              {/*Contact Info Section*/}
              <section className="gallery-page section-kt">
                  <div className="auto-container">
                      <div className="row clearfix">
                          <div className="masonry">
                              <div className="masonry-item">
                                  <a href="/assets/images/gallery/1.jpg" className="fancybox" data-fancybox="gallery">
                                      <img src="/assets/images/gallery/1.jpg" alt="Gallery Image" />
                                  </a>
                              </div>
                              <div className="masonry-item">
                                  <a href="assets/images/gallery/Blog.jpg" className="fancybox" data-fancybox="gallery">
                                      <img src="assets/images/gallery/Blog.jpg" alt="Gallery Image" />
                                  </a>
                              </div>
                              <div className="masonry-item">
                                  <a href="assets/images/gallery/LobbyBar-Gallery.jpg" className="fancybox" data-fancybox="gallery">
                                      <img src="assets/images/gallery/LobbyBar-Gallery.jpg" alt="Gallery Image" />
                                  </a>
                              </div>
                              <div className="masonry-item">
                                  <a href="assets/images/gallery/meeting.jpg" className="fancybox" data-fancybox="gallery">
                                      <img src="assets/images/gallery/meeting.jpg" alt="Gallery Image" />
                                  </a>
                              </div>
                              <div className="masonry-item">
                                  <a href="assets/images/gallery/rest-loun.jpg" className="fancybox" data-fancybox="gallery">
                                      <img src="assets/images/gallery/rest-loun.jpg" alt="Gallery Image" />
                                  </a>
                              </div>
                              <div className="masonry-item">
                                  <a href="/assets/images/gallery/Tennis-Court.jpg" className="fancybox" data-fancybox="gallery">
                                      <img src="/assets/images/gallery/Tennis-Court.jpg" alt="Gallery Image" />
                                  </a>
                              </div>
                              <div className="masonry-item">
                                  <a href="assets/images/gallery/Testimonal.jpg" className="fancybox" data-fancybox="gallery">
                                      <img src="assets/images/gallery/Testimonial.jpg" alt="Gallery Image" />
                                  </a>
                              </div>
                              <div className="masonry-item">
                                  <a href="assets/images/gallery/Wazobia.jpg" className="fancybox" data-fancybox="gallery">
                                      <img src="assets/images/gallery/Wazobia.jpg" alt="Gallery Image" />
                                  </a>
                              </div>
                              <div className="masonry-item">
                                  <a href="assets/images/gallery/weddings-events-banner.jpg" className="fancybox" data-fancybox="gallery">
                                      <img src="assets/images/gallery/weddings-events-banner.jpg" alt="Gallery Image" />
                                  </a>
                              </div>
                              {/* Add more items as needed */}
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
                                          <div className="logo"><a href="index.html" title="Abuja Intercontinenal"><img src="/assets/images/logo.png" alt="image" title="Abuja Intercontinenal" /></a></div>
                                          <div className="info">
                                              <h6>visit us </h6>
                                              <ul>
                                                  <li>Abuja contiental</li>
                                                  <li>Daily - 8.00 am to 10.00 pm</li>
                                                  <li><a href="mailto:info@abujacontinental.com">info@abujacontinental.com</a></li>
                                                  <li><a href="tel:+23408070602727">Booking Request : 23408070602727</a></li>
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
              {/*End pagewrapper*/}
              {/*Scroll to top*/}
              <ScrollToTop />
          </div>
      </div>


    
  );
}

export default Rest