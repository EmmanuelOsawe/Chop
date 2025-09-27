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

                                <br></br> <br></br>

                                <p>
                                    Join us every Friday night for an unforgettable Salsa Night at Abuja Continental Hotel! Whether you're a seasoned dancer or a complete beginner, our lively salsa sessions are perfect for everyone. Enjoy the vibrant rhythms of Latin music, sip on our signature cocktails, and dance the night away in a fun and welcoming atmosphere. Don't miss out on this exciting weekly event that promises great music, delicious drinks, and fantastic company. See you on the dance floor!.
                                    Thursday Thursday 6PM Happy Hour 7PM - 8PM:  Buy One, Get One Free Pool Bar, Abuja Continental.
                                </p>
                            </div>
                        )}
                        {activeTab === "tab-2" && (
                            <div className="tab active-tab" id="tab-2">
                                <h3>Chunky Fingers</h3>

                                <br></br>

                                <img src="/assets/images/events/chunky.jpg" alt="Salsa Night" />

                                <br></br> <br></br>
                                
                                <p>
                                    Indulge in the ultimate comfort food experience with our Chunky Fingers special at Abuja Continental Hotel! Our crispy, golden-brown chicken fingers are made from the finest cuts of chicken, seasoned to perfection, and served with a variety of delicious dipping sauces. Whether you're craving a quick snack or a hearty meal, our Chunky Fingers are sure to satisfy your taste buds. Perfect for sharing with friends or enjoying on your own, this dish is a must-try for all food lovers. Visit us today and treat yourself to this irresistible delight!
                                </p>
                            </div>
                        )}
                        {activeTab === "tab-3" && (
                            <div className="tab active-tab" id="tab-3">
                                <h3>Enjoying living dj</h3>

                                <br></br>

                                <img src="/assets/images/events/dj.jpg" alt="Salsa Night" />

                                <br></br> <br></br>
                                
                                <p>
                                    Experience the electrifying atmosphere of Abuja Continental Hotel with our live DJ nights! Every weekend, we bring you the best beats and rhythms to keep you dancing all night long. Our talented DJs curate an eclectic mix of music, from chart-topping hits to classic favorites, ensuring there's something for everyone. Whether you're celebrating a special occasion or just looking for a fun night out, our live DJ events provide the perfect backdrop for an unforgettable evening. Join us and let the music move you!
                                </p>
                            </div>
                        )}
                        {activeTab === "tab-4" && (
                            <div className="tab active-tab" id="tab-4">
                                <h3>Weddings</h3>

                                <br></br>

                                <img src="/assets/images/events/wedding.jpg" alt="Salsa Night" />

                                <br></br> <br></br>
                                
                                <p> 
                                    Celebrate your special day in style at Abuja Continental Hotel, the perfect venue for unforgettable weddings. Our elegant event spaces, exquisite catering options, and dedicated wedding planning team ensure that every detail of your big day is flawlessly executed. From intimate ceremonies to grand receptions, we offer a range of customizable packages to suit your needs and preferences. Let us help you create cherished memories with your loved ones in a beautiful setting that reflects your unique love story. Contact us today to start planning the wedding of your dreams!
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
