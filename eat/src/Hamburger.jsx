import React, { useState } from 'react';

function HamburgerMenu() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div
                className="hamburger-menu"
                onClick={() => setOpen(!open)}
                style={{
                    cursor: 'pointer',
                    border: '2px solid #fff',
                    borderRadius: '50%',
                    width: 56,
                    height: 56,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'transparent',
                    position: 'fixed',
                    top: 40,
                    left: 32,
                    zIndex: 2100,
                }}
            >
                <span className="hamburger-icon" style={{ fontSize: 32, color: '#fff' }}>&#9776;</span>
            </div>
            {open && (
                <div
                    className="mobile-nav-overlay"
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '40vw',
                        height: '100vh',
                        background: '#0a1f13',
                        color: '#fff',
                        zIndex: 2000,
                        boxShadow: '2px 0 8px rgba(0,0,0,0.2)',
                        transition: 'left 0.3s',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        padding: '24px 24px 0 24px',
                        minHeight: 80,
                        position: 'relative',
                    }}>
                        <button
                            style={{
                                fontSize: 38,
                                background: 'none',
                                border: '2px solid #fff',
                                borderRadius: '50%',
                                color: '#fff',
                                cursor: 'pointer',
                                width: 48,
                                height: 48,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                            onClick={() => setOpen(false)}
                            aria-label="Close"
                        >
                            &times;
                        </button>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 24,
                        marginBottom: 8,
                    }}>
                        <img
                            src="/assets/images/logo.png"
                            alt="Logo"
                            style={{ width: 60, height: 60, objectFit: 'contain' }}
                        />
                        <span style={{
                            fontSize: 24,
                            fontWeight: 600,
                            color: '#fa9200e3',
                            marginTop: 24, // increased margin for more space below logo
                            textAlign: 'center'
                        }}>
                            Abuja InterContinental
                        </span>
                    </div>
                    <nav style={{ marginTop: 32 }}>
                        <ul style={{
                            listStyle: 'none',
                            padding: 0,
                            fontSize: 20,
                            margin: 0
                        }}>
                            {[
                                { href: '/', label: 'Home' },
                                { href: 'rooms.js', label: 'Rooms & Suites' },
                                { href: 'restlounges.js', label: 'Restaurant & Lounges' },
                                { href: 'about.js', label: 'About Us' },
                                { href: 'contact.js', label: 'Contact' }
                            ].map((item, idx, arr) => (
                                <NavItem
                                    key={item.label}
                                    href={item.href}
                                    label={item.label}
                                    borderBottom={idx !== arr.length - 1}
                                    onClick={() => setOpen(false)}
                                />
                            ))}
                        </ul>
                    </nav>
                </div>
            )}
            <style>
                {`
                @media (max-width: 600px) {
                    .hamburger-menu {
                        top: 50 !important;
                        bottom: 24px !important;
                        left: 24px !important;
                    }
                    .mobile-nav-overlay {
                        width: 100vw !important;
                        left: 0 !important;
                    }
                }
                `}
            </style>
        </>
    );
}

export default HamburgerMenu;

// NavItem component for hover effect and star icon
function NavItem({ href, label, borderBottom, onClick }) {
    const [hover, setHover] = useState(false);

    return (
        <li
            style={{
                padding: '14px 24px',
                borderBottom: borderBottom ? '1px solid #fff' : 'none',
                margin: 0,
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <a
                href={href}
                onClick={onClick}
                style={{
                    color: '#fff',
                    textDecoration: 'none',
                    display: 'block',
                    flex: 1
                }}
            >
                {label}
            </a>
            {hover && (
                <span style={{ marginLeft: 10, color: '#ffd700', fontSize: 20 }}>
                    &#9733;
                </span>
            )}
        </li>
    );
}