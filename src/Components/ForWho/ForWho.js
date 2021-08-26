import React, { useContext } from "react";
import styles from "./ForWho.module.css";
import Grid from "@material-ui/core/Grid";
import { forWho } from "../Data/Data";
import Card from "./Card.js";
import { ThemeProvider, Typography } from "@material-ui/core";
import { AppContext } from "../Context/Context";

const ForWho = () => {
  const { theme } = useContext(AppContext);

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.wrapper}>
        <Grid
          xs={12}
          lg={12}
          md={12}
          xl={8}
          item
          container
          className={styles.forWho}
        >
          <div className={styles.title}>
            <h4 style={{ color: "var(--color)" }}>
              Innovativa utbildningar för dig
            </h4>
            <Typography variant="h4">Från privatperson till företag</Typography>
          </div>
          <Grid item md={12} lg={12} xs={10} xl={12} className={styles.content}>
            {forWho.map((data, index) => {
              return <Card key={index} {...data} />;
            })}
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default ForWho;
