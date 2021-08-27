import React, { useEffect, useContext } from "react";
import styles from "./Home.module.css";
import { home } from "../Data/Data";
import Grid from "@material-ui/core/Grid";
import { AppContext } from "../Context/Context";
import Om from "../Om/Om";
import Kontakt from "../Kontakt/Kontakt";
import { Link } from "react-router-dom";
import ForWho from "../ForWho/ForWho";
import ForWhoProducts from "../ForWho/ForWhoProducts";
import { ThemeProvider, Typography } from "@material-ui/core";

function Home() {
  /* useEffect hook render right heading */
  const { setDefaultHeading, theme } = useContext(AppContext);

  useEffect(() => {
    setDefaultHeading("Mest Kunskap");
  });

  return (
    <ThemeProvider theme={theme}>
      <main>
        <div className={styles.homeWrapper}>
          <Grid xs={11} md={11} lg={10} xl={8} item id={styles.home}>
            {home.map((home, index) => {
              return (
                <Grid
                  key={index}
                  xs={12}
                  md={12}
                  lg={10}
                  xl={5}
                  item
                  className={styles.content}
                >
                  <div className={styles.title}>
                    <Typography
                      style={{ fontFamily: "DM sans" }}
                      gutterBottom={true}
                      variant="h2"
                    >
                      {home.text_1}
                    </Typography>
                    <Typography style={{ fontFamily: "DM sans" }} variant="h5">
                      {home.text_2}
                    </Typography>
                  </div>
                  <div className={styles.text}>
                    <p>{home.text_3}</p>
                  </div>
                  <span className={styles.button}>
                    <Link to="/om">Mer om mig</Link>
                  </span>
                </Grid>
              );
            })}
            <div className={styles.image}>
              <img src="" alt="Mest Kunskap Avatar" />
            </div>
          </Grid>
          <ForWho />
          <Om />
          <ForWhoProducts />
          <Kontakt />
        </div>
      </main>
    </ThemeProvider>
  );
}

export default Home;
