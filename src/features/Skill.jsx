import React from "react";
import { Grid } from "@material-ui/core";
import { Technos } from "../@core/data/Data";
export const Skill = () => {
  return (
      <Grid
        container
        style={{margin:"5em 0"}}
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent="center"
      >
        {Technos.data.map((e, index) => (
          <Grid item xs={2} sm={4} md={2} key={index}>
            <img src={e.image} alt={e.label} width="50px"/>
          </Grid>
        ))}
      </Grid>
  );
};
