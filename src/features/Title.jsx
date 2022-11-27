import React from "react";
import { Box, Grid } from "@material-ui/core";
import { Breadcrumb } from "./Breadcrumb";
import { makeStyles, useTheme, Typography } from '@material-ui/core'

export const Title = ({ label, url }) => {
   const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  return (
    <Grid container >
      <Box
      style={{
        position: "absolute",
        top: "20%",
        left: "40vw",
        fontSize: "40px",
      }}
    >
      <Breadcrumb url={url} />
      <h4
        style={{
          margin: "1em 0",
        }}
      >
        {label}
      </h4>
    </Box>
    </Grid>
  );
};
