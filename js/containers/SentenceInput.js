import { connect } from 'react-redux';
import { addFocusWord } from '../actions';
import Sentence from '../components/Sentence';

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = dispatch => ({
  addFocusWord: id => dispatch(addFocusWord(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sentence);
