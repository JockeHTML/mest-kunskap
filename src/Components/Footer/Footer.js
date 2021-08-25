import React from "react";
import styles from "./Footer.module.css";
import { Grid } from "@material-ui/core";
import Icon from "../Nav/Icon";
import { footerLinks } from "../Data/Data";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Grid className={styles.footerContainer} container xs={10} xl={8}>
        <Icon />

        <ul>
          <li>
            <a href="https://www.facebook.com/mestkunskap">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          {footerLinks.map((data, index) => {
            return (
              <li key={index}>
                <Link to={data.router}>{data.title}</Link>
              </li>
            );
          })}
        </ul>
      </Grid>
    </footer>
  );
};

export default Footer;
