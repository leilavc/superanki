import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import Word from '../components/Word';

class WordList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word_texts: []
    };
  }

  render() {
    return (
      <div>
	<strong>Words:</strong>
	<hr />
	{ _.map(this.props.word_ids, (id) => {
	  return (<Word word_id={id} key={id}/>);
	})}
      </div>
    );
  }
}

WordList.propTypes = {
  word_ids: PropTypes.array
};

export default WordList;
