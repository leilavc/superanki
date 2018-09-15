import { connect } from 'react-redux';
import { setEdit,
	 setSentence,
	 clearSentence,
	 clearFocusWords,
	 setMain } from '../actions';
import MainUI from '../components/MainUI.js';

const mapStateToProps = (state) => ({
  mode: state.mode,
  sentence: state.sentence
});

const mapDispatchToProps = dispatch => ({
  moveToSelect : (children) => {
    dispatch(setSentence(children));
    dispatch(setEdit());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainUI);
