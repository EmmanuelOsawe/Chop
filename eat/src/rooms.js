import logo from './logo.svg';
import './App.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Particles from './Particles';

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
                                  <div className="logo"><a href="index.html" title="Restoria - Restaurants HTML Template"><img src="images/logo.png" alt="image" title="Restoria - Restaurants HTML Template" /></a></div>
                              </div>
                              <div className="nav-box clearfix">
                                  {/*Nav Outer*/}
                                  <div className="nav-outer clearfix">
                                      <nav className="main-menu">
                                          <ul className="navigation clearfix">
                                              <li className="dropdown"><a href="menu-list-2.html#">Home</a>
                                                  <ul>
                                                      <li><a href="../Restoria-1-Minimal-Hero/index.html">Home 1 - Minimal Hero</a></li>
                                                      <li><a href="index.html">Home 2 - Standard Hero</a></li>
                                                      <li><a href="../Restoria-3-Video-Hero/index.html">Home 3 - Video Hero</a></li>
                                                      <li><a href="../Restoria-4-Category-Hero/index.html">Home 4 - Category Hero</a></li>
                                                      <li><a href="../Restoria-5-Rollingimages-Hero-Center-Header/index.html">Home 5 - Rolling Images</a></li>
                                                  </ul>
                                              </li>
                                              <li className="current dropdown has-mega-menu"><a href="menu-list-1.html">Menus</a>
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
                                              <li><a href="about.html">About Us</a></li>
                                              <li><a href="our-chef.html">Our chefs</a></li>
                                              <li className="dropdown"><a href="menu-list-2.html#">Pages</a>
                                                  <ul>
                                                      <li><a href="gallery-masonry.html">Photo Gallery</a></li>
                                                      <li><a href="book-table.html">Reservation 1</a></li>
                                                      <li><a href="book-table-option2.html">Reservation 2</a></li>
                                                      <li><a href="testimonial.html">Testimonial</a></li>
                                                      <li><a href="blog-list.html">Blog List</a></li>
                                                      <li><a href="blog-single-post.html">Blog Single Post</a></li>
                                                      <li><a href="menu-list-2.html#">Dropdown Menu 1</a></li>
                                                      <li><a href="menu-list-2.html#">Dropdown Lorem 2</a></li>
                                                      <li className="dropdown"><a href="menu-list-2.html#">Dropdown Menu 3</a>
                                                          <ul>
                                                              <li><a href="menu-list-2.html#">Dropdown Menu level 2</a></li>
                                                              <li><a href="menu-list-2.html#">Dropdown Menu level 2</a></li>
                                                              <li><a href="menu-list-2.html#">Dropdown Menu Level 2</a></li>
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
                                                  <span className="text-one">find a table</span>
                                                  <span className="text-two">find a table</span>
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
                              <li className="dropdown"><a href="menu-list-2.html#">Home</a>
                                  <ul>
                                      <li><a href="../Restoria-1-Minimal-Hero/index.html">Home 1 - Minimal Hero</a></li>
                                      <li><a href="index.html">Home 2 - Standard Hero</a></li>
                                      <li><a href="../Restoria-3-Video-Hero/index.html">Home 3 - Video Hero</a></li>
                                      <li><a href="../Restoria-4-Category-Hero/index.html">Home 4 - Category Hero</a></li>
                                      <li><a href="../Restoria-5-Rollingimages-Hero-Center-Header/index.html">Home 5 - Rolling Images</a></li>
                                  </ul>
                              </li>
                              <li className="current dropdown"><a href="menu-list-1.html">Menus</a>
                                  <ul>
                                      <li><a href="menu-list-1.html">Menu List 1</a></li>
                                      <li><a href="menu-list-2.html">Menu List 2</a></li>
                                      <li><a href="menu-list-3.html">Menu List 3</a></li>
                                      <li><a href="menu-list-4.html">Menu List 4</a></li>
                                  </ul>
                              </li>
                              <li><a href="about.html">About Us</a></li>
                              <li><a href="our-chef.html">Our chefs</a></li>
                              <li className="dropdown"><a href="menu-list-2.html#">Pages</a>
                                  <ul>
                                      <li><a href="gallery-masonry.html">Photo Gallery</a></li>
                                      <li><a href="book-table.html">Reservation 1</a></li>
                                      <li><a href="book-table-option2.html">Reservation 2</a></li>
                                      <li><a href="testimonial.html">Testimonial</a></li>
                                      <li><a href="blog-list.html">Blog List</a></li>
                                      <li><a href="blog-single-post.html">Blog Single Post</a></li>
                                      <li><a href="menu-list-2.html#">Dropdown Menu 1</a></li>
                                      <li><a href="menu-list-2.html#">Dropdown Lorem 2</a></li>
                                      <li className="dropdown"><a href="menu-list-2.html#">Dropdown Menu 3</a>
                                          <ul>
                                              <li><a href="menu-list-2.html#">Dropdown Menu level 2</a></li>
                                              <li><a href="menu-list-2.html#">Dropdown Menu level 2</a></li>
                                              <li><a href="menu-list-2.html#">Dropdown Menu Level 2</a></li>
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
                  <div className="image-layer" style={{ backgroundImage: 'url(images/background/banner-image-2.jpg)' }} />
                  <div className="auto-container">
                      <div className="inner">
                          <h1>Menu Style 2</h1>
                          <div className="sub_text"> <p> A taste of perfection in every dish - <span className="primary-color"> fine dining with a modern twist.</span></p> </div>
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
                                  <div className="image"><a href="menu-list-2.html#"><img src="images/resource/dish2.png" alt="image" /></a></div>
                                  <h5><a href="menu-list-1.html">Butternut Pumpkin</a></h5>
                                  <div className="text desc text-light">Avocados with crab meat, red onion, tomato sauce,crab salad stuffed pepper.</div>
                                  <div className="price">$15.00</div>
                              </div>
                          </div>
                          {/*Item*/}
                          <div className="offer-block-three col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                              <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="600ms">
                                  <div className="image"><a href="menu-list-2.html#"><img src="images/resource/dish3.png" alt="image" /></a></div>
                                  <h5><a href="menu-list-1.html">Opu Fish</a></h5>
                                  <div className="text desc text-light">Vegetables, cheeses, ground meats, tomato sauce, red onion, crab.</div>
                                  <div className="price">$12.00</div>
                              </div>
                          </div>
                          {/*Item*/}
                          <div className="offer-block-three col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                              <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
                                  <div className="image"><a href="menu-list-2.html#"><img src="images/resource/dish4.png" alt="image" /></a></div>
                                  <h5><a href="menu-list-1.html">Greek Salad</a></h5>
                                  <div className="text desc text-light">Avocados with crab meat, red onion, crab salad red bell pepper...</div>
                                  <div className="price">$39.00</div>
                              </div>
                          </div>
                          {/*Item*/}
                          <div className="offer-block-three col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                              <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                                  <div className="image"><a href="menu-list-2.html#"><img src="images/resource/dish5.png" alt="image" /></a></div>
                                  <h5><a href="menu-list-1.html">Tokusen Wagyu</a></h5>
                                  <div className="text desc text-light">Tomatoes, green bell pepper, red bell pepper, sliced cucumber onion, olives.</div>
                                  <div className="price">$45.00</div>
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
                                          <div className="logo"><a href="index.html" title="Restoria - Restaurants HTML Template"><img src="/assets/images/logo.png" alt="image" title="Restoria - Restaurants HTML Template" /></a></div>
                                          <div className="info">
                                              <h6>visit us </h6>
                                              <ul>
                                                  <li>Abuja Intercontiental 1, Ladi Kwali Street, Wuse Zone 4,</li>
                                                  <li>Daily - 8.00 am to 10.00 pm</li>
                                                  <li><a href="mailto:booking@domainname.com">info@abujacontinental.com</a></li>
                                                  <li><a href="tel:+234 (0) 2094612000 / 08070602727">Booking Request : +234 (0) 2094612000 / 08070602727</a></li>
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
          <div className="scroll-to-top scroll-to-target" data-target="html"><span className="icon fa fa-angle-up" /></div>
          {/*[if lt IE 9]><![endif]*/}
      </div>


    
  );
}

export default Rooms