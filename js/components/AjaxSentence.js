import React from 'react';
import Paper from '@material-ui/core/Input';
import Sentence from './Sentence';

export default class AjaxSentence extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      tokenized_sentence: []
    };
  }
  
  componentDidMount() {
    fetch("/sentence/id/" + this.props.sentence_id)
      .then(res => res.json())
      .then(
	(result) => {
	  this.setState({
	    tokenized_sentence: result.tokenized_sentence
	  });
	});
  }

  render() {
    return (<Sentence children={this.state.tokenized_sentence} />);
  }
}
