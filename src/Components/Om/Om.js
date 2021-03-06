import React, {useEffect, useContext} from 'react';
import styles from "./Om.module.css";
import { om } from "../Data/Data";
import Grid from '@material-ui/core/Grid';
import { AppContext } from "../Context/Context";

import {
    Link
  } from "react-router-dom";

function Home() {

    const { setDefaultHeading } = useContext(AppContext);

    /* useEffect hook render right heading */
    useEffect(() => {
        setDefaultHeading("Om oss");
    });

    return (
        <Grid xs={11} md={11} lg={11} container item id={styles.om}>
            {om.map((info, index) => {
                return (    
                <Grid key={index} xs={12} md={12} lg={12} item id={styles.om}>
                    <div className={styles.image}>
                        <img src="" alt="lecture"/>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.title}>
                            <h1>Lars Löfgren</h1>
                            <h3>{info.text_3}</h3>
                        </div>
                        <div className={styles.text}>
                            <p>{info.text_1}</p>
                            <p>{info.text_2}</p>
                        </div>
                        <div className={styles.button}>
                            <Link to="/kontakt">Kontakta oss</Link>
                        </div>
                    </div>
                </Grid>
                )
            })}
        </Grid>
    );
}

export default Home;