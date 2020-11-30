import React, { useState } from "react";
import "./Sidebar.css";

const menuWidth = 250;

export default function Sidebar({ isOpen, setUrl, setIdVideo }) {


  return (
    <div className="side-nav" style={{ position: 'relative' }}>

      <div style={{ display: 'flex' }}>

        <nav className="side-bar" style={{ width: isOpen ? menuWidth : 0 }}>

          <ul id="menu-vertical" style={{ width: menuWidth }}>

            <li className="border__shadow">
              <a href="#">
                {/* <span className="icon-holder">
                  <i className="icon"></i>
                </span> */}
                <span onClick={() => setUrl("https://s3.eu-west-1.amazonaws.com/media.habiteo.com/models/z/zwP5R4LUk6lCQM0ZZGepu/general/0001.jpg")} className="text-menu">
                  Vue générale
                </span>
              </a>
            </li>

            <li className="border__shadow">
              <a href="#">
                {/* <span className="icon-holder">
                  <i className="icon"></i>
                </span> */}
                <span  className="text-menu">
                  Visites Virtuelles 3D
                </span>
              </a>

              <ul>
                <li>
                  <a className="sub-menu">
                    <span onClick={() => setUrl("https://my.matterport.com/show/?m=hcUyyRZdc3R")}>
                      Exemple 1
                      </span>
                  </a>
                </li>
                <li><a className="sub-menu"> Exemple 2 </a></li>
                <li><a className="sub-menu"> Exemple 3 </a></li>
              </ul>
            </li>

            <li className="border__shadow">
              <a href="#">
                {/* <span className="icon-holder">
                  <i className="icon"></i>
                </span> */}
                <span className="text-menu">
                  Vidéo 360
                </span>
              </a>

              <ul>
                <li>
                  <a className="sub-menu">
                    <span onClick={() => setIdVideo("qbvUgxWLnkY")}>
                      Exemple 1
                    </span>
                  </a>
                </li>
                <li><a className="sub-menu"> Exemple 2 </a></li>
                <li><a className="sub-menu"> Exemple 3 </a></li>
              </ul>

            </li>

            <li className="border__shadow">
              <a href="#">
                {/* <span className="icon-holder">
                  <i className="icon"></i>
                </span> */}
                <span  className="text-menu">
                  Visite Google
                </span>
              </a>

              <ul>
                <li>
                  <a className="sub-menu">
                    <span onClick={() => setUrl("https://www.google.com/maps/embed?pb=!4v1606412256100!6m8!1m7!1sCAoSLEFGMVFpcE1VdTQyVlgyTTkxOTZscnBmSmRmcHQyVHZlY1oybW9fY2RTM3Fm!2m2!1d43.57922427528444!2d3.949080672525156!3f191.53!4f-5.989999999999995!5f0.7820865974627469")}>
                      Exemple 1
                    </span>
                  </a>
                </li>
                <li><a className="sub-menu"> Exemple 2 </a></li>
                <li><a className="sub-menu"> Exemple 3 </a></li>
              </ul>
            </li>

            <li className="border__shadow">
              <a href="#">
                {/* <span className="icon-holder">
                  <i className="icon"></i>
                </span> */}
                <span onClick={() => setUrl("https://impakt.shapespark.com/sogea_t2/")} className="text-menu">
                  Photos
                 </span>
              </a>
            </li>

          </ul>
        </nav>
      </div>
    </div>
  );
}


