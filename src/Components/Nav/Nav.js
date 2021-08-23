import React, { useState, useContext } from "react";
import styles from "./Nav.module.css";
import { menuContent, links } from "../Data/Data";
import Social from "./Social";
import Grid from "@material-ui/core/Grid";
import { AppContext } from "../Context/Context";

import { Link } from "react-router-dom";

function Nav() {
  const [active, setActive] = useState(false);
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setActive(false);
    } else {
      setActive(false);
    }
  };

  /* useState hook used for showing data on hover or not */
  const [onHover, setOnHover] = useState();
  const { defaultHeading } = useContext(AppContext);

  return (
    <Grid container item xs={11} md={11} lg={10} xl={8} id={styles.header}>
      <Link to="/home" className={styles.title}>
        <img src="" alt="apple" />
        <h1>{defaultHeading}</h1>
      </Link>

      <div className={styles.links}>
        <div className={styles.menu}>
          <ul>
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <Link to={link.src}>{link.title}</Link>
                </li>
              );
            })}
            <li
              onMouseEnter={() => setOnHover(true)}
              onMouseLeave={() => setOnHover(false)}
            >
              <i className="fas fa-angle-down"></i>
              <Link to="/utbildning">Utbildning & Föreläsningar</Link>
              <div
                className={onHover ? styles.hoverWrapper : null}
                onMouseEnter={() => setOnHover(true)}
                onMouseLeave={() => setOnHover(false)}
              >
                <div className={onHover ? styles.dropDown : null}>
                  {onHover ? (
                    <ul>
                      {menuContent.map((content, index) => {
                        return (
                          <li key={index}>
                            <Link to={`${content.router}`}>
                              {content.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  ) : null}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Grid>
  );
}

export default Nav;
