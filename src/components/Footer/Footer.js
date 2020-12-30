import React from "react";

import "./index.css";
import DeptLogoWhite from "./../../images/dept_logo_white.svg";
import FacebookIcon from "./../../images/icon-facebook.svg";
import TwitterIcon from "./../../images/icon-twitter.svg";
import InstagramIcon from "./../../images/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={DeptLogoWhite} alt="Logo DEPT white" className="footer-logo" />
      <ul className="footer-links">
        <li className="link-item">
          <img src={DeptLogoWhite} alt="Logo DEPT" />
        </li>
        <li className="link-item">
          <p>Work</p>
        </li>
        <li className="link-item">
          <p>Services</p>
        </li>
        <li className="link-item">
          <p>Stories</p>
        </li>
        <li className="link-item">
          <p>About</p>
        </li>
        <li className="link-item">
          <p>Careers</p>
        </li>
        <li className="link-item">
          <p>Contact</p>
        </li>
      </ul>
      <ul className="footer-media">
        <a href="https://www.facebook.com/DeptAgency/">
          <li className="media-item">
            <img src={FacebookIcon} alt="icon Facebook" />
          </li>
        </a>
        <a href="https://twitter.com/deptagency">
          <li className="media-item">
            <img src={TwitterIcon} alt="icon Twitter" />
          </li>
        </a>
        <a href="https://www.instagram.com/deptagency/">
          <li className="media-item">
            <img src={InstagramIcon} alt="icon Instragram" />
          </li>
        </a>
      </ul>
      <div className="footer-divider"></div>
      <p className="footer-text">Chamber of Commerce: 63464101</p>
      <p className="footer-text">VAT: NL 8552.47.502.B01</p>
      <p className="footer-text">Terms and conditions</p>
      <p className="footer-text">&#169; 2018 Dept Agency</p>
      <button className="to-top-btn">top</button>
    </footer>
  );
};

export default Footer;
