import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AjaxSentence from './AjaxSentence';
import _ from 'lodash';

const styles = theme => ({
  paper: {
    margin: theme.spacing.unit * 2,
    padding: theme.spacing.unit,
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
});


class RecentSentences extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      sentence_ids: []
    };
  }
  
  componentDidMount() {
    fetch("/sentence/newest/")
      .then(res => res.json())
      .then(
	(result) => {
	  this.setState({
	    sentence_ids: result.sentence_ids
	  });
	});
  }

  render() {
    const { classes } = this.props;
    
    return (
	<div>
	{_.map(this.state.sentence_ids, (sentence_id) => {
	  return (<Paper className={classes.paper} key={sentence_id}>
		  <AjaxSentence sentence_id={sentence_id} />
		  </Paper>);
	})}
        </div>
    )}
}

export default withStyles(styles)(RecentSentences);
