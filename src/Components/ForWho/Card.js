import React, { useEffect } from "react";
import styles from "./ForWho.module.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const Card = (props) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div data-aos="fade-up" className={styles.card}>
      <img src={props.src} alt={props.title} />
      <div className={styles.info}>
        <h3 style={{ color: "var(--lightdark)" }}>{props.title}</h3>
        <p>{props.text.substring(0, 90)}...</p>
        {props.routerName ? (
          <Link to={props.router}>
            {props.routerName} <i className="fas fa-chevron-right"></i>
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default Card;
