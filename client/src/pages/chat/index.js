import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import WithLoadAndError from '../../hoc/withLoadAndError';

import { initChatAC } from '../../redux/chat/actions';
import View from './view';

const mapDispathcToProps = (dispatch) => {
	return {
		initChat: bindActionCreators(initChatAC, dispatch)
	}
}

const mapStateToProps = (state) => {
	return {
		error: state.chat.error,
		loading: state.chat.loading
	}
}

export default WithLoadAndError((connect(mapStateToProps, mapDispathcToProps)(View)))
// export default (connect(mapStateToProps, mapDispathcToProps)(View))