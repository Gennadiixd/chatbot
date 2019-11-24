import * as C from './consts';
import { initChat, sendMessage, sendEventReady } from '../../services/ChatService';
import { getTimeObject } from '../../utils/dateTimeHandler'

const resetError = () => {
	return {
		type: C.RESET_CHAT_ERROR,
	}
}

const setLoading = () => {
	return {
		type: C.SET_CHAT_LOADING,
	}
}

const setLoaded = () => {
	return {
		type: C.SET_CHAT_LOADED,
	}
}

const setError = (error) => {
	console.log(error);
	// TODO: research false activations was observed
	
	// return {
	// 	type: C.SET_CHAT_ERROR,
	// 	payload: error
	// }
}

const setInitialized = (boolean) => {
	return {
		type: C.SET_CHAT_INITIALIZED,
		payload: boolean
	}
}

const setCurrentUserMessage = (message) => {
	return {
		type: C.SET_CURRENT_USER_MESSAGE,
		payload: message
	}
}

const setCurrentBotMessage = (message) => {
	return {
		type: C.SET_CURRENT_BOT_MESSAGE,
		payload: message
	}
}

export const resetChatAC = () => {
	return {
		type: C.RESET_CHAT,
	}
}

export const initChatAC = () => {
	return (dispatch) => {
		dispatch(resetError());
		dispatch(setLoading());
		initChat()
			.then(() => {
				dispatch(setInitialized(true));
				dispatch(setLoaded());
			})
			.catch(error => {
				dispatch(setError(error));
				dispatch(setLoaded());
			})
	}
}

export const sendEventReadyAC = () => {
	return (dispatch) => {
		dispatch(setLoading());
		sendEventReady()
			.then((botMessage) => {
				dispatch(setCurrentBotMessage(
					{
						message: botMessage,
						...getTimeObject()
					}
				));
				dispatch(setLoaded());
			})
			.catch(error => {
				dispatch(setError(error));
				dispatch(setLoaded());
			})
	}
}

export const sendMessageAC = (userMessage) => {
	return (dispatch) => {
		dispatch(setCurrentUserMessage(
			{
				message: userMessage,
				...getTimeObject()
			}
		));
		dispatch(setLoading());
		sendMessage(userMessage)
			.then((botMessage) => {
				dispatch(setCurrentBotMessage(
					{
						message: botMessage,
						...getTimeObject()
					}
				));
				dispatch(setLoaded());
			})
			.catch(error => {
				dispatch(setError(error));
				dispatch(setLoaded());
			})
	}
}