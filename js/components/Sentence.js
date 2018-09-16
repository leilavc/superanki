import React from 'react';
import PropTypes from 'prop-types';
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

  render () {
    const colors = this.state.colors;
    
    return (<div>
	    { _.map(this.props.children, 
		    (child) => 
		    (<span 
	             onClick={() => this.props.handleClick()}
		     className = {colors[child.id]}
		     >
		     {child.text}
		     </span>))
	    }
	    </div>)
  }
};

Sentence.propTypes = {
  children: PropTypes.array,
  handleClick: PropTypes.func
};

Sentence.defaultProps = {
  children: [],
  handleClick: (_) => { return false; }
}


export default withStyles(styles)(Sentence);

