import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import clsx from "clsx";
import {ButtonCustom, Skill, Title } from "../features";
import me from "../profil.png";
import { RemoveRedEye } from "@material-ui/icons";
const useStyles = makeStyles({
  root: {
    postion: "absolute",
    top: "200px",
  },
  text: {
    fontSize: "15px",
    textAlign: "left",
    margin: "10px 0",
  },
  light: {
    color: "#999",
    fontWeight: "normal",
    margin: "1em 0",
  },
  primary: {
    color: "#9d0b28",
  },
  button: {
    backgroundColor: "#2a2438",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
  },
});
export const About = () => {
  const classes = useStyles();
  return (
    <>
      <Title label="About Me" url="about" />
      <Box
        style={{
          position: "absolute",
          top: "40%",
          padding: "0px 3em",
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignContent="center"
        >
          <Grid
            container
            item
            xs={6}
            style={{
              padding: "3em 1em",
            }}
          >
            <img src={me} alt="me" />
          </Grid>
          <Grid
            item
            xs={6}
            style={{
              background: "#fff",
              padding: "3em",
            }}
          >
            <h4
              style={{ textAlign: "left", fontSize: "25px", color: "#9d0b28" }}
            >
              About Me
            </h4>
            <h1 style={{ textAlign: "left", fontSize: "50px" }}>
              Web Developer Based in Madagascar
            </h1>
            <h5 className={clsx(classes.text, classes.light)}>
              web developer junior, freelancer, Code addict. Based in
              Madagascar. Since I have math skills and I know how to code,{" "}
              <br />I aim to become a data scientist and a good developer.
            </h5>
            <Box>
              <Grid container style={{ marginTop: "1em" }}>
                <Grid item xs={6}>
                  <h5 className={clsx(classes.text, classes.primary)}>Name</h5>
                  <p className={classes.text}>TODISOA Nirina Mickael</p>
                </Grid>
                <Grid item xs={6}>
                  <h5 className={clsx(classes.text, classes.primary)}>Email</h5>
                  <p className={classes.text}>todisoanirinamickael@gmail.com</p>
                </Grid>
                <Grid item xs={6}>
                  <h5 className={clsx(classes.text, classes.primary)}>Phone</h5>
                  <p className={classes.text}>+261341035973</p>
                </Grid>
                <Grid item xs={6}>
                  <h5 className={clsx(classes.text, classes.primary)}>
                    Location
                  </h5>
                  <p className={classes.text}>Madagascar-Tananarive</p>
                </Grid>
              </Grid>
              <Grid
                container
                justifyContent="start"
                style={{ marginTop: "2em" }}
              >
                <ButtonCustom label="View Cv" icon={<RemoveRedEye/>} action={()=>window.open("https://www.nuc.us/EGVUwc1n",'__blank','noopener,noreferrer')}  />
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        style={{
          position: "absolute",
          top: "150vh",
          // padding: "0px 3em",
          width: "100%",
        }}
      >
        <Box
          style={{
            position: "relative",
            top: "0",
            fontSize: "40px",
          }}
        >
          <h4>Skills</h4>
        </Box>
        <Skill />
      </Box>
    </>
  );
};
