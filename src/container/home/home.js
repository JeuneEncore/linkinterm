import React from "react";
import './home.css';

const Home = () => {
    return (
        <div className="home-container">
            <section className="hero-section">
                <h1>Welcome to LinkInternKZ</h1>
                <p>Your gateway to unlocking valuable career opportunities. We connect students with industry-leading internships tailored to build practical skills and expand professional networks.</p>
            </section>
            
            <section className="mission-section">
                <h2>Our Mission</h2>
                <p>
                    At LinkInternKZ, our goal is to help students launch their careers by providing easy access to leading internships across various fields. We believe hands-on experience is essential for career success, and we work to bridge the gap between students and employers.
                </p>
            </section>
            
            <section className="services-section">
                <h2>What We Will To Offer</h2>
                <ul>
                    <li>Comprehensive internship listings.</li>
                    <li>Support for building an outstanding resume and professional profile.</li>
                    <li>Personalized recommendations based on your skills and interests.</li>
                </ul>
            </section>
            
            <section className="call-to-action">
                <h2>Get Started Today</h2>
                <p>Ready to find your perfect internship? Browse through our listings and begin your journey to a successful career.</p>
            </section>
        </div>
    );
}

export default Home;
