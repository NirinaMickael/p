import React from 'react';
import { emphasize, withStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import HomeIcon from '@material-ui/icons/Home';
import { useNavigate } from 'react-router-dom';

const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(3),
    color: theme.palette.grey[800],
    fontWeight: theme.typography.fontWeightRegular,
    padding:"1em 2em",
    '&:hover, &:focus': {
      backgroundColor: "#9d0b28",
      color : "#fff",
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
}))(Chip);

export const Breadcrumb =({url})=>{
  const u = url
  const navigate = useNavigate();
  const handleClick = (link) => (event) =>{
    event.preventDefault(); 
    navigate(link);
  }
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <StyledBreadcrumb
        component="p"
        label="Home"
        icon={<HomeIcon fontSize="small" />}
        onClick={handleClick("../home")}
      />
      <StyledBreadcrumb component="p" label={u} onClick={handleClick("../"+u.toLowerCase())} />
    </Breadcrumbs>
  );
}