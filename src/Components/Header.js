import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { logos, socialMediaUrl } from "../Details";
// import { FontAwesomeIconx,faFacebook } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { linkdein, github, twitter,facebook } = socialMediaUrl;

  const toggleClass = () => {
    setIsOpen(!isOpen);
  };

  const activeLinkStyle = "text-blue-500";  // Define the color for active link
  const inactiveLinkStyle = "text-white";   // Define the color for inactive link

  return (
    <header className="container mx-auto md:flex justify-between py-2 max-width">
      <div className="flex justify-between items-center py-2 md:py-10">
        <NavLink to="/">
          <img className="w-14" src={logos.logogradient} alt="logo" />
        </NavLink>
        <div onClick={toggleClass} className="cursor-pointer">
          <svg
            className="stroke-dark-heading dark:stroke-white md:hidden"
            width="25"
            height="20"
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.4375 1.3125H14.5625M1.4375 11.3125H14.5625H1.4375ZM1.4375 6.3125H14.5625H1.4375Z"
              strokeWidth="1.875"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <nav className={` ${!isOpen ? "hidden" : null} text-center md:flex justify-between`}>
        <ul className="dark:text-light-content font-medium md:flex items-center md:space-x-5 md:mr-10">
          <li className="pb-1 md:pb-0">
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? activeLinkStyle : inactiveLinkStyle}
              onClick={toggleClass}
            >
              Home
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0">
            <NavLink 
              to="/about" 
              className={({ isActive }) => isActive ? activeLinkStyle : inactiveLinkStyle}
              onClick={toggleClass}
            >
              About
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0">
            <NavLink 
              to="/technologies" 
              className={({ isActive }) => isActive ? activeLinkStyle : inactiveLinkStyle}
              onClick={toggleClass}
            >
              Technologies
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0">
            <NavLink 
              to="/projects" 
              className={({ isActive }) => isActive ? activeLinkStyle : inactiveLinkStyle}
              onClick={toggleClass}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => isActive ? activeLinkStyle : inactiveLinkStyle}
              onClick={toggleClass}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <ul className="flex justify-evenly items-center my-5 md:my-0 md:space-x-5 md:mr-5">
        <li>
            <a href={github} className="text-white" target="_blank" rel="noreferrer noopener">
            <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a href={linkdein} className="text-white" target="_blank" rel="noreferrer noopener">
            <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a href={facebook} className="text-white" target="_blank" rel="noreferrer noopener">
            <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a className="text-blue-400" href={twitter} target="_blank" rel="noreferrer noopener">
            <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
