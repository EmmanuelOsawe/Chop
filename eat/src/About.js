import logo from './logo.svg';
import './App.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Particles from './Particles';

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
                                              <li><a href="Home.js">Home</a>
                                              </li>
                                              <li className="has-mega-menu"><a href="rooms.js">Rooms & Suites</a>
                                              </li>
                                              <li><a href="about.html">Resturant & Lounges</a></li>
                                              <li><a href="About.js">About Us</a></li>
                                              <li className="dropdown"><a href="index.html#">Inside</a>
                                                  <ul>
                                                      <li><a href="gallery-masonry.html">Photo Gallery</a></li>
                                                      <li><a href="book-table.html">Reservation 1</a></li>
                                                      <li><a href="book-table-option2.html">Reservation 2</a></li>
                                                      <li><a href="testimonial.html">Testimonial</a></li>
                                                      <li><a href="blog-list.html">Blog List</a></li>
                                                      <li><a href="blog-single-post.html">Blog Single Post</a></li>
                                                  </ul>
                                              </li>
                                              <li><a href="contact-us.html">Contact</a></li>
                                          </ul>
                                      </nav>
                                      {/* Main Menu End*/}
                                  </div>
                                  {/*Nav Outer End*/}
                                  <div className="links-box clearfix">
                                      <div className="link link-btn">
                                          <a href="book-table.html" className="theme-btn btn-style-one clearfix">
                                              <span className="btn-wrap">
                                                  <span className="text-one">Book a table</span>
                                                  <span className="text-two">Book a table</span>
                                              </span>
                                          </a>
                                      </div>
                                      <div className="link info-toggler">
                                          <button className="info-btn">
                                              <span className="hamburger">
                                                  <span className="top-bun" />
                                                  <span className="meat" />
                                                  <span className="bottom-bun" />
                                              </span>
                                          </button>
                                      </div>
                                  </div>
                                  {/* Hidden Nav Toggler */}
                                  <div className="nav-toggler">
                                      <button className="hidden-bar-opener">
                                          <span className="hamburger">
                                              <span className="top-bun" />
                                              <span className="meat" />
                                              <span className="bottom-bun" />
                                          </span>
                                      </button>
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
                              <li className=""><a href="Home.js">Home</a>
                              </li>
                              <li className="dropdown"><a href="menu-list-1.html">Menus</a>
                                  <ul>
                                      <li><a href="menu-list-1.html">Menu List 1</a></li>
                                      <li><a href="menu-list-2.html">Menu List 2</a></li>
                                      <li><a href="menu-list-3.html">Menu List 3</a></li>
                                      <li><a href="menu-list-4.html">Menu List 4</a></li>
                                  </ul>
                              </li>
                              <li className="current"><a href="about.html">About Us</a></li>
                              <li><a href="our-chef.html">Our chefs</a></li>
                              <li className="dropdown"><a href="about.html#">Pages</a>
                                  <ul>
                                      <li><a href="gallery-masonry.html">Photo Gallery</a></li>
                                      <li><a href="book-table.html">Reservation 1</a></li>
                                      <li><a href="book-table-option2.html">Reservation 2</a></li>
                                      <li><a href="testimonial.html">Testimonial</a></li>
                                      <li><a href="blog-list.html">Blog List</a></li>
                                      <li><a href="blog-single-post.html">Blog Single Post</a></li>
                                      <li><a href="about.html#">Dropdown Menu 1</a></li>
                                      <li><a href="about.html#">Dropdown Lorem 2</a></li>
                                      <li className="dropdown"><a href="about.html#">Dropdown Menu 3</a>
                                          <ul>
                                              <li><a href="about.html#">Dropdown Menu level 2</a></li>
                                              <li><a href="about.html#">Dropdown Menu level 2</a></li>
                                              <li><a href="about.html#">Dropdown Menu Level 2</a></li>
                                          </ul>
                                      </li>
                                  </ul>
                              </li>
                              <li><a href="contact-us.html">Contact</a></li>
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
                  <div className="intro-anim-image"><img src="/assets/images/resource/abt_dish.png" alt="image" /></div>
                  <div className="image-layer" style={{ backgroundImage: 'url(/assets/images/gallery/the-hotel.jpg)' }} />
                  <div className="auto-container">
                      <div className="content-box">
                          <div className="play-btn"><a href="https://www.youtube.com/watch?v=dZ9O_l1dIzs" className="lightbox-image theme-btn"><span className="icon fa-sharp-duotone fa-solid fa-play"><i className="ripple" /></span></a></div>
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
                                          <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys.</div>
                                      </div>
                                  </div>
                                  <div className="s-block alternate">
                                      <div className="inner">
                                          <div className="icon-box"><img src="/assets/images/resource/s-icon-2.png" alt="image" title /></div>
                                          <h6>luxury <br /> Fine Dining</h6>
                                          <div className="text">Simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys lorem Ipsum is.</div>
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
                                          <div className="text">Printing and typeset industry lorem Ipsum has been lorem Ipsum is simply dummy typeset industry lorem Ipsum has been.</div>
                                      </div>
                                  </div>
                                  <div className="s-block ">
                                      <div className="inner">
                                          <div className="icon-box"><img src="/assets/images/resource/s-icon-4.png" alt="image" title /></div>
                                          <h6>outdoor <br /> catering</h6>
                                          <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys.</div>
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
              {/*Testimonials Section*/}
              <section className="testimonials-two section-kt">
                  <div className="auto-container">
                      <div className="title-box centered">
                          <div className="subtitle"><span>testimonials</span></div>
                          <h2>What People Are Saying</h2>
                      </div>
                      <div className="carousel-box">
                          <div className="testimonial-slider owl-theme owl-carousel">
                              {/*Slide Item*/}
                              <div className="testi-block">
                                  <div className="inner-box">
                                      <div className="rating"><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /></div>
                                      <div className="text">A perfect blend of mouthwatering dishes, warm atmosphere, and outstanding service. Every meal feels like a special occasion worth savoring!</div>
                                      <div className="auth-info">
                                          <div className="image"><img src="/assets/images/resource/author-thumb-4.jpg" alt="image" /></div>
                                          <div className="auth-title">willium joe -<span className="location">New York</span> </div>
                                      </div>
                                  </div>
                              </div>
                              {/*Slide Item*/}
                              <div className="testi-block">
                                  <div className="inner-box">
                                      <div className="rating"><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /></div>
                                      <div className="text">Every visit is a flavorful journey! Delicious food, elegant ambiance, and welcoming staff make this restaurant a true dining destination.</div>
                                      <div className="auth-info">
                                          <div className="image"><img src="/assets/images/resource/author-thumb-5.jpg" alt="image" /></div>
                                          <div className="auth-title">Theresa Tin -<span className="location"> Chicago</span> </div>
                                      </div>
                                  </div>
                              </div>
                              {/*Slide Item*/}
                              <div className="testi-block">
                                  <div className="inner-box">
                                      <div className="rating"><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /></div>
                                      <div className="text">From appetizers to desserts, every bite bursts with perfection. A cozy atmosphere and exceptional service make each visit unforgettable.</div>
                                      <div className="auth-info">
                                          <div className="image"><img src="/assets/images/resource/author-thumb-6.jpg" alt="image" /></div>
                                          <div className="auth-title">Michel Byrd -<span className="location"> New York</span> </div>
                                      </div>
                                  </div>
                              </div>
                              {/*Slide Item*/}
                              <div className="testi-block">
                                  <div className="inner-box">
                                      <div className="rating"><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /></div>
                                      <div className="text">The taste of food was really amazing, Wow ! outstanding dinner made by Mater chef John Rute, I never forget this delicious food experience.</div>
                                      <div className="auth-info">
                                          <div className="image"><img src="/assets/images/resource/author-thumb-4.jpg" alt="image" /></div>
                                          <div className="auth-title">willium joe -<span className="location"> New York</span></div>
                                      </div>
                                  </div>
                              </div>
                              {/*Slide Item*/}
                              <div className="testi-block">
                                  <div className="inner-box">
                                      <div className="rating"><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /></div>
                                      <div className="text">Hygienic food &amp; fresh enviroment, everyone had a wonderful delite experience. It was FABULOUS! great experience at The Italian gourmet.</div>
                                      <div className="auth-info">
                                          <div className="image"><img src="/assets/images/resource/author-thumb-5.jpg" alt="image" /></div>
                                          <div className="auth-title">Theresa Tin -<span className="location"> Chicago</span></div>
                                      </div>
                                  </div>
                              </div>
                              {/*Slide Item*/}
                              <div className="testi-block">
                                  <div className="inner-box">
                                      <div className="rating"><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /></div>
                                      <div className="text">Special treat to dine, It was wow experience food was really delicious! outstanding dinner made by Mater chef, food experience was unfogetable!</div>
                                      <div className="auth-info">
                                          <div className="image"><img src="/assets/images/resource/author-thumb-6.jpg" alt="image" /></div>
                                          <div className="auth-title">Michel Byrd -<span className="location"> Denmark</span></div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              {/*Gallery Section*/}
              <section className="image-gallery section-kt">
                  <div className="carousel-box">
                      <div className="auto-container">
                          <div className="title-box centered">
                              <div className="subtitle"><span>Gallery</span></div>
                              <h2>Restoria Gallery</h2>
                          </div>
                          <div className="image-gallery-slider owl-theme owl-carousel">
                              {/*Slide Item*/}
                              <div className="gallery-block">
                                  <div className="image"><a href="images/gallery/gallery-1-big.jpg" className="lightbox-image" data-fancybox="gallery"><img src="images/gallery/gallery-1-sm.jpg" alt="image" /></a></div>
                              </div>
                              {/*Slide Item*/}
                              <div className="gallery-block">
                                  <div className="image"><a href="images/gallery/gallery-2-big.jpg" className="lightbox-image" data-fancybox="gallery"><img src="images/gallery/gallery-2-sm.jpg" alt="image" /></a></div>
                              </div>
                              {/*Slide Item*/}
                              <div className="gallery-block">
                                  <div className="image"><a href="images/gallery/gallery-3-big.jpg" className="lightbox-image" data-fancybox="gallery"><img src="images/gallery/gallery-3-sm.jpg" alt="image" /></a></div>
                              </div>
                              {/*Slide Item*/}
                              <div className="gallery-block">
                                  <div className="image"><a href="images/gallery/gallery-4-big.jpg" className="lightbox-image" data-fancybox="gallery"><img src="images/gallery/gallery-4-sm.jpg" alt="image" /></a></div>
                              </div>
                              {/*Slide Item*/}
                              <div className="gallery-block">
                                  <div className="image"><a href="images/gallery/gallery-1-big.jpg" className="lightbox-image" data-fancybox="gallery"><img src="images/gallery/gallery-1-sm.jpg" alt="image" /></a></div>
                              </div>
                              {/*Slide Item*/}
                              <div className="gallery-block">
                                  <div className="image"><a href="images/gallery/gallery-2-big.jpg" className="lightbox-image" data-fancybox="gallery"><img src="images/gallery/gallery-2-sm.jpg" alt="image" /></a></div>
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
                                              <img src="/assets//assets/images/resource/footer-img-1.jpg" alt="image" />
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
          <div className="scroll-to-top scroll-to-target" data-target="html"><span className="icon fa fa-angle-up" /></div>
          {/*[if lt IE 9]><![endif]*/}
        </div>


    
);
}

export default About