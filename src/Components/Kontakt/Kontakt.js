import React, { useEffect } from 'react';
import cx from 'classnames';
import styles from "./Kontakt.module.css";
import {kontaker} from "../Context/Context";
import Grid from '@material-ui/core/Grid';

function Kontakt({changeHeading}) {

    /* useEffect hook render right heading */
     useEffect(() => {
        handleHeading();
    });

    const handleHeading = () => {
        changeHeading("Kontakter");
    }

    /* Contact form */
    return (
        <Grid xs={11} md={11} lg={9} container item id={styles.kontakt}>
            <Grid item xs={12} md={6} lg={6} className={styles.info}>
                <div className={styles.title}>
                    <h1>Du kan nå oss här!</h1>
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
                )  
            })}
            </Grid>
            <Grid item xs={12} md={6} lg={6} className={styles.formWrapper}>
                <form autoComplete="off" className={styles.form}>
                    <div className={styles.formHeading}>
                        <h2>Fyll i formuläret så återkommer vi så fort vi kan!</h2>
                    </div>
                    <div className={cx (styles.input, styles.name)}>
                        <input autoComplete="off" placeholder="Namn" type="text" name="name" />
                    </div>
                    <div className={cx(styles.input, styles.email)}>
                        <input autoComplete="off" placeholder="E-post" type="text" name="email" />
                    </div>
                    <div className={cx(styles.input, styles.subject)}>
                        <input autoComplete="off" placeholder="Ämne" type="text" name="subject" />
                    </div>
                    <div className={cx(styles.input, styles.message)}>
                        <textarea autoComplete="off" placeholder="Meddelande" type="text" name="message" />
                    </div>
                    <div className={styles.formButton}>
                        <button type="submit">Skicka</button>
                    </div>
                </form>   
            </Grid>
        </Grid>
    );
}

export default Kontakt;







   
        
   


