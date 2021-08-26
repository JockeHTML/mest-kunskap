import React, { useEffect, useContext } from "react";
import cx from "classnames";
import styles from "./Kontakt.module.css";
import { kontaker } from "../Data/Data";
import Grid from "@material-ui/core/Grid";
import { AppContext } from "../Context/Context";
import { ThemeProvider, Typography } from "@material-ui/core";

function Kontakt() {
  const { theme, setDefaultHeading } = useContext(AppContext);

  /* useEffect hook render right heading */
  useEffect(() => {
    setDefaultHeading("Mest Kunskap");
  });

  /* Contact form */
  return (
    <div className={styles.wrapper}>
      <ThemeProvider theme={theme}>
        <Grid xs={11} md={11} lg={10} xl={8} container item id={styles.kontakt}>
          <Grid item xs={12} md={6} lg={6} xl={6} className={styles.info}>
            <div className={styles.title}>
              <h4>Kontakta mig</h4>
              <Typography
                style={{ fontFamily: "DM sans" }}
                color="inherit"
                variant="h3"
              >
                Lorem ipsum dolor dolor amet dolo?
              </Typography>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                inventore consequatur voluptate sint numquam, itaque delectus!
                Tenetur quod sit eveniet.
              </p>
            </div>
            {kontaker.map((kontakt, index) => {
              return (
                <div key={index} className={styles.item}>
                  <img src={kontakt.icon} alt="" />
                  <span>
                    <p>{kontakt.content}</p>
                  </span>
                </div>
              );
            })}
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            xl={6}
            className={styles.formWrapper}
          >
            <form autoComplete="off" className={styles.form}>
              <div className={styles.formHeading}>
                <Typography
                  style={{ fontFamily: "DM sans" }}
                  variant="h5"
                  gutterBottom={true}
                >
                  Fyll i formuläret, så återkommer jag så fort som möjligt.
                </Typography>
              </div>

              <div className={cx(styles.input, styles.name)}>
                <input
                  autoComplete="off"
                  placeholder="Namn"
                  type="text"
                  name="name"
                />
              </div>
              <div className={cx(styles.input, styles.email)}>
                <input
                  autoComplete="off"
                  placeholder="E-post"
                  type="text"
                  name="email"
                />
              </div>
              <div className={cx(styles.input, styles.subject)}>
                <input
                  autoComplete="off"
                  placeholder="Ämne"
                  type="text"
                  name="subject"
                />
              </div>
              <div className={cx(styles.input, styles.message)}>
                <textarea
                  autoComplete="off"
                  placeholder="Meddelande"
                  type="text"
                  name="message"
                />
                <div className={styles.formButton}>
                  <button type="submit">Skicka</button>
                </div>
              </div>
            </form>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default Kontakt;
