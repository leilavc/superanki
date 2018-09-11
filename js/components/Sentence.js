import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { update } from 'immutability-helper';
import _ from 'lodash';

const styles = theme => ({
  word_clicked : {
    color: 'red'
  },
  word_default : {
    color: 'black'
  }
});

class Sentence extends React.Component {
  constructor(props) {
    super(props);

    var colors = {};
    for (const child in this.props.children) {
      colors[this.props.children[child].id] = this.props.classes.word_default;
    };
    this.state = { colors: colors };
    console.log(this.state);
  }
  
  handleClick = (word_id) => {
    var new_colors = {...this.state.colors};
    new_colors[word_id] = this.props.classes.word_clicked;
    console.log(new_colors);
    this.setState({colors: new_colors});
  }

  render () {
    const colors = this.state.colors;
    
    return (<div>
	    { _.map(this.props.children, 
		    (child) => 
		    (<span 
	             onClick={() => this.handleClick(child.id)}
		     className = {colors[child.id]}
		     >
		     {child.text}
		     </span>))
	    }
	    </div>)
  }
};

export default withStyles(styles)(Sentence);
