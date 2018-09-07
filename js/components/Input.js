import React from 'react';
import Input from '@material-ui/core/Input';

export default class SentenceInput extends React.Component {
  render() {
    return (<TextField
	    id="full-width"
            label="Sentence"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="Enter sentence here"
            fullWidth
            margin="normal"
            />);
  }
};
