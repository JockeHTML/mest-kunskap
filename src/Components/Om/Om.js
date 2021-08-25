import React, { useEffect, useContext } from "react";
import styles from "./Om.module.css";
import { om } from "../Data/Data";
import Grid from "@material-ui/core/Grid";
import { AppContext } from "../Context/Context";

import { Link } from "react-router-dom";

function Home() {
  const { setDefaultHeading } = useContext(AppContext);

  /* useEffect hook render right heading */
  useEffect(() => {
    setDefaultHeading("Mest Kunskap");
  });

  return (
    <div className={styles.wrapper}>
      <Grid xs={10} md={11} lg={10} xl={8} container item id={styles.om}>
        {om.map((info, index) => {
          return (
            <Grid
              key={index}
              item
              xs={12}
              md={12}
              lg={8}
              xl={6}
              className={styles.om}
            >
              <div className={styles.content}>
                <div className={styles.title}>
                  <h4>Vem är jag?</h4>
                  <h1>{info.text_3}</h1>
                </div>
                <div className={styles.text}>
                  <p>{info.text_1}</p>
                  <p>{info.text_2}</p>
                </div>
                <div className={styles.button}>
                  <Link to="/kontakt">Kontakta mig</Link>
                </div>
              </div>
            </Grid>
          );
        })}
        <Grid item xs={12} md={12} lg={6} xl={6} className={styles.image}>
          <img src="" alt="lecture" />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
