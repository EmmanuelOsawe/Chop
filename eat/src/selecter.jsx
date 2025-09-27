import { useState } from "react";

export default function MenuSection() {
    const [activeTab, setActiveTab] = useState("tab-1");

    return (
        <section className="menu-section section-kt">
            <div className="auto-container">
                <div className="title-box centered">
                    <div className="title-badge">
                        <img
                            src="/assets/images/resource/menu-title-badge.svg"
                            alt="image"
                            title="image"
                        />
                    </div>
                    <h2>Exclusive Special Offers at Abuja Continental Hotel</h2>
                    <h3>Unlock Unforgettable Experiences & Savings in Abuja</h3>
                </div>

                <div className="tabs-box menu-tabs">
                    {/* Tab buttons */}
                    <div className="buttons">
                        <ul className="tab-buttons clearfix">
                            <li
                                className={`tab-btn ${activeTab === "tab-1" ? "active-btn" : ""}`}
                                onClick={() => setActiveTab("tab-1")}
                            >
                                <span>Salsa Night</span>
                            </li>
                            <li
                                className={`tab-btn ${activeTab === "tab-2" ? "active-btn" : ""}`}
                                onClick={() => setActiveTab("tab-2")}
                            >
                                <span>Chunky Fingers</span>
                            </li>
                            <li
                                className={`tab-btn ${activeTab === "tab-3" ? "active-btn" : ""}`}
                                onClick={() => setActiveTab("tab-3")}
                            >
                                <span>Enjoying live DJ</span>
                            </li>
                            <li
                                className={`tab-btn ${activeTab === "tab-4" ? "active-btn" : ""}`}
                                onClick={() => setActiveTab("tab-4")}
                            >
                                <span>Weddings</span>
                            </li>
                        </ul>
                    </div>

                    {/* Tab content */}
                    <div className="tabs-content">
                        {activeTab === "tab-1" && (
                            <div className="tab active-tab" id="tab-1">
                                <h3>Salsa Night</h3>

                                <br></br>
                                
                                <img src="/assets/images/events/salsa.jpg" alt="Salsa Night" />
                                <br></br>
                                <p>
                                    Join us every Friday night for an unforgettable Salsa Night at Abuja Continental Hotel! Whether you're a seasoned dancer or a complete beginner, our lively salsa sessions are perfect for everyone. Enjoy the vibrant rhythms of Latin music, sip on our signature cocktails, and dance the night away in a fun and welcoming atmosphere. Don't miss out on this exciting weekly event that promises great music, delicious drinks, and fantastic company. See you on the dance floor!.
                                    Thursday Thursday 6PM Happy Hour 7PM - 8PM:  Buy One, Get One Free Pool Bar, Abuja Continental.
                                </p>
                            </div>
                        )}
                        {activeTab === "tab-2" && (
                            <div className="tab active-tab" id="tab-2">
                                <h3>Main Dishes</h3>
                                {/*Tab*/}
                                <div className="tab active-tab" id="tab-1">
                                    <div className="row clearfix">
                                        <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                                            <div className="inner">
                                                {/*Block*/}
                                                <div className="dish-block">
                                                    <div className="inner-box">
                                                        <div className="dish-image"><a href="index.html#"><img src="images/resource/menu-image-1.png" alt="image" /></a></div>
                                                        <div className="title clearfix"><div className="ttl clearfix"><h6><a href="index.html#">Stuffed Mushrooms</a></h6></div> <span className="menu-list-line"> </span> <div className="price"><span>$25.50</span></div></div>
                                                        <div className="text desc"><a href="index.html#">flavorful, filled with panko bread crumbs, pine nuts, parsley, sun-dried tomatoes, and cheese.</a></div>
                                                    </div>
                                                </div>
                                                {/*Block*/}
                                                <div className="dish-block">
                                                    <div className="inner-box">
                                                        <div className="dish-image"><a href="index.html#"><img src="images/resource/menu-image-2.png" alt="image" /></a></div>
                                                        <div className="title clearfix"><div className="ttl clearfix"><h6><a href="index.html#">Jalapeno Poppers <span className="s-info">New</span></a></h6></div> <span className="menu-list-line"> </span> <div className="price"><span>$40.00</span></div></div>
                                                        <div className="text desc"><a href="index.html#">Greek yogurt filling instead of a traditional cream cheese one.</a></div>
                                                    </div>
                                                </div>
                                                {/*Block*/}
                                                <div className="dish-block">
                                                    <div className="inner-box">
                                                        <div className="dish-image"><a href="index.html#"><img src="images/resource/menu-image-3.png" alt="image" /></a></div>
                                                        <div className="title clearfix"><div className="ttl clearfix"><h6><a href="index.html#">Caprese Skewers</a></h6></div> <span className="menu-list-line"> </span> <div className="price"><span>$10.00</span></div></div>
                                                        <div className="text desc"><a href="index.html#">Drizzle these colorful skewers with an easy balsamic for a pop of sweet flavor.</a></div>
                                                    </div>
                                                </div>
                                                {/*Block*/}
                                                <div className="dish-block">
                                                    <div className="inner-box">
                                                        <div className="dish-image"><a href="index.html#"><img src="images/resource/menu-image-4.png" alt="image" /></a></div>
                                                        <div className="title clearfix"><div className="ttl clearfix"><h6><a href="index.html#">Greek Salad</a></h6></div> <span className="menu-list-line"> </span> <div className="price"><span>$10.00</span></div></div>
                                                        <div className="text desc"><a href="index.html#">Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="menu-col img-col col-lg-6 col-md-12 col-sm-12">
                                            <div className="inner">
                                                <div className="image"><img src="images/resource/menus-1.jpg" alt="image" /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*Tab*/}
                            </div>
                        )}
                        {activeTab === "tab-3" && (
                            <div className="tab active-tab" id="tab-3">
                                <h3>Desserts</h3>
                                {/*Tab*/}
                                <div className="tab active-tab" id="tab-1">
                                    <div className="row clearfix">
                                        <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                                            <div className="inner">
                                                {/*Block*/}
                                                <div className="dish-block">
                                                    <div className="inner-box">
                                                        <div className="dish-image"><a href="index.html#"><img src="images/resource/menu-image-1.png" alt="image" /></a></div>
                                                        <div className="title clearfix"><div className="ttl clearfix"><h6><a href="index.html#">Stuffed Mushrooms</a></h6></div> <span className="menu-list-line"> </span> <div className="price"><span>$25.50</span></div></div>
                                                        <div className="text desc"><a href="index.html#">flavorful, filled with panko bread crumbs, pine nuts, parsley, sun-dried tomatoes, and cheese.</a></div>
                                                    </div>
                                                </div>
                                                {/*Block*/}
                                                <div className="dish-block">
                                                    <div className="inner-box">
                                                        <div className="dish-image"><a href="index.html#"><img src="images/resource/menu-image-2.png" alt="image" /></a></div>
                                                        <div className="title clearfix"><div className="ttl clearfix"><h6><a href="index.html#">Jalapeno Poppers <span className="s-info">New</span></a></h6></div> <span className="menu-list-line"> </span> <div className="price"><span>$40.00</span></div></div>
                                                        <div className="text desc"><a href="index.html#">Greek yogurt filling instead of a traditional cream cheese one.</a></div>
                                                    </div>
                                                </div>
                                                {/*Block*/}
                                                <div className="dish-block">
                                                    <div className="inner-box">
                                                        <div className="dish-image"><a href="index.html#"><img src="images/resource/menu-image-3.png" alt="image" /></a></div>
                                                        <div className="title clearfix"><div className="ttl clearfix"><h6><a href="index.html#">Caprese Skewers</a></h6></div> <span className="menu-list-line"> </span> <div className="price"><span>$10.00</span></div></div>
                                                        <div className="text desc"><a href="index.html#">Drizzle these colorful skewers with an easy balsamic for a pop of sweet flavor.</a></div>
                                                    </div>
                                                </div>
                                                {/*Block*/}
                                                <div className="dish-block">
                                                    <div className="inner-box">
                                                        <div className="dish-image"><a href="index.html#"><img src="images/resource/menu-image-4.png" alt="image" /></a></div>
                                                        <div className="title clearfix"><div className="ttl clearfix"><h6><a href="index.html#">Greek Salad</a></h6></div> <span className="menu-list-line"> </span> <div className="price"><span>$10.00</span></div></div>
                                                        <div className="text desc"><a href="index.html#">Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="menu-col img-col col-lg-6 col-md-12 col-sm-12">
                                            <div className="inner">
                                                <div className="image"><img src="images/resource/menus-1.jpg" alt="image" /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*Tab*/}
                            </div>
                        )}
                        {activeTab === "tab-4" && (
                            <div className="tab active-tab" id="tab-4">
                                <h3>Wines</h3>
                                {/*Tab*/}
                                <div className="tab active-tab" id="tab-1">
                                    <div className="row clearfix">
                                        <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                                            <div className="inner">
                                                {/*Block*/}
                                                <div className="dish-block">
                                                    <div className="inner-box">
                                                        <div className="dish-image"><a href="index.html#"><img src="images/resource/menu-image-1.png" alt="image" /></a></div>
                                                        <div className="title clearfix"><div className="ttl clearfix"><h6><a href="index.html#">Stuffed Mushrooms</a></h6></div> <span className="menu-list-line"> </span> <div className="price"><span>$25.50</span></div></div>
                                                        <div className="text desc"><a href="index.html#">flavorful, filled with panko bread crumbs, pine nuts, parsley, sun-dried tomatoes, and cheese.</a></div>
                                                    </div>
                                                </div>
                                                {/*Block*/}
                                                <div className="dish-block">
                                                    <div className="inner-box">
                                                        <div className="dish-image"><a href="index.html#"><img src="images/resource/menu-image-2.png" alt="image" /></a></div>
                                                        <div className="title clearfix"><div className="ttl clearfix"><h6><a href="index.html#">Jalapeno Poppers <span className="s-info">New</span></a></h6></div> <span className="menu-list-line"> </span> <div className="price"><span>$40.00</span></div></div>
                                                        <div className="text desc"><a href="index.html#">Greek yogurt filling instead of a traditional cream cheese one.</a></div>
                                                    </div>
                                                </div>
                                                {/*Block*/}
                                                <div className="dish-block">
                                                    <div className="inner-box">
                                                        <div className="dish-image"><a href="index.html#"><img src="images/resource/menu-image-3.png" alt="image" /></a></div>
                                                        <div className="title clearfix"><div className="ttl clearfix"><h6><a href="index.html#">Caprese Skewers</a></h6></div> <span className="menu-list-line"> </span> <div className="price"><span>$10.00</span></div></div>
                                                        <div className="text desc"><a href="index.html#">Drizzle these colorful skewers with an easy balsamic for a pop of sweet flavor.</a></div>
                                                    </div>
                                                </div>
                                                {/*Block*/}
                                                <div className="dish-block">
                                                    <div className="inner-box">
                                                        <div className="dish-image"><a href="index.html#"><img src="images/resource/menu-image-4.png" alt="image" /></a></div>
                                                        <div className="title clearfix"><div className="ttl clearfix"><h6><a href="index.html#">Greek Salad</a></h6></div> <span className="menu-list-line"> </span> <div className="price"><span>$10.00</span></div></div>
                                                        <div className="text desc"><a href="index.html#">Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="menu-col img-col col-lg-6 col-md-12 col-sm-12">
                                            <div className="inner">
                                                <div className="image"><img src="images/resource/menus-1.jpg" alt="image" /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*Tab*/}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
