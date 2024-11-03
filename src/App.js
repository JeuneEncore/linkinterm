import React, { useState, useEffect } from "react";
import Navbar from "./container/navbar/navbar";
import Home from "./container/home/home";
import Internships from "./container/internships/internships";
import Contact from "./container/contact/contact";
import Registration from "./container/registration/registration";
import { Fade } from "@mui/material";
import "./App.css";

const App = () => {
    const [currentPage, setCurrentPage] = useState("home");
    const [showPage, setShowPage] = useState(true);

    const handleNavigation = (page) => {
        setShowPage(false); // Start fade-out animation
        setTimeout(() => {
            setCurrentPage(page); // Switch page
            setShowPage(true); // Start fade-in animation
        }, 200); // Match timeout with fade-out duration
    };

    const renderPage = () => {
        switch (currentPage) {
            case "home":
                return <Home />;
            case "internships":
                return <Internships />;
            case "contact":
                return <Contact />;
            case "registration":
                return <Registration />;
            default:
                return <Home />;
        }
    };

    return (
        <div className="App">
            <Navbar onSelectPage={handleNavigation} />
            <Fade in={showPage} timeout={200}>
                <div className="content">
                    {renderPage()}
                </div>
            </Fade>
        </div>
    );
};

export default App;
