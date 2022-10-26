import React from "react";
import { NavLink } from "react-router-dom";
import "../Header/Header.scss";
import logo from "../../assets/Png/logo.jpg";
import vektor from "../../assets/Svg/vector.svg";
import mon from "../../assets/Png/mon.png";
import sun from "../../assets/Png/sun.png";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <nav className="header__nav">
          <NavLink to="/" className="header__nav_link">
            <img className="header__nav_link_img" src={logo} alt="" />
          </NavLink>
          <ul className="header__nav_ul">
            <li className="header__nav_ul_li">
              <button className="header__nav_ul_li_btn">
                <img
                  className="header__nav_ul_li_btn_img"
                  src={vektor}
                  alt="viktor img"
                />
                Admin
              </button>
            </li>
            <li className="header__nav_ul_li">
              <div className="header__nav_ul_li_box">
                <button className="header__nav_ul_li_box_button">
                  <img
                    className="header__nav_ul_li_box_button_mon"
                    src={mon}
                    alt=""
                  />
                </button>
                <button className="header__nav_ul_li_box_buttons">
                  <img
                    className="header__nav_ul_li_box_buttons_sun"
                    src={sun}
                    alt=""
                  />
                </button>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
