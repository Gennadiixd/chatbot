import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import WithLoadAndError from '../../hoc/withLoadAndError';
import './chat.css';

import { sendEventReadyAC, sendMessageAC, resetChatAC } from '../../redux/chat/actions';
import View from './view';

const mapDispathcToProps = (dispatch) => {
	return {
		sendEventReady: bindActionCreators(sendEventReadyAC, dispatch),
		sendMessage: bindActionCreators(sendMessageAC, dispatch),
		resetChat: bindActionCreators(resetChatAC, dispatch)
	}
}

const mapStateToProps = (state) => {
	return {
		currentUserMessage: state.chat.currentUserMessage,
		currentBotMessage: state.chat.currentBotMessage, 
		isInitialized: state.chat.isInitialized,
		history: state.chat.history,
	}
}

export default WithLoadAndError((connect(mapStateToProps, mapDispathcToProps)(View)))