import logo from './logo.svg';
import './App.css';
import "swiper/css";
import "swiper/css/pagination";
import Particles from './Particles';
import HamburgerMenu from './Hamburger';
import ScrollToTop from "./ScrollToTop";

function About() {
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

              <header className="main-header">
                  <div className="header-top">
                      <div className="auto-container">
                          <div className="inner clearfix">
                              <div className="top-left clearfix">
                                  <ul className="top-info clearfix">
                                      <li><i className="icon far fa-map-marker-alt" /> Abuja Continental</li>
                                      <li><i className="icon far fa-clock" /> Daily : 8.00 am to 10.00 pm</li>
                                  </ul>
                              </div>
                              <div className="top-right clearfix">
                                  <ul className="top-info clearfix">
                                      <li><a href="tel:+11234567890"><i className="icon far fa-phone" /> +1 123 456 7890</a></li>
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
                                  <div className="logo"><a href="index.html" title="Abuja InterContinental"><img src="/assets/images/logo.png" alt="image" title="Abuja InterContinental" /></a></div>
                              </div>
                              <div className="nav-box clearfix">
                                  {/*Nav Outer*/}
                                  <div className="nav-outer clearfix">
                                      <nav className="main-menu">
                                          <ul className="navigation clearfix">
                                              <li><a href="/">Home</a>
                                              </li>
                                              <li className="has-mega-menu"><a href="rooms.js">Rooms & Suites</a>
                                              </li>
                                              <li><a href="restlounges.js">Resturant & Lounges</a></li>
                                              <li><a href="About.js">About Us</a></li>
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
                                                  <span className="text-one">Book a table</span>
                                                  <span className="text-two">Book a table</span>
                                              </span>
                                          </a>
                                      </div>
                                      <HamburgerMenu />
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
                      <div className="logo-box"><a href="index.html" title="Abuja InterContinental"><img src="/assets/images/resource/sidebar-logo.png" alt="image" title="Abuja InterContinental" /></a></div>
                      {/* .Side-menu */}
                      <div className="side-menu">
                          <ul className="navigation clearfix">
                              <li className=""><a href="/">Home</a>
                              </li>
                              <li className=""><a href="rooms.js">Rooms & Suites</a>
                              </li>
                              <li className="about.js"><a href="about.js">About Us</a></li>
                              <li><a href="restlounges.js">Resturant & Lounges</a></li>
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
                      <div className="image-box"><img src="/assets/images/resource/sidebar-image.jpg" alt="image" title /></div>
                      <div className="logo-box"><a href="index.html" title="Abuja InterContinental"><img src="/assets/images/resource/sidebar-logo.png" alt="image" title="Abuja InterContinental" /></a></div>
                      <h5>Visit Us</h5>
                      <ul className="info">
                          <li>Restoria, Arrondissement, <br /> Paris 9578</li>
                          <li> <span className="ib-ttl"> Lunch Time </span>- 10.00 am – 3:30 pm </li>
                          <li><span className="ib-ttl"> Dinner Time</span> - 08.00 pm – 10:30 pm</li>
                          <li><a href="mailto:info@abujacontinental.com">info@abujacontinental.com</a></li>
                      </ul>
                      <div className="booking-info">
                          <div className="bk-no"><a href="tel:+8070602727">Booking: +2348070602727</a></div>
                      </div>
                  </div>
              </section>
              {/*End Hidden Bar */}
              {/* Inner Banner Section */}
              <section className="inner-banner">
                  <div className="image-layer" style={{ backgroundImage: 'url(/assets/images/gallery/the-hotel.jpg)' }} />
                  <div className="auto-container">
                      <div className="inner">
                          <h1>About Us</h1>
                          <div className="sub_text"> <p> A taste of perfection in every dish - <span className="primary-color"> fine dining with a modern twist.</span></p> </div>
                      </div>
                  </div>
              </section>
              {/*End Banner Section */}
              {/*Story Section*/}
              <section className="story-section section-kt">
                  <div className="auto-container">
                      <div className="title-box centered">
                          <div className="subtitle"><span>our story</span></div>
                          <h2>Your Premier 5-Star Destination for Business & Leisure in Abuja</h2>
                      </div>
                      <div className="row clearfix">
                          {/*Col*/}
                          <div className="text-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                              <div className="inner wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="0ms">
                                  <div className="text"> Our hotel has 12 floors with 540 rooms and suites, making it the largest landmark, perfect for city views.

                                      The Recreation Center houses adults and kids swimming pools, a steam and sauna, a multipurpose tennis court, squash, aerobics, and a 24/7 operational gym. It also offers five food and beverage outlets that are differentiated to cater to the various unique tastes and cultures of our guests.

                                      The Ladi Kwali Conference Centre has a 3500-square-meter size Grand Ballroom that can accommodate up to 2000 people cocktail style at a time. The Ballroom can also be partitioned into 4 individual halls, with 8 meeting rooms ideal for big conferences, corporate events, exhibitions, fairs, and lavish wedding ceremonies.</div>
                                  <div className="booking-info">
                                      <div className="bk-title">Booking Request : <br />
                                          <a className="bk-no" href="tel:+80-400-123456">+80 (400) 123 4567</a></div>
                                      <div className="link-box">
                                          <a href="about.html" className="theme-btn btn-style-two clearfix">
                                              <span className="btn-wrap">
                                                  <span className="text-one">book a table</span>
                                                  <span className="text-two">book a table</span>
                                              </span>
                                          </a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          {/*Col*/}
                          <div className="image-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                              <div className="inner wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="0ms">
                                  <div className="images parallax-scene-1">
                                      <div className="image" data-depth="0.15"><img src="/assets/images/resource/image-1.jpg" alt="image" /></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              {/*Intro Section*/}
              <section className="intro-section ">
                  <div className="intro-anim-image"><img src="/assets/images/gallery/zuma-rock.jpg" alt="image" /></div>
                  <div className="image-layer" style={{ backgroundImage: 'url(/assets/images/gallery/the-hotel.jpg)' }} />
                  <div className="auto-container">
                      <div className="content-box">
                          <div className="play-btn">
                              <video
                                  src="/assets/rename (2).mp4"
                                  controls
                                  width="1000"
                                  height="450"
                              >
                              </video>
                              <span className="icon fa-sharp-duotone fa-solid fa-play">
                                  <i className="ripple" />
                              </span>
                          </div>
                      </div>
                  </div>
              </section>
              {/*Why Us Section*/}
              <section className="why-us-two section-kt">
                  <div className="auto-container">
                      <div className="title-box centered">
                          <div className="subtitle"><span>why choose us</span></div>
                          <h2>Why Book With Us</h2>
                      </div>
                      <div className="row clearfix">
                          {/*Block*/}
                          <div className="why-block-two col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                              <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
                                  <div className="image-box"><img src="/assets/images/events/centeral.jpg" alt /></div>
                                  <div className="over-box">
                                      <h6>Games and Fun</h6>
                                  </div>
                              </div>
                          </div>
                          {/*Block*/}
                          <div className="why-block-two col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                              <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
                                  <div className="image-box"><img src="/assets/images/events/lugis.jpg" alt /></div>
                                  <div className="over-box">
                                      <h6>Food</h6>
                                  </div>
                              </div>
                          </div>
                          {/*Block*/}
                          <div className="why-block-two col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                              <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="600ms">
                                  <div className="image-box"><img src="/assets/images/events/gym.jpg" alt /></div>
                                  <div className="over-box">
                                      <h6>Physical Activities</h6>
                                  </div>
                              </div>
                          </div>
                          {/*Block*/}
                          <div className="why-block-two col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                              <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="900ms">
                                  <div className="image-box"><img src="/assets/images/events/lobby.jpg" alt /></div>
                                  <div className="over-box">
                                      <h6>Lobby</h6>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="fact-counter">
                          <div className="row clearfix">
                              <div className="fact-block col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                  <div className="inner clearfix">
                                      <div className="fact-title">Games</div>
                                      <p className='text-light'> Modern 5-star hotels offer gaming lounges, sports courts, and indoor entertainment to keep guests engaged and relaxed. Some even include exclusive activities like bowling, VR games, or unique sports such as padel and pickleball. </p>
                                  </div>
                              </div>
                              <div className="fact-block col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                  <div className="inner clearfix">
                                      <div className="fact-title">Our Food</div>
                                      <p className='text-light'> Dining is a highlight, with multiple restaurants and bars serving both local and international cuisines. Guests enjoy fine dining, buffets, and specialty outlets that cater to different tastes, ensuring a memorable culinary journey. </p>
                                  </div>
                              </div>
                              <div className="fact-block col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                  <div className="inner clearfix">
                                      <div className="fact-title">Gym</div>
                                      <p className='text-light'> Equipped with state-of-the-art fitness machines, wellness programs, personal trainers, and sometimes even spa or yoga sessions, the gym in a 5-star hotel helps guests maintain a healthy lifestyle while traveling. </p>
                                  </div>
                              </div>
                              <div className="fact-block col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                  <div className="inner clearfix">
                                      <div className="fact-title">Lobby</div>
                                      <p className='text-light'> The lobby is grand and elegant, often with stylish décor, comfortable seating, and attentive staff. It sets the tone for the entire stay, reflecting the luxury and prestige of the hotel. </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>

              {/*Services Section*/}
              <section className="services-section section-kt">
                  <div className="auto-container">
                      <div className="title-box centered">
                          <div className="subtitle"><span>our services</span></div>
                          <h2>Perfect Spaces for <br /> Every Occasion</h2>
                      </div>
                      <div className="row clearfix">
                          <div className="s-col col-lg-4 col-md-6 col-sm-12">
                              <div className="inner wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="0ms">
                                  <div className="s-block alternate">
                                      <div className="inner">
                                          <div className="icon-box"><img src="/assets/images/resource/s-icon-1.png" alt="image" title /></div>
                                          <h6>party &amp; <br /> celebrations</h6>
                                          <div className="text-light">A 5-star hotel provides the perfect venue for birthdays, weddings, anniversaries, and corporate gatherings with personalized themes, décor, and entertainment, making every event memorable.</div>
                                      </div>
                                  </div>
                                  <div className="s-block alternate">
                                      <div className="inner">
                                          <div className="icon-box"><img src="/assets/images/resource/s-icon-2.png" alt="image" title /></div>
                                          <h6>luxury <br /> Fine Dining</h6>
                                          <div className="text-light">Guests enjoy world-class cuisine prepared by expert chefs, with exquisite presentation and a refined atmosphere that combines comfort with elegance.</div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="s-col last col-lg-4 col-md-6 col-sm-12">
                              <div className="inner wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="0ms">
                                  <div className="s-block ">
                                      <div className="inner">
                                          <div className="icon-box"><img src="/assets/images/resource/s-icon-3.png" alt="image" title /></div>
                                          <h6>banquet <br /> hall</h6>
                                          <div className="text-light">Spacious, elegant, and fully equipped with modern audio-visual systems, banquet halls offer a premium setting for large-scale events, conferences, and grand functions.</div>
                                      </div>
                                  </div>
                                  <div className="s-block ">
                                      <div className="inner">
                                          <div className="icon-box"><img src="/assets/images/resource/s-icon-4.png" alt="image" title /></div>
                                          <h6>outdoor <br /> catering</h6>
                                          <div className="text-light">Beyond the hotel premises, 5-star hotels extend their culinary excellence through outdoor catering, ensuring high-quality food and service for private events, no matter the location.</div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="image-col col-lg-4 col-md-12 col-sm-12">
                              <div className="inner wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
                                  <div className="image-box"><img src="/assets/images/resource/service-image.png" alt="image" title /></div>
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
                                          <div className="logo"><a href="index.html" title="Abuja InterContinental"><img src="/assets/images/logo.png" alt="image" title="Abuja InterContinental" /></a></div>
                                          <div className="info">
                                              <h6>visit us </h6>
                                              <ul>
                                                  <li>Abuja Continental 1, Ladi Kwali Street, Wuse Zone 4,</li>
                                                  <li>Daily - 8.00 am to 10.00 pm</li>
                                                  <li><a href="mailto:info@abujacontinental.com">info@abujacontinental.com</a></li>
                                                  <li><a href="tel:+234 70602727">Booking Request : +23408070602727</a></li>
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
          {/*Scroll to top*/}
          <ScrollToTop />
        </div>


    
);
}

export default About