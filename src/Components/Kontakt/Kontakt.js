import React, { useEffect, useContext } from "react";
import cx from "classnames";
import styles from "./Kontakt.module.css";
import { kontaker } from "../Data/Data";
import Grid from "@material-ui/core/Grid";
import { AppContext } from "../Context/Context";

function Kontakt() {
  const { setDefaultHeading } = useContext(AppContext);

  /* useEffect hook render right heading */
  useEffect(() => {
    setDefaultHeading("Mest Kunskap");
  });

  /* Contact form */
  return (
    <Grid xs={11} md={11} lg={10} xl={8} container item id={styles.kontakt}>
      <Grid item xs={12} md={12} lg={5} xl={6} className={styles.info}>
        <div className={styles.title}>
          <h1>Kontakta mig</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            debitis, officia hic tempora facere expedita labore sed animi optio
            cumque.
          </p>
        </div>
        {kontaker.map((kontakt, index) => {
          return (
            <div key={index} className={styles.item}>
              <div className={styles.icon}>
                <i className={kontakt.icon}></i>
              </div>
              <span>
                <h2>{kontakt.content}</h2>
              </span>
            </div>
          );
        })}
      </Grid>
      <Grid item xs={12} md={12} lg={6} xl={6} className={styles.formWrapper}>
        <form autoComplete="off" className={styles.form}>
          <div className={styles.formHeading}>
            <h2>Fyll i formuläret så återkommer jag så fort vi kan!</h2>
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
  );
}

export default Kontakt;
