import { connect } from 'react-redux';
import { addFocusWord } from '../actions';
import Sentence from '../components/Sentence';

const mapStateToProps = (state, ownProps) => ({
  redWords: state.focusWords,
});

const mapDispatchToProps = dispatch => ({
  handleClick : (word_id) => {
    dispatch(addFocusWord(word_id));    
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sentence);
