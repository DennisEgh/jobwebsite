import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Thirdcar() {
  const [title, setTitle] = useState(false);

  const changeTitle = () => {
    window.scrollY >= 1090 ? setTitle(true) : setTitle(false);
    console.log(window.scrollY)
  };
  window.addEventListener("scroll", changeTitle);
  return (
    <section id="third__car">
      <header>
        <div className="header__container--upper">
          <div
            className={
              title
                ? "header__description reveal active"
                : "header__description reveal"
            }
          >
            <h1 className="header__title">7 Series</h1>
            <p className="header__para">
              Order online for{" "}
              <span className="underline">Touchless Delivery</span>
            </p>
          </div>
        </div>
        <div className="header__container--lower">
          <div
            className={
              title
                ? "order__selection reveal active"
                : "order__selection reveal"
            }
          >
            <Link to="">
              <div className="custom__order">
                <p className="order__selection--para order">FACTORY NEW</p>
              </div>
            </Link>

            <Link to="">
              <div className="existing__inventory">
                <p className="order__selection--para existing">PRE-OWNED</p>
              </div>
            </Link>
          </div>
        </div>
      </header>
    </section>
  );
}
