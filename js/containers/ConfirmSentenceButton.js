import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { clearFocusWords, clearSentence, setMain } from '../actions';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  }
});

class SaveButton extends React.Component {
  handleClick = (e) => {
    fetch('/sentence/confirm', {
      method: 'POST',
      headers: {
	'Accept': 'application/json',
	'Content-Type': 'application/json',
      },
      body: JSON.stringify({
	word_ids: this.props.focusWords,
	tokenized_sentence: this.props.tokenized_sentence
      })})
      .then(function(response) {
	return response.json();
      })
      .then((json) => {
	this.props.moveToMain();
      });
  }
  
  render() {
    const { classes } = this.props;
  
    return (<Button
	    variant="contained"
	    onClick={() => this.handleClick()}
	    color="primary"
	    className={classes.button}>
	    Save
	    </Button>);
  }
}

const mapStateToProps = (state) => ({
  focusWords: state.focusWords
});

const mapDispatchToProps = dispatch => ({
  moveToMain : () => {
    dispatch(clearSentence());
    dispatch(clearFocusWords());
    dispatch(setMain());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SaveButton));
