import React from 'react';
import styles from "./MenuContentComponent.module.css"
import Grid from '@material-ui/core/Grid';

function test({saveText, saveSpecial}) {
    return (
        <Grid xs={11} md={11} lg={11} container item id={styles.MenuContent}>
            <Grid item xs={12} md={12} lg={6} className={styles.content}>
                <div className={styles.title}>
                    <h1>{saveText.title}</h1>  
                    <h3>{saveText.text_1}</h3>
                </div>
                <div className={styles.text}>
                    <p>{saveText.text_2}</p>
                    <p>{saveText.text_3}</p>
                </div>
                <div className={styles.special}>
                    { saveSpecial ?
                        <ul>
                        {saveSpecial.map((special, index) => {
                            return (<li key={index}>{special}</li>)
                        })}
                    </ul> : null}
                </div>
            </Grid>
                <Grid item xs={12} md={12} lg={6} className={styles.image}>
                    <img src={saveText.src} alt="lecture"/>
                </Grid>
        </Grid>
    );
}

export default test;

/*function test({saveText, saveSpecial}) {
    return (
        <div id={styles.home}>
            <div className={styles.content}>
                <div className={styles.title}>
                    <h1>{saveText.title}</h1>  
                    <h3>{saveText.text_1}</h3>
                </div>
                <div className={styles.text}>
                    <p>{saveText.text_2}</p>
                    <p>{saveText.text_3}</p>
                </div>
                <div className={styles.special}>
                    { saveSpecial ?
                        <ul>
                        {saveSpecial.map((special, index) => {
                            return (<li key={index}>{special}</li>)
                        })}
                    </ul> : null}
                </div>
            </div>
                <div className={styles.image}>
                    <img src={saveText.src} alt="lecture"/>
                </div>
        </div>
    );
}*/