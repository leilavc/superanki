import { connect } from 'react-redux';
import { addFocusWord } from '../actions';
import Sentence from '../components/Sentence';

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = dispatch => ({
  handleClick : (word_id) => (old_colors) => (new_color) => {
    console.log("Clicked");
    var new_colors = {...old_colors};
    new_colors[word_id] = new_color;
    this.setState({colors: new_colors});
    dispatch(addFocusWord(word_id));    
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sentence);
