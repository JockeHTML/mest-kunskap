import React, { useEffect, useContext } from "react";
import cx from "classnames";
import styles from "./Kontakt.module.css";
import { kontaker } from "../Data/Data";
import Grid from "@material-ui/core/Grid";
import { AppContext } from "../Context/Context";
import { ThemeProvider, Typography } from "@material-ui/core";
import Header from "../MenuContent/Applåder/Header";

function Kontakt() {
  const { theme, setDefaultHeading } = useContext(AppContext);

  /* useEffect hook render right heading */
  useEffect(() => {
    setDefaultHeading("Mest Kunskap");
  });

  /* Contact form */
  return (
    <div className={styles.wrapper}>
      {window.location.pathname === "/kontakt" ? (
        <Header text="Kontakt" />
      ) : null}
      <ThemeProvider theme={theme}>
        <Grid xs={11} md={11} lg={10} xl={8} container item id={styles.kontakt}>
          <Grid item xs={12} md={6} lg={6} xl={6} className={styles.info}>
            <div className={styles.title}>
              <h4>Här når du mig</h4>
              <Typography
                style={{ fontFamily: "DM sans" }}
                variant="h3"
                gutterBottom={true}
              >
                Kontakta mig via e-post eller slå mig en signal
              </Typography>
              <p>
                För enklast hantering fyller du i e-post formuläret så
                återkommer jag så fort som möjligt.
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
              <div className={styles.formHeading}></div>

              <div className={cx(styles.input, styles.name)}>
                <label>Namn</label>
                <input
                  autoComplete="off"
                  input="Namn"
                  type="text"
                  name="name"
                />
              </div>
              <div className={cx(styles.input, styles.email)}>
                <label>E-post</label>

                <input
                  autoComplete="off"
                  input="E-post"
                  type="text"
                  name="email"
                />
              </div>
              <div className={cx(styles.input, styles.subject)}>
                <label>Ämne</label>

                <input
                  autoComplete="off"
                  input="Ämne"
                  type="text"
                  name="subject"
                />
              </div>
              <div className={cx(styles.input, styles.message)}>
                <label>Meddelande</label>

                <textarea
                  autoComplete="off"
                  input="Meddelande"
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
