import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr style={{ width: "90%", marginTop: 20 }} />
      <span className="name">
        Made by{" "}
        <a href="https://www.linkedin.com/in/shaish-guni-53a1a21b6/" target="__blank">
          &nbsp; Shaish Guni
        </a>
      </span>
      <div className="iconContainer">
        <a href="https://www.instagram.com/shaishguni/" target="__blank">
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100025584819295" target="__blank">
          <i className="fab fa-facebook fa-2x"></i>
        </a>
        <a href="https://twitter.com/GuniShaish" target="__blank">
          <i className="fab fa-twitter fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
