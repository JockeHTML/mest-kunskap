import React, { useContext } from "react";
import styles from "./ForWho.module.css";
import Grid from "@material-ui/core/Grid";
import { forWhoProducts } from "../Data/Data";
import Card from "./Card.js";
import { ThemeProvider, Typography } from "@material-ui/core";
import { AppContext } from "../Context/Context";

const ForWhoProducts = () => {
  const { theme } = useContext(AppContext);

  return (
    <div className={styles.productsWrapper}>
      <Grid
        xs={12}
        md={12}
        lg={12}
        xl={10}
        item
        container
        className={styles.forWhoContainer}
      >
        <ThemeProvider theme={theme}>
          <div className={styles.title}>
            <h4 style={{ color: "var(--color)" }}>
              Föreläsningar med tydligt fokus
            </h4>
            <Typography variant="h4">Inom dessa områden</Typography>
          </div>
        </ThemeProvider>

        <Grid
          item
          xs={10}
          md={12}
          lg={12}
          xl={12}
          className={styles.forWhoProducts}
        >
          {forWhoProducts.map((data, index) => {
            return <Card key={index} {...data} />;
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default ForWhoProducts;
