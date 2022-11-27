import React, { memo, useEffect } from "react";
// import { useInView } from "react-intersection-observer";
import { makeStyles } from "@material-ui/core/styles";
import me from "../profil.png";
import { Grid} from "@material-ui/core";
import clsx from "clsx";
import { Link } from "react-router-dom";
import IconCard from "../features/IconCard";
import { ButtonCustom } from "../features";
import { AdbOutlined } from "@material-ui/icons";
const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #9d0b28  30%, #b71737  90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: "100vh",
    padding: "0 30px",
  },
  describe: {
    background: "red",
  },
  img: {
    width: "60vw",
    position:"absolute",
    right:"10%"
  },
  box: {
    background: "red",
  },
  title: {
    fontSize: "80px",
    fontWeight: "bold",
  }
});
export const Accueil = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={2}>
        <Grid
          container
          item
          xs={12}
          sm={6}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid container item xs={8}>
            <Grid item xs={12}>
              <small> web Developer</small>
              <h1 className={clsx(classes.title)}>I'm Nirina Mickael</h1>
            </Grid>
            <Grid item xs={12}>
            <Link to='/about'>
            <ButtonCustom label="About Me" icon={<AdbOutlined/>} />
            </Link>
            </Grid>
          </Grid>
          <Grid item>
            <IconCard/>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={6}
          className={clsx(classes.root)}
          justifyContent="center"
          alignItems="center"
        >
          <img src={me} alt="me" className={classes.img} />
        </Grid>
      </Grid>
    </>
  );
};
