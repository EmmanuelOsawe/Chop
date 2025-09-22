import logo from './logo.svg';
import './App.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Particles from './Particles';

function Home() {
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
              <header className="main-header header-down">
                  <div className="header-top">
                      <div className="auto-container">
                          <div className="inner clearfix">
                              <div className="top-left clearfix">
                                  <ul className="top-info clearfix">
                                      <li><i className="icon far fa-map-marker-alt" /> Abuja Continental 1 Ladi Kwali Street, Wuse Zone 4, </li>
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
                                  <div className="logo"><a href="index.html" title="Restoria - Restaurants HTML Template"><img src="/assets/images/logo.png" alt="image" title="Restoria - Restaurants HTML Template" /></a></div>
                              </div>
                              <div className="nav-box clearfix">
                                  {/*Nav Outer*/}
                                  <div className="nav-outer clearfix">
                                      <nav className="main-menu">
                                          <ul className="navigation clearfix">
                                              <li><a href="index.html#">Home</a>
                                              </li>
                                              <li className="dropdown has-mega-menu"><a href="https://kalanidhithemes.com/live-preview/landing-page/restoria/all-demo/Restoria-2-Standard-Hero/menu-list.html">Menus</a>
                                                  <ul>
                                                      <li>
                                                          <div className="mega-menu">
                                                              <div className="menu-inner">
                                                                  <div className="auto-container">
                                                                      <div className="row clearfix">
                                                                          <div className="menu-block col-lg-3 col-md-6 col-sm-6">
                                                                              <div className="image"><a href="menu-list-1.html"><img src="/assets/images/resource/menu-1-thumb.jpg" alt="image" /></a></div>
                                                                              <div className="title"><a href="menu-list-1.html">Menu list 1</a></div>
                                                                          </div>
                                                                          <div className="menu-block col-lg-3 col-md-6 col-sm-6">
                                                                              <div className="image"><a href="menu-list-2.html"><img src="/assets/images/resource/menu-2-thumb.jpg" alt="image" /></a></div>
                                                                              <div className="title"><a href="menu-list-2.html">Menu list 2</a></div>
                                                                          </div>
                                                                          <div className="menu-block col-lg-3 col-md-6 col-sm-6">
                                                                              <div className="image"><a href="menu-list-3.html"><img src="/assets/images/resource/menu-3-thumb.jpg" alt="image" /></a></div>
                                                                              <div className="title"><a href="menu-list-3.html">Menu list 3</a></div>
                                                                          </div>
                                                                          <div className="menu-block col-lg-3 col-md-6 col-sm-6">
                                                                              <div className="image"><a href="menu-list-4.html"><img src="/assets/images/resource/menu-4-thumb.jpg" alt="image" /></a></div>
                                                                              <div className="title"><a href="menu-list-4.html">Menu list 4</a></div>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </li>
                                                  </ul>
                                              </li>
                                              <li><a href="about.html">About Us</a></li>
                                              <li><a href="our-chef.html">Our chefs</a></li>
                                              <li className="dropdown"><a href="index.html#">Pages</a>
                                                  <ul>
                                                      <li><a href="gallery-masonry.html">Photo Gallery</a></li>
                                                      <li><a href="book-table.html">Reservation 1</a></li>
                                                      <li><a href="book-table-option2.html">Reservation 2</a></li>
                                                      <li><a href="testimonial.html">Testimonial</a></li>
                                                      <li><a href="blog-list.html">Blog List</a></li>
                                                      <li><a href="blog-single-post.html">Blog Single Post</a></li>
                                                      <li><a href="index.html#">Dropdown Menu 1</a></li>
                                                      <li><a href="index.html#">Dropdown Lorem 2</a></li>
                                                      <li className="dropdown"><a href="index.html#">Dropdown Menu 3</a>
                                                          <ul>
                                                              <li><a href="index.html#">Dropdown Menu level 2</a></li>
                                                              <li><a href="index.html#">Dropdown Menu level 2</a></li>
                                                              <li><a href="index.html#">Dropdown Menu Level 2</a></li>
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
                                                  <span className="text-one">book a table</span>
                                                  <span className="text-two">book a table</span>
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
                      <div className="logo-box"><a href="index.html" title="Restoria - Restaurants HTML Template"><img src="/assets/images/resource/sidebar-logo.png" alt="image" title="Restoria - Restaurants HTML Template" /></a></div>
                      {/* .Side-menu */}
                      <div className="side-menu">
                          <ul className="navigation clearfix">
                              <li className="dropdown"><a href="index.html#">Home</a>
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
                              <li><a href="about.html">About Us</a></li>
                              <li><a href="our-chef.html">Our chefs</a></li>
                              <li className="dropdown"><a href="index.html#">Pages</a>
                                  <ul>
                                      <li><a href="gallery-masonry.html">Photo Gallery</a></li>
                                      <li><a href="book-table.html">Reservation 1</a></li>
                                      <li><a href="book-table-option2.html">Reservation 2</a></li>
                                      <li><a href="testimonial.html">Testimonial</a></li>
                                      <li><a href="blog-list.html">Blog List</a></li>
                                      <li><a href="blog-single-post.html">Blog Single Post</a></li>
                                      <li><a href="index.html#">Dropdown Menu 1</a></li>
                                      <li><a href="index.html#">Dropdown Lorem 2</a></li>
                                      <li className="dropdown"><a href="index.html#">Dropdown Menu 3</a>
                                          <ul>
                                              <li><a href="index.html#">Dropdown Menu level 2</a></li>
                                              <li><a href="index.html#">Dropdown Menu level 2</a></li>
                                              <li><a href="index.html#">Dropdown Menu Level 2</a></li>
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
                      <div className="logo-box"><a href="index.html" title="Restoria - Restaurants HTML Template"><img src="/assets/images/resource/sidebar-logo.png" alt="image" title="Restoria - Restaurants HTML Template" /></a></div>
                      <h5>Visit Us</h5>
                      <ul className="info">
                          <li>Abuja Continental <br /> 1 Ladi Kwali Street, Wuse Zone 4, </li>
                          <li> <span className="ib-ttl"> Lunch Time </span>- 10.00 am – 3:30 pm </li>
                          <li><span className="ib-ttl"> Dinner Time</span> - 08.00 pm – 10:30 pm</li>
                          <li><a href="mailto:info@abujacontinental.com">info@abujacontinental.com</a></li>
                      </ul>
                      <div className="booking-info">
                          <div className="bk-no"><a href="tel:+88-123-123456">Booking: +234 (0) 2094612000 / 08070602727</a></div>
                      </div>
                  </div>
              </section>
              {/*End Hidden Bar */}
              {/* Banner Section */}
              <section className="banner-section" >
                  {/* social link */}
                  <div className="banner-social-list">
                      <span className="line" />
                      <ul className="custom-ul">
                          <li> <a href="index.html#"> FB </a> </li>
                          <li><a href="index.html#"> IN </a> </li>
                          <li><a href="index.html#"> YT </a> </li>
                      </ul>
                      <span className="line" />
                  </div>
                  {/* social link */}
                  <div className="banner-call">
                      <span className="line" />
                      <ul className="call-ul">
                          <li><a href="tel:+88-123-123456">Booking : +234 (0) 2094612000 / 08070602727</a></li>
                      </ul>
                      <span className="line" />
                  </div>
                  <Swiper spaceBetween={0} slidesPerView={1} loop={true}> 
                      {/* Slide 1 */}
                      <SwiperSlide>
                          <div
                              className="slide-item image-layer"
                              style={{ backgroundImage: "url(/assets/images/main-slider/slider-1.jpg)" }}
                          >
                              <div className="auto-container">
                                  <div className="content-box">
                                      <div className="content">
                                          <div className="inner">
                                              <div className="subtitle"><span>Serving Since 1995</span></div>
                                              <h1>The Signature of African Hospitality</h1>
                                              <div className="text">
                                                  A taste of perfection in every dish - fine dining with a modern twist.
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </SwiperSlide>

                      {/* Slide 2 */}
                      <SwiperSlide>
                          <div
                              className="slide-item image-layer"
                              style={{ backgroundImage: "url(/assets/images/main-slider/slider-2.jpg)" }}
                          >
                              <div className="auto-container">
                                  <div className="content-box">
                                      <div className="content">
                                          <div className="inner">
                                              <div className="subtitle"><span>Delicious Taste in City</span></div>
                                              <h1>Taste the Tradition</h1>
                                              <div className="text">
                                                  A taste of perfection in every dish - fine dining with a modern twist.
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </SwiperSlide>

                      {/* Slide 3 */}
                      <SwiperSlide>
                          <div
                              className="slide-item image-layer"
                              style={{ backgroundImage: "url(/assets/images/main-slider/slider-3.jpg)" }}
                          >
                              <div className="auto-container">
                                  <div className="content-box">
                                      <div className="content">
                                          <div className="inner">
                                              <div className="subtitle"><span>Traditional Taste</span></div>
                                              <h1>Savor Every Bite</h1>
                                              <div className="text">
                                                  A taste of perfection in every dish - fine dining with a modern twist.
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </SwiperSlide>
                  </Swiper>                  
                   <a href="book-table.html" className="explore-menu-btn">
                      <span className="icon"> <img src="/assets/images/resource/menu-badge-arrow.png" alt="image" title="image" /> </span>
                  </a>
                  {/* Curve at bottom */}
                  {/* Default (desktop) curve */}
                  <svg className="bottom-curve curve-desktop" viewBox="0 0 1440 65" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  </svg>
                  {/* Less curved version for tablets/mobile */}
                  <svg className="bottom-curve curve-mobile" viewBox="0 0 1440 65" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  </svg>
              </section>
              {/*End Banner Section */}
              {/*Category Section*/}
              <section className="menu-cat section-kt">
                  <div className="auto-container">
                      <div className="title-box centered">
                          <div className="subtitle"><span>explore our Delicious Selections</span></div>
                      </div>
                      <div className="row clearfix">
                          {/*Block*/}
                          <div className="menucat-list menubg1 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
                              {/*image*/}
                              <div className="image-box">
                                  <img src="/assets/images/rooms/Prem-jun.jpg" alt="image" />
                              </div>
                              {/*data*/}
                              <div className="data-colom">
                                  <div className="title-box"> <h3>Premium Junior Suite</h3> </div>
                                  <span className="star"> <img src="/assets/images/rooms/Prem-jun.jpg" alt="image" /> </span>
                                  <div className="arrow-btn"> <a href="menu-list-1.html"> <i className="fa-light fa-arrow-right" /> </a> </div>
                              </div>
                          </div>
                          {/*Block*/}
                          <div className="menucat-list menubg2 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
                              {/*image*/}
                              <div className="image-box">
                                  <img src="/assets/images/rooms/Prem-Suite.jpg" alt="image" />
                              </div>
                              {/*data*/}
                              <div className="data-colom">
                                  <div className="title-box"> <h3>Premium Executive Suite</h3> </div>
                                  <span className="star"> <img src="/assets/images/rooms/Prem-Suite.jpg" alt="image" /> </span>
                                  <div className="arrow-btn"> <a href="menu-list-2.html"> <i className="fa-light fa-arrow-right" /> </a> </div>
                              </div>
                          </div>
                          {/*Block*/}
                          <div className="menucat-list menubg3 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
                              {/*image*/}
                              <div className="image-box">
                                  <img src="/assets/images/rooms/Diplomatic.jpg" alt="image" />
                              </div>
                              {/*data*/}    
                              <div className="data-colom">
                                  <div className="title-box"> <h3>Diplomatic Suite</h3> </div>
                                  <span className="star"> <img src="/assets/images/rooms/Diplomatic.jpg" alt="image" /> </span>
                                  <div className="arrow-btn"> <a href="menu-list-3.html"> <i className="fa-light fa-arrow-right" /> </a> </div>
                              </div>
                          </div>
                          {/*Block*/}
                          <div className="menucat-list menubg4 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
                              {/*image*/}
                              <div className="image-box">
                                  <img src="/assets/images/rooms/Presidential.jpg" alt="image" />
                              </div>
                              {/*data*/}
                              <div className="data-colom">
                                  <div className="title-box"> <h3>Presidential Suite</h3> </div>
                                  <span className="star"> <img src="/assets/images/rooms/Presidential.jpg" alt="image" /> </span>
                                  <div className="arrow-btn"> <a href="menu-list-4.html"> <i className="fa-light fa-arrow-right" /> </a> </div>
                              </div>
                          </div>

                          <div className="menucat-list menubg5 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
                              {/*image*/}
                              <div className="image-box">
                                  <img src="/assets/images/rooms/Super-King.jpg" alt="image" />
                              </div>
                              {/*data*/}
                              <div className="data-colom">
                                  <div className="title-box"> <h3>Superior King Suite</h3> </div>
                                  <span className="star"> <img src="/assets/images/rooms/Super-King.jpg" alt="image" /> </span>
                                  <div className="arrow-btn"> <a href="menu-list-4.html"> <i className="fa-light fa-arrow-right" /> </a> </div>
                              </div>
                          </div>

                          <div className="menucat-list menubg6 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
                              {/*image*/}
                              <div className="image-box">
                                  <img src="/assets/images/rooms/Prem-Suite.jpg" alt="image" />
                              </div>
                              {/*data*/}
                              <div className="data-colom">
                                  <div className="title-box"> <h3>Premium Room</h3> </div>
                                  <span className="star"> <img src="/assets/images/rooms/Prem-Suite.jpg" alt="image" /> </span>
                                  <div className="arrow-btn"> <a href="menu-list-4.html"> <i className="fa-light fa-arrow-right" /> </a> </div>
                              </div>
                          </div>

                          <div className="menucat-list menubg7 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
                              {/*image*/}
                              <div className="image-box">
                                  <img src="/assets/images/rooms/Executive-Suite.jpg" alt="image" />
                              </div>
                              {/*data*/}
                              <div className="data-colom">
                                  <div className="title-box"> <h3>Executive Suite</h3> </div>
                                  <span className="star"> <img src="/assets/images/rooms/Executive-Suite.jpg" alt="image" /> </span>
                                  <div className="arrow-btn"> <a href="menu-list-4.html"> <i className="fa-light fa-arrow-right" /> </a> </div>
                              </div>
                          </div>

                      </div>
                  </div>
              </section>
              {/*Fluid Section*/}
              <section className="fluid-section alternate special-dish-slider">
                  <div className="outer-container">
                      <div className="row clearfix">
                          {/*Col*/}
                          <div className="image-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                              <div className="inner wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="0ms">
                                  <div className="image-layer" style={{ backgroundImage: 'url(/assets/images/background/image-6.jpg)' }} />
                                  <div className="image"><img src="/assets/images/background/image-6.jpg" alt="image" /></div>
                              </div>
                          </div>
                          {/*Col*/}
                          <div className="content-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                              <div className="inner clearfix wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="0ms">
                                  {/* standard title */}
                                  <div className="title-box centered onlyfor-sm">
                                      <div className="subtitle"><span>Popular</span></div>
                                      <h2>Special Dishes</h2>
                                  </div>
                                  {/* vertical title */}
                                  <div className="title-wrapper">
                                      <div className="title-box special-title">
                                          <h2>Special Dishes </h2>
                                      </div>
                                  </div>
                                  {/*Special Offer Slider Section*/}
                                  <div className="special-offer">
                                      <div className="dish-gallery-slider owl-theme owl-carousel">
                                          {/*Slide Item*/}
                                          <div className="offer-block-two">
                                              <div className="inner-box">
                                                  <div className="image"><a href="index.html#"><img src="/assets/images/resource/special1.jpg" alt="image" /></a></div>
                                                  <div className="cat-name">main dish</div>
                                                  <h5><a href="menu-list-1.html">Greek Salad</a></h5>
                                                  <div className="text desc">flavorful, filled with panko bread crumbs, pine nuts, parsley, sun-dried tomatoes.</div>
                                                  <div className="price">$39.00</div>
                                              </div>
                                          </div>
                                          {/*Slide Item*/}
                                          <div className="offer-block-two margin-top">
                                              <div className="inner-box">
                                                  <div className="image"><a href="index.html#"><img src="/assets/images/resource/special2.jpg" alt="image" /></a></div>
                                                  <div className="cat-name">desserts</div>
                                                  <h5><a href="menu-list-2.html">Tokusen Wagyu</a></h5>
                                                  <div className="text desc">Tomatoes, green bell pepper, sliced cucumber onion, olives, avocados with crab meat.</div>
                                                  <div className="price">$45.00</div>
                                              </div>
                                          </div>
                                          {/*Slide Item*/}
                                          <div className="offer-block-two">
                                              <div className="inner-box">
                                                  <div className="image"><a href="index.html#"><img src="/assets/images/resource/special3.jpg" alt="image" /></a></div>
                                                  <div className="cat-name">Appetizer</div>
                                                  <h5><a href="menu-list-3.html">Butternut Pumpkin</a></h5>
                                                  <div className="text desc">Avocados with crab meat, red onion, crab salad stuffed bell pepper, Vegetables.</div>
                                                  <div className="price">$15.00</div>
                                              </div>
                                          </div>
                                          {/*Slide Item*/}
                                          <div className="offer-block-two margin-top">
                                              <div className="inner-box">
                                                  <div className="image"><a href="index.html#"><img src="/assets/images/resource/special4.jpg" alt="image" /></a></div>
                                                  <div className="cat-name">main dish</div>
                                                  <h5><a href="menu-list-4.html">Opu Fish</a></h5>
                                                  <div className="text desc">Vegetables, cheeses, ground meats, tomato sauce, Small bites, big flavors.</div>
                                                  <div className="price">$12.00</div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              {/*Fluid Section*/}
              <section className="fluid-section chef-bio">
                  <div className="outer-container">
                      <div className="row clearfix">
                          {/*Col*/}
                          <div className="image-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                              <div className="inner wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="0ms">
                                  <div className="image-layer" style={{ backgroundImage: 'url(/assets/images/background/image-5.jpg)' }} />
                                  <div className="image"><img src="/assets/images/background/image-5.jpg" alt="image" /></div>
                              </div>
                          </div>
                          {/*Col*/}
                          <div className="content-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                              <div className="inner clearfix wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="0ms">
                                  <div className="content-box">
                                      <div className="chef-thumb"><img src="/assets/images/resource/chef-thumb.jpg" alt="image" /></div>
                                      <div className="title-box centered">
                                          <div className="subtitle"><span>our chef</span></div>
                                          <h2>Chef  Lorenzo</h2>
                                          <div className="text">A fine dine master chef crafts exquisite cuisine with precision, passion, creativity, and elegance, delivering unforgettable culinary experiences and refined flavors.</div>
                                      </div>
                                      <div className="link-box">
                                          <a href="our-chef.html" className="theme-btn btn-style-two clearfix">
                                              <span className="btn-wrap">
                                                  <span className="text-one">meet our team</span>
                                                  <span className="text-two">meet our team</span>
                                              </span>
                                          </a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              {/*Menu Tab Section*/}
              <section className="menu-section section-kt">
                  <div className="auto-container">
                      <div className="title-box centered">
                          <div className="title-badge"> <img src="/assets/images/resource/menu-title-badge.svg" alt="image" title="image" /> </div>
                          <h2>Delicious Menu</h2>
                      </div>
                      <div className="tabs-box menu-tabs">
                          <div className="buttons">
                              <ul className="tab-buttons clearfix">
                                  <li className="tab-btn active-btn" data-tab="#tab-1"><span>Starter</span></li>
                                  <li className="tab-btn" data-tab="#tab-2"><span>Main Dishes</span></li>
                                  <li className="tab-btn" data-tab="#tab-3"><span>Desserts</span></li>
                                  <li className="tab-btn" data-tab="#tab-4"><span>WINES</span></li>
                              </ul>
                          </div>
                          <div className="tabs-content">
                              {/*Tab*/}
                              <div className="tab active-tab" id="tab-1">
                                  <div className="row clearfix">
                                      <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                                          <div className="inner">
                                              {/*Block*/}
                                              <div className="dish-block">
                                                  <div className="inner-box">
                                                      <div className="dish-image"><a href="index.html#"><img src="/assets/images/resource/menu-image-1.png" alt="image" /></a></div>
                                                      <div className="title clearfix"><div className="ttl clearfix"><h6><a href="index.html#">Stuffed Mushrooms</a></h6></div> <span className="menu-list-line"> </span> <div className="price"><span>$25.50</span></div></div>
                                                      <div className="text desc"><a href="index.html#">flavorful, filled with panko bread crumbs, pine nuts, parsley, sun-dried tomatoes, and cheese.</a></div>
                                                  </div>
                                              </div>
                                              {/*Block*/}
                                              <div className="dish-block">
                                                  <div className="inner-box">
                                                      <div className="dish-image"><a href="index.html#"><img src="/assets/images/resource/menu-image-2.png" alt="image" /></a></div>
                                                      <div className="title clearfix"><div className="ttl clearfix"><h6><a href="index.html#">Jalapeno Poppers <span className="s-info">New</span></a></h6></div> <span className="menu-list-line"> </span> <div className="price"><span>$40.00</span></div></div>
                                                      <div className="text desc"><a href="index.html#">Greek yogurt filling instead of a traditional cream cheese one.</a></div>
                                                  </div>
                                              </div>
                                              {/*Block*/}
                                              <div className="dish-block">
                                                  <div className="inner-box">
                                                      <div className="dish-image"><a href="index.html#"><img src="/assets/images/resource/menu-image-3.png" alt="image" /></a></div>
                                                      <div className="title clearfix"><div className="ttl clearfix"><h6><a href="index.html#">Caprese Skewers</a></h6></div> <span className="menu-list-line"> </span> <div className="price"><span>$10.00</span></div></div>
                                                      <div className="text desc"><a href="index.html#">Drizzle these colorful skewers with an easy balsamic for a pop of sweet flavor.</a></div>
                                                  </div>
                                              </div>
                                              {/*Block*/}
                                              <div className="dish-block">
                                                  <div className="inner-box">
                                                      <div className="dish-image"><a href="index.html#"><img src="/assets/images/resource/menu-image-4.png" alt="image" /></a></div>
                                                      <div className="title clearfix"><div className="ttl clearfix"><h6><a href="index.html#">Greek Salad</a></h6></div> <span className="menu-list-line"> </span> <div className="price"><span>$10.00</span></div></div>
                                                      <div className="text desc"><a href="index.html#">Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.</a></div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="menu-col img-col col-lg-6 col-md-12 col-sm-12">
                                          <div className="inner">
                                              <div className="image"><img src="/assets/images/resource/menus-1.jpg" alt="image" /></div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              {/*Tab*/}
                              <div className="tab" id="tab-2">
                                  <div className="row clearfix">
                                      <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                                          <div className="inner">
                                              {/*Block*/}
                                              <div className="dish-block">
                                                  <div className="inner-box">
                                                      <div className="dish-image"><a href="index.html#"><img src="/assets/images/resource/menu-image-5.png" alt="image" /></a></div>
                                                      <div className="title clearfix"><div className="ttl clearfix"><h6><a href="index.html#">Greek Salad</a></h6></div> <span className="menu-list-line"> </span> <div className="price"><span>$25.50</span></div></div>
                                                      <div className="text desc"><a href="index.html#">Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.</a></div>
                                                  </div>
                                              </div>
                                              {/*Block*/}
                                              <div className="dish-block">
                                                  <div className="inner-box">
                                                      <div className="dish-image"><a href="index.html#"><img src="/assets/images/resource/menu-image-6.png" alt="image" /></a></div>
                                                      <div className="title clearfix"><div className="ttl clearfix"><h6><a href="index.html#">Lasagne <span className="s-info">SEASONAL</span></a></h6></div> <span className="menu-list-line"> </span> <div className="price"><span>$40.00</span></div></div>
                                                      <div className="text desc"><a href="index.html#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices</a></div>
                                                  </div>
                                              </div>
                                              {/*Block*/}
                                              <div className="dish-block">
                                                  <div className="inner-box">
                                                      <div className="dish-image"><a href="index.html#"><img src="/assets/images/resource/menu-image-7.png" alt="image" /></a></div>
                                                      <div className="title clearfix"><div className="ttl clearfix"><h6><a href="index.html#">Butternut Pumpkin</a></h6></div> <span className="menu-list-line"> </span>  <div className="price"><span>$10.00</span></div></div>
                                                      <div className="text desc"><a href="index.html#">Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.</a></div>
                                                  </div>
                                              </div>
                                              {/*Block*/}
                                              <div className="dish-block">
                                                  <div className="inner-box">
                                                      <div className="dish-image"><a href="index.html#"><img src="/assets/images/resource/menu-image-8.png" alt="image" /></a></div>
                                                      <div className="title clearfix"><div className="ttl clearfix"><h6><a href="index.html#">Butternut Pumpkin</a></h6></div> <span className="menu-list-line"> </span>  <div className="price"><span>$10.00</span></div></div>
                                                      <div className="text desc"><a href="index.html#">Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.</a></div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="menu-col img-col col-lg-6 col-md-12 col-sm-12">
                                          <div className="inner">
                                              <div className="image"><img src="/assets/images/resource/menus-2.jpg" alt="image" /></div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              {/*Tab*/}
                              <div className="tab" id="tab-3">
                                  <div className="row clearfix">
                                      <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                                          <div className="inner">
                                              {/*Block*/}
                                              <div className="dish-block">
                                                  <div className="inner-box">
                                                      <div className="dish-image"><a href="index.html#"><img src="/assets/images/resource/menu-image-9.png" alt="image" /></a></div>
                                                      <div className="title clearfix"><div className="ttl clearfix"><h6><a href="index.html#">Chocolate mousse</a></h6></div> <span className="menu-list-line"> </span>  <div className="price"><span>$25.50</span></div></div>
                                                      <div className="text desc"><a href="index.html#">Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.</a></div>
                                                  </div>
                                              </div>
                                              {/*Block*/}
                                              <div className="dish-block">
                                                  <div className="inner-box">
                                                      <div className="dish-image"><a href="index.html#"><img src="/assets/images/resource/menu-image-10.png" alt="image" /></a></div>
                                                      <div className="title clearfix"><div className="ttl clearfix"><h6><a href="index.html#">Pavlova <span className="s-info">new</span></a></h6></div> <span className="menu-list-line"> </span>  <div className="price"><span>$40.00</span></div></div>
                                                      <div className="text desc"><a href="index.html#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices</a></div>
                                                  </div>
                                              </div>
                                              {/*Block*/}
                                              <div className="dish-block">
                                                  <div className="inner-box">
                                                      <div className="dish-image"><a href="index.html#"><img src="/assets/images/resource/menu-image-11.png" alt="image" /></a></div>
                                                      <div className="title clearfix"><div className="ttl clearfix"><h6><a href="index.html#">Apple crumble</a></h6></div> <span className="menu-list-line"> </span>  <div className="price"><span>$10.00</span></div></div>
                                                      <div className="text desc"><a href="index.html#">Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.</a></div>
                                                  </div>
                                              </div>
                                              {/*Block*/}
                                              <div className="dish-block">
                                                  <div className="inner-box">
                                                      <div className="dish-image"><a href="index.html#"><img src="/assets/images/resource/menu-image-12.png" alt="image" /></a></div>
                                                      <div className="title clearfix"><div className="ttl clearfix"><h6><a href="index.html#">Crème BrUlEe</a></h6></div> <span className="menu-list-line"> </span>  <div className="price"><span>$10.00</span></div></div>
                                                      <div className="text desc"><a href="index.html#">Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.</a></div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="menu-col img-col col-lg-6 col-md-12 col-sm-12">
                                          <div className="inner">
                                              <div className="image"><img src="/assets/images/resource/menus-desert.jpg" alt="image" /></div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              {/*Tab*/}
                              <div className="tab" id="tab-4">
                                  <div className="row clearfix">
                                      <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                                          <div className="inner">
                                              {/*Block*/}
                                              <div className="dish-block">
                                                  <div className="inner-box">
                                                      <div className="dish-image"><a href="index.html#"><img src="/assets/images/resource/drink-1.png" alt="image" /></a></div>
                                                      <div className="title clearfix"><div className="ttl clearfix"><h6><a href="index.html#">Black Wine</a></h6></div> <span className="menu-list-line"> </span>  <div className="price"><span>$25.50</span></div></div>
                                                      <div className="text desc"><a href="index.html#">Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.</a></div>
                                                  </div>
                                              </div>
                                              {/*Block*/}
                                              <div className="dish-block">
                                                  <div className="inner-box">
                                                      <div className="dish-image"><a href="index.html#"><img src="/assets/images/resource/drink-2.png" alt="image" /></a></div>
                                                      <div className="title clearfix"><div className="ttl clearfix"><h6><a href="index.html#">La Marca <span className="s-info">SEASONAL</span></a></h6></div> <span className="menu-list-line"> </span>  <div className="price"><span>$40.00</span></div></div>
                                                      <div className="text desc"><a href="index.html#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices</a></div>
                                                  </div>
                                              </div>
                                              {/*Block*/}
                                              <div className="dish-block">
                                                  <div className="inner-box">
                                                      <div className="dish-image"><a href="index.html#"><img src="/assets/images/resource/drink-3.png" alt="image" /></a></div>
                                                      <div className="title clearfix"><div className="ttl clearfix"><h6><a href="index.html#">Crawford Sauvignon</a></h6></div> <span className="menu-list-line"> </span>  <div className="price"><span>$10.00</span></div></div>
                                                      <div className="text desc"><a href="index.html#">Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.</a></div>
                                                  </div>
                                              </div>
                                              {/*Block*/}
                                              <div className="dish-block">
                                                  <div className="inner-box">
                                                      <div className="dish-image"><a href="index.html#"><img src="/assets/images/resource/drink-4.png" alt="image" /></a></div>
                                                      <div className="title clearfix"><div className="ttl clearfix"><h6><a href="index.html#">Vineyard Cabernet</a></h6></div> <span className="menu-list-line"> </span>  <div className="price"><span>$10.00</span></div></div>
                                                      <div className="text desc"><a href="index.html#">Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.</a></div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="menu-col img-col col-lg-6 col-md-12 col-sm-12">
                                          <div className="inner">
                                              <div className="image"><img src="/assets/images/resource/menus-wine.jpg" alt="image" /></div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="open-timing">
                          <div className="hours">During winter daily from <span className="theme_color">7:00 pm</span> to <span className="theme_color">9:00 pm</span></div>
                          <div className="link-box">
                              <a href="menu-list-1.html" className="theme-btn btn-style-two clearfix">
                                  <span className="btn-wrap">
                                      <span className="text-one">view all menu</span>
                                      <span className="text-two">view all menu</span>
                                  </span>
                              </a>
                          </div>
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
                                  <div className="image-box"><img src="/assets/images/resource/why1.jpg" alt /></div>
                                  <div className="over-box">
                                      <h6>skilled chef</h6>
                                  </div>
                              </div>
                          </div>
                          {/*Block*/}
                          <div className="why-block-two col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                              <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
                                  <div className="image-box"><img src="/assets/images/resource/why2.jpg" alt /></div>
                                  <div className="over-box">
                                      <h6>hygienic food</h6>
                                  </div>
                              </div>
                          </div>
                          {/*Block*/}
                          <div className="why-block-two col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                              <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="600ms">
                                  <div className="image-box"><img src="/assets/images/resource/why3.jpg" alt /></div>
                                  <div className="over-box">
                                      <h6>Fresh ambience</h6>
                                  </div>
                              </div>
                          </div>
                          {/*Block*/}
                          <div className="why-block-two col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                              <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="900ms">
                                  <div className="image-box"><img src="/assets/images/resource/why4.jpg" alt /></div>
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

              {/*Testimonials Section*/}
              <section className="testimonials-two section-kt">
                  <div className="auto-container">

                      <div className="title-box centered">
                          <div className="subtitle"><span>testimonials</span></div>
                          <h2>What People Are Saying</h2>
                      </div>
                      <Swiper
                          modules={[Pagination, Autoplay]}
                          spaceBetween={20} // margin between slides
                          slidesPerView={1}
                          pagination={{ clickable: true }}
                          loop={true}
                          autoplay={{
                              delay: 3000, // 3 seconds before sliding
                              disableOnInteraction: false,
                          }}
                          style={{ maxWidth: "600px", margin: "0 auto" }} // center the whole slider
                      >
                          {/* Slide 1 */}
                          <SwiperSlide>
                              <div className="testi-block" style={{ padding: "20px" }}>
                                  <div className="inner-box">
                                      <div className="rating">
                                          <span className="fa fa-star" /><span className="fa fa-star" />
                                          <span className="fa fa-star" /><span className="fa fa-star" />
                                          <span className="fa fa-star" />
                                      </div>
                                      <div className="text">
                                          A perfect blend of mouthwatering dishes, warm atmosphere, and
                                          outstanding service. Every meal feels like a special occasion
                                          worth savoring!
                                      </div>
                                      <div className="auth-info">
                                          <div className="image">
                                              <img
                                                  src="/assets/images/resource/author-thumb-4.jpg"
                                                  alt="author"
                                                  style={{ width: "60px", borderRadius: "50%" }}
                                              />
                                          </div>
                                          <div className="auth-title">
                                              Willium Joe - <span className="location">New York</span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </SwiperSlide>

                          {/* Slide 2 */}
                          <SwiperSlide>
                              <div className="testi-block" style={{ padding: "20px" }}>
                                  <div className="inner-box">
                                      <div className="rating">
                                          <span className="fa fa-star" /><span className="fa fa-star" />
                                          <span className="fa fa-star" /><span className="fa fa-star" />
                                          <span className="fa fa-star" />
                                      </div>
                                      <div className="text">
                                          Every visit is a flavorful journey! Delicious food, elegant
                                          ambiance, and welcoming staff make this restaurant a true dining
                                          destination.
                                      </div>
                                      <div className="auth-info">
                                          <div className="image">
                                              <img
                                                  src="/assets/images/resource/author-thumb-5.jpg"
                                                  alt="author"
                                                  style={{ width: "60px", borderRadius: "50%" }}
                                              />
                                          </div>
                                          <div className="auth-title">
                                              Theresa Tin - <span className="location">Chicago</span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </SwiperSlide>

                           {/* Slide 3 */}
                          <SwiperSlide>
                              <div className="testi-block" style={{ padding: "20px" }}>
                                  <div className="inner-box">
                                      <div className="rating">
                                          <span className="fa fa-star" /><span className="fa fa-star" />
                                          <span className="fa fa-star" /><span className="fa fa-star" />
                                          <span className="fa fa-star" />
                                      </div>
                                      <div className="text">
                                          From appetizers to desserts, every bite bursts with perfection. A cozy atmosphere and exceptional service make each visit unforgettable.                                      </div>
                                      <div className="auth-info">
                                          <div className="image">
                                              <img
                                                  src="/assets/images/resource/author-thumb-6.jpg"
                                                  alt="author"
                                                  style={{ width: "60px", borderRadius: "50%" }}
                                              />
                                          </div>
                                          <div className="auth-title">
                                              Michel Byrd - <span className="location">New York</span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </SwiperSlide>

                          {/* Slide 4 */}
                          <SwiperSlide>
                              <div className="testi-block" style={{ padding: "20px" }}>
                                  <div className="inner-box">
                                      <div className="rating">
                                          <span className="fa fa-star" /><span className="fa fa-star" />
                                          <span className="fa fa-star" /><span className="fa fa-star" />
                                          <span className="fa fa-star" />
                                      </div>
                                      <div className="text">
                                          The taste of food was really amazing, Wow ! outstanding dinner made by Mater chef John Rute, I never forget this delicious food experience.                                      </div>
                                      <div className="auth-info">
                                          <div className="image">
                                              <img
                                                  src="/assets/images/resource/author-thumb-4.jpg"
                                                  alt="author"
                                                  style={{ width: "60px", borderRadius: "50%" }}
                                              />
                                          </div>
                                          <div className="auth-title">
                                              willium joe - <span className="location">New York</span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </SwiperSlide>
                          {/* Slide 5 */}
                          <SwiperSlide>
                              <div className="testi-block" style={{ padding: "20px" }}>
                                  <div className="inner-box">
                                      <div className="rating">
                                          <span className="fa fa-star" /><span className="fa fa-star" />
                                          <span className="fa fa-star" /><span className="fa fa-star" />
                                          <span className="fa fa-star" />
                                      </div>
                                      <div className="text">
                                          Hygienic food & fresh enviroment, everyone had a wonderful delite experience. It was FABULOUS! great experience at The Italian gourmet.                                      </div>
                                      <div className="auth-info">
                                          <div className="image">
                                              <img
                                                  src="/assets/images/resource/author-thumb-5.jpg"
                                                  alt="author"
                                                  style={{ width: "60px", borderRadius: "50%" }}
                                              />
                                          </div>
                                          <div className="auth-title">
                                              Theresa Tin - <span className="location">Chicago</span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </SwiperSlide>

                          {/* Slide 6 */}
                          <SwiperSlide>
                              <div className="testi-block" style={{ padding: "20px" }}>
                                  <div className="inner-box">
                                      <div className="rating">
                                          <span className="fa fa-star" /><span className="fa fa-star" />
                                          <span className="fa fa-star" /><span className="fa fa-star" />
                                          <span className="fa fa-star" />
                                      </div>
                                      <div className="text">
                                          Special treat to dine, It was wow experience food was really delicious! outstanding dinner made by Mater chef, food experience was unfogetable!                                      </div>
                                      <div className="auth-info">
                                          <div className="image">
                                              <img
                                                  src="/assets/images/resource/author-thumb-6.jpg"
                                                  alt="author"
                                                  style={{ width: "60px", borderRadius: "50%" }}
                                              />
                                          </div>
                                          <div className="auth-title">
                                              Michel Byrd - <span className="location">Denmark</span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </SwiperSlide>


                          {/* Add more slides here in the same format */}
                      </Swiper>   
                    
                    </div>
              </section>


              {/*Reservation Section*/}
              <section className="fluid-section reserve-section splitscreen">
                  <div className="outer-container">
                      <div className="outer-box">
                          <div className="row clearfix">
                              <div className="reserv-col col-lg-6 col-md-12 col-sm-12">
                                  <div className="inner">
                                      <div className="title-box centered">
                                          <div className="subtitle"><span>Online reservation</span></div>
                                          <h2>Book A Table</h2>
                                          <div className="request-info">Booking request <a href="index.html#">+234 (0) 2094612000 / 08070602727</a> or fill out the order form</div>
                                      </div>
                                      <div className="default-form reservation-form">
                                          <form method="post" action="index.html">
                                              <div className="row clearfix">
                                                  <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                                      <div className="field-inner">
                                                          <input type="text" name="fieldname" defaultValue placeholder="Your Name" required />
                                                      </div>
                                                  </div>
                                                  <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                                      <div className="field-inner">
                                                          <input type="text" name="fieldname" defaultValue placeholder="Phone Number" required />
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
                                                          <input className="l-icon datepicker" type="text" name="fieldname" defaultValue placeholder="DD-MM-YYYY" required readOnly />
                                                          <span className="arrow-icon far fa-angle-down" />
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
                              <div className="graphic-col col-lg-6 col-md-12 col-sm-12">
                                  <div className="inner">
                                      <div className="graphic-layer" style={{ backgroundImage: 'url(/assets/images/background/reservation-bg.jpg)' }} />
                                      <div className="image"><img src="/assets/images/background/reservation-bg.jpg" alt="image" /></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              {/*Recnt Updates Section*/}
              <section className="news-section section-kt">
                  <div className="auto-container">
                      <div className="title-box centered">
                          <div className="subtitle"><span>recent updates</span></div>
                          <h2>Latest Blog Post</h2>
                      </div>
                      <div className="row justify-content-center clearfix">
                          {/*Block*/}
                          <div className="news-block col-lg-4 col-md-6 col-sm-12">
                              <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
                                  <div className="image-box">
                                      <div className="image rounded"><a href="blog-single-post.html"><img src="/assets/images/resource/news-2.jpg" alt="image" /></a></div>
                                      <div className="over-content">
                                          <div className="date">30 <span>May | 2025</span></div>
                                          <div className="cat">Food, flavour</div>
                                          <h4><a href="blog-single-post.html">So yummy, tasty, you'll eat with your eyes.</a></h4>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          {/*Block*/}
                          <div className="news-block col-lg-4 col-md-6 col-sm-12">
                              <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
                                  <div className="image-box">
                                      <div className="image"><a href="blog-single-post.html"><img src="/assets/images/resource/news-1.jpg" alt="image" /></a></div>
                                      <div className="over-content">
                                          <div className="date">25 <span>May | 2025</span></div>
                                          <div className="cat">healthy food</div>
                                          <h4><a href="blog-single-post.html">Chef’s signature for refined tastes ever.</a></h4>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          {/*Block*/}
                          <div className="news-block col-lg-4 col-md-6 col-sm-12">
                              <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="600ms">
                                  <div className="image-box">
                                      <div className="image rounded"><a href="blog-single-post.html"><img src="/assets/images/resource/news-3.jpg" alt="image" /></a></div>
                                      <div className="over-content">
                                          <div className="date">18 <span>May | 2025</span></div>
                                          <div className="cat">recipie</div>
                                          <h4><a href="blog-single-post.html">Experience gourmet art and ambience.</a></h4>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="lower-link-box text-center">
                          <a href="blog-list.html" className="theme-btn btn-style-two clearfix">
                              <span className="btn-wrap">
                                  <span className="text-one">Read more blog</span>
                                  <span className="text-two">Read more blog</span>
                              </span>
                          </a>
                      </div>
                  </div>
              </section>
              {/*Instagram post*/}
              <section className="ig-post-section section-kt">
                  <div className="auto-container">
                      <div className="title-box centered">
                          <div className="subtitle"><span>follow us</span></div>
                          <h2>Instagram</h2>
                      </div>
                      <div className="row justify-content-center clearfix">
                          {/*Block*/}
                          <div className="ig-post-block col-lg-3 col-md-6 col-sm-6 col-xs-12">
                              <div className="ig-post-image wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
                                  <a href="index.html#"><img src="/assets/images/resource/insta1.jpg" alt="image" /></a>
                              </div>
                          </div>
                          {/*Block*/}
                          <div className="ig-post-block col-lg-3 col-md-6 col-sm-6 col-xs-12">
                              <div className="ig-post-image wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
                                  <a href="index.html#"><img src="/assets/images/resource/insta2.jpg" alt="image" /></a>
                              </div>
                          </div>
                          {/*Block*/}
                          <div className="ig-post-block col-lg-3 col-md-6 col-sm-6 col-xs-12">
                              <div className="ig-post-image wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
                                  <a href="index.html#"><img src="/assets/images/resource/insta3.jpg" alt="image" /></a>
                              </div>
                          </div>
                          {/*Block*/}
                          <div className="ig-post-block col-lg-3 col-md-6 col-sm-6 col-xs-12">
                              <div className="ig-post-image wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
                                  <a href="index.html#"><img src="/assets/images/resource/insta4.jpg" alt="image" /></a>
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
                                              <img src="/assets/images/resource/footer-img-1.jpg" alt="image" />
                                          </div>
                                          <div className="logo"><a href="index.html" title="Restoria - Restaurants HTML Template"><img src="/assets/images/logo.png" alt="image" title="Restoria - Restaurants HTML Template" /></a></div>
                                          <div className="info">
                                              <h6>visit us </h6>
                                              <ul>
                                                  <li>Abuja Continental 1, Ladi Kwali Street, Wuse Zone 4, </li>
                                                  <li>Daily - 8.00 am to 10.00 pm</li>
                                                  <li><a href="mailto:info@abujacontinental.com">info@abujacontinental.com</a></li>
                                                  <li><a href="tel:+88-123-123456">Booking Request : +234 (0) 2094612000 / 08070602727</a></li>
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

              <div className="scroll-to-top scroll-to-target"  data-target="html" ><span className="icon fa fa-angle-up" /></div>
              {/*[if lt IE 9]><![endif]*/}

        </div>
       
        

     </div>
  );
}

export default Home