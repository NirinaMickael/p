import { Box, Button, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { motion } from "framer-motion";
import React from "react";
const CircularIndeterminate = () => {
  return (
    <Box>
      <CircularProgress size="20px"/>
    </Box>
  );
};
const useStyles = makeStyles({
  button: {
    backgroundColor: "#2a2438",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    "& span":{
      fontSize:"13px"
    }
  },
});
export const ButtonCustom = ({ label, icon ,action ,state}) => {
  const classes = useStyles();
  const send = ()=>{
    action()
  }
  return (
    <Button
      variant="contained"
      endIcon={icon}
      className={classes.button}
      component={motion.button}
      whileHover={{
        transition: { duration: 0.3 },
        color:"black"
      }}
      whileTap={{ scale: 0.3 }}
      onClick={()=>send()}
    >
      {state && <CircularIndeterminate />}
      {label}
    </Button>
  );
};
