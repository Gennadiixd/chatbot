import * as C from './consts';
import { initChat, sendMessage, sendEventReady } from '../../services/ChatService'

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
	return {
		type: C.SET_CHAT_ERROR,
		payload: error
	}
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

export const initChatAC = () => {
	return (dispatch) => {
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
				dispatch(setCurrentBotMessage(botMessage));
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
		dispatch(setCurrentUserMessage(userMessage));
		dispatch(setLoading());
		sendMessage(userMessage)
			.then((botMessage) => {
				dispatch(setCurrentBotMessage(botMessage));
				dispatch(setLoaded());
			})
			.catch(error => {
				dispatch(setError(error));
				dispatch(setLoaded());
			})
		//если есть сообщения в редьюсере запушить их в историю
		//отправить сообщение в редьюсер
		//отправить сообщение на сервер
		//принять ответ от сервера в редьюсер
	}
}