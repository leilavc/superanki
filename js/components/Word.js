import React from 'react';
import { withStyles } from '@material-ui/core/styles';

class Word extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      text: ""
    };
  }

  componentDidMount() {
    fetch("/word/id/" + this.props.word_id)
      .then(res => res.json())
      .then(
	(result) => {
	  this.setState({
	    isLoaded: true,
	    text: result.text
	  });
	},
	(error) => {
	  this.setState({
	    isLoaded: true,
	    error
	  });
	}
      );
  }

  render () {
    const { error, isLoaded, text } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
	<div>{ text }</div>
      );
    };
  }
}

export default Word;
