import React from "react";
import Queries from "../queries/Queries";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="row">
          <div className="col">
            <img
              src={require("./images/CodeRITFullWhite1.png")}
              className="coderit-footer"
            />
          </div>
          <div className="col">
            <a href="#" className="footer-col">
              Communities
            </a>
          </div>
          <div className="col">
            <a href="#" className="footer-col">
              Useful links
            </a>
          </div>
          <div className="col">
            <ul>
              <li>
                <img src={require("./images/Instagram.png")} />
              </li>
              <li>
                <img src={require("./images/icons8-linkedin-50 1.png")} />
              </li>
              <li>
                <img src={require("./images/discord.png")} />
              </li>
              <li>
                <img src={require("./images/Telegram.png")} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
