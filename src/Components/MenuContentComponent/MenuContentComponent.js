import React, { useContext } from "react";
import styles from "./MenuContentComponent.module.css";
import Grid from "@material-ui/core/Grid";
import { AppContext } from "../Context/Context";
import { ThemeProvider, Typography } from "@material-ui/core";

function MenuContentComponent({ StartaEgetList }) {
  const { saveText, theme } = useContext(AppContext);

  return (
    <div className={styles.wrapper}>
      <ThemeProvider theme={theme}>
        <Grid
          xs={11}
          md={11}
          lg={10}
          xl={8}
          container
          item
          id={styles.MenuContent}
        >
          <Grid
            item
            sm={12}
            xs={12}
            md={12}
            lg={6}
            xl={6}
            className={styles.content}
          >
            <div className={styles.title}>
              <h4>{saveText.title}</h4>
              <Typography
                style={{ fontFamily: "DM sans" }}
                variant="h3"
                gutterBottom={true}
              >
                {saveText.text_1}
              </Typography>{" "}
            </div>
            <div className={styles.text}>
              <p>{saveText.text_2}</p>
              <p>{saveText.text_3}</p>
            </div>
            <div className={styles.special}>
              {StartaEgetList ? (
                <ul>
                  {StartaEgetList.map((special, index) => {
                    return (
                      <li key={index}>
                        <p>{special}</p>
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </div>
          </Grid>
          <Grid
            item
            sm={12}
            xs={12}
            md={12}
            lg={6}
            xl={6}
            className={styles.image}
          >
            <img src={saveText.src} alt="lecture" />
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default MenuContentComponent;
