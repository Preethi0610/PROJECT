import React, { useState } from "react";
import "./Navbar.css";
import { Pointer } from "lucide-react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="navbar">
        <h1 className="navbar-logo">AI MOVIE MAVEN</h1>
        <ul className="navbar-links desktop-only">
          <li><a href="#recommendations">User Recommendations</a></li>
          <li><a href="#trending">Trending</a></li>
          <li><a href="#popular">Popular</a></li>
        </ul>
        <div className="navbar-icons">
          <span onClick={toggleSidebar} className="hamburger-icon">☰</span>
          <span hidden>🔍</span>
          <span style={{cursor:"pointer"}}>👤</span>
        </div>
      </nav>

      {/* Sidebar for mobile view */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <span className="close-btn" onClick={toggleSidebar}>&times;</span>
        <ul className="sidebar-links"><br /><br />
          <li><a href="#recommendations" onClick={toggleSidebar}>User Recommendations</a></li>
          <li><a href="#trending" onClick={toggleSidebar}>Trending</a></li>
          <li><a href="#popular" onClick={toggleSidebar}>Popular</a></li>
        </ul>
      </div>
      
      {/* Overlay to close the sidebar when clicking outside */}
      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Navbar;
