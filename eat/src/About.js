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
                                  <div className="logo"><a href="index.html" title="Restoria - Restaurants HTML Template"><img src="images/logo.png" alt="image" title="Restoria - Restaurants HTML Template" /></a></div>
                              </div>
                              <div className="nav-box clearfix">
                                  {/*Nav Outer*/}
                                  <div className="nav-outer clearfix">
                                      <nav className="main-menu">
                                          <ul className="navigation clearfix">
                                              <li className="dropdown"><a href="about.html#">Home</a>
                                                  <ul>
                                                      <li><a href="../Restoria-1-Minimal-Hero/index.html">Home 1 - Minimal Hero</a></li>
                                                      <li><a href="index.html">Home 2 - Standard Hero</a></li>
                                                      <li><a href="../Restoria-3-Video-Hero/index.html">Home 3 - Video Hero</a></li>
                                                      <li><a href="../Restoria-4-Category-Hero/index.html">Home 4 - Category Hero</a></li>
                                                      <li><a href="../Restoria-5-Rollingimages-Hero-Center-Header/index.html">Home 5 - Rolling Images</a></li>
                                                  </ul>
                                              </li>
                                              <li className="dropdown has-mega-menu"><a href="menu-list-1.html">Menus</a>
                                                  <ul>
                                                      <li>
                                                          <div className="mega-menu">
                                                              <div className="menu-inner">
                                                                  <div className="auto-container">
                                                                      <div className="row clearfix">
                                                                          <div className="menu-block col-lg-3 col-md-6 col-sm-6">
                                                                              <div className="image"><a href="menu-list-1.html"><img src="images/resource/menu-1-thumb.jpg" alt="image" /></a></div>
                                                                              <div className="title"><a href="menu-list-1.html">Menu list 1</a></div>
                                                                          </div>
                                                                          <div className="menu-block col-lg-3 col-md-6 col-sm-6">
                                                                              <div className="image"><a href="menu-list-2.html"><img src="images/resource/menu-2-thumb.jpg" alt="image" /></a></div>
                                                                              <div className="title"><a href="menu-list-2.html">Menu list 2</a></div>
                                                                          </div>
                                                                          <div className="menu-block col-lg-3 col-md-6 col-sm-6">
                                                                              <div className="image"><a href="menu-list-3.html"><img src="images/resource/menu-3-thumb.jpg" alt="image" /></a></div>
                                                                              <div className="title"><a href="menu-list-3.html">Menu list 3</a></div>
                                                                          </div>
                                                                          <div className="menu-block col-lg-3 col-md-6 col-sm-6">
                                                                              <div className="image"><a href="menu-list-4.html"><img src="images/resource/menu-4-thumb.jpg" alt="image" /></a></div>
                                                                              <div className="title"><a href="menu-list-4.html">Menu list 4</a></div>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </li>
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
                      <div className="logo-box"><a href="index.html" title="Restoria - Restaurants HTML Template"><img src="images/resource/sidebar-logo.png" alt="image" title="Restoria - Restaurants HTML Template" /></a></div>
                      {/* .Side-menu */}
                      <div className="side-menu">
                          <ul className="navigation clearfix">
                              <li className="dropdown"><a href="about.html#">Home</a>
                                  <ul>
                                      <li><a href="../Restoria-1-Minimal-Hero/index.html">Home 1 - Minimal Hero</a></li>
                                      <li><a href="index.html">Home 2 - Standard Hero</a></li>
                                      <li><a href="../Restoria-3-Video-Hero/index.html">Home 3 - Video Hero</a></li>
                                      <li><a href="../Restoria-4-Category-Hero/index.html">Home 4 - Category Hero</a></li>
                                      <li><a href="../Restoria-5-Rollingimages-Hero-Center-Header/index.html">Home 5 - Rolling Images</a></li>
                                  </ul>
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
                      <div className="image-box"><img src="images/resource/sidebar-image.jpg" alt="image" title /></div>
                      <div className="logo-box"><a href="index.html" title="Restoria - Restaurants HTML Template"><img src="images/resource/sidebar-logo.png" alt="image" title="Restoria - Restaurants HTML Template" /></a></div>
                      <h5>Visit Us</h5>
                      <ul className="info">
                          <li>Restoria, Arrondissement, <br /> Paris 9578</li>
                          <li> <span className="ib-ttl"> Lunch Time </span>- 10.00 am – 3:30 pm </li>
                          <li><span className="ib-ttl"> Dinner Time</span> - 08.00 pm – 10:30 pm</li>
                          <li><a href="mailto:booking@domainame.com">booking@domainame.com</a></li>
                      </ul>
                      <div className="booking-info">
                          <div className="bk-no"><a href="tel:+88-123-123456">Booking: +88-123-123456</a></div>
                      </div>
                  </div>
              </section>
              {/*End Hidden Bar */}
              {/* Inner Banner Section */}
              <section className="inner-banner">
                  <div className="image-layer" style={{ backgroundImage: 'url(images/background/banner-image-1.jpg)' }} />
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
                          <h2>Where Exquisite Flavors Meet <span className="theme_color">Elegant Ambiance</span> for an <span className="theme_color">Unforgettable Fine Dining </span> Experience!</h2>
                      </div>
                      <div className="row clearfix">
                          {/*Col*/}
                          <div className="text-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                              <div className="inner wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="0ms">
                                  <div className="text"> Lorem Ipsum is simply dummy text of the printingand typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries, but also the leap into.</div>
                                  <div className="feature-info">
                                      <div className="feature-info-box">
                                          <div className="feature-title">
                                              <img src="images/resource/hygienic.png" alt="image" />
                                              <h6>Hygienic <br /> Food </h6>
                                          </div>
                                          <div className="infotext"> Lorem Ipsum is simply dummy text of the printing and type setting dummy text.</div>
                                      </div>
                                      <div className="feature-info-box">
                                          <div className="feature-title">
                                              <img src="images/resource/ambiance.png" alt="image" />
                                              <h6>fresh <br /> Ambience </h6>
                                          </div>
                                          <div className="infotext"> Lorem Ipsum is simply dummy text of the printing and type setting dummy text.</div>
                                      </div>
                                  </div>
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
                                      <div className="image" data-depth="0.15"><img src="images/resource/image-1.jpg" alt="image" /></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              {/*Intro Section*/}
              <section className="intro-section ">
                  <div className="intro-anim-image"><img src="images/resource/abt_dish.png" alt="image" /></div>
                  <div className="image-layer" style={{ backgroundImage: 'url(images/background/video_bg.jpg)' }} />
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
                          <h2>Why Dine With Us</h2>
                      </div>
                      <div className="row clearfix">
                          {/*Block*/}
                          <div className="why-block-two col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                              <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
                                  <div className="image-box"><img src="images/resource/why1.jpg" alt /></div>
                                  <div className="over-box">
                                      <h6>skilled chef</h6>
                                  </div>
                              </div>
                          </div>
                          {/*Block*/}
                          <div className="why-block-two col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                              <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
                                  <div className="image-box"><img src="images/resource/why2.jpg" alt /></div>
                                  <div className="over-box">
                                      <h6>hygienic food</h6>
                                  </div>
                              </div>
                          </div>
                          {/*Block*/}
                          <div className="why-block-two col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                              <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="600ms">
                                  <div className="image-box"><img src="images/resource/why3.jpg" alt /></div>
                                  <div className="over-box">
                                      <h6>Fresh ambience</h6>
                                  </div>
                              </div>
                          </div>
                          {/*Block*/}
                          <div className="why-block-two col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                              <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="900ms">
                                  <div className="image-box"><img src="images/resource/why4.jpg" alt /></div>
                                  <div className="over-box">
                                      <h6>secreat recipe</h6>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="fact-counter">
                          <div className="row clearfix">
                              <div className="fact-block col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                  <div className="inner clearfix">
                                      <div className="fact-count"><div className="count-box"><span className="count-text" data-stop={60} data-speed={2000}>0</span><i>+</i></div></div>
                                      <div className="fact-title">monthly visitors</div>
                                      <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry has been. </p>
                                  </div>
                              </div>
                              <div className="fact-block col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                  <div className="inner clearfix">
                                      <div className="fact-count"><div className="count-box"><span className="count-text" data-stop={22} data-speed={1500}>0</span><i>+</i></div></div>
                                      <div className="fact-title">positive reviews</div>
                                      <p> Simply dummy text of the printing and typesetting industry lorem Ipsum has been. </p>
                                  </div>
                              </div>
                              <div className="fact-block col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                  <div className="inner clearfix">
                                      <div className="fact-count"><div className="count-box"><span className="count-text" data-stop={135} data-speed={1000}>0</span><i>+</i></div></div>
                                      <div className="fact-title">secreat recipe</div>
                                      <p> Simply dummy text of the printing and typesetting lorem Ipsum has been industry. </p>
                                  </div>
                              </div>
                              <div className="fact-block col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                  <div className="inner clearfix">
                                      <div className="fact-count"><div className="count-box"><span className="count-text" data-stop={10} data-speed={1000}>0</span><i>+</i></div></div>
                                      <div className="fact-title">award &amp; honnors</div>
                                      <p> Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum. </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              {/*chef Section 1*/}
              <section className="chef-section-1 section-kt">
                  <div className="auto-container">
                      <div className="row clearfix">
                          {/*Block*/}
                          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                              <div className="title-box">
                                  <div className="subtitle"><span>meet the chef</span></div>
                                  <h2>Mater Chef Lorenzo</h2>
                                  <p> A fine dine master chef crafts exquisite cuisine with precision, passion, creativity, and elegance, delivering unforgettable culinary experiences and refined flavors.</p>
                                  <div className="link-box">
                                      <a href="about.html" className="theme-btn btn-style-two clearfix">
                                          <span className="btn-wrap">
                                              <span className="text-one">meet our team</span>
                                              <span className="text-two">meet our team</span>
                                          </span>
                                      </a>
                                  </div>
                              </div>
                          </div>
                          {/*Block*/}
                          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
                              <div className="chef-image image1 parallax-scene-2 ">
                                  <img data-depth="0.15" src="images/resource/mainchef1.jpg" alt="image" />
                              </div>
                              <div className="round-stamp">
                                  <img data-depth="0.50" className="stamp_icon" src="images/resource/chefcap.png" alt="image" />
                              </div>
                          </div>
                          {/*Block*/}
                          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                              <div className="chef-image image2 parallax-scene-3">
                                  <img data-depth="0.50" src="images/resource/mainchef2.jpg" alt="image" />
                              </div>
                              <div className="chef-image image3 parallax-scene-4">
                                  <img data-depth="0.50" src="images/resource/mainchef3.jpg" alt="image" />
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
                                          <div className="icon-box"><img src="images/resource/s-icon-1.png" alt="image" title /></div>
                                          <h6>party &amp; <br /> celebrations</h6>
                                          <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys.</div>
                                      </div>
                                  </div>
                                  <div className="s-block alternate">
                                      <div className="inner">
                                          <div className="icon-box"><img src="images/resource/s-icon-2.png" alt="image" title /></div>
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
                                          <div className="icon-box"><img src="images/resource/s-icon-3.png" alt="image" title /></div>
                                          <h6>banquet <br /> hall</h6>
                                          <div className="text">Printing and typeset industry lorem Ipsum has been lorem Ipsum is simply dummy typeset industry lorem Ipsum has been.</div>
                                      </div>
                                  </div>
                                  <div className="s-block ">
                                      <div className="inner">
                                          <div className="icon-box"><img src="images/resource/s-icon-4.png" alt="image" title /></div>
                                          <h6>outdoor <br /> catering</h6>
                                          <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys.</div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="image-col col-lg-4 col-md-12 col-sm-12">
                              <div className="inner wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
                                  <div className="image-box"><img src="images/resource/service-image.png" alt="image" title /></div>
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
                                          <div className="image"><img src="images/resource/author-thumb-4.jpg" alt="image" /></div>
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
                                          <div className="image"><img src="images/resource/author-thumb-5.jpg" alt="image" /></div>
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
                                          <div className="image"><img src="images/resource/author-thumb-6.jpg" alt="image" /></div>
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
                                          <div className="image"><img src="images/resource/author-thumb-4.jpg" alt="image" /></div>
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
                                          <div className="image"><img src="images/resource/author-thumb-5.jpg" alt="image" /></div>
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
                                          <div className="image"><img src="images/resource/author-thumb-6.jpg" alt="image" /></div>
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
                                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81392.11276571127!2d-74.03116502768826!3d40.70144849986174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1667928043843!5m2!1sen!2sin" width="100%" height={500} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                  </div>
                              </div>
                              {/*Footer Col*/}
                              <div className="footer-col info-col col-lg-6 col-md-12 col-sm-12 px-0">
                                  <div className="inner wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                      <div className="content">
                                          <div className="footer-image">
                                              <img src="images/resource/footer-img-1.jpg" alt="image" />
                                          </div>
                                          <div className="logo"><a href="index.html" title="Restoria - Restaurants HTML Template"><img src="images/logo.png" alt="image" title="Restoria - Restaurants HTML Template" /></a></div>
                                          <div className="info">
                                              <h6>visit us </h6>
                                              <ul>
                                                  <li>Abuja Continental</li>
                                                  <li>Daily - 8.00 am to 10.00 pm</li>
                                                  <li><a href="mailto:booking@domainname.com">booking@gmail.com</a></li>
                                                  <li><a href="tel:+88-123-123456">Booking Request : +88-123-123456</a></li>
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