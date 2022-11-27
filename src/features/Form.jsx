import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Send } from "@material-ui/icons";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import { ButtonCustom } from "./ButtonCustom";
import * as yup from "yup";
const style = makeStyles({
  input: {
    padding: "5px",
  },
});
export const Form = ({sendData,loadingState}) => {
  const [values, setValues] = useState({
    status: "",
    username: "",
    remark: "",
  });
  let handleSubmit = ()=> {
    sendData(values)
  }
  const classes = style();
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="status">Status</InputLabel>
        <Input
          id="status"
          value={values.status}
          onChange={handleChange("status")}
          placeholder="(SEO,developer,....)"
          className={classes.input}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="username">You Name</InputLabel>
        <Input
          id="username"
          value={values.name}
          onChange={handleChange("username")}
          className={classes.input}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <TextField
          id="outlined-multiline-static"
          label="Remark"
          multiline
          rows={4}
          value={values.remark}
          onChange={handleChange("remark")}
        />
      </FormControl>
      <ButtonCustom label="Send Message" icon={<Send/>} action={()=>handleSubmit()} state={loadingState} />
    </Box>
  );
};
