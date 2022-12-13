import React from "react";
// import Queries from "../queries/Queries";
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
              alt=""
            />
          </div>
          {/* <div className="col">
            <a href="/" className="footer-col">
              Communities
            </a>
          </div>
          <div className="col">
            <a href="/" className="footer-col">
              Useful links
            </a>
          </div> */}
          <div className="col">
            <ul>
              <li>
                <a href="https://instagram.com/code_rit?igshid=YmMyMTA2M2Y=">
                  <img src={require("./images/Instagram.png")} alt="" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/coderitclub/">
                  <img
                    src={require("./images/icons8-linkedin-50 1.png")}
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="https://discord.gg/NeVcpEC4">
                  <img src={require("./images/discord.png")} alt="" />
                </a>
              </li>
              <li>
                <a href="https://t.me/+JkfLZPe6p0cyNmY9">
                  <img src={require("./images/Telegram.png")} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
