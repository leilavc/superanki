import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
    margin: theme.spacing.unit,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

class SentenceInput extends React.Component {
  render() {
    const { classes } = this.props;
    
    return (
	<form
          className={classes.container}
          noValidate
          autoComplete="off"
          action="/sentence/add" method="POST"
	>
	  <TextField
             name="sentence"
             id="full-width"
             label="Sentence"
             InputLabelProps={{
               shrink: true,
             }}
             placeholder="Enter sentence here"
             fullWidth
             margin="normal"
          />
	<Button type="submit" variant="contained" className={classes.button}>
	  Submit
        </Button>
      </form>
    );
  }
};

export default withStyles(styles)(SentenceInput);
