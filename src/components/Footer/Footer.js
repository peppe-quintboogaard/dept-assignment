import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      {/* <img src="" alt="Logo DEPT white" className="footer-logo"/> */}
      <ul className="footer-links">{/* render dynamically? */}</ul>
      <ul className="footer-media">{/* render dynamically? */}</ul>
      <p className="footer-text">Chamber of Commerce: 63464101</p>
      <p className="footer-text">VAT: NL 8552.47.502.B01</p>
      <p className="footer-text">Terms and conditions</p>
      <p className="footer-text">&#169; 2018 Dept Agency</p>
    </footer>
  );
};

export default Footer;
