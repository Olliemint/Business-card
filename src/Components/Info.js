import React from 'react'
import "./style.css"

const Info = () => {
  return (
    <section className="info">
      <div className="image"></div>
      <article className="my-info">
        <div className="info text-center">
          <h3>Oliver Maiyo</h3>
          <p>FullStack Developer</p>
          <p>
            <a href="https://olliemint.github.io/Portfolio/">oliver.website</a>
          </p>
        </div>
        <div className="btns">
          <button className="btn1" type="submit">
            <span
              class="iconify"
              data-icon="dashicons:email-alt"
              data-width="18"
              data-height="18"
            ></span>
            Email
          </button>
          <button className="btn2" type="submit">
            LinkedIn
          </button>
        </div>
      </article>
    </section>
  );
}

export default Info 