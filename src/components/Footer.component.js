import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footerWrapper">
        <div className="grid">
          <div className="firstGrid">
            <h3>ABOUT US</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium totam aperiam. Eaque ipsa quae
              ab illo inventore veritatis etc
            </p>
            <button>Read More</button>
          </div>
          <div className="secondGrid">
            <h3>CONTACT INFO</h3>
            <p>Call : 9812334324, 9832472738</p>
            <p>Write : admin@gmail.com</p>
            <p>Find us : kathmandu, Nepal</p>
            <Link to="/contact">
              <button>Get in Touch</button>
            </Link>
          </div>
          <div className="thirdGrid">
            <h3>OUR BLOG</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium totam aperiam. Eaque ipsa quae
              ab illo inventore veritatis etc
            </p>
            <button>Read More</button>
          </div>
          <div className="forthGrid">
            <p>TODAY'S SPECIAL!</p>
            <div></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
