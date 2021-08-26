import React, { useEffect, useContext } from "react";
import styles from "./Om.module.css";
import { om } from "../Data/Data";
import Grid from "@material-ui/core/Grid";
import { AppContext } from "../Context/Context";
import { ThemeProvider, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

function Home() {
  const { theme, setDefaultHeading } = useContext(AppContext);

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
              md={10}
              lg={6}
              xl={6}
              className={styles.om}
            >
              <ThemeProvider theme={theme}>
                <div className={styles.content}>
                  <div className={styles.title}>
                    <h4>Vem är jag?</h4>
                    <Typography
                      style={{ fontFamily: "DM sans" }}
                      color="inherit"
                      variant="h3"
                    >
                      {info.text_3}
                    </Typography>
                  </div>
                  <div className={styles.text}>
                    <p>{info.text_1}</p>
                    <p>{info.text_2}</p>
                  </div>
                  <div className={styles.button}>
                    <Link to="/kontakt">Kontakta mig</Link>
                  </div>
                </div>
              </ThemeProvider>
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
