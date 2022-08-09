import React from 'react'
import "./style.css";


const Footer = () => {
  return (
    <section className="footer-section">
      <article className="footer-data">
        <span
          class="iconify"
          data-icon="fa-brands:twitter-square"
          style={{ color: "#918e9b" }}
          data-width="30"
          data-height="30"
        ></span>
        <span
          class="iconify"
          data-icon="ant-design:facebook-filled"
          style={{ color: "#918e9b" }}
          
          data-width="30"
          data-height="30"
        ></span>
        <span
          class="iconify"
          data-icon="bxl:instagram-alt"
          style={{ color: "#918e9b" }}
          
          data-width="30"
          data-height="30"
        ></span>
        <span
          class="iconify"
          data-icon="fa-brands:github-square"
          style={{ color: "#918e9b" }}
          data-width="30"
          data-height="30"
        ></span>
      </article>
    </section>
  );
}

export default Footer