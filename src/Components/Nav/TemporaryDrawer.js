import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { menuContent, links } from "../Data/Data";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Divider />
      <List>
        {links.map((links, index) => (
          <ListItem
            style={{ paddingBottom: "0", padddingTop: "0" }}
            button
            key={index}
          >
            <i
              style={{
                color: "var(--color",
                marginRight: "5px",
                fontSize: "1.2rem",
              }}
              className={links.icon}
            ></i>
            <Link className={classes.link} to={links.router}>
              <ListItemText primary={links.title} />
            </Link>
          </ListItem>
        ))}

        {menuContent.map((links, index) => (
          <ListItem
            style={{ paddingBottom: "0", padddingTop: "0" }}
            button
            key={index}
          >
            <Link className={classes.link} to={links.router}>
              <ListItemText className={classes.text} primary={links.title} />
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <i
              style={{
                color: "var(--color)",
                fontSize: "1.2rem",
                right: "2rem",
                position: "fixed",
              }}
              className="fas fa-bars"
            ></i>
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
