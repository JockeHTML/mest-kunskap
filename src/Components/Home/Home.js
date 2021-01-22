import React, { useEffect } from "react";
import styles from "./Home.module.css"
import { home } from "../Context/Context";
import Grid from '@material-ui/core/Grid';

import {
    Link
  } from "react-router-dom";

function Home({changeHeading}) {

    useEffect(() => {
        handleHeading();
    });   

    const handleHeading = () => {
        changeHeading("Mest Kunskap");
    }
    
    return (
        <Grid xs={11} md={11} lg={11} container item id={styles.home}>
            {home.map((home, index) => {
                return (
                <Grid key={index} xs={12} md={12} lg={6} item className={styles.content}>
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
                </Grid>
                )})}
                <Grid xs={12} md={12} lg={6} item className={styles.image}>
                    <img src="" alt="lecture"/>
                </Grid>
        </Grid>
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