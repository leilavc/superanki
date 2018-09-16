import React from 'react';
import keyIndex from 'react-key-index';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { update } from 'immutability-helper';
import _ from 'lodash';

const styles = theme => ({
  red : {
    color: 'red'
  },
  black : {
    color: 'black'
  }
});

class Sentence extends React.Component {
  constructor(props) {
    super(props);

    var colors = {};
    for (const word_id in this.props.redWords) {
      colors[word_id] = this.props.classes.word_clicked;
    };
    this.state = { colors: colors };
  }

  render () {
    const colors = this.state.colors;
    
    return (<div>
	    { _.map(this.props.children, 
		    (child) => 
		    (<span 
	             onClick={() => this.props.handleClick(child.id)}
		     className = {colors[child.id]}
		     id={child.id}
		     key={child.key}
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

