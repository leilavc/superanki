import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LinkedSentence from '../containers/LinkedSentence.js';
import FocusedWords from '../containers/FocusedWords.js';
import ConfirmSentenceButton from '../containers/ConfirmSentenceButton.js';
import AjaxSentence from '../components/AjaxSentence.js';
import RecentSentences from '../components/RecentSentences.js';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
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
  constructor() {
    super();
    this.state = {
      sentence: '',
      children: [],
      filled: false
    };

    this.setState = this.setState.bind(this);
  }

  onChange = (e) => {
    /*
      Because we named the inputs to match their
      corresponding values in state, it's
      super easy to update the state
    */
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    fetch('/sentence/add', {
      method: 'POST',
      headers: {
	'Accept': 'application/json',
	'Content-Type': 'application/json',
      },
      body: JSON.stringify({
	sentence: this.state.sentence
      })
    })
      .then(function(response) {
	return response.json();
      })
      .then((json) => {
	this.props.moveToSelect(json);
      });
    
    return false;
  }

  render() {
    const { classes } = this.props;
    const { sentence } = this.state;

    return (
      <div>
	  <TextField
             name="sentence"
             value={sentence}
             onChange={this.onChange}
             id="full-width"
             label="Sentence"
             InputLabelProps={{
               shrink: true,
             }}
             placeholder="Enter sentence here"
             fullWidth
             margin="normal"
          />
	  <Button 
             type="submit" 
             variant="contained" 
             className={classes.button}
	     onClick={(event) => this.handleSubmit(event)}
	  >
	  Submit
        </Button>
	<RecentSentences />
	</div>
    );
  }
};

SentenceInput.propTypes = {
  moveToSelect: PropTypes.func.isRequired
};

export default withStyles(styles)(SentenceInput);
