import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useCallback, useState } from "react";
import { Form, Title } from "../features";
import clsx from "clsx";
import { collection, addDoc} from "firebase/firestore";
import { db } from "../firebase";
const useStyles = makeStyles({
  root: {
    postion: "absolute",
    top: "200px",
  },
  text: {
    fontSize: "17px",
    textAlign: "left",
  },
  light: {
    color: "#bab",
    fontWeight: "normal",
    margin: "1em 0",
  },
});
const col = "portfolio";
var remarkRef = collection(db, col);
export const Contact = () => {
  const classes = useStyles();
  const [isLoading,setLoading] = useState(false);
  const handleForm = useCallback((data) => {
    setLoading(true);
    (async()=>{
      try {
        await addDoc(remarkRef, data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [])
  return (
    <>
      <Title label="Contact Me" url="contact"/>
      <Box
        style={{
          position: "absolute",
          top: "40%",
          padding: "0px 3em",
          marginTop:"20px"
        }}
      >
        <Grid
          container
        >
          <Grid
            container
            item
            xs={6}
            style={{
              background: "#fff",
              padding: "3em 1em",
            }}
          >
            <Grid item xs={12}>
              <h4 style={{ textAlign: "left", fontSize: "25px" }}>
                Contact Me
              </h4>
              <h5 className={clsx(classes.text, classes.light)}>
                We're open for any suggestion or just to have a chat
              </h5>
              <Grid container sx={{background:"red"}} >
                <Grid item xs={6}>
                  <h5 className={classes.text}>Email</h5>
                  <p className={classes.text}>todisoanirinamickael@gmail.com</p>
                </Grid>
                <Grid item xs={4}>
                  <h5 className={classes.text}>Tel</h5>
                  <p className={classes.text}>+261341035973</p>
                </Grid>
              </Grid>
            </Grid>
            <Form sendData={(data)=>handleForm(data)} loadingState ={isLoading}/>
          </Grid>
          <Grid item xs={6}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15098.572144346706!2d47.50159837162864!3d-18.90291079499748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2smg!4v1664563116400!5m2!1sfr!2smg"
              style={{ width: "100%", height: "100%", style: "border:0" }}
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
