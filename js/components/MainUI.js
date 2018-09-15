import React from 'react';
import SentenceInput from './SentenceInput.js';
import SentenceSelect from './SentenceSelect.js';

class MainUI extends React.Component {
  render() {
    if (this.props.mode == 'main') {
      return <SentenceInput
                moveToSelect={(json) => this.props.moveToSelect(json)}/>;
    }
    else {
      return <SentenceSelect children={this.props.sentence} />;
    }
  }
}

export default MainUI;
