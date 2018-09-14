import { connect } from 'react-redux';
import WordList from '../components/WordList';

const mapStateToProps = (state, ownProps) => ({
  word_ids: state.focusWords
});

export default connect(
  mapStateToProps,
)(WordList);
