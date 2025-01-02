"use client";
import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [bg, setBg] = useState(false);

  // Lock body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "visible";
  }, [isOpen]);

  // Add or remove `bg` class on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 400) {
        setBg(true);
      } else {
        setBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${bg ? "bg" : ""}`}>
      <img src="/assets/logo.png" alt="Logo" />
      <ul className="menu-links">
        <li><a href={"/"}>Home</a></li>
        <li><a href={"/about"}>About</a></li>
        <li><a href={"/contact"}>Contact</a></li>
        <li><a href={"/careers"}>Careers</a></li>
      </ul>
      <i className="bx bx-menu menu-icon" onClick={() => setIsOpen(true)}></i>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-top">
          <img src="/assets/logo.png" alt="Logo" />
          <i className="bx bx-x close-icon" onClick={() => setIsOpen(false)}></i>
        </div>
        <ul className="sidebar-links">
          <li><a href={"/"}>Home</a></li>
          <li><a href={"/about"}>About</a></li>
          <li><a href={"/contact"}>Contact</a></li>
          <li><a href={"/careers"}>Careers</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
