import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
});

class SentenceSelect extends React.Component {
    render() {
      const { classes } = this.props;
      return (
	  <div className={classes.root}>
	  <Grid container spacing={24}>
	    <Grid item xs={3}>
	       <Paper className={classes.paper}>
	          <FocusedWords />
	       </Paper>
	    </Grid>
	    <Grid item xs={9}>
	      <LinkedSentence children={this.props.children} />
	      <ConfirmSentenceButton tokenized_sentence={this.props.children} />
	    </Grid>
	</Grid>
      </div>
    );
  }
}

export default withStyles(styles)(SentenceSelect);
