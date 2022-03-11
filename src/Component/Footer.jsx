import React from "react";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <footer className="main_footer">
      <div className="footer_first_section">
        <h1 className="footer_header">Ready to start online visit?</h1>
        <p className="footer_para">
          Lorem ipsum is simply dummy text of the printing and <br />{" "}
          typesetting industry. Lorem ipsum has been the <br /> industry's
        </p>
        <button className="footer_btn">Start free online visit</button>
      </div>

      <div className="footer_second_section">
        <h1 className="footer_logo">Logo</h1>
        <ul className="footer-links">
          <div className="footer_first">
            <Link to="/" className="footerr">
              <li>Home</li>
            </Link>
            <Link to="/HowItWorks" className="footerr">
              <li>How it Works</li>
            </Link>
          </div>
          <div className="footer_second">
            <Link to="/Product" className="footerr">
              <li>Product</li>
            </Link>
            <Link to="/OurTeam" className="footerr">
              <li>Our Team</li>
            </Link>
            <Link to="/FAQ" className="footerr">
              <li>FAQ</li>
            </Link>
          </div>
        </ul>
        <div className="footer_icon">
          <a href="#">
            {" "}
            <i class="fa fa-facebook"></i>{" "}
          </a>
          <a href="#">
            {" "}
            <i class="fa fa-instagram"></i>{" "}
          </a>
          <a href="#">
            {" "}
            <i class="fa fa-twitter"></i>{" "}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
