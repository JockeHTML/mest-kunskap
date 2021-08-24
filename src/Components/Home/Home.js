import React, { useEffect, useContext } from "react";
import styles from "./Home.module.css";
import { home, om } from "../Data/Data";
import Grid from "@material-ui/core/Grid";
import { AppContext } from "../Context/Context";
import Om from "../Om/Om";

import { Link } from "react-router-dom";
import ForWho from "../ForWho/ForWho";
import MenuContentComponent from "../MenuContentComponent/MenuContentComponent";
import ForWhoProducts from "../ForWho/ForWhoProducts";

function Home() {
  const { setDefaultHeading } = useContext(AppContext);

  /* useEffect hook render right heading */
  useEffect(() => {
    setDefaultHeading("Mest Kunskap");
  });

  return (
    <main>
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
                <h1>{home.text_1}</h1>
                <h3>{home.text_2}</h3>
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
          <img src="" alt="lecture" />
        </div>
      </Grid>
      <ForWho />
      <Om />
      <ForWhoProducts />
      <MenuContentComponent />
    </main>
  );
}

export default Home;

/*

<div id={styles.home}>
            {home.map((home, index) => {
                return (
                <div key={index} className={styles.content}>
                    <div className={styles.title}>
                        <h1>{home.text_1}</h1>
                        <h3>{home.text_2}</h3>
                    </div>
                    <div className={styles.text}>
                        <p>{home.text_3}</p>
                    </div>
                    <div className={styles.button}>
                        <Link to="/om">Mer om oss</Link>
                    </div>  
                </div>
                )})}
                <div className={styles.image}>
                    <img src="" alt="lecture"/>
                </div>
        </div>

*/
