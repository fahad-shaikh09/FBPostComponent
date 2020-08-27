import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
// import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
// import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function Comments() {
  const classes = useStyles();

  return (
    <div style={{
     width: "300px",
    }}>

      <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label="Enter Comments"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        style={{
        marginTop: "25px",
        width: "300px",
        marginRight:"600px",
      }}
      />

    </div>
  );
}
