import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Sentence from './Sentence.js';

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
	this.setState({children: json, filled: true});
      });
    
    return false;
  }

  renderForm() {
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
	</div>
    );
  }

  renderSentence() {
    return (<Sentence children={this.state.children} />);
  }

  render() {
    if (!this.state.filled) {
      return this.renderForm();
    }
    else {
      return this.renderSentence();
    }
  }
};

export default withStyles(styles)(SentenceInput);
