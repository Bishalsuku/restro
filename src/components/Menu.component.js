import React, { useEffect, useRef } from "react";
import Food from "../data/Food.data";
import bodySection from "../img/body-section.png";
import arrow from "../img/arrow.svg";

function Menu() {
  const menuItems = useRef(null);

  useEffect(() => {
    // console.log(menuItems.current.children);
    if (
      menuItems.current.children.length % 2 !== 1 &&
      menuItems.current.children.length !== 0 &&
      menuItems.current.children !== undefined
    ) {
      const secondLastItem = menuItems.current.children.length - 1;

      for (let i = 0; i < menuItems.current.children.length; i++) {
        if (i % 2 === 1) {
          menuItems.current.children[i].style = `
          justify-self: flex-end;
          `;
        }
      }

      menuItems.current.children[secondLastItem].style = `
        grid-column-start: 1;
        grid-column-end: 3;
      `;
    } else {
      if (menuItems.current.children !== undefined) {
        for (let i = 0; i < menuItems.current.children.length; i++) {
          menuItems.current.children[i].removeAttribute("style");

          if (i % 2 === 1) {
            menuItems.current.children[i].style = `
            justify-self: flex-end;
            `;
          }
        }
      }
    }
  }, [menuItems]);

  return (
    <main>
      <div className="menuContainer">
        <div className="menuWrapper">
          <img src={bodySection} className="bgimg" alt="bodySection" />
          <h1>Our Menu</h1>
          <div className="menuHeader">
            <div className="lines">
              <div className="line first"></div>
              <div className="line sec"></div>
              <div className="line third"></div>
            </div>
            <div className="menuBar">
              <p>Loaded Fries </p>
              <p>Da Aalo Special</p>
              <p>Spirals</p>
              <p>Tacos</p>
              <p>Katti Roll</p>
              <p>Momo</p>
            </div>
          </div>
          <div className="menu" ref={menuItems}>
            {Food[0] === undefined ? (
              <p className="textStyle">*No data found.</p>
            ) : (
              Food.map((data, idx) => (
                <div className="menuCard" key={idx}>
                  <img src={data.img} alt="cajun" />
                  <div className="menuDesc">
                    <h2>{data.title}</h2>
                    <p>{data.desc}</p>
                  </div>
                  <div className="price">
                    <div className="regularPrice">
                      <p>Regular</p>
                      <p>{data.regularPrice}</p>
                    </div>
                    <div className="largePrice">
                      <p>Large</p>
                      <p>{data.largePrice}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        <button>
          <p>See More</p>
          <img src={arrow} alt="arrow" />
        </button>
      </div>
    </main>
  );
}

export default Menu;
