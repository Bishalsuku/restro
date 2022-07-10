import React, { useContext, useEffect, useRef } from "react";
import hamburger from "../img/burger.svg";
import close from "../img/close.svg";

import headLogo from "../img/restro.svg";
import headBg from "../img/header-bg.png";
import { NavLink } from "react-router-dom";
import { MobNavContext } from "../contexts/MobNav.context";

const Header = () => {
  const { isMobNavOpen, changeMobNavState } = useContext(MobNavContext);

  const MobNavRef = useRef();

  useEffect(() => {
    if (window.innerWidth < 750) {
      if (isMobNavOpen) {
        if (MobNavRef.current != null) {
          document.body.style.overflow = "hidden";
          MobNavRef.current.style = "display:block";
        }
      } else {
        if (MobNavRef.current != null) {
          document.body.style.overflow = "auto";
          MobNavRef.current.removeAttribute("style");
        }
      }
    }
  }, [isMobNavOpen]);

  return (
    <>
      <header>
        <img src={headBg} className="headBg" alt="headbg" />
        <div className="headerWrapper">
          <img src={headLogo} alt="logo" />
          <nav>
            <ul>
              <NavLink to="/">
                <li>Home</li>
              </NavLink>
              <NavLink to="/menu">
                <li>Menu</li>
              </NavLink>
              <NavLink to="/contact">
                <li>Contact Us</li>
              </NavLink>
              <li>
                <p>Today's Special</p>
                <div></div>
              </li>
            </ul>
          </nav>

          <img
            src={!isMobNavOpen ? hamburger : close}
            alt="hamburger"
            className="hamburger"
            onClick={() => changeMobNavState()}
          />
        </div>
      </header>
      <div className="mobileNav" ref={MobNavRef}>
        <ul>
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/menu">
            <li>Menu</li>
          </NavLink>
          <NavLink to="/contact">
            <li>Contact Us</li>
          </NavLink>
          <li>
            <p>Today's Special</p>
            <div></div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
