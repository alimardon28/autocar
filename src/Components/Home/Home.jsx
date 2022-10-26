import React from "react";
import { NavLink } from "react-router-dom";
import "../Home/Home.scss";
import ferrare from "../../assets/Png/ferrare.png";
import granta from "../../assets/Png/gentra.png";
import lambargini from "../../assets/Png/lambargini.png";
import nexia from "../../assets/Png/nexia.png";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <h1 className="home__title">Modellari</h1>
        <ul className="home__ul">
          <li className="home__ul_li">
            <NavLink className="home__ul_li_link" to="/chevroletcar">
              <img className="home__ul_li_link_img" src={nexia} alt="" />
              <p className="home__ul_li_link_desc">chevrolet</p>
            </NavLink>
          </li>
          <li className="home__ul_li">
            <NavLink className="home__ul_li_link" to="/ladacar">
              <img className="home__ul_li_link_img" src={granta} alt="" />
              <p className="home__ul_li_link_desc">lada</p>
            </NavLink>
          </li>
          <li className="home__ul_li">
            <NavLink className="home__ul_li_link" to="/lambarghinicar">
              <img className="home__ul_li_link_img" src={lambargini} alt="" />
              <p className="home__ul_li_link_desc">lambarghini</p>
            </NavLink>
          </li>
          <li className="home__ul_li">
            <NavLink className="home__ul_li_link" to="/ferrarecar">
              <img className="home__ul_li_link_img" src={ferrare} alt="" />
              <p className="home__ul_li_link_desc">ferrare</p>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
