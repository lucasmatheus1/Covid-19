import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1, 
    marginLeft: '10%', 
    marginBottom: '20px',
    marginTop:'20px'
  }, 

  title: {
    marginLeft: "10px",
    color: "#343894",
  },

}));


export const TextContent = (props) => {

  const classes = useStyles(); 

  return (
    <div className={classes.root} >

      <Box borderLeft={10} borderColor="#1090d8" >
        <Typography variant="h4" className={classes.title}>
          {props.text}
        </Typography>
      </Box>
    </div>
  );
};
