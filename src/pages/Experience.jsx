import { Box ,Grid} from '@material-ui/core'
import React from 'react'
import {TimeLine , Title} from '../features'
export const Experience = () => {
  return (
    <>
    <Title label="Experience" url="Experience"/>
    <Box
      style={{
        position: "absolute",
        top: "40%",
        width:"100%"
      }}
    >
      <Grid container justifyContent='center'>
        <Grid item xs={8}>
        <TimeLine/>
        </Grid>
      </Grid>
        
    </Box>
  </>
  )
}
