import React from 'react'
import Burger from './Burger';
import "./navbar.css"

const Navbar = () => {
  return (
    <nav className="navigation">
      <a href="#home" className="coderitimg">
        <img src={require("../../assets/Files/CodeRIT Light Shadow.png")} alt="" />
      </a>
      <Burger />
      {/* <button className="hamburger">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className="navigation-menu">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#events">Upcoming Events</a>
          </li>
          <li>
            <a href="#pastev">Past Events</a>
          </li>
          
          <li>
            <a href="#team">Team</a>
          </li>
          
          <li>
            <a href="#faq">FAQ</a>
          </li>
          
          <li>
            <a href="#queries">Queries</a>
          </li>
        </ul>
      </div> */}
    </nav>
  );
}

export default Navbar